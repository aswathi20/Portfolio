import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Database, Server, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Server className="text-primary" size={24} />,
      title: "Backend Architecture",
      desc: "Designing robust, scalable server-side architectures using Spring Boot and Core Java."
    },
    {
      icon: <Database className="text-primary" size={24} />,
      title: "Data Management",
      desc: "Optimizing relational databases (MySQL, Oracle, PostgreSQL) for high performance."
    },
    {
      icon: <Zap className="text-primary" size={24} />,
      title: "API Development",
      desc: "Building secure, fast, and documented RESTful APIs for modern applications."
    }
  ];

  return (
    <section id="about" className="py-20 bg-light-bg dark:bg-dark-bg/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-primary">Me</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-6 text-slate-600 dark:text-slate-300 text-lg leading-relaxed"
          >
            <p>
              I am a detail-oriented <strong className="text-slate-800 dark:text-white">Full Stack Developer</strong> with hands-on experience in designing, developing, testing, and maintaining comprehensive software applications.
            </p>
            <p>
              My expertise lies in <strong className="text-slate-800 dark:text-white">Core Java, Spring Boot</strong>, and database management, with a strong foundational understanding of Object-Oriented Principles, RESTful APIs, and SQL modeling. 
            </p>
            <p>
              I thrive in Agile environments where debugging, performance optimization, and cross-functional collaboration are key to delivering seamless software solutions. Whether it is building a loan operating system or managing high-traffic sprints, I focus on writing clean, scalable, and maintainable code.
            </p>
            
            <div className="pt-6">
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Why Hire Me?</h3>
              <ul className="space-y-3">
                {['Proven track record of improving API response times by 30%', 'Strong debugging and bottleneck resolution skills', 'Clean code advocate with Agile/Scrum experience'].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 shrink-0 mt-1" size={20} />
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, idx) => (
                <div key={idx} className="glass-card-light dark:glass-card p-6 rounded-2xl shadow-sm hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:-translate-y-2 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">{item.desc}</p>
                </div>
              ))}
              
              <div className="bg-gradient-to-br from-primary to-purple-600 p-6 rounded-xl shadow-lg flex flex-col justify-center items-center text-white text-center">
                <span className="text-4xl font-bold mb-2">2+</span>
                <span className="font-medium">Years of Experience</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
