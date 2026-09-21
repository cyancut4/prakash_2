import sourdough from "@/assets/b-sourdough.jpg";
import baguette from "@/assets/b-baguette.jpg";
import chococake from "@/assets/b-chococake.jpg";
import redvelvet from "@/assets/b-redvelvet.jpg";
import croissant from "@/assets/b-croissant.jpg";
import fruittart from "@/assets/b-fruittart.jpg";
import cookies from "@/assets/b-cookies.jpg";
import muffin from "@/assets/b-muffin.jpg";
import donut from "@/assets/b-donut.jpg";
import cinnamon from "@/assets/b-cinnamon.jpg";
import giftbox from "@/assets/b-giftbox.jpg";
import macaron from "@/assets/b-macaron.jpg";
import cheesecake from "@/assets/b-cheesecake.jpg";

export type CategorySlug =
  | "dry-cakes"
  | "fresh-cream-pastries"
  | "birthday-cakes"
  | "breads-pav"
  | "khari-puffs"
  | "toast-rusk"
  | "snacks"
  | "chocolates";

export interface Category {
  slug: CategorySlug;
  name: string;
  image: string;
}

export const categories: Category[] = [
  { slug: "dry-cakes", name: "Dry Cakes", image: "/images/products/Mawa-Cake-Eggless.jpg" },
  { slug: "fresh-cream-pastries", name: "Fresh Cream Pastries", image: "/images/products/Black-Forest-Pastry.jpg" },
  { slug: "birthday-cakes", name: "Birthday Cakes", image: "/images/products/Chocolate-Truffle-Cake.jpg" },
  { slug: "breads-pav", name: "Breads & Pav", image: "/images/products/Sliced-Bread%20-400GM%20-Kellory.jpg" },
  { slug: "khari-puffs", name: "Khari Puffs", image: "/images/products/Cheese-Khari.jpg" },
  { slug: "toast-rusk", name: "Toast & Rusk", image: "/images/products/Mawa-Toast.jpg" },
  { slug: "snacks", name: "Snacks", image: cookies },
  { slug: "chocolates", name: "Chocolates", image: giftbox },
];

// Placeholder images reused per category until real product photos are supplied.
const IMG: Record<CategorySlug, string[]> = {
  "dry-cakes": [muffin, redvelvet, chococake],
  "fresh-cream-pastries": [fruittart, cheesecake, croissant],
  "birthday-cakes": [chococake, redvelvet, cheesecake],
  "breads-pav": [sourdough, baguette, cinnamon],
  "khari-puffs": [croissant, baguette],
  "toast-rusk": [sourdough, cinnamon],
  "snacks": [cookies, donut],
  "chocolates": [giftbox, macaron, chococake],
};

const imgFor = (category: CategorySlug, i: number) =>
  IMG[category][i % IMG[category].length];

