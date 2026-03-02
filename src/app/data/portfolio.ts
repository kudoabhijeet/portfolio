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
    description: [
      "Led full-stack development for OmniCentral and EmaarMind, enterprise-grade digital platforms for Emaar, using React, Node.js, TypeScript, and PostgreSQL/MongoDB",
      "Designed and implemented RESTful APIs and real-time event-driven features, improving system performance and reducing latency across client-server communications",
      "Developed and integrated third-party APIs, optimized frontend component reusability, and enforced UI consistency through design system and accessibility standards",
      "Modernized legacy infrastructure for Emaar Malls by converting a .NET monolith into a NestJS-based microservices architecture",
    ],
  },
  {
    title: "Software Engineer - Full Stack",
    company: "Advanced Adventure Gear Technologies",
    period: "Jun 2024 - Feb 2025",
    current: false,
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
    description: [
      "Deployed TCS ION ERP across 3 branches, automating 10+ workflows and reducing operational delays by 40%",
      "Gathered business requirements, led end-to-end solution delivery, and supported post-launch operations",
      "Improved internal tooling performance through optimized queries and REST API architecture",
    ],
  },
];

export const projects = [
  {
    title: "OmniCentral & EmaarMind",
    description:
      "Enterprise-grade digital platforms for Emaar — built with React, Node.js, TypeScript, and PostgreSQL/MongoDB. Features real-time event-driven architecture and third-party API integrations.",
    technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "MongoDB"],
    imageUrl:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=450&fit=crop&q=80",
  },
  {
    title: "JourneyX",
    description:
      "Cross-platform travel management app that reached 1,000+ installs within 90 days. Scalable backend microservices with 30% improvement in API latency.",
    technologies: ["Node.js", "Go", "PostgreSQL", "Redis", "React Native"],
    imageUrl:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=450&fit=crop&q=80",
  },
  {
    title: "Emaar Malls Modernization",
    description:
      "Converted a legacy .NET monolith into a NestJS-based microservices architecture, enhancing scalability, modularity, and deployment efficiency.",
    technologies: ["NestJS", "TypeScript", "Docker", "Microservices"],
    imageUrl:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=450&fit=crop&q=80",
  },
  {
    title: "TCS ION ERP Deployment",
    description:
      "Deployed enterprise ERP across 3 branches, automating 10+ workflows and reducing operational delays by 40% through optimized queries and REST APIs.",
    technologies: ["REST APIs", "SQL", "ERP", "Automation"],
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop&q=80",
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
