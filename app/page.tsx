import { profile } from "./data";

export default function Home() {
  const { socials } = profile;
  const year = 2026;

  return (
    <main>
      {/* ── Nav ───────────────────────────────────────────── */}
      <nav className="nav">
        <a href="#top" className="nav__brand">
          {profile.name.split(" ")[0]}
          <span className="nav__dot">.</span>
        </a>
        <div className="nav__links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* ── Hero ──────────────────────────────────────────── */}
      <section id="top" className="hero">
        <p className="hero__eyebrow">{profile.role}</p>
        <h1 className="hero__title">
          {profile.name}
          <span className="hero__accent">.</span>
        </h1>
        <p className="hero__tagline">{profile.tagline}</p>
        <div className="hero__cta">
          <a href="#contact" className="btn btn--primary">
            Get in touch
          </a>
          <a href="#work" className="btn btn--ghost">
            View work
          </a>
        </div>
        {profile.location && (
          <p className="hero__meta">📍 {profile.location}</p>
        )}
      </section>

      {/* ── About ─────────────────────────────────────────── */}
      <section id="about" className="section">
        <h2 className="section__title">
          <span className="section__num">01</span> About
        </h2>
        <div className="about">
          <div className="about__text">
            {profile.about.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <div className="about__skills">
            <h3 className="about__skills-title">Skills &amp; Tools</h3>
            <ul className="chips">
              {profile.skills.map((skill) => (
                <li key={skill} className="chip">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Work ──────────────────────────────────────────── */}
      <section id="work" className="section">
        <h2 className="section__title">
          <span className="section__num">02</span> Selected Work
        </h2>
        <div className="projects">
          {profile.projects.map((project) => (
            <a
              key={project.name}
              href={project.link || "#"}
              target={project.link ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="card"
            >
              <div className="card__head">
                <h3 className="card__title">{project.name}</h3>
                <span className="card__arrow" aria-hidden>
                  ↗
                </span>
              </div>
              <p className="card__desc">{project.description}</p>
              <ul className="card__tech">
                {project.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </a>
          ))}
        </div>
      </section>

      {/* ── Contact ───────────────────────────────────────── */}
      <section id="contact" className="section section--contact">
        <h2 className="section__title">
          <span className="section__num">03</span> Get in touch
        </h2>
        <p className="contact__lead">
          I&apos;m open to new opportunities and collaborations. The fastest way
          to reach me is by email.
        </p>
        <a href={`mailto:${profile.email}`} className="contact__email">
          {profile.email}
        </a>
        <div className="contact__socials">
          {socials.github && (
            <a href={socials.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
          {socials.linkedin && (
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          )}
          {socials.twitter && (
            <a href={socials.twitter} target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          )}
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────── */}
      <footer className="footer">
        <p>
          © {year} {profile.name}. Built with Next.js.
        </p>
      </footer>
    </main>
  );
}
