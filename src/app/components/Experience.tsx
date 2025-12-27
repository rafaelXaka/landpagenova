import { Briefcase, CheckCircle } from "lucide-react";
import { motion } from "motion/react";

export function Experience() {
  const responsibilities = [
    "Atuei em diversas empresas, sendo responsável pela manutenção e configuração de sistemas e hardware.",
    "Especialista em diagnóstico e resolução de problemas técnicos, garantindo a continuidade das operações.",
    "Experiência em suporte ao usuário e gerenciamento básico de redes.",
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="flex items-center gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-cyan-400 to-blue-500 p-2 rounded-lg">
            <Briefcase className="text-white" size={32} />
          </div>
          <h2 className="text-3xl sm:text-4xl text-white">Experiência Profissional</h2>
        </motion.div>

        <motion.div
          className="relative bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-400/10 to-transparent rounded-bl-full" />
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 relative z-10">
            <div>
              <h3 className="text-2xl text-white mb-2">Técnico em Informática</h3>
              <p className="text-cyan-400">2004 - Atual</p>
            </div>
            <div className="mt-4 sm:mt-0">
              <span className="bg-gradient-to-r from-cyan-400/10 to-blue-500/10 text-cyan-400 px-4 py-2 rounded-full border border-cyan-400/20 text-sm">
                20+ anos de experiência
              </span>
            </div>
          </div>

          <div className="space-y-4 relative z-10">
            {responsibilities.map((item, index) => (
              <motion.div
                key={index}
                className="flex gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <CheckCircle className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                <p className="text-slate-300">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}