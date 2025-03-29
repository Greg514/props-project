import React from 'react';

export default function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB", "Figma"];

  return (
    <div className="skills">
      <h1 className="skills-name">Skills</h1>
      <ul className="skills-list">
        {skills.map((skill, i) => (
          <li key={i}>{skill}</li> 
        ))}
      </ul>
    </div>
  );
}