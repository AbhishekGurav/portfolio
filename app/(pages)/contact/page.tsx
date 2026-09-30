import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { PillLink } from "@/components/ui/PillLink";
import { contactLinks } from "@/content/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Abhishek Gurav — Senior Frontend Engineer based in Mumbai.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Abhishek Gurav",
    description:
      "Get in touch with Abhishek Gurav — Senior Frontend Engineer based in Mumbai.",
    url: "/contact",
  },
};

const Contact = () => {
  return (
    <div className="py-16 max-sm:py-10">
      <section className="flex flex-col gap-8 border-b border-border pb-16 max-sm:pb-10">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Say hello
        </p>
        <h1 className="max-w-3xl text-5xl font-medium leading-[1.05] tracking-tight text-balance max-sm:text-3xl">
          Have a project in mind, or just want to chat? Let&apos;s talk.
        </h1>
        <PillLink href="mailto:abhishekgurav97@gmail.com" arrow>
          Send an email
        </PillLink>
      </section>

      <Section label="Elsewhere" className="pt-16 max-sm:pt-10">
        <ul className="flex flex-col divide-y divide-border border-y border-border">
          {contactLinks.map(({ label, value, href, icon: Icon, external }) => (
            <li key={label}>
              <Link
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between gap-4 py-5 max-sm:gap-3"
              >
                <span className="flex shrink-0 items-center gap-4 max-sm:gap-2">
                  <Icon size={18} className="shrink-0 text-muted-foreground" />
                  <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    {label}
                  </span>
                </span>
                <span className="flex min-w-0 items-center gap-3 text-lg max-sm:gap-2 max-sm:text-sm">
                  <span className="min-w-0 break-all text-right transition-colors group-hover:text-foreground">
                    {value}
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
};

export default Contact;
