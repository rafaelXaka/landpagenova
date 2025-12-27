import { Folder, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import dashboardImage from "figma:asset/9c9ddeec55e6ebf6d62cdbfa7a9bdccbd9bc63ce.png";
import landingImage from "figma:asset/556246beec09bf454c133e93e622e59c7d91fafc.png";

export function Projects() {
  const projects = [
    {
      title: "Sistema de Gestão para Estúdios de Tatuagem",
      description:
        "Sistema desenvolvido para atender as necessidades de 6 franquias de Estúdio de Tatuagem e piercing, onde pude desenvolver de forma livre e trazer solução para as principais dores da empresa. Atendimento eficaz e dinâmico, baixas automáticas e entradas simples no estoque, controle financeiro e possibilidades de expansão em planos mais completos (SaaS).",
      tags: ["React", "Node.js", "Supabase", "SaaS"],
      image: dashboardImage,
    },
    {
      title: "Landing Page com Sistema de Agendamento",
      description:
        "Landing Page com sistema de agendamento e Webhook integrados para solucionar mais algumas demandas dessa empresa, trazendo soluções ágeis e dinâmicas, pensado mobile first e com uma responsividade incrível.",
      tags: ["React", "Webhook", "Mobile First", "Responsive"],
      image: landingImage,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="flex items-center gap-3 mb-12 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-cyan-400 to-blue-500 p-2 rounded-lg">
            <Folder className="text-white" size={32} />
          </div>
          <h2 className="text-3xl sm:text-4xl text-white">Projetos em Destaque</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative bg-slate-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 shadow-xl hover:border-cyan-400/30 transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <Folder className="text-cyan-400 flex-shrink-0" size={28} />
                  <ExternalLink className="text-slate-400 hover:text-cyan-400 cursor-pointer transition-colors" size={20} />
                </div>

                <h3 className="text-xl text-white mb-3 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                <p className="text-slate-300 mb-4 leading-relaxed text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-cyan-400/10 text-cyan-400 px-3 py-1 rounded-full border border-cyan-400/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Gradient Border Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-purple-600/10 rounded-2xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}