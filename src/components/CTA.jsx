import React, { useState } from 'react';

export default function CTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setSubmitted(true);
  };

  return (
    <section id="waitlist" className="relative w-full bg-[#0b0b12] py-16 text-white">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/10 via-sky-500/10 to-orange-500/10 p-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-semibold">Realtors: Join the Waitlist</h3>
              <p className="mt-2 text-sm text-white/80">Get early access to MAIRA and the REALLM ecosystem as we roll out city by city.</p>
            </div>
            <div className="md:col-span-1">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@brokerage.com"
                    className="w-full flex-1 rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/50 outline-none focus:border-white/30"
                    required
                  />
                  <button
                    type="submit"
                    className="whitespace-nowrap rounded-lg bg-white px-4 py-3 text-sm font-semibold text-black shadow-lg transition hover:opacity-90"
                  >
                    Join
                  </button>
                </form>
              ) : (
                <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/10 p-3 text-sm text-emerald-300">
                  Thanks! You're on the list. We'll reach out shortly.
                </div>
              )}
            </div>
          </div>

          <div className="mt-6 border-t border-white/10 pt-6 text-sm text-white/70">
            Investors: Email team@trymaira.com for the latest deck and metrics.
          </div>
        </div>
      </div>
    </section>
  );
}
