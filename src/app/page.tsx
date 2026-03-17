import { Metadata } from "next";
import Link from "next/link";
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Home | Anglican Diocese of Otukpo",
  description: "Official website of the Anglican Diocese of Otukpo. Faith, Hope, and Charity.",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      
      {/* 1. Hero Section */}
      <Hero />
      
      {/* 2. History & Vision Section (The "About" content) */}
      <HistorySection />

      {/* 3. ADODI Section */}
      <ADODISection />

      {/* 4. Support Our Mission Section */}
      <SupportSection />

      {/* 5. Contact Call-to-Action */}
      <ContactCTA />
    </>
  );
}

// --- HISTORY & VISION COMPONENT ---
const HistorySection = () => {
  return (
    <section className="relative z-10 py-20 bg-white dark:bg-dark overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="max-w-[540px]">
              <h2 className="mb-5 text-3xl font-bold text-blue-900 dark:text-white sm:text-4xl">
                Our Heritage & Vision
              </h2>
              <p className="mb-8 text-base leading-relaxed text-body-color dark:text-slate-400">
                The Anglican Diocese of Otukpo stands as a beacon of faith in the region, 
                dedicated to upholding the historic Anglican tradition while meeting the 
                evolving needs of our community. 
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-900/10 text-blue-900 text-2xl">
                    ⛪
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-black dark:text-white">Spiritual Vitality</h4>
                    <p className="text-sm text-body-color">Nurturing a community rooted in the Great Commission and the love of Christ.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-500/10 text-yellow-600 text-2xl">
                    🤝
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-black dark:text-white">Social Impact</h4>
                    <p className="text-sm text-body-color">
                      Translating God&apos;s love into action through the ADODI initiative—bringing hope and healing to those in need.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 px-4">
            {/* The Container */}
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700">
              <Image
                src="/images/logo/logo.jpg" 
                alt="Anglican Diocese of Otukpo Logo"
                fill
                className="object-cover" // This makes it fill the whole box
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- ADODI SECTION COMPONENT ---
const ADODISection = () => {
  return (
    <section id="adodi" className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-900/50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="lg:pr-12">
              <span className="inline-block px-4 py-2 rounded-full bg-yellow-500/10 text-yellow-600 text-sm font-bold tracking-widest uppercase mb-4">
                Our Development Arm
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
                ADODI: Shining Light <br/> 
                <span className="text-yellow-600">Through Service</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                The Anglican Diocese of Otukpo Development Initiative (ADODI) translates faith into 
                compassionate action, transforming lives across our community.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {["People Development", "Infrastructure", "Skills Training", "Humanitarian Aid"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-900 text-white flex items-center justify-center text-xs">✓</div>
                    <span className="font-semibold text-slate-700 dark:text-slate-200">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/adodi" className="bg-blue-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-800 transition shadow-lg">
                  Explore the Initiative
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 px-4">
            <div className="grid grid-cols-2 gap-4 relative z-10">
              <div className="space-y-4">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700">
                  <span className="text-3xl mb-4 block">🏥</span>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Health</h4>
                  <p className="text-xs text-slate-500">Quality medical care.</p>
                </div>
                <div className="bg-yellow-500 p-6 rounded-2xl shadow-xl text-slate-900">
                  <span className="text-3xl mb-4 block">📦</span>
                  <h4 className="font-bold mb-2">Emergency Relief</h4>
                  <p className="text-xs font-medium">Supporting flood victims.</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-blue-900 p-6 rounded-2xl shadow-xl text-white">
                  <span className="text-3xl mb-4 block">🏫</span>
                  <h4 className="font-bold mb-2">Education</h4>
                  <p className="text-xs text-blue-100">Safe classrooms.</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700">
                  <span className="text-3xl mb-4 block">💧</span>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Clean Water</h4>
                  <p className="text-xs text-slate-500">Boreholes & sanitation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- SUPPORT SECTION COMPONENT ---
const SupportSection = () => {
  return (
    <section className="bg-slate-100 dark:bg-slate-800/20 py-16 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-5 text-3xl font-bold text-black dark:text-white sm:text-4xl">
          Support Our Mission
        </h2>
        <p className="mb-10 text-base text-body-color max-w-[700px] mx-auto leading-relaxed">
          Your contributions help us reach more souls and fund vital ADODI community projects.
        </p>
        <Link href="/donate" className="rounded-xl bg-blue-900 px-9 py-4 text-base font-bold text-white shadow-lg hover:bg-blue-800 transition">
          Give Online / Bank Details
        </Link>
      </div>
    </section>
  );
};

// --- CONTACT CTA COMPONENT ---
const ContactCTA = () => {
  return (
    <section className="py-16 bg-white dark:bg-dark border-t border-stroke dark:border-white/10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-6 text-3xl font-bold text-black dark:text-white">Reach Out to Us</h2>
        <Link href="/contact" className="inline-flex items-center justify-center rounded-xl border-2 border-blue-900 py-3 px-10 text-base font-bold text-blue-900 hover:bg-blue-900 hover:text-white transition duration-300">
          Visit Our Contact Page
        </Link>
      </div>
    </section>
  );
};