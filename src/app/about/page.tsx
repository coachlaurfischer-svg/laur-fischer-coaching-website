import Link from "next/link";

export const metadata = {
  title: "About | Laur Fischer Coaching",
  description:
    "Learn about Laur Fischer — trans trail running coach, community builder, and advocate for inclusive running in Seattle, WA.",
};

export default function About() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#3d2b1f] py-20 px-4 text-center">
        <p className="text-[#55cdfc] text-sm tracking-[0.3em] uppercase font-medium mb-3">
          Get to Know Me
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-5xl font-bold text-[#f5efe6] mb-4">
          About Laur
        </h1>
        <div className="w-16 h-1 mx-auto rounded bg-gradient-to-r from-[#55cdfc] to-[#f7a8b8]" />
      </section>

      {/* Bio */}
      <section className="bg-[#f5efe6] py-20 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Trans flag accent bar */}
          <div className="flex gap-0 rounded overflow-hidden mb-12 h-2">
            <div className="flex-1 bg-[#55cdfc]" />
            <div className="flex-1 bg-[#f7a8b8]" />
            <div className="flex-1 bg-white border-y border-[#ede0d0]" />
            <div className="flex-1 bg-[#f7a8b8]" />
            <div className="flex-1 bg-[#55cdfc]" />
          </div>

          <div className="prose prose-lg max-w-none text-[#5c3d2e] space-y-6">
            <p className="text-xl leading-relaxed text-[#3d2b1f]">
              Hi, I&apos;m Laur — a trans runner, coach, and trail enthusiast
              based in Seattle, WA.
            </p>
            <p className="leading-relaxed">
              I'm certified through the United Endurance Sports Coaching Academy (UESCA) Ultrarunning Coach program.
            </p>
            <p className="text-xl leading-relaxed text-[#3d2b1f]">
              About my coaching
            </p>
            <p className="leading-relaxed">
              I work with all types of athletes from trail first-timers to experience mountain runners. 
              My specialty is coaching for trail running mountian adventures and ultra distances (50k to 100 miler).
              I'm an advocate for making running a more inclusive space. With first-hand experience with hormone
              replacement therapy (HRT) as well as training with chronic pain, I have a unique, personalized
              approach to movement and overall health with training. 
            </p>
            <p className="leading-relaxed">
              I believe for coaching to be successful there must be mutual respect 
              and trust between the athlete and the coach. I hope to earn your trust through sharing 
              not only the day-to-day training needs but the long-term strategy and how it all works 
              together to help you reach your goals - whether it’s hitting a PR or being able to run 
              for decades to come. My coaching philosophy isn’t about telling you what to do, it’s 
              about helping you understand the reasoning for why I’m recommending what I’m recommending.
            </p>
            <p className="leading-relaxed">
              My approach to coaching is to keep the athlete, their personality, and their goals as 
              the focus. We will work together to find ways to incorporate training into your already busy life to balance training that works for you and your goals. I believe training must be individualized for each athlete.
            </p>
            <p className="leading-relaxed">
              What matters most to me isn't your finish
              time; it's that you feel strong, supported, and seen.
            </p>
            <p className="leading-relaxed">
              I partner with{" "}
              <a
                href="https://teamrunrun.com/coach/laur-fischer-seattle-running-coach/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8b5e3c] underline underline-offset-2 hover:text-[#55cdfc] transition-colors"
              >
                Team RunRun
              </a>
              , a coaching collective that shares my commitment to working with each runner as an individual
              to create custom training plans that aligns with your lifestyle, ability, and budget.
            </p>
            <p className="text-xl leading-relaxed text-[#3d2b1f]">
              About me
            </p>
            <p className="leading-relaxed">
              I was born and raised in Ohio before making my way to Indiana to earn my Bachelor of 
              Science at Rose-Hulman Institute of Technology in Biomedical and Mechanical Engineering,
              focusing on biomechanics and electrical signals. I wanted to study biomedical engineering
              to get a better understanding of how the body works and ended up loving learning about 
              things like gait through setting up lab experiments to test and monitor gaits at 
              different speeds. Little did I know this would eventually be part of my life years 
              later and help me learn more about the physiology and strength for running!
            </p>
            <p className="leading-relaxed">
              Before moving out to Seattle in 2018, I learned about thru-hiking and ultra running 
              online but never believed I’d be strong enough to do such a thing. My running journey 
              started with great hesitation in 2019 when a co-worker in Seattle asked me to sign-up 
              for a 10k and then a half-marathon only a few months later. After completing my first 
              half-marathon I was hooked!
            </p>
             <p className="leading-relaxed">
              Starting in 2020, I began to feel a significant amount of pain in my SI joints, 
              which at its worst left me barely able to walk down my hallway or take my dog out. 
              After what I thought would be an easy run, I wasn’t able to stand up off my couch 
              and was terrified I wouldn’t be able to move normally again. I finally went to see 
              a doctor and eventually got a diagnosis of ankylosing spondylitis (AS) months later. 
              Armed with this diagnosis, I began looking for others with AS and seeing what types 
              of activities they did, fearing I’d never reach my dreams of hiking and ultra 
              running. I found Helgi Olafson who has AS and runs ultramarathons and has previously 
              raised money for the Spondylitis Association of America. This gave me the hope I 
              needed, and I have since learned how to use movement to help manage chronic pain 
              with flexible enough training plans to adapt to flare-ups.
            </p>
            <p className="leading-relaxed">
              In 2021, I switched over to primarily running trails, and running became an 
              integral part of my life. Trail running has added so much goodness into my 
              life – pain management, meeting close friends, providing structure, feeling 
              confident in my queerness and beyond. It was these running friends who gave me 
              the confidence to explore gender outwardly more and the push to sign-up for my 
              first ultra, which took place early 2023. I feel so at home in the mountains and 
              running ultra distances.
            </p>
            <p className="leading-relaxed">
              I began HRT in early 2025 and have gone through a lot of personal learnings 
              with how it has affected my body and training. It’s been such a joy to explore 
              how to train with HRT. There’s little research on what to do when you start HRT 
              and how it will impact athletics – this is a special interest of mine to continue 
              to learn from research, my own experience, and the voices of others in the 
              community to share knowledge with runners who are considering HRT.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#ede0d0] py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold text-[#3d2b1f] mb-4 text-center">
            What I Stand For
          </h2>
          <div className="w-16 h-1 mx-auto mb-12 rounded bg-gradient-to-r from-[#55cdfc] to-[#f7a8b8]" />

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🏳️‍⚧️",
                title: "Trans & Queer Inclusion",
                body: "Running spaces should be safe and celebratory for every identity. I actively work to create that environment.",
              },
              {
                icon: "🌿",
                title: "BIPOC Community",
                body: "Outdoor and trail spaces have deep barriers to access. Sliding scale pricing is one way I work to lower those barriers.",
              },
              {
                icon: "💪",
                title: "Athlete-Centered Coaching",
                body: "You are the expert on your own body. I listen first, plan second.",
              },
            ].map(({ icon, title, body }) => (
              <div
                key={title}
                className="bg-[#f5efe6] rounded-2xl p-6 flex gap-4"
              >
                <span className="text-3xl shrink-0">{icon}</span>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[#3d2b1f] mb-2">
                    {title}
                  </h3>
                  <p className="text-[#5c3d2e] text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#3d2b1f] py-16 px-4 text-center">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[#f5efe6] mb-4">
          Ready to run together?
        </h2>
        <p className="text-[#a3b18a] mb-8 max-w-md mx-auto">
          Reach out to start the conversation about your
          goals.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#55cdfc] text-[#3d2b1f] font-semibold px-8 py-4 rounded-full hover:bg-[#f7a8b8] transition-colors text-sm tracking-wide uppercase"
        >
          Contact Me
        </Link>
      </section>
    </>
  );
}
