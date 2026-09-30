import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const featuredProjects = [
  {
    title: "Apple 3D",
    tag: "Three.js / React",
    href: "https://3dconcept-by-abhishek.netlify.app/",
    // Placeholder swatch — swap for a real thumbnail later.
    accent: "from-neutral-300 to-neutral-500",
  },
  {
    title: "Portfolio",
    tag: "Next.js / Tailwind",
    href: "/projects",
    accent: "from-neutral-400 to-neutral-600",
  },
];

const Home = () => {
  return (
    <div className="py-16 max-sm:py-10">
      {/* Hero */}
      <section className="flex flex-col gap-8 border-b border-border pb-16 max-sm:pb-10">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Senior Frontend Engineer · Mumbai
        </p>

        <h1 className="max-w-4xl text-6xl font-medium leading-[1.05] tracking-tight text-balance max-lg:text-5xl max-sm:text-4xl">
          Hi, I&apos;m Abhishek Gurav. I build fast, thoughtful interfaces for
          the web.
        </h1>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm text-background transition-opacity hover:opacity-90"
          >
            View my work
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm transition-colors hover:border-foreground"
          >
            Get in touch
          </Link>
        </div>
      </section>

      {/* Selected work preview */}
      <section className="pt-16 max-sm:pt-10">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Selected work
          </h2>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            All projects
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1">
          {featuredProjects.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              target={project.href.startsWith("http") ? "_blank" : undefined}
              rel={project.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex flex-col gap-3"
            >
              <div
                className={`aspect-[4/3] w-full overflow-hidden rounded-xl bg-gradient-to-br ${project.accent} transition-transform duration-500 group-hover:scale-[1.01]`}
              />
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium">{project.title}</span>
                <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {project.tag}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
