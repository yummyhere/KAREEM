export interface Product {
  id: string;
  name: string;
  category: string;
  price: number; // in PKR
  tagline: string;
  description: string;
  image: string;
  badge?: string;
  volume?: string;
  rating: number;
}

export interface CategoryCard {
  id: string;
  title: string;
  countText: string;
  image: string;
  featuredProduct: string;
  description: string;
}

export interface HeroSlide {
  id: number;
  giantText: string;
  colorName: string;
  smallHeadline: string;
  rightSubhead: string;
  rightDescription: string;
  image: string;
  bottleColor: string;
  accentColor: string;
  slices: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  quote: string;
  rating: number;
  avatar: string;
}

export const CLIENT_INFO = {
  name: "Kareem's Limca & Milk Soda",
  shortName: "KAREEM'S",
  tagline: "Fresh. Chilled. Famous in Rahim Yar Khan.",
  secondaryTagline: "Stay Cool. Stay Fresh.",
  city: "Rahim Yar Khan, Pakistan",
  address: "Shahi Road, Rahim Yar Khan",
  phone: "+92 300 7401447",
  phoneRaw: "+923007401447",
  whatsapp: "+92 300 7401447",
  whatsappRaw: "923007401447",
  email: "info@kareemslimca.pk",
  rating: "4.6",
  reviewCount: 41,
  since: "Since Day One",
  hours: "11:00 AM - 01:00 AM Daily",
  googleMapsUrl: "https://maps.google.com/?q=Shahi+Road+Rahim+Yar+Khan+Pakistan",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111246.61113214532!2d70.25206925!3d28.4211563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39375c7b7444c53b%3A0xe54e3f438183141f!2sShahi%20Rd%2C%20Rahim%20Yar%20Khan%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1714500000000!5m2!1sen!2s"
};

/**
 * Hero slides with genuine ISOLATED transparent PNG drink cutouts
 */
export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    giantText: "LIMCA",
    colorName: "Lime Green",
    smallHeadline: "Find your favourite chilled drink",
    rightSubhead: "Your refreshing day starts here with us",
    rightDescription: "A local favourite from Rahim Yar Khan, serving fresh Limca, creamy milk sodas and dairy shakes made with quality ingredients.",
    image: "/assets/drinks/limca_bottle.png",
    bottleColor: "#9BC53D",
    accentColor: "#7AA52A",
    slices: ["lime", "lemon", "mint"]
  },
  {
    id: 2,
    giantText: "MILK SODA",
    colorName: "Creamy Froth",
    smallHeadline: "Find your favourite chilled drink",
    rightSubhead: "Velvety cream meets fizzy perfection",
    rightDescription: "Our legendary Ice Cream Milk Soda blends pure dairy, chilled carbonated soda, and rich vanilla ice cream for unmatched bliss.",
    image: "/assets/drinks/milk_soda_glass.png",
    bottleColor: "#F4E3D7",
    accentColor: "#9BC53D",
    slices: ["icecream", "mint", "bubbles"]
  },
  {
    id: 3,
    giantText: "CHOCOLATE",
    colorName: "Rich Cocoa",
    smallHeadline: "Find your favourite chilled drink",
    rightSubhead: "Decadent chocolate swirl in fizzy dairy",
    rightDescription: "Indulge in our famous Chocolate Milk Soda: thick Dutch cocoa, farm milk, chilled soda fizz, and chocolate shavings.",
    image: "/assets/drinks/chocolate_soda.png",
    bottleColor: "#593D2C",
    accentColor: "#8D5B4C",
    slices: ["cocoa", "chocolate", "vanilla"]
  },
  {
    id: 4,
    giantText: "DAIRY SHAKE",
    colorName: "Thick Khoya Shake",
    smallHeadline: "Find your favourite chilled drink",
    rightSubhead: "Thick, creamy & packed with pure dry fruits",
    rightDescription: "Traditional Rahim Yar Khan style rich dairy shakes made with pure whole milk, khoya, and crushed pistachios.",
    image: "/assets/drinks/dairy_shake.png",
    bottleColor: "#F9DE81",
    accentColor: "#D6B037",
    slices: ["pistachio", "almond", "cream"]
  }
];

/**
 * 5 Category Cards with ISOLATED transparent PNG drink cutouts
 */
