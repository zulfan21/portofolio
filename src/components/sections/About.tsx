import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Palette, Globe, Database, Layout, Smartphone } from 'lucide-react';

const skills = [
  { name: 'HTML/CSS', level: 95, icon: Layout },
  { name: 'JavaScript', level: 90, icon: Code2 },
  { name: 'React', level: 88, icon: Code2 },
  { name: 'TypeScript', level: 85, icon: Code2 },
  { name: 'Node.js', level: 80, icon: Database },
  { name: 'UI/UX Design', level: 75, icon: Palette },
  { name: 'Mobile Dev', level: 70, icon: Smartphone },
  { name: 'DevOps', level: 65, icon: Globe },
];

const technologies = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Express', 'MongoDB',
  'PostgreSQL', 'Tailwind CSS', 'Git', 'Docker', 'AWS', 'Figma'
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-white dark:bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
            Tentang Saya
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Mari Berkenalan
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400">
            Saya adalah seorang developer yang selalu haus akan pengetahuan baru
            dan passionate dalam menciptakan solusi digital yang inovatif.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto lg:max-w-none">
              {/* Background Decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl rotate-6 opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl -rotate-3 opacity-10" />
              
              {/* Image Container */}
              <div className="relative bg-slate-100 dark:bg-slate-800 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://drive.google.com/file/d/1UQgRPcQTozUp97z2Hj81DAaJxL2W3XFY/view?usp=sharing"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                
                {/* Experience Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: 'spring' }}
                  className="absolute bottom-6 right-6 bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-xl"
                >
                  <div className="text-center">
                    <span className="block text-3xl font-bold text-blue-600">5+</span>
                    <span className="text-sm text-slate-600 dark:text-slate-400">Tahun<br/>Pengalaman</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Saya adalah Web Developer yang Fokus pada Kualitas
            </h3>
            
            <div className="space-y-4 text-slate-600 dark:text-slate-400 mb-8">
              <p>
                Dengan pengalaman lebih dari 5 tahun di dunia pengembangan web, saya telah
                membantu berbagai klien dan perusahaan untuk membangun aplikasi web yang
                modern, scalable, dan user-friendly.
              </p>
              <p>
                Saya percaya bahwa kode yang baik bukan hanya tentang fungsionalitas,
                tetapi juga tentang kebersihan, maintainability, dan performa. Setiap
                proyek yang saya kerjakan selalu saya approach dengan mindset tersebut.
              </p>
              <p>
                Selain coding, saya juga senang berbagi pengetahuan melalui blog dan
                komunitas developer. Saya percaya bahwa berbagi adalah cara terbaik
                untuk belajar dan berkembang bersama.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Progress */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-12">
            Skills & Expertise
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -5 }}
                className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <skill.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {skill.name}
                  </span>
                </div>
                
                <div className="relative">
                  <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    />
                  </div>
                  <span className="absolute right-0 -top-6 text-sm font-medium text-slate-600 dark:text-slate-400">
                    {skill.level}%
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
