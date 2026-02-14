import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="text-center max-w-md mx-auto">
        {/* Logo */}
        <h1 className="text-4xl md:text-5xl font-bold tracking-widest uppercase mb-4">
          digibouquet
        </h1>

        {/* Tagline */}
        <p className="text-sm tracking-wider text-gray-600 mb-12 uppercase">
          beautiful flowers delivered digitally
        </p>

        {/* Hero Flower */}
        <div className="text-8xl mb-12 animate-float">
          🌸
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col gap-4">
          <Link
            href="/bouquet?mode=color"
            className="btn-primary block text-center"
          >
            Build a Bouquet
          </Link>

          <Link
            href="/bouquet?mode=mono"
            className="btn-primary block text-center"
          >
            Build it in Black and White
          </Link>

          <Link
            href="/garden"
            className="btn-primary block text-center"
          >
            View Garden
          </Link>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-xs text-gray-400 space-y-2">
          <p>
            create and share a digital flower bouquet
          </p>
          <p>
            made with love
          </p>
        </footer>
      </div>
    </main>
  );
}
