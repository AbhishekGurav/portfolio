import { Linkedin, Mail, Twitter, Smartphone, Github, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Abhishek Gurav",
  description: "Get in touch with Abhishek Gurav.",
};

const contactLinks = [
  {
    label: "Email",
    value: "abhishekgurav97@gmail.com",
    href: "mailto:abhishekgurav97@gmail.com",
    icon: Mail,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/abhishek-gurav",
    href: "https://www.linkedin.com/in/abhishek-gurav",
    icon: Linkedin,
    external: true,
  },
  {
    label: "Phone",
    value: "+91 9870580234",
    href: "tel:+919870580234",
    icon: Smartphone,
    external: false,
  },
  {
    label: "Twitter",
    value: "@_abhishekgurav",
    href: "https://x.com/_abhishekgurav",
    icon: Twitter,
    external: true,
  },
  {
    label: "GitHub",
    value: "AbhishekGurav",
    href: "https://github.com/AbhishekGurav",
    icon: Github,
    external: true,
  },
];

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
        <Link
          href="mailto:abhishekgurav97@gmail.com"
          className="group inline-flex w-fit items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm text-background transition-opacity hover:opacity-90"
        >
          Send an email
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </section>

      <section className="grid grid-cols-[220px_1fr] gap-12 pt-16 max-lg:grid-cols-1 max-lg:gap-6 max-sm:pt-10">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Elsewhere
        </h2>

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
      </section>
    </div>
  );
};

export default Contact;
