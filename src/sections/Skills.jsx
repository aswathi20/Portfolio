import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Layers, Layout, Database, Wrench, RefreshCw, Brain, Sparkles, Rocket } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      highlight: true,
      badge: "Actively Learning & Building",
      icon: <Brain className="text-purple-500 mr-2" size={22} />,
      skills: [
        "Generative AI",
        "Prompt Engineering",
        "LLM Integration",
        "LangChain",
        "AI Agents & Automation",
        "Python for AI",
        "OpenAI & Gemini APIs",
        "RAG Architecture",
        "Vector Databases",
        "Hugging Face",
        "Machine Learning Basics"
      ]
    },
    {
      title: "Core Programming",
      icon: <Terminal className="text-primary mr-2" size={20} />,
      skills: ["Core Java", "J2EE", "SQL", "OOP Concepts", "Collections Framework", "Exception Handling", "Multithreading", "JVM Basics"]
    },
    {
      title: "Frameworks & Libraries",
      icon: <Layers className="text-primary mr-2" size={20} />,
      skills: ["Spring", "Spring Boot", "Hibernate", "JPA", "JDBC", "Redux", "Axios", "Framer Motion", "JUnit"]
    },
    {
      title: "Front-End & Web Tech",
      icon: <Layout className="text-primary mr-2" size={20} />,
      skills: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "REST APIs"]
    },
    {
      title: "Databases & Storage",
      icon: <Database className="text-primary mr-2" size={20} />,
      skills: ["MySQL", "PostgreSQL", "Oracle SQL", "Query Optimization", "Relational Modeling"]
    },
    {
      title: "Tools & Environment",
      icon: <Wrench className="text-primary mr-2" size={20} />,
      skills: ["Git & GitHub", "Maven", "Eclipse", "VS Code", "Postman", "Vite"]
    },
    {
      title: "Methodologies & Practices",
      icon: <RefreshCw className="text-primary mr-2" size={20} />,
      skills: ["Agile & Scrum", "Clean Architecture", "Debugging", "Performance Optimization", "CI/CD Basics"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50/50 dark:bg-slate-900/30 relative overflow-hidden">
      {/* Background ambient decorative shapes */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles size={14} /> Technical Stack & Horizons
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-base md:text-lg">
            A comprehensive technical foundation spanning enterprise full-stack software development with an active expansion into modern Artificial Intelligence and intelligent systems.
          </p>
        </motion.div>

        {/* Learning AI Highlight Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 p-5 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-blue-500/20 dark:border-purple-500/30 flex flex-col md:flex-row items-center justify-between gap-4 backdrop-blur-md"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-purple-500/25">
              <Rocket size={24} />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  Currently Upskilling & Learning AI Development
                </h4>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 animate-pulse">
                  ● In Progress
                </span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                Actively learning and building with Generative AI, LLM APIs (OpenAI/Gemini), Prompt Engineering, and RAG pipelines to integrate intelligent automation into enterprise backend systems.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => {
            const isHighlight = category.highlight;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`rounded-2xl p-6 transition-all duration-300 relative group flex flex-col justify-between ${
                  isHighlight 
                    ? 'bg-gradient-to-b from-purple-500/5 via-blue-500/5 to-transparent dark:bg-gradient-to-b dark:from-purple-950/30 dark:via-blue-950/20 dark:to-slate-900/80 border-2 border-purple-500/40 shadow-lg shadow-purple-500/10 dark:shadow-purple-900/20 md:col-span-2 lg:col-span-1' 
                    : 'bg-white dark:bg-[#131d33] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-primary/50 dark:hover:border-primary/50'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/80 pb-3 mb-5">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center">
                      {category.icon}
                      {category.title}
                    </h3>
                    {category.badge && (
                      <span className="text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-purple-500/15 text-purple-600 dark:text-purple-300 border border-purple-500/30">
                        {category.badge}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIdx) => (
                      <span 
                        key={skillIdx} 
                        className={`px-3 py-1.5 text-sm font-medium rounded-lg border transition-all duration-200 cursor-default ${
                          isHighlight
                            ? 'bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-200 border-purple-200 dark:border-purple-800/60 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600'
                            : 'bg-slate-100/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700/80 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:border-primary'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {isHighlight && (
                  <div className="mt-4 pt-3 border-t border-purple-500/20 text-xs text-purple-600 dark:text-purple-300 flex items-center gap-1.5 font-medium">
                    <Sparkles size={14} /> Growing skill set for modern intelligent applications
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
