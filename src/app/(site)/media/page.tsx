import React from 'react';

export const metadata = {
  title: "Media & Gallery | Anglican Diocese of Otukpo",
};

export default function MediaPage() {
  const images = [
    { url: "https://images.unsplash.com/photo-1548625361-649060699479", title: "Cathedral Service" },
    { url: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3", title: "Diocesan Choir" },
    { url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1", title: "Community Outreach" },
    { url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c", title: "ADODI Projects" },
  ];

  return (
    <main className="bg-white min-h-screen">
      <section className="bg-blue-900 py-20 text-center text-white">
        <h1 className="text-4xl font-bold">Media & Gallery</h1>
        <p className="mt-2 text-blue-200 uppercase tracking-widest text-sm">Capturing our journey of faith</p>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((img, index) => (
              <div key={index} className="group overflow-hidden rounded-xl shadow-lg bg-slate-100">
                <img 
                  src={`${img.url}?auto=format&fit=crop&q=80&w=800`} 
                  alt={img.title} 
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-slate-800">{img.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}