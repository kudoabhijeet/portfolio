import { Code, Database, Globe, Server, Smartphone, Wrench } from 'lucide-react';
import { motion } from 'motion/react';
import { skillCategories } from '../data/portfolio';

// Map icons dynamically based on category title
const getIconForCategory = (title: string) => {
  switch (title.toLowerCase()) {
    case 'languages':
      return <Code size={24} />;
    case 'frontend':
      return <Globe size={24} />;
    case 'backend':
      return <Server size={24} />;
    case 'database':
      return <Database size={24} />;
    case 'cloud & devops':
      return <Wrench size={24} />;
    case 'core cs':
      return <Smartphone size={24} />;
    default:
      return <Code size={24} />;
  }
};

export function Skills() {

  return (
    <section id="skills" className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl tracking-tight mb-16">Skills & Technologies</h2>
        
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
                <motion.div 
                  className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {getIconForCategory(category.title)}
                </motion.div>
                <h3 className="text-xl group-hover:text-primary transition-colors duration-300">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span 
                    key={i}
                    className="px-3 py-1.5 bg-gray-50 dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-300 rounded-lg hover:bg-primary hover:text-white cursor-pointer transition-colors duration-200"
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