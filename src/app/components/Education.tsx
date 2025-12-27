import { GraduationCap, Award } from "lucide-react";
import { motion } from "motion/react";

export function Education() {
  const courses = [
    "HTML Developer (Dio.Web)",
    "CSS Developer (Dio.Web)",
    "Javascript Developer (Dio.Web)",
    "REACT Developer (Dio.Web)",
    "Typescript Fullstack (Dio.Web)",
    "Bootcamp Fullstack Developer (Dio.Web)",
    "UX/UI Design (Origamid)",
    "N8N e fundamentos de Webhook",
    "Princípios DevOps",
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="flex items-center gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-cyan-400 to-blue-500 p-2 rounded-lg">
            <GraduationCap className="text-white" size={32} />
          </div>
          <h2 className="text-3xl sm:text-4xl text-white">Educação & Cursos</h2>
        </motion.div>

        <div className="space-y-6">
          {/* Graduação */}
          <motion.div
            className="relative bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-xl overflow-hidden group hover:border-cyan-400/30 transition-colors"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-400/5 to-transparent rounded-bl-full group-hover:from-cyan-400/10 transition-colors" />
            <div className="flex items-start gap-4 relative z-10">
              <div className="bg-gradient-to-r from-cyan-400 to-blue-500 p-2 rounded-lg">
                <GraduationCap className="text-white flex-shrink-0" size={28} />
              </div>
              <div>
                <h3 className="text-xl text-white mb-2">Graduação</h3>
                <p className="text-cyan-400 mb-2">Análise e Desenvolvimento de Sistemas (ADS)</p>
                <p className="text-slate-300">Estácio de Sá - Em andamento</p>
              </div>
            </div>
          </motion.div>

          {/* Formação Técnica */}
          <motion.div
            className="relative bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-xl overflow-hidden group hover:border-cyan-400/30 transition-colors"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/5 to-transparent rounded-bl-full group-hover:from-purple-500/10 transition-colors" />
            <div className="flex items-start gap-4 relative z-10">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg">
                <Award className="text-white flex-shrink-0" size={28} />
              </div>
              <div>
                <h3 className="text-xl text-white mb-2">Formação Técnica</h3>
                <p className="text-cyan-400 mb-2">Técnico em Informática</p>
                <p className="text-slate-300">Concluído em 2004</p>
              </div>
            </div>
          </motion.div>

          {/* Cursos e Certificações */}
          <motion.div
            className="relative bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-xl overflow-hidden group hover:border-cyan-400/30 transition-colors"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/5 to-transparent rounded-bl-full group-hover:from-blue-500/10 transition-colors" />
            <div className="flex items-start gap-4 relative z-10">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-400 p-2 rounded-lg">
                <Award className="text-white flex-shrink-0" size={28} />
              </div>
              <div className="w-full">
                <h3 className="text-xl text-white mb-4">Cursos & Certificações</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {courses.map((course, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.05 }}
                    >
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0"></span>
                      <span className="text-slate-300">{course}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}