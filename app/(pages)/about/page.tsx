import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Tag } from "@/components/ui/Tag";
import { skillGroups } from "@/content/skills";
import { education } from "@/content/education";

export const metadata: Metadata = {
  title: "About — Abhishek Gurav",
  description:
    "About Abhishek Gurav, Senior Frontend Engineer based in Mumbai.",
};

const About = () => {
  return (
    <div className="py-16 max-sm:py-10">
      {/* Intro */}
      <Section label="About me" as="h1" bordered className="pb-16 max-sm:pb-10">
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
      </Section>

      {/* Technical skills */}
      <Section label="Technical skills" bordered className="py-16 max-sm:py-10">
        <ul className="flex flex-col divide-y divide-border">
          {skillGroups.map(({ label, skills }) => (
            <li
              key={label}
              className="grid grid-cols-[minmax(0,180px)_minmax(0,1fr)] items-baseline gap-6 py-5 max-sm:grid-cols-1 max-sm:gap-3"
            >
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {label}
              </span>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* Education */}
      <Section label="Education" className="pt-16 max-sm:pt-10">
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
      </Section>
    </div>
  );
};

export default About;
