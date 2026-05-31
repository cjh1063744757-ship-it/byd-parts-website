# image-tools — 产品图片处理工具

## 功能概述

此 Skill 帮助你管理独立站的产品图片，支持以下操作：

1. **图片搜索** — 从阿里巴巴国际站 / 中国制造网 CDN 搜索并验证真实产品图片 URL
2. **图片下载与优化** — 批量下载图片，自动压缩至 WebP 格式，适配网页速度
3. **批量处理** — 统一尺寸、加水印、生成缩略图
4. **AI 图片生成** — 调用 Pollinations AI (免费) 或 OpenAI DALL-E 生成产品展示图

---

## 工具脚本

核心脚本位于 `tools/image_processor.py`，使用 Pillow 库。

---

## 操作指南

### 🔍 操作一：验证 CDN 图片 URL

```
用户说：验证这些图片 URL 是否可访问
```

Claude 应执行：
```bash
python tools/image_processor.py verify --urls-file tools/urls.txt
```

或对单个 URL：
```bash
python tools/image_processor.py verify --url "https://..."
```

---

### 📥 操作二：批量下载并转换为 WebP

```
用户说：下载优化这些产品图片
```

Claude 应执行：
```bash
python tools/image_processor.py download \
  --urls-file tools/urls.txt \
  --output-dir images/products \
  --size 800x800 \
  --format webp \
  --quality 85
```

输出：`images/products/` 目录内的优化过 WebP 文件。

---

### 🖼️ 操作三：批量添加水印

```
用户说：给图片加上公司水印
```

Claude 应执行：
```bash
python tools/image_processor.py watermark \
  --input-dir images/products \
  --output-dir images/watermarked \
  --text "CMTOWN DEALER" \
  --opacity 0.3
```

---

### ✂️ 操作四：生成缩略图

```
用户说：生成缩略图
```

Claude 应执行：
```bash
python tools/image_processor.py thumbnail \
  --input-dir images/products \
  --output-dir images/thumbnails \
  --size 300x300
```

---

### 🤖 操作五：AI 生成产品图片（Pollinations AI，免费）

```
用户说：帮我生成一张涡轮增压器的产品图
```

Claude 应执行：
```bash
python tools/image_processor.py generate \
  --prompt "HOWO truck turbocharger spare part, white background, product photography, high quality" \
  --output images/generated/turbocharger.png \
  --width 800 \
  --height 800
```

Pollinations AI 端点：`https://image.pollinations.ai/prompt/{encoded_prompt}`
无需 API Key，完全免费。

---

### 🔎 操作六：从阿里巴巴/中国制造 CDN 搜索图片

当用户需要找某个零件的真实产品图片时，Claude 应：

1. 先用 WebSearch / WebFetch 搜索：`site:alibaba.com "HOWO [part name] spare part"`
2. 从搜索结果页面提取 `s.alicdn.com/@sc04/kf/` 格式的图片 URL
3. 或搜索 `site:made-in-china.com "HOWO [part name]"` 提取 `image.made-in-china.com/` 格式 URL
4. 用 verify 命令验证 URL 可访问
5. 返回可用的 CDN URL 列表，更新对应 HTML 文件的 `_IMG` 对象

---

## 参数速查

| 子命令 | 常用参数 | 说明 |
|--------|---------|------|
| `verify` | `--url` / `--urls-file` | 验证 URL 可访问性 |
| `download` | `--urls-file`, `--output-dir`, `--size`, `--format`, `--quality` | 下载并压缩 |
| `watermark` | `--input-dir`, `--output-dir`, `--text`, `--opacity` | 加水印 |
| `thumbnail` | `--input-dir`, `--output-dir`, `--size` | 生成缩略图 |
| `generate` | `--prompt`, `--output`, `--width`, `--height` | AI 生成图片 |
| `convert` | `--input-dir`, `--output-dir`, `--format`, `--quality` | 格式转换 |
| `info` | `--input-dir` | 显示图片信息 |

---

## 注意事项

- 阿里巴巴 CDN (`s.alicdn.com`) 和中国制造网 CDN (`image.made-in-china.com`) 图片无需下载即可直接在 HTML 中引用
- 如需本地存储图片，下载后上传到 Netlify 的 `images/` 目录
- Pollinations AI 生成图片质量适合展示，不适合高精度场景
- 如需更高质量 AI 图片，可配置 OpenAI API Key 使用 DALL-E 3
