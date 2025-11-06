import React from 'react';

const Phase = ({ title, items, accent }) => (
  <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 text-white">
    <div className={`absolute inset-0 ${accent} opacity-10`} />
    <div className="relative">
      <h3 className="text-lg font-semibold">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm text-white/80">
        {items.map((it, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default function Roadmap() {
  return (
    <section className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Roadmap: Web 1.5 → Web 2.0 → Web 3.0</h2>
          <p className="mt-3 text-white/70">A deliberate bridge from fragmented tools to a unified, programmable real estate OS.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <Phase
            title="Web 1.5 → 2.0"
            items={[
              'Voice-to-CRM, notes, follow-ups',
              'Calendar, inbox, and task automation',
              'Homeowner OS: equity + digital twin',
            ]}
            accent="bg-gradient-to-br from-purple-500 via-sky-400 to-orange-400"
          />
          <Phase
            title="Ecosystem Orchestration"
            items={[
              'Unified data graph for agent–client workflows',
              'Partner integrations across transaction stack',
              'RenovAI recommendations + scenario planning',
            ]}
            accent="bg-gradient-to-br from-sky-500 via-purple-400 to-pink-400"
          />
          <Phase
            title="Web 3.0 Readiness"
            items={[
              'Tokenized properties & fractional ownership',
              'Programmable escrows and global commerce',
              'Compliance-first digital identity and records',
            ]}
            accent="bg-gradient-to-br from-orange-500 via-rose-400 to-amber-300"
          />
        </div>
      </div>
    </section>
  );
}
