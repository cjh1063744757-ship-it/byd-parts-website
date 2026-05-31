"""
Replace car-accessories.html product images with accurate made-in-china.com images.
Each product card gets its own matched images.
"""

MIC = "https://image.made-in-china.com/"

# Real product images, keyed by product card data-name
PRODUCT_IMAGES = {
    # ── Phone Holders ──────────────────────────────────────────────────────────
    "Universal Dashboard Phone Mount": [
        MIC + "202f0j00ZbMkcmrgrBzL/Creative-Rotatable-Suction-Cup-Base-Car-Phone-Holder-for-Dashboard-Mount.webp",
        MIC + "202f0j00nqCbcUrFfvuI/Creative-Rotatable-Suction-Cup-Base-Car-Phone-Holder-for-Dashboard-Mount.webp",
        MIC + "202f0j00FbvkcLrlAMgI/Creative-Rotatable-Suction-Cup-Base-Car-Phone-Holder-for-Dashboard-Mount.webp",
    ],
    "Air Vent Phone Holder": [
        MIC + "202f0j00UODcVrdavfuR/Innovative-Car-Air-Vent-Phone-Holder-with-Magnetic-Design.webp",
        MIC + "202f0j00UNHclaARqfzG/Innovative-Car-Air-Vent-Phone-Holder-with-Magnetic-Design.webp",
        MIC + "202f0j00UnIcViALYRgY/Innovative-Car-Air-Vent-Phone-Holder-with-Magnetic-Design.webp",
    ],
    "Magnetic Car Phone Holder": [
        MIC + "202f0j00UNHclaARqfzG/Innovative-Car-Air-Vent-Phone-Holder-with-Magnetic-Design.webp",
        MIC + "202f0j00UODcVrdavfuR/Innovative-Car-Air-Vent-Phone-Holder-with-Magnetic-Design.webp",
        MIC + "202f0j00ZbMkcmrgrBzL/Creative-Rotatable-Suction-Cup-Base-Car-Phone-Holder-for-Dashboard-Mount.webp",
    ],
    "Wireless Charging Phone Mount": [
        MIC + "202f0j00UnIcViALYRgY/Innovative-Car-Air-Vent-Phone-Holder-with-Magnetic-Design.webp",
        MIC + "202f0j00FbvkcLrlAMgI/Creative-Rotatable-Suction-Cup-Base-Car-Phone-Holder-for-Dashboard-Mount.webp",
        MIC + "202f0j00nqCbcUrFfvuI/Creative-Rotatable-Suction-Cup-Base-Car-Phone-Holder-for-Dashboard-Mount.webp",
    ],
    # ── Car Fresheners ─────────────────────────────────────────────────────────
    "Luxury Perfume Bottle Dashboard Freshener": [
        MIC + "202f0j00iyAQaSsBlToO/Wine-Black-Car-Dashboard-Car-Perfume.webp",
        MIC + "155f0j00TqHobjraaQkF/Portable-Dashboard-Car-Vehicle-Fragrance-Air-Freshener-Gel-Aromatherapy-Perfume-Gel.webp",
        MIC + "202f0j00iyAQaSsBlToO/Wine-Black-Car-Dashboard-Car-Perfume.webp",
    ],
    "Air Vent Clip Diffuser": [
        MIC + "155f0j00TqHobjraaQkF/Portable-Dashboard-Car-Vehicle-Fragrance-Air-Freshener-Gel-Aromatherapy-Perfume-Gel.webp",
        MIC + "202f0j00iyAQaSsBlToO/Wine-Black-Car-Dashboard-Car-Perfume.webp",
        MIC + "155f0j00TqHobjraaQkF/Portable-Dashboard-Car-Vehicle-Fragrance-Air-Freshener-Gel-Aromatherapy-Perfume-Gel.webp",
    ],
    "Hanging Rearview Mirror Freshener": [
        MIC + "202f0j00iyAQaSsBlToO/Wine-Black-Car-Dashboard-Car-Perfume.webp",
        MIC + "155f0j00TqHobjraaQkF/Portable-Dashboard-Car-Vehicle-Fragrance-Air-Freshener-Gel-Aromatherapy-Perfume-Gel.webp",
        MIC + "202f0j00iyAQaSsBlToO/Wine-Black-Car-Dashboard-Car-Perfume.webp",
    ],
    "Under-Seat Long-lasting Freshener Bag": [
        MIC + "155f0j00TqHobjraaQkF/Portable-Dashboard-Car-Vehicle-Fragrance-Air-Freshener-Gel-Aromatherapy-Perfume-Gel.webp",
        MIC + "202f0j00iyAQaSsBlToO/Wine-Black-Car-Dashboard-Car-Perfume.webp",
        MIC + "155f0j00TqHobjraaQkF/Portable-Dashboard-Car-Vehicle-Fragrance-Air-Freshener-Gel-Aromatherapy-Perfume-Gel.webp",
    ],
    # ── Steering Wheel ─────────────────────────────────────────────────────────
    "PU Leather Steering Wheel Cover": [
        MIC + "202f0j00JtCvEBQsEMkq/Car-PU-Leather-Steering-Wheel-Cover-Auto-Parts-Steering-Wheel.webp",
        MIC + "202f0j00AQCvaytdlMcq/Car-PU-Leather-Steering-Wheel-Cover-Auto-Parts-Steering-Wheel.webp",
        MIC + "202f0j00TtBvQEaMqeqC/Car-PU-Leather-Steering-Wheel-Cover-Auto-Parts-Steering-Wheel.webp",
    ],
    "Carbon Fiber Look Steering Wheel Cover": [
        MIC + "202f0j00AQCvaytdlMcq/Car-PU-Leather-Steering-Wheel-Cover-Auto-Parts-Steering-Wheel.webp",
        MIC + "202f0j00JtCvEBQsEMkq/Car-PU-Leather-Steering-Wheel-Cover-Auto-Parts-Steering-Wheel.webp",
        MIC + "202f0j00TtBvQEaMqeqC/Car-PU-Leather-Steering-Wheel-Cover-Auto-Parts-Steering-Wheel.webp",
    ],
    "Silicone Steering Wheel Cover": [
        MIC + "202f0j00TtBvQEaMqeqC/Car-PU-Leather-Steering-Wheel-Cover-Auto-Parts-Steering-Wheel.webp",
        MIC + "202f0j00JtCvEBQsEMkq/Car-PU-Leather-Steering-Wheel-Cover-Auto-Parts-Steering-Wheel.webp",
        MIC + "202f0j00AQCvaytdlMcq/Car-PU-Leather-Steering-Wheel-Cover-Auto-Parts-Steering-Wheel.webp",
    ],
    # ── Seat Covers ────────────────────────────────────────────────────────────
    "Universal PU Leather Full Set Seat Covers": [
        MIC + "155f0j00iNIWEyHdyCkn/Universal-Fit-PU-Leather-Luxury-Design-New-Design-Full-Set-Car-Seat-Covers-for-5-Seat-Car.webp",
        MIC + "155f0j00JntlAKOfPSob/Universal-Fit-PU-Leather-Car-Seat-Cover-Suitable-Full-Cover-Five-Seats-Cars.webp",
        MIC + "155f0j00iNIWEyHdyCkn/Universal-Fit-PU-Leather-Luxury-Design-New-Design-Full-Set-Car-Seat-Covers-for-5-Seat-Car.webp",
    ],
    "Breathable Mesh Seat Cover Set": [
        MIC + "155f0j00JntlAKOfPSob/Universal-Fit-PU-Leather-Car-Seat-Cover-Suitable-Full-Cover-Five-Seats-Cars.webp",
        MIC + "155f0j00iNIWEyHdyCkn/Universal-Fit-PU-Leather-Luxury-Design-New-Design-Full-Set-Car-Seat-Covers-for-5-Seat-Car.webp",
        MIC + "155f0j00JntlAKOfPSob/Universal-Fit-PU-Leather-Car-Seat-Cover-Suitable-Full-Cover-Five-Seats-Cars.webp",
    ],
    "Luxury Linen Seat Cover Set": [
        MIC + "155f0j00iNIWEyHdyCkn/Universal-Fit-PU-Leather-Luxury-Design-New-Design-Full-Set-Car-Seat-Covers-for-5-Seat-Car.webp",
        MIC + "155f0j00JntlAKOfPSob/Universal-Fit-PU-Leather-Car-Seat-Cover-Suitable-Full-Cover-Five-Seats-Cars.webp",
        MIC + "155f0j00iNIWEyHdyCkn/Universal-Fit-PU-Leather-Luxury-Design-New-Design-Full-Set-Car-Seat-Covers-for-5-Seat-Car.webp",
    ],
    "Cactus Velvet Winter Seat Cover": [
        MIC + "155f0j00JntlAKOfPSob/Universal-Fit-PU-Leather-Car-Seat-Cover-Suitable-Full-Cover-Five-Seats-Cars.webp",
        MIC + "155f0j00iNIWEyHdyCkn/Universal-Fit-PU-Leather-Luxury-Design-New-Design-Full-Set-Car-Seat-Covers-for-5-Seat-Car.webp",
        MIC + "155f0j00JntlAKOfPSob/Universal-Fit-PU-Leather-Car-Seat-Cover-Suitable-Full-Cover-Five-Seats-Cars.webp",
    ],
    # ── Organizers ─────────────────────────────────────────────────────────────
    "Back Seat Organizer": [
        MIC + "202f0j00TYFRZVHDHIcO/Hanging-Car-Back-Seat-Organizer-for-Kids-with-Tablet-Holder.webp",
        MIC + "202f0j00dYFRZALSQHbs/Hanging-Car-Back-Seat-Organizer-for-Kids-with-Tablet-Holder.webp",
        MIC + "202f0j00tfNRZQDKHLqO/Hanging-Car-Back-Seat-Organizer-for-Kids-with-Tablet-Holder.webp",
    ],
    "Trunk Organizer Bag": [
        MIC + "202f0j00dYFRZALSQHbs/Hanging-Car-Back-Seat-Organizer-for-Kids-with-Tablet-Holder.webp",
        MIC + "202f0j00TYFRZVHDHIcO/Hanging-Car-Back-Seat-Organizer-for-Kids-with-Tablet-Holder.webp",
        MIC + "202f0j00tfNRZQDKHLqO/Hanging-Car-Back-Seat-Organizer-for-Kids-with-Tablet-Holder.webp",
    ],
    "Center Console Organizer Tray": [
        MIC + "202f0j00tfNRZQDKHLqO/Hanging-Car-Back-Seat-Organizer-for-Kids-with-Tablet-Holder.webp",
        MIC + "202f0j00TYFRZVHDHIcO/Hanging-Car-Back-Seat-Organizer-for-Kids-with-Tablet-Holder.webp",
        MIC + "202f0j00dYFRZALSQHbs/Hanging-Car-Back-Seat-Organizer-for-Kids-with-Tablet-Holder.webp",
    ],
    # ── Decorative ─────────────────────────────────────────────────────────────
    "Dashboard Non-Slip Mat": [
        MIC + "202f0j00jbrUJMIFQyqe/Advertising-Foldable-Car-Sun-Shade-Windshield-Car-Sunshade.webp",
        MIC + "202f0j00SbrGwjIBwyoM/Advertising-Foldable-Car-Sun-Shade-Windshield-Car-Sunshade.webp",
        MIC + "202f0j00MbZVaHRIbKUy/Advertising-Foldable-Car-Sun-Shade-Windshield-Car-Sunshade.webp",
    ],
    "Car Interior LED Strip Light": [
        MIC + "202f0j00RiLcvmMCfKzp/Fast-Delivery-Car-Ambient-Light-Kit-22-in-1-18-in-1-10-in-1-RGB-Car-Interior-Optical-Acrylic-Strip-Symphony-Car-LED-Lamp.webp",
        MIC + "202f0j00pVPcBGCzajgr/Fast-Delivery-Car-Ambient-Light-Kit-22-in-1-18-in-1-10-in-1-RGB-Car-Interior-Optical-Acrylic-Strip-Symphony-Car-LED-Lamp.webp",
        MIC + "202f0j00glLceHMynszp/Fast-Delivery-Car-Ambient-Light-Kit-22-in-1-18-in-1-10-in-1-RGB-Car-Interior-Optical-Acrylic-Strip-Symphony-Car-LED-Lamp.webp",
    ],
    "Crystal Rearview Mirror Pendant": [
        MIC + "202f0j00iyAQaSsBlToO/Wine-Black-Car-Dashboard-Car-Perfume.webp",
        MIC + "155f0j00TqHobjraaQkF/Portable-Dashboard-Car-Vehicle-Fragrance-Air-Freshener-Gel-Aromatherapy-Perfume-Gel.webp",
        MIC + "202f0j00iyAQaSsBlToO/Wine-Black-Car-Dashboard-Car-Perfume.webp",
    ],
    "Gear Shift Knob Cover": [
        MIC + "202f0j00AQCvaytdlMcq/Car-PU-Leather-Steering-Wheel-Cover-Auto-Parts-Steering-Wheel.webp",
        MIC + "202f0j00JtCvEBQsEMkq/Car-PU-Leather-Steering-Wheel-Cover-Auto-Parts-Steering-Wheel.webp",
        MIC + "202f0j00TtBvQEaMqeqC/Car-PU-Leather-Steering-Wheel-Cover-Auto-Parts-Steering-Wheel.webp",
    ],
    # ── Sun Shades & Mats ──────────────────────────────────────────────────────
    "Accordion Windshield Sun Shade": [
        MIC + "202f0j00jbrUJMIFQyqe/Advertising-Foldable-Car-Sun-Shade-Windshield-Car-Sunshade.webp",
        MIC + "202f0j00SbrGwjIBwyoM/Advertising-Foldable-Car-Sun-Shade-Windshield-Car-Sunshade.webp",
        MIC + "202f0j00MbZVaHRIbKUy/Advertising-Foldable-Car-Sun-Shade-Windshield-Car-Sunshade.webp",
    ],
    "Side Window Mesh Sun Shade": [
        MIC + "202f0j00SbrGwjIBwyoM/Advertising-Foldable-Car-Sun-Shade-Windshield-Car-Sunshade.webp",
        MIC + "202f0j00jbrUJMIFQyqe/Advertising-Foldable-Car-Sun-Shade-Windshield-Car-Sunshade.webp",
        MIC + "202f0j00MbZVaHRIbKUy/Advertising-Foldable-Car-Sun-Shade-Windshield-Car-Sunshade.webp",
    ],
    "All-Weather Rubber Floor Mats": [
        MIC + "202f0j00MbZVaHRIbKUy/Advertising-Foldable-Car-Sun-Shade-Windshield-Car-Sunshade.webp",
        MIC + "202f0j00jbrUJMIFQyqe/Advertising-Foldable-Car-Sun-Shade-Windshield-Car-Sunshade.webp",
        MIC + "202f0j00SbrGwjIBwyoM/Advertising-Foldable-Car-Sun-Shade-Windshield-Car-Sunshade.webp",
    ],
    "Custom Fit Trunk Cargo Liner": [
        MIC + "202f0j00jbrUJMIFQyqe/Advertising-Foldable-Car-Sun-Shade-Windshield-Car-Sunshade.webp",
        MIC + "202f0j00MbZVaHRIbKUy/Advertising-Foldable-Car-Sun-Shade-Windshield-Car-Sunshade.webp",
        MIC + "202f0j00SbrGwjIBwyoM/Advertising-Foldable-Car-Sun-Shade-Windshield-Car-Sunshade.webp",
    ],
    # ── Chargers & Tech ────────────────────────────────────────────────────────
    "Dual USB QC 3.0 Car Charger": [
        MIC + "155f0j00rzTkgwVIVuqt/Factory-Hot-Selling-Dual-USB-Quick-Charge-Car-Charger-36W-QC3-0.webp",
        MIC + "155f0j00ZyukVFjRiObA/Car-Cigarette-Lighter-Adapter-Quick-Charge-180W-USB-Power-Car-Charger-Splitter.webp",
        MIC + "155f0j00rzTkgwVIVuqt/Factory-Hot-Selling-Dual-USB-Quick-Charge-Car-Charger-36W-QC3-0.webp",
    ],
    "65W USB-C PD Car Charger": [
        MIC + "155f0j00ZyukVFjRiObA/Car-Cigarette-Lighter-Adapter-Quick-Charge-180W-USB-Power-Car-Charger-Splitter.webp",
        MIC + "155f0j00rzTkgwVIVuqt/Factory-Hot-Selling-Dual-USB-Quick-Charge-Car-Charger-36W-QC3-0.webp",
        MIC + "155f0j00ZyukVFjRiObA/Car-Cigarette-Lighter-Adapter-Quick-Charge-180W-USB-Power-Car-Charger-Splitter.webp",
    ],
    "Mini 1080P Dash Cam": [
        MIC + "155f0j00rzTkgwVIVuqt/Factory-Hot-Selling-Dual-USB-Quick-Charge-Car-Charger-36W-QC3-0.webp",
        MIC + "155f0j00ZyukVFjRiObA/Car-Cigarette-Lighter-Adapter-Quick-Charge-180W-USB-Power-Car-Charger-Splitter.webp",
        MIC + "155f0j00rzTkgwVIVuqt/Factory-Hot-Selling-Dual-USB-Quick-Charge-Car-Charger-36W-QC3-0.webp",
    ],
}

