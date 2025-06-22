import { Linkedin, Mail, Twitter, Smartphone, Github } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  return (
    <div
      className="h-full min-sm:w-3/5 subpixel-antialiased flex flex-col justify-center items-center
    max-sm:w-full max-sm:h-full max-sm:gap-2 max-sm:p-4"
    >
      <div className=" flex flex-col min-w-52 overflow-visible max-sm:w-4/5 max-sm:justify-around max-sm:items-center">
        <Link
          href="mailto:abhishekgurav97@gmail.com"
          className="flex max-sm:w-full justify-between items-center gap-2 hover:underline"
        >
          <Mail size={20} />
          <span>abhishekgurav97@gmail.com</span>
        </Link>
        <Link
          href="https://www.linkedin.com/in/abhishek-gurav"
          target="_blank"
          rel="noopener noreferrer"
          className="flex max-sm:w-full justify-between items-center gap-2 hover:underline"
        >
          <Linkedin size={20} />
          <span>linkedin.com/in/abhishek-gurav</span>
        </Link>
        <Link
          href="tel:+919870580234"
          className="flex max-sm:w-full justify-between items-center gap-2 hover:underline"
        >
          <Smartphone size={20} />
          <span>+91 9870580234</span>
        </Link>
        <Link
          href="https://x.com/_abhishekgurav"
          target="_blank"
          rel="noopener noreferrer"
          className="flex max-sm:w-full justify-between items-center gap-2 hover:underline"
        >
          <Twitter size={20} />
          <span>@_abhishekgurav</span>
        </Link>
        <Link
          href="https://github.com/AbhishekGurav"
          target="_blank"
          rel="noopener noreferrer"
          className="flex max-sm:w-full justify-between items-center gap-2 hover:underline"
        >
          <Github size={20} />
          <span>AbhishekGurav</span>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
