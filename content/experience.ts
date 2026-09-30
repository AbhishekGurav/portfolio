import type { Job } from "./types";

export const experience: Job[] = [
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
