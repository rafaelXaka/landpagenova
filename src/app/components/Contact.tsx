import { Mail, Linkedin, Github, Send } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";

export function Contact() {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "rafaelcardozodev@gmail.com",
      href: "mailto:rafaelcardozodev@gmail.com",
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/xakadev",
      href: "https://linkedin.com/in/xakadev",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/rafaelXaka",
      href: "https://github.com/rafaelXaka",
      gradient: "from-purple-600 to-pink-500",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl text-white mb-4">
            Vamos <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">trabalhar juntos</span>!
          </h2>
          <p className="text-slate-300 text-lg">
            Estou sempre aberto a novas oportunidades e desafios. Entre em contato!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactLinks.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={index}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="relative group bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 shadow-xl hover:border-cyan-400/30 transition-all overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${contact.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />
                <div className={`bg-gradient-to-r ${contact.gradient} p-2 rounded-lg inline-block mb-3`}>
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-white mb-2">{contact.label}</h3>
                <p className="text-slate-400 text-sm break-all">{contact.value}</p>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Button
            onClick={() => window.location.href = "mailto:rafaelcardozodev@gmail.com"}
            className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white shadow-lg shadow-cyan-400/30 hover:shadow-xl hover:shadow-cyan-400/40 transition-all"
          >
            <Send className="mr-2" size={18} />
            Enviar Email
          </Button>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="mt-16 pt-8 border-t border-slate-700/50 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-slate-400">
            © 2025 Rafael Cardozo. Desenvolvedor Full Stack.
          </p>
        </motion.div>
      </div>
    </section>
  );
}