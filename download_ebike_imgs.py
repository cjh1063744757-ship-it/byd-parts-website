#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
重新下载全部电动车产品图片
输出到: images/ebikes/  (01_m.jpg / 01_a.jpg / 01_b.jpg ...)
最大宽度 1200px，保持纵横比
"""
import os, io, time, urllib.request
from PIL import Image

OUT = os.path.join(os.path.dirname(__file__), "images", "ebikes")
os.makedirs(OUT, exist_ok=True)

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
    "Accept": "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.9",
    "Referer": "https://engwe.com/",
}

# 每款产品 3 张图：[主图, 角度1, 角度2]
IMAGES = {
    # 01 ENGWE EP-2 Boost
    "01": [
        "https://engwe.com/cdn/shop/files/EP-2_BOOST_2_9f545fbe-47b9-4c7f-94bd-a0eaa27df4ae.jpg",
        "https://engwe.com/cdn/shop/files/EP-2BOOST_1.jpg",
        "https://engwe.com/cdn/shop/files/EP-2BOOST_3.jpg",
    ],
    # 02 ENGWE Engine Pro 2.0
    "02": [
        "https://engwe.com/cdn/shop/files/Engine_Pro_2_3.jpg",
        "https://engwe.com/cdn/shop/files/Engine_pro_2.0.jpg",
        "https://engwe.com/cdn/shop/files/Engine_Pro_2_4.jpg",
    ],
    # 03 ENGWE Engine Pro 3.0 Boost
    "03": [
        "https://cdn.shopify.com/s/files/1/0683/8560/3641/files/EnginePro3.0Boost_4.jpg",
        "https://cdn.shopify.com/s/files/1/0683/8560/3641/files/Engine_Pro_3.0_Boost_07.jpg",
        "https://cdn.shopify.com/s/files/1/0683/8560/3641/files/EnginePro3.0Boost_2.jpg",
    ],
    # 04 ENGWE L20 Boost
    "04": [
        "https://engwe.com/cdn/shop/files/L20_Boost_5c3547c0-d49c-4f61-8065-84241cc7bcf5.png",
        "https://engwe.com/cdn/shop/files/L20_BOOST_RED_1.jpg",
        "https://engwe.com/cdn/shop/files/L20_Boost_Black_2.jpg",
    ],
    # 05 ENGWE LE20
    "05": [
        "https://engwe.com/cdn/shop/files/LE20_Grey.jpg",
        "https://engwe.com/cdn/shop/files/LE20_ca0659fc-228d-4642-9862-7dc3f43439a2.jpg",
        "https://engwe.com/cdn/shop/files/LE20_Single_Battery_Grey_Cargo.jpg",
    ],
    # 06 ENGWE M20
    "06": [
        "https://engwe.com/cdn/shop/files/M20.png",
        "https://engwe.com/cdn/shop/files/M20_35d8a8c4-9cf3-4691-a61d-060fbac60c92.jpg",
        "https://engwe.com/cdn/shop/files/20_2c2115a8-a5b0-40d9-a94f-00482df99c86.png",
    ],
    # 07 Himiway A7 Commuter
    "07": [
        "https://himiwaybike.com/cdn/shop/files/A7-red_3.png",
        "https://himiwaybike.com/cdn/shop/files/A7-blue_4.png",
        "https://himiwaybike.com/cdn/shop/files/A7-white_3.png",
    ],
    # 08 ENGWE E26
    "08": [
        "https://engwe.com/cdn/shop/files/E26.png",
        "https://engwe.com/cdn/shop/files/E26_Blue.png",
        "https://engwe.com/cdn/shop/files/E26_3.jpg",
    ],
    # 09 ENGWE X26  ← 用 us.engwe.com 的 URL
    "09": [
        "https://us.engwe.com/cdn/shop/files/x26_363f9264-933f-47a7-97d6-1a8d1665ba9b.jpg",
        "https://us.engwe.com/cdn/shop/files/X26_6bd3a19b-4fb9-41a6-b0d0-31fa4fd8adeb.jpg",
        "https://us.engwe.com/cdn/shop/files/x26_0818399d-b6f6-4157-9c34-f3742f50c152.jpg",
    ],
    # 10 Himiway D5 Zebra
    "10": [
        "https://himiwaybike.com/cdn/shop/files/D5SOwhite.jpg",
        "https://himiwaybike.com/cdn/shop/files/D5Zebra_1.jpg",
        "https://himiwaybike.com/cdn/shop/files/D5Zebra_2.jpg",
    ],
    # 11 Himiway D5 2.0 Full Suspension
    "11": [
        "https://himiwaybike.com/cdn/shop/files/d5-2.0-20_03.png",
        "https://himiwaybike.com/cdn/shop/files/d5-2.0-20_24.png",
        "https://himiwaybike.com/cdn/shop/files/d5-2-20-main.jpg",
    ],
    # 12 ENGWE N1 Air
    "12": [
        "https://engwe.com/cdn/shop/files/1_29bbf176-25fe-40de-b4b1-9cf1eb87ae04.jpg",
        "https://engwe.com/cdn/shop/files/03187cfe8fbdb84aa703090166f2833d.jpg",
        "https://engwe.com/cdn/shop/files/2_1a191a38-34f8-4be8-8e82-76cc37e62fff.jpg",
    ],
    # 13 ENGWE P275 SE
    "13": [
        "https://engwe.com/cdn/shop/files/P275SE03_220573d7-23f8-489d-ad7d-898d68acb251.jpg",
        "https://engwe.com/cdn/shop/files/P275SE_1_f22ccf07-8001-48ce-bd70-103870a9944c.jpg",
        "https://engwe.com/cdn/shop/files/P275SE_Blue_1.jpg",
    ],
}

SLOTS = ["m", "a", "b"]
MAX_W = 1200   # 网页用，最大宽度 1200px

def download(url, save_path):
    headers = dict(HEADERS)
    if "himiway" in url:
        headers["Referer"] = "https://himiwaybike.com/"
    elif "us.engwe" in url:
        headers["Referer"] = "https://us.engwe.com/"
    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req, timeout=20) as r:
        data = r.read()
    img = Image.open(io.BytesIO(data)).convert("RGB")
    # 等比缩放到最大 1200px 宽
    w, h = img.size
    if w > MAX_W:
        img = img.resize((MAX_W, int(h * MAX_W / w)), Image.LANCZOS)
    img.save(save_path, "JPEG", quality=88, optimize=True)
    return img.size, len(data) // 1024

ok_count = 0
fail_count = 0

print(f"{'='*55}")
print(f"  下载电动车产品图片  →  images/ebikes/")
print(f"{'='*55}")

for num, urls in IMAGES.items():
    for slot, url in zip(SLOTS, urls):
        fname = f"{num}_{slot}.jpg"
        fpath = os.path.join(OUT, fname)
        try:
            size, kb_orig = download(url, fpath)
            kb_saved = os.path.getsize(fpath) // 1024
            print(f"  ✓ {fname}  {size[0]}×{size[1]}px  ({kb_saved}KB)  ← {kb_orig}KB原始")
            ok_count += 1
        except Exception as e:
            print(f"  ✗ {fname}  FAIL: {e}")
            fail_count += 1
        time.sleep(0.4)
    print()

print(f"{'='*55}")
print(f"  完成: {ok_count} 成功 / {fail_count} 失败")
print(f"  保存路径: {OUT}")
print(f"{'='*55}")
