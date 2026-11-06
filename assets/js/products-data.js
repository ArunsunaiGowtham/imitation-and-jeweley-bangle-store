/**
 * Mayuri Jewels & Bangles - Master Products & Blog Data Store
 * Project 27: Imitation Jewellery & Bangles Store
 * Strictly no duplication of images between cards on the same page.
 */

const JEWELRY_PRODUCTS = [
  // --- NECKLACES ---
  {
    id: "neck-01",
    name: "Royal Heritage Pearl Choker Necklace",
    category: "Necklaces",
    subCategory: "Choker",
    price: 1899,
    originalPrice: 2799,
    discount: "32% OFF",
    rating: 4.9,
    reviewsCount: 142,
    badge: "Trending",
    image: "assets/images/products/necklace-royal-pearl-choker.jpg",
    gallery: [
      "assets/images/products/necklace-royal-pearl-choker.jpg",
      "assets/images/products/necklace-temple-modern-designs.jpg",
      "assets/images/products/necklace-statement-gold-collar.jpg"
    ],
    shortDesc: "Majestic multi-strand freshwater imitation pearls with an antique gold-plated floral centerpiece studded with ruby-colored CZ stones.",
    specs: {
      "Necklace Style": "Choker & Collar Set",
      "Plating": "24K Matte Gold Plating",
      "Base Metal": "High-Grade Brass Alloy",
      "Stone Type": "Austrian Crystals & Faux Pearls",
      "Closure Type": "Adjustable Silk Thread Dori",
      "Set Inclusions": "1 Choker Necklace, 1 Pair Matching Drop Earrings",
      "Occasion": "Festive Celebrations, Sangeet & Weddings",
      "Care": "Store in airtight pouch, avoid perfume and moisture"
    },
    colors: ["Classic Cream Gold", "Ruby Red Gold", "Emerald Green Gold"],
    sizes: ["Standard Adjustable Dori"],
    isBestSeller: true,
    isNewArrival: false,
    isFeatured: true
  },
  {
    id: "neck-02",
    name: "South Indian Temple Motif Choker & Haar",
    category: "Necklaces",
    subCategory: "Traditional Jewellery",
    price: 2499,
    originalPrice: 3599,
    discount: "30% OFF",
    rating: 4.8,
    reviewsCount: 98,
    badge: "Best Seller",
    image: "assets/images/products/necklace-temple-modern-designs.jpg",
    gallery: [
      "assets/images/products/necklace-temple-modern-designs.jpg",
      "assets/images/products/necklace-statement-gold-collar.jpg",
      "assets/images/products/necklace-royal-pearl-choker.jpg"
    ],
    shortDesc: "Intricate Nakshi temple work necklace showcasing traditional goddess and peacock motifs with matte antique gold finish.",
    specs: {
      "Necklace Style": "Temple Choker Necklace",
      "Plating": "Matte Temple Gold Antique Finish",
      "Base Metal": "Copper & Brass Alloy",
      "Stone Type": "Kempu Ruby Stones & Micro Pearls",
      "Closure Type": "Adjustable Golden Rope Cord",
      "Set Inclusions": "1 Temple Necklace, 1 Pair Jhumka Earrings",
      "Occasion": "Traditional Pujas, Classical Dance & Weddings",
      "Care": "Wipe with soft dry cloth after each wear"
    },
    colors: ["Antique Matte Gold", "Kemp Red & Green"],
    sizes: ["Adjustable Neckband"],
    isBestSeller: true,
    isNewArrival: false,
    isFeatured: true
  },
  {
    id: "neck-03",
    name: "Imperial Kundan Collar Statement Necklace",
    category: "Necklaces",
    subCategory: "Traditional Jewellery",
    price: 1750,
    originalPrice: 2499,
    discount: "30% OFF",
    rating: 4.7,
    reviewsCount: 76,
    badge: "New Arrival",
    image: "assets/images/products/necklace-statement-gold-collar.jpg",
    gallery: [
      "assets/images/products/necklace-statement-gold-collar.jpg",
      "assets/images/products/artisa-108.jpg",
      "assets/images/products/necklace-royal-pearl-choker.jpg"
    ],
    shortDesc: "A statement collar necklace crafted with intricate gold filigree, micro pearl drops, and glowing jadau kundan stones.",
    specs: {
      "Necklace Style": "Rigid Collar / Hasli Choker",
      "Plating": "High-Luster Yellow Gold Micron Plating",
      "Base Metal": "Forged Brass",
      "Stone Type": "Foil-Backed Kundan Glass Stones",
      "Closure Type": "Back Hook with Extension Chain",
      "Set Inclusions": "1 Collar Necklace, 1 Pair Stud Earrings",
      "Occasion": "Diwali Parties, Festive Receptions, Engagements",
      "Care": "Keep away from hair sprays and water"
    },
    colors: ["Royal Gold", "Rose Gold Polish"],
    sizes: ["Flexible Open Collar"],
    isBestSeller: false,
    isNewArrival: true,
    isFeatured: true
  },
  {
    id: "neck-04",
    name: "Rose Gold American Diamond Princess Necklace Set",
    category: "Necklaces",
    subCategory: "Party Wear Jewellery",
    price: 1599,
    originalPrice: 2299,
    discount: "30% OFF",
    rating: 4.9,
    reviewsCount: 114,
    badge: "Trending",
    image: "assets/images/products/necklace-rose-gold-cz-set.jpg",
    gallery: [
      "assets/images/products/necklace-rose-gold-cz-set.jpg",
      "assets/images/products/artisa-023.jpg",
      "assets/images/products/artisa-103.jpg"
    ],
    shortDesc: "Glamorous cocktail princess necklace handset with shimmering AAA grade cubic zirconia in sleek rose gold finish.",
    specs: {
      "Necklace Style": "Cocktail Princess Necklace",
      "Plating": "18K Rose Gold Rhodium Plating",
      "Base Metal": "Jeweller's Alloy (Skin-Safe & Lead-Free)",
      "Stone Type": "AAA Swiss Cubic Zirconia",
      "Closure Type": "Fold-over Clasp with Safety Latch",
      "Set Inclusions": "1 Necklace, 1 Pair Solitaire Drop Earrings",
      "Occasion": "Cocktail Galas, Sangeet Nights, Western Gowns",
      "Care": "Store separately in velvet lined box"
    },
    colors: ["Rose Gold", "Rhodium Silver", "Yellow Gold"],
    sizes: ["16-Inch Princess Length"],
    isBestSeller: false,
    isNewArrival: false,
    isFeatured: true
  },
  {
    id: "neck-05",
    name: "Sunburst Artisan Medallion Pendant Chain",
    category: "Necklaces",
    subCategory: "Fashion Jewellery",
    price: 999,
    originalPrice: 1499,
    discount: "33% OFF",
    rating: 4.6,
    reviewsCount: 63,
    badge: "New Arrival",
    image: "assets/images/products/artisa-023.jpg",
    gallery: [
      "assets/images/products/artisa-023.jpg",
      "assets/images/products/artisa-103.jpg",
      "assets/images/products/artisa-110.jpg"
    ],
    shortDesc: "Modern radiant sunburst medallion suspended from a delicate satellite link chain for contemporary ethnic styling.",
    specs: {
      "Necklace Style": "Pendant Chain Necklace",
      "Plating": "Durable PVD Gold Tone",
      "Base Metal": "Stainless Steel Base",
      "Stone Type": "Micro Pave Crystals",
      "Closure Type": "Lobster Claw Clasp",
      "Set Inclusions": "1 Pendant Necklace",
      "Occasion": "Daily College & Office Wear, Festive Fusion",
      "Care": "Tarnish-resistant, sweat-proof"
    },
    colors: ["Warm Sun Gold"],
    sizes: ["18-Inch with 2-Inch Extender"],
    isBestSeller: false,
    isNewArrival: true,
    isFeatured: false
  },
  {
    id: "neck-06",
    name: "Three-Tier Royal Polki Layered Necklace",
    category: "Necklaces",
    subCategory: "Traditional Jewellery",
    price: 2199,
    originalPrice: 3199,
    discount: "31% OFF",
    rating: 4.8,
    reviewsCount: 88,
    badge: "Best Seller",
    image: "assets/images/products/artisa-108.jpg",
    gallery: [
      "assets/images/products/artisa-108.jpg",
      "assets/images/products/artisa-110.jpg",
      "assets/images/products/artisa-103.jpg"
    ],
    shortDesc: "Dramatic three-tier cascading polki necklace accented with emerald green gemstone drops and golden bead spacers.",
    specs: {
      "Necklace Style": "Cascading Layered Haar",
      "Plating": "Antique Gold Micro Polish",
      "Base Metal": "Brass Alloy",
      "Stone Type": "Uncut Polki Look-Alike & Glass Emeralds",
      "Closure Type": "Handmade Silk Thread Tassel",
      "Set Inclusions": "1 Multi-Tier Necklace, 1 Pair Chandbali Earrings",
      "Occasion": "Mehendi, Sangeet, Wedding Celebrations",
      "Care": "Keep wrapped in cotton cloth"
    },
    colors: ["Emerald Green & Gold", "Ruby Maroon & Gold"],
    sizes: ["Cascading 20-Inch Tier"],
    isBestSeller: true,
    isNewArrival: false,
    isFeatured: true
  },

  // --- BANGLES ---
  {
    id: "bang-01",
    name: "Handcrafted Hyderabad Lac Stone-Studded Bangles (Set of 4)",
    category: "Bangles",
    subCategory: "Traditional Jewellery",
    price: 1199,
    originalPrice: 1799,
    discount: "33% OFF",
    rating: 4.9,
    reviewsCount: 168,
    badge: "Best Seller",
    image: "assets/images/products/bangles-hyderabad-handmade-lac.jpg",
    gallery: [
      "assets/images/products/bangles-hyderabad-handmade-lac.jpg",
      "assets/images/products/bangles-festive-glass-rainbow.jpg",
      "assets/images/products/bangles-traditional-ornaments-stack.jpg"
    ],
    shortDesc: "Famous handcrafted Hyderabad Laad Bazaar authentic lac bangles encrusted with mirrors, golden zaree, and colorful rhinestones.",
    specs: {
      "Bangle Type": "Handmade Lac Bangle Set",
      "Available Sizes": "2.4 (Small), 2.6 (Medium), 2.8 (Large)",
      "Base Material": "Natural Purified Lac & Brass Core",
      "Stone Type": "Faceted Glass Crystals & Mirror Work",
      "Closure": "Continuous Slip-On",
      "Quantity": "Set of 4 Bangles",
      "Occasion": "Karwa Chauth, Teej, Weddings & Festive Puja",
      "Care": "Keep away from direct high heat and water"
    },
    colors: ["Royal Red & Gold", "Peacock Blue", "Rani Pink"],
    sizes: ["2.4", "2.6", "2.8"],
    isBestSeller: true,
    isNewArrival: false,
    isFeatured: true
  },
  {
    id: "bang-02",
    name: "Vibrant Rainbow Festive Glass & Velvet Bangle Stack (Set of 24)",
    category: "Bangles",
    subCategory: "Traditional Jewellery",
    price: 799,
    originalPrice: 1199,
    discount: "33% OFF",
    rating: 4.8,
    reviewsCount: 210,
    badge: "Trending",
    image: "assets/images/products/bangles-festive-glass-rainbow.jpg",
    gallery: [
      "assets/images/products/bangles-festive-glass-rainbow.jpg",
      "assets/images/products/bangles-traditional-ornaments-stack.jpg",
      "assets/images/products/bangles-hyderabad-handmade-lac.jpg"
    ],
    shortDesc: "Richly pigmented festive glass bangles with shimmering micro-glitter and velvet trim for melodic tinkling Indian celebrations.",
    specs: {
      "Bangle Type": "Choodiyan Glass Bangle Set",
      "Available Sizes": "2.4, 2.6, 2.8, 2.10",
      "Base Material": "Toughened Artisanal Glass",
      "Finish": "Micro-Glitter & Frosted Sheen",
      "Closure": "Traditional Slip-On",
      "Quantity": "Box of 24 Assorted Bangles",
      "Occasion": "Diwali, Navratri Garba, Wedding Chooda Mix",
      "Care": "Handle gently, store in padded bangle box"
    },
    colors: ["Rainbow Multi", "Festive Crimson Red", "Golden Ochre"],
    sizes: ["2.4", "2.6", "2.8"],
    isBestSeller: false,
    isNewArrival: false,
    isFeatured: true
  },
  {
    id: "bang-03",
    name: "Antique Gold Embossed Temple Kadas (Pair of 2)",
    category: "Bangles",
    subCategory: "Traditional Jewellery",
    price: 1499,
    originalPrice: 2199,
    discount: "32% OFF",
    rating: 4.9,
    reviewsCount: 94,
    badge: "Best Seller",
    image: "assets/images/products/bangles-pair-gold-embossed.jpg",
    gallery: [
      "assets/images/products/bangles-pair-gold-embossed.jpg",
      "assets/images/products/bangles-hyderabad-handmade-lac.jpg",
      "assets/images/products/bangles-festive-glass-rainbow.jpg"
    ],
    shortDesc: "Heavy embossed temple architectural kadas featuring floral vine motifs and openable screw-lock design for easy wearing.",
    specs: {
      "Bangle Type": "Openable Kada Bracelet Pair",
      "Available Sizes": "Universal Fit with Screw Hinge (Fits 2.4 to 2.8)",
      "Base Material": "Solid Cast Brass Alloy",
      "Plating": "22K Antique Matte Gold Finish",
      "Closure": "Side Screw Pin Hinge",
      "Quantity": "Pair of 2 Broad Kadas",
      "Occasion": "Bridal Troussou, Traditional Weddings, Pongal",
      "Care": "Store in zip pouch, wipe with micro-fiber cloth"
    },
    colors: ["Antique Matte Gold", "Geru Gold Polish"],
    sizes: ["Universal Openable (2.4-2.8)"],
    isBestSeller: true,
    isNewArrival: false,
    isFeatured: true
  },
  {
    id: "bang-04",
    name: "Festive Silk Thread Hand-Wrapped Bangle Collection",
    category: "Bangles",
    subCategory: "Fashion Jewellery",
    price: 899,
    originalPrice: 1299,
    discount: "31% OFF",
    rating: 4.7,
    reviewsCount: 78,
    badge: "New Arrival",
    image: "assets/images/products/bangles-stacked-silk-threads.jpg",
    gallery: [
      "assets/images/products/bangles-stacked-silk-threads.jpg",
      "assets/images/products/bangles-festive-glass-rainbow.jpg",
      "assets/images/products/bangles-traditional-ornaments-stack.jpg"
    ],
    shortDesc: "Vibrant hand-spun silk thread wrapped bangles accented with golden stone ball chain and dangling pearl ghungroo charms.",
    specs: {
      "Bangle Type": "Silk Thread Designer Bangles",
      "Available Sizes": "2.4, 2.6, 2.8",
      "Base Material": "Lightweight Plastic Core with Pure Art Silk",
      "Stone Type": "Zircon Stone Ball Chain",
      "Closure": "Slip-On",
      "Quantity": "Set of 12 Designer Bangles",
      "Occasion": "Baby Showers (Valaikappu), Haldi & Mehendi",
      "Care": "Keep dry, avoid moisture or crushing"
    },
    colors: ["Turquoise & Mustard", "Hot Pink & Gold", "Emerald & Red"],
    sizes: ["2.4", "2.6", "2.8"],
    isBestSeller: false,
    isNewArrival: true,
    isFeatured: true
  },
  {
    id: "bang-05",
    name: "Kashmiri Silver Charm Bangles with Ghungroo Bells (Set of 8)",
    category: "Bangles",
    subCategory: "Traditional Jewellery",
    price: 649,
    originalPrice: 949,
    discount: "32% OFF",
    rating: 4.6,
    reviewsCount: 82,
    badge: "Trending",
    image: "assets/images/products/bangles-kashmiri-silver-charm.jpg",
    gallery: [
      "assets/images/products/bangles-kashmiri-silver-charm.jpg",
      "assets/images/products/bangles-kashmiri-rainbow-ghungroo.jpg",
      "assets/images/products/bangles-traditional-ornaments-stack.jpg"
    ],
    shortDesc: "German silver oxidized Kashmiri charm bangles with melodic tinkling ghungroo bells and delicate leaf engravings.",
    specs: {
      "Bangle Type": "Oxidized Silver Charm Bangles",
      "Available Sizes": "2.4, 2.6, 2.8",
      "Base Material": "German Silver Alloy",
      "Plating": "Vintage Oxidized Silver Sheen",
      "Closure": "Slip-On",
      "Quantity": "Set of 8 Bangles",
      "Occasion": "Dandiya Raas, College Ethnic Days, Boho Fusion",
      "Care": "Clean with dry cotton, do not wash"
    },
    colors: ["Antique Silver"],
    sizes: ["2.4", "2.6", "2.8"],
    isBestSeller: false,
    isNewArrival: false,
    isFeatured: true
  },
  {
    id: "bang-06",
    name: "Golden Kashmiri Rainbow Ghungroo Bangles (Set of 8)",
    category: "Bangles",
    subCategory: "Party Wear Jewellery",
    price: 699,
    originalPrice: 999,
    discount: "30% OFF",
    rating: 4.8,
    reviewsCount: 119,
    badge: "Best Seller",
    image: "assets/images/products/bangles-kashmiri-rainbow-ghungroo.jpg",
    gallery: [
      "assets/images/products/bangles-kashmiri-rainbow-ghungroo.jpg",
      "assets/images/products/bangles-kashmiri-silver-charm.jpg",
      "assets/images/products/bangles-pair-gold-embossed.jpg"
    ],
    shortDesc: "Sparkling golden charm bangles featuring colourful rainbow seed beads and rhythmic ghungroos that shimmer with movement.",
    specs: {
      "Bangle Type": "Golden Ghungroo Bangle Set",
      "Available Sizes": "2.4, 2.6, 2.8",
      "Base Material": "Brass Wire & Core",
      "Plating": "1 Gram Golden Micro-Plating",
      "Closure": "Slip-On",
      "Quantity": "Set of 8 Bangles",
      "Occasion": "Sangeet Performances, Festive Celebrations, Diwali",
      "Care": "Store inside bubble wrap or cloth bag"
    },
    colors: ["Bright Gold with Multi-Beads"],
    sizes: ["2.4", "2.6", "2.8"],
    isBestSeller: true,
    isNewArrival: false,
    isFeatured: false
  },

  // --- EARRINGS ---
  {
    id: "ear-01",
    name: "Handcrafted Royal Peacock Chandbali Jhumkas",
    category: "Earrings",
    subCategory: "Traditional Jewellery",
    price: 1199,
    originalPrice: 1699,
    discount: "29% OFF",
    rating: 4.9,
    reviewsCount: 184,
    badge: "Best Seller",
    image: "assets/images/products/earrings-colorful-jhumkas.jpg",
    gallery: [
      "assets/images/products/earrings-colorful-jhumkas.jpg",
      "assets/images/products/earrings-diamond-pearl-drop.jpg",
      "assets/images/products/artisa-001.jpg"
    ],
    shortDesc: "Multi-colored meenakari enamel jhumkas topped with regal peacocks, seed pearls, and cascading bell drops.",
    specs: {
      "Earring Style": "Chandbali Dome Jhumkas",
      "Closure Type": "Push Back Post with Comfort Washer",
      "Base Metal": "Hypoallergenic Brass Alloy",
      "Plating": "22K Antique Micron Gold",
      "Weight": "38 Grams per Pair",
      "Dimensions": "8.5 cm Height x 4.2 cm Width",
      "Occasion": "Weddings, Sangeet, Traditional Ceremonies",
      "Care": "Remove before sleeping or exercising"
    },
    colors: ["Emerald Green Meena", "Ruby Red Meena", "Royal Blue Meena"],
    sizes: ["Standard Statement Jhumka"],
    isBestSeller: true,
    isNewArrival: false,
    isFeatured: true
  },
  {
    id: "ear-02",
    name: "Classic Austrian Crystal Pearl Drop Earrings",
    category: "Earrings",
    subCategory: "Party Wear Jewellery",
    price: 799,
    originalPrice: 1199,
    discount: "33% OFF",
    rating: 4.8,
    reviewsCount: 132,
    badge: "Trending",
    image: "assets/images/products/earrings-diamond-pearl-drop.jpg",
    gallery: [
      "assets/images/products/earrings-diamond-pearl-drop.jpg",
      "assets/images/products/earrings-colorful-jhumkas.jpg",
      "assets/images/products/artisa-001.jpg"
    ],
    shortDesc: "Timeless teardrop faux South Sea pearls dangling gracefully from brilliant baguette-cut cubic zirconia studs.",
    specs: {
      "Earring Style": "Teardrop Pearl Dangle",
      "Closure Type": "French Wire Leverback Clasp",
      "Base Metal": "Silver Alloy Base",
      "Plating": "White Gold Rhodium Finish",
      "Weight": "14 Grams per Pair (Lightweight)",
      "Dimensions": "5 cm Height x 1.8 cm Width",
      "Occasion": "Evening Cocktails, Reception Gowns, Formal Dinners",
      "Care": "Wipe with lens cloth after wearing"
    },
    colors: ["Silver Pearl", "Warm Gold Pearl"],
    sizes: ["One Size"],
    isBestSeller: false,
    isNewArrival: false,
    isFeatured: true
  },
  {
    id: "ear-03",
    name: "Korean Minimal Crystal Blossom Studs",
    category: "Earrings",
    subCategory: "Fashion Jewellery",
    price: 449,
    originalPrice: 699,
    discount: "36% OFF",
    rating: 4.7,
    reviewsCount: 95,
    badge: "New Arrival",
    image: "assets/images/products/earrings-korean-stud-gem.jpg",
    gallery: [
      "assets/images/products/earrings-korean-stud-gem.jpg",
      "assets/images/products/artisa-001.jpg",
      "assets/images/products/earrings-diamond-pearl-drop.jpg"
    ],
    shortDesc: "Dainty blossom floral stud earrings accented with shimmering micro-pave zirconia for subtle daily elegance.",
    specs: {
      "Earring Style": "Floral Ear Studs",
      "Closure Type": "S925 Sterling Silver Needle Push Back",
      "Base Metal": "Eco Alloy (Lead & Nickel Free)",
      "Plating": "14K Gold Vacuum Plating",
      "Weight": "6 Grams per Pair (Featherlight)",
      "Dimensions": "1.4 cm Diameter",
      "Occasion": "Daily Office Wear, Casual Outings, Gifting",
      "Care": "Resistant to daily wear, wipe dry if exposed to rain"
    },
    colors: ["Rose Gold", "Yellow Gold", "Silver"],
    sizes: ["Dainty Stud"],
    isBestSeller: false,
    isNewArrival: true,
    isFeatured: false
  },
  {
    id: "ear-04",
    name: "Artisa Atelier Sculpted Crystal Drop Earrings",
    category: "Earrings",
    subCategory: "Party Wear Jewellery",
    price: 899,
    originalPrice: 1299,
    discount: "31% OFF",
    rating: 4.8,
    reviewsCount: 71,
    badge: "Best Seller",
    image: "assets/images/products/artisa-001.jpg",
    gallery: [
      "assets/images/products/artisa-001.jpg",
      "assets/images/products/earrings-diamond-pearl-drop.jpg",
      "assets/images/products/artisa-006.jpg"
    ],
    shortDesc: "Architectural dangling chandeliers with hand-faceted crystals arranged in modern geometric harmony.",
    specs: {
      "Earring Style": "Chandelier Dangle",
      "Closure Type": "Fish Hook with Rubber Stopper",
      "Base Metal": "Brass Alloy",
      "Plating": "Matte Satin Gold Polish",
      "Weight": "18 Grams per Pair",
      "Dimensions": "6.2 cm Height x 2.5 cm Width",
      "Occasion": "Destination Weddings, Festive Dinners",
      "Care": "Store flat in organizer"
    },
    colors: ["Satin Gold", "Polished Rhodium"],
    sizes: ["One Size"],
    isBestSeller: true,
    isNewArrival: false,
    isFeatured: true
  },
  {
    id: "ear-05",
    name: "Sparkling Austrian Crystal Floral Dangler Earrings",
    category: "Earrings",
    subCategory: "Party Wear Jewellery",
    price: 1099,
    originalPrice: 1599,
    discount: "31% OFF",
    rating: 4.8,
    reviewsCount: 94,
    badge: "New Arrival",
    image: "assets/images/products/earrings-crystal-flower-danglers.jpg",
    gallery: [
      "assets/images/products/earrings-crystal-flower-danglers.jpg",
      "assets/images/products/earrings-diamond-pearl-drop.jpg",
      "assets/images/products/earrings-colorful-jhumkas.jpg"
    ],
    shortDesc: "Delicate floral-motif statement earrings adorned with brilliant-cut Austrian crystals and silver-tone micron plating. Lightweight and graceful for wedding receptions and evening celebrations.",
    specs: {
      "Earring Style": "Floral Dangler / Drop",
      "Closure Type": "Post with Push Back & Silicon Cushion",
      "Base Metal": "Lead-Free Brass Alloy",
      "Plating": "Rhodium & 24K White Gold Polish",
      "Weight": "20 Grams per Pair",
      "Dimensions": "5.8 cm Height x 2.2 cm Width",
      "Occasion": "Cocktail, Sangeet & Reception",
      "Care": "Wipe with soft cotton cloth after wear. Keep away from water and direct perfume sprays."
    },
    colors: ["Rhodium Silver", "Rose Gold"],
    sizes: ["One Size"],
    isBestSeller: false,
    isNewArrival: true,
    isFeatured: true
  },

  // --- BRIDAL SETS ---
  {
    id: "brid-01",
    name: "Imperial Kundan Polki Full Bridal Ensemble",
    category: "Bridal Sets",
    subCategory: "Bridal Sets",
    price: 6499,
    originalPrice: 9999,
    discount: "35% OFF",
    rating: 5.0,
    reviewsCount: 89,
    badge: "Trending",
    image: "assets/images/bridal/bridal-traditional-ensemble-set.jpg",
    gallery: [
      "assets/images/bridal/bridal-traditional-ensemble-set.jpg",
      "assets/images/bridal/bridal-kundan-rubies-heritage.jpg",
      "assets/images/bridal/bridal-regal-gold-designs.jpg"
    ],
    shortDesc: "A complete royal bridal masterpiece including choker, raani haar, matching earrings, maang tikka, nath, and haathphool.",
    specs: {
      "Set Type": "Complete 7-Piece Bridal Ensemble",
      "Plating": "24K Royal Gold Micro Plating",
      "Base Metal": "High-Grade Jeweller's Brass",
      "Stone Type": "Glass Kundan, Faux Spinel, Natural Seed Pearls",
      "Set Inclusions": "1 Choker, 1 Long Raani Haar, 1 Pair Jhumkas, 1 Maang Tikka with Matha Patti, 1 Bridal Nath, 2 Haathphool",
      "Weight": "380 Grams (Complete Set)",
      "Occasion": "Main Wedding Pheras, Grand Receptions",
      "Care": "Includes luxury velvet bridal storage box"
    },
    colors: ["Deep Maroon Ruby & Gold", "Emerald Green & Gold", "Pastel Mint Gold"],
    sizes: ["Standard Adjustable Bridal Set"],
    isBestSeller: true,
    isNewArrival: false,
    isFeatured: true
  },
  {
    id: "brid-02",
    name: "Nizam Heritage Rubies & Uncut Polki Bridal Set",
    category: "Bridal Sets",
    subCategory: "Bridal Sets",
    price: 5299,
    originalPrice: 7999,
    discount: "34% OFF",
    rating: 4.9,
    reviewsCount: 64,
    badge: "Best Seller",
    image: "assets/images/bridal/bridal-kundan-rubies-heritage.jpg",
    gallery: [
      "assets/images/bridal/bridal-kundan-rubies-heritage.jpg",
      "assets/images/bridal/bridal-nizam-spinels-set.jpg",
      "assets/images/bridal/bridal-wedding-necklaces.jpg"
    ],
    shortDesc: "Inspired by Hyderabadi Nizam royal archives, featuring ruby-colored glass cabochons and natural pearl clusters.",
    specs: {
      "Set Type": "5-Piece Heritage Bridal Set",
      "Plating": "Antique Matte Gold Finish",
      "Base Metal": "Copper & Brass Forged Core",
      "Stone Type": "Faux Rubies & Basra-Style Imitation Pearls",
      "Set Inclusions": "1 Hasli Choker, 1 Pair Jhumka Earrings, 1 Maang Tikka, 1 Pair Kadas",
      "Weight": "290 Grams",
      "Occasion": "Royal Weddings, Sangeet Celebrations",
      "Care": "Clean with gentle dry cotton"
    },
    colors: ["Imperial Ruby Red & Gold"],
    sizes: ["Adjustable Back Cord"],
    isBestSeller: true,
    isNewArrival: false,
    isFeatured: true
  },
  {
    id: "brid-03",
    name: "Mughal Spinels & Emeralds Antique Bridal Choker Set",
    category: "Bridal Sets",
    subCategory: "Bridal Sets",
    price: 4799,
    originalPrice: 6999,
    discount: "31% OFF",
    rating: 4.8,
    reviewsCount: 52,
    badge: "New Arrival",
    image: "assets/images/bridal/bridal-nizam-spinels-set.jpg",
    gallery: [
      "assets/images/bridal/bridal-nizam-spinels-set.jpg",
      "assets/images/bridal/bridal-traditional-ensemble-set.jpg",
      "assets/images/bridal/bridal-regal-gold-designs.jpg"
    ],
    shortDesc: "Historic Mughal silhouette collar choker with embedded emerald crystal accents and baroque pearl drapes.",
    specs: {
      "Set Type": "Bridal Choker with Matching Accessories",
      "Plating": "22K Antique Micron Polish",
      "Base Metal": "Brass Alloy",
      "Stone Type": "Simulated Spinels & Raw Emerald Look-Alike",
      "Set Inclusions": "1 Choker Necklace, 1 Pair Long Earrings, 1 Maang Tikka",
      "Weight": "210 Grams",
      "Occasion": "Nikah, Wedding Reception, Engagement",
      "Care": "Avoid moisture and body lotion contact"
    },
    colors: ["Emerald Green & Gold", "Ruby Red"],
    sizes: ["Standard Adjustable Dori"],
    isBestSeller: false,
    isNewArrival: true,
    isFeatured: true
  },
  {
    id: "brid-04",
    name: "Regal Gold Filigree Traditional Bridal Haar Set",
    category: "Bridal Sets",
    subCategory: "Bridal Sets",
    price: 3999,
    originalPrice: 5999,
    discount: "33% OFF",
    rating: 4.9,
    reviewsCount: 77,
    badge: "Best Seller",
    image: "assets/images/bridal/bridal-regal-gold-designs.jpg",
    gallery: [
      "assets/images/bridal/bridal-regal-gold-designs.jpg",
      "assets/images/bridal/bridal-wedding-necklaces.jpg",
      "assets/images/bridal/bridal-traditional-ensemble-set.jpg"
    ],
    shortDesc: "Graceful gold-plated filigree raani haar adorned with auspicious Lakshmi and coin medallions for traditional bridal splendor.",
    specs: {
      "Set Type": "Long Raani Haar & Earrings Set",
      "Plating": "Yellow Gold 1-Gram Micron Plating",
      "Base Metal": "Copper & Brass",
      "Stone Type": "Micro Kempu Red Stones",
      "Set Inclusions": "1 Long Raani Haar (26 Inches), 1 Pair Traditional Jhumkas",
      "Weight": "180 Grams",
      "Occasion": "South Indian Weddings, Muhurtham",
      "Care": "Keep in airtight zip pouch"
    },
    colors: ["Auspicious Gold"],
    sizes: ["26-Inch Long Haar"],
    isBestSeller: true,
    isNewArrival: false,
    isFeatured: true
  },
  {
    id: "brid-05",
    name: "Handmade Royal Wedding Choker & Earring Combo",
    category: "Bridal Sets",
    subCategory: "Bridal Sets",
    price: 3499,
    originalPrice: 4999,
    discount: "30% OFF",
    rating: 4.7,
    reviewsCount: 68,
    badge: "Trending",
    image: "assets/images/bridal/bridal-wedding-necklaces.jpg",
    gallery: [
      "assets/images/bridal/bridal-wedding-necklaces.jpg",
      "assets/images/bridal/bridal-indian-bride-portrait.jpg",
      "assets/images/bridal/bridal-kundan-rubies-heritage.jpg"
    ],
    shortDesc: "Intricately woven seed-bead mesh necklace with floral kundan centerpiece and matching delicate studs.",
    specs: {
      "Set Type": "Bridal Choker Combo",
      "Plating": "Matte Antique Polish",
      "Base Metal": "Brass Alloy Core",
      "Stone Type": "Faux Pearls & CZ Crystals",
      "Set Inclusions": "1 Choker Necklace, 1 Pair Earrings",
      "Weight": "150 Grams",
      "Occasion": "Engagement Ceremony, Sangeet Night",
      "Care": "Keep dry, wipe after use"
    },
    colors: ["Classic Ivory Gold"],
    sizes: ["Adjustable Neckband"],
    isBestSeller: false,
    isNewArrival: false,
    isFeatured: false
  },
  {
    id: "brid-06",
    name: "Maharani Jadau Matha Patti & Choker Bridal Suite",
    category: "Bridal Sets",
    subCategory: "Bridal Sets",
    price: 5899,
    originalPrice: 8499,
    discount: "31% OFF",
    rating: 5.0,
    reviewsCount: 92,
    badge: "Best Seller",
    image: "assets/images/bridal/bridal-indian-bride-portrait.jpg",
    gallery: [
      "assets/images/bridal/bridal-indian-bride-portrait.jpg",
      "assets/images/bridal/bridal-traditional-ensemble-set.jpg",
      "assets/images/bridal/bridal-kundan-rubies-heritage.jpg"
    ],
    shortDesc: "Showstopping Rajasthani jadau bridal choker paired with an elaborate dual-side matha patti and nose ring.",
    specs: {
      "Set Type": "Full Maharani Bridal Suite",
      "Plating": "24K Antique Gold Finish",
      "Base Metal": "Brass & Copper Alloy",
      "Stone Type": "Finest Grade Kundan & Ruby Simulants",
      "Set Inclusions": "1 Heavy Choker, 1 Dual Matha Patti, 1 Pair Chandbalis, 1 Clip-On Nath",
      "Weight": "320 Grams",
      "Occasion": "Grand Indian Weddings & Royal Receptions",
      "Care": "Pack in velvet-lined hard box"
    },
    colors: ["Royal Crimson & Gold", "Emerald Green & Gold"],
    sizes: ["Full Adjustable Bridal Fit"],
    isBestSeller: true,
    isNewArrival: false,
    isFeatured: true
  },

  // --- JEWELLERY SETS ---
  {
    id: "set-01",
    name: "Festive Polki Layered Collar & Earring Set",
    category: "Jewellery Sets",
    subCategory: "Jewellery Sets",
    price: 2299,
    originalPrice: 3299,
    discount: "30% OFF",
    rating: 4.8,
    reviewsCount: 84,
    badge: "Trending",
    image: "assets/images/products/artisa-110.jpg",
    gallery: [
      "assets/images/products/artisa-110.jpg",
      "assets/images/products/artisa-108.jpg",
      "assets/images/products/artisa-103.jpg"
    ],
    shortDesc: "Complete festive combo set featuring tiered polki choker, chandelier earrings, and coordinating ring.",
    specs: {
      "Set Type": "Necklace & Earring Set",
      "Plating": "Micro Antique Gold Polish",
      "Base Metal": "Brass Alloy",
      "Stone Type": "Uncut Glass Polki & Faux Rubies",
      "Set Inclusions": "1 Necklace, 1 Pair Earrings, 1 Adjustable Ring",
      "Occasion": "Festive Parties, Diwali, Sangeet",
      "Care": "Wipe with dry microfiber cloth"
    },
    colors: ["Antique Gold", "Ruby Red Accent"],
    sizes: ["Standard Adjustable"],
    isBestSeller: false,
    isNewArrival: true,
    isFeatured: true
  },
  {
    id: "set-02",
    name: "Classic Dual-Layer Crystal Necklace & Stud Set",
    category: "Jewellery Sets",
    subCategory: "Fashion Jewellery",
    price: 1399,
    originalPrice: 1999,
    discount: "30% OFF",
    rating: 4.7,
    reviewsCount: 62,
    badge: "Best Seller",
    image: "assets/images/products/artisa-103.jpg",
    gallery: [
      "assets/images/products/artisa-103.jpg",
      "assets/images/products/artisa-023.jpg",
      "assets/images/products/artisa-001.jpg"
    ],
    shortDesc: "Minimalist dual-layer curb chain set accented with cubic zirconia drops and matching delicate stud earrings.",
    specs: {
      "Set Type": "Layered Chain & Stud Set",
      "Plating": "18K Yellow Gold PVD",
      "Base Metal": "Stainless Steel Base",
      "Stone Type": "AAA Cubic Zirconia",
      "Set Inclusions": "1 Dual Layer Necklace, 1 Pair Studs",
      "Occasion": "Brunch, Semi-Formal Dinners, Gifting",
      "Care": "Water-resistant daily wear"
    },
    colors: ["Polished Yellow Gold"],
    sizes: ["16-Inch & 18-Inch Layers"],
    isBestSeller: true,
    isNewArrival: false,
    isFeatured: false
  },

  // --- TRADITIONAL JEWELLERY ---
  {
    id: "trad-01",
    name: "South Indian Coin Lakshmi Kasu Mala Necklace",
    category: "Traditional Jewellery",
    subCategory: "Necklaces",
    price: 1999,
    originalPrice: 2899,
    discount: "31% OFF",
    rating: 4.9,
    reviewsCount: 125,
    badge: "Best Seller",
    image: "assets/images/products/artisa-002.jpg",
    gallery: [
      "assets/images/products/artisa-002.jpg",
      "assets/images/products/necklace-temple-modern-designs.jpg",
      "assets/images/products/artisa-004.jpg"
    ],
    shortDesc: "Auspicious Kasu Mala featuring overlapping embossed goddess coins, accented with ruby kemp stones and golden jhumkies.",
    specs: {
      "Style": "Kasu Mala Coin Necklace",
      "Plating": "Traditional Matte Gold",
      "Base Metal": "Copper Alloy",
      "Stone Type": "Synthetic Kemp Rubies",
      "Closure": "Adjustable Back Chain",
      "Set Inclusions": "1 Kasu Mala, 1 Pair Coin Studs",
      "Occasion": "Varalakshmi Vratham, Navratri, Weddings",
      "Care": "Keep away from perfumes"
    },
    colors: ["Temple Gold"],
    sizes: ["18-Inch Traditional Fit"],
    isBestSeller: true,
    isNewArrival: false,
    isFeatured: true
  },
  {
    id: "trad-02",
    name: "Antique Filigree Floral Choker with Kemp Insets",
    category: "Traditional Jewellery",
    subCategory: "Necklaces",
    price: 1699,
    originalPrice: 2399,
    discount: "29% OFF",
    rating: 4.8,
    reviewsCount: 78,
    badge: "Trending",
    image: "assets/images/products/artisa-004.jpg",
    gallery: [
      "assets/images/products/artisa-004.jpg",
      "assets/images/products/artisa-002.jpg",
      "assets/images/products/necklace-statement-gold-collar.jpg"
    ],
    shortDesc: "Timeless floral filigree choker with intricate wire lace work and rich ruby cabochons.",
    specs: {
      "Style": "Filigree Wirework Choker",
      "Plating": "22K Antique Micron Gold",
      "Base Metal": "Brass",
      "Stone Type": "Kemp Stone Replicas",
      "Closure": "Rope Dori",
      "Set Inclusions": "1 Choker, 1 Pair Floral Studs",
      "Occasion": "Festive Celebrations & Classical Functions",
      "Care": "Wipe with dry cloth"
    },
    colors: ["Antique Yellow Gold"],
    sizes: ["Adjustable Neckband"],
    isBestSeller: false,
    isNewArrival: false,
    isFeatured: false
  },

  // --- PARTY WEAR JEWELLERY ---
  {
    id: "party-01",
    name: "Glamorous Crystal Halo Solitaire Pendant & Drop Set",
    category: "Party Wear Jewellery",
    subCategory: "Jewellery Sets",
    price: 1499,
    originalPrice: 2199,
    discount: "32% OFF",
    rating: 4.8,
    reviewsCount: 91,
    badge: "Trending",
    image: "assets/images/products/artisa-005.jpg",
    gallery: [
      "assets/images/products/artisa-005.jpg",
      "assets/images/products/necklace-rose-gold-cz-set.jpg",
      "assets/images/products/artisa-007.jpg"
    ],
    shortDesc: "High-sparkle Austrian crystal halo pendant with matching drop earrings for cocktail parties and evening galas.",
    specs: {
      "Style": "Halo Solitaire Pendant Set",
      "Plating": "Rhodium Silver Platinum Plated",
      "Base Metal": "Skin-Safe Brass Alloy",
      "Stone Type": "Hearts & Arrows Cut Cubic Zirconia",
      "Closure": "Spring Ring Clasp",
      "Set Inclusions": "1 Pendant with Chain, 1 Pair Halo Drops",
      "Occasion": "Cocktail Parties, Receptions, Western Ensembles",
      "Care": "Store in anti-tarnish pouch"
    },
    colors: ["Rhodium Silver", "Rose Gold Polish"],
    sizes: ["16-Inch Chain with 2-Inch Extender"],
    isBestSeller: false,
    isNewArrival: false,
    isFeatured: true
  },
  {
    id: "party-02",
    name: "Champagne Zirconia Statement Cluster Earrings",
    category: "Party Wear Jewellery",
    subCategory: "Earrings",
    price: 899,
    originalPrice: 1299,
    discount: "31% OFF",
    rating: 4.7,
    reviewsCount: 56,
    badge: "New Arrival",
    image: "assets/images/products/artisa-006.jpg",
    gallery: [
      "assets/images/products/artisa-006.jpg",
      "assets/images/products/artisa-001.jpg",
      "assets/images/products/earrings-diamond-pearl-drop.jpg"
    ],
    shortDesc: "Dramatic cluster statement earrings featuring warm champagne crystal baguettes and brilliant marquis cuts.",
    specs: {
      "Style": "Cluster Statement Drops",
      "Plating": "Warm Champagne Gold Plating",
      "Base Metal": "Jeweller's Alloy",
      "Stone Type": "Faceted Glass Crystals",
      "Closure": "Push Back with Comfort Clip",
      "Weight": "22 Grams per Pair",
      "Occasion": "Gown Receptions, Sangeet Dance Nights",
      "Care": "Keep away from hairspray"
    },
    colors: ["Champagne Gold", "Clear Crystal"],
    sizes: ["One Size Statement"],
    isBestSeller: false,
    isNewArrival: true,
    isFeatured: false
  },

  // --- FASHION JEWELLERY ---
  {
    id: "fash-01",
    name: "Minimal Geometric Twisted Openable Bangle",
    category: "Fashion Jewellery",
    subCategory: "Bangles",
    price: 699,
    originalPrice: 999,
    discount: "30% OFF",
    rating: 4.7,
    reviewsCount: 88,
    badge: "Best Seller",
    image: "assets/images/products/artisa-007.jpg",
    gallery: [
      "assets/images/products/artisa-007.jpg",
      "assets/images/products/artisa-008.jpg",
      "assets/images/products/artisa-009.jpg"
    ],
    shortDesc: "Sleek sculptural twisted cuff bracelet with minimalist aesthetic for everyday stacking and office wear.",
    specs: {
      "Style": "Minimalist Twist Cuff",
      "Plating": "18K Real Gold Electroplating",
      "Base Metal": "Stainless Steel (Non-Tarnish)",
      "Closure": "Flexible Open Tension Cuff",
      "Occasion": "Everyday Chic, Smart Casual, College",
      "Care": "Waterproof, perfume-resistant"
    },
    colors: ["Gold", "Silver", "Rose Gold"],
    sizes: ["Flexible Universal Fit"],
    isBestSeller: true,
    isNewArrival: false,
    isFeatured: true
  },
  {
    id: "fash-02",
    name: "Modern Interlocking Circles Pendant Necklace",
    category: "Fashion Jewellery",
    subCategory: "Necklaces",
    price: 599,
    originalPrice: 899,
    discount: "33% OFF",
    rating: 4.6,
    reviewsCount: 74,
    badge: "Trending",
    image: "assets/images/products/artisa-008.jpg",
    gallery: [
      "assets/images/products/artisa-008.jpg",
      "assets/images/products/artisa-009.jpg",
      "assets/images/products/artisa-023.jpg"
    ],
    shortDesc: "Symbolic eternity interlocking double circle pendant suspended from a dainty paperclip link chain.",
    specs: {
      "Style": "Interlocking Circle Necklace",
      "Plating": "PVD 18K Yellow Gold",
      "Base Metal": "Titanium Steel",
      "Stone Type": "Micro Crystal Pave",
      "Closure": "Lobster Clasp",
      "Occasion": "Daily Wear, Anniversary Gift, Minimalist Styling",
      "Care": "Tarnish-free guarantee"
    },
    colors: ["Warm Yellow Gold", "Platinum Silver"],
    sizes: ["16-Inch with Extender"],
    isBestSeller: false,
    isNewArrival: false,
    isFeatured: false
  },
  {
    id: "fash-03",
    name: "Contemporary Textured Huggie Hoops",
    category: "Fashion Jewellery",
    subCategory: "Earrings",
    price: 499,
    originalPrice: 799,
    discount: "38% OFF",
    rating: 4.8,
    reviewsCount: 99,
    badge: "New Arrival",
    image: "assets/images/products/artisa-009.jpg",
    gallery: [
      "assets/images/products/artisa-009.jpg",
      "assets/images/products/artisa-010.jpg",
      "assets/images/products/artisa-007.jpg"
    ],
    shortDesc: "Chunky textured mini huggie hoop earrings designed for comfortable all-day wear and stacking.",
    specs: {
      "Style": "Chunky Huggie Hoops",
      "Plating": "14K Heavy Gold Polish",
      "Base Metal": "Hypoallergenic Copper Alloy",
      "Closure": "Click-Top Clasp",
      "Weight": "8 Grams per Pair",
      "Occasion": "Daily Wear, Casual Brunch, Gift Idea",
      "Care": "Clean with dry soft cloth"
    },
    colors: ["Gold", "Silver"],
    sizes: ["1.6 cm Diameter"],
    isBestSeller: false,
    isNewArrival: true,
    isFeatured: true
  },
  {
    id: "fash-04",
    name: "Crystal Pavé Celestial Huggies",
    category: "Fashion Jewellery",
    subCategory: "Earrings",
    price: 549,
    originalPrice: 849,
    discount: "35% OFF",
    rating: 4.9,
    reviewsCount: 110,
    badge: "Best Seller",
    image: "assets/images/products/artisa-010.jpg",
    gallery: [
      "assets/images/products/artisa-010.jpg",
      "assets/images/products/artisa-009.jpg",
      "assets/images/products/artisa-001.jpg"
    ],
    shortDesc: "Sparkling mini huggie earrings set with precision micro pavé crystals and tiny dangling star charms.",
    specs: {
      "Style": "Dangle Star Huggie",
      "Plating": "18K Gold Polish",
      "Base Metal": "Brass",
      "Stone Type": "Micro Zirconia Crystals",
      "Closure": "Snap Bar Clasp",
      "Occasion": "Party Fusion, Everyday Glamour",
      "Care": "Avoid direct perfume spray"
    },
    colors: ["Gold", "Rose Gold"],
    sizes: ["Standard Huggie"],
    isBestSeller: true,
    isNewArrival: false,
    isFeatured: false
  }
];

