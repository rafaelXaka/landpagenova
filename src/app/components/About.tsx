import { User } from "lucide-react";
import { motion } from "motion/react";

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="flex items-center gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-cyan-400 to-blue-500 p-2 rounded-lg">
            <User className="text-white" size={32} />
          </div>
          <h2 className="text-3xl sm:text-4xl text-white">Sobre Mim</h2>
        </motion.div>

        <motion.div
          className="relative bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {/* Decorative Corner Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-400/10 to-transparent rounded-bl-full" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-tr-full" />
          
          <p className="text-slate-300 text-lg leading-relaxed relative z-10">
            Sou um profissional de TI com uma vasta experiência desde 2004, quando iniciei minha carreira 
            como Técnico em Informática e atuei em diversas empresas. Atualmente, estou em transição e 
            aprimoramento para a área de desenvolvimento de software, cursando Análise e Desenvolvimento 
            de Sistemas (ADS) na Estácio de Sá. Minha paixão é unir minha experiência prática em 
            infraestrutura com as tecnologias de programação mais atuais, como HTML, CSS, 
            JavaScript/TypeScript, React, Node.js e Supabase, para criar soluções web robustas e funcionais. 
            Estou em busca de uma oportunidade desafiadora para aplicar minhas habilidades e evoluir 
            profissionalmente.
          </p>
        </motion.div>
      </div>
    </section>
  );
}