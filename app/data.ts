// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE to personalize your portfolio.
//  Everything the site shows comes from the object below.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Naimur Rahman",
  role: "Software Engineer",
  // One or two sentences that introduce you.
  tagline:
    "I build reliable, well-crafted web applications — from clean APIs to polished interfaces.",
  location: "Dhaka, Bangladesh",
  email: "shifat160@gmail.com",
  // Short paragraph(s) about you. Each string is its own paragraph.
  about: [
    "I'm a software engineer who enjoys turning complex problems into simple, elegant solutions. I care about clean code, thoughtful design, and shipping things that actually work.",
    "Outside of building products, I like learning new tools, contributing to open source, and exploring everything from systems design to front-end craft.",
  ],
  // Your tech stack / skills.
  skills: [
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "PostgreSQL",
    "REST & GraphQL APIs",
    "Docker",
    "AWS",
    "Git",
    "CI/CD",
  ],
  // A few projects you're proud of.
  projects: [
    {
      name: "Project One",
      description:
        "A short description of what this project does and the problem it solves. Mention your role and the impact.",
      tech: ["Next.js", "TypeScript", "PostgreSQL"],
      link: "https://github.com/yourusername/project-one",
    },
    {
      name: "Project Two",
      description:
        "Another highlight project. Keep it to one or two sentences focused on outcomes and the tech you used.",
      tech: ["React", "Node.js", "AWS"],
      link: "https://github.com/yourusername/project-two",
    },
    {
      name: "Project Three",
      description:
        "A third project to round out your portfolio. Replace these placeholders with your real work.",
      tech: ["Python", "Docker"],
      link: "https://github.com/yourusername/project-three",
    },
  ],
  // Links shown in the header and footer. Remove any you don't use.
  socials: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "", // leave "" to hide
  },
};

export type Profile = typeof profile;
