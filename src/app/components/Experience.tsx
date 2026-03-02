import { Briefcase, Calendar } from "lucide-react";
import { motion } from "motion/react";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  current?: boolean;
}

export function Experience() {
  const experiences: ExperienceItem[] = [
    {
      title: "Senior Software Engineer",
      company: "Tech Company",
      period: "2023 - Present",
      current: true,
      description: [
        "Led development of microservices architecture serving 1M+ users",
        "Mentored junior developers and conducted code reviews",
        "Improved application performance by 40% through optimization",
      ],
    },
    {
      title: "Software Engineer",
      company: "Startup Inc",
      period: "2021 - 2023",
      description: [
        "Built and maintained full-stack web applications using React and Node.js",
        "Collaborated with design team to implement responsive UI components",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
      ],
    },
    {
      title: "Junior Developer",
      company: "Digital Agency",
      period: "2019 - 2021",
      description: [
        "Developed client websites and web applications",
        "Worked with REST APIs and third-party integrations",
        "Participated in agile development processes",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl tracking-tight mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div
                className={`absolute -left-2 top-0 w-4 h-4 rounded-full ${
                  exp.current
                    ? "bg-primary ring-4 ring-primary/20"
                    : "bg-gray-800 dark:bg-gray-300"
                }`}
              />
              <div className="mb-2 flex items-start justify-between flex-wrap gap-2">
                <div>
                  <h3 className="text-xl mb-1">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-2">
                    <Briefcase size={16} />
                    <span>{exp.company}</span>
                    {exp.current && (
                      <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Calendar size={16} />
                  <span>{exp.period}</span>
                </div>
              </div>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
