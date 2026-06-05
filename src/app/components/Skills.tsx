'use client';

import { Code, Database, Globe, Server, Smartphone, Wrench } from 'lucide-react';
import { motion } from 'motion/react';
import {
  siCplusplus,
  siDjango,
  siDocker,
  siGo,
  siGooglecloud,
  siHtml5,
  siJavascript,
  siKubernetes,
  siMongodb,
  siMysql,
  siNestjs,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siPython,
  siReact,
  siRedis,
  siRedux,
  siTailwindcss,
  siTypescript,
} from 'simple-icons';
import { skillCategories } from '../data/portfolio';

type SimpleIcon = { path: string; hex: string };

const SKILL_ICONS: Record<string, SimpleIcon> = {
  JavaScript: siJavascript,
  TypeScript: siTypescript,
  Go: siGo,
  Python: siPython,
  'C++': siCplusplus,
  React: siReact,
  'Next.js': siNextdotjs,
  Redux: siRedux,
  'Tailwind CSS': siTailwindcss,
  'HTML/CSS': siHtml5,
  'Node.js': siNodedotjs,
  NestJS: siNestjs,
  Django: siDjango,
  PostgreSQL: siPostgresql,
  MongoDB: siMongodb,
  Redis: siRedis,
  MySQL: siMysql,
  Docker: siDocker,
  Kubernetes: siKubernetes,
  GCP: siGooglecloud,
};

const getCategoryIcon = (title: string) => {
  switch (title.toLowerCase()) {
    case 'languages': return <Code size={24} />;
    case 'frontend': return <Globe size={24} />;
    case 'backend': return <Server size={24} />;
    case 'database': return <Database size={24} />;
    case 'cloud & devops': return <Wrench size={24} />;
    case 'core cs': return <Smartphone size={24} />;
    default: return <Code size={24} />;
  }
};

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">Skills & Technologies</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="p-6 border border-gray-200 dark:border-gray-700 rounded-2xl hover:border-primary hover:shadow-lg dark:hover:shadow-primary/5 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {getCategoryIcon(category.title)}
                </div>
                <h3 className="text-xl group-hover:text-primary transition-colors duration-300">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => {
                  const icon = SKILL_ICONS[skill];
                  return (
                    <motion.span
                      key={i}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-300 rounded-lg hover:bg-primary hover:text-white cursor-pointer transition-colors duration-200"
                      whileHover={{ scale: 1.08, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {icon && (
                        <svg viewBox="0 0 24 24" width={13} height={13} className="shrink-0 fill-current opacity-75">
                          <path d={icon.path} />
                        </svg>
                      )}
                      {skill}
                    </motion.span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
