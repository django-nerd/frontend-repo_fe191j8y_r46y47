import React, { useState } from 'react';

const BRAND = '#062b49';

export default function CTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setSubmitted(true);
  };

  return (
    <section id="waitlist" className="relative w-full py-16" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)' }}>
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-2xl border p-8" style={{ borderColor: `${BRAND}22`, background: '#ffffff' }}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-semibold" style={{ color: BRAND }}>Realtors: Join the Waitlist</h3>
              <p className="mt-2 text-sm text-slate-600">Get early access to MAIRA and the REALLM ecosystem as we roll out city by city.</p>
            </div>
            <div className="md:col-span-1">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@brokerage.com"
                    className="w-full flex-1 rounded-lg border px-4 py-3 text-sm outline-none focus:ring"
                    style={{ borderColor: `${BRAND}22` }}
                    required
                  />
                  <button
                    type="submit"
                    className="whitespace-nowrap rounded-lg px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:opacity-95"
                    style={{ backgroundColor: BRAND }}
                  >
                    Join
                  </button>
                </form>
              ) : (
                <div className="rounded-lg border p-3 text-sm" style={{ borderColor: '#22c55e33', background: '#22c55e11', color: '#166534' }}>
                  Thanks! You're on the list. We'll reach out shortly.
                </div>
              )}
            </div>
          </div>

          <div className="mt-6 border-t pt-6 text-sm" style={{ borderColor: `${BRAND}22`, color: '#475569' }}>
            Investors: Email team@trymaira.com for the latest deck and metrics.
          </div>
        </div>
      </div>
    </section>
  );
}
