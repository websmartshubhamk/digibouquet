import { Bouquet } from "@/types";

const STORAGE_KEY = "digibouquet_garden";

export function saveBouquet(bouquet: Bouquet): void {
  if (typeof window === "undefined") return;

  const existing = getBouquets();
  existing.push(bouquet);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
}

export function getBouquets(): Bouquet[] {
  if (typeof window === "undefined") return [];

  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) return [];

  try {
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export function generateId(): string {
  return Math.random().toString(36).substring(2, 15);
}

// Generate some sample bouquets for the garden
export function generateSampleBouquets(): Bouquet[] {
  const flowerIds = ["rose", "peony", "daisy", "sunflower", "lily", "tulip", "orchid", "dahlia", "carnation", "anemone", "ranunculus", "zinnia"];

  const samples: Bouquet[] = [];

  for (let i = 0; i < 6; i++) {
    const numFlowers = 6 + Math.floor(Math.random() * 5);
    const shuffled = [...flowerIds].sort(() => Math.random() - 0.5);
    const selectedFlowers = shuffled.slice(0, numFlowers);

    const flowers = selectedFlowers.map((flowerId, index) => {
      const angle = (index / numFlowers) * 360;
      const radius = 80 + Math.random() * 40;
      const x = Math.cos((angle * Math.PI) / 180) * radius;
      const y = Math.sin((angle * Math.PI) / 180) * radius * 0.6;
      const rotation = -30 + Math.random() * 60;

      return {
        flowerId,
        rotation,
        x: 150 + x,
        y: 150 + y,
      };
    });

    samples.push({
      id: generateId(),
      flowers,
      createdAt: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000),
      mode: Math.random() > 0.5 ? "color" : "mono",
    });
  }

  return samples;
}
