"""
批量从淘宝搜索比亚迪唐EV零件图片URL
运行方式: python fetch_tang_ev_images.py
"""
import urllib.request
import urllib.parse
import json
import re
import time

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Referer': 'https://www.taobao.com/',
}

# 搜索词 → 零件编号映射
SEARCHES = [
    ("比亚迪唐EV前保险杠总成",     ["TNG-BDY-001"]),
    ("比亚迪唐EV后保险杠总成",     ["TNG-BDY-002"]),
    ("比亚迪唐EV发动机盖",         ["TNG-BDY-003"]),
    ("比亚迪唐EV翼子板",           ["TNG-BDY-004", "TNG-BDY-005"]),
    ("比亚迪唐EV电动尾门总成",     ["TNG-BDY-006"]),
    ("比亚迪唐EV迎宾踏板",         ["TNG-BDY-007"]),
    ("比亚迪唐EV大灯总成",         ["TNG-LGT-001", "TNG-LGT-002"]),
    ("比亚迪唐EV后尾灯贯穿灯带",   ["TNG-LGT-003"]),
    ("比亚迪唐EV后尾灯总成",       ["TNG-LGT-004", "TNG-LGT-005"]),
    ("比亚迪唐EV前车门总成",       ["TNG-DGM-001", "TNG-DGM-002"]),
    ("比亚迪唐EV后车门总成",       ["TNG-DGM-003", "TNG-DGM-004"]),
    ("比亚迪唐EV侧窗玻璃第三排",   ["TNG-DGM-005"]),
    ("比亚迪唐EV全景天窗玻璃",     ["TNG-DGM-006"]),
    ("比亚迪唐EV后视镜摄像头",     ["TNG-DGM-007"]),
    ("比亚迪唐EV刹车卡钳前",       ["TNG-BRK-001"]),
    ("比亚迪唐EV刹车片前",         ["TNG-BRK-002"]),
    ("比亚迪唐EV刹车片后",         ["TNG-BRK-003"]),
    ("比亚迪唐EV刹车盘356mm",      ["TNG-BRK-004"]),
    ("比亚迪唐EV空气弹簧前",       ["TNG-SUS-001"]),
    ("比亚迪唐EV减振器前",         ["TNG-SUS-002"]),
    ("比亚迪唐EV减振器后",         ["TNG-SUS-003"]),
    ("比亚迪唐EV前副车架",         ["TNG-SUS-004"]),
    ("比亚迪唐EV前驱电机",         ["TNG-EV-001"]),
    ("比亚迪唐EV后驱电机",         ["TNG-EV-002"]),
    ("比亚迪唐EV车载充电机OBC",    ["TNG-EV-003"]),
    ("比亚迪唐刀片电池BMS",        ["TNG-EV-004"]),
    ("比亚迪DCDC转换器",           ["TNG-EV-005"]),
    ("比亚迪V2L对外放电模块",      ["TNG-EV-006"]),
    ("比亚迪唐EV热泵系统",         ["TNG-COL-001"]),
    ("比亚迪电子冷却水泵",         ["TNG-COL-002"]),
    ("比亚迪唐EV第二排商务座椅",   ["TNG-INT-001"]),
    ("比亚迪唐EV第三排座椅",       ["TNG-INT-002"]),
    ("比亚迪唐EV中控屏15.6寸",     ["TNG-INT-003"]),
    ("比亚迪唐EV脚垫7座",          ["TNG-INT-004"]),
    ("比亚迪唐EV铝合金轮毂20寸",   ["TNG-WHL-001"]),
    ("比亚迪唐EV轮胎265/45R20",    ["TNG-WHL-002"]),
    ("比亚迪空调滤芯HEPA",         ["TNG-MNT-001"]),
    ("DOT4刹车油汽车",             ["TNG-MNT-002"]),
]

def search_taobao(query):
    """搜索淘宝并返回第一个产品图片URL"""
    encoded_q = urllib.parse.quote(query)
    url = f"https://s.taobao.com/search?q={encoded_q}&js=1&imgfile=&tab=all"

    req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            html = resp.read().decode('utf-8', errors='ignore')

        # 找产品图片 (g-search CDN)
        imgs = re.findall(r'https://g-search\d+\.alicdn\.com/img/bao/uploaded/[^"\'<\s]+\.jpg[^"\'<\s]*', html)
        if imgs:
            # 清理URL，移除尺寸后缀
            clean = imgs[0].split('_580x580')[0].split('_200x200')[0]
            if not clean.endswith('.jpg'):
                clean += '_580x580q90.jpg'
            return clean

        # 备用：找其他格式
        imgs2 = re.findall(r'https://[^"\'<\s]+alicdn\.com[^"\'<\s]+(?:\.jpg|\.png)[^"\'<\s]*', html)
        product_imgs = [i for i in imgs2 if 'bao/uploaded' in i or 'imgextra' in i]
        if product_imgs:
            return product_imgs[0]

    except Exception as e:
        print(f"  ERROR: {e}")
    return None

def main():
    results = {}

    for query, part_ids in SEARCHES:
        print(f"搜索: {query}")
        img_url = search_taobao(query)

        if img_url:
            print(f"  → {img_url[:80]}...")
            for pid in part_ids:
                results[pid] = img_url
        else:
            print(f"  → 未找到图片，使用占位符")
            for pid in part_ids:
                results[pid] = f"https://via.placeholder.com/400x400?text={pid}"

        time.sleep(0.5)  # 避免请求过快

    # 输出结果
    print("\n\n===== 结果 =====")
    print("const _IMG_TANG = {")
    for pid, url in sorted(results.items()):
        print(f"  '{pid}': '{url}',")
    print("};")

    # 保存到文件
    with open('tang_ev_images.json', 'w', encoding='utf-8') as f:
        json.dump(results, f, ensure_ascii=False, indent=2)
    print("\n结果已保存到 tang_ev_images.json")

if __name__ == '__main__':
    main()
