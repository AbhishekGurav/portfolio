import { Linkedin, Mail, Twitter, Smartphone, Github } from "lucide-react";
import type { ContactLink } from "./types";

export const contactLinks: ContactLink[] = [
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
