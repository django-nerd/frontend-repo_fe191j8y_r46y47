import React from 'react';
import { Mic, Home } from 'lucide-react';

const BRAND = '#062b49';

const ProductCard = ({ icon: Icon, title, subtitle, points }) => (
  <div className="relative overflow-hidden rounded-2xl border bg-slate-900 p-6 text-slate-100 shadow-xl" style={{ borderColor: `${BRAND}55` }}>
    <div className="relative z-10">
      <div className="mb-4 inline-flex items-center justify-center rounded-xl p-3" style={{ backgroundColor: `${BRAND}55` }}>
        <Icon className="h-6 w-6" style={{ color: '#e2e8f0' }} />
      </div>
      <h3 className="text-xl font-semibold" style={{ color: '#f8fafc' }}>{title}</h3>
      <p className="mt-1 text-sm text-slate-300">{subtitle}</p>
      <ul className="mt-4 space-y-2 text-sm text-slate-200">
        {points.map((p, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: `${BRAND}` }} />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default function Products() {
  return (
    <section className="relative w-full bg-slate-950 py-20 text-slate-100">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl" style={{ color: '#f8fafc' }}>Core Products</h2>
          <p className="mt-3 text-slate-300">
            A focused duo that turns voice into action and homes into living data.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <ProductCard
            icon={Mic}
            title="MAIRA"
            subtitle="Mobile AI Realtor Assistant"
            points={[
              'Voice-first updates to CRMs, notes, follow-ups',
              'Schedule meetings and log client context in seconds',
              'Evolves into the agent OS and orchestration layer',
            ]}
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
          />
        </div>
      </div>
    </section>
  );
}
