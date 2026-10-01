import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Database, Server, Zap, Brain, Sparkles } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Server className="text-blue-500" size={24} />,
      title: "Backend Architecture",
      desc: "Designing robust, scalable server-side architectures using Spring Boot and Core Java."
    },
    {
      icon: <Brain className="text-purple-500" size={24} />,
      title: "AI Development",
      desc: "Exploring and building with Generative AI, LLM APIs, Prompt Engineering, and RAG pipelines."
    },
    {
      icon: <Zap className="text-amber-500" size={24} />,
      title: "API Engineering",
      desc: "Building secure, high-throughput, and documented RESTful microservices for modern applications."
    },
    {
      icon: <Database className="text-emerald-500" size={24} />,
      title: "Data Management",
      desc: "Optimizing relational databases (MySQL, Oracle, PostgreSQL) for reliability and performance."
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles size={14} /> Background & Focus
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-6 text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed"
          >
            <p>
              I am a results-oriented <strong className="text-slate-900 dark:text-white font-semibold">Full Stack Developer & AI Enthusiast</strong> with hands-on experience in designing, building, testing, and scaling comprehensive web applications.
            </p>
            <p>
              My core strengths lie in <strong className="text-slate-900 dark:text-white font-semibold">Core Java, Spring Boot, Hibernate, and SQL databases</strong>, backed by a strong foundation in Object-Oriented Design, Microservices, and RESTful APIs.
            </p>
            <p>
              Driven by modern technological advancements, I am actively expanding my capabilities into <strong className="text-purple-600 dark:text-purple-400 font-semibold">AI Development</strong>—leveraging Large Language Models (LLMs), prompt engineering, AI agents, and RAG architectures to bridge reliable enterprise backend logic with smart, automated intelligence.
            </p>
            
            <div className="pt-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Why Work With Me?</h3>
              <ul className="space-y-3">
                {[
                  'Proven track record of improving API response times by 30-40%',
                  'Strong problem-solving and root-cause bottleneck debugging skills',
                  'Proactive learner actively integrating AI & automation into full-stack systems',
                  'Clean code advocate experienced with Agile/Scrum cross-functional teams'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="text-emerald-500 shrink-0 mt-1" size={19} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {highlights.map((item, idx) => (
                <div key={idx} className="bg-white dark:bg-[#121c35] p-6 rounded-2xl border border-slate-200 dark:border-blue-500/20 shadow-sm hover:shadow-xl hover:border-primary/50 dark:hover:border-primary/50 hover:-translate-y-1.5 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-slate-50 dark:bg-slate-800/80 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-6 rounded-2xl shadow-lg shadow-purple-500/15 flex items-center justify-between text-white">
              <div>
                <span className="text-3xl md:text-4xl font-extrabold tracking-tight">Full Stack + AI</span>
                <p className="text-blue-100 text-sm mt-1">Bridging Enterprise Backends with Intelligent AI Systems</p>
              </div>
              <div className="text-right">
                <span className="text-3xl md:text-4xl font-extrabold">2+</span>
                <p className="text-blue-100 text-xs uppercase tracking-wider font-semibold">Years Exp.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
