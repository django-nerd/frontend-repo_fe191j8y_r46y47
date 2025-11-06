import React from 'react';
import Hero from './components/Hero';
import Products from './components/Products';
import Ecosystem from './components/Ecosystem';
import Roadmap from './components/Roadmap';
import CTA from './components/CTA';
import MarketVisuals from './components/MarketVisuals';

const BRAND = '#062b49';

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-center bg-slate-950/80 py-4 backdrop-blur">
      <div className="flex w-full max-w-7xl items-center justify-between px-6 text-slate-100">
        <a href="#" className="flex items-center gap-2 text-sm font-semibold">
          <span className="h-3 w-3 rounded-full" style={{ background: BRAND }} />
          MAIRA
        </a>
        <nav className="hidden items-center gap-6 text-sm sm:flex text-slate-200">
          <a href="#products" className="hover:text-white">Products</a>
          <a href="#ecosystem" className="hover:text-white">Ecosystem</a>
          <a href="#visuals" className="hover:text-white">Visuals</a>
          <a href="#roadmap" className="hover:text-white">Roadmap</a>
        </nav>
        <a href="#waitlist" className="rounded-lg px-3 py-2 text-xs font-semibold text-white" style={{ backgroundColor: BRAND }}>Join Waitlist</a>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <div id="products"><Products /></div>
        <div id="ecosystem"><Ecosystem /></div>
        <div id="visuals"><MarketVisuals /></div>
        <div id="roadmap"><Roadmap /></div>
        <CTA />
        <footer className="border-t border-slate-800 py-10 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} MAIRA — All rights reserved.
        </footer>
      </main>
    </div>
  );
}
