export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  achievements: string[];
}

export interface Project {
  id: string;
  name: string;
  status: string;
  description: string;
  stack: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
  details: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export const experiences: Experience[] = [
  {
    id: "Tech Company",
    role: "Software Engineer",
    company: "Tech Company",
    period: "Jul 2024 - Present",
    achievements: [
      "Architected and independently developed a reusable Django library for JSON-configurable workflows, handling state transitions and permission validation.",
      "Built complex interactive modules in React/TypeScript using Chakra UI, including drag-and-drop interfaces for dynamic configurations.",
      "Refactored critical API endpoints to use bulk operations, eliminating production bottlenecks.",
      "Optimized frontend rendering in complex applications (10+ modules, 40+ components) utilizing useMemo and React Profiler.",
      "Managed Docker containers and Kubernetes clusters (deployments, resource scaling, Lens). Maintained GitHub Actions CI/CD workflows.",
      "Managed Git workflows and actively conducted Pull Request reviews to enforce code quality and architectural consistency."
    ]
  },
  {
    id: "ensys",
    role: "AI Research Engineer (Internship)",
    company: "Ensys s.r.l.",
    period: "Oct 2023 - Nov 2023",
    achievements: [
      "Implemented and evaluated CNN architectures (VGG16-19, ResNet, Inception V3) using TensorFlow/Keras for visual classification.",
      "Preprocessed and analyzed datasets utilizing NumPy and Pandas, iteratively optimizing models based on accuracy metrics and inference speed."
    ]
  }
];

export const projects: Project[] = [
  {
    id: "nbg",
    name: "(NON) Binary Games",
    status: "In Progress",
    description: "Multiplayer puzzle platform consolidating Node.js skills and integrating AI-Assisted paradigms. Fully containerized local environment.",
    stack: ["Node.js", "React", "TypeScript", "Redis", "WebSockets", "Docker", "Vitest"]
  },
  {
    id: "gamedev",
    name: "Game Development",
    status: "In Progress",
    description: "Independent study of game engines and scripting to develop a narrative-driven project, experimenting with game logic and dynamic storytelling.",
    stack: ["Godot", "GDScript", "RenPy", "Python"]
  }
];

export const education: Education[] = [
  {
    id: "unipd-bachelor",
    degree: "Bachelor's Degree in Computer Engineering",
    institution: "University of Padua, Italy",
    year: "2023",
    details: [
      "Thesis: Software development of a smart camera system for the safety of children in swimming pool."
    ]
  }
];

export const skills: SkillGroup[] = [
  {
    category: "Backend",
    skills: ["Python", "Django", "DRF", "PostgreSQL", "SQLite", "REST APIs"]
  },
  {
    category: "Frontend",
    skills: ["React", "TypeScript", "JavaScript", "Next.js", "Chakra UI"]
  },
  {
    category: "DevOps & Cloud",
    skills: ["Docker", "Kubernetes", "Lens", "GitHub Actions", "Bash", "Linux"]
  },
  {
    category: "AI Tooling",
    skills: ["TensorFlow", "Keras", "NumPy", "Pandas", "Continue.dev", "Local LLMs"]
  }
];