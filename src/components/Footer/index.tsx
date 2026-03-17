"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-[#090E34] pt-16 md:pt-20 lg:pt-24 text-white">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          
          {/* Column 1: Logos and Mission */}
          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
            <div className="mb-12 max-w-[360px]">
              <div className="flex items-center gap-4 mb-8">
                <Link href="/" className="inline-block">
                  <Image
                    src="/images/logo/logo.png"
                    alt="Diocese Logo"
                    width={60}
                    height={60}
                    className="block" 
                  />
                </Link>
                <div className="font-bold leading-tight text-white">
                  <span className="text-[10px] uppercase block opacity-70 tracking-widest">Anglican Diocese</span>
                  <span className="text-xl">OF OTUKPO</span>
                </div>
              </div>
              <p className="text-base leading-relaxed text-slate-400 mb-9">
                A community of faith dedicated to spiritual growth and humanitarian service through the ADODI initiative.
              </p>
              
              {/* Social Media Icons (SVG) */}
              <div className="flex items-center gap-5">
                <Link href="#" className="p-2 rounded-full bg-white/10 hover:bg-yellow-400 hover:text-[#090E34] transition text-white">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </Link>
                <Link href="#" className="p-2 rounded-full bg-white/10 hover:bg-yellow-400 hover:text-[#090E34] transition text-white">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </Link>
                <Link href="#" className="p-2 rounded-full bg-white/10 hover:bg-yellow-400 hover:text-[#090E34] transition text-white">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c.796 0 1.441.645 1.441 1.44s-.645 1.44-1.441 1.44c-.795 0-1.439-.645-1.439-1.44s.644-1.44 1.439-1.44z"/></svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-12">
              <h3 className="mb-9 text-xl font-bold text-white uppercase tracking-wider">Navigation</h3>
              <ul className="space-y-4">
                <li><Link href="/gallery" className="text-base text-slate-400 hover:text-yellow-400 transition">Photo Gallery</Link></li>
                <li><Link href="/adodi" className="text-base text-slate-400 hover:text-yellow-400 transition">ADODI NGO</Link></li>
                <li><Link href="/donate" className="text-base text-slate-400 hover:text-yellow-400 transition">Give Now</Link></li>
                <li><Link href="/contact" className="text-base text-slate-400 hover:text-yellow-400 transition">Contact</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 3: Contact */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-3/12">
            <div className="mb-12">
              <h3 className="mb-9 text-xl font-bold text-white uppercase tracking-wider">Connect</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                   <span className="text-yellow-400 mt-1">📍</span>
                   <p className="text-base text-slate-400 italic">
                    Depot Road PMB 0360,<br /> Otukpo, Nigeria
                  </p>
                </div>
                <div className="flex gap-4">
                   <span className="text-yellow-400 mt-1">✉️</span>
                   <a href="mailto:anglicandioceseofotukpo@gmail.com" className="text-base text-slate-400 hover:text-yellow-400 transition break-all">
                    anglicandioceseofotukpo@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Developer Credit */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="py-8 flex flex-wrap items-center justify-between gap-6">
          <div className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Anglican Diocese of Otukpo.
          </div>
          
          {/* Honoured Hands Link */}
          <a 
            href="https://honouredhands.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-3 bg-white/5 py-2 px-4 rounded-lg hover:bg-white/10 transition group"
          >
             <span className="text-xs text-slate-400 uppercase tracking-tighter">Powered by</span>
             <div className="flex items-center gap-2">
                <Image 
                    src="/images/logo/honoured-hands.png" 
                    alt="Honoured Hands" 
                    width={22} 
                    height={22} 
                    className="object-contain"
                />
                <span className="text-sm font-bold text-white group-hover:text-yellow-400">Honoured Hands</span>
             </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;