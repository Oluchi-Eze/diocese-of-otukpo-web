import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ADODI | Anglican Diocese of Otukpo",
  description: "The Anglican Diocese of Otukpo Development Initiative (ADODI)",
};

const AdodiPage = () => {
  return (
    <main className="pt-[120px] pb-20">
      {/* HEADER SECTION */}
      <section className="bg-slate-900 py-16 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-yellow-200 to-yellow-500 bg-clip-text text-transparent">
              ADODI
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Anglican Diocese of Otukpo Development Initiative: 
            Transforming lives through service, empowerment, and faith.
          </p>
        </div>
      </section>

      {/* CORE MISSION & PDF DOWNLOAD SECTION */}
      <section className="py-20 bg-white dark:bg-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 dark:text-white mb-6">Our Commitment</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
              We believe true transformation goes beyond charity; it requires investment in human capital. 
              By equipping individuals with skills and building essential infrastructure, 
              we uplift entire communities and glorify God through service.
            </p>

            {/* --- THE PDF BOX (Missing from your last version) --- */}
            <div className="relative overflow-hidden rounded-2xl bg-blue-900 p-8 text-left text-white shadow-xl">
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-6">
                <div className="max-w-[500px]">
                  <h3 className="mb-2 text-2xl font-bold text-yellow-500">Official Initiative Document</h3>
                  <p className="text-blue-100">
                    Access the complete ADODI framework, including project timelines, 
                    humanitarian strategies, and development goals for the region.
                  </p>
                </div>
                <a
                  href="/docs/adodi-initiative.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-bold text-blue-900 transition hover:bg-yellow-500 hover:scale-105"
                >
                  <svg className="mr-2 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Read Full Document
                </a>
              </div>
              {/* Decorative circle */}
              <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
            </div>
          </div>

          {/* THE FOUR PILLARS GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <PillarCard 
              title="People Development" 
              desc="Vocational skills, agribusiness, and economic empowerment to break poverty cycles."
              icon="🌱"
            />
            <PillarCard 
              title="Infrastructure" 
              desc="Building schools, health centers, and clean water systems as a backbone for growth."
              icon="🏗️"
            />
            <PillarCard 
              title="Training & Leadership" 
              desc="Workshops on ethical leadership, digital skills, and community development."
              icon="🎓"
            />
            <PillarCard 
              title="Humanitarian Aid" 
              desc="Relief for IDPs, flood victims, and targeted welfare for the less privileged."
              icon="❤️"
            />
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-blue-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Be Part of the Transformation</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/donate" className="bg-yellow-500 text-slate-900 px-10 py-4 rounded-full font-bold hover:bg-yellow-400 transition shadow-lg">
              Donate to Projects
            </Link>
            <Link href="/contact" className="border border-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-blue-900 transition">
              Partner with Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

const PillarCard = ({ title, desc, icon }: { title: string; desc: string; icon: string }) => (
  <div className="p-8 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{title}</h3>
    <p className="text-slate-600 dark:text-slate-400">{desc}</p>
  </div>
);

export default AdodiPage;