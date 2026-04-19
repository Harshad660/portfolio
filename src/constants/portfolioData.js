export const NAV_LINKS = ["about", "skills", "experience", "projects", "certifications", "contact"];

export const SKILLS = {
  "Languages": { color: "#38bdf8", items: ["Java", "JavaScript", "TypeScript"] },
  "Frontend": { color: "#818cf8", items: ["React.js", "HTML", "CSS"] },
  "Backend": { color: "#34d399", items: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "MVC Architecture"] },
  "Databases": { color: "#fb923c", items: ["MySQL", "MongoDB"] },
  "Tools": { color: "#f472b6", items: ["Git", "GitHub", "Postman", "Tableau"] },
  "Soft Skills": { color: "#a3e635", items: ["Teamwork", "Problem-Solving", "Adaptability", "Time Management", "Communication"] },
};

export const EXPERIENCES = [
  {
    role: "Green Intern – Sustainability Analytics",
    org: "1M1B",
    type: "Online",
    period: "2024 – 2025",
    color: "#34d399",
    points: [
      "Analyzed sustainability datasets and built interactive Tableau dashboards to visualize key metrics",
      "Applied data structuring concepts relevant to backend development and REST API design",
      "Strengthened understanding of data flow, dashboards, and system design for data-driven MERN apps",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Job Application Website",
    tag: "Full Stack · MERN",
    tagColor: "#38bdf8",
    desc: "Full-stack job portal built with React, Node.js, Express, and MongoDB. Features 15+ REST APIs with JWT-based authentication and role-based access control. Includes job posting, search, and application management with MVC architecture.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "REST API", "MVC"],
    period: "Apr 2024 – Aug 2024",
    highlight: true,
    github: true,
    githubUrl: "https://github.com/Harshad660/Job-Application-web.git"
  },
];
