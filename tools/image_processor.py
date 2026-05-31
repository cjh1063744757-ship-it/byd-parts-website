#!/usr/bin/env python3
"""
Image Processor Tool for CMTOWN DEALER
Handles: verify, download, watermark, thumbnail, generate, convert, info
Usage: python tools/image_processor.py <subcommand> [options]
"""

import argparse
import os
import sys
import urllib.request
import urllib.parse
import urllib.error
import json
from pathlib import Path

# Fix Windows console encoding for emoji / unicode output
if sys.platform == "win32":
    import io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
    sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding="utf-8", errors="replace")

# ---------------------------------------------------------------------------
# Lazy Pillow import (not needed for verify/generate)
# ---------------------------------------------------------------------------
def _pil():
    try:
        from PIL import Image, ImageDraw, ImageFont, ImageFilter
        return Image, ImageDraw, ImageFont, ImageFilter
    except ImportError:
        print("[ERROR] Pillow not installed. Run: pip install pillow")
        sys.exit(1)


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------
HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/124.0.0.0 Safari/537.36"
    )
}

def _get(url, timeout=10):
    req = urllib.request.Request(url, headers=HEADERS)
    return urllib.request.urlopen(req, timeout=timeout)

def _make_dir(path):
    Path(path).mkdir(parents=True, exist_ok=True)

def _load_urls(urls_file):
    with open(urls_file, "r", encoding="utf-8") as f:
        return [line.strip() for line in f if line.strip() and not line.startswith("#")]

def _parse_size(size_str, default=(800, 800)):
    """Parse '800x800' -> (800, 800)"""
    if not size_str:
        return default
    try:
        w, h = size_str.lower().split("x")
        return int(w), int(h)
    except Exception:
        return default


# ---------------------------------------------------------------------------
# Sub-commands
# ---------------------------------------------------------------------------

def cmd_verify(args):
    """Verify that image URLs are accessible."""
    urls = []
    if args.url:
        urls = [args.url]
    elif args.urls_file:
        urls = _load_urls(args.urls_file)
    else:
        print("[ERROR] Provide --url or --urls-file")
        sys.exit(1)

    ok, fail = [], []
    for url in urls:
        try:
            with _get(url, timeout=8) as resp:
                ct = resp.headers.get("Content-Type", "")
                size = resp.headers.get("Content-Length", "?")
                print(f"  ✅  {url[:80]}  [{ct}  {size}B]")
                ok.append(url)
        except Exception as e:
            print(f"  ❌  {url[:80]}  -> {e}")
            fail.append(url)

    print(f"\n验证完成: {len(ok)} 可用, {len(fail)} 失败")
    if fail:
        print("\n失败的 URL:")
        for u in fail:
            print(f"  {u}")


def cmd_download(args):
    """Download images, resize and convert format."""
    Image, ImageDraw, ImageFont, _ = _pil()
    urls = _load_urls(args.urls_file)
    out_dir = args.output_dir or "images/products"
    _make_dir(out_dir)
    size = _parse_size(args.size)
    fmt = (args.format or "webp").lower()
    quality = args.quality or 85

    for i, url in enumerate(urls, 1):
        fname = Path(url.split("?")[0]).name or f"image_{i}"
        stem = Path(fname).stem
        out_path = os.path.join(out_dir, f"{stem}.{fmt}")
        print(f"[{i}/{len(urls)}] {fname} -> {out_path}")
        try:
            with _get(url, timeout=15) as resp:
                data = resp.read()
            import io
            img = Image.open(io.BytesIO(data)).convert("RGBA" if fmt == "webp" else "RGB")
            img = img.resize(size, Image.LANCZOS)
            if fmt in ("jpg", "jpeg"):
                img = img.convert("RGB")
                img.save(out_path, "JPEG", quality=quality, optimize=True)
            elif fmt == "webp":
                img.save(out_path, "WEBP", quality=quality, method=6)
            elif fmt == "png":
                img.save(out_path, "PNG", optimize=True)
            else:
                img.save(out_path)
            stat = os.path.getsize(out_path)
            print(f"       saved {stat//1024}KB")
        except Exception as e:
            print(f"       [FAIL] {e}")

    print(f"\n下载完成 -> {out_dir}/")


