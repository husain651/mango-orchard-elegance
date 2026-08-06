import sindhri from "@/assets/mango-sindhri.png";
import chaunsa from "@/assets/mango-chaunsa.png";
import ratol from "@/assets/mango-ratol.png";
import langra from "@/assets/mango-langra.png";

export type Product = {
  slug: string;
  name: string;
  image: string;
  season: string;
  sweetness: number; // 1-10
  weight: string;
  origin: string;
  description: string;
  sizes: string[];
  price: number;
  stock: number;
  harvest: string;
  shelfLife: string;
  farm: string;
  nutrition: { label: string; value: string }[];
};

const nutrition = [
  { label: "Calories", value: "60 kcal" },
  { label: "Vitamin C", value: "60% DV" },
  { label: "Vitamin A", value: "21% DV" },
  { label: "Fibre", value: "1.6 g" },
  { label: "Sugars", value: "13.7 g" },
  { label: "Potassium", value: "168 mg" },
];

export const products: Product[] = [
  {
    slug: "sindhri",
    name: "Sindhri",
    image: sindhri,
    season: "May – July",
    sweetness: 8,
    weight: "350–550 g each",
    origin: "Mirpurkhas, Sindh",
    description:
      "The queen of Sindh. Oval, honey-golden and remarkably fibre-free, with a fragrance that fills the room before the first slice.",
    sizes: ["5 kg", "10 kg", "20 kg carton"],
    price: 42,
    stock: 128,
    harvest: "Hand-picked at first light, 24h before dispatch",
    shelfLife: "8–12 days at 12°C",
    farm: "Sindhri Estate, Mirpurkhas",
    nutrition,
  },
  {
    slug: "chaunsa",
    name: "Chaunsa",
    image: chaunsa,
    season: "June – August",
    sweetness: 10,
    weight: "250–400 g each",
    origin: "Multan, Punjab",
    description:
      "Pakistan's most exported variety. Dense, buttery flesh with an intense sweetness and almost no fibre — the benchmark for premium mango.",
    sizes: ["5 kg", "10 kg", "20 kg carton"],
    price: 48,
    stock: 96,
    harvest: "Tree-ripened, picked at 82% maturity",
    shelfLife: "10–14 days at 12°C",
    farm: "Rahim Orchards, Multan",
    nutrition,
  },
  {
    slug: "white-chaunsa",
    name: "White Chaunsa",
    image: chaunsa,
    season: "July – August",
    sweetness: 9,
    weight: "300–420 g each",
    origin: "Rahim Yar Khan, Punjab",
    description:
      "A paler, more perfumed Chaunsa with a delicate floral finish. Prized by chefs for desserts and cold-pressed purées.",
    sizes: ["5 kg", "10 kg"],
    price: 52,
    stock: 64,
    harvest: "Selective multi-pass harvesting",
    shelfLife: "10–14 days at 12°C",
    farm: "Kot Sabzal Farms, Rahim Yar Khan",
    nutrition,
  },
  {
    slug: "black-chaunsa",
    name: "Black Chaunsa",
    image: langra,
    season: "July – September",
    sweetness: 10,
    weight: "320–450 g each",
    origin: "Muzaffargarh, Punjab",
    description:
      "Deep-blushed skin, spoon-soft interior and the highest brix of the season. Late harvest, strictly limited allocation.",
    sizes: ["5 kg", "10 kg"],
    price: 58,
    stock: 40,
    harvest: "Late-season, single-pass hand harvest",
    shelfLife: "8–12 days at 12°C",
    farm: "Alipur Grove, Muzaffargarh",
    nutrition,
  },
  {
    slug: "anwar-ratol",
    name: "Anwar Ratol",
    image: ratol,
    season: "June – July",
    sweetness: 10,
    weight: "120–180 g each",
    origin: "Rehmani Ratol, Punjab",
    description:
      "Small fruit, enormous flavour. Concentrated, caramel-sweet and utterly fibre-free — a connoisseur's mango.",
    sizes: ["4 kg", "8 kg"],
    price: 61,
    stock: 52,
    harvest: "Cluster-picked at peak aroma",
    shelfLife: "6–9 days at 12°C",
    farm: "Ratol Heritage Farm, Bahawalpur",
    nutrition,
  },
  {
    slug: "langra",
    name: "Langra",
    image: langra,
    season: "June – July",
    sweetness: 7,
    weight: "250–380 g each",
    origin: "Multan, Punjab",
    description:
      "Green-skinned even when ripe, with tangy-sweet saffron flesh and a turpentine-bright aroma much loved across South Asia.",
    sizes: ["5 kg", "10 kg", "20 kg carton"],
    price: 38,
    stock: 140,
    harvest: "Picked at 78% maturity for export",
    shelfLife: "8–11 days at 12°C",
    farm: "Shujabad Orchards, Multan",
    nutrition,
  },
  {
    slug: "dussehri",
    name: "Dussehri",
    image: sindhri,
    season: "May – June",
    sweetness: 8,
    weight: "200–300 g each",
    origin: "Lahore, Punjab",
    description:
      "Elongated and elegant, the earliest premium arrival of the season. Silky, mild and beautifully perfumed.",
    sizes: ["5 kg", "10 kg"],
    price: 36,
    stock: 0,
    harvest: "Early-season first flush",
    shelfLife: "7–10 days at 12°C",
    farm: "Kasur Valley Farms, Lahore",
    nutrition,
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
