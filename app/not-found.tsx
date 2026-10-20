import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="bg-[#000000] text-white min-h-screen font-sans selection:bg-white selection:text-black flex flex-col justify-between p-6 sm:p-12 lg:p-20">
      {/* Top Bar */}
      <div className="w-full max-w-[1720px] mx-auto flex items-center justify-between">
        <Link href="/" className="font-clash text-lg font-medium tracking-wide">
          Achtrex
        </Link>
        <span className="font-mono text-xs uppercase tracking-widest text-[#889fa8]">
          Error 404 // Spatial Null
        </span>
      </div>

      {/* Center Editorial Statement */}
      <div className="w-full max-w-[1720px] mx-auto my-auto py-16">
        <span className="font-mono text-xs uppercase tracking-widest text-[#889fa8] block mb-4">
          Coordinates Unresolved
        </span>
        <h1 className="font-clash text-6xl sm:text-8xl md:text-9xl font-normal tracking-tight text-white leading-none mb-8">
          Not Found
        </h1>
        <p className="font-clash text-lg sm:text-2xl text-white/70 font-light max-w-2xl leading-relaxed mb-12">
          The requested surface or concept experience does not exist or has been relocated within the Achtrex architecture.
        </p>

        <div className="flex flex-wrap items-center gap-6">
          <Link
            href="/"
            className="px-6 py-3.5 rounded-full bg-white text-black font-clash text-xs sm:text-sm uppercase tracking-wider font-medium hover:bg-white/90 transition-all"
          >
            Return to Homepage &rarr;
          </Link>
          <Link
            href="/projects"
            className="px-6 py-3.5 rounded-full border border-white/20 hover:border-white text-white font-clash text-xs sm:text-sm uppercase tracking-wider transition-all"
          >
            Explore Concept Experiences
          </Link>
          <Link
            href="/services"
            className="px-6 py-3.5 rounded-full border border-white/20 hover:border-white text-white font-clash text-xs sm:text-sm uppercase tracking-wider transition-all"
          >
            Studio Services
          </Link>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="w-full max-w-[1720px] mx-auto pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-[#889fa8]">
        <div>Achtrex &bull; Digital Studio</div>
        <div>
          <Link href="/contact" className="hover:text-white transition-colors underline underline-offset-4">
            Contact Studio Support &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
