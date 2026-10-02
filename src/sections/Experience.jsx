import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, Award, GraduationCap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Software Developer – Loan Operating System (LOS)",
      company: "Whitestone Software Solutions",
      duration: "June 2025 – Jan 2026",
      location: "Dharmapuri, India",
      technologies: ["Core Java", "Spring Boot", "REST APIs", "Oracle SQL", "MySQL", "Microservices"],
      responsibilities: [
        "Engineered secure and scalable backend application architecture for complex loan workflows using Core Java and Spring Boot.",
        "Worked extensively on database design and integration (MySQL, Oracle), writing optimized SQL queries to enhance system performance for 10k+ daily transactions.",
        "Actively participated in code reviews, rigorous debugging, and performance optimization to ensure high maintainability of the codebase.",
        "Applied microservices-oriented concepts and RESTful API integrations, ensuring overarching application security and scalability."
      ]
    },
    {
      role: "Software Developer – Sprint Management System",
      company: "Whitestone Software Solutions",
      duration: "June 2025 – Dec 2025",
      location: "Dharmapuri, India",
      technologies: ["Java", "Spring Boot", "React.js", "RESTful APIs", "Hibernate", "JPA", "PostgreSQL"],
      responsibilities: [
        "Developed and maintained a scalable full-stack web application utilizing Java (Spring Boot) for the backend and React.js for the frontend.",
        "Wrote clean, scalable, and efficient frontend code using JavaScript (ES6+), HTML, and CSS to ensure application responsiveness.",
        "Designed and built RESTful APIs, seamlessly integrating them with React.js components to facilitate smooth data exchange.",
        "Collaborated with cross-functional teams (including UI/UX designers and product managers) to optimize workflows throughout the SDLC."
      ]
    },
    {
      role: "Program Coordinator / Project Coordinator Intern",
      company: "Phoenix Solutions",
      duration: "May 2024 – Jul 2024",
      location: "India",
      technologies: ["Project Coordination", "Agile/SDLC", "Client Communication", "Cross-Functional Teamwork"],
      responsibilities: [
        "Demonstrated strong problem-solving abilities and teamwork by acting as a communication bridge between clients and technical development teams.",
        "Collaborated closely with designers and developers to adapt to project requirements in a fast-paced environment.",
        "Streamlined project milestone tracking, task prioritization, and cross-team deliverables alignment."
      ]
    },
    {
      role: "Engineering Trainee",
      company: "Mahendra Next Wealth Pvt. Ltd.",
      duration: "Feb 2021 – Jul 2021",
      location: "Namakkal, India",
      technologies: ["Technical Workflows", "Data Accuracy", "Process Improvement"],
      responsibilities: [
        "Assisted in digitizing technical workflows, maintaining data accuracy, and supporting continuous operational improvements.",
        "Supported backend workflow automation processes, reducing manual processing overhead."
      ]
    }
  ];

  const education = {
    degree: "Bachelor of Technology (B.Tech) in Information Technology",
    institution: "Mahendra Engineering College",
    duration: "Aug 2019 – May 2023",
    location: "Tamil Nadu, India"
  };

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
            <Award size={14} /> Career Milestones
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 dark:text-slate-300 max-w-xl mx-auto text-base md:text-lg">
            A proven track record of engineering scalable full-stack applications, managing complex backend architectures, and driving cross-functional coordination.
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
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="mb-12 relative"
            >
              {/* Glowing Timeline Marker */}
              <div className="absolute -left-[30px] md:-left-[38px] top-1.5 w-6 h-6 rounded-full bg-blue-600 dark:bg-blue-500 border-4 border-white dark:border-[#0c1429] shadow-[0_0_12px_rgba(59,130,246,0.6)] flex items-center justify-center z-10">
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>
              
              {/* Experience Card */}
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
                
                {/* Responsibilities list */}
                <ul className="space-y-3 mb-6">
                  {exp.responsibilities.map((resp, respIdx) => (
                    <li key={respIdx} className="flex items-start gap-3 text-slate-700 dark:text-slate-200 text-sm md:text-base leading-relaxed">
                      <CheckCircle2 size={18} className="text-blue-500 dark:text-blue-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack tags */}
                {exp.technologies && (
                  <div className="pt-4 border-t border-slate-100 dark:border-blue-900/40 flex flex-wrap gap-2 items-center">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 mr-1">
                      Skills & Tools:
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

          {/* Education Milestone Card */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-8 relative"
          >
            <div className="absolute -left-[30px] md:-left-[38px] top-1.5 w-6 h-6 rounded-full bg-purple-600 dark:bg-purple-500 border-4 border-white dark:border-[#0c1429] shadow-[0_0_12px_rgba(168,85,247,0.6)] flex items-center justify-center z-10">
              <div className="w-2 h-2 rounded-full bg-white"></div>
            </div>

            <div className="bg-gradient-to-br from-purple-50/50 to-blue-50/50 dark:from-[#151c33] dark:to-[#0f172a] p-7 rounded-2xl border border-purple-200 dark:border-purple-500/30 shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-xl">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                    Formal Education
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                    {education.degree}
                  </h3>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3 mt-3 text-xs font-semibold text-slate-600 dark:text-slate-300">
                <span className="px-3 py-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  {education.institution}
                </span>
                <span className="px-3 py-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  {education.duration}
                </span>
                <span className="px-3 py-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  {education.location}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
};

export default Experience;
