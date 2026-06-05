import { useState } from "react";
import { Send, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { motion } from "motion/react";
import { personalInfo } from "../data/portfolio";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const socials = [
    { href: `mailto:${personalInfo.email}`, icon: <Mail size={20} />, label: personalInfo.email, external: false },
    { href: personalInfo.socials.github, icon: <Github size={20} />, label: "GitHub", external: true },
    { href: personalInfo.socials.linkedin, icon: <Linkedin size={20} />, label: "LinkedIn", external: true },
    { href: personalInfo.socials.twitter, icon: <Twitter size={20} />, label: "Twitter", external: true },
  ];

  const inputClasses =
    "w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 placeholder:text-gray-400 dark:placeholder:text-gray-500";

  return (
    <section id="contact" className="py-24 px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold tracking-tight mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              I&apos;m always interested in hearing about new projects and
              opportunities. Feel free to reach out!
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm mb-2">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className={inputClasses} placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm mb-2">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={inputClasses} placeholder="your.email@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm mb-2">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className={`${inputClasses} resize-none`} placeholder="Tell me about your project..." />
              </div>

              <motion.button
                type="submit"
                disabled={submitted}
                className="w-full px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:bg-green-600 disabled:cursor-not-allowed shadow-lg shadow-primary/20"
                whileHover={{ scale: submitted ? 1 : 1.02 }}
                whileTap={{ scale: submitted ? 1 : 0.98 }}
              >
                {submitted ? "Message Sent! ✓" : (<>Send Message <Send size={18} /></>)}
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl mb-4">Connect with me</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Find me on these platforms or send me an email directly.
            </p>

            <div className="space-y-4">
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.external ? "_blank" : undefined}
                  rel={social.external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm dark:shadow-gray-900/50"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {social.icon}
                  </motion.div>
                  <span>{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}