import React from 'react';

const BRAND = '#062b49';

const Phase = ({ title, items }) => (
  <div className="relative rounded-2xl border bg-slate-900 p-6" style={{ borderColor: `${BRAND}55`, color: '#e2e8f0' }}>
    <div className="relative">
      <h3 className="text-lg font-semibold" style={{ color: '#f8fafc' }}>{title}</h3>
      <ul className="mt-3 space-y-2 text-sm text-slate-300">
        {items.map((it, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: `${BRAND}` }} />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default function Roadmap() {
  return (
    <section className="relative w-full py-20 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl" style={{ color: '#f8fafc' }}>Roadmap: Web 1.5 → Web 2.0 → Web 3.0</h2>
          <p className="mt-3 text-slate-300">A deliberate bridge from fragmented tools to a unified, programmable real estate OS.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <Phase
            title="Web 1.5 → 2.0"
            items={[
              'Voice-to-CRM, notes, follow-ups',
              'Calendar, inbox, and task automation',
              'Homeowner OS: equity + digital twin',
            ]}
          />
          <Phase
            title="Ecosystem Orchestration"
            items={[
              'Unified data graph for agent–client workflows',
              'Partner integrations across transaction stack',
              'Context-aware recommendations + scenario planning',
            ]}
          />
          <Phase
            title="Web 3.0 Readiness"
            items={[
              'Tokenized properties & fractional ownership',
              'Programmable escrows and global commerce',
              'Compliance-first digital identity and records',
            ]}
          />
        </div>
      </div>
    </section>
  );
}
