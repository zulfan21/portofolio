import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "john.doe@example.com",
    href: "mailto:john.doe@example.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+62 812 3456 7890",
    href: "tel:+6281234567890",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Jakarta, Indonesia",
    href: "#",
  },
];

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("https://formspree.io/f/xkoqlkdp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          subject: "Pesan dari Portfolio Website",
        }),
      });

      if (res.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Gagal mengirim pesan ❌");
      }
    } catch (error) {
      alert("Terjadi error ❌");
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-white dark:bg-slate-900">
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
            Hubungi Saya
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Mari Bekerja Sama
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400">
            Punya ide project menarik atau ingin berkolaborasi? Jangan ragu
            untuk menghubungi saya. Saya selalu terbuka untuk diskusi dan
            peluang baru.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Informasi Kontak
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              Anda dapat menghubungi saya melalui berbagai channel berikut. Saya
              akan berusaha merespons secepat mungkin.
            </p>

            {/* Contact Details */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors group"
                >
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors">
                    <item.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {item.label}
                    </p>
                    <p className="font-medium text-slate-900 dark:text-white">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                Ikuti Saya
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Kirim Pesan
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-xl p-6 text-center"
                >
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-green-800 dark:text-green-400 mb-2">
                    Pesan Terkirim!
                  </h4>
                  <p className="text-green-700 dark:text-green-500">
                    Terima kasih telah menghubungi saya. Saya akan merespons
                    secepat mungkin.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label
                      htmlFor="name"
                      className="text-slate-700 dark:text-slate-300"
                    >
                      Nama Lengkap
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Masukkan nama Anda"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-2 bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="email"
                      className="text-slate-700 dark:text-slate-300"
                    >
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Masukkan email Anda"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-2 bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="message"
                      className="text-slate-700 dark:text-slate-300"
                    >
                      Pesan
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tulis pesan Anda di sini..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="mt-2 bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 focus:border-blue-500 focus:ring-blue-500 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 rounded-xl font-medium transition-all duration-300 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Kirim Pesan
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
