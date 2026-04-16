import Button from "./components/Button";

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

function Section({ title, subtitle, children, ...props }) {
  return (
    <section className="section" {...props}>
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
  return (
    <div className="app-shell">
      <header className="hero">
        <div>
          <span className="eyebrow">Student Portfolio</span>
          <h1>Angel Torres</h1>
          <p>
            I create modular React applications that highlight strong UI structure,
            polished interactions, and meaningful experiences for users.
          </p>
          <div className="hero-actions">
            <Button href="#projects">View Projects</Button>
            <Button href="#contact" variant="secondary">
              Contact Me
            </Button>
          </div>
        </div>
      </header>

      <main>
        <Section
          title="About Me"
          subtitle="A student developer who enjoys turning ideas into clean React interfaces."
        >
          <div className="about-grid">
            <div>
              <p>
                I’m a sophomore computer science student with a strong interest in building practical, user-focused software. I enjoy turning ideas into well-structured applications, whether that means designing intuitive interfaces or developing efficient underlying logic.
              </p>
            </div>
            <div>
              <p>
                I’m particularly interested in front-end development, but I also value understanding the full development process. My work emphasizes clarity, responsiveness, and writing maintainable code that scales. As I continue learning, I’m always exploring new technologies and approaches to improve both my technical skills and the overall user experience of what I build.
              </p>
            </div>
          </div>
        </Section>

        <Section title="Skills" subtitle="Technologies and strengths I use to deliver polished projects.">
          <div className="skill-grid">
            {skills.map((skill) => (
              <div key={skill} className="skill-pill">
                {skill}
              </div>
            ))}
          </div>
        </Section>

        <Section
          title="Projects"
          subtitle="Selected work showing the kinds of projects I enjoy building."
          id="projects"
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

        <Section title="Contact" subtitle="Let's connect—I'm always open to new projects and collaborations." id="contact">
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
  );
}

