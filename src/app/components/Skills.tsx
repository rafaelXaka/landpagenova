import { Code2, Server, Database, Wrench } from "lucide-react";
import { motion } from "motion/react";

export function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: "Front-end",
      skills: ["HTML", "CSS", "JavaScript/TypeScript", "React"],
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      icon: Server,
      title: "Back-end",
      skills: ["Node.js"],
      gradient: "from-blue-500 to-purple-600",
    },
    {
      icon: Database,
      title: "Banco de Dados/BaaS",
      skills: ["Supabase", "MongoDB", "MariaDB"],
      gradient: "from-purple-600 to-pink-500",
    },
    {
      icon: Wrench,
      title: "Outras",
      skills: ["Git/GitHub", "Princípios Full-stack"],
      gradient: "from-pink-500 to-cyan-400",
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="flex items-center gap-3 mb-12 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-cyan-400 to-blue-500 p-2 rounded-lg">
            <Code2 className="text-white" size={32} />
          </div>
          <h2 className="text-3xl sm:text-4xl text-white">Habilidades Técnicas</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                className="relative group bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 shadow-xl hover:border-cyan-400/30 transition-all overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />
                
                <div className={`bg-gradient-to-r ${category.gradient} p-2 rounded-lg inline-block mb-4`}>
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl text-white mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <motion.li
                      key={idx}
                      className="text-slate-300 flex items-center gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + idx * 0.05 }}
                    >
                      <span className={`w-1.5 h-1.5 bg-gradient-to-r ${category.gradient} rounded-full`}></span>
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}