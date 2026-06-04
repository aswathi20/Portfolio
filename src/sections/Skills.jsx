import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Layers, Layout, Database, Wrench, RefreshCw } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Core Programming",
      icon: <Terminal className="text-primary mr-2" size={20} />,
      skills: ["Core Java", "J2EE", "SQL", "OOP", "Collections", "Exception Handling", "Multithreading", "JVM Basics"]
    },
    {
      title: "Frameworks & Libraries",
      icon: <Layers className="text-primary mr-2" size={20} />,
      skills: ["Spring", "Spring Boot", "Hibernate", "JPA", "JDBC", "Redux", "Axios", "Framer Motion", "JUnit"]
    },
    {
      title: "Front-End & Web Tech",
      icon: <Layout className="text-primary mr-2" size={20} />,
      skills: ["React.js", "JavaScript", "HTML", "CSS", "Tailwind CSS", "REST APIs"]
    },
    {
      title: "Databases",
      icon: <Database className="text-primary mr-2" size={20} />,
      skills: ["MySQL", "PostgreSQL", "Oracle SQL"]
    },
    {
      title: "Tools & Environment",
      icon: <Wrench className="text-primary mr-2" size={20} />,
      skills: ["Git", "Maven", "Eclipse", "VS Code", "Postman"]
    },
    {
      title: "Methodologies",
      icon: <RefreshCw className="text-primary mr-2" size={20} />,
      skills: ["Agile", "Scrum", "Debugging", "Performance Optimization"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical <span className="text-primary">Skills</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            My technology stack is focused on building robust, full-stack applications from polished frontend interfaces to highly efficient backend data management layers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
             <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-dark-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-6 flex items-center border-b border-slate-100 dark:border-slate-800 pb-3">
                {category.icon}
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span 
                    key={skillIdx} 
                    className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:border-primary cursor-default transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
