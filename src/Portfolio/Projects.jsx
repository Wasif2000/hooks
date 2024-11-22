// Projects.js
import React from "react";

const Projects = () => {
  const projectList = [
    { name: "Project 1", description: "A brief description of Project 1", link: "#" },
    { name: "Project 2", description: "A brief description of Project 2", link: "#" },
    { name: "Project 3", description: "A brief description of Project 3", link: "#" },
  ];

  return (
    <section id="projects" className="p-6 bg-white">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div className="grid gap-4">
        {projectList.map((project, index) => (
          <div key={index} className="p-4 border rounded-lg shadow">
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="text-gray-700">{project.description}</p>
            <a href={project.link} className="text-blue-500 hover:underline">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
