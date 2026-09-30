import type { Project } from "./types";

export const projects: Project[] = [
  {
    title: "Apple 3D",
    summary:
      "A fun project where I recreated an iPhone website in 3D while learning Three.js.",
    techStack: "React, Three.js, Tailwind CSS",
    link: "https://3dconcept-by-abhishek.netlify.app/",
    accent: "from-neutral-300 to-neutral-500",
    featured: true,
  },
  {
    title: "Portfolio",
    summary:
      "This website, my first attempt at a minimalistic design, inspired by a few other designers.",
    techStack: "Next.js, Framer Motion, shadcn, Tailwind CSS",
    link: "/",
    accent: "from-neutral-400 to-neutral-600",
    featured: true,
  },
];

/** Projects surfaced in the Home page "Selected work" preview. */
export const featuredProjects: Project[] = projects.filter((p) => p.featured);
