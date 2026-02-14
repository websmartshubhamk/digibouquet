"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Bouquet } from "@/types";
import { getBouquets, generateSampleBouquets } from "@/lib/storage";
import BouquetCard from "@/components/BouquetCard";

export default function Garden() {
  const [bouquets, setBouquets] = useState<Bouquet[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get saved bouquets or generate samples
    let saved = getBouquets();
    if (saved.length === 0) {
      saved = generateSampleBouquets();
    }
    setBouquets(saved);
    setLoading(false);
  }, []);

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/" className="text-2xl font-bold tracking-widest uppercase">
            digibouquet
          </Link>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold tracking-widest uppercase text-center mb-4">
          Our Garden
        </h1>
        <p className="text-center text-sm text-gray-500 mb-12">
          A peek at some of the bouquets people have made!
        </p>

        {/* Gallery */}
        {loading ? (
          <div className="text-center py-12">
            <div className="text-4xl animate-pulse">🌸</div>
            <p className="mt-4 text-gray-500">Loading bouquets...</p>
          </div>
        ) : bouquets.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">No bouquets yet!</p>
            <Link href="/bouquet?mode=color" className="btn-primary inline-block">
              Create the first one
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bouquets.map((bouquet) => (
              <BouquetCard key={bouquet.id} bouquet={bouquet} />
            ))}
          </div>
        )}

        {/* Back button */}
        <div className="text-center mt-12">
          <Link href="/" className="btn-primary inline-block">
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
