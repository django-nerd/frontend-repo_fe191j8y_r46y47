import React from 'react';
import { Mic, Smartphone, Home, Wrench } from 'lucide-react';

const ProductCard = ({ icon: Icon, title, subtitle, points, gradient }) => (
  <div className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-white shadow-xl`}> 
    <div className={`absolute inset-0 ${gradient} opacity-20`} />
    <div className="relative z-10">
      <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-white/10 p-3">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-white/70">{subtitle}</p>
      <ul className="mt-4 space-y-2 text-sm text-white/80">
        {points.map((p, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default function Products() {
  return (
    <section className="relative w-full bg-gradient-to-b from-black to-[#0b0b12] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Core Products</h2>
          <p className="mt-3 text-white/70">
            An ecosystem designed to modernize every step—from voice to action, from home insights to transaction.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <ProductCard
            icon={Mic}
            title="MAIRA"
            subtitle="Mobile AI Realtor Assistant"
            points={[
              'Voice-first updates to CRMs, notes, follow-ups',
              'Schedule meetings and log client context in seconds',
              'Evolves into the agent OS and orchestration layer',
            ]}
            gradient="bg-gradient-to-br from-purple-500/50 via-sky-400/40 to-orange-400/40"
          />

          <ProductCard
            icon={Home}
            title="Homeowner OS"
            subtitle="A living digital twin of the home"
            points={[
              'Track equity and ROI of upgrades',
              'Always-on chat with your realtor',
              'Feeds real-time context back into MAIRA',
            ]}
            gradient="bg-gradient-to-br from-sky-500/50 via-purple-400/40 to-pink-400/40"
          />

          <ProductCard
            icon={Wrench}
            title="RenovAI"
            subtitle="Visualize renovations and returns"
            points={[
              'Instant recommendations and ROI insights',
              'Scenario planning with homeowner + agent',
              'From idea to scope with confidence',
            ]}
            gradient="bg-gradient-to-br from-orange-500/50 via-rose-400/40 to-amber-300/40"
          />
        </div>
      </div>
    </section>
  );
}
