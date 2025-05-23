import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

function Home() {
  return (
    <div className="page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Your Name</span>
            </h1>
            <p className="hero-subtitle">Full Stack Developer</p>
            <p className="hero-description">
              I create modern web applications with cutting-edge technologies.
              Passionate about clean code, user experience, and solving complex problems.
            </p>
            <div className="hero-buttons">
              <Link to="/projects" className="btn-primary">
                View Projects
              </Link>
              <a href="#contact" className="btn-secondary">
                Get In Touch
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-elements">
              <div className="floating-element">💻</div>
              <div className="floating-element">🚀</div>
              <div className="floating-element">⚡</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">About Me</h2>
              <p className="about-description">
                I'm a passionate full-stack developer with over 3 years of experience 
                building web applications. I love turning complex problems into simple, 
                beautiful designs. When I'm not coding, you'll find me exploring new 
                technologies or contributing to open-source projects.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <h3>50+</h3>
                  <p>Projects Completed</p>
                </div>
                <div className="stat">
                  <h3>3+</h3>
                  <p>Years Experience</p>
                </div>
                <div className="stat">
                  <h3>20+</h3>
                  <p>Happy Clients</p>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <span>👨‍💻</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Let's Connect</h2>
          <p className="contact-description">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
          <div className="contact-links">
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link"
            >
              <Github size={24} />
              <span>GitHub</span>
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link"
            >
              <Linkedin size={24} />
              <span>LinkedIn</span>
            </a>
            <a 
              href="mailto:your.email@example.com"
              className="contact-link"
            >
              <Mail size={24} />
              <span>Email</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;