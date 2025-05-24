import { ExternalLink, Github } from 'lucide-react';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Complaint Management System',
      description: 'The Complaint Management System is a full-stack application built using the MERN stack (MongoDB, Express.js, React, and Node.js). It is designed to streamline the process of lodging, tracking, and resolving complaints efficiently.',
      tags: ['React', 'Node.js', 'MongoDB', 'NodeJS', 'Express'],
      github: 'https://github.com/RuchithYK/Complaint_Management_System',
      demo: 'https://github.com/RuchithYK/Complaint_Management_System',
      image: '/complaint-management-banner.jpeg',
      size: 'large',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      longDescription: 'A powerful task management application that enables teams to collaborate effectively. Features include real-time updates using Socket.io, drag-and-drop kanban boards, team member assignments, deadline tracking, and comprehensive project analytics.',
      tags: [],
      github: 'https://github.com/RuchithYK',
      demo: 'https://github.com/RuchithYK',
      image: '/task.jpg',
      size: 'medium',
      featured: false
    },
    {
      id: 3,
      title: 'Country Flags',
      description: 'The Country Flags Project is a simple web application built using HTML and JavaScript that displays country flags dynamically by fetching data from an external API. It allows users to search for a country and view its flag, making use of fetch() to retrieve flag images and details. This project is ideal for learning API integration and enhancing frontend development skills.',
      tags: ['HTML','JavaScript'],
      github: 'https://github.com/RuchithYK/project2?tab=readme-ov-file',
      demo: 'https://ruchithyk.github.io/project2/',
      image: '/flag.jpg',
      size: 'medium',
      featured: true
    },
    {
      id: 4,
      title: 'Tic Tac Toe Game',
      description: 'The Tic Tac Toe Game is a simple interactive web application built using HTML and JavaScript. It allows two players to take turns marking X and O on a 3x3 grid. The game checks for winning conditions after each move and displays the result (win, draw, or ongoing). Designed with basic styling, it enhances JavaScript skills by implementing event handling, game logic, and dynamic UI updates.',
      tags: ['HTML','JavaScript'],
      github: 'https://github.com/RuchithYK/tic-tac-toe',
      demo: 'https://ruchithyk.github.io/tic-tac-toe/',
      image: '/tic.jpg',
      size: 'medium',
      featured: true
    }
    
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="page">
      <section className="projects-page">
        <div className="container">
          <div className="page-header">
            <h1 className="page-title">My Projects</h1>
            <p className="page-description">
              Here's a collection of projects I've worked on, showcasing different technologies and problem-solving approaches.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="featured-section">
            <h2 className="section-title">Featured Projects</h2>
            <div className="projects-bento">
              {featuredProjects.map(project => (
                <div key={project.id} className={`project-card ${project.size}`}>
                  <div className="project-image">
                    <h3 className="project-title">{project.title}</h3>
                    <img src={project.image} alt={project.title} />
                    <div className="project-overlay">
                      <div className="project-links">
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link-btn"
                        >
                          <Github size={40} />
                        </a>
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link-btn"
                        >
                          <ExternalLink size={40} />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="project-content">
                    <p className="project-description">{project.description}</p>
                    <div className="project-tags">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="project-tag">{tag+"  "}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Projects */}
          <div className="other-projects">
            <h2 className="section-title">Other Projects</h2>
            <div className="projects-grid">
              {otherProjects.map(project => (
                <div key={project.id} className="project-card-simple">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <img src={project.image} alt={project.title} />

                    <div className="project-links">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link-btn"
                      >
                        <Github size={40} />
                      </a>
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link-btn"
                      >
                        <ExternalLink size={40} />
                      </a>
                    </div>
                  </div>
                  <p className="project-description">{project.longDescription}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;