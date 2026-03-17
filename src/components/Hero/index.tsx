import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-20 lg:py-32 min-h-[700px] flex items-center">
      
      {/* 1. BACKGROUND IMAGE & OVERLAY */}
<div className="absolute inset-0 z-0">
  <img 
    src="/images/hero/hero-bg.jpg" 
    alt="Anglican Diocese of Otukpo Background" 
    className="h-full w-full object-cover opacity-70" // Changed from 50 to 70
  />
  {/* Lightened gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-slate-800/40 via-slate-900/50 to-slate-900/80"></div>
</div>

      {/* 2. MAIN CONTENT */}
      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          
          {/* Decorative Anglican Cross Icon */}
          <div className="mb-8 text-yellow-500">
            <svg className="h-16 w-16 mx-auto" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11 2h2v5h4v2h-4v4h5v2h-5v7h-2v-7h-5v-2h5v-4h-4v-2h4v-5z" />
            </svg>
          </div>

          <h1 className="mb-6 max-w-4xl font-extrabold tracking-tight text-white">
            {/* Smaller "Welcome to" text */}
            <span className="mb-3 block text-xl font-medium tracking-widest uppercase text-white/80 md:text-2xl">
              Welcome to the
            </span>
            
            {/* Larger, Golden Anglican Diocese text */}
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              <span className="bg-gradient-to-r from-yellow-200 via-yellow-350 to-yellow-500 bg-clip-text text-transparent">
                Anglican Diocese of Otukpo
              </span>
            </span>
          </h1>

          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-slate-200 md:text-xl font-light">
            A community committed to the Great Commission, 
            upholding the historic faith, and sharing the love of Christ 
            throughout the Otukpo region.
          </p>

          
        </div>
      </div>

      {/* 3. DECORATIVE DOTS PATTERN */}
      <div className="absolute bottom-10 right-10 hidden opacity-20 lg:block">
        <svg width="120" height="120" fill="white">
          <pattern id="dotPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="3" cy="3" r="1.5" />
          </pattern>
          <rect width="120" height="120" fill="url(#dotPattern)" />
        </svg>
      </div>

    </section>
  );
};

export default Hero;