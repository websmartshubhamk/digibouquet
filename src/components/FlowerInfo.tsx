"use client";

import { flowers } from "@/data/flowers";

export default function FlowerInfo() {
  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-gray-50 rounded-lg">
      <h3 className="text-sm font-bold tracking-widest uppercase mb-4 text-center">
        Flower Meanings
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-xs">
        {flowers.map((flower) => (
          <div key={flower.id} className="flex items-start gap-2">
            <span className="text-lg">{flower.emoji}</span>
            <div>
              <p className="font-bold">{flower.name}</p>
              <p className="text-gray-600">{flower.meaning}</p>
              {flower.birthMonth && (
                <p className="text-gray-400">{flower.birthMonth} birth flower</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
