import Link from "next/image";

const LatestOutreach = () => {
  return (
    <section className="py-16 bg-white dark:bg-dark overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-white mb-4">Humanitarian Outreach</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Following the call in Matthew 25:35-36, we respond to challenges with love and practical support[cite: 125, 157].
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* IDP Camp Visit */}
          <div className="group overflow-hidden rounded-2xl border border-stroke bg-white shadow-sm transition hover:shadow-lg">
            <div className="p-8">
              <span className="mb-3 inline-block rounded bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase">Mission Relief</span>
              <h3 className="mb-4 text-xl font-bold text-black">IDP Camp Interventions</h3>
              <p className="text-base text-body-color mb-4">
                Providing food items, clothing, and essential supplies to families displaced by violence[cite: 128, 129].
              </p>
              <div className="text-sm font-semibold text-primary">Mentorship & Counseling Provided [cite: 131]</div>
            </div>
          </div>

          {/* Flood Victims */}
          <div className="group overflow-hidden rounded-2xl border border-stroke bg-white shadow-sm transition hover:shadow-lg">
            <div className="p-8">
              <span className="mb-3 inline-block rounded bg-yellow-500/10 px-3 py-1 text-xs font-bold text-yellow-600 uppercase">Emergency Response</span>
              <h3 className="mb-4 text-xl font-bold text-black">Flood Victim Support</h3>
              <p className="text-base text-body-color mb-4">
                Swift action to provide clean drinking water, blankets, and household necessities to affected families[cite: 133, 134].
              </p>
              <div className="text-sm font-semibold text-yellow-600">Active Crisis Management [cite: 136]</div>
            </div>
          </div>

          {/* Less Privileged */}
          <div className="group overflow-hidden rounded-2xl border border-stroke bg-white shadow-sm transition hover:shadow-lg">
            <div className="p-8">
              <span className="mb-3 inline-block rounded bg-blue-900/10 px-3 py-1 text-xs font-bold text-blue-900 uppercase">Welfare Support</span>
              <h3 className="mb-4 text-xl font-bold text-black">Uplifting the Vulnerable</h3>
              <p className="text-base text-body-color mb-4">
                Organizing feeding programs and providing medical assistance to those struggling with poverty[cite: 144, 145, 146].
              </p>
              <div className="text-sm font-semibold text-blue-900">Restoring Human Dignity [cite: 148]</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};