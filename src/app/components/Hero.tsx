import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Software Engineer
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Building elegant solutions to complex problems. Passionate about
            creating scalable applications and clean code.
          </motion.p>
        </div>

        <motion.div
          className="flex items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.a
            href="https://github.com/kudoabhijeet"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="GitHub"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={24} />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/kudoabhijeet"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="LinkedIn"
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin size={24} />
          </motion.a>
          <motion.a
            href="mailto:a@ku2.me"
            className="p-3 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Email"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={24} />
          </motion.a>
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-4 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.button
            onClick={() => scrollToSection("projects")}
            className="px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors flex items-center gap-2"
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowRight size={18} />
            </motion.div>
          </motion.button>
          <motion.button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 border border-gray-300 rounded-full hover:border-primary hover:text-primary transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
