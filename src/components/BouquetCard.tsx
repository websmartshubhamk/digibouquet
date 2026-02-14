"use client";

import { Bouquet } from "@/types";
import { getFlowerById } from "@/data/flowers";

interface BouquetCardProps {
  bouquet: Bouquet;
}

export default function BouquetCard({ bouquet }: BouquetCardProps) {
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      {/* Bouquet Display */}
      <div
        className={`relative w-full h-64 bg-gradient-to-b from-green-50 to-green-100 ${
          bouquet.mode === "mono" ? "grayscale" : ""
        }`}
      >
        {/* Bush background */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-16 bg-green-700 rounded-t-full opacity-70" />

        {/* Flowers */}
        {bouquet.flowers.map((bf, index) => {
          const flower = getFlowerById(bf.flowerId);
          if (!flower) return null;

          // Scale down positions for card view
          const scale = 0.7;
          const x = (bf.x - 150) * scale + 100;
          const y = (bf.y - 150) * scale + 100;

          return (
            <div
              key={`${bf.flowerId}-${index}`}
              className="absolute text-2xl transition-transform hover:scale-125"
              style={{
                left: `${x}px`,
                top: `${y}px`,
                transform: `rotate(${bf.rotation}deg)`,
                zIndex: index,
              }}
            >
              {flower.emoji}
            </div>
          );
        })}
      </div>

      {/* Info */}
      <div className="p-4 text-center">
        <p className="text-xs text-gray-500 uppercase tracking-wider">
          {formatDate(bouquet.createdAt)}
        </p>
        {bouquet.message && (
          <p className="mt-2 text-sm text-gray-600 italic truncate">
            &ldquo;{bouquet.message}&rdquo;
          </p>
        )}
      </div>
    </div>
  );
}
