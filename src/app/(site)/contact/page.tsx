import React from 'react';
import Breadcrumb from "@/components/Common/Breadcrumb";

export const metadata = {
  title: "Contact Us | Anglican Diocese of Otukpo",
};

export default function ContactPage() {
  return (
    <main className="bg-white">
      <Breadcrumb 
        pageName="Contact Us" 
        pageDescription="Have a question about our ministry or ADODI projects? Reach out to us today." 
      />

      <section className="pb-20 pt-10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex flex-wrap shadow-2xl rounded-3xl overflow-hidden border border-slate-100">
            
            {/* Contact Info Sidebar */}
            <div className="w-full lg:w-1/3 bg-[#090E34] p-12 text-white">
              <h3 className="text-3xl font-bold mb-8 text-white">Get in Touch</h3>
              <div className="space-y-8">
                <div className="flex gap-4">
  <span className="text-2xl text-yellow-400">📍</span>
  <div>
    <h4 className="font-bold text-yellow-400 text-lg uppercase tracking-wide">Office Address</h4>
    <p className="text-slate-300">Depot Road PMB 0360, Otukpo, Benue State, Nigeria.</p>
  </div>
</div>

<div className="flex gap-4">
  <span className="text-2xl text-yellow-400">✉️</span>
  <div>
    <h4 className="font-bold text-yellow-400 text-lg uppercase tracking-wide">Email Us</h4>
    <p className="text-slate-300 break-all">anglicandioceseofotukpo@gmail.com</p>
  </div>
</div>

                <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10">
                  <h4 className="text-primary font-bold text-yellow-400">Office Hours</h4>
                  <p className="text-sm text-slate-400">Monday — Friday<br/>9:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="w-full lg:w-2/3 p-12 bg-white">
              <h3 className="text-2xl font-bold mb-6 text-black">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-dark">Full Name</label>
                    <input type="text" placeholder="Enter your name" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-primary transition" />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-dark">Email Address</label>
                    <input type="email" placeholder="Enter your email" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-primary transition" />
                  </div>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-dark">Subject</label>
                  <input type="text" placeholder="How can we help?" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-primary transition" />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-dark">Message</label>
                  <textarea rows={5} placeholder="Type your message here..." className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-primary transition"></textarea>
                </div>
                <button className="w-full bg-blue-900 text-white font-bold py-4 rounded-xl hover:bg-blue-800 shadow-lg transform transition active:scale-95">
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}