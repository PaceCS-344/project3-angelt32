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
  "JavaScript / ES6+",
  "HTML5 & CSS3",
  "Responsive Layouts",
  "Git / Version Control",
  "Agile Collaboration",
];

const projects = [
  {
    title: "Portfolio Website",
    summary:
      "A clean and accessible portfolio built with reusable React components, modern layout, and polished visuals.",
    details: "React, CSS, component composition, responsive design",
    link: "https://github.com/angelt32/portfolio",
  },
  {
    title: "Course Scheduler",
    summary:
      "A student-facing scheduling tool showing how to organize classes with filterable views and stateful UI.",
    details: "React, data handling, UI state, design thinking",
    link: "https://github.com/your-username/course-scheduler",
  },
  {
    title: "Interactive Game Demo",
    summary:
      "A small browser game demonstrating event handling, visual feedback, and dynamic user interactions.",
    details: "JavaScript, DOM, animation, user experience",
    link: "https://github.com/your-username/game-demo",
  },
];

function Section({ title, subtitle, children }) {
  return (
    <section className="section">
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
          View on GitHub
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
                I am passionate about front-end development and building user-friendly experiences.
                My work focuses on clarity, responsive design, and reusable components that make
                every application easier to maintain.
              </p>
            </div>
            <div>
              <p>
                I enjoy collaborating with classmates and instructors to solve problems, polish
                interactions, and ship projects that feel both useful and professional.
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

