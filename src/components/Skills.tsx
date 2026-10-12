import React from 'react';
import './Skills.css';

const skillImages = import.meta.glob('../assets/skills/*', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const displayNames: Record<string, string> = {
  'CSS3.png': 'CSS',
  'HTML5.png': 'HTML',
  'huggingface.png': 'Hugging Face',
  'PostgresSQL.png': 'PostgreSQL',
  'scikit-learn.png': 'Scikit-learn',
  'Tailwind CSS.png': 'Tailwind CSS',
  'Visual Studio Code.png': 'VS Code',
  'VS-Code.png': 'VS Code',
};

const languageOrder = ['Python.png','JavaScript.png', 'TypeScript.png', 'CSS3.png', 'HTML5.png','C.png', 'C++.png' ];

const skills = Object.entries(skillImages)
  .map(([filePath, src]) => {
    const fileName = filePath.split('/').pop() ?? filePath;
    const name = fileName.replace(/\.[^/.]+$/, '');
    return { fileName, name: displayNames[fileName] ?? name, src };
  })
  .sort((first, second) => {
    const firstLanguageIndex = languageOrder.indexOf(first.fileName);
    const secondLanguageIndex = languageOrder.indexOf(second.fileName);
    const firstRank = firstLanguageIndex === -1 ? languageOrder.length : firstLanguageIndex;
    const secondRank = secondLanguageIndex === -1 ? languageOrder.length : secondLanguageIndex;

    return firstRank - secondRank;
  })
  .filter((skill, index, allSkills) => allSkills.findIndex((candidate) => candidate.name === skill.name) === index);

export const Skills: React.FC = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-inner">
        <h2 className="skills-title">Skills</h2>
        <p className="skills-sub">Tools & Technologies</p>

        <div className="skills-grid">
          {skills.map(({ name, src }) => {
            return (
              <div key={name} className="skill-tile">
                <div
                  className="skill-icon"
                  aria-hidden
                  style={{ '--skill-color': '#1559a6' } as React.CSSProperties}
                >
                  <img src={src} alt="" />
                </div>
                <div className="skill-label">{name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
