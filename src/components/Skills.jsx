import React from 'react';

export default function Skills() {
  // Définition d'une liste de compétences
  const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB", "Figma"];

  // ✅ Utilisation correcte de map avec <li> au lieu de <ul>
  // ✅ Ajout d'une key unique (index) pour éviter les warnings
  const listOfSkill = skills.map((skill, index) => (
    <li key={index}>{skill}</li> // 🟡 Suggestion : Utiliser des ID uniques si possible
  ));

  return (
    <div className="skills">
      <h1 className="skills-name">Skills</h1>
      
      {/* Utilisation correcte d’un seul <ul> contenant des <li> */}
      <ul className="skills-list">
        {listOfSkill}
      </ul>
    </div>
  );
}

