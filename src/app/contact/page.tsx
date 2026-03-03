"use client";

import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", goals: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", goals: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {/* Header */}
      <section className="bg-[#3d2b1f] py-20 px-4 text-center">
        <p className="text-[#55cdfc] text-sm tracking-[0.3em] uppercase font-medium mb-3">
          Let&apos;s Connect
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-5xl font-bold text-[#f5efe6] mb-4">
          Contact
        </h1>
        <div className="w-16 h-1 mx-auto rounded bg-gradient-to-r from-[#55cdfc] to-[#f7a8b8]" />
      </section>

      {/* Contact content */}
      <section className="bg-[#f5efe6] py-20 px-4">
        <div className="max-w-2xl mx-auto">

          {/* Intro */}
          <p className="text-[#5c3d2e] text-lg leading-relaxed mb-2 text-center">
            Fill out the form below or contact me through  
            <Link href="https://teamrunrun.com/coach/laur-fischer-seattle-running-coach/" target="_blank" rel="noopener noreferrer" className="font-bold text-[#3d2b1f] underline hover:text-[#8b5e3c] transition-colors"> Team RunRun</Link>
            , the coaching collective I'm part of.              
          </p>
          <p className="text-[#5c3d2e] text-lg leading-relaxed mb-2 text-center">
          I&apos;ll be in touch!
          </p>
          <p className="text-[#8c8076] mb-10 text-center">
            Interested in sliding scale pricing? Just mention it — no paperwork,
            no hoops.
          </p>

          {/* Contact Form */}
          {status === "success" ? (
            <div className="bg-[#a3b18a]/20 border border-[#a3b18a] rounded-2xl p-10 text-center">
              <p className="text-[#3d2b1f] text-xl font-semibold mb-2">Message sent!</p>
              <p className="text-[#5c3d2e]">Thanks for reaching out — I&apos;ll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-[#ede0d0] rounded-2xl p-8 space-y-6">
              <div>
                <label className="block text-[#3d2b1f] font-semibold text-sm mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full bg-[#f5efe6] border border-[#c4a882] rounded-xl px-4 py-3 text-[#3d2b1f] placeholder-[#a89080] focus:outline-none focus:ring-2 focus:ring-[#55cdfc]"
                />
              </div>

              <div>
                <label className="block text-[#3d2b1f] font-semibold text-sm mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full bg-[#f5efe6] border border-[#c4a882] rounded-xl px-4 py-3 text-[#3d2b1f] placeholder-[#a89080] focus:outline-none focus:ring-2 focus:ring-[#55cdfc]"
                />
              </div>

              <div>
                <label className="block text-[#3d2b1f] font-semibold text-sm mb-2" htmlFor="goals">
                  Goals for coaching
                </label>
                <textarea
                  id="goals"
                  required
                  rows={5}
                  value={form.goals}
                  onChange={(e) => setForm({ ...form, goals: e.target.value })}
                  placeholder="Tell me about your running goals, experience, and anything else you'd like me to know..."
                  className="w-full bg-[#f5efe6] border border-[#c4a882] rounded-xl px-4 py-3 text-[#3d2b1f] placeholder-[#a89080] focus:outline-none focus:ring-2 focus:ring-[#55cdfc] resize-none"
                />
              </div>

              {status === "error" && (
                <p className="text-red-600 text-sm">Something went wrong — please try again or email me directly.</p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-[#55cdfc] text-[#3d2b1f] font-semibold py-4 rounded-full hover:bg-[#f7a8b8] transition-colors text-sm tracking-wide uppercase disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Send Message"}
              </button>
            </form>
          )}

          {/* Trans flag divider */}
          <div className="flex gap-0 rounded overflow-hidden my-12 h-2 max-w-xs mx-auto">
            <div className="flex-1 bg-[#55cdfc]" />
            <div className="flex-1 bg-[#f7a8b8]" />
            <div className="flex-1 bg-white border-y border-[#ede0d0]" />
            <div className="flex-1 bg-[#f7a8b8]" />
            <div className="flex-1 bg-[#55cdfc]" />
          </div>

          {/* Team RunRun CTA */}
          <div className="text-center">
            <p className="text-[#8c8076] mb-6 text-sm">
              Prefer to sign up directly?
            </p>
            <Link
              href="https://teamrunrun.com/coach/laur-fischer-seattle-running-coach/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#8b5e3c] text-[#f5efe6] font-semibold px-10 py-5 rounded-full hover:bg-[#55cdfc] hover:text-[#3d2b1f] transition-colors text-sm tracking-wide uppercase"
            >
              Sign Up on Team RunRun →
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