export const CATEGORIES: CategoryCard[] = [
  {
    id: "classic-limca",
    title: "Classic Limca",
    countText: "3 products",
    image: "/assets/drinks/limca_bottle.png",
    featuredProduct: "Original Masala Limca",
    description: "Zesty lemon-lime soda charged with special rock salt, roasted cumin, and black salt."
  },
  {
    id: "ice-cream-milk-soda",
    title: "Ice Cream Milk Soda",
    countText: "3 products",
    image: "/assets/drinks/milk_soda_glass.png",
    featuredProduct: "Vanilla Scoop Milk Soda",
    description: "Sweetened buffalo milk topped with effervescent soda and a rich dollop of vanilla ice cream."
  },
  {
    id: "chocolate-milk-soda",
    title: "Chocolate Milk Soda",
    countText: "3 products",
    image: "/assets/drinks/chocolate_soda.png",
    featuredProduct: "Special Choco Swirl Soda",
    description: "Deep dark chocolate syrup swirled with cold milk and soda for an unforgettable dessert drink."
  },
  {
    id: "dairy-shakes",
    title: "Dairy Shakes",
    countText: "3 products",
    image: "/assets/drinks/dairy_shake.png",
    featuredProduct: "Pista Badam Royal Shake",
    description: "Thick chilled shakes loaded with pure dairy, dates, almonds, and pistachios."
  },
  {
    id: "special-combos",
    title: "Special Combos",
    countText: "3 products",
    image: "/assets/drinks/special_combo.png",
    featuredProduct: "Family Chiller Party Pack",
    description: "Value bundles paired for gatherings, road trips, and afternoon treats."
  }
];

/**
 * 15 Products with genuine isolated background-free drink cutouts
 */
