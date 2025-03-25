import React from 'react'

export default function Skills() {
const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB", "Figma"];

const listOfSkill = skills.map(skills => <ul>{skills}</ul>);
{
  return (
<>

  <div className="skills">
    <h1 className="skills-name">Skills</h1>
    <ul className="skills-list">
      {listOfSkill}
    </ul>
  </div>

  
</>
  )
}
}