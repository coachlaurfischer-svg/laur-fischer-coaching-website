import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-[#3d2b1f] overflow-hidden">
        {/* Trans flag background accent */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="h-1/5 bg-[#55cdfc]" />
          <div className="h-1/5 bg-[#f7a8b8]" />
          <div className="h-1/5 bg-white" />
          <div className="h-1/5 bg-[#f7a8b8]" />
          <div className="h-1/5 bg-[#55cdfc]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 py-24 flex flex-col md:flex-row items-center gap-12">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-[#55cdfc] text-sm tracking-[0.3em] uppercase font-medium mb-4">
              Seattle, WA · Trail Running
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl font-bold text-[#f5efe6] leading-tight mb-6">
              Run Further.
              <br />
              <span className="text-[#c4a882]">Run Together.</span>
            </h1>
            <p className="text-[#a3b18a] text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
              I&apos;m Laur Fischer — a trans trail running coach based in Seattle
              dedicated to helping you reach your goals while building a more
              inclusive running community. I can coach you anywhere!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/contact"
                className="inline-block bg-[#55cdfc] text-[#3d2b1f] font-semibold px-8 py-4 rounded-full hover:bg-[#f7a8b8] transition-colors text-sm tracking-wide uppercase"
              >
                Work With Me
              </Link>
              <Link
                href="/about"
                className="inline-block bg-[#f7a8b8] text-[#3d2b1f] font-semibold px-8 py-4 rounded-full hover:bg-[#55cdfc] transition-colors text-sm tracking-wide uppercase"
              >
                About
              </Link>
            </div>
          </div>

          {/* Photo */}
          <div className="flex-shrink-0 w-72 md:w-96">
            <Image
              src="/IMG_4026.jpeg"
              alt="Laur Fischer on the trail"
              width={384}
              height={512}
              className="rounded-2xl object-cover w-full h-full shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Rainbow divider */}
      <div
        className="h-1 w-full"
        style={{
          background:
            "linear-gradient(90deg, #e40303, #ff8c00, #ffed00, #008026, #004dff, #750787)",
        }}
      />

      {/* Philosophy */}
      <section className="bg-[#f5efe6] py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold text-[#3d2b1f] mb-4 text-center">
            Coaching Philosophy
          </h2>
          <div className="w-16 h-1 mx-auto mb-12 rounded bg-gradient-to-r from-[#55cdfc] to-[#f7a8b8]" />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Individualized Training",
                body: "Every runner is different. Your plan is built around your life, goals, and body — not a cookie-cutter template.",
                accent: "#55cdfc",
              },
              {
                title: "Community First",
                body: "Trail running is better together. I prioritize building relationships and lifting each other up on and off the trails.",
                accent: "#f7a8b8",
              },
              {
                title: "Sustainable Progress",
                body: "We train smart, not just hard. Long-term health and joy in movement come before race times.",
                accent: "#a3b18a",
              },
            ].map(({ title, body, accent }) => (
              <div
                key={title}
                className="bg-[#ede0d0] rounded-2xl p-8 border-t-4"
                style={{ borderColor: accent }}
              >
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[#3d2b1f] mb-3">
                  {title}
                </h3>
                <p className="text-[#5c3d2e] leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inclusion section */}
      <section className="bg-[#3d2b1f] py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            {/* Mini trans flag */}
            <div className="flex flex-col gap-0.5 rounded overflow-hidden w-8">
              <div className="h-1.5 bg-[#55cdfc]" />
              <div className="h-1.5 bg-[#f7a8b8]" />
              <div className="h-1.5 bg-white" />
              <div className="h-1.5 bg-[#f7a8b8]" />
              <div className="h-1.5 bg-[#55cdfc]" />
            </div>
            {/* Mini pride flag */}
            <div className="flex flex-col gap-0.5 rounded overflow-hidden w-8">
              <div className="h-1.25 bg-[#E40303]" />
              <div className="h-1.25 bg-[#FF8D00]" />
              <div className="h-1.25 bg-[#FFED00]" />
              <div className="h-1.25 bg-[#008026]" />
              <div className="h-1.25 bg-[#044CFF]" />
              <div className="h-1.25 bg-[#732982]" />
            </div>
            {/* Mini trans flag */}
            <div className="flex flex-col gap-0.5 rounded overflow-hidden w-8">
              <div className="h-1.5 bg-[#55cdfc]" />
              <div className="h-1.5 bg-[#f7a8b8]" />
              <div className="h-1.5 bg-white" />
              <div className="h-1.5 bg-[#f7a8b8]" />
              <div className="h-1.5 bg-[#55cdfc]" />
            </div>
          </div>

          <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold text-[#f5efe6] mb-6">
            Trail Running Belongs to Everyone
          </h2>
          <p className="text-[#a3b18a] text-lg leading-relaxed mb-6">
            As a trans coach, I know firsthand what it feels like to be the
            &quot;only one&quot; on the trail. Trail running has historically
            been an overwhelmingly white, cisgender space — and that needs to
            change.
          </p>
          <p className="text-[#c4a882] text-lg leading-relaxed mb-10">
            I offer a{" "}
            <strong className="text-[#f5efe6]">sliding scale pricing model</strong>{" "}
            so that LGBTQIA+, BIPOC, and disabled runners can access quality coaching
            without cost being a barrier. Higher-paying clients directly
            subsidize access for those who need it.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#f7a8b8] text-[#3d2b1f] font-semibold px-8 py-4 rounded-full hover:bg-[#55cdfc] transition-colors text-sm tracking-wide uppercase"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="bg-[#ede0d0] py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold text-[#3d2b1f] mb-4">
            Coaching Packages
          </h2>
          <div className="w-16 h-1 mx-auto mb-6 rounded bg-gradient-to-r from-[#55cdfc] to-[#f7a8b8]" />
          <p className="text-[#5c3d2e] mb-12 max-w-xl mx-auto">
            Pricing is on a sliding scale from $25/month up to $180/month for virtual coaching. 
            No matter what you pay I offer the same services - cost shouldn't dictate the coaching you receive!  
          </p>
          <p className="text-[#5c3d2e] mb-12 max-w-xl mx-auto">
            Those who are able to pay a higher amount directly subsidize those at lower price point. 
          </p>
          <p className="text-[#5c3d2e] mb-12 max-w-xl mx-auto">
            Please note: I have limited spots at each level on my sliding scale.
          </p>

          <div className="flex justify-center max-w-4xl mx-auto w-1/2">
            {[
              {
                name: "What's included:",
                features: [
                  "Individualized, customized training plans using the Final Surge platform",
                  "Unlimited emails, phones, and texts (response time within 24 hours*)",
                  "Plans based on your goals and your life",
                  "Your own running consultant, mentor, and everything running go-to coach",
                  "Guidance with goal setting and race selection",
                  "Real time feedback on training"
                ],
                accent: "#55cdfc",
              },
            ].map(({ name, features, accent }) => (
              <div
                key={name}
                className="bg-[#f5efe6] rounded-2xl p-8 text-left border-2 w-full"
                style={{ borderColor: accent }}
              >
                <h3
                  className="font-[family-name:var(--font-display)] text-2xl font-bold mb-1"
                  style={{ color: accent }}
                >
                  {name}
                </h3>
                <p className="text-[#8c8076] text-sm mb-6">{price}</p>
                <ul className="space-y-3">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[#5c3d2e] text-sm">
                      <span className="mt-0.5 text-[#a3b18a]">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-8 inline-block w-full text-center py-3 rounded-full font-semibold text-sm tracking-wide uppercase transition-colors"
                  style={{
                    backgroundColor: accent,
                    color: accent === "#55cdfc" ? "#3d2b1f" : "#f5efe6",
                  }}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
          <p className="text-[#5c3d2e] mb-12 max-w-xl mx-auto">
            * There may be times I'm out of service while running my own adventure causing a delay in response. When this happens it will be communicated beforehand! 
          </p>
        </div>
      </section>
    </>
  );
}
