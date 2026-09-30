import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Abhishek Gurav",
  description:
    "About Abhishek Gurav, Senior Frontend Engineer based in Mumbai.",
};

const focusAreas: [string, string][] = [
  ["Frontend Architecture", "React, Next.js, TypeScript"],
  ["State & Data", "Redux, React Context, REST, Socket.io"],
  ["Performance", "Lighthouse, Core Web Vitals, optimization"],
  ["Interfaces", "TailwindCSS, d3.js, responsive & cross-browser"],
];

const education: {
  degree: string;
  field: string;
  school: string;
  period: string;
}[] = [
  {
    degree: "Master of Technology (M.Tech.)",
    field: "Software Engineering",
    school: "Veermata Jijabai Technological Institute (VJTI), Mumbai",
    period: "2019 — 2021",
  },
  {
    degree: "Bachelor of Engineering (B.E.)",
    field: "Computer Engineering",
    school: "V.E.S. Institute of Technology, Mumbai",
    period: "2014 — 2018",
  },
];

const About = () => {
  return (
    <div className="py-16 max-sm:py-10">
      {/* Intro */}
      <section className="grid grid-cols-[220px_1fr] gap-12 border-b border-border pb-16 max-lg:grid-cols-1 max-lg:gap-6 max-sm:pb-10">
        <h1 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          About me
        </h1>

        <div className="max-w-2xl">
          <p className="text-3xl font-light leading-snug tracking-tight text-balance max-sm:text-2xl">
            I&apos;m a Senior Frontend Engineer with 4+ years building scalable
            web applications in React and TypeScript — complex dashboards,
            reusable component systems, and performance-optimized interfaces
            shipped to production.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            My focus sits at frontend architecture, responsive design, and
            cross-browser compatibility, working closely with backend engineers
            on REST APIs and WebSockets to deliver real-time, production-ready
            features.
          </p>
        </div>
      </section>

      {/* Focus */}
      <section className="grid grid-cols-[220px_1fr] gap-12 border-b border-border py-16 max-lg:grid-cols-1 max-lg:gap-6 max-sm:py-10">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Focus
        </h2>
        <ul className="flex flex-col divide-y divide-border">
          {focusAreas.map(([label, detail]) => (
            <li
              key={label}
              className="flex items-center justify-between py-4 max-sm:flex-col max-sm:items-start max-sm:gap-1"
            >
              <span className="text-lg">{label}</span>
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {detail}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Education */}
      <section className="grid grid-cols-[220px_1fr] gap-12 pt-16 max-lg:grid-cols-1 max-lg:gap-6 max-sm:pt-10">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Education
        </h2>
        <ul className="flex flex-col divide-y divide-border border-t border-border">
          {education.map((item) => (
            <li
              key={item.degree}
              className="flex items-start justify-between gap-6 py-5 max-sm:flex-col max-sm:gap-1"
            >
              <div className="flex flex-col gap-1">
                <span className="text-lg font-medium tracking-tight">
                  {item.degree}
                </span>
                <span className="text-muted-foreground">{item.field}</span>
                <span className="text-sm text-muted-foreground">
                  {item.school}
                </span>
              </div>
              <span className="whitespace-nowrap font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {item.period}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default About;
