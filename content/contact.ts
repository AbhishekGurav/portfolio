import { Mail, Smartphone } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/ui/BrandIcon";
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
    icon: LinkedinIcon,
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
    label: "X",
    value: "@_abhishekgurav",
    href: "https://x.com/_abhishekgurav",
    icon: XIcon,
    external: true,
  },
  {
    label: "GitHub",
    value: "AbhishekGurav",
    href: "https://github.com/AbhishekGurav",
    icon: GithubIcon,
    external: true,
  },
];
