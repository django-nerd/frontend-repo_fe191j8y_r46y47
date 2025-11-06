import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[720px] overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft radial gradient to improve text readability without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,10,20,0.1),rgba(0,0,0,0.85)_70%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center sm:pt-36">
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/80 backdrop-blur">
          <Rocket className="h-3.5 w-3.5 text-purple-300" />
          Creating the future of real estate workflows
        </span>
        <h1 className="max-w-4xl text-4xl font-extrabold leading-tight sm:text-6xl">
          REALLM Realty
          <span className="block bg-gradient-to-r from-purple-400 via-sky-300 to-orange-300 bg-clip-text text-transparent">
            The orchestration layer for modern real estate
          </span>
        </h1>
        <p className="mt-6 max-w-3xl text-base text-white/80 sm:text-lg">
          We empower agents with AI to give them time back, strengthen client relationships, and enable seamless transactions. Not a tool—an ecosystem powering every agent–client workflow.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#waitlist"
            className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black shadow-lg shadow-purple-500/20 transition hover:opacity-90"
          >
            Join the Waitlist
          </a>
          <a
            href="mailto:team@trymaira.com?subject=Investor%20Deck%20Request&body=Hi%20REALLM%20team,%20I’d%20love%20to%20review%20your%20latest%20investor%20materials."
            className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            Request Investor Deck
          </a>
        </div>
      </div>
    </section>
  );
}
