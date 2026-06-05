// ============================================
// Portfolio Data — Edit this single file to
// update all content across the site.
// ============================================

export const personalInfo = {
  name: "Abhijeet Prasad",
  firstName: "Abhijeet",
  lastName: "Prasad",
  title: "Full Stack Software Engineer",
  tagline:
    "Building robust, scalable systems that deliver measurable product and business impact.",
  email: "abhi.prasad16@gmail.com",
  phone: "+91 8130503907",
  location: "Noida, India",
  availableBadge: true,
  resumeUrl:
    "https://drive.google.com/file/d/10P2uh_j0wtFH0628LElOJCpZIqUygXXP/view?usp=sharing",
  socials: {
    github: "https://github.com/kudoabhijeet",
    linkedin: "https://linkedin.com/in/kudoabhijeet",
    twitter: "https://twitter.com/kudoabhijeet",
  },
};

export const aboutParagraphs = [
  "I'm a Full Stack Software Engineer with 3.5+ years of experience designing, developing, and scaling distributed web and mobile systems. I work primarily with Node.js, Express, React.js, TypeScript, Go, and MongoDB across high-growth environments.",
  "I've led feature delivery for enterprise-grade digital platforms, architected microservices, and driven API performance improvements that reduced latency by 30%. I'm experienced in system design, cloud-native deployments on AWS and Azure, and CI/CD automation.",
  "I'm passionate about building robust, maintainable systems and believe in clean code, thoughtful architecture, and continuous improvement. I'm always excited to take on new challenges that push the boundaries of what's possible.",
];

export const experience = [
  {
    title: "Software Engineer - Full Stack",
    company: "Appinventiv Technologies",
    period: "Mar 2025 - Present",
    current: true,
    stack: [
      "React",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "MongoDB",
      "NestJS",
    ],
    description: [
      "Spearheaded decomposition of Emaar Malls .NET monolith into a NestJS microservices architecture: split 4 bounded contexts into independently deployable services, reducing deployment cycle time by 25% andenabling per-team release cadence.",
      "Led the “At the Top — Burj Khalifa” B2B API revamp — migrated the legacy .NET booking platform to Node.js + PostgreSQL; rewrote stored procedures and SQL logic, implemented Redis caching with optimizedconnection pooling for GalaxyDB endpoints serving real-time slot availability and pricing to travel-agencyclients",
      "Led full-stack development of OmniCentral and EmaarMind — enterprise digital operations platforms for Emaar (UAE’s largest real-estate developer) — built on React, NestJS, TypeScript, and PostgreSQL, serving15 internal teams with 300+ active users.",
    ],
  },
  {
    title: "Software Engineer - Full Stack",
    company: "Advanced Adventure Gear Technologies",
    period: "Jun 2024 - Feb 2025",
    current: false,
    stack: [
      "Node.js",
      "Go",
      "PostgreSQL",
      "Redis",
      "React Native",
      "GitHub Actions",
    ],
    description: [
      "Built and launched JourneyX, a cross-platform travel management app, reaching 1,000+ installs within 90 days",
      "Designed scalable backend microservices with Node.js, Go, PostgreSQL, and Redis, achieving a 30% improvement in API latency",
      "Participated in peer code reviews, CI/CD integration (GitHub Actions), and documentation to ensure deployment readiness",
      "Mentored junior developers, enforced code quality with unit testing (Jest) and GitHub Actions CI/CD",
    ],
  },
  {
    title: "Technical Consultant",
    company: "Surface Modification Technologies",
    period: "Jan 2022 - Jun 2024",
    current: false,
    stack: ["REST APIs", "SQL", "ERP", "TCS ION"],
    description: [
      "Deployed TCS ION ERP across 3 branches, automating 10+ workflows and reducing operational delays by 40%",
      "Gathered business requirements, led end-to-end solution delivery, and supported post-launch operations",
      "Improved internal tooling performance through optimized queries and REST API architecture",
    ],
  },
];

export interface ProjectData {
  title: string;
  description: string;
  technologies: string[];
  gradient: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: ProjectData[] = [
  {
    title: "GetBetterAtDev",
    description:
      "A open-source platform for developers to improve their coding skills through interactive projects and guides.",
    technologies: [
      "React",
      "Node.js",
      "GoLang",
      "TypeScript",
      "PostgreSQL",
      "Redis",
    ],
    gradient: "from-blue-600 to-violet-700",
    liveUrl: "https://getbetterat.dev/",
  },
  {
    title: "URL Shortener",
    description:
      "A URL shortening service built with Node.js, Express, and MongoDB. It provides a simple API to create short URLs and redirect to the original URLs.",
    technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "Redis"],
    gradient: "from-emerald-500 to-teal-700",
    liveUrl: "https://ku2.me/",
  },
];

export const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Go", "Python", "C++"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Redux", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "NestJS", "Django", "gRPC", "Microservices"],
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "MongoDB", "Redis", "SQL", "MySQL"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["Docker", "Kubernetes", "AWS", "GCP", "CI/CD", "PM2"],
  },
  {
    title: "Core CS",
    skills: [
      "Data Structures",
      "Algorithms",
      "System Design",
      "Design Patterns",
    ],
  },
];

export const education = {
  degree: "Bachelor of Technology (Hons.)",
  field: "Computer Science Engineering",
  specialization: "DevOps & Automation",
  institution: "UPES",
  period: "2018 - 2022",
};
