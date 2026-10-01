import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Camera, Sparkles, CheckCircle2, RotateCcw, Cpu, Code2, Database } from 'lucide-react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

import aiDevProfile from '../assets/aswathi_ai_tech_portrait.jpg';
import corporateProfile from '../assets/aswathi_corporate_portrait.jpg';
import originalPhoto from '../assets/aswathi_original.jpg';

const Hero = () => {
  const [profileImage, setProfileImage] = useState(aiDevProfile);
  const [activePreset, setActivePreset] = useState('aidev');
  const [isCustomImage, setIsCustomImage] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const savedCustom = localStorage.getItem('user_profile_custom');
    const savedPreset = localStorage.getItem('user_profile_preset');

    if (savedCustom) {
      setProfileImage(savedCustom);
      setIsCustomImage(true);
      setActivePreset('custom');
    } else if (savedPreset === 'corporate') {
      setProfileImage(corporateProfile);
      setActivePreset('corporate');
    } else if (savedPreset === 'original') {
      setProfileImage(originalPhoto);
      setActivePreset('original');
    } else {
      setProfileImage(aiDevProfile);
      setActivePreset('aidev');
    }
  }, []);

  const handleSelectPreset = (presetKey, imageSrc) => {
    setProfileImage(imageSrc);
    setActivePreset(presetKey);
    setIsCustomImage(false);
    localStorage.removeItem('user_profile_custom');
    localStorage.setItem('user_profile_preset', presetKey);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result;
        setProfileImage(result);
        setIsCustomImage(true);
        setActivePreset('custom');
        localStorage.setItem('user_profile_custom', result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetImage = (e) => {
    e.stopPropagation();
    localStorage.removeItem('user_profile_custom');
    localStorage.setItem('user_profile_preset', 'aidev');
    setProfileImage(aiDevProfile);
    setActivePreset('aidev');
    setIsCustomImage(false);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const roles = [
    "Full Stack & AI Developer",
    "Java & Spring Boot Engineer",
    "LLM & Intelligent Systems Builder"
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 pb-16 relative overflow-hidden">
      {/* Background ambient gradient blurs */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob pointer-events-none"></div>
      <div className="absolute top-40 right-10 w-80 h-80 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 pointer-events-none"></div>
      <div className="absolute -bottom-8 left-40 w-80 h-80 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Left Text Content */}
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

            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
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
              Software Developer with production experience building enterprise-grade loan operating systems and sprint APIs using <strong className="text-slate-900 dark:text-white font-semibold">Core Java & Spring Boot</strong>. Actively mastering <strong className="text-purple-600 dark:text-purple-400 font-semibold">AI Development</strong>, LLM orchestration, and intelligent automation pipelines.
            </p>

            {/* Quick Metrics Bar showing what she has done */}
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
            
            {/* Action Buttons */}
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

          {/* Right Profile Photo Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full max-w-md lg:max-w-none flex flex-col items-center justify-center relative"
          >
            {/* Hidden file input for uploading custom photo */}
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleImageUpload} 
              accept="image/*" 
              className="hidden" 
            />

            <motion.div 
              className="relative w-full max-w-sm sm:max-w-md"
              animate={{ y: [-8, 8, -8] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              {/* Outer Radiant Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-600 rounded-[2.5rem] opacity-35 blur-2xl animate-pulse"></div>

              {/* Main Photo Card Frame */}
              <div className="relative rounded-[2.5rem] p-3.5 bg-gradient-to-b from-blue-500/40 via-purple-500/30 to-pink-500/20 backdrop-blur-xl shadow-2xl shadow-blue-500/10">
                <div className="relative rounded-[2rem] overflow-hidden bg-slate-900 aspect-square group">
                  <img 
                    src={profileImage} 
                    alt="Aswathi R - Full Stack & AI Developer" 
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Subtle dark gradient overlay at the bottom for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 pointer-events-none"></div>

                  {/* Photo Upload/Change Action Button */}
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 hover:bg-primary text-white text-xs font-semibold backdrop-blur-md border border-white/20 transition-all hover:scale-105 shadow-lg"
                    title="Click to upload another photo"
                  >
                    <Camera size={14} />
                    <span>Upload</span>
                  </button>

                  {/* Reset Photo button if custom uploaded */}
                  {isCustomImage && (
                    <button
                      onClick={handleResetImage}
                      className="absolute top-4 left-4 z-20 flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-red-600/80 hover:bg-red-600 text-white text-xs font-semibold backdrop-blur-md transition-all hover:scale-105 shadow-lg"
                      title="Reset to AI Developer photo"
                    >
                      <RotateCcw size={13} />
                      <span>Default</span>
                    </button>
                  )}

                  {/* On-image caption badge */}
                  <div className="absolute bottom-4 left-4 right-4 text-center z-10 pointer-events-none">
                    <span className="text-xs font-semibold text-white/90 bg-slate-950/75 px-3.5 py-1.5 rounded-full backdrop-blur-md border border-white/10 shadow-lg">
                      ⚡ Aswathi R • AI & Full Stack Engineer
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1 - AI & LLMs */}
              <motion.div 
                className="absolute -top-4 -left-6 z-20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-purple-500/30 flex items-center gap-2.5"
                animate={{ y: [-4, 4, -4] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="w-9 h-9 rounded-xl bg-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                  <Cpu size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">Specialization</p>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">AI & LLM Workflows</p>
                </div>
              </motion.div>

              {/* Floating Badge 2 - Full-Stack Java */}
              <motion.div 
                className="absolute -bottom-5 -right-4 z-20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-blue-500/30 flex items-center gap-2.5"
                animate={{ y: [4, -4, 4] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }}
              >
                <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <Code2 size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">Backend Core</p>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">Java & Spring Boot</p>
                </div>
              </motion.div>

            </motion.div>

            {/* Photo Preset Selector Controls (allowing user to switch seamlessly) */}
            <div className="mt-8 flex items-center gap-2 bg-white/90 dark:bg-slate-900/90 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md backdrop-blur-md">
              <span className="text-xs font-semibold px-2 text-slate-400 dark:text-slate-400 hidden sm:inline">
                Style:
              </span>
              <button
                onClick={() => handleSelectPreset('aidev', aiDevProfile)}
                className={`px-3 py-1 text-xs font-semibold rounded-xl transition-all ${
                  activePreset === 'aidev'
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                ✨ AI Developer
              </button>
              <button
                onClick={() => handleSelectPreset('corporate', corporateProfile)}
                className={`px-3 py-1 text-xs font-semibold rounded-xl transition-all ${
                  activePreset === 'corporate'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                💼 Studio Pro
              </button>
              <button
                onClick={() => handleSelectPreset('original', originalPhoto)}
                className={`px-3 py-1 text-xs font-semibold rounded-xl transition-all ${
                  activePreset === 'original'
                    ? 'bg-slate-700 text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                🌿 Original
              </button>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