// --- BLOG ARTICLES DATA ---
const BLOG_ARTICLES = [
  {
    id: "blog-01",
    slug: "how-to-measure-bangle-size-at-home",
    title: "How to Measure Your Bangle Size Accurately at Home: The Complete Sizing Guide",
    category: "Bangle Styling",
    author: "Meera Ranganathan",
    authorRole: "Head Jewellery Stylist",
    authorBio: "Meera is Mayuri's lead jewellery stylist with over 12 years of experience curating bespoke accessories, wrist ergonomics, and perfect bangle sizing across bridal suites.",
    date: "November 2, 2026",
    readTime: "5 min read",
    image: "assets/images/blog/blog-bangle-sizing-guide.jpg",
    summary: "Never guess your bangle size again! Learn the foolproof string method, hand-breadth measurement, and diameter conversion chart for ordering bangles online.",
    content: `
      <p class="lead">Ordering bangles online can feel daunting when you're uncertain whether you need a 2.4, 2.6, or 2.8 size. Unlike rings that rest on a single finger, bangles must squeeze comfortably over the widest point of your hand while staying gracefully fitted on your wrist without slipping off.</p>
      
      <h3>The Essential Hand Measurement Technique</h3>
      <p>To find your true size, bring your thumb and pinky finger together as if you are slipping on a tight bangle. Take a flexible tailor's tape or a piece of cotton thread, and wrap it around the widest knuckle part of your hand. Mark the meeting point and measure the length on a standard ruler in inches or centimeters.</p>

      <div class="table-responsive my-4">
        <table class="table table-bordered table-striped text-center">
          <thead class="table-dark">
            <tr>
              <th>Indian Bangle Size</th>
              <th>Inner Diameter (Inches)</th>
              <th>Inner Diameter (mm)</th>
              <th>Hand Circumference</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><strong>2.2</strong> (Extra Small)</td><td>2.125"</td><td>54.0 mm</td><td>6.75" - 7.0"</td></tr>
            <tr><td><strong>2.4</strong> (Small)</td><td>2.25"</td><td>57.2 mm</td><td>7.0" - 7.5"</td></tr>
            <tr><td><strong>2.6</strong> (Medium - Standard)</td><td>2.375"</td><td>60.3 mm</td><td>7.5" - 8.0"</td></tr>
            <tr><td><strong>2.8</strong> (Large)</td><td>2.50"</td><td>63.5 mm</td><td>8.0" - 8.5"</td></tr>
            <tr><td><strong>2.10</strong> (Extra Large)</td><td>2.625"</td><td>66.7 mm</td><td>8.5" - 9.0"</td></tr>
          </tbody>
        </table>
      </div>

      <h3>Slip-On vs. Openable Screw Kadas</h3>
      <p>If your hand knuckles are wider than your wrist bone, look for our <strong>Openable Screw Kadas</strong>. These feature an invisible hinge and safety screw pin that open completely, allowing you to wear a snug, perfectly contoured bangle without forcing it over your knuckles!</p>

      <blockquote>"A well-fitted bangle stack should sing a melodic tune when you gesture, never pinch the skin or threaten to slip past your palm."</blockquote>
    `
  },
  {
    id: "blog-02",
    slug: "caring-for-imitation-jewellery-long-lasting-shine",
    title: "How to Make Your Artificial & Imitation Jewellery Last for Years: 7 Golden Rules",
    category: "Jewellery Care",
    author: "Rajeshwar Sen",
    authorRole: "Master Artisan & Metallurgist",
    authorBio: "Rajeshwar brings over two decades of craftsmanship in base alloys, micron electroplating, and anti-tarnish protective sealing for traditional Indian imitation ornaments.",
    date: "October 28, 2026",
    readTime: "6 min read",
    image: "assets/images/blog/blog-filigree-craftsmanship.jpg",
    summary: "Discover insider preservation tips from our workshop: preventing tarnish, safe cleaning solutions, zip-lock pouch storage, and avoiding moisture damage.",
    content: `
      <p class="lead">High-quality imitation jewellery is crafted from durable copper, brass, and alloys plated with genuine gold, rhodium, or silver micron coats. With thoughtful care, your favorite choker or jhumkas can maintain their brilliant festive luster for five years or longer.</p>

      <h3>Rule #1: The 'Last On, First Off' Principle</h3>
      <p>Perfumes, deodorants, hair sprays, moisturizers, and cosmetics contain alcohol and chemical sulfates that instantly oxidize micron gold plating. Always put your jewellery on <em>after</em> your makeup, hair styling, and fragrance have completely dried for at least 10 minutes. When returning home, take your jewellery off before changing clothes or washing your face.</p>

      <h3>Rule #2: The Secret of Airtight Zip Pouches</h3>
      <p>Never store imitation jewellery in open trays, wooden velvet cases with chemical glues, or cardboard boxes. The glue in decorative boxes releases sulfur gases over time that tarnish metals. Instead, wrap each piece in soft dry tissue paper and place it inside a separate airtight zip-lock polyethylene pouch.</p>

      <h3>Rule #3: Never Use Liquid Cleaners or Soap Water</h3>
      <p>Ultrasonic cleaners, soaps, and commercial chemical jewellery dips are designed for solid gold and platinum; they will strip the delicate lacquer on imitation pieces. Simply buff gently with a clean, dry, lint-free micro-fiber lens cloth after each wear to remove skin oils and perspiration.</p>
    `
  },
  {
    id: "blog-03",
    slug: "history-and-symbolism-of-indian-bangles",
    title: "The Cultural Tapestry of Indian Bangles: Traditions, Colors & Glass Craftsmanship",
    category: "Bangle Styling",
    author: "Priyanka Joshi",
    authorRole: "Cultural Historian & Curator",
    authorBio: "Priyanka is a cultural researcher documenting regional Indian adornment, bridal chooda rituals, and the ancient glassmaking heritage of Rajasthan and Firozabad.",
    date: "October 19, 2026",
    readTime: "7 min read",
    image: "assets/images/blog/blog-bangles-ornaments-history.jpg",
    summary: "From Mohenjo-daro's Dancing Girl to royal Rajput choodas and festive glass bangles, uncover the sacred heritage and symbolism of the Indian bangle.",
    content: `
      <p class="lead">Excavations at the ancient Indus Valley site of Mohenjo-daro uncovered bronze and shell bangles dating back to 2600 BCE, proving that the bangle is one of humanity's oldest surviving adornments. In Indian culture, bangles are not merely decorative ornaments; they symbolize prosperity, marital blessing (suhaag), rhythm, and feminine grace.</p>

      <h3>The Sacred Meanings of Bangle Colors</h3>
      <ul>
        <li><strong>Red & Crimson:</strong> Symbolizes love, energy, auspicious new beginnings, and marital devotion.</li>
        <li><strong>Green:</strong> In Maharashtra and South India, green glass bangles denote fertility, nature, and peaceful household harmony.</li>
        <li><strong>Yellow & Mustard:</strong> Representative of happiness, intellect, and bright sun energy during Haldi ceremonies.</li>
        <li><strong>Golden:</strong> Signifies fortune, wealth, and timeless celebration across all communities.</li>
      </ul>

      <p>Today's modern fashion embraces fusion bangle stacks: pairing antique matte gold kadas with vivid glass bangles or handcrafted silk thread accents to match contemporary lehengas and sarees.</p>
    `
  },
  {
    id: "blog-04",
    slug: "necklaces-styling-guide-necklines",
    title: "Matching Necklaces to Necklines: The Ultimate Festive & Bridal Styling Handbook",
    category: "Necklace Designs",
    author: "Ananya Deshmukh",
    authorRole: "Celebrity Fashion Stylist",
    authorBio: "Ananya styles runway collections and celebrity shoots, specializing in harmonious necklace and neckline pairings across contemporary lehengas and ethnic couture.",
    date: "October 12, 2026",
    readTime: "4 min read",
    image: "assets/images/blog/blog-necklace-styling-guide.jpg",
    summary: "Deep V, Sweetheart, Boat Neck or High Collar? Learn the styling formulas celebrity stylists use to choose the right necklace for every blouse and gown.",
    content: `
      <p class="lead">A gorgeous necklace can lose its visual impact if it clashes with your blouse neckline. When harmony exists between your outfit's neckline and the necklace's silhouette, your entire ensemble looks bespoke and regal.</p>

      <h3>1. Sweetheart & Deep U-Necklines</h3>
      <p>The gentle curve of a sweetheart neckline creates an open canvas. A broad <strong>Kundan Collar or Floral Choker</strong> nested just above the blouse border creates a dramatic, royal frame for your face and collarbones.</p>

      <h3>2. High Neck & Bandhgala Blouses</h3>
      <p>Avoid tight chokers with high collars as they overcrowd the throat. Instead, opt for a long <strong>Raani Haar or Multilayered Pearl Mala</strong> (24 to 30 inches) that cascades gracefully over the fabric, elongating your torso.</p>

      <h3>3. V-Neck & Plunging Cuts</h3>
      <p>Mirror the V-angle with a tapering pendant necklace or a triangular graduated polki necklace that draws the eye naturally down without interrupting the neckline's geometry.</p>
    `
  },
  {
    id: "blog-05",
    slug: "choosing-earrings-for-your-face-shape",
    title: "How to Choose the Perfect Earrings for Your Face Shape: Jhumkas vs. Chandbalis",
    category: "Earrings Fashion",
    author: "Kavita Chawla",
    authorRole: "Senior Face & Image Consultant",
    authorBio: "Kavita is an image consultant specializing in facial architecture, helping women select flattering earring silhouettes that harmonize with their natural bone structure.",
    date: "September 29, 2026",
    readTime: "5 min read",
    image: "assets/images/blog/blog-earrings-face-shapes.jpg",
    summary: "Round, Oval, Square, or Heart? Discover which earring silhouettes balance your facial features, accentuate your cheekbones, and photograph best.",
    content: `
      <p class="lead">Earrings sit directly in the frame of your face, making them the most noticeable accessory in conversation and wedding photographs. Choosing the right silhouette is all about creating complementary visual balance.</p>

      <h3>Oval Face: The Universal Canvas</h3>
      <p>Lucky you! Oval faces can wear almost any earring silhouette. From oversized bell jhumkas to crescent chandbalis and sleek shoulder dusters, your balanced proportions carry every style effortlessly.</p>

      <h3>Round Face: Elongating Silhouettes</h3>
      <p>Avoid circular disc studs or wide button tops that accentuate facial fullness. Opt for linear drop earrings, tapering teardrops, or elongated jhumkis with slender ear chains (kan chains) that visually draw the eyes downward.</p>

      <h3>Square Face: Softening Curves</h3>
      <p>Strong jawlines look breathtaking when contrasted with soft curved lines. Choose sweeping <strong>Chandbalis</strong>, crescent hoops, or tiered pearls to bring gentle fluidity to architectural jawlines.</p>
    `
  },
  {
    id: "blog-06",
    slug: "kundan-vs-polki-vs-jadau-explained",
    title: "Kundan vs. Polki vs. Jadau: Understanding the Craft Behind Royal Indian Jewellery",
    category: "Jewellery Trends",
    author: "Vikramaditya Rathore",
    authorRole: "Heritage Gemologist & Royal Appraiser",
    authorBio: "Vikramaditya has appraised royal Rajasthani estate collections for over 20 years, possessing deep expertise in Kundan foil crafting, Polki diamond cuts, and Jadau metalwork.",
    date: "September 15, 2026",
    readTime: "6 min read",
    image: "assets/images/blog/blog-kundan-vs-polki.jpg",
    summary: "Clear up the confusion once and for all: learn the historical origins, crafting methods, and visual differences between Kundan, Polki, and Jadau jewellery.",
    content: `
      <p class="lead">Walk into any traditional Indian jewellery boutique and you will hear the terms 'Kundan', 'Polki', and 'Jadau' used interchangeably. While they often appear together in royal Rajasthani ornaments, they refer to three distinctly different aspects of jewellery crafting.</p>

      <h3>1. Jadau: The Technique of Setting</h3>
      <p><strong>Jadau</strong> is not a stone or a metal; it is the ancient artisan technique of embedding stones into malleable pure gold or silver foil without using prongs or glues. Originating in Rajasthan and Gujarat during the Mughal era, it requires master craftsmen called <em>Jadarias</em>.</p>

      <h3>2. Polki: The Uncut Raw Stone</h3>
      <p><strong>Polki</strong> refers to uncut, un-faceted natural stones (traditionally raw diamonds, or in imitation jewellery, high-clarity faceted glass with foil backing). It retains an organic, vintage, slightly milky or rustic glow that feels historic and royal.</p>

      <h3>3. Kundan: The Refined Foil Setting</h3>
      <p><strong>Kundan</strong> refers to the hyper-purified gold foil (traditionally 24K) used to grip and frame glass or gemstone cabochons. The reverse side of a Kundan piece is almost always adorned with intricate <strong>Meenakari</strong> enamel painting, ensuring the piece is a work of art from both sides!</p>
    `
  },
  {
    id: "blog-07",
    slug: "the-art-of-stacking-bangles-festive-guide",
    title: "The Art of Stacking Bangles: How to Mix Velvet, Glass & Kada Bangles for Every Festive Outfit",
    category: "Bangle Styling",
    author: "Sunita Verma",
    authorRole: "Festive Lookbook Director",
    authorBio: "Sunita directs festive styling campaigns, creating balanced combinations of velvet, glass, and antique gold kadas for celebratory Indian weddings.",
    date: "November 5, 2026",
    readTime: "5 min read",
    image: "assets/images/blog/blog-bangle-stacking-trends.jpg",
    summary: "Master the secret layering formula: balancing broad openable kadas, vibrant velvet churi bangles, and delicate latkan charms for a symmetrical festive wrist stack.",
    content: `
      <p class="lead">A beautifully stacked wrist of Indian bangles produces a mesmerizing shimmer and melodic chime that elevates any festive ensemble. Yet creating a harmonious stack requires an understanding of rhythm, proportion, and color balance.</p>

      <h3>The Proven 3-Tier Stacking Formula</h3>
      <p>Follow our signature stylist formula for a balanced, photogenic stack on both wrists:</p>
      <ul>
        <li><strong>Tier 1 - The Frame Kadas:</strong> Place two heavy, antique gold-plated or kundan kadas at the outermost ends. These act as bookends that anchor the entire stack.</li>
        <li><strong>Tier 2 - The Velvet & Glass Body:</strong> Fill the center with 8 to 12 slender glass or silk-wrapped velvet bangles matching the secondary color of your saree or lehenga border.</li>
        <li><strong>Tier 3 - The Centerpiece Pachheli:</strong> Insert a single ornate gemstone-encrusted or pearl-lined pachheli bangle in the exact middle for an opulent focal point.</li>
      </ul>

      <h3>Mixing Metals with Color Bangles</h3>
      <p>Never hesitate to mix antique matte gold kadas with colorful glass bangles. In royal Rajasthani and Gujarati styling, contrasting gold with vivid emerald green, ruby red, or royal sapphire velvet creates magnificent festive depth.</p>
    `
  },
  {
    id: "blog-08",
    slug: "anti-tarnish-secrets-prevent-jewellery-blackening",
    title: "Anti-Tarnish Secrets: How to Prevent Blackening & Moisture Damage in Micron Gold Jewels",
    category: "Jewellery Care",
    author: "Dr. Arvind Swaminathan",
    authorRole: "Materials Scientist & Alloy Conservator",
    authorBio: "Dr. Swaminathan is a materials chemist specializing in anti-corrosion barriers, silica micro-environments, and humidity protection for fine brass and copper jewellery.",
    date: "October 24, 2026",
    readTime: "5 min read",
    image: "assets/images/blog/blog-anti-tarnish-care.jpg",
    summary: "Why does artificial jewellery darken? Discover how humidity and oxidation affect brass plating, and how silica gel packs keep your jewellery sparkling like new.",
    content: `
      <p class="lead">Have you ever opened your jewellery box after monsoon season only to discover your favorite imitation necklace has turned dark or lost its golden glow? Understanding the chemistry of tarnish helps you safeguard your treasures for years.</p>

      <h3>The Science of Oxidation</h3>
      <p>Imitation jewellery consists of base metals (such as brass or copper) coated with electroplated micron gold or rhodium. When exposed to airborne moisture, humidity, and atmospheric sulfur, micro-pores in the plating react, resulting in a dark oxide layer.</p>

      <h3>The Power of Silica Gel Packets</h3>
      <p>Always drop one or two food-grade silica gel desiccant packets inside your jewellery organizers and zip-lock pouches. Silica gel actively absorbs ambient moisture, maintaining a 0% humidity micro-environment that prevents the oxidation cycle entirely.</p>

      <h3>Avoid Bathrooms and Humid Vanities</h3>
      <p>Never store your festive jewellery inside bathroom cabinets or open vanity tables where steam from showers and air conditioning condensate can settle onto the metal surfaces.</p>
    `
  },
  {
    id: "blog-09",
    slug: "how-to-clean-kundan-meenakari-pearl-sets",
    title: "How to Clean Kundan, Meenakari & Pearl Sets Without Ruining the Foil & Enamel",
    category: "Jewellery Care",
    author: "Farahnaaz Merchant",
    authorRole: "Senior Jewelry Restorer & Antiquities Specialist",
    authorBio: "Farahnaaz specializes in restoring antique Kundan and Meenakari enamel heirlooms, pioneering dry-brushing and microfiber techniques that protect delicate gold foils.",
    date: "October 16, 2026",
    readTime: "6 min read",
    image: "assets/images/blog/blog-kundan-pearl-cleaning.jpg",
    summary: "Water is the mortal enemy of foil-backed Kundan. Learn the safe, dry-brushing and microfiber techniques master jewellers use to restore vintage luster.",
    content: `
      <p class="lead">Kundan and Meenakari jewellery are among the most intricate decorative art forms in the world. However, traditional foil-backed settings require specialized cleaning methods that differ fundamentally from plain metal jewellery.</p>

      <h3>Why Water Destroys Kundan Foil</h3>
      <p>In authentic Kundan work, stones are set on micro-thin pure silver or gold foils that reflect light. If water, liquid cleaner, or steam seeps under the stone, the foil tarnishes black permanently, extinguishing the stone's inner brilliance.</p>

      <h3>The Safe Dry-Cleaning Protocol</h3>
      <ol>
        <li><strong>Soft Camel-Hair Brush:</strong> Gently dust away loose makeup powder and dust using an artist's miniature camel-hair brush or a fresh, extra-soft infant toothbrush.</li>
        <li><strong>Dry Microfiber Lens Cloth:</strong> Buff the surface facets of each crystal and pearl gently using circular motions with a clean optical lens cloth.</li>
        <li><strong>Ear-Bud Detailing:</strong> For hard-to-reach crevices between Meenakari enamel motifs, use a dry cotton swab lightly dusted with cornstarch to absorb grease, then brush clean.</li>
      </ol>
    `
  },
  {
    id: "blog-10",
    slug: "choker-vs-rani-haar-layering-royal-necklaces",
    title: "Choker vs. Rani Haar: How to Layer Royal Indian Necklaces Like a Sabyasachi Bride",
    category: "Necklace Designs",
    author: "Rhea Kapoor-Singhania",
    authorRole: "High-Couture Bridal Consultant",
    authorBio: "Rhea consults luxury bridal clients across Mumbai and Delhi, crafting multi-tiered necklace combinations that seamlessly balance snug chokers with sweeping rani haars.",
    date: "October 8, 2026",
    readTime: "5 min read",
    image: "assets/images/blog/blog-choker-layering-guide.jpg",
    summary: "The golden rule of bridal layering: balancing throat-hugging guluband chokers with cascading 28-inch multi-strand pearl malas for majestic dimension.",
    content: `
      <p class="lead">The layered bridal necklace look is the pinnacle of grand Indian wedding couture. When layered skillfully, multiple neckpieces create an opulent cascade reminiscent of the royal Maharanis of Patiala and Jodhpur.</p>

      <h3>The Rule of Three Lengths</h3>
      <p>To avoid neckpieces tangling or overlapping awkwardly, follow the <strong>3-tier length rule</strong>:</p>
      <ul>
        <li><strong>Tier 1 - The Guluband (12 - 14 inches):</strong> A snug choker that sits flat against the collarbone, defining the neckline and framing the chin.</li>
        <li><strong>Tier 2 - The Aadh or Hasli (16 - 18 inches):</strong> A rigid or articulated mid-length necklace that covers the upper chest with complementary stone work.</li>
        <li><strong>Tier 3 - The Raani Haar (24 - 30 inches):</strong> A sweeping, multi-layered pearl or polki mala that drops below the bustline, creating regal elongation.</li>
      </ul>

      <h3>Harmonizing Stones and Finishes</h3>
      <p>Ensure that all layers share at least one common design element: matching basra pearl drops, emerald bead tumbles, or consistent antique gold plating to maintain a cohesive bridal story.</p>
    `
  },
  {
    id: "blog-11",
    slug: "temple-jewellery-necklaces-divine-motifs",
    title: "Temple Jewellery Necklaces: Decoding the Divine Motifs of Goddess Lakshmi & Peacocks",
    category: "Necklace Designs",
    author: "Gayatri Padmanabhan",
    authorRole: "South Indian Temple Art Historian",
    authorBio: "Gayatri is an art historian devoted to South Indian temple jewellery, researching sacred motifs of Goddess Lakshmi, Mayura peacocks, and classical Kasu Mala coinage.",
    date: "October 2, 2026",
    readTime: "6 min read",
    image: "assets/images/blog/blog-temple-necklace-motifs.jpg",
    summary: "From antique Chola temple carvings to contemporary bridal Kasu Malas, explore the auspicious sacred symbols of Lakshmi, Mayura peacocks, and lotuses.",
    content: `
      <p class="lead">Originating in 9th-century Chola dynasty South India, Temple Jewellery was initially commissioned to adorn the idols of sacred deities before becoming cherished bridal heirlooms. Each motif carries deep spiritual blessing and aesthetic majesty.</p>

      <h3>Iconic Sacred Motifs Explained</h3>
      <ul>
        <li><strong>Goddess Gajalakshmi:</strong> Flanked by royal elephants, the Lakshmi motif signifies prosperity, spiritual wealth, and eternal marital abundance.</li>
        <li><strong>Mayura (Peacock):</strong> The royal bird represents immortality, courtship elegance, and protection against negative energies.</li>
        <li><strong>Kamala (Lotus):</strong> Blossoming through mud untouched, the lotus symbolizes purity, beauty, and auspicious beginnings.</li>
        <li><strong>Kasu Mala (Coin Necklace):</strong> Embossed with coins featuring deities, it denotes generational wealth and continuous financial blessing.</li>
      </ul>

      <p>Our temple imitation neckpieces recreate the authentic deep reddish-gold antique finish of Chola temple gold using lead-free brass alloys and hand-carved repoussé dyes.</p>
    `
  },
  {
    id: "blog-12",
    slug: "lightweight-earrings-ear-support-chains-comfort-hacks",
    title: "Lightweight Earrings for Long Wedding Functions: Ear Support Chains & Earlobe Tape Hacks",
    category: "Earrings Fashion",
    author: "Dr. Shalini Aggarwal",
    authorRole: "Dermatologist & Earlobe Care Specialist",
    authorBio: "Dr. Aggarwal is a clinical dermatologist advising clients on earlobe support patches, weight-relieving kan chains, and hypoallergenic backings for comfortable all-night festive wear.",
    date: "September 24, 2026",
    readTime: "4 min read",
    image: "assets/images/blog/blog-lightweight-earrings-comfort.jpg",
    summary: "Dance all night at the Sangeet without sore lobes! Discover hypoallergenic earlobe support patches, silicone backings, and embellished kan-chain weight lifters.",
    content: `
      <p class="lead">Every Indian bride and wedding guest knows the dread of heavy chandelier earrings tugging painfully on earlobes during an eight-hour wedding reception. With a few professional stylist hacks, you can wear statement jhumkas all night in complete comfort.</p>

      <h3>Hack 1: Earlobe Support Tape Patches</h3>
      <p>Medical-grade adhesive ear support patches (available at any pharmacy or beauty store) are placed on the back of your earlobe before pushing the earring post through. The tape bears 80% of the earring's weight across the cartilage rather than the ear piercing hole!</p>

      <h3>Hack 2: Kan Chains & Saharas</h3>
      <p>Attach ornate multi-strand pearl or gold <strong>Sahara chains (Kanphool chains)</strong> from the earring stud up into your hair parting or bobby-pinned into your bridal updo. This transfers the downwards gravity pull directly to your hair pins!</p>

      <h3>Hack 3: Broad Silicone Backers</h3>
      <p>Replace tiny metal butterfly clutches with wide circular silicone disc backs. The wider surface area prevents heavy earrings from tilting downward, holding them flush against your earlobe.</p>
    `
  },
  {
    id: "blog-13",
    slug: "traditional-indian-earrings-modern-comeback",
    title: "Sui Dhaga, Bahubali & Passa: Traditional Indian Ear Adornments Making a Modern Comeback",
    category: "Earrings Fashion",
    author: "Tanvi Malhotra",
    authorRole: "Runway Accessories Editor & Trend Forecaster",
    authorBio: "Tanvi reports on runway trends across Indian bridal couture, documenting the modern renaissance of delicate threader sui dhaga earrings, passes, and articulated ear cuffs.",
    date: "September 18, 2026",
    readTime: "5 min read",
    image: "assets/images/blog/blog-traditional-ear-passa-styles.jpg",
    summary: "Step beyond ordinary studs: explore the dramatic revival of threader Sui Dhaga chains, ear-cuff Bahubali jhumkis, and heritage Rajputana ear cuffs.",
    content: `
      <p class="lead">Indian jewellery styling is experiencing a thrilling renaissance. Brides and festive fashionistas are rediscovering historic ear ornament silhouettes once reserved for royal court portraiture and infusing them into modern festive couture.</p>

      <h3>The Bahubali Ear Cuff Renaissance</h3>
      <p>Popularized by Indian period epics, the <strong>Bahubali Ear Cuff</strong> features an articulated metal ear wrap that contours along the outer ear helix, adorned with cascading pearls, floral jhumkas, and intricate filigree crests.</p>

      <h3>Threader Sui Dhaga Elegance</h3>
      <p>For minimalist festive functions like cocktail parties and Mehendi brunches, the slender <strong>Sui Dhaga</strong> (needle and thread) chain slips effortlessly through ear piercings, dangling with golden balls, micro-jhumkis, or zircon teardrops for effortless sway.</p>

      <h3>Devasena Chandbali Climbers</h3>
      <p>These oversized crescent earrings feature tiered pearl tassels and temple ear clips that attach securely to the top of the ear, allowing maximum grandeur without pulling the lower lobe.</p>
    `
  },
  {
    id: "blog-14",
    slug: "rise-of-pastel-bridal-jewellery-trends",
    title: "The Rise of Pastel Jewellery: Mint Green, Baby Pink & Powder Blue Sets in Modern Weddings",
    category: "Jewellery Trends",
    author: "Ayesha Kidwai",
    authorRole: "Bridal Color Theorist & Contemporary Designer",
    authorBio: "Ayesha specializes in bridal gemstone color schemes, championing mint fluorite, powder blue, and blush quartz tones with champagne gold finishes for modern ceremonies.",
    date: "September 10, 2026",
    readTime: "5 min read",
    image: "assets/images/blog/blog-pastel-bridal-trends.jpg",
    summary: "Why modern millennial brides are swapping heavy ruby reds for serene mint fluorite, baby pink morganite, and Russian emerald pastels for day weddings.",
    content: `
      <p class="lead">The traditional bridal palette of maroon velvet and heavy ruby stones is evolving. Inspired by sunlit garden ceremonies and celebrity palace weddings, pastel jewellery suites have become the defining festive trend of 2026.</p>

      <h3>Mint Green & Russian Emerald Beads</h3>
      <p>Mint green fluorite and jade beads provide an ethereal, cooling contrast against blush pink and ivory lehengas. When paired with uncut polki stones, mint beads photograph with unmatched luminosity under natural daylight.</p>

      <h3>Powder Blue & Rose Quartz Harmonies</h3>
      <p>For sundowner pheras and daytime Anand Karaj ceremonies, powder blue Meenakari enameling and frosted rose quartz drops offer romantic subtlety without sacrificing regal weight.</p>

      <h3>Styling Pastel Imitation Suites</h3>
      <p>When selecting pastel imitation sets, choose pieces plated in champagne gold or rose gold rather than dark antique gold. The softer metal warmth complements delicate pastel cabochons flawlessly.</p>
    `
  },
  {
    id: "blog-15",
    slug: "destination-wedding-jewellery-travel-benefits",
    title: "Destination Wedding Jewellery: Why High-Grade Imitation Beats Real Gold for Travel",
    category: "Jewellery Trends",
    author: "Devendra Singhal",
    authorRole: "Luxury Destination Wedding Planner",
    authorBio: "Devendra designs luxury destination celebrations globally, advising couples and guests on safe, opulent imitation jewellery suites tailored for tropical destination weddings.",
    date: "September 5, 2026",
    readTime: "6 min read",
    image: "assets/images/blog/blog-destination-wedding-jewels.jpg",
    summary: "From airport customs hassle and theft risks to multi-outfit versatility, discover why luxury imitation jewellery has become the premier choice for destination brides.",
    content: `
      <p class="lead">With destination weddings flourishing across Udaipur palaces, Goa beaches, and European châteaux, modern brides are making a strategic decision: leaving multi-lakh real gold locked securely in bank vaults and choosing mastercrafted imitation jewellery for travel.</p>

      <h3>1. Complete Peace of Mind</h3>
      <p>Carrying kilos of real gold through international customs declarations and hotel rooms creates immense anxiety. Premium imitation jewellery allows brides to dance, swim, and celebrate freely without worrying about security or hotel locker mishaps.</p>

      <h3>2. Matching Sets for 5+ Functions</h3>
      <p>A multi-day destination wedding requires distinct looks: Mehendi, Haldi, Sangeet, Wedding, and Reception. Purchasing real gold sets for five distinct outfits is financially impractical, whereas high-grade imitation allows custom-matched suites for every single lehenga.</p>

      <h3>3. Imperceptible Craftsmanship</h3>
      <p>Modern luxury imitation jewellery uses 24K micron gold plating, hand-set Jadau foil crystals, and authentic semi-precious beads. Even from three inches away or in 4K wedding videography, it is virtually indistinguishable from real heirloom jewellery!</p>
    `
  }
];

