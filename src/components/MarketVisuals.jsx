import React from 'react';
import { TrendingUp, BarChart3, PieChart } from 'lucide-react';

const BRAND = '#062b49';

function Stat({ label, value, trend }) {
  const positive = trend >= 0;
  return (
    <div className="flex items-center justify-between rounded-xl border bg-slate-900 p-4" style={{ borderColor: `${BRAND}55` }}>
      <div>
        <div className="text-xs uppercase tracking-wide text-slate-400">{label}</div>
        <div className="text-2xl font-semibold text-slate-50">{value}</div>
      </div>
      <div className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs ${positive ? 'text-emerald-300 bg-emerald-900/30' : 'text-rose-300 bg-rose-900/30'}`}>
        <TrendingUp className={`h-3.5 w-3.5 ${positive ? '' : 'rotate-180'}`} />
        {positive ? '+' : ''}{trend}%
      </div>
    </div>
  );
}

export default function MarketVisuals() {
  return (
    <section className="relative w-full bg-slate-950 py-20 text-slate-100">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl" style={{ color: '#f8fafc' }}>Live Market Visuals</h2>
          <p className="mt-3 text-slate-300">Give stakeholders instant intuition with clear visuals—price trends, inventory, and buyer demand.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Price Trend Area */}
          <div className="col-span-1 rounded-2xl border bg-slate-900 p-6 lg:col-span-2" style={{ borderColor: `${BRAND}55` }}>
            <div className="mb-4 flex items-center justify-between">
              <div className="inline-flex items-center gap-2 text-slate-200"><BarChart3 className="h-5 w-5"/>Median Price (12m)</div>
              <div className="text-xs text-slate-400">Synthetic demo data</div>
            </div>
            <svg viewBox="0 0 400 160" className="h-48 w-full">
              <defs>
                <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#22d3ee88" />
                  <stop offset="100%" stopColor="#22d3ee00" />
                </linearGradient>
              </defs>
              <path d="M0,120 C40,110 80,130 120,100 C160,70 200,85 240,60 C280,40 320,55 360,30 L400,40 L400,160 L0,160 Z" fill="url(#grad)" />
              <path d="M0,120 C40,110 80,130 120,100 C160,70 200,85 240,60 C280,40 320,55 360,30 L400,40" stroke="#22d3ee" strokeWidth="2" fill="none" />
            </svg>
          </div>

          {/* Inventory Pie */}
          <div className="col-span-1 rounded-2xl border bg-slate-900 p-6" style={{ borderColor: `${BRAND}55` }}>
            <div className="mb-4 inline-flex items-center gap-2 text-slate-200"><PieChart className="h-5 w-5"/>Inventory Mix</div>
            <div className="mx-auto grid h-40 w-40 place-items-center rounded-full" style={{
              background: `conic-gradient(#38bdf8 0 35%, #22c55e 35% 70%, ${BRAND} 70% 100%)`
            }}>
              <div className="h-20 w-20 rounded-full bg-slate-900" />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 text-xs text-slate-300">
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-sky-400"/>Starter</div>
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500"/>Move-up</div>
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full" style={{background: BRAND}}/>Luxury</div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Stat label="YoY Price" value="$582k" trend={4.2} />
          <Stat label="Active Listings" value="8,241" trend={-3.1} />
          <Stat label="Days on Market" value="23" trend={-12.5} />
        </div>
      </div>
    </section>
  );
}
