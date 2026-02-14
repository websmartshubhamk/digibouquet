"use client";

import { useBouquet } from "@/context/BouquetContext";
import { getFlowerById } from "@/data/flowers";

export default function BouquetPreview() {
  const { bouquetFlowers, mode } = useBouquet();

  return (
    <div className="relative w-80 h-80 mx-auto">
      {/* Bush/Vase background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-24 bg-green-800 rounded-t-full opacity-80" />

      {/* Flowers */}
      <div className={`relative w-full h-full ${mode === "mono" ? "grayscale" : ""}`}>
        {bouquetFlowers.map((bf, index) => {
          const flower = getFlowerById(bf.flowerId);
          if (!flower) return null;

          return (
            <div
              key={`${bf.flowerId}-${index}`}
              className="absolute text-4xl transition-transform hover:scale-125 cursor-pointer"
              style={{
                left: `${bf.x}px`,
                top: `${bf.y}px`,
                transform: `rotate(${bf.rotation}deg)`,
                zIndex: index,
              }}
            >
              {flower.emoji}
            </div>
          );
        })}
      </div>
    </div>
  );
}
