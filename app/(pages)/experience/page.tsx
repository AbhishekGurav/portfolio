"use client";

import { motion, AnimatePresence, Variants } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { Plus } from "lucide-react";

const Experience = () => {
  const [expandedJob, setExpandedJob] = useState<number | null>(0);

  const descriptionVariants: Variants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.25, ease: "easeInOut" },
    },
  };

  const toggleExpanded = (index: number) => {
    setExpandedJob(expandedJob === index ? null : index);
  };

  return (
    <div className="py-16 max-sm:py-10">
      <section className="grid grid-cols-[220px_1fr] gap-12 max-lg:grid-cols-1 max-lg:gap-6">
        <h1 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Experience
        </h1>

        <ul className="flex flex-col border-t border-border">
          {expData.map((job, key) => {
            const isExpanded = expandedJob === key;

            return (
              <li key={key} className="border-b border-border">
                <button
                  type="button"
                  onClick={() => toggleExpanded(key)}
                  className="flex w-full items-start justify-between gap-6 py-6 text-left"
                  aria-expanded={isExpanded}
                >
                  <div className="flex flex-col gap-1">
                    <span className="text-2xl font-medium tracking-tight max-sm:text-xl">
                      {job.title}
                    </span>
                    <span className="text-muted-foreground">{job.org}</span>
                  </div>

                  <div className="flex items-center gap-6 max-sm:gap-3">
                    <span className="whitespace-nowrap font-mono text-xs uppercase tracking-wider text-muted-foreground max-sm:hidden">
                      {job.startDate} — {job.endDate}
                    </span>
                    <Plus
                      size={18}
                      className={`shrink-0 text-muted-foreground transition-transform duration-300 ${
                        isExpanded ? "rotate-45" : ""
                      }`}
                    />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      variants={descriptionVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col gap-4 pb-8 max-w-2xl">
                        <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                          <span className="rounded-full border border-border px-2.5 py-1">
                            {job.type}
                          </span>
                          <span className="rounded-full border border-border px-2.5 py-1 sm:hidden">
                            {job.startDate} — {job.endDate}
                          </span>
                          <Link
                            href={job.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full border border-border px-2.5 py-1 transition-colors hover:border-foreground hover:text-foreground"
                          >
                            Visit ↗
                          </Link>
                        </div>

                        <p className="italic text-muted-foreground">
                          {job.summary}
                        </p>

                        <ul className="flex flex-col gap-2 text-sm leading-relaxed">
                          {job.description.map((desc, index) => (
                            <li key={index} className="flex gap-3">
                              <span
                                aria-hidden
                                className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground"
                              />
                              <span>{desc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default Experience;

const expData = [
  {
    title: "Full Stack Developer",
    org: "Oneture Technologies",
    startDate: "Jul 2024",
    endDate: "Present",
    link: "https://oneture.com/",
    type: "Full-time",
    summary:
      "Building performance-optimized dashboards and real-time interfaces for AI-based products.",
    description: [
      "Built a performant web application for AI-based Intrusion Detection products, with an improvised LCP of 0.8s.",
      "Created a custom video player module from scratch and optimized streaming features by reworking web socket utilization, which reduced the video load time by 90%.",
      "Collaborated with backend engineers to design and consume robust RESTful APIs and WebSockets, improving real-time data synchronization efficiency by 40%.",
      "Rebuilt advanced map-based dashboards and reduced load time by 78%.",
      "Resolved cross-browser rendering bugs and UI inconsistencies across mobile Safari, Chrome, and Edge, dropping client-side error rates by 40%.",
    ],
  },
  {
    title: "Associate",
    org: "Datamatics",
    startDate: "Jan 2024",
    endDate: "Feb 2024",
    link: "https://datamatics.com/",
    type: "Full-time",
    summary:
      "Modernized a banking client's web presence and established a reusable component system.",
    description: [
      "Migrated a legacy static HTML website into a responsive web application for a banking client, cut visual regression bugs by 72% across 2 products and 2 engineers.",
      "Implemented custom light and dark themes with automatic user preferred theming using localStorage.",
      "Spearheaded transition to a reusable component system, reducing front-end feature development time in half for future sprints by 40%.",
      "Modularized the code base reducing UI inconsistencies and cutting feature development time by over 35%.",
    ],
  },
  {
    title: "Member of Technical Staff",
    org: "Centre for Computational Technologies",
    startDate: "Nov 2021",
    endDate: "Aug 2023",
    link: "https://cctech.co.in/",
    type: "Full-time",
    summary:
      "My first industrial experience, working on production-grade engineering applications.",
    description: [
      "Integrated an open sourced 3D Sketcher into a commercial construction planning application.",
      "Modularized the code base reducing UI inconsistencies and cutting feature development time by over 35%.",
      "Launched 10+ new features and resolved 105+ bugs, improving stability and load performance by 30%.",
      "Integrated complex REST APIs with React frontend components, ensuring smooth asynchronous data handling and robust error boundaries.",
      "Increased unit test coverage from 20% to above 85% across core React components using Jest and React Testing Library, reducing production bugs.",
      "Built a bridge visualization tool for Autodesk Toronto using HTML, CSS, JS and Express.js.",
    ],
  },
];
