import React from 'react';
import { LinkIcon, Layers, Activity } from 'lucide-react';

const BRAND = '#062b49';

export default function Ecosystem() {
  return (
    <section className="relative w-full py-20" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)', color: '#0f172a' }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl" style={{ color: BRAND }}>The REALLM Orchestration Layer</h2>
          <p className="mt-3 text-slate-600">All products connect into a single brain—data flows between agents and homeowners to power perfect context and action.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 items-center gap-6 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-6" style={{ borderColor: `${BRAND}22` }}>
            <div className="mb-3 inline-flex items-center gap-2" style={{ color: BRAND }}><Layers className="h-5 w-5"/>Layers</div>
            <p className="text-sm text-slate-700">Voice-to-action infrastructure turns natural language into structured workflows across CRMs, calendars, and transaction tools.</p>
          </div>
          <div className="rounded-2xl border bg-white p-6" style={{ borderColor: `${BRAND}22` }}>
            <div className="mb-3 inline-flex items-center gap-2 text-sky-700"><LinkIcon className="h-5 w-5"/>Connectivity</div>
            <p className="text-sm text-slate-700">Homeowner OS continuously syncs context—equity, projects, preferences—so agents always act with up-to-date insight.</p>
          </div>
          <div className="rounded-2xl border bg-white p-6" style={{ borderColor: `${BRAND}22` }}>
            <div className="mb-3 inline-flex items-center gap-2" style={{ color: BRAND }}><Activity className="h-5 w-5"/>Insights</div>
            <p className="text-sm text-slate-700">Proprietary datasets and real estate–specific IP compound over time, forming a moat others can’t replicate.</p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border p-6 text-center" style={{ borderColor: `${BRAND}22`, background: `${BRAND}08`, color: '#334155' }}>
          <p className="text-sm">Today: unify Web 1.5 tooling into a coherent Web 2.0 experience. Next: unlock Web 3.0 features like tokenization, fractional ownership, and global commerce.</p>
        </div>
      </div>
    </section>
  );
}
