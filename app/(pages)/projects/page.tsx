"use client";
import { motion, Variants } from "motion/react";
import Link from "next/link";

const projectData = [
  {
    title: "Databricks to Amazon EMR Accelerator",
    summary:
      "Built a proof of concept integrating Databricks Unity Catalog with Amazon EMR on EC2, enabling governed cross-platform access to Delta Lake and Apache Iceberg tables without data replication.",
    techStack: "Databricks, Amazon EMR, Unity Catalog, Delta Lake, Apache Iceberg, S3, IAM",
    link: "#",
  },
  {
    title: "Snowflake to Amazon Redshift POC",
    summary:
      "Delivered a benchmarking POC comparing Snowflake and Amazon Redshift for analytics workloads, analyzing query runtimes and resource consumption to support platform selection and migration decisions.",
    techStack: "Snowflake, Amazon Redshift, SQL, Performance Benchmarking",
    link: "#",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
};

const Projects = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-sm:w-full w-2/3 min-w-32 p-1 subpixel-antialiased items-end flex flex-col overflow-y-auto overflow-x-hidden scroll-bar-thin"
    >
      {projectData.map((project, key) => {
        return (
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            key={key}
            className="max-sm:w-full max-sm:m-0 max-sm:mb-1 mb-8 w-2/3 p-4 m-6 border-2 rounded-lg shadow-lg bg-background"
          >
            <Link
              href={project.link}
              target={project.link === "/" ? "_self" : "_blank"}
              rel="noopener"
              className="no-underline"
            >
              <p className="text-xl font-bold uppercase">{project.title}</p>
              <div className="text-muted-foreground text-sm flex flex-row justify-between">
                <span>{project.techStack}</span>
              </div>
              <p className="mb-1 italic">{project.summary}</p>
            </Link>

            {/* <ul id="description" className="list-disc pl-5 text-sm">
              {project.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul> */}
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Projects;
