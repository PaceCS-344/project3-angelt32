import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "./components/Button";

const navigationItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Navigation({ toggleTheme, theme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close menu after navigation
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <a href="#about" className="nav-brand" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
          Angel Torres
        </a>
        <div className="nav-right">
          <ul className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
            {navigationItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href.substring(1));
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button
            className="hamburger"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}

const contactLinks = [
  {
    label: "Email",
    href: "mailto:angelt3213@gmail.com",
    description: "angelt3213@gmail.com",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/angel-torres-597773312/",
    description: "LinkedIn Profile",
  },
  {
    label: "GitHub",
    href: "https://github.com/angelt32",
    description: "GitHub Profile",
  },
];

const skills = [
  "React & Component Design",
  "JavaScript",
  "Java",
  "C#",
  "Git / Version Control",
];

const projects = [
  {
    title: "Playlist Organizer Application",
    summary:
      "A Java-based application featuring both CLI and GUI interfaces for organizing and managing large music datasets efficiently.",
    details: "Java, Swing, CLI design, HashMaps, ArrayDeque, Comparators, OpenCSV, JUnit",
    link: "https://github.com/angelt32/CS241TermProject",
  },
  {
    title: "Banking System Simulation",
    summary:
      "A secure Java-based banking application featuring authentication, account management, and transaction tracking built with object-oriented design principles.",
    details:  "Java, OOP, authentication systems, inheritance, data structures, transaction logging",
    link: "https://github.com/MikeD776/CS-122-Project",
  },
  {
    title: "Souled Out - Browser Game",
    summary:
      "A 2D Unity game built for the web, featuring coin collection, enemy avoidance, life management, and scene transitions to demonstrate game mechanics and user interaction.",
    details: "C#, Unity Engine, WebGL, 2D collision detection, audio feedback, scene management",
    link: "https://angeltorres32.itch.io/souled-out",
  },
];

function Section({ title, subtitle, children, id }) {
  return (
    <section className="section" id={id}>
      <div className="section-heading">
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
      </div>
      {children}
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="card project-card">
      <div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
      </div>
      <div className="project-meta">
        <span>{project.details}</span>
        <Button href={project.link} variant="secondary">
          View Project
        </Button>
      </div>
    </article>
  );
}

export default function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <BrowserRouter>
      <Navigation toggleTheme={toggleTheme} theme={theme} />
      <div className="app-shell">
        <header className="hero">
          <div>
            <span className="eyebrow">Student Portfolio</span>
            <h1>Angel Torres</h1>
            <p>
              I develop applications using object-oriented design and data structures, focusing on efficient logic, scalable architecture, and clean user interaction.
            </p>
          </div>
        </header>

        <main>
          <Section
            id="about"
            title="About Me"
            subtitle="A student developer who enjoys turning ideas into code."
          >
            <div className="about-grid">
              <div>
                <p>
                  I’m currently a sophomore computer science student with a strong interest in building practical, user-focused software. I enjoy turning ideas into well-structured applications, whether that means designing intuitive interfaces or developing efficient underlying logic.
                </p>
              </div>
              <div>
                <p>
                  I’m particularly interested in front-end development, but I also value understanding the full development process. My work emphasizes clarity, responsiveness, and writing maintainable code that scales. As I continue learning, I’m always exploring new technologies and approaches to improve both my technical skills and the overall user experience of what I build.
                </p>
              </div>
            </div>
          </Section>

          <Section id="skills" title="Skills" subtitle="Technologies and strengths I use to deliver polished projects.">
            <div className="skill-grid">
              {skills.map((skill) => (
                <div key={skill} className="skill-pill">
                  {skill}
                </div>
              ))}
            </div>
          </Section>

          <Section
            id="projects"
            title="Projects"
            subtitle="Selected work showing the kinds of projects I enjoy building."
          >
            <div className="card-grid">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </Section>

          <Section title="What I’m Proud Of" subtitle="Highlights from my recent work and learning journey.">
            <ul className="highlight-list">
              <li>
                Built a responsive portfolio using reusable React components and modern CSS styling.
              </li>
              <li>
                Designed project pages that communicate both the problem and the technical approach.
              </li>
              <li>
                Practiced clean component composition and accessible link/button interactions.
              </li>
            </ul>
          </Section>

          <Section id="contact" title="Contact" subtitle="Let's connect—I'm always open to new projects and collaborations.">
            <div className="contact-grid">
              {contactLinks.map((item) => (
                <div key={item.label} className="contact-card">
                  <h3>{item.label}</h3>
                  <p>{item.description}</p>
                  <Button href={item.href} variant="secondary">
                    {item.label}
                  </Button>
                </div>
              ))}
            </div>
          </Section>
        </main>
      </div>
    </BrowserRouter>
  );
}

