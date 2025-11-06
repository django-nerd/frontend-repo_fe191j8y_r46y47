import React from 'react';
import { LinkIcon, Layers, Activity } from 'lucide-react';

export default function Ecosystem() {
  return (
    <section className="relative w-full bg-[#0b0b12] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">The REALLM Orchestration Layer</h2>
          <p className="mt-3 text-white/70">All products connect into a single brain—data flows between agents and homeowners to power perfect context and action.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 items-center gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="mb-3 inline-flex items-center gap-2 text-purple-300"><Layers className="h-5 w-5"/>Layers</div>
            <p className="text-sm text-white/80">Voice-to-action infrastructure turns natural language into structured workflows across CRMs, calendars, and transaction tools.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="mb-3 inline-flex items-center gap-2 text-sky-300"><LinkIcon className="h-5 w-5"/>Connectivity</div>
            <p className="text-sm text-white/80">Homeowner OS continuously syncs context—equity, projects, preferences—so agents always act with up-to-date insight.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="mb-3 inline-flex items-center gap-2 text-orange-300"><Activity className="h-5 w-5"/>Insights</div>
            <p className="text-sm text-white/80">Proprietary datasets and real estate–specific IP compound over time, forming a moat others can’t replicate.</p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-gradient-to-r from-purple-500/10 via-sky-500/10 to-orange-500/10 p-6 text-center">
          <p className="text-sm text-white/70">Today: unify Web 1.5 tooling into a coherent Web 2.0 experience. Next: unlock Web 3.0 features like tokenization, fractional ownership, and global commerce.</p>
        </div>
      </div>
    </section>
  );
}
