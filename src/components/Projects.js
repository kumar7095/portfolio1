import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "House Price Prediction",
    description:
      "A ML model that predicts house prices based on dataset inputs.",
    tech: "Python, scikit-learn",
    link: "#",
  },
  {
    name: "React Portfolio",
    description: "A stylish portfolio showcasing my skills and projects.",
    tech: "React, Tailwind CSS",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 text-center">
      <h2 className="text-4xl font-bold text-orange-400">Projects</h2>
      <div className="mt-8 flex flex-wrap justify-center gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card bg-teal-800 p-6 rounded-lg shadow-lg w-80"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-orange-300">
              {project.name}
            </h3>
            <p className="text-gray-300 mt-2">{project.description}</p>
            <p className="text-sm text-gray-400 mt-2">
              <strong>Tech:</strong> {project.tech}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 mt-3 inline-block hover:underline"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
