import { motion } from "motion/react";
import { Code2, Coffee, Rocket } from "lucide-react";
import { aboutParagraphs } from "../data/portfolio";

export function About() {
  const highlights = [
    {
      icon: <Code2 size={20} />,
      label: "Clean Code",
      description: "Writing maintainable, scalable solutions",
    },
    {
      icon: <Rocket size={20} />,
      label: "Performance",
      description: "Optimizing for speed and efficiency",
    },
    {
      icon: <Coffee size={20} />,
      label: "Continuous Learning",
      description: "Always exploring new technologies",
    },
  ];

  return (
    <section id="about" className="py-24 px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl tracking-tight mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-12">
          {aboutParagraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-primary/30 hover:shadow-lg dark:hover:shadow-primary/5 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 * index }}
              whileHover={{ y: -4 }}
            >
              <div className="p-2.5 bg-primary/10 text-primary rounded-lg w-fit mb-3 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg font-medium mb-1">{item.label}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
