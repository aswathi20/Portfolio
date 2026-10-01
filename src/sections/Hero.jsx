import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Briefcase, Code, Rocket, Mail, ChevronRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

import darkStudioProfile from '../assets/aswathi_formal_dark_studio.jpg';

const Hero = () => {
  // Speech bubble chapters where her picture speaks about herself
  const stories = [
    {
      id: 'intro',
      tab: '👋 About Me',
      title: 'Hi, I am Aswathi R!',
      tag: 'Full Stack & AI Engineer',
      quote: "Welcome to my portfolio! I am a detail-oriented Full Stack Developer with 2+ years of experience engineering scalable enterprise web systems. I am passionate about clean architecture and actively expanding into modern Artificial Intelligence.",
      actionText: 'Learn More About Me ↓',
      targetId: 'about'
    },
    {
      id: 'experience',
      tab: '💼 My Experience',
      title: 'Production Systems (LOS & Sprint APIs)',
      tag: '10k+ Daily Txns • 99.9% Uptime',
      quote: "At Whitestone Software Solutions, I developed high-volume backend microservices for a Loan Operating System (LOS) with Java and Spring Boot. I optimized SQL queries to handle 10,000+ daily transactions with 40% reduced latency, while maintaining 99.9% application uptime.",
      actionText: 'View My Experience ↓',
      targetId: 'experience'
    },
    {
      id: 'skills',
      tab: '🤖 AI & Tech Stack',
      title: 'Enterprise Java & AI Evolution',
      tag: 'Java • Spring Boot • LLMs • RAG',
      quote: "My core foundation is Core Java, Spring Boot, Hibernate, and SQL databases. Right now, I am actively building AI solutions—integrating Generative AI, Prompt Engineering, OpenAI/Gemini APIs, LangChain, and RAG pipelines to create intelligent automated workflows.",
      actionText: 'Explore Tech Skills ↓',
      targetId: 'skills'
    },
    {
      id: 'projects',
      tab: '🚀 Architecture & Projects',
      title: 'High-Throughput APIs & Services',
      tag: 'Clean OOP • Scalable Design',
      quote: "I have architected scalable applications including a Loan Management System API, a Secure JWT-based Role Access Control service, and an agile sprint task manager with multi-tier Hibernate caching.",
      actionText: 'View Project Showcase ↓',
      targetId: 'projects'
    },
    {
      id: 'contact',
      tab: '📬 Hire / Connect',
      title: 'Open to New Opportunities',
      tag: 'Immediate Availability',
      quote: "I am actively seeking software engineering and AI developer roles where I can contribute to mission-critical systems. Feel free to explore my work or get in touch directly!",
      actionText: 'Get In Touch With Me ↓',
      targetId: 'contact'
    }
  ];

  const [activeStoryIdx, setActiveStoryIdx] = useState(0);
  const activeStory = stories[activeStoryIdx];

  // Animated rotating titles
  const roles = [
    "Full Stack & AI Developer",
    "Java & Spring Boot Engineer",
    "LLM & Intelligent Systems Builder"
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3500);
    return () => clearInterval(roleInterval);
  }, [roles.length]);

  // Gentle auto-rotation of stories if user is idle
  useEffect(() => {
    const storyInterval = setInterval(() => {
      setActiveStoryIdx((prev) => (prev + 1) % stories.length);
    }, 8000);
    return () => clearInterval(storyInterval);
  }, [stories.length]);

  const handleScrollTo = (targetId) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 pb-16 relative overflow-hidden">
      {/* Background ambient gradient lighting */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-blue-500/15 rounded-full filter blur-3xl opacity-40 pointer-events-none"></div>
      <div className="absolute top-40 right-10 w-80 h-80 bg-purple-500/15 rounded-full filter blur-3xl opacity-40 pointer-events-none"></div>
      <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-indigo-500/15 rounded-full filter blur-3xl opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-14">
          
          {/* Left Column: Greeting, Role & What She Has Done */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              Available for Full-Stack & AI Roles
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight text-slate-900 dark:text-white">
              Aswathi <span className="text-gradient">R</span>
            </h1>

            {/* Dynamic Animated Role */}
            <div className="text-2xl md:text-3xl font-semibold mb-6 text-slate-700 dark:text-slate-200 min-h-[44px] flex items-center justify-center lg:justify-start">
              <motion.span
                key={currentRoleIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400"
              >
                {roles[currentRoleIndex]}
              </motion.span>
            </div>

            <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Software Developer with production experience building enterprise-grade loan operating systems and sprint APIs using <strong className="text-slate-900 dark:text-white font-semibold">Core Java & Spring Boot</strong>. Actively engineering modern <strong className="text-purple-600 dark:text-purple-400 font-semibold">AI Solutions</strong>, LLM orchestration, and intelligent automation pipelines.
            </p>

            {/* Metrics Bar */}
            <div className="grid grid-cols-3 gap-3 mb-8 max-w-lg mx-auto lg:mx-0">
              <div className="bg-white/80 dark:bg-slate-800/80 p-3 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm text-center">
                <span className="text-lg md:text-xl font-bold text-blue-600 dark:text-blue-400">10k+</span>
                <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-0.5">Daily Txns Handled</p>
              </div>
              <div className="bg-white/80 dark:bg-slate-800/80 p-3 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm text-center">
                <span className="text-lg md:text-xl font-bold text-purple-600 dark:text-purple-400">99.9%</span>
                <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-0.5">System Uptime</p>
              </div>
              <div className="bg-white/80 dark:bg-slate-800/80 p-3 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm text-center">
                <span className="text-lg md:text-xl font-bold text-emerald-600 dark:text-emerald-400">AI + Java</span>
                <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-0.5">Core Expertise</p>
              </div>
            </div>
            
            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <a 
                href="#projects"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-primary hover:bg-primary-dark text-white font-medium flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 transition-all hover:scale-105 active:scale-95"
              >
                View Work & Architecture <ArrowRight size={18} />
              </a>
              <a 
                href="#contact"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:border-primary dark:hover:border-primary text-slate-800 dark:text-white font-medium flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                Get In Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <a 
                href="https://linkedin.com/in/aswathir-achu1011" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-primary hover:border-primary transition-all hover:-translate-y-1 shadow-sm"
                title="LinkedIn"
              >
                <FaLinkedin size={22} />
              </a>
              <a 
                href="https://github.com/dummy" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-primary hover:border-primary transition-all hover:-translate-y-1 shadow-sm"
                title="GitHub"
              >
                <FaGithub size={22} />
              </a>
              <a 
                href="mailto:aswathi2k01@gmail.com" 
                className="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-primary hover:border-primary transition-all hover:-translate-y-1 shadow-sm"
                title="Email Me"
              >
                <FaEnvelope size={22} />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Seamless Avatar with No Box + Interactive "My Picture Speaks About Me" */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full max-w-lg flex flex-col items-center relative"
          >
            {/* Interactive Speech Bubble: The Picture Speaks About Her */}
            <div className="w-full mb-4 relative z-20">
              {/* Category Pills to Pick What the Avatar Explains */}
              <div className="flex items-center justify-center flex-wrap gap-1.5 mb-3">
                {stories.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveStoryIdx(idx)}
                    className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all ${
                      activeStoryIdx === idx
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-105'
                        : 'bg-white/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700/60'
                    }`}
                  >
                    {s.tab}
                  </button>
                ))}
              </div>

              {/* Speech Bubble Container with Tail */}
              <div className="relative bg-white/95 dark:bg-[#121c35]/95 backdrop-blur-xl p-5 md:p-6 rounded-2xl border border-blue-200/70 dark:border-blue-500/30 shadow-xl shadow-blue-500/5">
                <div className="flex items-center justify-between gap-2 mb-2 pb-2 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="p-1 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                      <MessageCircle size={15} />
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      {activeStory.title}
                    </h4>
                  </div>
                  <span className="text-[11px] font-semibold text-purple-600 dark:text-purple-300 bg-purple-500/10 px-2.5 py-0.5 rounded-full border border-purple-500/20">
                    {activeStory.tag}
                  </span>
                </div>

                {/* Animated Speech Text */}
                <div className="min-h-[70px] flex items-center">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={activeStory.id}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.25 }}
                      className="text-xs md:text-sm text-slate-700 dark:text-slate-200 leading-relaxed italic"
                    >
                      "{activeStory.quote}"
                    </motion.p>
                  </AnimatePresence>
                </div>

                {/* Direct Action Link to the specific section */}
                <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400 font-medium">
                    Story {activeStoryIdx + 1} of {stories.length}
                  </span>
                  <button
                    onClick={() => handleScrollTo(activeStory.targetId)}
                    className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-1 transition-colors group"
                  >
                    <span>{activeStory.actionText}</span>
                    <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>

                {/* Speech Bubble Downward Tail */}
                <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-5 h-5 bg-white/95 dark:bg-[#121c35]/95 border-r border-b border-blue-200/70 dark:border-blue-500/30 rotate-45"></div>
              </div>
            </div>

            {/* Seamless Avatar (No Harsh Box / No Rectangular Background) */}
            <div className="relative flex items-center justify-center w-64 h-64 sm:w-72 sm:h-72 mt-2">
              
              {/* Soft Ambient Radial Backlight Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/30 via-indigo-500/25 to-purple-600/30 blur-2xl pointer-events-none animate-pulse"></div>

              {/* The Picture as an Avatar with Feathered Seamless Edges */}
              <motion.div 
                className="relative w-full h-full flex items-center justify-center cursor-pointer group"
                animate={{ y: [-5, 5, -5] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                onClick={() => setActiveStoryIdx((prev) => (prev + 1) % stories.length)}
                title="Click me to hear more about my experience!"
              >
                <img 
                  src={darkStudioProfile} 
                  alt="Aswathi R - Full Stack & AI Developer" 
                  className="w-full h-full object-cover rounded-full shadow-2xl transition-transform duration-500 group-hover:scale-105"
                  style={{
                    maskImage: 'radial-gradient(circle at 50% 48%, black 64%, rgba(0,0,0,0.85) 75%, transparent 95%)',
                    WebkitMaskImage: 'radial-gradient(circle at 50% 48%, black 64%, rgba(0,0,0,0.85) 75%, transparent 95%)'
                  }}
                />

                {/* Subtle Interactive Floating Badge */}
                <div className="absolute -bottom-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-blue-400/40 text-white text-xs font-semibold shadow-lg backdrop-blur-md flex items-center gap-1.5 pointer-events-none">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>Aswathi • Interactive Avatar</span>
                </div>
              </motion.div>

            </div>

          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
