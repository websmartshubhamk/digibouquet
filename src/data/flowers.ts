import { Flower } from "@/types";

export const flowers: Flower[] = [
  {
    id: "rose",
    name: "Rose",
    meaning: "Love & Romance",
    birthMonth: "June",
    color: "#e63946",
    emoji: "🌹",
  },
  {
    id: "peony",
    name: "Peony",
    meaning: "Prosperity & Good Fortune",
    birthMonth: "November",
    color: "#ffb3c1",
    emoji: "🌸",
  },
  {
    id: "daisy",
    name: "Daisy",
    meaning: "Innocence & Purity",
    birthMonth: "April",
    color: "#ffffff",
    emoji: "🌼",
  },
  {
    id: "sunflower",
    name: "Sunflower",
    meaning: "Happiness & Vitality",
    birthMonth: "August",
    color: "#ffd60a",
    emoji: "🌻",
  },
  {
    id: "lily",
    name: "Lily",
    meaning: "Devotion & Purity",
    birthMonth: "May",
    color: "#fff1e6",
    emoji: "🪷",
  },
  {
    id: "tulip",
    name: "Tulip",
    meaning: "Perfect Love",
    birthMonth: "January",
    color: "#ff006e",
    emoji: "🌷",
  },
  {
    id: "orchid",
    name: "Orchid",
    meaning: "Elegance & Beauty",
    birthMonth: "February",
    color: "#9d4edd",
    emoji: "🪻",
  },
  {
    id: "dahlia",
    name: "Dahlia",
    meaning: "Dignity & Elegance",
    birthMonth: "September",
    color: "#c9184a",
    emoji: "🌺",
  },
  {
    id: "carnation",
    name: "Carnation",
    meaning: "Fascination & Love",
    birthMonth: "January",
    color: "#ff758f",
    emoji: "🌸",
  },
  {
    id: "anemone",
    name: "Anemone",
    meaning: "Anticipation & Protection",
    birthMonth: "March",
    color: "#7b2cbf",
    emoji: "🌺",
  },
  {
    id: "ranunculus",
    name: "Ranunculus",
    meaning: "Charm & Attraction",
    birthMonth: "October",
    color: "#ffccd5",
    emoji: "🌸",
  },
  {
    id: "zinnia",
    name: "Zinnia",
    meaning: "Lasting Friendship",
    birthMonth: "July",
    color: "#ff4d6d",
    emoji: "🌺",
  },
];

export const getFlowerById = (id: string): Flower | undefined => {
  return flowers.find((f) => f.id === id);
};
