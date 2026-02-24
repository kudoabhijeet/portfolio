import { Code, Database, Globe, Server, Smartphone, Wrench } from 'lucide-react';
import { motion } from 'motion/react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

export function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      icon: <Globe size={24} />,
      skills: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'Tailwind CSS', 'HTML/CSS'],
    },
    {
      title: 'Backend',
      icon: <Server size={24} />,
      skills: ['Node.js', 'Express', 'Python', 'Django', 'REST APIs', 'GraphQL'],
    },
    {
      title: 'Database',
      icon: <Database size={24} />,
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Firebase'],
    },
    {
      title: 'Mobile',
      icon: <Smartphone size={24} />,
      skills: ['React Native', 'Flutter', 'iOS', 'Android'],
    },
    {
      title: 'DevOps',
      icon: <Wrench size={24} />,
      skills: ['Docker', 'AWS', 'CI/CD', 'Kubernetes', 'Git', 'Linux'],
    },
    {
      title: 'Languages',
      icon: <Code size={24} />,
      skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'Go', 'C++'],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl tracking-tight mb-16">Skills & Technologies</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              className="p-6 border border-gray-200 rounded-2xl hover:border-primary hover:shadow-lg transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div 
                  className="p-2 bg-gray-100 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {category.icon}
                </motion.div>
                <h3 className="text-xl group-hover:text-primary transition-colors duration-300">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span 
                    key={i}
                    className="px-3 py-1.5 bg-gray-50 text-sm text-gray-700 rounded-lg hover:bg-primary hover:text-white cursor-pointer transition-colors duration-200"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}