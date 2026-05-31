/* ============================================================
   CM IMPORT&EXPORT — i18n (Multilingual) Engine
   Languages: EN · FR · RU · UK
   ============================================================ */

const TRANSLATIONS = {

  /* ══════════════════════════════════════════════════════════
     ENGLISH (default)
  ══════════════════════════════════════════════════════════ */
  en: {
    /* ── NAV ── */
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.allProducts': '📦 All Products',
    'nav.tires': '🛞 Tires',
    'nav.tirePrices': '💰 Tire Prices',
    'nav.ebikes': '🚲 E-Bikes',
    'nav.bydParts': '⚡ BYD Parts',
    'nav.sinotrukParts': '🚛 Sinotruk Parts',
    'nav.carAccessories': '🚗 Car Accessories',
    'nav.about': 'About Us',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.getQuote': 'Get a Quote',

    /* ── FOOTER ── */
    'footer.tagline': 'Driving Your World Forward',
    'footer.desc': 'We are a professional Chinese trading company specializing in the export of tires, new energy automotive parts, and electric bicycles to global markets.',
    'footer.quickLinks': 'Quick Links',
    'footer.products': 'Products',
    'footer.contactUs': 'Contact Us',
    'footer.passengerTires': 'Passenger Car Tires',
    'footer.truckTires': 'Truck & Bus Tires',
    'footer.bydParts': 'BYD EV Parts',
    'footer.sinotrukParts': 'Sinotruk Parts',
    'footer.electricBikes': 'Electric Bicycles',
    'footer.carAccessories': 'Car Accessories',
    'footer.evBattery': 'EV Battery Systems',
    'footer.evCharging': 'Charging Equipment',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.sitemap': 'Sitemap',
    'footer.rights': '© 2025 CM IMPORT&EXPORT Co., Ltd. All rights reserved.',

    /* ── COMMON BUTTONS ── */
    'btn.getQuote': '📩 Get a Free Quote',
    'btn.browseProducts': 'Browse Products',
    'btn.contactUs': '📩 Contact Us Today',
    'btn.startOrder': 'Start Your Order Now →',
    'btn.viewFaq': 'View FAQ',
    'btn.askWhatsapp': '💬 Ask on WhatsApp',
    'btn.sendInquiry': '📋 Send an Inquiry',
    'btn.backHome': '← Back to Home',
    'btn.exploreProducts': 'Explore Products →',
    'btn.requestQuote': 'Request a Free Quote',
    'btn.startPartnership': 'Start a Partnership →',
    'btn.buildTogether': 'Let\'s Build Something Together',
    'btn.viewProducts': 'View Our Products',

    /* ── TRUST BAR ── */
    'trust.iso': '✔ ISO 9001 Certified Quality',
    'trust.ce': '✔ CE & RoHS Compliant',
    'trust.factory': '✔ Factory Direct Pricing',
    'trust.shipping': '✔ Global Shipping & Logistics',
    'trust.oem': '✔ OEM / ODM Customization',
    'trust.years': '✔ 12+ Years Export Experience',
    'trust.sgs': '✔ SGS Pre-Shipment Inspection',
    'trust.customs': '✔ China Customs Registered Exporter',

    /* ── INDEX PAGE ── */
    'index.hero.badge': 'China Factory Direct Export Specialist',
    'index.hero.h1': 'Tires, EV Parts &amp;<br/><span class="highlight">E-Bikes Direct</span><br/>from China Factory',
    'index.hero.desc': 'Skip the middlemen. CM IMPORT&EXPORT sources directly from ISO-certified Chinese factories and delivers to your port in Zambia, Singapore, Australia, Ethiopia and Liberia — with full customs documentation included.',
    'index.hero.tag1': '🏭 Factory Direct',
    'index.hero.tag2': '✅ ISO Certified',
    'index.hero.tag3': '🌍 15+ Countries Served',
    'index.hero.tag4': '📦 FOB / CIF / DAP',
    'index.hero.stat1': 'Years Experience',
    'index.hero.stat2': 'Active Global Clients',
    'index.hero.stat3': 'Core Export Markets',
    'index.hero.stat4': 'Repeat Order Rate',
    'index.hero.scroll': 'Scroll Down',

    'index.products.tag': 'Our Products',
    'index.products.h2': 'Four Core Product Lines',
    'index.products.desc': 'Factory-direct tires, BYD & Sinotruk parts, and electric bikes — sourced from certified Chinese manufacturers and shipped to your door.',

    'index.markets.tag': 'Global Reach',
    'index.markets.h2': 'Our Key Export Markets',
    'index.markets.desc': 'We deliver directly to growing markets across Africa, Southeast Asia, and Oceania, backed by deep local market knowledge.',

    'index.why.tag': 'Why Us',
    'index.why.h2': 'Why Partner with CM IMPORT&EXPORT?',
    'index.why.desc': 'We combine Chinese manufacturing excellence with 12 years of export expertise to deliver unbeatable factory-direct value to your business.',
    'index.why.p1.title': 'Factory Direct Price',
    'index.why.p1.desc': 'We work directly with 50+ ISO-certified Chinese factories — no agents, no markups. You get the same price our factory partners offer to domestic buyers.',
    'index.why.p2.title': 'SGS Quality Inspection',
    'index.why.p2.desc': 'Every batch undergoes SGS pre-shipment inspection at factory level. Detailed QC reports provided before final payment is released.',
    'index.why.p3.title': 'Fast & Reliable Delivery',
    'index.why.p3.desc': 'Sea freight (25–35 days), air freight (5–7 days), and express options. We handle all export customs paperwork including CO, BL, and packing list.',
    'index.why.p4.title': 'OEM / ODM Available',
    'index.why.p4.desc': 'Custom logo, packaging, and product configurations available with MOQ from just 100 units. Build your own brand backed by Chinese manufacturing.',
    'index.why.p5.title': 'After-Sales Support',
    'index.why.p5.desc': 'Dedicated account manager, WhatsApp response within 2 hours, warranty claims handled end-to-end. We don\'t disappear after the shipment lands.',
    'index.why.p6.title': 'Transparent Process',
    'index.why.p6.desc': 'Pro-forma invoice within 24 hours, real-time shipment tracking, and full document package for your local customs clearance — every time.',

    'index.steps.tag': 'Simple Process',
    'index.steps.h2': 'How to Place Your Order',
    'index.steps.desc': 'From inquiry to delivery in 5 clear steps — no complicated procedures, no hidden surprises.',
    'index.steps.s1.title': 'Submit Inquiry',
    'index.steps.s1.desc': 'Tell us what you need — product, quantity, destination port. WhatsApp or our quote form.',
    'index.steps.s2.title': 'Get Quotation',
    'index.steps.s2.desc': 'We send a detailed Pro-Forma Invoice with price, lead time, and shipping options within 24 hrs.',
    'index.steps.s3.title': 'Confirm & Deposit',
    'index.steps.s3.desc': 'Agree to PI terms and pay 30% deposit by T/T. We confirm your order in writing immediately.',
    'index.steps.s4.title': 'Production & QC',
    'index.steps.s4.desc': 'Goods are produced or sourced. We conduct pre-shipment inspection and send you photos/video.',
    'index.steps.s5.title': 'Ship & Deliver',
    'index.steps.s5.desc': 'Balance payment released; goods loaded. Full shipping docs sent digitally within 3 days of sailing.',

    'index.stats.tag': 'By the Numbers',
    'index.stats.h2': 'Our Track Record Speaks',
    'index.stats.s1': 'Years in Export Business',
    'index.stats.s2': 'Active Global Clients',
    'index.stats.s3': 'Shipments Completed',
    'index.stats.s4': 'Countries Served',

    'index.testimonials.tag': 'Client Feedback',
    'index.testimonials.h2': 'What Our Partners Say',
    'index.testimonials.desc': 'Real feedback from importers across Africa, Southeast Asia, and Oceania who source with us regularly.',

    'index.cta.h2': 'Ready to Start a Partnership?',
    'index.cta.desc': 'Send us your inquiry today and receive a customized quotation within 24 hours.',

    /* ── ABOUT PAGE ── */
    'about.hero.breadcrumb': 'About Us',
    'about.hero.h1': 'About CM IMPORT&EXPORT',
    'about.hero.desc': 'China-based factory-direct exporter of tires, EV parts and electric bicycles — serving Zambia, Singapore, Australia, Ethiopia and Liberia since 2012.',
    'about.story.tag': 'Our Story',
    'about.story.h2': 'Founded with a Mission to Bridge China and the World',
    'about.story.p1': 'CM IMPORT&EXPORT was established in 2012 with a straightforward mission: give international buyers the same access to Chinese factory pricing and quality that domestic companies enjoy — without the risk of working with unknown suppliers thousands of kilometres away.',
    'about.story.p2': 'We started with tires, building direct relationships with Triangle, Linglong, and Sailun factories in Shandong Province. Over the years we expanded into BYD new-energy vehicle parts, Sinotruk commercial truck components, and electric bicycles — always staying close to the factories and always putting quality inspection before cost-cutting.',
    'about.story.p3': 'Today, 127 active importers across Zambia, Singapore, Australia, Ethiopia, and Liberia trust us to handle their China sourcing end-to-end: from factory negotiation and SGS pre-shipment inspection through to export customs documentation and final delivery.',

    'about.values.tag': 'Our Values',
    'about.values.h2': 'What Drives Us Every Day',
    'about.values.desc': 'Four principles that guide every shipment, every negotiation, and every long-term partnership we build.',
    'about.values.v1.title': 'Quality First',
    'about.values.v1.desc': 'Every product we export undergoes factory-level audit and SGS pre-shipment inspection. We share QC reports with every client before payment is released.',
    'about.values.v2.title': 'Long-Term Partnership',
    'about.values.v2.desc': 'We treat every importer as a long-term partner, not a one-time transaction. Our 96% repeat order rate reflects that commitment in real numbers.',
    'about.values.v3.title': 'Full Transparency',
    'about.values.v3.desc': 'You get a pro-forma invoice within 24 hours, real-time shipment tracking, and a complete documentation package — no hidden fees, no surprises.',
    'about.values.v4.title': 'Green Mobility',
    'about.values.v4.desc': 'Our BYD parts and e-bike lines actively support the energy transition in developing markets, helping our partners capitalize on the EV boom early.',

    'about.cert.tag': 'Compliance & Certifications',
    'about.cert.h2': 'Internationally Recognized Standards',
    'about.cert.desc': 'Our products and processes meet the regulatory and compliance requirements of every market we serve.',

    'about.track.tag': 'Our Track Record',
    'about.track.h2': 'Proven Results. Trusted Partners.',
    'about.track.s1': 'Years Experience',
    'about.track.s2': 'Active Global Clients',
    'about.track.s3': 'Factory Partners',
    'about.track.s4': 'Countries Reached',

    'about.cta.h2': 'Let\'s Build Something Together',
    'about.cta.desc': 'We\'re ready to be your reliable sourcing and export partner in China.',

    /* ── CONTACT PAGE ── */
    'contact.hero.breadcrumb': 'Contact Us',
    'contact.hero.h1': 'Get in Touch',
    'contact.hero.desc': 'Send us your inquiry and receive a detailed quotation within 24 business hours.',
    'contact.info.h2': 'Let\'s Talk Business',
    'contact.info.desc': 'Whether you are looking for a first-time import quote or expanding an existing product line, our team is ready to help you find the right products at the right price.',
    'contact.info.email': 'Email Us',
    'contact.info.whatsapp': 'WhatsApp / Phone',
    'contact.info.whatsapp.detail': '+86 173 1830 5222<br/>Available Mon–Sat, 8am–8pm CST',
    'contact.info.address': 'Company Address',
    'contact.info.address.detail': 'CM IMPORT&EXPORT Co., Ltd.<br/>China',
    'contact.info.response': 'Response Time',
    'contact.info.response.detail': 'Quotation within 24 hours<br/>Sample arrangement within 5–7 days',
    'contact.info.waBtn': '💬 Chat on WhatsApp',
    'contact.info.markets': 'Markets We Actively Serve',
    'contact.form.header': '📋 Send an Inquiry',
    'contact.form.subheader': 'Fill in the form below and our sales team will respond promptly.',
    'contact.form.firstName': 'First Name *',
    'contact.form.lastName': 'Last Name *',
    'contact.form.email': 'Email Address *',
    'contact.form.phone': 'WhatsApp / Phone',
    'contact.form.company': 'Company Name',
    'contact.form.country': 'Your Country *',
    'contact.form.country.select': 'Select country...',
    'contact.form.product': 'Product Interest *',
    'contact.form.product.select': 'Select product category...',
    'contact.form.quantity': 'Estimated Order Quantity',
    'contact.form.message': 'Your Message *',
    'contact.form.submit': '🚀 Send Inquiry Now',
    'contact.form.privacy': 'By submitting, you agree to our Privacy Policy. We never share your data.',
    'contact.success.title': 'Inquiry Sent Successfully!',
    'contact.success.desc': 'Thank you for contacting us. Our sales team will get back to you within 24 business hours.',
    'contact.success.urgent': 'For urgent inquiries, please reach us via WhatsApp.',

    /* ── FAQ PAGE ── */
    'faq.hero.breadcrumb': 'FAQ',
    'faq.hero.h1': 'Frequently Asked Questions',
    'faq.hero.desc': 'Everything you need to know before placing your first order — MOQ, shipping, payment, certifications, and after-sales support.',
    'faq.tab.general': '📦 General & Products',
    'faq.tab.shipping': '🚢 Shipping & Logistics',
    'faq.tab.payment': '💳 Payment & Pricing',
    'faq.tab.aftersales': '🔧 After-Sales & Quality',
    'faq.cta.h2': 'Still Have Questions?',
    'faq.cta.desc': 'Our sales team responds to all inquiries within 24 hours. Reach us by WhatsApp for the fastest response.',

    /* ── PRODUCTS PAGE ── */
    'products.hero.breadcrumb': 'Products',
    'products.hero.h1': 'Our Full Product Range',
    'products.hero.desc': 'Factory-direct tires, EV auto parts, and electric bicycles — ready for export to your market.',

    /* ── TIRES PAGE ── */
    'tires.hero.h1': 'Tire Catalog',
    'tires.hero.desc': 'Browse our full range of passenger, SUV, and truck tires from leading Chinese manufacturers.',
    'tires.step1': 'Select Category',
    'tires.step2': 'Choose Brand',
    'tires.step3': 'Pick Sizes',

    /* ── E-BIKES PAGE ── */
    'ebikes.hero.h1': 'Electric Bicycles',
    'ebikes.hero.desc': '13 premium e-bike models across 4 categories — folding, cargo, mountain, city. Wholesale pricing from China.',
    'ebikes.filter.all': 'All Models',
    'ebikes.filter.folding': '🔄 Folding',
    'ebikes.filter.cargo': '📦 Cargo',
    'ebikes.filter.mountain': '🏔️ Mountain',
    'ebikes.filter.city': '🏙️ City',
    'ebikes.addCart': 'Add to Inquiry',
    'ebikes.viewSpec': 'View Specs',

    /* ── INQUIRY CART ── */
    'cart.title': 'Your Inquiry Cart',
    'cart.empty': 'Your cart is empty. Browse products to add items.',
    'cart.submit': '🚀 Submit Inquiry',
    'cart.clear': 'Clear Cart',

    /* ── PRICELIST ── */
    'pricelist.hero.h1': 'Tire Price List',
    'pricelist.hero.desc': 'Factory-direct wholesale pricing for our full tire range. All prices FOB Chinese port.',

    /* ── CATALOG ── */
    'catalog.hero.h1': 'Product Catalog',
    'catalog.hero.desc': 'Download our full product catalog or browse online.',

    /* ── BYD PARTS ── */
    'byd.hero.h1': 'BYD Auto Parts',
    'byd.hero.desc': 'Genuine & OEM-grade parts for BYD Han, Tang, Atto 3, Song Plus, and Dolphin.',

    /* ── SINOTRUK PARTS ── */
    'sinotruk.hero.h1': 'Sinotruk HOWO Parts',
    'sinotruk.hero.desc': '500+ SKUs for HOWO, HOWO-A7, Steyr, and Hohan commercial trucks.',

    /* ── CAR ACCESSORIES ── */
    'car.hero.h1': 'Car Accessories',
    'car.hero.desc': 'Premium car accessories — dash cams, seat covers, phone mounts, and more.',

    /* ── MARKET CARDS ── */
    'market.zambia': 'Zambia',
    'market.zambia.region': 'Southern Africa',
    'market.zambia.desc': 'A fast-growing automotive market with strong demand for all-terrain tires and durable vehicle parts.',
    'market.singapore': 'Singapore',
    'market.singapore.region': 'Southeast Asia',
    'market.singapore.desc': 'A global logistics hub with high demand for EV components and premium urban mobility solutions.',
    'market.australia': 'Australia',
    'market.australia.region': 'Oceania',
    'market.australia.desc': 'Expanding EV adoption and strong recreational vehicle sector create excellent opportunities.',
    'market.ethiopia': 'Ethiopia',
    'market.ethiopia.region': 'East Africa',
    'market.ethiopia.desc': 'The largest economy in East Africa, with booming logistics and transportation infrastructure needs.',
    'market.liberia': 'Liberia',
    'market.liberia.region': 'West Africa',
    'market.liberia.desc': 'A growing market with strong demand for commercial truck parts and all-terrain tires.',

    /* ── PRODUCT CARDS ── */
    'prod.tires.h3': 'Premium Tires',
    'prod.tires.brands': 'Brands: Triangle · Linglong · Sailun · Doublestar',
    'prod.tires.desc': 'PCR / TBR / OTR tires covering sizes 155/65R13 up to 315/80R22.5. All-terrain, highway & off-road patterns for diverse market needs.',
    'prod.tires.f1': 'Sizes: 13" – 22.5" rim diameter',
    'prod.tires.f2': 'PCR, TBR & OTR categories',
    'prod.tires.f3': 'EU / DOT / SNI / GCC certified',
    'prod.tires.f4': 'Private label & OEM available',
    'prod.tires.btn': 'View Tires →',

    'prod.ebikes.h3': 'Electric Bicycles',
    'prod.ebikes.brands': 'City · Folding · Cargo · Fat-Tire models',
    'prod.ebikes.desc': 'Up to 230 km range on a single charge. Built-in GPS tracking, anti-theft alarm, and app connectivity for modern urban commuters.',
    'prod.ebikes.f1': '250W – 1000W motor options',
    'prod.ebikes.f2': '48V / 60V lithium battery',
    'prod.ebikes.f3': 'GPS + anti-theft + app control',
    'prod.ebikes.f4': 'EN15194 / CE / UL certified',
    'prod.ebikes.btn': 'View E-Bikes →',

    'prod.byd.h3': 'BYD Auto Parts',
    'prod.byd.brands': 'Models: BYD Han · Tang · Atto 3 · Song Plus · Dolphin',
    'prod.byd.desc': 'Genuine & OEM-grade parts for BYD\'s entire new-energy lineup. Battery modules, drive motors, AC/DC chargers, ADAS sensors and body panels.',
    'prod.byd.f1': 'LFP & NMC battery modules',
    'prod.byd.f2': 'Blade Battery compatible parts',
    'prod.byd.f3': 'OBD-compatible controllers',
    'prod.byd.f4': '12-month warranty on EV parts',
    'prod.byd.btn': 'View BYD Parts →',

    'prod.sinotruk.h3': 'Sinotruk Parts',
    'prod.sinotruk.brands': 'Series: HOWO · HOWO-A7 · Steyr · Hohan',
    'prod.sinotruk.desc': 'Engine assemblies, gearboxes, axles, cabins and 500+ SKUs for Sinotruk\'s commercial truck range. Popular across Africa & Southeast Asia.',
    'prod.sinotruk.f1': 'WD615 / MC11 engine parts',
    'prod.sinotruk.f2': 'Full drivetrain components',
    'prod.sinotruk.f3': 'Cabin body & suspension',
    'prod.sinotruk.f4': 'Fast air freight for urgent orders',
    'prod.sinotruk.btn': 'View Sinotruk Parts →',
  },

  /* ══════════════════════════════════════════════════════════
     FRENCH
  ══════════════════════════════════════════════════════════ */
  fr: {
    /* ── NAV ── */
    'nav.home': 'Accueil',
    'nav.products': 'Produits',
    'nav.allProducts': '📦 Tous les produits',
    'nav.tires': '🛞 Pneus',
    'nav.tirePrices': '💰 Prix des pneus',
    'nav.ebikes': '🚲 Vélos électriques',
    'nav.bydParts': '⚡ Pièces BYD',
    'nav.sinotrukParts': '🚛 Pièces Sinotruk',
    'nav.carAccessories': '🚗 Accessoires auto',
    'nav.about': 'À propos',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.getQuote': 'Obtenir un devis',

    /* ── FOOTER ── */
    'footer.tagline': 'Propulsez votre monde',
    'footer.desc': 'Nous sommes une société de commerce chinoise professionnelle spécialisée dans l\'exportation de pneus, de pièces automobiles à nouvelles énergies et de vélos électriques vers les marchés mondiaux.',
    'footer.quickLinks': 'Liens rapides',
    'footer.products': 'Produits',
    'footer.contactUs': 'Nous contacter',
    'footer.passengerTires': 'Pneus voiture',
    'footer.truckTires': 'Pneus poids lourd',
    'footer.bydParts': 'Pièces BYD EV',
    'footer.sinotrukParts': 'Pièces Sinotruk',
    'footer.electricBikes': 'Vélos électriques',
    'footer.carAccessories': 'Accessoires auto',
    'footer.evBattery': 'Systèmes batterie EV',
    'footer.evCharging': 'Équipement de recharge',
    'footer.privacy': 'Politique de confidentialité',
    'footer.terms': 'Conditions d\'utilisation',
    'footer.sitemap': 'Plan du site',
    'footer.rights': '© 2025 CM IMPORT&EXPORT Co., Ltd. Tous droits réservés.',

    /* ── COMMON BUTTONS ── */
    'btn.getQuote': '📩 Obtenir un devis gratuit',
    'btn.browseProducts': 'Voir les produits',
    'btn.contactUs': '📩 Nous contacter',
    'btn.startOrder': 'Commencer votre commande →',
    'btn.viewFaq': 'Voir la FAQ',
    'btn.askWhatsapp': '💬 Poser une question sur WhatsApp',
    'btn.sendInquiry': '📋 Envoyer une demande',
    'btn.backHome': '← Retour à l\'accueil',
    'btn.exploreProducts': 'Explorer les produits →',
    'btn.requestQuote': 'Demander un devis gratuit',
    'btn.startPartnership': 'Démarrer un partenariat →',
    'btn.buildTogether': 'Construisons ensemble',
    'btn.viewProducts': 'Voir nos produits',

    /* ── TRUST BAR ── */
    'trust.iso': '✔ Qualité certifiée ISO 9001',
    'trust.ce': '✔ Conforme CE & RoHS',
    'trust.factory': '✔ Prix direct usine',
    'trust.shipping': '✔ Expédition & logistique mondiale',
    'trust.oem': '✔ Personnalisation OEM / ODM',
    'trust.years': '✔ 12+ ans d\'expérience export',
    'trust.sgs': '✔ Inspection SGS avant expédition',
    'trust.customs': '✔ Exportateur enregistré en Chine',

    /* ── INDEX PAGE ── */
    'index.hero.badge': 'Spécialiste export direct usine en Chine',
    'index.hero.h1': 'Pneus, pièces EV &amp;<br/><span class="highlight">Vélos électriques directs</span><br/>d\'usine chinoise',
    'index.hero.desc': 'Supprimez les intermédiaires. CM IMPORT&EXPORT s\'approvisionne directement auprès d\'usines chinoises certifiées ISO et livre à votre port en Zambie, Singapour, Australie, Éthiopie et Libéria — avec toute la documentation douanière incluse.',
    'index.hero.tag1': '🏭 Direct usine',
    'index.hero.tag2': '✅ Certifié ISO',
    'index.hero.tag3': '🌍 15+ pays desservis',
    'index.hero.tag4': '📦 FOB / CIF / DAP',
    'index.hero.stat1': 'Ans d\'expérience',
    'index.hero.stat2': 'Clients actifs mondiaux',
    'index.hero.stat3': 'Marchés export clés',
    'index.hero.stat4': 'Taux de réordre',
    'index.hero.scroll': 'Défiler',

    'index.products.tag': 'Nos produits',
    'index.products.h2': 'Quatre gammes de produits',
    'index.products.desc': 'Pneus, pièces BYD & Sinotruk, et vélos électriques — directement des fabricants chinois certifiés, livrés chez vous.',

    'index.markets.tag': 'Portée mondiale',
    'index.markets.h2': 'Nos marchés export clés',
    'index.markets.desc': 'Nous livrons directement dans des marchés en croissance en Afrique, en Asie du Sud-Est et en Océanie, grâce à une connaissance approfondie des marchés locaux.',

    'index.why.tag': 'Pourquoi nous',
    'index.why.h2': 'Pourquoi choisir CM IMPORT&EXPORT ?',
    'index.why.desc': 'Nous combinons l\'excellence manufacturière chinoise avec 12 ans d\'expertise export pour offrir une valeur directe usine imbattable à votre entreprise.',
    'index.why.p1.title': 'Prix direct usine',
    'index.why.p1.desc': 'Nous travaillons directement avec 50+ usines chinoises certifiées ISO — sans agents, sans marges supplémentaires. Vous obtenez le même prix que nos partenaires usine offrent aux acheteurs locaux.',
    'index.why.p2.title': 'Inspection qualité SGS',
    'index.why.p2.desc': 'Chaque lot subit une inspection SGS avant expédition au niveau de l\'usine. Des rapports de contrôle qualité détaillés sont fournis avant le paiement final.',
    'index.why.p3.title': 'Livraison rapide & fiable',
    'index.why.p3.desc': 'Fret maritime (25–35 jours), fret aérien (5–7 jours) et options express. Nous gérons toute la paperasse douanière y compris CO, BL et liste de colisage.',
    'index.why.p4.title': 'OEM / ODM disponible',
    'index.why.p4.desc': 'Logo personnalisé, emballage et configurations produits disponibles à partir de seulement 100 unités. Construisez votre propre marque grâce à la fabrication chinoise.',
    'index.why.p5.title': 'Support après-vente',
    'index.why.p5.desc': 'Gestionnaire de compte dédié, réponse WhatsApp sous 2 heures, gestion des garanties de bout en bout. Nous ne disparaissons pas après la livraison.',
    'index.why.p6.title': 'Processus transparent',
    'index.why.p6.desc': 'Facture pro-forma sous 24 heures, suivi en temps réel de l\'expédition, et dossier complet pour le dédouanement local — à chaque fois.',

    'index.steps.tag': 'Processus simple',
    'index.steps.h2': 'Comment passer votre commande',
    'index.steps.desc': 'De la demande à la livraison en 5 étapes claires — pas de procédures compliquées, pas de mauvaises surprises.',
    'index.steps.s1.title': 'Soumettre une demande',
    'index.steps.s1.desc': 'Dites-nous ce dont vous avez besoin — produit, quantité, port de destination. WhatsApp ou notre formulaire.',
    'index.steps.s2.title': 'Obtenir un devis',
    'index.steps.s2.desc': 'Nous envoyons une facture pro-forma détaillée avec prix, délai et options d\'expédition sous 24h.',
    'index.steps.s3.title': 'Confirmer & déposer',
    'index.steps.s3.desc': 'Acceptez les conditions PI et payez 30% d\'acompte par virement. Nous confirmons votre commande immédiatement par écrit.',
    'index.steps.s4.title': 'Production & QC',
    'index.steps.s4.desc': 'Les marchandises sont produites ou approvisionnées. Nous effectuons l\'inspection avant expédition et vous envoyons photos/vidéo.',
    'index.steps.s5.title': 'Expédier & livrer',
    'index.steps.s5.desc': 'Solde libéré ; marchandises chargées. Documents d\'expédition complets envoyés numériquement sous 3 jours après appareillage.',

    'index.stats.tag': 'En chiffres',
    'index.stats.h2': 'Notre bilan parle de lui-même',
    'index.stats.s1': 'Ans dans l\'export',
    'index.stats.s2': 'Clients actifs mondiaux',
    'index.stats.s3': 'Expéditions réalisées',
    'index.stats.s4': 'Pays desservis',

    'index.testimonials.tag': 'Avis clients',
    'index.testimonials.h2': 'Ce que disent nos partenaires',
    'index.testimonials.desc': 'Retours réels d\'importateurs en Afrique, Asie du Sud-Est et Océanie qui s\'approvisionnent régulièrement chez nous.',

    'index.cta.h2': 'Prêt à démarrer un partenariat ?',
    'index.cta.desc': 'Envoyez-nous votre demande aujourd\'hui et recevez un devis personnalisé sous 24 heures.',

    /* ── ABOUT PAGE ── */
    'about.hero.breadcrumb': 'À propos',
    'about.hero.h1': 'À propos de CM IMPORT&EXPORT',
    'about.hero.desc': 'Exportateur direct usine basé en Chine pour pneus, pièces EV et vélos électriques — au service de la Zambie, Singapour, Australie, Éthiopie et Libéria depuis 2012.',
    'about.story.tag': 'Notre histoire',
    'about.story.h2': 'Fondé avec la mission de relier la Chine et le monde',
    'about.story.p1': 'CM IMPORT&EXPORT a été créé en 2012 avec une mission simple : donner aux acheteurs internationaux le même accès aux prix et à la qualité des usines chinoises que les entreprises locales — sans le risque de travailler avec des fournisseurs inconnus à des milliers de kilomètres.',
    'about.story.p2': 'Nous avons commencé avec les pneus, en établissant des relations directes avec les usines Triangle, Linglong et Sailun dans la province du Shandong. Au fil des années, nous avons élargi notre offre aux pièces de véhicules à nouvelles énergies BYD, aux composants pour camions commerciaux Sinotruk et aux vélos électriques.',
    'about.story.p3': 'Aujourd\'hui, 127 importateurs actifs en Zambie, Singapour, Australie, Éthiopie et Libéria nous font confiance pour gérer leur approvisionnement en Chine de bout en bout.',

    'about.values.tag': 'Nos valeurs',
    'about.values.h2': 'Ce qui nous anime chaque jour',
    'about.values.desc': 'Quatre principes qui guident chaque expédition, chaque négociation et chaque partenariat à long terme que nous construisons.',
    'about.values.v1.title': 'La qualité avant tout',
    'about.values.v1.desc': 'Chaque produit que nous exportons fait l\'objet d\'un audit en usine et d\'une inspection SGS avant expédition. Nous partageons les rapports QC avec chaque client avant le paiement.',
    'about.values.v2.title': 'Partenariat à long terme',
    'about.values.v2.desc': 'Nous traitons chaque importateur comme un partenaire à long terme, pas comme une transaction unique. Notre taux de réordre de 96% reflète cet engagement en chiffres réels.',
    'about.values.v3.title': 'Transparence totale',
    'about.values.v3.desc': 'Vous recevez une facture pro-forma sous 24 heures, un suivi en temps réel et un dossier complet — sans frais cachés, sans surprises.',
    'about.values.v4.title': 'Mobilité verte',
    'about.values.v4.desc': 'Nos pièces BYD et nos vélos électriques soutiennent activement la transition énergétique dans les marchés en développement.',

    'about.cert.tag': 'Conformité & Certifications',
    'about.cert.h2': 'Standards reconnus internationalement',
    'about.cert.desc': 'Nos produits et processus respectent les exigences réglementaires de chaque marché que nous desservons.',

    'about.track.tag': 'Notre bilan',
    'about.track.h2': 'Résultats prouvés. Partenaires de confiance.',
    'about.track.s1': 'Ans d\'expérience',
    'about.track.s2': 'Clients actifs mondiaux',
    'about.track.s3': 'Partenaires usines',
    'about.track.s4': 'Pays atteints',

    'about.cta.h2': 'Construisons quelque chose ensemble',
    'about.cta.desc': 'Nous sommes prêts à être votre partenaire d\'approvisionnement et d\'export fiable en Chine.',

    /* ── CONTACT PAGE ── */
    'contact.hero.breadcrumb': 'Nous contacter',
    'contact.hero.h1': 'Prenons contact',
    'contact.hero.desc': 'Envoyez-nous votre demande et recevez un devis détaillé sous 24 heures ouvrées.',
    'contact.info.h2': 'Parlons affaires',
    'contact.info.desc': 'Que vous cherchiez un premier devis ou que vous étendiez une ligne de produits existante, notre équipe est prête à vous aider.',
    'contact.info.email': 'Nous écrire',
    'contact.info.whatsapp': 'WhatsApp / Téléphone',
    'contact.info.whatsapp.detail': '+86 173 1830 5222<br/>Disponible Lun–Sam, 8h–20h CST',
    'contact.info.address': 'Adresse de la société',
    'contact.info.address.detail': 'CM IMPORT&EXPORT Co., Ltd.<br/>Chine',
    'contact.info.response': 'Délai de réponse',
    'contact.info.response.detail': 'Devis sous 24 heures<br/>Échantillons sous 5–7 jours',
    'contact.info.waBtn': '💬 Chatter sur WhatsApp',
    'contact.info.markets': 'Marchés que nous desservons activement',
    'contact.form.header': '📋 Envoyer une demande',
    'contact.form.subheader': 'Remplissez le formulaire ci-dessous et notre équipe répondra rapidement.',
    'contact.form.firstName': 'Prénom *',
    'contact.form.lastName': 'Nom *',
    'contact.form.email': 'Adresse e-mail *',
    'contact.form.phone': 'WhatsApp / Téléphone',
    'contact.form.company': 'Nom de la société',
    'contact.form.country': 'Votre pays *',
    'contact.form.country.select': 'Sélectionner un pays...',
    'contact.form.product': 'Produit souhaité *',
    'contact.form.product.select': 'Sélectionner une catégorie...',
    'contact.form.quantity': 'Quantité estimée',
    'contact.form.message': 'Votre message *',
    'contact.form.submit': '🚀 Envoyer la demande',
    'contact.form.privacy': 'En soumettant, vous acceptez notre politique de confidentialité. Nous ne partageons jamais vos données.',
    'contact.success.title': 'Demande envoyée avec succès !',
    'contact.success.desc': 'Merci de nous avoir contactés. Notre équipe commerciale vous répondra sous 24 heures ouvrées.',
    'contact.success.urgent': 'Pour les demandes urgentes, contactez-nous via WhatsApp.',

    /* ── FAQ PAGE ── */
    'faq.hero.breadcrumb': 'FAQ',
    'faq.hero.h1': 'Foire Aux Questions',
    'faq.hero.desc': 'Tout ce que vous devez savoir avant de passer votre première commande — MOQ, expédition, paiement, certifications et support.',
    'faq.tab.general': '📦 Général & Produits',
    'faq.tab.shipping': '🚢 Expédition & Logistique',
    'faq.tab.payment': '💳 Paiement & Tarifs',
    'faq.tab.aftersales': '🔧 Après-vente & Qualité',
    'faq.cta.h2': 'D\'autres questions ?',
    'faq.cta.desc': 'Notre équipe commerciale répond à toutes les demandes sous 24 heures. Contactez-nous sur WhatsApp pour une réponse plus rapide.',

    /* ── PRODUCTS PAGE ── */
    'products.hero.breadcrumb': 'Produits',
    'products.hero.h1': 'Notre gamme complète',
    'products.hero.desc': 'Pneus, pièces EV et vélos électriques — prêts à l\'export vers votre marché.',

    /* ── TIRES PAGE ── */
    'tires.hero.h1': 'Catalogue pneus',
    'tires.hero.desc': 'Parcourez notre gamme complète de pneus tourisme, SUV et poids lourd.',
    'tires.step1': 'Choisir catégorie',
    'tires.step2': 'Choisir marque',
    'tires.step3': 'Choisir dimensions',

    /* ── E-BIKES PAGE ── */
    'ebikes.hero.h1': 'Vélos électriques',
    'ebikes.hero.desc': '13 modèles de vélos électriques premium dans 4 catégories — pliant, cargo, montagne, ville.',
    'ebikes.filter.all': 'Tous les modèles',
    'ebikes.filter.folding': '🔄 Pliant',
    'ebikes.filter.cargo': '📦 Cargo',
    'ebikes.filter.mountain': '🏔️ Montagne',
    'ebikes.filter.city': '🏙️ Ville',
    'ebikes.addCart': 'Ajouter à la demande',
    'ebikes.viewSpec': 'Voir les specs',

    /* ── INQUIRY CART ── */
    'cart.title': 'Votre panier de demande',
    'cart.empty': 'Votre panier est vide. Parcourez les produits pour en ajouter.',
    'cart.submit': '🚀 Soumettre la demande',
    'cart.clear': 'Vider le panier',

    /* ── PRICELIST ── */
    'pricelist.hero.h1': 'Liste de prix pneus',
    'pricelist.hero.desc': 'Tarifs de gros directs usine. Tous prix FOB port chinois.',

    /* ── CATALOG ── */
    'catalog.hero.h1': 'Catalogue produits',
    'catalog.hero.desc': 'Téléchargez notre catalogue complet ou consultez-le en ligne.',

    /* ── BYD PARTS ── */
    'byd.hero.h1': 'Pièces BYD',
    'byd.hero.desc': 'Pièces OEM et équivalent OEM pour BYD Han, Tang, Atto 3, Song Plus et Dolphin.',

    /* ── SINOTRUK PARTS ── */
    'sinotruk.hero.h1': 'Pièces Sinotruk HOWO',
    'sinotruk.hero.desc': '500+ références pour camions HOWO, HOWO-A7, Steyr et Hohan.',

    /* ── CAR ACCESSORIES ── */
    'car.hero.h1': 'Accessoires auto',
    'car.hero.desc': 'Accessoires automobiles premium — dashcams, housses, supports téléphone et plus.',

    /* ── MARKET CARDS ── */
    'market.zambia': 'Zambie',
    'market.zambia.region': 'Afrique australe',
    'market.zambia.desc': 'Un marché automobile en pleine croissance avec une forte demande en pneus tout-terrain et en pièces durables.',
    'market.singapore': 'Singapour',
    'market.singapore.region': 'Asie du Sud-Est',
    'market.singapore.desc': 'Un hub logistique mondial avec une forte demande en composants EV et solutions de mobilité urbaine.',
    'market.australia': 'Australie',
    'market.australia.region': 'Océanie',
    'market.australia.desc': 'L\'adoption croissante des véhicules électriques et un secteur des véhicules de loisirs dynamique créent d\'excellentes opportunités.',
    'market.ethiopia': 'Éthiopie',
    'market.ethiopia.region': 'Afrique de l\'Est',
    'market.ethiopia.desc': 'La plus grande économie d\'Afrique de l\'Est, avec des besoins en logistique et infrastructure en plein essor.',
    'market.liberia': 'Libéria',
    'market.liberia.region': 'Afrique de l\'Ouest',
    'market.liberia.desc': 'Un marché en croissance avec une forte demande en pièces pour camions commerciaux et pneus tout-terrain.',

    /* ── PRODUCT CARDS ── */
    'prod.tires.h3': 'Pneus premium',
    'prod.tires.brands': 'Marques : Triangle · Linglong · Sailun · Doublestar',
    'prod.tires.desc': 'Pneus PCR / TBR / OTR de 155/65R13 à 315/80R22.5. Profils tout-terrain, autoroute et hors-route.',
    'prod.tires.f1': 'Tailles : jantes 13" – 22.5"',
    'prod.tires.f2': 'Catégories PCR, TBR & OTR',
    'prod.tires.f3': 'Certifié EU / DOT / SNI / GCC',
    'prod.tires.f4': 'Marque privée & OEM disponible',
    'prod.tires.btn': 'Voir les pneus →',

    'prod.ebikes.h3': 'Vélos électriques',
    'prod.ebikes.brands': 'Ville · Pliant · Cargo · Fat-Tire',
    'prod.ebikes.desc': 'Jusqu\'à 230 km d\'autonomie. GPS intégré, alarme antivol et connectivité appli pour les navetteurs urbains.',
    'prod.ebikes.f1': 'Moteurs 250W – 1000W',
    'prod.ebikes.f2': 'Batterie lithium 48V / 60V',
    'prod.ebikes.f3': 'GPS + antivol + contrôle appli',
    'prod.ebikes.f4': 'Certifié EN15194 / CE / UL',
    'prod.ebikes.btn': 'Voir les vélos →',

    'prod.byd.h3': 'Pièces BYD',
    'prod.byd.brands': 'Modèles : BYD Han · Tang · Atto 3 · Song Plus · Dolphin',
    'prod.byd.desc': 'Pièces OEM et équivalent pour la gamme BYD. Modules batterie, moteurs, chargeurs, capteurs ADAS et carrosserie.',
    'prod.byd.f1': 'Modules batterie LFP & NMC',
    'prod.byd.f2': 'Pièces compatibles Blade Battery',
    'prod.byd.f3': 'Contrôleurs compatibles OBD',
    'prod.byd.f4': 'Garantie 12 mois pièces EV',
    'prod.byd.btn': 'Voir pièces BYD →',

    'prod.sinotruk.h3': 'Pièces Sinotruk',
    'prod.sinotruk.brands': 'Séries : HOWO · HOWO-A7 · Steyr · Hohan',
    'prod.sinotruk.desc': 'Moteurs, boîtes de vitesses, essieux, cabines et 500+ références pour camions Sinotruk. Populaire en Afrique & Asie du Sud-Est.',
    'prod.sinotruk.f1': 'Pièces moteurs WD615 / MC11',
    'prod.sinotruk.f2': 'Composants transmission complète',
    'prod.sinotruk.f3': 'Cabine & suspension',
    'prod.sinotruk.f4': 'Fret aérien rapide pour urgences',
    'prod.sinotruk.btn': 'Voir pièces Sinotruk →',
  },

  /* ══════════════════════════════════════════════════════════
     RUSSIAN
  ══════════════════════════════════════════════════════════ */
  ru: {
    /* ── NAV ── */
    'nav.home': 'Главная',
    'nav.products': 'Продукты',
    'nav.allProducts': '📦 Все продукты',
    'nav.tires': '🛞 Шины',
    'nav.tirePrices': '💰 Цены на шины',
    'nav.ebikes': '🚲 Электровелосипеды',
    'nav.bydParts': '⚡ Запчасти BYD',
    'nav.sinotrukParts': '🚛 Запчасти Sinotruk',
    'nav.carAccessories': '🚗 Автоаксессуары',
    'nav.about': 'О нас',
    'nav.faq': 'ЧЗВ',
    'nav.contact': 'Контакты',
    'nav.getQuote': 'Получить цену',

    /* ── FOOTER ── */
    'footer.tagline': 'Движем ваш мир вперёд',
    'footer.desc': 'Мы — профессиональная китайская торговая компания, специализирующаяся на экспорте шин, запчастей для электромобилей и электровелосипедов на мировые рынки.',
    'footer.quickLinks': 'Быстрые ссылки',
    'footer.products': 'Продукты',
    'footer.contactUs': 'Свяжитесь с нами',
    'footer.passengerTires': 'Легковые шины',
    'footer.truckTires': 'Грузовые и автобусные шины',
    'footer.bydParts': 'Запчасти BYD EV',
    'footer.sinotrukParts': 'Запчасти Sinotruk',
    'footer.electricBikes': 'Электровелосипеды',
    'footer.carAccessories': 'Автоаксессуары',
    'footer.evBattery': 'Аккумуляторные системы EV',
    'footer.evCharging': 'Зарядное оборудование',
    'footer.privacy': 'Политика конфиденциальности',
    'footer.terms': 'Условия использования',
    'footer.sitemap': 'Карта сайта',
    'footer.rights': '© 2025 CM IMPORT&EXPORT Co., Ltd. Все права защищены.',

    /* ── COMMON BUTTONS ── */
    'btn.getQuote': '📩 Получить бесплатное КП',
    'btn.browseProducts': 'Смотреть продукты',
    'btn.contactUs': '📩 Связаться с нами',
    'btn.startOrder': 'Начать заказ →',
    'btn.viewFaq': 'Смотреть ЧЗВ',
    'btn.askWhatsapp': '💬 Написать в WhatsApp',
    'btn.sendInquiry': '📋 Отправить запрос',
    'btn.backHome': '← На главную',
    'btn.exploreProducts': 'Смотреть продукты →',
    'btn.requestQuote': 'Запросить бесплатное КП',
    'btn.startPartnership': 'Начать сотрудничество →',
    'btn.buildTogether': 'Построим что-то вместе',
    'btn.viewProducts': 'Смотреть продукты',

    /* ── TRUST BAR ── */
    'trust.iso': '✔ Сертификат качества ISO 9001',
    'trust.ce': '✔ Соответствие CE & RoHS',
    'trust.factory': '✔ Цены напрямую с завода',
    'trust.shipping': '✔ Мировая доставка и логистика',
    'trust.oem': '✔ OEM / ODM под заказ',
    'trust.years': '✔ 12+ лет опыта в экспорте',
    'trust.sgs': '✔ Инспекция SGS перед отгрузкой',
    'trust.customs': '✔ Зарегистрированный экспортёр Китая',

    /* ── INDEX PAGE ── */
    'index.hero.badge': 'Специалист по прямым поставкам с китайских заводов',
    'index.hero.h1': 'Шины, запчасти EV и<br/><span class="highlight">Электровелосипеды напрямую</span><br/>с китайского завода',
    'index.hero.desc': 'Никаких посредников. CM IMPORT&EXPORT поставляет напрямую с ISO-сертифицированных китайских заводов и доставляет в ваш порт в Замбии, Сингапуре, Австралии, Эфиопии и Либерии — с полным пакетом таможенной документации.',
    'index.hero.tag1': '🏭 Прямо с завода',
    'index.hero.tag2': '✅ ISO сертифицировано',
    'index.hero.tag3': '🌍 15+ стран',
    'index.hero.tag4': '📦 FOB / CIF / DAP',
    'index.hero.stat1': 'Лет опыта',
    'index.hero.stat2': 'Активных клиентов',
    'index.hero.stat3': 'Ключевых рынков',
    'index.hero.stat4': 'Повторных заказов',
    'index.hero.scroll': 'Прокрутить',

    'index.products.tag': 'Наши продукты',
    'index.products.h2': 'Четыре основные товарные линейки',
    'index.products.desc': 'Шины, запчасти BYD & Sinotruk и электровелосипеды — напрямую от сертифицированных китайских производителей с доставкой до вашего порта.',

    'index.markets.tag': 'Глобальный охват',
    'index.markets.h2': 'Наши ключевые экспортные рынки',
    'index.markets.desc': 'Мы доставляем напрямую на растущие рынки Африки, Юго-Восточной Азии и Океании, опираясь на глубокое знание местных рынков.',

    'index.why.tag': 'Почему мы',
    'index.why.h2': 'Почему выбирают CM IMPORT&EXPORT?',
    'index.why.desc': 'Мы сочетаем производственное превосходство Китая с 12-летним опытом в экспорте, чтобы предложить вашему бизнесу непревзойдённую стоимость напрямую с завода.',
    'index.why.p1.title': 'Заводская цена',
    'index.why.p1.desc': 'Мы работаем напрямую с 50+ ISO-сертифицированными китайскими заводами — без агентов и наценок. Вы получаете ту же цену, что заводы предлагают местным покупателям.',
    'index.why.p2.title': 'Инспекция качества SGS',
    'index.why.p2.desc': 'Каждая партия проходит предотгрузочную инспекцию SGS на заводе. Подробные отчёты ОК предоставляются до окончательной оплаты.',
    'index.why.p3.title': 'Быстрая и надёжная доставка',
    'index.why.p3.desc': 'Морской фрахт (25–35 дней), авиафрахт (5–7 дней) и экспресс-доставка. Мы оформляем всю экспортную документацию: CO, BL и упаковочный лист.',
    'index.why.p4.title': 'OEM / ODM под заказ',
    'index.why.p4.desc': 'Индивидуальный логотип, упаковка и конфигурация товаров от 100 единиц. Создайте собственный бренд на базе китайского производства.',
    'index.why.p5.title': 'Поддержка после продажи',
    'index.why.p5.desc': 'Персональный менеджер, ответ в WhatsApp в течение 2 часов, сопровождение гарантийных случаев. Мы не исчезаем после доставки.',
    'index.why.p6.title': 'Прозрачный процесс',
    'index.why.p6.desc': 'Проформа-инвойс за 24 часа, отслеживание отправления в реальном времени и полный пакет документов для местной таможни — каждый раз.',

    'index.steps.tag': 'Простой процесс',
    'index.steps.h2': 'Как разместить заказ',
    'index.steps.desc': 'От запроса до доставки за 5 чётких шагов — никаких сложных процедур, никаких скрытых сюрпризов.',
    'index.steps.s1.title': 'Отправить запрос',
    'index.steps.s1.desc': 'Укажите, что вам нужно — продукт, количество, порт назначения. WhatsApp или наша форма.',
    'index.steps.s2.title': 'Получить коммерческое предложение',
    'index.steps.s2.desc': 'Мы отправляем подробный проформа-инвойс с ценой, сроками и вариантами доставки в течение 24 часов.',
    'index.steps.s3.title': 'Подтвердить и внести аванс',
    'index.steps.s3.desc': 'Согласитесь с условиями PI и оплатите 30% аванса по T/T. Мы немедленно подтверждаем ваш заказ в письменном виде.',
    'index.steps.s4.title': 'Производство и ОК',
    'index.steps.s4.desc': 'Товары производятся или закупаются. Мы проводим предотгрузочную инспекцию и присылаем фото/видео.',
    'index.steps.s5.title': 'Отгрузка и доставка',
    'index.steps.s5.desc': 'Остаток оплаты получен; товары погружены. Полный пакет документов направляется в течение 3 дней после отплытия.',

    'index.stats.tag': 'В цифрах',
    'index.stats.h2': 'Наши результаты говорят сами',
    'index.stats.s1': 'Лет в экспортном бизнесе',
    'index.stats.s2': 'Активных клиентов',
    'index.stats.s3': 'Выполненных отгрузок',
    'index.stats.s4': 'Стран охвачено',

    'index.testimonials.tag': 'Отзывы клиентов',
    'index.testimonials.h2': 'Что говорят наши партнёры',
    'index.testimonials.desc': 'Реальные отзывы импортёров из Африки, Юго-Восточной Азии и Океании, которые регулярно закупаются у нас.',

    'index.cta.h2': 'Готовы начать партнёрство?',
    'index.cta.desc': 'Отправьте нам запрос сегодня и получите индивидуальное коммерческое предложение в течение 24 часов.',

    /* ── ABOUT PAGE ── */
    'about.hero.breadcrumb': 'О нас',
    'about.hero.h1': 'О компании CM IMPORT&EXPORT',
    'about.hero.desc': 'Китайский экспортёр прямых поставок с завода шин, запчастей EV и электровелосипедов — обслуживаем Замбию, Сингапур, Австралию, Эфиопию и Либерию с 2012 года.',
    'about.story.tag': 'Наша история',
    'about.story.h2': 'Основаны с миссией связать Китай и мир',
    'about.story.p1': 'CM IMPORT&EXPORT была основана в 2012 году с простой миссией: дать международным покупателям тот же доступ к ценам и качеству китайских заводов, которым пользуются местные компании — без риска работы с неизвестными поставщиками за тысячи километров.',
    'about.story.p2': 'Мы начали с шин, выстраивая прямые отношения с заводами Triangle, Linglong и Sailun в провинции Шаньдун. Со временем расширились в запчасти BYD для электромобилей, компоненты грузовиков Sinotruk и электровелосипеды.',
    'about.story.p3': 'Сегодня 127 активных импортёров в Замбии, Сингапуре, Австралии, Эфиопии и Либерии доверяют нам полное управление цепочкой поставок из Китая.',

    'about.values.tag': 'Наши ценности',
    'about.values.h2': 'Что движет нами каждый день',
    'about.values.desc': 'Четыре принципа, которые определяют каждую отгрузку, каждые переговоры и каждое долгосрочное партнёрство.',
    'about.values.v1.title': 'Качество прежде всего',
    'about.values.v1.desc': 'Каждый экспортируемый нами товар проходит заводской аудит и предотгрузочную инспекцию SGS. Мы делимся отчётами ОК с каждым клиентом до оплаты.',
    'about.values.v2.title': 'Долгосрочное партнёрство',
    'about.values.v2.desc': 'Мы относимся к каждому импортёру как к долгосрочному партнёру. Наш уровень повторных заказов 96% отражает эту приверженность в реальных цифрах.',
    'about.values.v3.title': 'Полная прозрачность',
    'about.values.v3.desc': 'Вы получаете проформа-инвойс в течение 24 часов, отслеживание в реальном времени и полный пакет документов — без скрытых сборов.',
    'about.values.v4.title': 'Зелёная мобильность',
    'about.values.v4.desc': 'Наши запчасти BYD и линейка электровелосипедов активно поддерживают энергетический переход на развивающихся рынках.',

    'about.cert.tag': 'Соответствие и сертификации',
    'about.cert.h2': 'Международно признанные стандарты',
    'about.cert.desc': 'Наши продукты и процессы соответствуют регуляторным требованиям каждого рынка, который мы обслуживаем.',

    'about.track.tag': 'Наш послужной список',
    'about.track.h2': 'Проверенные результаты. Надёжные партнёры.',
    'about.track.s1': 'Лет опыта',
    'about.track.s2': 'Активных клиентов',
    'about.track.s3': 'Заводов-партнёров',
    'about.track.s4': 'Стран охвачено',

    'about.cta.h2': 'Построим что-то вместе',
    'about.cta.desc': 'Мы готовы стать вашим надёжным партнёром по закупкам и экспорту в Китае.',

    /* ── CONTACT PAGE ── */
    'contact.hero.breadcrumb': 'Контакты',
    'contact.hero.h1': 'Свяжитесь с нами',
    'contact.hero.desc': 'Отправьте нам запрос и получите подробное коммерческое предложение в течение 24 рабочих часов.',
    'contact.info.h2': 'Поговорим о бизнесе',
    'contact.info.desc': 'Ищете первый импортный КП или расширяете существующую линейку продуктов — наша команда готова помочь найти правильные товары по правильной цене.',
    'contact.info.email': 'Написать нам',
    'contact.info.whatsapp': 'WhatsApp / Телефон',
    'contact.info.whatsapp.detail': '+86 173 1830 5222<br/>Пн–Сб, 8:00–20:00 CST',
    'contact.info.address': 'Адрес компании',
    'contact.info.address.detail': 'CM IMPORT&EXPORT Co., Ltd.<br/>Китай',
    'contact.info.response': 'Время ответа',
    'contact.info.response.detail': 'КП в течение 24 часов<br/>Образцы через 5–7 дней',
    'contact.info.waBtn': '💬 Написать в WhatsApp',
    'contact.info.markets': 'Рынки, которые мы обслуживаем',
    'contact.form.header': '📋 Отправить запрос',
    'contact.form.subheader': 'Заполните форму ниже, и наш отдел продаж ответит оперативно.',
    'contact.form.firstName': 'Имя *',
    'contact.form.lastName': 'Фамилия *',
    'contact.form.email': 'Адрес электронной почты *',
    'contact.form.phone': 'WhatsApp / Телефон',
    'contact.form.company': 'Название компании',
    'contact.form.country': 'Ваша страна *',
    'contact.form.country.select': 'Выберите страну...',
    'contact.form.product': 'Интересующий продукт *',
    'contact.form.product.select': 'Выберите категорию...',
    'contact.form.quantity': 'Предполагаемое количество',
    'contact.form.message': 'Ваше сообщение *',
    'contact.form.submit': '🚀 Отправить запрос',
    'contact.form.privacy': 'Отправляя форму, вы соглашаетесь с нашей политикой конфиденциальности. Мы никогда не передаём ваши данные.',
    'contact.success.title': 'Запрос успешно отправлен!',
    'contact.success.desc': 'Спасибо за обращение. Наш отдел продаж свяжется с вами в течение 24 рабочих часов.',
    'contact.success.urgent': 'По срочным запросам пишите в WhatsApp.',

    /* ── FAQ PAGE ── */
    'faq.hero.breadcrumb': 'ЧЗВ',
    'faq.hero.h1': 'Часто задаваемые вопросы',
    'faq.hero.desc': 'Всё, что нужно знать перед первым заказом — MOQ, доставка, оплата, сертификаты и послепродажная поддержка.',
    'faq.tab.general': '📦 Общее и продукты',
    'faq.tab.shipping': '🚢 Доставка и логистика',
    'faq.tab.payment': '💳 Оплата и цены',
    'faq.tab.aftersales': '🔧 После продажи и качество',
    'faq.cta.h2': 'Остались вопросы?',
    'faq.cta.desc': 'Наш отдел продаж отвечает на все запросы в течение 24 часов. Напишите в WhatsApp для быстрого ответа.',

    /* ── PRODUCTS PAGE ── */
    'products.hero.breadcrumb': 'Продукты',
    'products.hero.h1': 'Полный ассортимент продуктов',
    'products.hero.desc': 'Шины, запчасти EV и электровелосипеды — готовы к экспорту на ваш рынок.',

    /* ── TIRES PAGE ── */
    'tires.hero.h1': 'Каталог шин',
    'tires.hero.desc': 'Просмотрите наш полный ассортимент легковых, внедорожных и грузовых шин.',
    'tires.step1': 'Выбрать категорию',
    'tires.step2': 'Выбрать бренд',
    'tires.step3': 'Выбрать размеры',

    /* ── E-BIKES PAGE ── */
    'ebikes.hero.h1': 'Электровелосипеды',
    'ebikes.hero.desc': '13 премиальных моделей в 4 категориях — складные, грузовые, горные, городские.',
    'ebikes.filter.all': 'Все модели',
    'ebikes.filter.folding': '🔄 Складные',
    'ebikes.filter.cargo': '📦 Грузовые',
    'ebikes.filter.mountain': '🏔️ Горные',
    'ebikes.filter.city': '🏙️ Городские',
    'ebikes.addCart': 'Добавить в запрос',
    'ebikes.viewSpec': 'Характеристики',

    /* ── INQUIRY CART ── */
    'cart.title': 'Ваш список запроса',
    'cart.empty': 'Список пуст. Просмотрите продукты и добавьте товары.',
    'cart.submit': '🚀 Отправить запрос',
    'cart.clear': 'Очистить список',

    /* ── PRICELIST ── */
    'pricelist.hero.h1': 'Прайс-лист шин',
    'pricelist.hero.desc': 'Оптовые цены напрямую с завода. Все цены FOB китайский порт.',

    /* ── CATALOG ── */
    'catalog.hero.h1': 'Каталог продуктов',
    'catalog.hero.desc': 'Скачайте полный каталог или просматривайте онлайн.',

    /* ── BYD PARTS ── */
    'byd.hero.h1': 'Запчасти BYD',
    'byd.hero.desc': 'Оригинальные и OEM-совместимые запчасти для BYD Han, Tang, Atto 3, Song Plus и Dolphin.',

    /* ── SINOTRUK PARTS ── */
    'sinotruk.hero.h1': 'Запчасти Sinotruk HOWO',
    'sinotruk.hero.desc': '500+ позиций для грузовиков HOWO, HOWO-A7, Steyr и Hohan.',

    /* ── CAR ACCESSORIES ── */
    'car.hero.h1': 'Автоаксессуары',
    'car.hero.desc': 'Премиальные автоаксессуары — видеорегистраторы, чехлы, держатели и многое другое.',

    /* ── MARKET CARDS ── */
    'market.zambia': 'Замбия',
    'market.zambia.region': 'Южная Африка',
    'market.zambia.desc': 'Быстро растущий автомобильный рынок с высоким спросом на внедорожные шины и прочные автозапчасти.',
    'market.singapore': 'Сингапур',
    'market.singapore.region': 'Юго-Восточная Азия',
    'market.singapore.desc': 'Мировой логистический хаб с высоким спросом на компоненты EV и решения городской мобильности.',
    'market.australia': 'Австралия',
    'market.australia.region': 'Океания',
    'market.australia.desc': 'Растущее внедрение электромобилей и сильный сектор рекреационных транспортных средств.',
    'market.ethiopia': 'Эфиопия',
    'market.ethiopia.region': 'Восточная Африка',
    'market.ethiopia.desc': 'Крупнейшая экономика Восточной Африки с растущими потребностями в логистике и транспортной инфраструктуре.',
    'market.liberia': 'Либерия',
    'market.liberia.region': 'Западная Африка',
    'market.liberia.desc': 'Растущий рынок с высоким спросом на запчасти для грузовиков и внедорожные шины.',

    /* ── PRODUCT CARDS ── */
    'prod.tires.h3': 'Премиальные шины',
    'prod.tires.brands': 'Бренды: Triangle · Linglong · Sailun · Doublestar',
    'prod.tires.desc': 'PCR / TBR / OTR шины от 155/65R13 до 315/80R22.5. Внедорожные, шоссейные и специальные модели.',
    'prod.tires.f1': 'Размеры: диски 13" – 22.5"',
    'prod.tires.f2': 'Категории PCR, TBR и OTR',
    'prod.tires.f3': 'Сертификаты EU / DOT / SNI / GCC',
    'prod.tires.f4': 'Частная марка и OEM доступны',
    'prod.tires.btn': 'Смотреть шины →',

    'prod.ebikes.h3': 'Электровелосипеды',
    'prod.ebikes.brands': 'Городские · Складные · Грузовые · Fat-Tire',
    'prod.ebikes.desc': 'До 230 км запаса хода. Встроенный GPS, сигнализация и подключение к приложению.',
    'prod.ebikes.f1': 'Моторы 250W – 1000W',
    'prod.ebikes.f2': 'Литиевые аккумуляторы 48V / 60V',
    'prod.ebikes.f3': 'GPS + сигнализация + приложение',
    'prod.ebikes.f4': 'Сертификаты EN15194 / CE / UL',
    'prod.ebikes.btn': 'Смотреть велосипеды →',

    'prod.byd.h3': 'Запчасти BYD',
    'prod.byd.brands': 'Модели: BYD Han · Tang · Atto 3 · Song Plus · Dolphin',
    'prod.byd.desc': 'Оригинальные и OEM-совместимые запчасти для всей линейки BYD. Модули батарей, двигатели, зарядные устройства, датчики ADAS и кузовные панели.',
    'prod.byd.f1': 'Модули батарей LFP и NMC',
    'prod.byd.f2': 'Запчасти для Blade Battery',
    'prod.byd.f3': 'OBD-совместимые контроллеры',
    'prod.byd.f4': 'Гарантия 12 месяцев на EV-детали',
    'prod.byd.btn': 'Смотреть запчасти BYD →',

    'prod.sinotruk.h3': 'Запчасти Sinotruk',
    'prod.sinotruk.brands': 'Серии: HOWO · HOWO-A7 · Steyr · Hohan',
    'prod.sinotruk.desc': 'Двигатели, КПП, мосты, кабины и 500+ позиций для грузовиков Sinotruk. Популярны в Африке и Юго-Восточной Азии.',
    'prod.sinotruk.f1': 'Запчасти двигателей WD615 / MC11',
    'prod.sinotruk.f2': 'Полные трансмиссионные компоненты',
    'prod.sinotruk.f3': 'Кабина и подвеска',
    'prod.sinotruk.f4': 'Быстрая авиадоставка срочных заказов',
    'prod.sinotruk.btn': 'Смотреть запчасти Sinotruk →',
  },

  /* ══════════════════════════════════════════════════════════
     UKRAINIAN
  ══════════════════════════════════════════════════════════ */
  uk: {
    /* ── NAV ── */
    'nav.home': 'Головна',
    'nav.products': 'Продукти',
    'nav.allProducts': '📦 Всі продукти',
    'nav.tires': '🛞 Шини',
    'nav.tirePrices': '💰 Ціни на шини',
    'nav.ebikes': '🚲 Електровелосипеди',
    'nav.bydParts': '⚡ Запчастини BYD',
    'nav.sinotrukParts': '🚛 Запчастини Sinotruk',
    'nav.carAccessories': '🚗 Автоаксесуари',
    'nav.about': 'Про нас',
    'nav.faq': 'ЧАП',
    'nav.contact': 'Контакти',
    'nav.getQuote': 'Отримати ціну',

    /* ── FOOTER ── */
    'footer.tagline': 'Рухаємо ваш світ вперед',
    'footer.desc': 'Ми — професійна китайська торгова компанія, що спеціалізується на експорті шин, запчастин для електромобілів та електровелосипедів на світові ринки.',
    'footer.quickLinks': 'Швидкі посилання',
    'footer.products': 'Продукти',
    'footer.contactUs': 'Зв\'яжіться з нами',
    'footer.passengerTires': 'Шини для легкових авто',
    'footer.truckTires': 'Вантажні та автобусні шини',
    'footer.bydParts': 'Запчастини BYD EV',
    'footer.sinotrukParts': 'Запчастини Sinotruk',
    'footer.electricBikes': 'Електровелосипеди',
    'footer.carAccessories': 'Автоаксесуари',
    'footer.evBattery': 'Акумуляторні системи EV',
    'footer.evCharging': 'Зарядне обладнання',
    'footer.privacy': 'Політика конфіденційності',
    'footer.terms': 'Умови використання',
    'footer.sitemap': 'Карта сайту',
    'footer.rights': '© 2025 CM IMPORT&EXPORT Co., Ltd. Всі права захищені.',

    /* ── COMMON BUTTONS ── */
    'btn.getQuote': '📩 Отримати безкоштовне КП',
    'btn.browseProducts': 'Переглянути продукти',
    'btn.contactUs': '📩 Зв\'язатися з нами',
    'btn.startOrder': 'Почати замовлення →',
    'btn.viewFaq': 'Переглянути ЧАП',
    'btn.askWhatsapp': '💬 Написати у WhatsApp',
    'btn.sendInquiry': '📋 Надіслати запит',
    'btn.backHome': '← На головну',
    'btn.exploreProducts': 'Переглянути продукти →',
    'btn.requestQuote': 'Запросити безкоштовне КП',
    'btn.startPartnership': 'Розпочати співпрацю →',
    'btn.buildTogether': 'Побудуємо щось разом',
    'btn.viewProducts': 'Переглянути продукти',

    /* ── TRUST BAR ── */
    'trust.iso': '✔ Якість сертифікована ISO 9001',
    'trust.ce': '✔ Відповідність CE & RoHS',
    'trust.factory': '✔ Ціни напряму з заводу',
    'trust.shipping': '✔ Глобальна доставка та логістика',
    'trust.oem': '✔ OEM / ODM на замовлення',
    'trust.years': '✔ 12+ років досвіду в експорті',
    'trust.sgs': '✔ Інспекція SGS перед відвантаженням',
    'trust.customs': '✔ Зареєстрований експортер Китаю',

    /* ── INDEX PAGE ── */
    'index.hero.badge': 'Спеціаліст з прямих постачань з китайських заводів',
    'index.hero.h1': 'Шини, запчастини EV та<br/><span class="highlight">Електровелосипеди напряму</span><br/>з китайського заводу',
    'index.hero.desc': 'Без посередників. CM IMPORT&EXPORT постачає напряму з ISO-сертифікованих китайських заводів та доставляє у ваш порт у Замбії, Сінгапурі, Австралії, Ефіопії та Ліберії — з повним пакетом митної документації.',
    'index.hero.tag1': '🏭 Напряму з заводу',
    'index.hero.tag2': '✅ ISO сертифіковано',
    'index.hero.tag3': '🌍 15+ країн',
    'index.hero.tag4': '📦 FOB / CIF / DAP',
    'index.hero.stat1': 'Років досвіду',
    'index.hero.stat2': 'Активних клієнтів',
    'index.hero.stat3': 'Ключових ринків',
    'index.hero.stat4': 'Повторних замовлень',
    'index.hero.scroll': 'Прокрутити',

    'index.products.tag': 'Наші продукти',
    'index.products.h2': 'Чотири основні товарні лінійки',
    'index.products.desc': 'Шини, запчастини BYD & Sinotruk та електровелосипеди — напряму від сертифікованих китайських виробників з доставкою до вашого порту.',

    'index.markets.tag': 'Глобальне охоплення',
    'index.markets.h2': 'Наші ключові експортні ринки',
    'index.markets.desc': 'Ми доставляємо напряму на ринки, що зростають, в Африці, Південно-Східній Азії та Океанії, спираючись на глибоке знання місцевих ринків.',

    'index.why.tag': 'Чому ми',
    'index.why.h2': 'Чому обирають CM IMPORT&EXPORT?',
    'index.why.desc': 'Ми поєднуємо виробничу досконалість Китаю з 12-річним досвідом в експорті, щоб запропонувати вашому бізнесу неперевершену вартість напряму з заводу.',
    'index.why.p1.title': 'Заводська ціна',
    'index.why.p1.desc': 'Ми працюємо напряму з 50+ ISO-сертифікованими китайськими заводами — без агентів і націнок. Ви отримуєте ту саму ціну, яку заводи пропонують місцевим покупцям.',
    'index.why.p2.title': 'Інспекція якості SGS',
    'index.why.p2.desc': 'Кожна партія проходить передвідвантажувальну інспекцію SGS на заводі. Детальні звіти QC надаються до остаточної оплати.',
    'index.why.p3.title': 'Швидка і надійна доставка',
    'index.why.p3.desc': 'Морський фрахт (25–35 днів), авіафрахт (5–7 днів) та експрес-доставка. Ми оформляємо всю експортну документацію: CO, BL і пакувальний список.',
    'index.why.p4.title': 'OEM / ODM на замовлення',
    'index.why.p4.desc': 'Індивідуальний логотип, упаковка та конфігурація товарів від 100 одиниць. Створіть власний бренд на базі китайського виробництва.',
    'index.why.p5.title': 'Підтримка після продажу',
    'index.why.p5.desc': 'Персональний менеджер, відповідь у WhatsApp протягом 2 годин, супровід гарантійних випадків. Ми не зникаємо після доставки.',
    'index.why.p6.title': 'Прозорий процес',
    'index.why.p6.desc': 'Проформа-інвойс за 24 години, відстеження відправлення в реальному часі та повний пакет документів для місцевої митниці — щоразу.',

    'index.steps.tag': 'Простий процес',
    'index.steps.h2': 'Як розмістити замовлення',
    'index.steps.desc': 'Від запиту до доставки за 5 чітких кроків — без складних процедур, без прихованих сюрпризів.',
    'index.steps.s1.title': 'Надіслати запит',
    'index.steps.s1.desc': 'Вкажіть, що вам потрібно — продукт, кількість, порт призначення. WhatsApp або наша форма.',
    'index.steps.s2.title': 'Отримати КП',
    'index.steps.s2.desc': 'Ми надсилаємо детальний проформа-інвойс з ціною, термінами та варіантами доставки протягом 24 годин.',
    'index.steps.s3.title': 'Підтвердити та внести аванс',
    'index.steps.s3.desc': 'Погодьтесь з умовами PI та оплатіть 30% авансу по T/T. Ми негайно підтверджуємо ваше замовлення письмово.',
    'index.steps.s4.title': 'Виробництво і QC',
    'index.steps.s4.desc': 'Товари виробляються або закуповуються. Ми проводимо передвідвантажувальну інспекцію і надсилаємо фото/відео.',
    'index.steps.s5.title': 'Відвантаження і доставка',
    'index.steps.s5.desc': 'Залишок оплати отримано; товари завантажені. Повний пакет документів надсилається протягом 3 днів після відплиття.',

    'index.stats.tag': 'У цифрах',
    'index.stats.h2': 'Наші результати говорять самі',
    'index.stats.s1': 'Років у бізнесі',
    'index.stats.s2': 'Активних клієнтів',
    'index.stats.s3': 'Відвантажень виконано',
    'index.stats.s4': 'Країн охоплено',

    'index.testimonials.tag': 'Відгуки клієнтів',
    'index.testimonials.h2': 'Що кажуть наші партнери',
    'index.testimonials.desc': 'Реальні відгуки імпортерів з Африки, Південно-Східної Азії та Океанії, які регулярно закуповуються у нас.',

    'index.cta.h2': 'Готові розпочати партнерство?',
    'index.cta.desc': 'Надішліть нам запит сьогодні та отримайте індивідуальне КП протягом 24 годин.',

    /* ── ABOUT PAGE ── */
    'about.hero.breadcrumb': 'Про нас',
    'about.hero.h1': 'Про компанію CM IMPORT&EXPORT',
    'about.hero.desc': 'Китайський експортер прямих постачань з заводу шин, запчастин EV та електровелосипедів — обслуговуємо Замбію, Сінгапур, Австралію, Ефіопію та Ліберію з 2012 року.',
    'about.story.tag': 'Наша історія',
    'about.story.h2': 'Засновані з місією поєднати Китай і світ',
    'about.story.p1': 'CM IMPORT&EXPORT була заснована у 2012 році з простою місією: надати міжнародним покупцям такий самий доступ до цін і якості китайських заводів, яким користуються місцеві компанії — без ризику роботи з невідомими постачальниками за тисячі кілометрів.',
    'about.story.p2': 'Ми почали з шин, налагоджуючи прямі відносини з заводами Triangle, Linglong та Sailun у провінції Шаньдун. Згодом розширились на запчастини BYD для електромобілів, компоненти вантажівок Sinotruk та електровелосипеди.',
    'about.story.p3': 'Сьогодні 127 активних імпортерів у Замбії, Сінгапурі, Австралії, Ефіопії та Ліберії довіряють нам повне управління ланцюжком постачань з Китаю.',

    'about.values.tag': 'Наші цінності',
    'about.values.h2': 'Що рухає нами щодня',
    'about.values.desc': 'Чотири принципи, що визначають кожне відвантаження, кожні переговори та кожне довгострокове партнерство.',
    'about.values.v1.title': 'Якість передусім',
    'about.values.v1.desc': 'Кожен товар, що ми експортуємо, проходить заводський аудит і передвідвантажувальну інспекцію SGS. Ми ділимося звітами QC з кожним клієнтом до оплати.',
    'about.values.v2.title': 'Довгострокове партнерство',
    'about.values.v2.desc': 'Ми ставимося до кожного імпортера як до довгострокового партнера. Наш рівень повторних замовлень 96% відображає цю відданість у реальних цифрах.',
    'about.values.v3.title': 'Повна прозорість',
    'about.values.v3.desc': 'Ви отримуєте проформа-інвойс протягом 24 годин, відстеження в реальному часі та повний пакет документів — без прихованих зборів.',
    'about.values.v4.title': 'Зелена мобільність',
    'about.values.v4.desc': 'Наші запчастини BYD та лінійка електровелосипедів активно підтримують енергетичний перехід на ринках, що розвиваються.',

    'about.cert.tag': 'Відповідність і сертифікації',
    'about.cert.h2': 'Міжнародно визнані стандарти',
    'about.cert.desc': 'Наші продукти та процеси відповідають регуляторним вимогам кожного ринку, який ми обслуговуємо.',

    'about.track.tag': 'Наш послужний список',
    'about.track.h2': 'Перевірені результати. Надійні партнери.',
    'about.track.s1': 'Років досвіду',
    'about.track.s2': 'Активних клієнтів',
    'about.track.s3': 'Заводів-партнерів',
    'about.track.s4': 'Країн охоплено',

    'about.cta.h2': 'Побудуємо щось разом',
    'about.cta.desc': 'Ми готові стати вашим надійним партнером із закупівель та експорту в Китаї.',

    /* ── CONTACT PAGE ── */
    'contact.hero.breadcrumb': 'Контакти',
    'contact.hero.h1': 'Зв\'яжіться з нами',
    'contact.hero.desc': 'Надішліть нам запит і отримайте детальне КП протягом 24 робочих годин.',
    'contact.info.h2': 'Поговоримо про бізнес',
    'contact.info.desc': 'Шукаєте перше імпортне КП чи розширюєте існуючу лінійку продуктів — наша команда готова допомогти знайти правильні товари за правильною ціною.',
    'contact.info.email': 'Написати нам',
    'contact.info.whatsapp': 'WhatsApp / Телефон',
    'contact.info.whatsapp.detail': '+86 173 1830 5222<br/>Пн–Сб, 8:00–20:00 CST',
    'contact.info.address': 'Адреса компанії',
    'contact.info.address.detail': 'CM IMPORT&EXPORT Co., Ltd.<br/>Китай',
    'contact.info.response': 'Час відповіді',
    'contact.info.response.detail': 'КП протягом 24 годин<br/>Зразки через 5–7 днів',
    'contact.info.waBtn': '💬 Написати у WhatsApp',
    'contact.info.markets': 'Ринки, які ми обслуговуємо',
    'contact.form.header': '📋 Надіслати запит',
    'contact.form.subheader': 'Заповніть форму нижче, і наш відділ продажів відповість оперативно.',
    'contact.form.firstName': 'Ім\'я *',
    'contact.form.lastName': 'Прізвище *',
    'contact.form.email': 'Адреса електронної пошти *',
    'contact.form.phone': 'WhatsApp / Телефон',
    'contact.form.company': 'Назва компанії',
    'contact.form.country': 'Ваша країна *',
    'contact.form.country.select': 'Оберіть країну...',
    'contact.form.product': 'Цікавий продукт *',
    'contact.form.product.select': 'Оберіть категорію...',
    'contact.form.quantity': 'Орієнтовна кількість',
    'contact.form.message': 'Ваше повідомлення *',
    'contact.form.submit': '🚀 Надіслати запит',
    'contact.form.privacy': 'Надсилаючи форму, ви погоджуєтесь з нашою політикою конфіденційності. Ми ніколи не передаємо ваші дані.',
    'contact.success.title': 'Запит успішно надіслано!',
    'contact.success.desc': 'Дякуємо за звернення. Наш відділ продажів зв\'яжеться з вами протягом 24 робочих годин.',
    'contact.success.urgent': 'Для термінових запитів пишіть у WhatsApp.',

    /* ── FAQ PAGE ── */
    'faq.hero.breadcrumb': 'ЧАП',
    'faq.hero.h1': 'Часті запитання',
    'faq.hero.desc': 'Все, що потрібно знати перед першим замовленням — MOQ, доставка, оплата, сертифікати та підтримка після продажу.',
    'faq.tab.general': '📦 Загальне і продукти',
    'faq.tab.shipping': '🚢 Доставка і логістика',
    'faq.tab.payment': '💳 Оплата і ціни',
    'faq.tab.aftersales': '🔧 Після продажу і якість',
    'faq.cta.h2': 'Залишились питання?',
    'faq.cta.desc': 'Наш відділ продажів відповідає на всі запити протягом 24 годин. Напишіть у WhatsApp для швидкої відповіді.',

    /* ── PRODUCTS PAGE ── */
    'products.hero.breadcrumb': 'Продукти',
    'products.hero.h1': 'Повний асортимент продуктів',
    'products.hero.desc': 'Шини, запчастини EV та електровелосипеди — готові до експорту на ваш ринок.',

    /* ── TIRES PAGE ── */
    'tires.hero.h1': 'Каталог шин',
    'tires.hero.desc': 'Переглянути повний асортимент легкових, позашляховикових та вантажних шин.',
    'tires.step1': 'Вибрати категорію',
    'tires.step2': 'Вибрати бренд',
    'tires.step3': 'Вибрати розміри',

    /* ── E-BIKES PAGE ── */
    'ebikes.hero.h1': 'Електровелосипеди',
    'ebikes.hero.desc': '13 преміальних моделей у 4 категоріях — складні, вантажні, гірські, міські.',
    'ebikes.filter.all': 'Всі моделі',
    'ebikes.filter.folding': '🔄 Складні',
    'ebikes.filter.cargo': '📦 Вантажні',
    'ebikes.filter.mountain': '🏔️ Гірські',
    'ebikes.filter.city': '🏙️ Міські',
    'ebikes.addCart': 'Додати до запиту',
    'ebikes.viewSpec': 'Характеристики',

    /* ── INQUIRY CART ── */
    'cart.title': 'Ваш список запиту',
    'cart.empty': 'Список порожній. Перегляньте продукти та додайте товари.',
    'cart.submit': '🚀 Надіслати запит',
    'cart.clear': 'Очистити список',

    /* ── PRICELIST ── */
    'pricelist.hero.h1': 'Прайс-лист шин',
    'pricelist.hero.desc': 'Оптові ціни напряму з заводу. Всі ціни FOB китайський порт.',

    /* ── CATALOG ── */
    'catalog.hero.h1': 'Каталог продуктів',
    'catalog.hero.desc': 'Завантажте повний каталог або переглядайте онлайн.',

    /* ── BYD PARTS ── */
    'byd.hero.h1': 'Запчастини BYD',
    'byd.hero.desc': 'Оригінальні та OEM-сумісні запчастини для BYD Han, Tang, Atto 3, Song Plus та Dolphin.',

    /* ── SINOTRUK PARTS ── */
    'sinotruk.hero.h1': 'Запчастини Sinotruk HOWO',
    'sinotruk.hero.desc': '500+ позицій для вантажівок HOWO, HOWO-A7, Steyr та Hohan.',

    /* ── CAR ACCESSORIES ── */
    'car.hero.h1': 'Автоаксесуари',
    'car.hero.desc': 'Преміальні автоаксесуари — відеореєстратори, чохли, тримачі та інше.',

    /* ── MARKET CARDS ── */
    'market.zambia': 'Замбія',
    'market.zambia.region': 'Південна Африка',
    'market.zambia.desc': 'Ринок автомобілів, що швидко зростає, з високим попитом на позашляховикові шини та міцні запчастини.',
    'market.singapore': 'Сінгапур',
    'market.singapore.region': 'Південно-Східна Азія',
    'market.singapore.desc': 'Світовий логістичний хаб з високим попитом на компоненти EV та рішення міської мобільності.',
    'market.australia': 'Австралія',
    'market.australia.region': 'Океанія',
    'market.australia.desc': 'Зростаюче впровадження електромобілів та сильний сектор рекреаційних транспортних засобів.',
    'market.ethiopia': 'Ефіопія',
    'market.ethiopia.region': 'Східна Африка',
    'market.ethiopia.desc': 'Найбільша економіка Східної Африки з зростаючими потребами у логістиці та транспортній інфраструктурі.',
    'market.liberia': 'Ліберія',
    'market.liberia.region': 'Західна Африка',
    'market.liberia.desc': 'Ринок, що зростає, з високим попитом на запчастини для вантажівок та позашляховикові шини.',

    /* ── PRODUCT CARDS ── */
    'prod.tires.h3': 'Преміальні шини',
    'prod.tires.brands': 'Бренди: Triangle · Linglong · Sailun · Doublestar',
    'prod.tires.desc': 'PCR / TBR / OTR шини від 155/65R13 до 315/80R22.5. Позашляховикові, шосейні та спеціальні моделі.',
    'prod.tires.f1': 'Розміри: диски 13" – 22.5"',
    'prod.tires.f2': 'Категорії PCR, TBR та OTR',
    'prod.tires.f3': 'Сертифікати EU / DOT / SNI / GCC',
    'prod.tires.f4': 'Приватна марка та OEM доступні',
    'prod.tires.btn': 'Переглянути шини →',

    'prod.ebikes.h3': 'Електровелосипеди',
    'prod.ebikes.brands': 'Міські · Складні · Вантажні · Fat-Tire',
    'prod.ebikes.desc': 'До 230 км запасу ходу. Вбудований GPS, сигналізація та підключення до додатку.',
    'prod.ebikes.f1': 'Мотори 250W – 1000W',
    'prod.ebikes.f2': 'Літієві акумулятори 48V / 60V',
    'prod.ebikes.f3': 'GPS + сигналізація + додаток',
    'prod.ebikes.f4': 'Сертифікати EN15194 / CE / UL',
    'prod.ebikes.btn': 'Переглянути велосипеди →',

    'prod.byd.h3': 'Запчастини BYD',
    'prod.byd.brands': 'Моделі: BYD Han · Tang · Atto 3 · Song Plus · Dolphin',
    'prod.byd.desc': 'Оригінальні та OEM-сумісні запчастини для всієї лінійки BYD. Модулі батарей, двигуни, зарядні пристрої, датчики ADAS та кузовні панелі.',
    'prod.byd.f1': 'Модулі батарей LFP та NMC',
    'prod.byd.f2': 'Запчастини для Blade Battery',
    'prod.byd.f3': 'OBD-сумісні контролери',
    'prod.byd.f4': 'Гарантія 12 місяців на EV-деталі',
    'prod.byd.btn': 'Переглянути запчастини BYD →',

    'prod.sinotruk.h3': 'Запчастини Sinotruk',
    'prod.sinotruk.brands': 'Серії: HOWO · HOWO-A7 · Steyr · Hohan',
    'prod.sinotruk.desc': 'Двигуни, КПП, мости, кабіни та 500+ позицій для вантажівок Sinotruk. Популярні в Африці та Південно-Східній Азії.',
    'prod.sinotruk.f1': 'Запчастини двигунів WD615 / MC11',
    'prod.sinotruk.f2': 'Повні трансмісійні компоненти',
    'prod.sinotruk.f3': 'Кабіна та підвіска',
    'prod.sinotruk.f4': 'Швидка авіадоставка термінових замовлень',
    'prod.sinotruk.btn': 'Переглянути запчастини Sinotruk →',
  }
};

