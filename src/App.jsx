import React from 'react';
import Hero from './components/Hero';
import Products from './components/Products';
import Ecosystem from './components/Ecosystem';
import Roadmap from './components/Roadmap';
import CTA from './components/CTA';

const BRAND = '#062b49';

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-center bg-white/80 py-4 backdrop-blur">
      <div className="flex w-full max-w-7xl items-center justify-between px-6" style={{ color: BRAND }}>
        <a href="#" className="flex items-center gap-2 text-sm font-semibold" style={{ color: BRAND }}>
          <span className="h-3 w-3 rounded-full" style={{ background: BRAND }} />
          REALLM Realty
        </a>
        <nav className="hidden items-center gap-6 text-sm sm:flex" style={{ color: `${BRAND}` }}>
          <a href="#products" className="hover:opacity-80">Products</a>
          <a href="#ecosystem" className="hover:opacity-80">Ecosystem</a>
          <a href="#roadmap" className="hover:opacity-80">Roadmap</a>
        </nav>
        <a href="#waitlist" className="rounded-lg px-3 py-2 text-xs font-semibold text-white" style={{ backgroundColor: BRAND }}>Join Waitlist</a>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <div id="products"><Products /></div>
        <div id="ecosystem"><Ecosystem /></div>
        <div id="roadmap"><Roadmap /></div>
        <CTA />
        <footer className="border-t py-10 text-center text-xs" style={{ borderColor: `${BRAND}22`, color: '#64748b' }}>
          © {new Date().getFullYear()} REALLM Realty — All rights reserved.
        </footer>
      </main>
    </div>
  );
}
