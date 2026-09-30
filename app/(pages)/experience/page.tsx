"use client";

import { motion, AnimatePresence, Variants } from "motion/react";
import { useState } from "react";
import { Plus } from "lucide-react";
import { Section } from "@/components/Section";
import { Tag } from "@/components/ui/Tag";
import { experience } from "@/content/experience";

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
      <Section label="Experience" as="h1">
        <ul className="flex flex-col border-t border-border">
          {experience.map((job, key) => {
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
                          <Tag className="px-2.5 text-[11px] uppercase tracking-wider">
                            {job.type}
                          </Tag>
                          <Tag className="px-2.5 text-[11px] uppercase tracking-wider sm:hidden">
                            {job.startDate} — {job.endDate}
                          </Tag>
                          <Tag
                            href={job.link}
                            external
                            className="px-2.5 text-[11px] uppercase tracking-wider"
                          >
                            Visit ↗
                          </Tag>
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
      </Section>
    </div>
  );
};

export default Experience;