// Real product photography supplied with the project.  Products without a
// corresponding photo retain the category fallback above.
const productImages: Record<string, string> = {
  "mawa-cake-eggless": "/images/products/Mawa-Cake-Eggless.jpg",
  "cup-cake-eggless": "/images/products/Cup-Cake-6PC-Eggless.jpg",
  "chocolate-cup-cake-eggless": "/images/products/Chocolate-Cup-Cake-6PC-Eggless.jpg",
  "jam-roll": "/images/products/Jam-Roll.jpg",
  "chocolate-roll": "/images/products/Chocolate-Roll.jpg",
  "butter-sponge-cake": "/images/products/Butter-Sponge-Cake.jpg",
  "vanilla-slice-cake": "/images/products/Slice-Cake-Vanilla.jpg",
  "choco-lava-cake": "/images/products/Choco-Lava.jpg",
  "black-forest-pastry": "/images/products/Black-Forest-Pastry.jpg",
  "pineapple-pastry": "/images/products/Pineapple-Pastry.jpg",
  "mango-pastry": "/images/products/Mango-Pastry.jpg",
  "chocolate-melody-pastry": "/images/products/Chocolate-Melody-Pastry.jpg",
  "strawberry-delight-pastry": "/images/products/Strawberry-Delight-Pastry.jpg",
  "custard-apple-pastry": "/images/products/Custard-Apple-Pastry.jpg",
  "butterscotch-pastry": "/images/products/Butter-Scotch-Pastry.jpg",
  "belgium-chocolate-pastry": "/images/products/Belgium-Chocolate-Pastry.jpg",
  "green-apple-pastry": "/images/products/Green-Apple-Pastry.jpg",
  "kasata-pastry": "/images/products/Kasata-Pastry.jpg",
  "black-forest-cake": "/images/products/Black-Forest-Cake.jpg",
  "pineapple-delight-cake": "/images/products/Pineapple-Delight-Cake.jpg",
  "mango-mastani-cake": "/images/products/Mango-Mastani-Cake.jpg",
  "chocolate-melody-cake": "/images/products/Chocolate-Melody-Cake.jpg",
  "strawberry-cake": "/images/products/Strawberry-Cake.jpg",
  "custard-apple-cake": "/images/products/Custard-Apple-Cake.jpg",
  "butterscotch-cake": "/images/products/Butter-Scotch-Cake.jpg",
  "belgium-chocolate-cake": "/images/products/Belgium-Chocolate-Cake.jpg",
  "green-apple-cake": "/images/products/Green%20Apple%20Cake.jpg",
  "cassata-masti-cake": "/images/products/Cassata%20-Masti-Cake.jpg",
  "rasmalai-tasty-cake": "/images/products/Rasmalai-Cake.jpg",
  "chocolate-truffle-cake": "/images/products/Chocolate-Truffle-Cake.jpg",
  "white-forest-cake": "/images/products/White-Forest-Cake.jpg",
  "orange-cake": "/images/products/Orange-Cake.jpg",
  "choco-chips-cake": "/images/products/Choco-Chips-Cake.jpg",
  "sliced-bread-400g-kellory": "/images/products/Sliced-Bread%20-400GM%20-Kellory.jpg",
  "sliced-bread-700g-kellory": "/images/products/Sliced-Bread%20-700GM%20-Kellory.jpg",
  "brown-bread-400g-kellory": "/images/products/Brown-Bread%20-400GM%20-Kellory.jpg",
  "pav-12-pc": "/images/products/Pav%20-12PC.jpg",
  "burger-buns-6-pc": "/images/products/Burger-Buns-6PC.jpg",
  "garlic-bread-200g": "/images/products/Garlic-Bread-200GM.jpg",
  "pizza-base-2-pc-kellory": "/images/products/Pizza-Base-2PC-Kellory.jpg",
  "plain-khari": "/images/products/Plain-Khari.jpg",
  "methi-khari": "/images/products/Methi-Khari.jpg",
  "palak-khari": "/images/products/Palak-Khari.jpg",
  "jeera-khari": "/images/products/Jeera-Khari.jpg",
  "cheese-khari": "/images/products/Cheese-Khari.jpg",
  "masala-khari": "/images/products/Masala-Khari.jpg",
  "sweet-khari": "/images/products/Sweet-Khari.jpg",
  "cream-roll-6-pc": "/images/products/Cream-Roll-6PC.jpg",
  "atta-khari": "/images/products/Atta-Khari.jpg",
  "milk-toast": "/images/products/Milk-Toast-500GM.jpg",
  "tilli-toast": "/images/products/Tilli-Toast.jpg",
  "mawa-toast": "/images/products/Mawa-Toast.jpg",
};

export interface PriceOption {
  label: string;
  price: number;
}

export interface Product {
  slug: string;
  name: string;
  category: CategorySlug;
  price: number;
  unit: string;
  options: PriceOption[];
  rating: number;
  reviews: number;
  image: string;
  description: string;
  ingredients: string;
  storage: string;
  nutrition: string;
  bestseller?: boolean;
}

let counter = 0;

// Deterministic hash so rating/reviews match between server and client render
// (Math.random() here would differ per realm and crash hydration).
const hash = (s: string) => {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
};

