import { ArrowRight, FileText, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";
import { personalInfo } from "../data/portfolio";

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
      className="min-h-screen flex items-center justify-center px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-emerald-50/40 dark:from-gray-950 dark:via-gray-900 dark:to-emerald-950/40"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/8 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0], x: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {personalInfo.availableBadge && (
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
              Available for opportunities
            </span>
          </motion.div>
        )}

        <div className="mb-6">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {personalInfo.firstName}{" "}
            <span className="bg-gradient-to-r from-primary via-emerald-400 to-teal-500 bg-clip-text text-transparent">
              {personalInfo.lastName}
            </span>
          </motion.h1>
          <motion.p
            className="text-2xl md:text-3xl text-gray-400 dark:text-gray-500 tracking-wide font-light mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          >
            {personalInfo.title}
          </motion.p>
          <motion.p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            {personalInfo.tagline}
          </motion.p>
        </div>

        <motion.div
          className="flex items-center justify-center gap-3 mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <motion.a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white rounded-full transition-all duration-200"
            aria-label="GitHub"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={22} />
          </motion.a>
          <motion.a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white rounded-full transition-all duration-200"
            aria-label="LinkedIn"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin size={22} />
          </motion.a>
          <motion.a
            href={`mailto:${personalInfo.email}`}
            className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white rounded-full transition-all duration-200"
            aria-label="Email"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={22} />
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
            className="px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors flex items-center gap-2 shadow-lg shadow-primary/25"
            whileHover={{ scale: 1.05, y: -2 }}
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
            className="px-8 py-3 border border-gray-300 dark:border-gray-700 rounded-full hover:border-primary hover:text-primary transition-colors"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.button>
          <motion.a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-gray-300 dark:border-gray-700 rounded-full hover:border-primary hover:text-primary transition-colors flex items-center gap-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FileText size={18} />
            View Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
