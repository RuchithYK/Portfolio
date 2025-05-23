import { ExternalLink, Github } from 'lucide-react';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, admin dashboard, and real-time inventory management.',
      longDescription: 'A comprehensive e-commerce platform built from scratch with modern technologies. The application features a responsive design, secure payment processing through Stripe, real-time inventory tracking, order management system, and an intuitive admin dashboard for managing products and orders.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Express', 'JWT'],
      github: 'https://github.com/yourusername/ecommerce-platform',
      demo: 'https://your-ecommerce-demo.com',
      image: '/api/placeholder/600/400',
      size: 'large',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface.',
      longDescription: 'A powerful task management application that enables teams to collaborate effectively. Features include real-time updates using Socket.io, drag-and-drop kanban boards, team member assignments, deadline tracking, and comprehensive project analytics.',
      tags: ['React', 'Socket.io', 'Express', 'PostgreSQL', 'JWT'],
      github: 'https://github.com/yourusername/task-manager',
      demo: 'https://your-taskmanager-demo.com',
      image: '/api/placeholder/600/400',
      size: 'medium',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      longDescription: 'An elegant weather dashboard that provides comprehensive weather information. Features include geolocation-based forecasts, interactive weather maps, 7-day forecasts, weather alerts, and historical weather data visualization.',
      tags: ['JavaScript', 'Weather API', 'Chart.js', 'CSS3'],
      github: 'https://github.com/yourusername/weather-dashboard',
      demo: 'https://your-weather-demo.com',
      image: '/api/placeholder/600/400',
      size: 'small',
      featured: false
    },
    {
      id: 4,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with comprehensive reporting and scheduling features.',
      longDescription: 'A comprehensive social media management dashboard that helps businesses track their social media performance across multiple platforms. Features include post scheduling, analytics reporting, engagement tracking, and competitor analysis.',
      tags: ['React', 'Chart.js', 'REST API', 'Node.js', 'MongoDB'],
      github: 'https://github.com/yourusername/social-dashboard',
      demo: 'https://your-social-demo.com',
      image: '/api/placeholder/600/400',
      size: 'medium',
      featured: true
    },
    {
      id: 5,
      title: 'AI Chat Bot',
      description: 'Intelligent chatbot with natural language processing capabilities and machine learning integration.',
      longDescription: 'An advanced AI chatbot built with Python and natural language processing libraries. The bot can understand context, provide intelligent responses, and learn from user interactions to improve over time.',
      tags: ['Python', 'NLP', 'Flask', 'TensorFlow', 'SQLite'],
      github: 'https://github.com/yourusername/ai-chatbot',
      demo: 'https://your-chatbot-demo.com',
      image: '/api/placeholder/600/400',
      size: 'large',
      featured: true
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'Responsive portfolio website built with React and modern CSS, featuring smooth animations and optimized performance.',
      longDescription: 'A modern, responsive portfolio website showcasing development projects and skills. Built with React and featuring smooth animations, optimized performance, and a clean, professional design.',
      tags: ['React', 'CSS3', 'Responsive', 'Animations'],
      github: 'https://github.com/yourusername/portfolio',
      demo: 'https://your-portfolio-demo.com',
      image: '/api/placeholder/600/400',
      size: 'small',
      featured: false
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
                    <img src={project.image} alt={project.title} />
                    <div className="project-overlay">
                      <div className="project-links">
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link-btn"
                        >
                          <Github size={20} />
                        </a>
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link-btn"
                        >
                          <ExternalLink size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tags">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="project-tag">{tag}</span>
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
                    <div className="project-links">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link-btn"
                      >
                        <Github size={18} />
                      </a>
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link-btn"
                      >
                        <ExternalLink size={18} />
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