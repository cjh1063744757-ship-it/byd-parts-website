"""Replace Unsplash image URLs in car-accessories.html with Alibaba CDN URLs."""
import re

# Alibaba CDN base
CDN = "https://s.alicdn.com/@sc04/kf/"

# Mapping: Unsplash photo ID → Alibaba CDN file ID
# Large (main image) uses _960x960.jpg, thumb uses _300x300.jpg
PHOTO_MAP = {
    # ── Phone Holders ──
    "photo-1536825591064-574efec257f2": "H30deb8c0e65446e191c5fa94f17032c4d.png",
    "photo-1619741982598-7cb8a7959476": "H1ef6a172ab53496f8ada53db0968e3bbW.jpg",
    "photo-1593465678160-f99a8371fcf6": "Hbf9c48ec5241468a9593bb3e761999c13.jpg",
    "photo-1666739165788-ad4146aad813": "Hbf9c48ec5241468a9593bb3e761999c13.jpg",
    "photo-1618135034340-d9badcd6f5d7": "H30deb8c0e65446e191c5fa94f17032c4d.png",
    # ── Car Fresheners ──
    "photo-1649367970368-97333b4eb8ff": "H8347b1033e7e4fe180993e3c5420b8f5R.jpg",
    "photo-1615192559550-100bd8c17b5f": "H1c32a063c1ac41a8a659a90c9696edfcZ.jpg",
    "photo-1617484073939-432438d12324": "Ha9b6ae59637c4e0cabfbcadf1ec4684fZ.jpg",
    "photo-1772253942646-8de2cd05fc9f": "H8347b1033e7e4fe180993e3c5420b8f5R.jpg",
    "photo-1762306857976-cbc8d774f628": "H1c32a063c1ac41a8a659a90c9696edfcZ.jpg",
    # ── Steering Wheel ──
    "photo-1542834506-979b3951bc9a": "H7377edbc27e94055a7d4cb98229f11a1A.jpg",
    "photo-1554475130-b9114b7e0aac": "Hb475c7a4d63d4036aa78aeeeeb11bd76u.jpg",
    "photo-1713027420494-00476eac798a": "H7c84a5855b9140408946ae5286f3279br.jpg",
    "photo-1681857239369-15ebd70bdad9": "Hb475c7a4d63d4036aa78aeeeeb11bd76u.jpg",
    # ── Seat Covers ──
    "photo-1667893530449-e58102223524": "H21bd010390834ee1b32ce984c63ee261a.jpg",
    "photo-1614530499660-fe1fbd7921d6": "H346970451f8748b99f1da1b2483716e1m.jpg",
    "photo-1712565189173-e682c45a9852": "Head99da3f8c7462faeecb9528bd17deeE.jpg",
    "photo-1643142314404-32a911f3ede2": "Head99da3f8c7462faeecb9528bd17deeE.jpg",
    # ── Organizers ──
    "photo-1550355291-bbee04a92027": "H8af5dda4fd4344bf949bc6c7e5fe4cd7l.jpg",
    "photo-1627913434632-b4717be3485a": "H19acd02e53ee459f82493e6b9a39b7ccg.png",
    "photo-1580881647059-923632b8fd75": "H543eb4402b4847768a7d08ba1f22bd52A.png",
    "photo-1557245526-45dc0f1a8745": "H19acd02e53ee459f82493e6b9a39b7ccg.png",
    "photo-1592570714618-15e2d4719c6c": "H8af5dda4fd4344bf949bc6c7e5fe4cd7l.jpg",
    # ── Decorative / Sun Shade ──
    "photo-1616761879141-f485e5fed5df": "He28edfec6b2742e6ae0ad3079176171eR.jpg",
    "photo-1565534355217-85fcfb04ce71": "Ha2b2edb8eee34e27ac74b0dcff1b9fd7n.jpg",
    "photo-1618178325258-a123dc15f610": "Hbf507e3aac694ba2913fe3e189214d63e.jpg",
    # ── LED Strip ──
    "photo-1602506608630-8c2c5312dc8d": "H217b55fce44745a7b986a09924afdee7w.jpg",
    "photo-1485463611174-f302f6a5c1c9": "Hcb52269ca253490c9c6223fe85d354f5t.jpg",
    "photo-1778938390498-ede148e4dfe5": "Hb14cebffc6df4707bb6a925b6b142480q.png",
    # ── Chargers / Tech ──
    "photo-1492107376256-4026437926cd": "Hd1e57d8af57e4baf8265db4ce2c5132cz.jpg",
    "photo-1778782098455-bdd4d1d61e5c": "Hd81e295c35f24a959e4628b0cbb0c19ag.jpg",
    "photo-1767608403185-1faf5eaef756": "H7025e5f7a7874cf99501d279340b4063z.jpg",
    "photo-1602845686963-0085ac4a8dcd": "Hd1e57d8af57e4baf8265db4ce2c5132cz.jpg",
}

def ali_url(file_id, size):
    """Build Alibaba CDN URL. size: 'large' or 'thumb'."""
    suffix = "_960x960.jpg" if size == "large" else "_300x300.jpg"
    # png files keep .jpg extension in the CDN size variant
    return CDN + file_id + suffix

def replace_unsplash(html):
    count = 0
    for photo_id, ali_file in PHOTO_MAP.items():
        # Large (w=600) → 960x960
        old_large = f"https://images.unsplash.com/{photo_id}?auto=format&fit=crop&w=600&q=80"
        new_large = ali_url(ali_file, "large")
        new_html = html.replace(old_large, new_large)
        count += html.count(old_large)
        html = new_html

        # Thumb (w=150) → 300x300
        old_thumb = f"https://images.unsplash.com/{photo_id}?auto=format&fit=crop&w=150&q=70"
        new_thumb = ali_url(ali_file, "thumb")
        new_html = html.replace(old_thumb, new_thumb)
        count += html.count(old_thumb)  # already replaced, but count from original
        html = new_html

    return html, count

src = "car-accessories.html"
with open(src, encoding="utf-8") as f:
    original = f.read()

updated, _ = replace_unsplash(original)

# Count actual replacements
orig_unsplash = len(re.findall(r'images\.unsplash\.com', original))
new_unsplash  = len(re.findall(r'images\.unsplash\.com', updated))
replaced = orig_unsplash - new_unsplash

with open(src, "w", encoding="utf-8") as f:
    f.write(updated)

print(f"Done. Unsplash URLs replaced: {replaced} / {orig_unsplash}")
print(f"Remaining Unsplash URLs: {new_unsplash}")
if new_unsplash:
    # Show which ones remain
    for m in re.finditer(r'https://images\.unsplash\.com/([^\?]+)', updated):
        print(f"  ⚠ {m.group(0)}")
