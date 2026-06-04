import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Software Developer – Loan Operating System (LOS)",
      company: "Whitestone Software Solutions",
      duration: "June 2025 – Jan 2026",
      location: "Dharmapuri, India",
      responsibilities: [
        "Developed critical backend modules using Java and Spring Boot for a high-volume loan processing platform.",
        "Designed and implemented RESTful APIs ensuring robust data exchange.",
        "Managed database operations and query optimization using Oracle and MySQL.",
        "Collaborated within Agile teams, resolving critical bugs and optimizing processing algorithms."
      ]
    },
    {
      role: "Software Developer – Sprint Management System",
      company: "Whitestone Software Solutions",
      duration: "June 2025 – Dec 2025",
      location: "Dharmapuri, India",
      responsibilities: [
        "Built core backend services utilizing Spring Boot, Hibernate, and JPA for efficient data mapping.",
        "Created scalable REST APIs and collaborated with the frontend team for seamless integration.",
        "Handled complex relational database models using MySQL and PostgreSQL.",
        "Provided production support and spearheaded bug fixing to maintain 99.9% uptime."
      ]
    },
    {
      role: "Engineering Trainee",
      company: "Mahendra Next Wealth Pvt Ltd",
      duration: "Traning phase",
      location: "India",
      responsibilities: [
        "Supported backend workflow automation processes, reducing manual data entry efforts.",
        "Ensured data accuracy across multiple system integrations.",
        "Gained practical exposure by working with cross-functional development teams."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-light-bg dark:bg-dark-bg/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional <span className="text-primary">Experience</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400">
            A timeline of my professional journey in software engineering.
          </p>
        </motion.div>

        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-0">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="mb-12 pl-8 relative"
            >
              <motion.div 
                whileInView={{ scale: [1, 1.5, 1], boxShadow: ["0px 0px 0px rgba(59,130,246,0)", "0px 0px 20px rgba(59,130,246,1)", "0px 0px 0px rgba(59,130,246,0)"] }}
                transition={{ duration: 1 }}
                viewport={{ once: false, margin: "-100px" }}
                className="absolute w-6 h-6 bg-primary rounded-full border-4 border-light-bg dark:border-dark-bg -left-[14px] top-1 z-10"
              />
              
              <div className="glass-card-light dark:glass-card p-6 rounded-2xl shadow-sm hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:-translate-y-2 transition-all duration-300 relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{exp.role}</h3>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mb-4 text-sm font-medium text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <Briefcase size={16} className="text-primary" />
                    <span>{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-primary" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-primary" />
                    <span>{exp.location}</span>
                  </div>
                </div>
                
                <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-300">
                  {exp.responsibilities.map((resp, respIdx) => (
                    <li key={respIdx} className="leading-relaxed">{resp}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Experience;
