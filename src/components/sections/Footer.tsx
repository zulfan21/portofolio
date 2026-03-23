import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, ArrowUp } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/zulfan21', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/maulana-zulfan', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com/zulfanzka', label: 'Instagram' },
];

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export function Footer() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">Portfolio.</h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Web Developer & Software Engineer yang passionate dalam membangun
              aplikasi web modern dan user-friendly.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 bg-slate-800 rounded-lg text-slate-400 hover:bg-blue-600 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <ul className="space-y-3 text-slate-400">
              <li>
                <a
                  href="mailto:maulanazulfan1604@gmail.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  maulanazulfan1604@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+6285710571023"
                  className="hover:text-blue-400 transition-colors"
                >
                  +62 857 1057 1023
                </a>
              </li>
              <li>Bogor, Indonesia</li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-slate-400 text-sm flex items-center gap-1"
            >
              © {new Date().getFullYear()} Maulana Zulfan Azka.
            </motion.p>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
