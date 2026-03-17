import React from 'react';
import Link from 'next/link';

export const metadata = { title: "About Us | Anglican Diocese of Otukpo" };

export default function AboutPage() {
  return (
    <main>
      <section className="bg-blue-900 py-20 text-center text-white">
        <h1 className="text-4xl font-bold">About Our Diocese</h1>
        <p className="mt-2 text-blue-200"><Link href="/">Home</Link> / About Us</p>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Our History & Mission</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            The Anglican Diocese of Otukpo stands as a beacon of hope and a pillar of faith in our community. 
            We are dedicated to spreading the message of Christ while providing spiritual and social 
            upliftment to all.
          </p>
          <div className="bg-slate-50 p-8 rounded-xl border-l-4 border-yellow-500">
            <h3 className="text-xl font-bold mb-3">Our Core Mandate</h3>
            <p className="italic text-slate-600">"To preach the Gospel, to nurture believers, and to serve the community in love."</p>
          </div>
        </div>
      </section>
    </main>
  );
}