def cmd_watermark(args):
    """Add text watermark to images."""
    Image, ImageDraw, ImageFont, _ = _pil()
    in_dir = args.input_dir or "images/products"
    out_dir = args.output_dir or "images/watermarked"
    text = args.text or "CMTOWN DEALER"
    opacity = int((args.opacity or 0.3) * 255)
    _make_dir(out_dir)

    exts = {".jpg", ".jpeg", ".png", ".webp"}
    files = [f for f in Path(in_dir).iterdir() if f.suffix.lower() in exts]
    if not files:
        print(f"[WARN] No images found in {in_dir}")
        return

    for img_path in files:
        out_path = os.path.join(out_dir, img_path.name)
        print(f"  watermarking {img_path.name} -> {out_path}")
        try:
            img = Image.open(img_path).convert("RGBA")
            w, h = img.size

            # Create watermark layer
            wm = Image.new("RGBA", img.size, (0, 0, 0, 0))
            draw = ImageDraw.Draw(wm)

            # Try to load a font, fall back to default
            font_size = max(16, w // 20)
            try:
                font = ImageFont.truetype("arial.ttf", font_size)
            except Exception:
                try:
                    font = ImageFont.truetype(
                        "C:/Windows/Fonts/arial.ttf", font_size
                    )
                except Exception:
                    font = ImageFont.load_default()

            # Calculate text position (bottom-right)
            bbox = draw.textbbox((0, 0), text, font=font)
            tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
            x = w - tw - 10
            y = h - th - 10
            # Shadow
            draw.text((x + 1, y + 1), text, font=font, fill=(0, 0, 0, opacity // 2))
            draw.text((x, y), text, font=font, fill=(255, 255, 255, opacity))

            out_img = Image.alpha_composite(img, wm)
            suffix = img_path.suffix.lower()
            if suffix in (".jpg", ".jpeg"):
                out_img = out_img.convert("RGB")
                out_img.save(out_path, "JPEG", quality=90)
            elif suffix == ".webp":
                out_img.save(out_path, "WEBP", quality=90)
            else:
                out_img.save(out_path)
        except Exception as e:
            print(f"       [FAIL] {e}")

    print(f"\n水印完成 -> {out_dir}/")


def cmd_thumbnail(args):
    """Generate thumbnails from images."""
    Image, _, _, _ = _pil()
    in_dir = args.input_dir or "images/products"
    out_dir = args.output_dir or "images/thumbnails"
    size = _parse_size(args.size, (300, 300))
    _make_dir(out_dir)

    exts = {".jpg", ".jpeg", ".png", ".webp"}
    files = [f for f in Path(in_dir).iterdir() if f.suffix.lower() in exts]
    if not files:
        print(f"[WARN] No images found in {in_dir}")
        return

    for img_path in files:
        out_path = os.path.join(out_dir, img_path.stem + ".webp")
        print(f"  {img_path.name} -> {out_path}")
        try:
            img = Image.open(img_path).convert("RGBA")
            img.thumbnail(size, Image.LANCZOS)
            # Center-crop to exact size
            bg = Image.new("RGBA", size, (255, 255, 255, 255))
            offset = ((size[0] - img.width) // 2, (size[1] - img.height) // 2)
            bg.paste(img, offset, img)
            bg.save(out_path, "WEBP", quality=80)
        except Exception as e:
            print(f"       [FAIL] {e}")

    print(f"\n缩略图完成 -> {out_dir}/")


def cmd_generate(args):
    """Generate AI product image via Pollinations AI (free, no API key)."""
    prompt = args.prompt
    if not prompt:
        print("[ERROR] Provide --prompt")
        sys.exit(1)

    width = args.width or 800
    height = args.height or 800
    output = args.output or f"images/generated/{prompt[:30].replace(' ', '_')}.png"
    _make_dir(str(Path(output).parent))

    # Pollinations AI — free, no key required
    encoded = urllib.parse.quote(prompt)
    url = f"https://image.pollinations.ai/prompt/{encoded}?width={width}&height={height}&nologo=true"

    print(f"🤖 正在生成图片...")
    print(f"   Prompt: {prompt}")
    print(f"   尺寸: {width}x{height}")
    print(f"   API: Pollinations AI (免费)")

    try:
        with _get(url, timeout=60) as resp:
            data = resp.read()
        with open(output, "wb") as f:
            f.write(data)
        size_kb = len(data) // 1024
        print(f"✅ 生成成功！保存到: {output} ({size_kb}KB)")

        # Also open in browser if possible
        try:
            import subprocess
            subprocess.Popen(["explorer", output.replace("/", "\\")])
        except Exception:
            pass
    except Exception as e:
        print(f"❌ 生成失败: {e}")
        print(f"\n💡 可以直接在浏览器打开此链接查看：\n   {url}")


def cmd_convert(args):
    """Batch convert images to target format."""
    Image, _, _, _ = _pil()
    in_dir = args.input_dir or "images/products"
    out_dir = args.output_dir or "images/converted"
    fmt = (args.format or "webp").lower()
    quality = args.quality or 85
    _make_dir(out_dir)

    exts = {".jpg", ".jpeg", ".png", ".webp", ".bmp", ".tiff", ".gif"}
    files = [f for f in Path(in_dir).iterdir() if f.suffix.lower() in exts]
    print(f"找到 {len(files)} 个图片文件，转换为 {fmt.upper()}...")

    for img_path in files:
        out_path = os.path.join(out_dir, img_path.stem + f".{fmt}")
        try:
            img = Image.open(img_path)
            if fmt in ("jpg", "jpeg"):
                img = img.convert("RGB")
                img.save(out_path, "JPEG", quality=quality, optimize=True)
            elif fmt == "webp":
                img = img.convert("RGBA")
                img.save(out_path, "WEBP", quality=quality, method=6)
            elif fmt == "png":
                img.save(out_path, "PNG", optimize=True)
            else:
                img.save(out_path)
            old_sz = img_path.stat().st_size // 1024
            new_sz = os.path.getsize(out_path) // 1024
            print(f"  ✅ {img_path.name} -> {img_path.stem}.{fmt}  ({old_sz}KB -> {new_sz}KB)")
        except Exception as e:
            print(f"  ❌ {img_path.name}: {e}")

    print(f"\n转换完成 -> {out_dir}/")


def cmd_info(args):
    """Show info about images in a directory."""
    Image, _, _, _ = _pil()
    in_dir = args.input_dir or "images/products"
    exts = {".jpg", ".jpeg", ".png", ".webp", ".bmp", ".tiff"}
    files = sorted(Path(in_dir).iterdir())
    files = [f for f in files if f.suffix.lower() in exts]

    if not files:
        print(f"没有找到图片文件: {in_dir}")
        return

    total_size = 0
    print(f"\n{'文件名':<40} {'尺寸':<12} {'模式':<8} {'大小':>8}")
    print("-" * 72)
    for f in files:
        try:
            img = Image.open(f)
            sz = f.stat().st_size
            total_size += sz
            print(f"  {f.name:<38} {str(img.size):<12} {img.mode:<8} {sz//1024:>6}KB")
        except Exception as e:
            print(f"  {f.name:<38} [error: {e}]")

    print("-" * 72)
    print(f"共 {len(files)} 个文件，总大小: {total_size//1024}KB ({total_size//1024//1024}MB)")


# ---------------------------------------------------------------------------
# CLI parser
# ---------------------------------------------------------------------------
def build_parser():
    p = argparse.ArgumentParser(
        prog="image_processor",
        description="CMTOWN DEALER Image Processing Tool",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""示例:
  python tools/image_processor.py verify --url https://s.alicdn.com/@sc04/kf/H123.jpg
  python tools/image_processor.py generate --prompt "HOWO turbocharger white background"
  python tools/image_processor.py download --urls-file tools/urls.txt --size 800x800
  python tools/image_processor.py watermark --input-dir images/products --text "CMTOWN"
  python tools/image_processor.py thumbnail --input-dir images/products
  python tools/image_processor.py convert --input-dir images/raw --format webp
  python tools/image_processor.py info --input-dir images/products
""",
    )
    sub = p.add_subparsers(dest="cmd")

    # verify
    v = sub.add_parser("verify", help="验证图片 URL 可访问性")
    v.add_argument("--url", help="单个图片 URL")
    v.add_argument("--urls-file", help="包含多个 URL 的文件（每行一个）")

    # download
    d = sub.add_parser("download", help="下载并优化图片")
    d.add_argument("--urls-file", required=True, help="URL 列表文件")
    d.add_argument("--output-dir", default="images/products", help="输出目录")
    d.add_argument("--size", default="800x800", help="目标尺寸 WxH，如 800x800")
    d.add_argument("--format", default="webp", choices=["webp", "jpg", "png"])
    d.add_argument("--quality", type=int, default=85, help="压缩质量 1-100")

    # watermark
    w = sub.add_parser("watermark", help="批量添加水印")
    w.add_argument("--input-dir", default="images/products")
    w.add_argument("--output-dir", default="images/watermarked")
    w.add_argument("--text", default="CMTOWN DEALER", help="水印文字")
    w.add_argument("--opacity", type=float, default=0.3, help="水印不透明度 0-1")

    # thumbnail
    t = sub.add_parser("thumbnail", help="生成缩略图")
    t.add_argument("--input-dir", default="images/products")
    t.add_argument("--output-dir", default="images/thumbnails")
    t.add_argument("--size", default="300x300")

    # generate
    g = sub.add_parser("generate", help="AI 生成产品图片（Pollinations AI）")
    g.add_argument("--prompt", required=True, help="图片描述（英文效果更好）")
    g.add_argument("--output", help="输出文件路径")
    g.add_argument("--width", type=int, default=800)
    g.add_argument("--height", type=int, default=800)

    # convert
    c = sub.add_parser("convert", help="批量格式转换")
    c.add_argument("--input-dir", default="images/raw")
    c.add_argument("--output-dir", default="images/converted")
    c.add_argument("--format", default="webp", choices=["webp", "jpg", "png"])
    c.add_argument("--quality", type=int, default=85)

    # info
    i = sub.add_parser("info", help="显示图片文件信息")
    i.add_argument("--input-dir", default="images/products")

    return p


CMD_MAP = {
    "verify": cmd_verify,
    "download": cmd_download,
    "watermark": cmd_watermark,
    "thumbnail": cmd_thumbnail,
    "generate": cmd_generate,
    "convert": cmd_convert,
    "info": cmd_info,
}


def main():
    parser = build_parser()
    args = parser.parse_args()
    if not args.cmd:
        parser.print_help()
        sys.exit(0)
    fn = CMD_MAP.get(args.cmd)
    if not fn:
        parser.print_help()
        sys.exit(1)
    fn(args)


if __name__ == "__main__":
    main()
