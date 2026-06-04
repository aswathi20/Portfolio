import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import WorkspaceImg from '../assets/developer_workspace.png';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-40 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <p className="text-primary font-semibold mb-4 tracking-wide uppercase">
              Hello, I'm
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Aswathi <span className="text-gradient">R</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 mb-6 font-medium flex min-h-[40px] items-center lg:justify-start justify-center">
              {"Full Stack Developer".split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.1 }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
              <motion.span 
                animate={{ opacity: [0, 1, 0] }} 
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-1 h-8 bg-primary ml-1"
              />
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0">
              Building robust, scalable applications from engaging frontend interfaces to high-performance backend RESTful APIs. Passionate about clean code and comprehensive architecture.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href="#projects"
                className="w-full sm:w-auto px-8 py-3 rounded-lg bg-primary hover:bg-primary-dark text-white font-medium flex items-center justify-center gap-2 transition-transform hover:scale-105"
              >
                View My Work <ArrowRight size={18} />
              </a>
              <a 
                href="#"
                className="w-full sm:w-auto px-8 py-3 rounded-lg bg-transparent border border-slate-300 dark:border-slate-700 hover:border-primary dark:hover:border-primary text-slate-800 dark:text-white font-medium flex items-center justify-center gap-2 transition-colors"
              >
                Download Resume <Download size={18} />
              </a>
            </div>

            <div className="mt-12 flex items-center justify-center lg:justify-start gap-6">
              <a href="https://linkedin.com/in/aswathir-achu1011" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full hover:text-primary transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com/dummy" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full hover:text-primary transition-colors">
                <FaGithub size={24} />
              </a>
              <a href="mailto:aswathi2k01@gmail.com" className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full hover:text-primary transition-colors">
                <FaEnvelope size={24} />
              </a>
            </div>
          </motion.div>

          {/* Creative Image Visual Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full max-w-lg lg:max-w-none flex justify-center perspective-1000"
          >
            <motion.div 
              className="relative group w-full"
              animate={{ y: [-15, 15, -15], rotateY: [-2, 2, -2] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-3xl opacity-40 blur-3xl group-hover:opacity-70 transition-opacity duration-700 animate-pulse"></div>
              <img 
                src={WorkspaceImg} 
                alt="Developer Workspace" 
                className="relative rounded-3xl shadow-[0_0_50px_rgba(59,130,246,0.3)] border border-white/10 dark:border-white/5 object-cover w-full h-auto max-h-[500px] z-10 glass-card-light dark:glass-card backdrop-blur-md"
              />
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