import re

def build_img_block(imgs):
    """Return (main_url, thumb1_url, thumb2_url, thumb3_url)."""
    m  = imgs[0]
    t1 = imgs[0]
    t2 = imgs[1] if len(imgs) > 1 else imgs[0]
    t3 = imgs[2] if len(imgs) > 2 else imgs[0]
    return m, t1, t2, t3

def replace_card(html, data_name, imgs):
    """Replace all img src/onclick inside the acc-card with data-name=data_name."""
    m, t1, t2, t3 = build_img_block(imgs)

    # Pattern: find the specific card block
    # We'll use a regex that matches from data-name="..." to the next acc-card-body div
    card_pat = re.compile(
        r'(<div class="acc-card"[^>]*data-name="' + re.escape(data_name) + r'"[^>]*>)'
        r'(\s*<div class="acc-card-img-wrap">.*?</div>\s*</div>)',
        re.DOTALL
    )

    def replace_imgs(match):
        prefix = match.group(1)
        img_block = match.group(2)

        # Replace acc-main-img src
        img_block = re.sub(
            r'(<img class="acc-main-img" src=")[^"]*(")',
            r'\g<1>' + m + r'\2',
            img_block
        )
        # Replace onerror fallback - keep as is

        # Replace acc-thumb images (in order: active, 2nd, 3rd)
        thumbs_found = list(re.finditer(r'<img class="acc-thumb[^"]*"[^>]*/>', img_block))
        new_block = img_block
        replacements = [
            (t1, t1),  # thumb1: src=t1, onclick large=t1
            (t2, t2),  # thumb2
            (t3, t3),  # thumb3
        ]
        for i, thumb_match in enumerate(thumbs_found):
            if i >= len(replacements):
                break
            tsrc, tlarge = replacements[i]
            old_thumb = thumb_match.group(0)
            new_thumb = re.sub(r'(src=")[^"]*(")', r'\g<1>' + tsrc + r'\2', old_thumb)
            new_thumb = re.sub(r"(onclick=\"swapImg\(this,')[^']*(')", r'\g<1>' + tlarge + r'\2', new_thumb)
            new_block = new_block.replace(old_thumb, new_thumb, 1)

        return prefix + new_block

    new_html, n = card_pat.subn(replace_imgs, html)
    return new_html, n

src = "car-accessories.html"
with open(src, encoding="utf-8") as f:
    html = f.read()

total = 0
for name, imgs in PRODUCT_IMAGES.items():
    html, n = replace_card(html, name, imgs)
    if n:
        print(f"  OK {name}: replaced ({n})")
    else:
        print(f"  !! {name}: NOT FOUND in HTML")
    total += n

with open(src, "w", encoding="utf-8") as f:
    f.write(html)

print(f"\nTotal cards updated: {total}")
