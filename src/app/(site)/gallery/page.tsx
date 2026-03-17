"use client";
import { useState } from "react";
import Image from "next/image";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const GalleryPage = () => {
  const [filter, setFilter] = useState("all");
  const [index, setIndex] = useState(-1);

  // Automatically generating the list based on your filenames
  const adodiImages = Array.from({ length: 10 }, (_, i) => ({
    id: `adodi-${i + 1}`,
    category: "adodi",
    src: `/images/gallery/adodi-${i + 1}.jpg`,
    title: `ADODI Project ${i + 1}`,
  }));

  const churchImages = Array.from({ length: 11 }, (_, i) => ({
    id: `church-${i + 1}`,
    category: "diocese",
    src: `/images/gallery/church-${i + 1}.jpg`,
    title: `Diocese Event ${i + 1}`,
  }));

  const allImages = [...adodiImages, ...churchImages];

  const filteredImages = filter === "all" 
    ? allImages 
    : allImages.filter(img => img.category === filter);

  return (
    <>
      <Breadcrumb 
        pageName="Photo Gallery" 
        pageDescription="Capturing the growth of the Diocese and the impact of ADODI projects." 
      />

      <section className="pb-20 pt-10">
        <div className="container mx-auto px-4">
          
          {/* FILTER BUTTONS */}
          <div className="mb-12 flex justify-center gap-4">
            {["all", "diocese", "adodi"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-8 py-2 text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                  filter === cat 
                    ? "bg-blue-900 text-white shadow-lg scale-105" 
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat === "all" ? "View All" : cat === "diocese" ? "The Diocese" : "ADODI Projects"}
              </button>
            ))}
          </div>

          {/* IMAGE GRID */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredImages.map((image, i) => (
              <div 
                key={image.id} 
                onClick={() => setIndex(i)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-slate-200 aspect-[4/3] shadow-md border border-slate-100"
              >
                <Image 
                  src={image.src} 
                  alt={image.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 flex items-center justify-center bg-blue-900/40 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <div className="text-center p-4">
                     <p className="text-white font-bold text-lg">{image.title}</p>
                     <span className="text-yellow-400 text-xs font-bold uppercase">Enlarge</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* LIGHTBOX POPUP */}
          <Lightbox
            index={index}
            open={index >= 0}
            close={() => setIndex(-1)}
            slides={filteredImages.map((img) => ({ src: img.src }))}
          />
        </div>
      </section>
    </>
  );
};

export default GalleryPage;