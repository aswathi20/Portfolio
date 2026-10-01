import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Software Developer – Loan Operating System (LOS)",
      company: "Whitestone Software Solutions",
      duration: "June 2025 – Jan 2026",
      location: "Dharmapuri, India",
      technologies: ["Java", "Spring Boot", "REST APIs", "Oracle SQL", "MySQL", "Agile"],
      responsibilities: [
        "Developed critical backend modules using Java and Spring Boot for a high-volume loan processing platform.",
        "Designed and implemented RESTful APIs ensuring robust and secure data exchange.",
        "Managed database operations, relational schemas, and query optimization using Oracle and MySQL.",
        "Collaborated within Agile teams, resolving critical production bottlenecks and optimizing processing algorithms."
      ]
    },
    {
      role: "Software Developer – Sprint Management System",
      company: "Whitestone Software Solutions",
      duration: "June 2025 – Dec 2025",
      location: "Dharmapuri, India",
      technologies: ["Spring Boot", "Hibernate", "JPA", "PostgreSQL", "MySQL", "REST APIs"],
      responsibilities: [
        "Built core backend services utilizing Spring Boot, Hibernate, and JPA for high-performance entity mapping.",
        "Created scalable REST APIs and partnered with frontend engineers for smooth seamless integration.",
        "Handled complex relational database models using PostgreSQL and MySQL.",
        "Provided production support and led debugging initiatives to maintain 99.9% application uptime."
      ]
    },
    {
      role: "Engineering Trainee",
      company: "Mahendra Next Wealth Pvt Ltd",
      duration: "Training Phase",
      location: "India",
      technologies: ["Workflow Automation", "Process Engineering", "Data Verification", "Cross-Functional Collaboration"],
      responsibilities: [
        "Supported backend workflow automation processes, significantly reducing manual data entry efforts.",
        "Ensured data precision and accuracy across multi-system data integrations.",
        "Gained direct practical exposure collaborating with cross-functional software development teams."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-slate-950 dark:via-[#0c1429] dark:to-slate-950">
      {/* Decorative ambient color spots (No dull grey) */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/3 right-10 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Award size={14} /> Career Milestone
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 dark:text-slate-300 max-w-xl mx-auto text-base md:text-lg">
            A track record of engineering scalable enterprise solutions, building reliable backend architectures, and driving system efficiency.
          </p>
        </motion.div>

        {/* Timeline wrapper with glowing gradient line */}
        <div className="relative pl-6 md:pl-8 ml-2 md:ml-4">
          {/* Gradient Vertical Line */}
          <div className="absolute left-0 top-3 bottom-3 w-1 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.4)]"></div>

          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="mb-12 relative"
            >
              {/* Glowing Timeline Marker */}
              <div className="absolute -left-[30px] md:-left-[38px] top-1.5 w-6 h-6 rounded-full bg-blue-600 dark:bg-blue-500 border-4 border-white dark:border-[#0c1429] shadow-[0_0_12px_rgba(59,130,246,0.6)] flex items-center justify-center z-10">
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>
              
              {/* Vibrant Experience Card (No Dull Grey) */}
              <div className="bg-white dark:bg-[#121c35] p-7 rounded-2xl border border-blue-100 dark:border-blue-500/20 shadow-xl shadow-blue-500/5 dark:shadow-black/40 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-400 dark:hover:border-blue-400 transition-all duration-300 relative group overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-80 group-hover:opacity-100 transition-opacity"></div>
                
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  {exp.role}
                </h3>
                
                {/* Vibrant Badges */}
                <div className="flex flex-wrap items-center gap-2.5 mb-5 text-xs font-semibold">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-300 border border-blue-500/25">
                    <Briefcase size={14} className="text-blue-500" />
                    {exp.company}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-300 border border-purple-500/25">
                    <Calendar size={14} className="text-purple-500" />
                    {exp.duration}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/25">
                    <MapPin size={14} className="text-emerald-500" />
                    {exp.location}
                  </span>
                </div>
                
                {/* Responsibilities list with crisp text and colorful bullet checks */}
                <ul className="space-y-3 mb-6">
                  {exp.responsibilities.map((resp, respIdx) => (
                    <li key={respIdx} className="flex items-start gap-3 text-slate-700 dark:text-slate-200 text-sm md:text-base leading-relaxed">
                      <CheckCircle2 size={18} className="text-blue-500 dark:text-blue-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                {exp.technologies && (
                  <div className="pt-4 border-t border-slate-100 dark:border-blue-900/40 flex flex-wrap gap-2 items-center">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 mr-1">
                      Tech Stack:
                    </span>
                    {exp.technologies.map((tech, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-blue-950/60 text-slate-800 dark:text-blue-200 border border-slate-200 dark:border-blue-800/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Experience;
