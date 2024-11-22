// Skills.js
import React from "react";

const Skills = () => {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Git"];

  return (
    <section id="skills" className="p-6 bg-gray-100 text-gray-800">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <ul className="grid grid-cols-2 gap-2">
        {skills.map((skill, index) => (
          <li key={index} className="bg-gray-200 p-2 rounded text-center shadow">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
