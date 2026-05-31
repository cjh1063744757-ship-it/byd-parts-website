"""
搜索并替换 byd-parts.html 中所有 BYD Atto 3 (元Plus) 零件图片
运行：python tools/fetch_atto3_images.py
"""
import urllib.request
import urllib.parse
import json
import re
import time
import sys
import os

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Referer': 'https://www.taobao.com/',
}

HTML_FILE = os.path.join(os.path.dirname(__file__), '..', 'byd-parts.html')
JSON_FILE = os.path.join(os.path.dirname(__file__), 'atto3_images.json')

# 搜索词 → 零件编号映射
SEARCHES = [
    ("比亚迪元PLUS前保险杠总成",         ["AT3-BDY-001"]),
    ("比亚迪元PLUS后保险杠总成",         ["AT3-BDY-002"]),
    ("比亚迪元PLUS发动机舱盖",           ["AT3-BDY-003"]),
    ("比亚迪元PLUS左前翼子板",           ["AT3-BDY-004"]),
    ("比亚迪元PLUS右前翼子板",           ["AT3-BDY-005"]),
    ("比亚迪元PLUS行李箱盖尾门",         ["AT3-BDY-006"]),
    ("比亚迪元PLUS车顶行李架",           ["AT3-BDY-007"]),
    ("比亚迪元PLUS大灯总成LED矩阵",      ["AT3-LGT-001", "AT3-LGT-002"]),
    ("比亚迪元PLUS后尾灯总成",           ["AT3-LGT-003", "AT3-LGT-004"]),
    ("比亚迪元PLUS日间行车灯DRL",        ["AT3-LGT-005", "AT3-LGT-006"]),
    ("比亚迪元PLUS左前门总成",           ["AT3-DGM-001"]),
    ("比亚迪元PLUS右前门总成",           ["AT3-DGM-002"]),
    ("比亚迪元PLUS左后门总成",           ["AT3-DGM-003"]),
    ("比亚迪元PLUS右后门总成",           ["AT3-DGM-004"]),
    ("比亚迪元PLUS前挡风玻璃",           ["AT3-DGM-005"]),
    ("比亚迪元PLUS后视镜总成盲点",       ["AT3-DGM-006", "AT3-DGM-007"]),
    ("比亚迪元PLUS隐藏式门把手",         ["AT3-DGM-008"]),
    ("比亚迪元PLUS前刹车片套装",         ["AT3-BRK-001"]),
    ("比亚迪元PLUS后刹车片套装",         ["AT3-BRK-002"]),
    ("比亚迪元PLUS前刹车盘296mm",        ["AT3-BRK-003"]),
    ("比亚迪元PLUS后刹车盘",             ["AT3-BRK-004"]),
    ("比亚迪元PLUS电子驻车EPB执行器",    ["AT3-BRK-005"]),
    ("比亚迪元PLUS前减振器",             ["AT3-SUS-001", "AT3-SUS-002"]),
    ("比亚迪元PLUS后减振器",             ["AT3-SUS-003", "AT3-SUS-004"]),
    ("比亚迪元PLUS前副车架",             ["AT3-SUS-005"]),
    ("比亚迪元PLUS电动转向机EPS",        ["AT3-SUS-006"]),
    ("比亚迪元PLUS车载充电机OBC 11kW",   ["AT3-EV-001"]),
    ("比亚迪元PLUS DCDC转换器14V",       ["AT3-EV-002"]),
    ("比亚迪刀片电池BMS电池管理系统",    ["AT3-EV-003"]),
    ("比亚迪元PLUS充电口CCS2直流快充",   ["AT3-EV-004"]),
    ("比亚迪元PLUS驱动电机150kW",        ["AT3-EV-005"]),
    ("比亚迪元PLUS电机控制器MCU",        ["AT3-EV-006"]),
    ("比亚迪元PLUS电池热管理热泵",       ["AT3-COL-001"]),
    ("比亚迪元PLUS电动空调压缩机",       ["AT3-COL-002"]),
    ("比亚迪元PLUS冷却液膨胀壶",         ["AT3-COL-003"]),
    ("比亚迪元PLUS方向盘多功能加热",     ["AT3-INT-001"]),
    ("比亚迪元PLUS中控台12.8寸旋转屏",   ["AT3-INT-002"]),
    ("比亚迪元PLUS3D脚垫TPE全包围",      ["AT3-INT-003"]),
    ("比亚迪元PLUS铝合金轮毂18寸",       ["AT3-WHL-001"]),
    ("215/55R18 轮胎新能源电动车",       ["AT3-WHL-002"]),
    ("比亚迪元PLUS空调滤芯PM2.5",        ["AT3-MNT-001"]),
    ("比亚迪元PLUS雨刮器片套装",         ["AT3-MNT-002"]),
]


