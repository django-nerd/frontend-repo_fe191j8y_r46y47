import React from 'react';
import { LinkIcon, Layers, Activity } from 'lucide-react';

const BRAND = '#062b49';

export default function Ecosystem() {
  return (
    <section className="relative w-full py-20 bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl" style={{ color: '#f8fafc' }}>The MAIRA Ecosystem</h2>
          <p className="mt-3 text-slate-300">Products connect into a single brain—data flows between agents and homeowners to power perfect context and action.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 items-start gap-6 md:grid-cols-3">
          <div className="rounded-2xl border bg-slate-900 p-6" style={{ borderColor: `${BRAND}55` }}>
            <div className="mb-3 inline-flex items-center gap-2 text-slate-200"><Layers className="h-5 w-5"/>Layers</div>
            <p className="text-sm text-slate-300">Voice-to-action infrastructure turns natural language into structured workflows across CRMs, calendars, and transaction tools.</p>
          </div>
          <div className="rounded-2xl border bg-slate-900 p-6" style={{ borderColor: `${BRAND}55` }}>
            <div className="mb-3 inline-flex items-center gap-2 text-slate-200"><LinkIcon className="h-5 w-5"/>Connectivity</div>
            <p className="text-sm text-slate-300">Homeowner OS continuously syncs context—equity, projects, preferences—so agents always act with up-to-date insight.</p>
          </div>
          <div className="rounded-2xl border bg-slate-900 p-6" style={{ borderColor: `${BRAND}55` }}>
            <div className="mb-3 inline-flex items-center gap-2 text-slate-200"><Activity className="h-5 w-5"/>Insights</div>
            <p className="text-sm text-slate-300">Proprietary datasets and real estate–specific IP compound over time, forming a moat others can’t replicate.</p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border p-6 text-center bg-slate-900" style={{ borderColor: `${BRAND}55`, color: '#cbd5e1' }}>
          <p className="text-sm">Today: unify Web 1.5 tooling into a coherent Web 2.0 experience. Next: unlock Web 3.0 features like tokenization, fractional ownership, and global commerce.</p>
        </div>
      </div>
    </section>
  );
}
