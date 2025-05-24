import React from "react";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: 'JavaScript', icon: 'JS', level: 70 },
        { name: 'React', icon: '⚛️', level: 60 },
        { name: 'HTML5', icon: '🟧', level: 95 },
        { name: 'CSS3', icon: '🎨', level: 90 },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: 'Node.js', icon: '🟢', level: 85 },
        { name: 'Python', icon: '🐍', level: 80 },
        { name: 'Express.js', icon: 'EX', level: 85 },
        { name: 'MongoDB', icon: '🍃', level: 75 },
        { name: 'Java', icon: '☕', level: 80 },
        { name: 'C/C++', icon: '🔗', level: 80 }

      ]
    },
    {
      title: "Tools & DevOps",
      skills: [
        { name: 'Git', icon: '📊', level: 90 },
        { name: 'AWS', icon: '☁️', level: 65 },
        { name: 'Linux', icon: '🐧', level: 75 },
        { name: 'Postman', icon: '✉️', level: 75 }

      ]
    }
  ];

  return (
    <div className="page">
      <section className="skills-page">
        <div className="container">
          <div className="page-header">
            <h1 className="page-title">Skills & Technologies</h1>
            <p className="page-description">
              Here are the technologies and tools I work with to bring ideas to life.
            </p>

          </div>

          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h2 className="category-title">{category.title}</h2>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-card">
                    <div className="skill-header">
                      <div className="skill-icon">{skill.icon}</div>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <div className="skill-progress">
                      <div className="progress-bar">
                        <div 
                          className="progress-fill" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="experience-section">
            <h2 className="section-title">Education</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>Christ School,Hassan</h3>
                  <p className="company">Batch-2020</p>
                  <p className="description">
                    Percentage-85%
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>Brilliant PU Collage,Hassan</h3>
                  <p className="company">Batch - 2022</p>
                  <p className="description">
                    Percentage-91%
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>Malnad College of Engineering,Hassan</h3>
                  <p className="company">Batch 2022 - 2026</p>
                  <p className="description">
                    Degree-B.E Computer Science<br/>CGPA-8.5
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;