def search_taobao(query):
    encoded_q = urllib.parse.quote(query)
    url = f"https://s.taobao.com/search?q={encoded_q}&js=1&imgfile=&tab=all"
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            html = resp.read().decode('utf-8', errors='ignore')

        # g-search CDN 优先
        imgs = re.findall(r'https://g-search\d+\.alicdn\.com/img/bao/uploaded/[^"\'<\s]+\.(?:jpg|png)[^"\'<\s]*', html)
        if imgs:
            clean = re.split(r'_\d+x\d+', imgs[0])[0]
            if not re.search(r'\.(jpg|png)$', clean):
                clean += '_580x580q90.jpg'
            else:
                clean += '_580x580q90.jpg' if clean.endswith('.jpg') else '_580x580q90.jpg'
            return clean

        # 备用：imgextra alicdn
        imgs2 = re.findall(r'https://[^"\'<\s]+alicdn\.com[^"\'<\s]+(?:\.jpg|\.png)[^"\'<\s]*', html)
        product = [i for i in imgs2 if 'bao/uploaded' in i or 'imgextra' in i]
        if product:
            return product[0]

    except Exception as e:
        print(f"  ERROR: {e}", flush=True)
    return None


def replace_in_html(results):
    with open(HTML_FILE, 'r', encoding='utf-8') as f:
        content = f.read()

    replaced = 0
    _M_PREFIX = r"_M\+'\s*\+"  # matches  _M+'xxx/filename'

    for part_id, new_url in results.items():
        # 匹配形如  'AT3-BDY-001': _M+'path/file.webp',
        pattern = rf"('{re.escape(part_id)}':\s*)_M\+'[^']+'"
        replacement = rf"\g<1>'{new_url}'"
        new_content, n = re.subn(pattern, replacement, content)
        if n > 0:
            content = new_content
            replaced += n
        else:
            print(f"  WARNING: pattern not found for {part_id}", flush=True)

    with open(HTML_FILE, 'w', encoding='utf-8') as f:
        f.write(content)

    return replaced


def main():
    print(f"=== BYD Atto 3 图片替换脚本 ===", flush=True)
    print(f"共 {sum(len(v) for _, v in SEARCHES)} 个零件，{len(SEARCHES)} 次搜索\n", flush=True)

    # 读取已有进度
    results = {}
    if os.path.exists(JSON_FILE):
        with open(JSON_FILE, 'r', encoding='utf-8') as f:
            results = json.load(f)
        print(f"已加载 {len(results)} 条缓存结果", flush=True)

    total = len(SEARCHES)
    for i, (query, part_ids) in enumerate(SEARCHES, 1):
        # 跳过已处理的
        if all(pid in results for pid in part_ids):
            print(f"[{i}/{total}] 跳过(已缓存): {query}", flush=True)
            continue

        print(f"[{i}/{total}] 搜索: {query}", flush=True)
        img_url = search_taobao(query)

        if img_url:
            print(f"  → {img_url[:90]}", flush=True)
            for pid in part_ids:
                results[pid] = img_url
        else:
            print(f"  → 未找到，保留原图", flush=True)
            # 不写入results，保留原有_M+图片

        # 保存进度
        with open(JSON_FILE, 'w', encoding='utf-8') as f:
            json.dump(results, f, ensure_ascii=False, indent=2)

        time.sleep(0.8)

    print(f"\n搜索完成，共获取 {len(results)} 张图片URL", flush=True)

    # 替换HTML
    print("\n开始替换 byd-parts.html ...", flush=True)
    n = replace_in_html(results)
    print(f"✓ 替换完成：{n} 处已更新", flush=True)

    # 验证
    with open(HTML_FILE, 'r', encoding='utf-8') as f:
        content = f.read()
    remaining = len(re.findall(r"'AT3-[^']+': _M\+'", content))
    print(f"✓ 剩余未替换的 AT3 图片: {remaining} 个", flush=True)


if __name__ == '__main__':
    main()
