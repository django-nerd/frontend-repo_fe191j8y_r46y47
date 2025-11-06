import React from 'react';
import Hero from './components/Hero';
import Products from './components/Products';
import Ecosystem from './components/Ecosystem';
import Roadmap from './components/Roadmap';
import CTA from './components/CTA';

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-center bg-black/40 py-4 backdrop-blur">
      <div className="flex w-full max-w-7xl items-center justify-between px-6 text-white">
        <a href="#" className="flex items-center gap-2 text-sm font-semibold">
          <span className="h-3 w-3 rounded-full bg-gradient-to-r from-purple-400 via-sky-300 to-orange-300" />
          REALLM Realty
        </a>
        <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
          <a href="#products" className="hover:text-white">Products</a>
          <a href="#ecosystem" className="hover:text-white">Ecosystem</a>
          <a href="#roadmap" className="hover:text-white">Roadmap</a>
        </nav>
        <a href="#waitlist" className="rounded-lg bg-white px-3 py-2 text-xs font-semibold text-black">Join Waitlist</a>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <div id="products"><Products /></div>
        <div id="ecosystem"><Ecosystem /></div>
        <div id="roadmap"><Roadmap /></div>
        <CTA />
        <footer className="border-t border-white/10 bg-black py-10 text-center text-xs text-white/50">
          © {new Date().getFullYear()} REALLM Realty — All rights reserved.
        </footer>
      </main>
    </div>
  );
}
