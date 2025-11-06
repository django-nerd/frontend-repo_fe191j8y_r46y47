import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

const BRAND = '#062b49';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[720px] overflow-hidden bg-slate-950 text-slate-100">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Dark radial wash for readability without blocking interaction */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 30%, rgba(2,6,23,0.6), rgba(2,6,23,0.8) 45%, rgba(2,6,23,0.95) 70%)',
        }}
      />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center sm:pt-36">
        <span
          className="mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium backdrop-blur"
          style={{ borderColor: `${BRAND}33`, backgroundColor: `${BRAND}22`, color: '#e2e8f0' }}
        >
          <Rocket className="h-3.5 w-3.5" style={{ color: '#e2e8f0' }} />
          AI that works the market for you
        </span>
        <h1 className="max-w-4xl text-4xl font-extrabold leading-tight sm:text-6xl" style={{ color: '#f8fafc' }}>
          MAIRA
          <span
            className="block bg-clip-text text-transparent"
            style={{ backgroundImage: `linear-gradient(90deg, ${BRAND}, #1e90ff, #22d3ee)` }}
          >
            The mobile AI Realtor Assistant
          </span>
        </h1>
        <p className="mt-6 max-w-3xl text-base sm:text-lg text-slate-300">
          Give every agent superpowers: voice-first capture, instant follow-ups, and deep homeowner context. Not a tool—an ecosystem orchestrating every client journey.
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
            href="mailto:team@trymaira.com?subject=Investor%20Deck%20Request&body=Hi%20MAIRA%20team,%20I’d%20love%20to%20review%20your%20latest%20investor%20materials."
            className="inline-flex items-center justify-center rounded-lg border px-5 py-3 text-sm font-semibold backdrop-blur transition hover:bg-slate-900"
            style={{ borderColor: `${BRAND}66`, color: '#e2e8f0' }}
          >
            Request Investor Deck
          </a>
        </div>
      </div>
    </section>
  );
}
