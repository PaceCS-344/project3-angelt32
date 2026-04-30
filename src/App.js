import { BrowserRouter } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import Button from "./components/Button";

const navigationItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Navigation({ toggleTheme, theme, searchQuery, onSearchChange }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <a
          href="#about"
          className="nav-brand"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("about");
          }}
        >
          Angel Torres
        </a>

        <div className="nav-right">
          <div className="search-wrapper">
            <input
              className="search-input"
              type="search"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search projects"
              aria-label="Search projects"
            />
          </div>

          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === "dark" ? "☀️" : "🌙"}
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

          <ul className={`nav-menu ${isMenuOpen ? "nav-menu-open" : ""}`}>
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
      "The CS241 term project: a playlist organizer with both CLI and GUI modes for sorting, filtering, and managing music collections.",
    details: "Java, Swing GUI, CLI controls, HashMap and ArrayDeque data structures, comparators, OpenCSV parsing, JUnit testing",
    link: "https://github.com/angelt32/CS241TermProject",
  },
  {
    title: "Banking System Simulation",
    summary:
      "A secure Java-based banking application featuring authentication, account management, and transaction tracking built with object-oriented design principles.",
    details: "Java, OOP, authentication systems, inheritance, data structures, transaction logging",
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

function Section({ title, subtitle, children, id, highlighted }) {
  return (
    <section className={`section ${highlighted ? "section-highlight" : ""}`} id={id}>
      <div className="section-heading">
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
      </div>
      {children}
    </section>
  );
}

function ProjectCard({ project, highlighted, repo, onOpenRepoDetails, onOpenProjectDetails }) {
  return (
    <article className={`card project-card ${highlighted ? "highlight-card" : ""}`}>
      <div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
      </div>
      <div className="project-meta">
        <span>{project.details}</span>
        <div className="repo-actions">
          <Button href={project.link} variant="secondary">
            View Project
          </Button>
          <Button
            href="#"
            variant="primary"
            onClick={(e) => {
              e.preventDefault();
              if (repo) {
                onOpenRepoDetails(repo);
              } else {
                onOpenProjectDetails(project);
              }
            }}
          >
            Details
          </Button>
        </div>
      </div>
    </article>
  );
}

function getRepoDisplayInfo(repo) {
  if (!repo) return { title: "", description: "" };

  const lowerName = repo.name.toLowerCase();
  if (lowerName.includes("cs241")) {
    return {
      title: "Playlist Organizer (CS241 Term Project)",
      description:
        "A playlist organizer built for CS241, featuring CLI and Swing GUI modes for sorting, filtering, and managing music collections.",
    };
  }
  if (lowerName.includes("cs-122")) {
    return {
      title: "Banking System Simulation (CS-122 Project)",
      description:
        "A secure Java-based banking application featuring authentication, account management, and transaction tracking built with object-oriented design principles.",
    };
  }

  return {
    title: repo.name,
    description: repo.description || "No description provided.",
  };
}

function RepoModal({ repo, onClose }) {
  if (!repo) return null;

  const { title, description } = getRepoDisplayInfo(repo);

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose} aria-label="Close details">
          ×
        </button>
        <h2>{title}</h2>
        <p>{description || "No description available."}</p>
        <ul className="repo-stats">
          <li>Language: {repo.language || "None"}</li>
          <li>Stars: {repo.stargazers_count}</li>
          <li>Watchers: {repo.watchers_count}</li>
          <li>Forks: {repo.forks_count}</li>
          <li>Open Issues: {repo.open_issues_count}</li>
        </ul>
        <Button href={repo.html_url} variant="secondary">
          Open on GitHub
        </Button>
      </div>
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose} aria-label="Close details">
          ×
        </button>
        <h2>{project.title}</h2>
        <p>{project.summary}</p>
        <p><strong>Technologies:</strong> {project.details}</p>
        <Button href={project.link} variant="secondary">
          View Project
        </Button>
      </div>
    </div>
  );
}

export default function App() {
  const [theme, setTheme] = useState("dark");
  const [searchQuery, setSearchQuery] = useState("");
  const [repos, setRepos] = useState([]);
  const [loadingRepos, setLoadingRepos] = useState(true);
  const [repoError, setRepoError] = useState(null);
  const [selectedRepo, setSelectedRepo] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const findRepoForProject = (project) => {
    if (!project.link) return null;
    try {
      const url = new URL(project.link);
      if (url.hostname !== "github.com") return null;
      const parts = url.pathname.split("/").filter(Boolean);
      const repoName = parts[1];
      return repos.find((repo) => repo.name.toLowerCase() === repoName?.toLowerCase());
    } catch {
      return null;
    }
  };

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch("https://api.github.com/users/angelt32/repos?sort=updated&per_page=8");
        if (!response.ok) {
          throw new Error("GitHub API request failed.");
        }
        const data = await response.json();
        const additionalRepos = [];
        for (const project of projects) {
          if (project.link && project.link.includes('github.com')) {
            try {
              const url = new URL(project.link);
              const parts = url.pathname.split('/').filter(Boolean);
              if (parts.length >= 2) {
                const owner = parts[0];
                const repo = parts[1];
                if (owner !== 'angelt32') { // Only fetch if not already in user's repos
                  const repoResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
                  if (repoResponse.ok) {
                    const repoData = await repoResponse.json();
                    additionalRepos.push(repoData);
                  }
                }
              }
            } catch (error) {
              // Ignore errors for individual repo fetches
            }
          }
        }
        
        setRepos([...data, ...additionalRepos]);
      } catch (error) {
        // Ignore errors for repo fetching
      }
    };

    fetchRepos();
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const projectMatches = (project) => {
    const haystack = `${project.title} ${project.summary} ${project.details}`.toLowerCase();
    return normalizedQuery === "" || haystack.includes(normalizedQuery);
  };

  const repoMatches = (repo) => {
    const haystack = `${repo.name} ${repo.description || ""} ${repo.language || ""}`.toLowerCase();
    return normalizedQuery === "" || haystack.includes(normalizedQuery);
  };

  const filteredProjects = useMemo(
    () => projects.filter(projectMatches),
    [normalizedQuery]
  );

  const isSearchActive = normalizedQuery.length > 0;
  const highlightProjects = filteredProjects.length > 0;

  return (
    <BrowserRouter>
      <Navigation
        toggleTheme={toggleTheme}
        theme={theme}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
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
            highlighted={isSearchActive && (highlightProjects || highlightRepos)}
          >
            {isSearchActive && (
              <div className="search-feedback">
                Showing {filteredProjects.length} matching projects.
              </div>
            )}

            <div className="card-grid">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  highlighted={isSearchActive}
                  repo={findRepoForProject(project)}
                  onOpenRepoDetails={setSelectedRepo}
                  onOpenProjectDetails={setSelectedProject}
                />
              ))}
            </div>

            {isSearchActive && filteredProjects.length === 0 && (
              <p className="no-results">No matching projects found.</p>
            )}
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
      <RepoModal repo={selectedRepo} onClose={() => setSelectedRepo(null)} />
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </BrowserRouter>
  );
}