/* ══════════════════════════════════════════════════════════
   I18N ENGINE
══════════════════════════════════════════════════════════ */

const LANG_META = {
  en: { flag: '🇬🇧', label: 'English',    code: 'EN' },
  fr: { flag: '🇫🇷', label: 'Français',   code: 'FR' },
  ru: { flag: '🇷🇺', label: 'Русский',    code: 'RU' },
  uk: { flag: '🇺🇦', label: 'Українська', code: 'UK' },
};

function getCurrentLang() {
  return localStorage.getItem('cm_lang') || 'en';
}

function t(key) {
  const lang = getCurrentLang();
  return (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) ||
         (TRANSLATIONS['en'] && TRANSLATIONS['en'][key]) ||
         key;
}

function applyTranslations() {
  const lang = getCurrentLang();
  document.documentElement.lang = lang;

  /* textContent */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (val) el.textContent = val;
  });

  /* innerHTML (for keys with HTML tags) */
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    const val = t(key);
    if (val) el.innerHTML = val;
  });

  /* placeholder */
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const val = t(key);
    if (val) el.placeholder = val;
  });

  /* option text */
  document.querySelectorAll('[data-i18n-option]').forEach(el => {
    const key = el.getAttribute('data-i18n-option');
    const val = t(key);
    if (val) el.textContent = val;
  });

  updateLangSwitcherUI();
}

function setLang(lang) {
  if (!TRANSLATIONS[lang]) return;
  localStorage.setItem('cm_lang', lang);
  applyTranslations();
  closeLangMenu();
}

function updateLangSwitcherUI() {
  const lang = getCurrentLang();
  const meta = LANG_META[lang] || LANG_META['en'];
  const flagEl = document.getElementById('langFlag');
  const codeEl = document.getElementById('langCode');
  if (flagEl) flagEl.textContent = meta.flag;
  if (codeEl) codeEl.textContent = meta.code;

  /* mark active option */
  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
}

function toggleLangMenu(e) {
  e.stopPropagation();
  const menu = document.getElementById('langMenu');
  if (menu) menu.classList.toggle('open');
}

function closeLangMenu() {
  const menu = document.getElementById('langMenu');
  if (menu) menu.classList.remove('open');
}

/* Close on outside click */
document.addEventListener('click', closeLangMenu);

/* Init */
document.addEventListener('DOMContentLoaded', applyTranslations);
