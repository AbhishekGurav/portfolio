'use client'

import { motion } from "motion/react";

const expData = [
  {
    title: "Full Stack Developer",
    org: "Oneture Technologies",
    startDate: "July, 2024",
    endDate: "Present",
    link: "https://oneture.com/",
    type: "Full-time",
    summary:
      "This is my current job, where I was interviewed for a MERN Stack role, but was assigned to an Angular-Django Project. I was quick to adapt and delivered results in both Angular and React.",
    description: [
      "Mentored the entire frontend team for the AlgoAIOT, Link Device and HawkAI projects, which resulted in two projects and one POC being fast tracked into production, while working for CMS Infosystems.",
      "Collaborated with designers, product managers, and back-end engineers to deliver new features and enhancements for the RMS Project.",
      "Built multiple interactive dashboards for CMS Infosystem’s Intrusion Detection products for 41 Banking and Corporate clients.",
      "Led the development of real-time video surveillance features across RMS Projects.",
      "Achieved 80% reduction in render times for complex dashboards and WebRTC features.",
    ],
  },
  {
    title: "Associate",
    org: "Datamatics Staffing Services",
    startDate: "Jan, 2024",
    endDate: "Feb, 2024",
    link: "https://datamatics.com/",
    type: "Full-time Contract",
    summary:
      "This was my 2nd job where I was trying out something new, unfortunately my core values did not align much with the culture at the workplace and I had to end it in a short tenure.",
    description: [
      "Led the migration efforts to modernize a static HTML website to a React application, achieving a 77% uplift in user experience metrics at HDFC Bank.",
      "Developed the frontend for an internal OCR product using React and Tailwind.",
    ],
  },
  {
    title: "Member of Technical Staff",
    org: "Center for Computational Technologies",
    startDate: "Nov, 2021",
    endDate: "Aug, 2023",
    link: "https://cctech.in/",
    type: "Full-time",
    summary:
      "My first job where I gained my first ever industriale experience working on production grade projects.",
    description: [
      "Achieved 83% reduction in average page load time for the ’HVAC System Designer’ project using optimization techniques, efficient API integration, and thorough code reviews.",
      "Mentored two freshers at CCTech, with hands-on guidance, focusing on enhancing their technical skills in frontend development and collaborative practices.",
      "Led the refactoring of reusable components which led to 60% of improvement in team productivity.",
      "Developed the HVAC System Designer project for PE Load Calcs using React, ReactRedux, Immutable.",
      "Developed the GBD project for Autodesk Toronto using HTML, CSS, d3.js and Express.js.",
    ],
  },
];

const Experience = () => {
  

  
  return (
    <div className="w-2/3 min-w-32 p-1 subpixel-antialiased items-end flex flex-col overflow-y-auto overflow-x-hidden scroll-bar-thin">
      {expData.map((job, key) => {
        return (
          <motion.div

          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          whileHover={{ scale: 1.03 }}
          transition={{ ease: "easeInOut", duration: 0.2 }}

            key={key}
            className="mb-8 w-2/3 p-4 m-6 border-2 rounded-lg shadow-lg bg-background"
          >
            <p className="text-xl font-bold uppercase">{job.title}</p>
            <span>{job.org}</span>
            <div className="text-muted-foreground text-sm flex flex-row justify-between">
              <p>
                {job.startDate} - {job.endDate}
              </p>
              <span>{job.type}</span>
            </div>

            <p className="mb-1 italic">{job.summary}</p>
            <ul id="description" className="list-disc pl-5 text-sm">
              {job.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Experience;
