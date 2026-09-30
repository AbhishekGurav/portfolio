"use client";
import { motion, Variants } from "motion/react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/Section";
import { projects } from "@/content/projects";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const Projects = () => {
  return (
    <div className="py-16 max-sm:py-10">
      <Section label="Projects" as="h1">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 gap-x-6 gap-y-10 max-sm:grid-cols-1"
        >
          {projects.map((project) => {
            const external = project.link.startsWith("http");

            return (
              <motion.div key={project.title} variants={itemVariants}>
                <Link
                  href={project.link}
                  target={external ? "_blank" : "_self"}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="group flex flex-col gap-4"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                    <div
                      className={`h-full w-full bg-gradient-to-br ${project.accent} transition-transform duration-500 group-hover:scale-[1.02]`}
                    />
                    {/* Circular hover cursor cue, echoing the Arnau interaction */}
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-background/90 text-foreground backdrop-blur">
                        <ArrowUpRight size={20} />
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-medium tracking-tight">
                        {project.title}
                      </span>
                      <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                        {project.techStack.split(",")[0]}
                      </span>
                    </div>
                    <p className="italic text-muted-foreground">
                      {project.summary}
                    </p>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                      {project.techStack}
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </Section>
    </div>
  );
};

export default Projects;
