import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

const BRAND = '#062b49';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[720px] overflow-hidden bg-white text-slate-900">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft radial wash for readability without blocking interaction */}
      <div className="pointer-events-none absolute inset-0" style={{
        background:
          'radial-gradient(circle at 50% 30%, rgba(255,255,255,0.85), rgba(255,255,255,0.95) 45%, rgba(255,255,255,1) 70%)'
      }} />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center sm:pt-36">
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium backdrop-blur" style={{ borderColor: `${BRAND}1A`, backgroundColor: `${BRAND}0D`, color: BRAND }}>
          <Rocket className="h-3.5 w-3.5" style={{ color: BRAND }} />
          Creating the future of real estate workflows
        </span>
        <h1 className="max-w-4xl text-4xl font-extrabold leading-tight sm:text-6xl" style={{ color: BRAND }}>
          REALLM Realty
          <span className="block bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(90deg, ${BRAND}, #2278b5, #f59e0b)` }}>
            The orchestration layer for modern real estate
          </span>
        </h1>
        <p className="mt-6 max-w-3xl text-base sm:text-lg text-slate-700">
          We empower agents with AI to give them time back, strengthen client relationships, and enable seamless transactions. Not a tool—an ecosystem powering every agent–client workflow.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#waitlist"
            className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:opacity-95"
            style={{ backgroundColor: BRAND }}
          >
            Join the Waitlist
          </a>
          <a
            href="mailto:team@trymaira.com?subject=Investor%20Deck%20Request&body=Hi%20REALLM%20team,%20I’d%20love%20to%20review%20your%20latest%20investor%20materials."
            className="inline-flex items-center justify-center rounded-lg border px-5 py-3 text-sm font-semibold backdrop-blur transition hover:bg-slate-50"
            style={{ borderColor: `${BRAND}33`, color: BRAND }}
          >
            Request Investor Deck
          </a>
        </div>
      </div>
    </section>
  );
}
