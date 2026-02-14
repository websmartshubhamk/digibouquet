"use client";

import { flowers } from "@/data/flowers";
import { useBouquet } from "@/context/BouquetContext";

export default function FlowerPicker() {
  const { selectedFlowers, addFlower, removeFlower, mode } = useBouquet();

  const toggleFlower = (flowerId: string) => {
    if (selectedFlowers.includes(flowerId)) {
      removeFlower(flowerId);
    } else {
      addFlower(flowerId);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <p className="text-center text-sm tracking-wider uppercase mb-8">
        Pick 6 to 10 blooms
      </p>

      <div className="grid grid-cols-3 md:grid-cols-4 gap-6">
        {flowers.map((flower) => {
          const isSelected = selectedFlowers.includes(flower.id);
          return (
            <button
              key={flower.id}
              onClick={() => toggleFlower(flower.id)}
              className={`
                flower-item flex flex-col items-center p-4 rounded-lg transition-all
                ${isSelected ? "selected bg-gray-100" : "hover:bg-gray-50"}
                ${mode === "mono" ? "grayscale" : ""}
              `}
            >
              <span className="text-5xl mb-2">{flower.emoji}</span>
              <span className="text-xs uppercase tracking-wider">{flower.name}</span>
              {isSelected && (
                <span className="mt-1 w-2 h-2 bg-black rounded-full" />
              )}
            </button>
          );
        })}
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        {selectedFlowers.length} / 10 blooms selected
      </div>
    </div>
  );
}
