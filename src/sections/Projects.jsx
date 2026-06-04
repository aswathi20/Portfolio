import React from 'react';
import { motion } from 'framer-motion';
import { Server, Shield, Activity, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Loan Management System API",
      icon: <Server className="text-blue-500" size={32} />,
      desc: "Robust backend system for processing high-volume loan applications, featuring complex business rule validations and automated risk assessments.",
      tags: ["Spring Boot", "Oracle SQL", "REST API", "JUnit"],
      metrics: "Processed 10k+ daily transactions; Optimized queries reducing latency by 40%",
      links: { github: "https://github.com/dummy", livesite: "#" }
    },
    {
      title: "Secure Auth & RBAC Service",
      icon: <Shield className="text-green-500" size={32} />,
      desc: "Microservice dedicated to secure user authentication and Role-Based Access Control utilizing stateless tokens for distributed systems.",
      tags: ["Spring Security", "JWT", "OAuth2", "MySQL"],
      metrics: "Zero reported breaches; Scalable architecture handling 50k+ concurrent sessions",
      links: { github: "https://github.com/dummy", livesite: "#" }
    },
    {
      title: "Workflow Task Manager API",
      icon: <Activity className="text-purple-500" size={32} />,
      desc: "A high-performance CRUD API for agile sprint management. Complete with pagination, relationship mapping, and eager/lazy fetching optimization.",
      tags: ["Core Java", "Hibernate", "JPA", "PostgreSQL"],
      metrics: "Improved data retrieval speed by 35% through Hibernate caching strategies",
      links: { github: "https://github.com/dummy", livesite: "#" }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Backend <span className="text-primary">Showcase</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A selection of complex backend architectures showcasing clean code, strong OOP design, and performance optimizations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card-light dark:glass-card rounded-2xl overflow-hidden hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:-translate-y-2 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-500 group flex flex-col h-full relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="p-8 pb-0 relative z-10">
                <div className="mb-4">
                  {project.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                  {project.desc}
                </p>
              </div>

              <div className="p-8 pt-0 flex-1 flex flex-col justify-end">
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg mb-6 border-l-4 border-primary">
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300 italic">
                    "{project.metrics}"
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-xs font-semibold px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-primary rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">
                    <FaGithub size={18} /> Code
                  </a>
                  <a href={project.links.livesite} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">
                    <ExternalLink size={18} /> Documentation
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
