import React from 'react'

function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: 'JavaScript', icon: '🟨', level: 90 },
        { name: 'React', icon: '⚛️', level: 85 },
        { name: 'TypeScript', icon: '🔷', level: 80 },
        { name: 'HTML5', icon: '🟧', level: 95 },
        { name: 'CSS3', icon: '🎨', level: 90 },
        { name: 'Next.js', icon: '▲', level: 75 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: 'Node.js', icon: '🟢', level: 85 },
        { name: 'Python', icon: '🐍', level: 80 },
        { name: 'Express.js', icon: '🚀', level: 85 },
        { name: 'MongoDB', icon: '🍃', level: 75 },
        { name: 'PostgreSQL', icon: '🐘', level: 70 },
        { name: 'REST APIs', icon: '🔗', level: 90 }
      ]
    },
    {
      title: "Tools & DevOps",
      skills: [
        { name: 'Git', icon: '📊', level: 90 },
        { name: 'Docker', icon: '🐳', level: 70 },
        { name: 'AWS', icon: '☁️', level: 65 },
        { name: 'Webpack', icon: '📦', level: 75 },
        { name: 'Jest', icon: '🧪', level: 80 },
        { name: 'Linux', icon: '🐧', level: 75 }
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
            <h2 className="section-title">Experience</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>Senior Full Stack Developer</h3>
                  <p className="company">Tech Company • 2022 - Present</p>
                  <p className="description">
                    Led development of scalable web applications using React, Node.js, and AWS. 
                    Mentored junior developers and improved team productivity by 30%.
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>Full Stack Developer</h3>
                  <p className="company">Startup Inc • 2021 - 2022</p>
                  <p className="description">
                    Built and maintained multiple web applications from concept to deployment. 
                    Collaborated with designers and product managers to deliver user-focused solutions.
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>Junior Developer</h3>
                  <p className="company">Digital Agency • 2020 - 2021</p>
                  <p className="description">
                    Developed responsive websites and web applications. 
                    Learned modern development practices and agile methodologies.
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