// --- SPECIAL OFFERS & BUNDLES DATA ---
const SPECIAL_OFFERS = [
  {
    id: "offer-01",
    title: "Festive Bangle Bonanza: Buy 2 Get 1 Free",
    code: "BANGLEMAGIC",
    discount: "Buy 2 Get 1 FREE",
    validTill: "Valid through Festive Season",
    description: "Purchase any 2 handcrafted bangle sets and receive a third matching pair complimentary at checkout.",
    badge: "Most Popular",
    image: "assets/images/banners/banner-bangles.png",
    category: "Bangles",
    highlight: "Applicable on all Lac, Glass & Silk Thread Bangles"
  },
  {
    id: "offer-02",
    title: "Grand Royal Bridal Troussou 25% Off Combo",
    code: "BRIDALROYAL25",
    discount: "Flat 25% OFF",
    validTill: "Limited Wedding Season Offer",
    description: "Save big on our complete 7-piece Bridal suites including Choker, Raani Haar, Matha Patti, and Haathphool.",
    badge: "Bridal Exclusive",
    image: "assets/images/bridal/bridal-traditional-ensemble-set.jpg",
    category: "Bridal Sets",
    highlight: "Free Luxury Keepsake Velvet Storage Case included"
  },
  {
    id: "offer-03",
    title: "Festive Jhumka Carnival Under ₹999",
    code: "JHUMKAGLAM",
    discount: "Up to 40% OFF",
    validTill: "Weekend Flash Sale",
    description: "Handcrafted peacock meenakari jhumkas, temple chandbalis, and crystal drops starting at just ₹449.",
    badge: "Limited Stock",
    image: "assets/images/banners/banner-earrings.png",
    category: "Earrings",
    highlight: "Extra 10% off when ordering 2 or more pairs"
  },
  {
    id: "offer-04",
    title: "Heritage Temple Necklace Sets Flat ₹500 Off",
    code: "TEMPLE500",
    discount: "Flat ₹500 OFF",
    validTill: "Festive Days Only",
    description: "Instant ₹500 discount on all antique matte gold finish Kasu Malas and Goddess Lakshmi motif neckpieces.",
    badge: "Heritage Special",
    image: "assets/images/banners/banner-necklaces.png",
    category: "Necklaces",
    highlight: "Minimum cart value ₹1,999"
  }
];

// Export to window
if (typeof window !== "undefined") {
  window.JEWELRY_PRODUCTS = JEWELRY_PRODUCTS;
  window.BLOG_ARTICLES = BLOG_ARTICLES;
  window.SPECIAL_OFFERS = SPECIAL_OFFERS;
}

