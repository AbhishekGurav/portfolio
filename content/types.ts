import type { ComponentType, SVGProps } from "react";

/**
 * An icon component that accepts a `size` prop, satisfied by both lucide-react
 * icons and our inlined BrandIcon components.
 */
export type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;

/** A single work experience entry. */
export type Job = {
  title: string;
  org: string;
  startDate: string;
  endDate: string;
  /** Company/organization URL. */
  link: string;
  type: string;
  summary: string;
  /** Bullet points shown when the entry is expanded. */
  description: string[];
};

/** A portfolio project. */
export type Project = {
  title: string;
  summary: string;
  techStack: string;
  /** Internal route (starts with "/") or external URL. */
  link: string;
  /** Tailwind gradient stops for the placeholder thumbnail. */
  accent: string;
  /** Whether to surface this project in the Home page preview. */
  featured?: boolean;
};

/** A labelled group of skills rendered as tag pills. */
export type SkillGroup = {
  label: string;
  skills: string[];
};

/** An education entry. */
export type Education = {
  degree: string;
  field: string;
  school: string;
  period: string;
};

/** A contact / social link. */
export type ContactLink = {
  label: string;
  value: string;
  href: string;
  icon: IconComponent;
  /** Open in a new tab with rel="noopener". */
  external: boolean;
};