const p = (
  name: string,
  category: CategorySlug,
  options: PriceOption[],
  description: string,
  bestseller = false,
): Product => {
  const slug = name
    .toLowerCase()
    .replace(/[/()]/g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  const image = productImages[slug] ?? imgFor(category, counter++);
  const h = hash(slug);
  return {
    slug,
    name,
    category,
    price: options[0].price,
    unit: options[0].label,
    options,
    image,
    description,
    ingredients: "Made with finest natural ingredients, prepared fresh daily.",
    storage: "Best enjoyed fresh. Store in a cool, dry place, or refrigerate after opening.",
    nutrition: "Nutritional values vary by item — ask in-store for details.",
    rating: 4 + (h % 11) / 10,
    reviews: 60 + (h % 200),
    bestseller,
  };
};

const pc = (price: number) => [{ label: "Per Pc", price }];
const wt = (label: string, price: number) => [{ label, price }];
const pack = (count: number, price: number) => [{ label: `Pack of ${count}`, price }];

export const products: Product[] = [
  // Dry Cakes
  p("Mawa Cake (Eggless)", "dry-cakes", wt("200g", 60), "Rich mawa-infused sponge cake, eggless and lightly sweet.", true),
  p("Cup Cake (Eggless)", "dry-cakes", pack(6, 55), "Soft, fluffy eggless cupcakes — a pack of 6."),
  p("Chocolate Cup Cake (Eggless)", "dry-cakes", pack(6, 60), "Cocoa-rich eggless cupcakes, moist and chocolatey — a pack of 6."),
  p("Jam Roll", "dry-cakes", pc(12), "Soft sponge roll swirled with sweet fruit jam."),
  p("Chocolate Roll", "dry-cakes", pc(12), "Chocolate sponge rolled with a smooth chocolate filling."),
  p("Butter Sponge Cake", "dry-cakes", pc(12), "Classic buttery sponge slice, light and fluffy."),
  p("Vanilla Slice Cake", "dry-cakes", wt("200g", 60), "Soft vanilla sponge cut into a generous slice."),
  p("Choco Lava Cake", "dry-cakes", pc(45), "Warm chocolate cake with a molten chocolate centre."),

  // Fresh Cream Pastries
  p("Black Forest Pastry", "fresh-cream-pastries", pc(25), "Chocolate sponge layered with whipped cream and cherries.", true),
  p("Pineapple Pastry", "fresh-cream-pastries", pc(25), "Light sponge with fresh cream and pineapple chunks."),
  p("Mango Pastry", "fresh-cream-pastries", pc(40), "Seasonal mango pulp layered with fresh cream sponge."),
  p("Chocolate Melody Pastry", "fresh-cream-pastries", pc(40), "Chocolate sponge with silky chocolate cream layers."),
  p("Strawberry Delight Pastry", "fresh-cream-pastries", pc(40), "Fresh cream sponge with strawberry compote and chunks."),
  p("Custard Apple Pastry", "fresh-cream-pastries", pc(40), "Fresh cream pastry flavoured with seasonal custard apple."),
  p("Butterscotch Pastry", "fresh-cream-pastries", pc(40), "Fresh cream sponge folded with crunchy butterscotch praline."),
  p("Belgium Chocolate Pastry", "fresh-cream-pastries", pc(50), "Rich Belgian chocolate sponge with chocolate cream."),
  p("Green Apple Pastry", "fresh-cream-pastries", pc(50), "Fresh cream pastry with a tangy green apple compote."),
  p("Kasata Pastry", "fresh-cream-pastries", pc(50), "Colourful tutti-frutti studded cassata-style cream pastry."),

  // Birthday Cakes (1/2 Kg & 1 Kg)
  p("Black Forest Cake", "birthday-cakes", [{ label: "1/2 Kg", price: 300 }, { label: "1 Kg", price: 600 }], "Classic chocolate sponge, whipped cream, cherries and chocolate shavings.", true),
  p("Pineapple Delight Cake", "birthday-cakes", [{ label: "1/2 Kg", price: 300 }, { label: "1 Kg", price: 600 }], "Light sponge layered with fresh cream and juicy pineapple."),
  p("Mango Mastani Cake", "birthday-cakes", [{ label: "1/2 Kg", price: 300 }, { label: "1 Kg", price: 600 }], "Mango pulp and cream layered sponge, a festive favourite."),
  p("Chocolate Melody Cake", "birthday-cakes", [{ label: "1/2 Kg", price: 300 }, { label: "1 Kg", price: 600 }], "Chocolate sponge with rich chocolate cream layers."),
  p("Strawberry Cake", "birthday-cakes", [{ label: "1/2 Kg", price: 300 }, { label: "1 Kg", price: 600 }], "Fresh cream sponge with sweet strawberry compote."),
  p("Custard Apple Cake", "birthday-cakes", [{ label: "1/2 Kg", price: 350 }, { label: "1 Kg", price: 700 }], "Fresh cream cake flavoured with seasonal custard apple."),
  p("Butterscotch Cake", "birthday-cakes", [{ label: "1/2 Kg", price: 350 }, { label: "1 Kg", price: 700 }], "Sponge layered with butterscotch cream and praline crunch."),
  p("Belgium Chocolate Cake", "birthday-cakes", [{ label: "1/2 Kg", price: 350 }, { label: "1 Kg", price: 700 }], "Decadent Belgian chocolate sponge and chocolate cream."),
  p("Green Apple Cake", "birthday-cakes", [{ label: "1/2 Kg", price: 350 }, { label: "1 Kg", price: 700 }], "Fresh cream cake with a tangy green apple compote."),
  p("Cassata Masti Cake", "birthday-cakes", [{ label: "1/2 Kg", price: 350 }, { label: "1 Kg", price: 700 }], "Colourful tutti-frutti cassata-style celebration cake."),
  p("Rasmalai Tasty Cake", "birthday-cakes", [{ label: "1/2 Kg", price: 350 }, { label: "1 Kg", price: 700 }], "Rasmalai-flavoured fusion cake with saffron cream."),
  p("Chocolate Truffle Cake", "birthday-cakes", [{ label: "1/2 Kg", price: 350 }, { label: "1 Kg", price: 700 }], "Layered chocolate sponge with silky chocolate truffle ganache."),
  p("White Forest Cake", "birthday-cakes", [{ label: "1/2 Kg", price: 350 }, { label: "1 Kg", price: 700 }], "Vanilla sponge, whipped cream, cherries and white chocolate shavings."),
  p("Orange Cake", "birthday-cakes", [{ label: "1/2 Kg", price: 350 }, { label: "1 Kg", price: 700 }], "Fresh cream sponge with zesty orange flavour."),
  p("Choco Chips Cake", "birthday-cakes", [{ label: "1/2 Kg", price: 350 }, { label: "1 Kg", price: 700 }], "Vanilla-chocolate sponge loaded with chocolate chips."),

  // Breads & Pav
  p("Sliced Bread 400g (Kellory)", "breads-pav", pc(30), "Soft everyday sliced bread loaf, 400g."),
  p("Sliced Bread 700g (Kellory)", "breads-pav", pc(50), "Family-size soft sliced bread loaf, 700g."),
  p("Brown Bread 400g (Kellory)", "breads-pav", pc(32), "Wholesome soft brown bread loaf, 400g."),
  p("Pav (12 Pc)", "breads-pav", pack(12, 30), "Soft dinner pav rolls, a pack of 12."),
  p("Burger Buns (6 Pc)", "breads-pav", pack(6, 36), "Soft sesame-topped burger buns, a pack of 6."),
  p("Garlic Bread 200g", "breads-pav", wt("200g", 40), "Soft bread loaf infused with garlic and herbs."),
  p("Pizza Base (2 Pc, Kellory)", "breads-pav", pack(2, 25), "Ready-to-top pizza bases, a pack of 2."),

  // Khari Puffs
  p("Plain Khari", "khari-puffs", wt("250g", 45), "Flaky, buttery layered puff biscuits."),
  p("Methi Khari", "khari-puffs", wt("250g", 50), "Flaky khari puffs flavoured with fenugreek leaves."),
  p("Palak Khari", "khari-puffs", wt("250g", 50), "Flaky khari puffs made with spinach."),
  p("Jeera Khari", "khari-puffs", wt("250g", 50), "Flaky khari puffs seasoned with cumin."),
  p("Cheese Khari", "khari-puffs", wt("250g", 60), "Flaky khari puffs loaded with cheese.", true),
  p("Masala Khari", "khari-puffs", wt("250g", 50), "Flaky khari puffs seasoned with a spiced masala blend."),
  p("Sweet Khari", "khari-puffs", wt("250g", 50), "Flaky, lightly sweetened layered puff biscuits."),
  p("Cream Roll (6 Pc)", "khari-puffs", pack(6, 45), "Crisp pastry rolls piped with sweet cream, a pack of 6."),
  p("Atta Khari", "khari-puffs", wt("200g", 40), "Wholewheat flaky khari puffs."),

  // Toast & Rusk
  p("Milk Toast", "toast-rusk", [{ label: "250g", price: 45 }, { label: "500g", price: 85 }], "Crisp double-baked milk toast rusk.", true),
  p("Tilli Toast", "toast-rusk", wt("200g", 32), "Crisp toast rusk topped with sesame seeds."),
  p("Mawa Toast", "toast-rusk", wt("200g", 32), "Crisp toast rusk enriched with mawa."),
  p("Plain Toast", "toast-rusk", wt("200g", 30), "Classic crisp, double-baked toast rusk."),
  p("Roll Butter Toast", "toast-rusk", wt("200g", 32), "Buttery, crisp toast rusk rolls."),

  // Snacks
  p("Veg Pattice", "snacks", pc(15), "Crisp-fried pastry patty filled with spiced vegetables."),
  p("Paneer Pattice", "snacks", pc(20), "Crisp-fried pastry patty filled with spiced paneer."),
  p("Maggi Pattice", "snacks", pc(20), "Crisp-fried pastry patty filled with masala Maggi noodles."),
  p("Samosa", "snacks", pc(15), "Classic crisp-fried samosa with spiced potato filling."),
  p("Kachori", "snacks", pc(15), "Crisp, flaky kachori with a spiced lentil filling."),
  p("Veg Mini Pizza", "snacks", pc(35), "Mini pizza base topped with vegetables and cheese."),
  p("Veg Soya Sandwich", "snacks", pc(25), "Grilled sandwich with a spiced soya-vegetable filling."),
  p("Veg Burger", "snacks", pc(35), "Soft bun burger with a crisp vegetable patty.", true),

  // Chocolates
  p("Big Lolly (30g)", "chocolates", pc(40), "Classic chocolate lollipop, 30g."),
  p("Medium Lolly (17g)", "chocolates", pc(20), "Classic chocolate lollipop, 17g."),
  p("Bar Chocolate Milk", "chocolates", [{ label: "50g", price: 55 }, { label: "90g", price: 95 }], "Smooth, creamy milk chocolate bar."),
  p("Bar Chocolate Fruit N Nuts", "chocolates", [{ label: "50g", price: 55 }, { label: "90g", price: 95 }], "Milk chocolate bar loaded with fruit and nuts."),
  p("Bar Chocolate Almond", "chocolates", [{ label: "50g", price: 55 }, { label: "90g", price: 95 }], "Milk chocolate bar studded with roasted almonds."),
  p("Bar Chocolate Dark", "chocolates", [{ label: "50g", price: 55 }, { label: "90g", price: 95 }], "Rich, intense dark chocolate bar."),
  p("Dark Chocolate Almond Nutties", "chocolates", wt("100g", 120), "Dark chocolate nutties packed with crunchy almonds."),
  p("Premium Chocolate (Gift Box)", "chocolates", [{ label: "140g", price: 235 }, { label: "215g", price: 310 }], "Assorted premium chocolates in an elegant gift box."),
  p("Premium Chocolate Bar Box (Gift Box)", "chocolates", wt("280g", 340), "An assorted selection of premium chocolate bars in a gift box."),
  p("Choco Almond Strawberry (Jar)", "chocolates", wt("Jar of 60 Pcs", 600), "Chocolate-coated almonds in strawberry flavour, jar of 60."),
  p("Milky Choco Almond (Jar)", "chocolates", wt("Jar of 60 Pcs", 600), "Creamy milk chocolate-coated almonds, jar of 60."),
  p("Choco Almond Mango (Jar)", "chocolates", wt("Jar of 60 Pcs", 600), "Chocolate-coated almonds in mango flavour, jar of 60."),
  p("Choco Almond Orange (Jar)", "chocolates", wt("Jar of 60 Pcs", 600), "Chocolate-coated almonds in orange flavour, jar of 60."),
  p("Raisin Chocolates (Jar)", "chocolates", wt("Jar of 60 Pcs", 600), "Chocolate-coated raisins, jar of 60."),
  p("Date and Walnut Chocolates (Jar)", "chocolates", wt("Jar of 60 Pcs", 600), "Chocolate-coated dates and walnuts, jar of 60."),
  p("Roasted Almond Chocolates (Jar)", "chocolates", [{ label: "Jar of 60 Pcs", price: 600 }, { label: "Jar of 80 Pcs", price: 400 }], "Chocolate-coated roasted almonds."),
  p("Anjeer Pista Chocolates (Jar)", "chocolates", wt("Jar of 60 Pcs", 600), "Chocolate-coated fig and pistachio, jar of 60."),
  p("Premium Assorted Chocolate Collection (Gift Box)", "chocolates", wt("140g", 185), "A curated assortment of premium chocolates in a gift box.", true),
];

export const bestsellers = products.filter((pr) => pr.bestseller).concat(
  products.filter((pr) => !pr.bestseller).slice(0, Math.max(0, 8 - products.filter((pr) => pr.bestseller).length)),
);

export const findProduct = (slug: string) => products.find((pr) => pr.slug === slug);
export const productsByCategory = (slug: CategorySlug) =>
  products.filter((pr) => pr.category === slug);