export const PRODUCTS: Product[] = [
  // Classic Limca (3 products)
  {
    id: "limca-original",
    name: "Classic Masala Limca",
    category: "classic-limca",
    price: 120,
    tagline: "The original secret recipe with roasted spices & fresh lime.",
    description: "Prepared fresh per order with fresh squeezed Kagzi lemons, ice cold sparkling soda, and Kareem's signature 5-spice masala mix.",
    image: "/assets/drinks/limca_bottle.png",
    volume: "350 ml Bottle",
    rating: 4.9,
    badge: "Bestseller"
  },
  {
    id: "limca-mint",
    name: "Fresh Mint Limca Cooler",
    category: "classic-limca",
    price: 140,
    tagline: "Crushed field mint leaves with tangy lime and chilling fizz.",
    description: "Freshly muddled garden mint, tangy lemon pulp, rock salt, and effervescent soda. The ultimate thirst quencher on a hot Rahim Yar Khan afternoon.",
    image: "/assets/drinks/chilled_glass_straw.png",
    volume: "400 ml Cup",
    rating: 4.8
  },
  {
    id: "limca-jeera",
    name: "Special Cumin Digest Limca",
    category: "classic-limca",
    price: 130,
    tagline: "Traditional roasted cumin and black salt digestive twist.",
    description: "Famous for post-meal digestion. Packed with aromatic roasted jeera seeds, Himalayan pink salt, and zesty lemon fizz.",
    image: "/assets/drinks/green_cleanse_bottle.png",
    volume: "500 ml Bottle",
    rating: 4.7
  },

  // Ice Cream Milk Soda (3 products)
  {
    id: "soda-vanilla-icecream",
    name: "Signature Ice Cream Milk Soda",
    category: "ice-cream-milk-soda",
    price: 180,
    tagline: "Pure chilled milk, fizzy clear soda, and creamy vanilla scoop.",
    description: "The pride of Rahim Yar Khan! Creamy farm-fresh milk blended with high-fizz soda and crowned with a generous scoop of rich vanilla ice cream.",
    image: "/assets/drinks/milk_soda_glass.png",
    volume: "450 ml Tall Glass",
    rating: 5.0,
    badge: "Most Loved"
  },
  {
    id: "soda-rose-icecream",
    name: "Gulab Ice Cream Milk Soda",
    category: "ice-cream-milk-soda",
    price: 190,
    tagline: "Fragrant rose petal syrup, creamy milk, and vanilla float.",
    description: "Fragrant Damask rose syrup layered with rich milk, bubbly soda water, and topped with premium vanilla ice cream.",
    image: "/assets/drinks/milk_soda_glass.png",
    volume: "450 ml Tall Glass",
    rating: 4.8
  },
  {
    id: "soda-kulfa-float",
    name: "Shahi Kulfa Milk Soda",
    category: "ice-cream-milk-soda",
    price: 210,
    tagline: "Traditional saffron kulfa ice cream in bubbly sweet milk.",
    description: "A royal combination: chilled milk soda paired with authentic slow-churned Pakistani kulfa, cardamom, and sliced almonds.",
    image: "/assets/drinks/milk_soda_glass.png",
    volume: "450 ml Tall Glass",
    rating: 4.9
  },

  // Chocolate Milk Soda (3 products)
  {
    id: "choco-classic-soda",
    name: "Classic Chocolate Milk Soda",
    category: "chocolate-milk-soda",
    price: 200,
    tagline: "Rich chocolate drizzle, frothy milk, and refreshing bubbles.",
    description: "A unique sweet sensation! Cocoa syrup blended with cold whole milk, charged with fizzy soda, and topped with dark chocolate curls.",
    image: "/assets/drinks/chocolate_soda.png",
    volume: "450 ml Tall Glass",
    rating: 4.8,
    badge: "Customer Favorite"
  },
  {
    id: "choco-fudge-brownie-soda",
    name: "Choco Fudge Brownie Soda",
    category: "chocolate-milk-soda",
    price: 240,
    tagline: "Warm fudge swirl, cold milk soda, and brownie crumble.",
    description: "Thick melted chocolate fudge drizzled along the glass, chilled milk soda, and moist chocolate brownie chunks.",
    image: "/assets/drinks/chocolate_soda.png",
    volume: "450 ml Tall Glass",
    rating: 4.9
  },
  {
    id: "choco-mocha-chiller",
    name: "Mocha Choco Cold Fizz",
    category: "chocolate-milk-soda",
    price: 220,
    tagline: "Light coffee roast combined with sweet chocolate milk soda.",
    description: "For coffee & chocolate lovers: hints of dark roast espresso combined with chocolate milk soda for an invigorating kick.",
    image: "/assets/drinks/chocolate_soda.png",
    volume: "450 ml Tall Glass",
    rating: 4.7
  },

  // Dairy Shakes (3 products)
  {
    id: "shake-pista-badam",
    name: "Pista Badam Shahi Shake",
    category: "dairy-shakes",
    price: 250,
    tagline: "Thick khoya base, freshly crushed pistachios & almonds.",
    description: "Pure whole milk condensed slowly with khoya, cardamom seeds, and heaps of freshly crushed green pistachios and almonds.",
    image: "/assets/drinks/dairy_shake.png",
    volume: "400 ml Glass",
    rating: 4.9,
    badge: "100% Pure Dairy"
  },
  {
    id: "shake-mango-malai",
    name: "Chaunsa Mango Malai Shake",
    category: "dairy-shakes",
    price: 240,
    tagline: "Sweet local mango pulp with fresh clotted malai cream.",
    description: "Made with genuine South Punjab Chaunsa mango pulp, thick cream, and ice-cold dairy milk.",
    image: "/assets/drinks/dairy_shake.png",
    volume: "400 ml Glass",
    rating: 4.8
  },
  {
    id: "shake-khajoor-dryfruit",
    name: "Energy Khajoor & Nut Shake",
    category: "dairy-shakes",
    price: 260,
    tagline: "Natural Arabian dates, honey, walnuts, and creamy milk.",
    description: "Nutritious and naturally energizing. Blended with soft Iranian dates, walnuts, raw honey, and creamy milk.",
    image: "/assets/drinks/dairy_shake.png",
    volume: "400 ml Glass",
    rating: 4.8
  },

  // Special Combos (3 products)
  {
    id: "combo-duo-chill",
    name: "Afternoon Duo Combo",
    category: "special-combos",
    price: 290,
    tagline: "1x Classic Masala Limca + 1x Ice Cream Milk Soda.",
    description: "The ultimate pairing: spicy tangy Limca fizz to wake you up, followed by a sweet creamy ice cream milk soda.",
    image: "/assets/drinks/special_combo.png",
    volume: "2 Drinks",
    rating: 4.9,
    badge: "Best Value"
  },
  {
    id: "combo-family-four",
    name: "Kareem's Family Party Pack",
    category: "special-combos",
    price: 680,
    tagline: "2x Classic Limca + 2x Ice Cream Milk Soda.",
    description: "Perfect for family hangouts or surprise evening guests. Chilled to perfection with separate ice bags on takeaway.",
    image: "/assets/drinks/special_combo.png",
    volume: "4 Drinks",
    rating: 5.0
  },
  {
    id: "combo-chocolate-shake",
    name: "Sweet Tooth Supreme Box",
    category: "special-combos",
    price: 430,
    tagline: "1x Chocolate Milk Soda + 1x Pista Badam Shake.",
    description: "A rich treat for sweet lovers: one indulgent chocolate soda paired with our thickest royal pista badam dairy shake.",
    image: "/assets/drinks/special_combo.png",
    volume: "2 Drinks",
    rating: 4.9
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "sarah-khan",
    name: "Sarah Khan",
    city: "Rahim Yar Khan",
    quote: "The best milk soda in Rahim Yar Khan! Ice cold and so creamy. It's our family's go-to spot whenever we visit Shahi Road.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=85"
  },
  {
    id: "ali-raza",
    name: "Ali Raza",
    city: "Rahim Yar Khan",
    quote: "Kareem's Limca is my daily refreshment. Highly recommended! Nothing beats that masala punch after a long workday.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=85"
  },
  {
    id: "ayesha-malik",
    name: "Ayesha Malik",
    city: "Rahim Yar Khan",
    quote: "Love the chocolate milk soda and the fresh dairy shakes. Great taste, hygienic preparation, and friendly service always!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=85"
  }
];

export const WHY_CHOOSE_ITEMS = [
  {
    id: "ingredients",
    title: "Quality Ingredients",
    subtitle: "Only the best.",
    icon: "leaf"
  },
  {
    id: "dairy",
    title: "Fresh Dairy",
    subtitle: "Made fresh daily.",
    icon: "heart"
  },
  {
    id: "delivery",
    title: "Fast Delivery & Takeaway",
    subtitle: "Chilled anywhere.",
    icon: "truck"
  },
  {
    id: "taste",
    title: "Great Taste",
    subtitle: "Because you deserve it.",
    icon: "smile"
  }
];
