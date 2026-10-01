import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Play, Pause, ChevronRight, ChevronLeft, Sparkles, Briefcase, Code, Rocket, Mail, Palette } from 'lucide-react';

import navyCoatImg from '../assets/aswathi_navy_coat.jpg';
import blackBlazerImg from '../assets/aswathi_formal_ai_lab.jpg';
import techStudioImg from '../assets/aswathi_ai_tech_portrait.jpg';

const AIAvatarGuide = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [selectedCoat, setSelectedCoat] = useState('navy'); // 'navy' | 'black' | 'tech'
  const speechRef = useRef(null);

  const coatOptions = [
    { id: 'navy', name: 'Navy Blue Coat', img: navyCoatImg, color: 'bg-blue-600' },
    { id: 'black', name: 'Black Blazer', img: blackBlazerImg, color: 'bg-slate-900' },
    { id: 'tech', name: 'Tech Studio Coat', img: techStudioImg, color: 'bg-purple-600' }
  ];

  const currentAvatarImg = coatOptions.find(c => c.id === selectedCoat)?.img || navyCoatImg;

  const chapters = [
    {
      id: 'intro',
      title: 'Welcome & Introduction',
      icon: <Sparkles size={18} className="text-yellow-400" />,
      tag: 'Full Stack & AI Engineer',
      targetId: 'hero',
      text: "Hello and welcome to my portfolio! I'm Aswathi's AI Avatar Guide. I'm a Full Stack Developer with hands-on experience in building enterprise-grade applications, now actively expanding into Artificial Intelligence and LLM development. Let me give you a quick walkthrough of my work and journey!"
    },
    {
      id: 'experience',
      title: 'Production Experience',
      icon: <Briefcase size={18} className="text-blue-400" />,
      tag: '10k+ Daily Txns • 99.9% Uptime',
      targetId: 'experience',
      text: "At Whitestone Software Solutions, I developed high-volume backend microservices for a Loan Operating System (LOS) using Java and Spring Boot, optimizing database queries to reduce transaction latency by 40%. I also engineered robust sprint management services with 99.9% uptime."
    },
    {
      id: 'skills',
      title: 'Skills & AI Development',
      icon: <Code size={18} className="text-purple-400" />,
      tag: 'Java • Spring Boot • LLMs • RAG',
      targetId: 'skills',
      text: "My foundation is built on Core Java, Spring Boot, Hibernate, and SQL databases like Oracle and MySQL. Right now, I'm actively mastering AI Development—building intelligent systems with Generative AI, Prompt Engineering, OpenAI/Gemini APIs, LangChain, and RAG pipelines."
    },
    {
      id: 'projects',
      title: 'Featured Projects',
      icon: <Rocket size={18} className="text-emerald-400" />,
      tag: 'Scalable APIs & Microservices',
      targetId: 'projects',
      text: "I've architected production-tested applications including a high-throughput Loan Management System API, a Secure Role-Based Access Control service, and an agile task workflow manager with optimized Hibernate caching."
    },
    {
      id: 'contact',
      title: "Let's Collaborate",
      icon: <Mail size={18} className="text-pink-400" />,
      tag: 'Open to Opportunities',
      targetId: 'contact',
      text: "I am actively seeking software engineering and AI development opportunities where I can drive impact. You can download my resume, browse my GitHub, or send me a message through the contact form below. I'd love to connect!"
    }
  ];

  const currentChapter = chapters[currentStep];

  // Web Speech API Text-to-Speech
  const speakText = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.0;
      utterance.pitch = 1.05;

      const voices = window.speechSynthesis.getVoices();
      const preferredVoice = voices.find(v => (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Female')) && v.lang.startsWith('en')) || voices[0];
      if (preferredVoice) utterance.voice = preferredVoice;

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      speechRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    }
  };

  const stopSpeaking = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      speakText(currentChapter.text);
    } else {
      stopSpeaking();
    }
    return () => stopSpeaking();
  }, [currentStep, isPlaying]);

  const handleNext = () => {
    setCurrentStep((prev) => (prev + 1) % chapters.length);
  };

  const handlePrev = () => {
    setCurrentStep((prev) => (prev - 1 + chapters.length) % chapters.length);
  };

  const toggleSpeech = () => {
    if (isPlaying) {
      setIsPlaying(false);
      stopSpeaking();
    } else {
      setIsPlaying(true);
      speakText(currentChapter.text);
    }
  };

  const handleScrollToTarget = (targetId) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="avatar-guide" className="py-20 relative overflow-hidden bg-gradient-to-b from-slate-50 via-blue-50/20 to-slate-50 dark:from-[#0a0f1d] dark:via-[#0e162d] dark:to-[#0a0f1d]">
      {/* Background glow effects */}
      <div className="absolute top-1/2 -left-20 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-1/2 -right-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles size={14} className="animate-spin" /> Virtual AI Presenter
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            Meet <span className="text-gradient">Aswathi's Avatar</span> Guide
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-base md:text-lg">
            Interact with my digital AI avatar to hear about my production experience, full-stack achievements, AI evolution, and project architecture.
          </p>
        </div>

        {/* Avatar Interactive Presentation Card */}
        <div className="max-w-5xl mx-auto bg-white/90 dark:bg-[#121c35]/90 rounded-3xl p-6 md:p-10 border border-blue-100 dark:border-blue-500/20 shadow-2xl shadow-blue-500/5 backdrop-blur-xl">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            
            {/* Left: Avatar Visual Presenter with Coat Switcher */}
            <div className="flex flex-col items-center">
              <div className="relative">
                {/* Glowing Aura Ring */}
                <div className={`absolute -inset-2 rounded-full opacity-60 blur-xl transition-all duration-500 ${
                  isSpeaking ? 'bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 animate-pulse' : 'bg-gradient-to-tr from-blue-500 to-purple-600'
                }`}></div>

                {/* Avatar Image Frame */}
                <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden p-1.5 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 shadow-2xl">
                  <img 
                    src={currentAvatarImg} 
                    alt="Aswathi AI Avatar" 
                    className="w-full h-full object-cover rounded-full"
                  />
                  
                  {/* Speaking Indicator Badge */}
                  {isSpeaking && (
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-slate-900/90 border border-blue-400 text-[10px] font-bold text-white flex items-center gap-1.5 shadow-lg animate-bounce">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                      <span>Speaking...</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Coat Color Switcher */}
              <div className="mt-5 p-2 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 flex items-center gap-2">
                <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 pl-1 flex items-center gap-1">
                  <Palette size={13} /> Coat:
                </span>
                {coatOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedCoat(opt.id)}
                    className={`px-2.5 py-1 rounded-xl text-xs font-semibold transition-all ${
                      selectedCoat === opt.id
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    {opt.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Interactive Speech & Narration Box */}
            <div className="flex-1 w-full">
              
              {/* Chapter Header & Tags */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4 border-b border-slate-100 dark:border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    {currentChapter.icon}
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Chapter {currentStep + 1} of {chapters.length}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {currentChapter.title}
                    </h3>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-600 dark:text-purple-300 border border-purple-500/20">
                  {currentChapter.tag}
                </span>
              </div>

              {/* Speech Bubble Box */}
              <div className="relative min-h-[140px] bg-slate-50/80 dark:bg-slate-900/60 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 text-base md:text-lg leading-relaxed flex items-center">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentStep}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    "{currentChapter.text}"
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Controls Toolbar */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                
                {/* Voice Narration Button */}
                <button
                  onClick={toggleSpeech}
                  className={`px-4 py-2.5 rounded-xl font-semibold text-xs md:text-sm flex items-center gap-2 transition-all shadow-md ${
                    isPlaying 
                      ? 'bg-red-500 hover:bg-red-600 text-white' 
                      : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-blue-500/25'
                  }`}
                >
                  {isPlaying ? (
                    <>
                      <VolumeX size={16} /> Stop Voice
                    </>
                  ) : (
                    <>
                      <Volume2 size={16} /> 🔊 Listen to Avatar
                    </>
                  )}
                </button>

                {/* Jump to Relevant Section */}
                <button
                  onClick={() => handleScrollToTarget(currentChapter.targetId)}
                  className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs md:text-sm font-semibold transition-colors flex items-center gap-1.5"
                >
                  View Details in {currentChapter.title} &rarr;
                </button>

                {/* Next / Previous Chapter Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors"
                    title="Previous Chapter"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                    title="Next Chapter"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>

              {/* Step indicator pills */}
              <div className="mt-5 flex items-center gap-2">
                {chapters.map((chap, idx) => (
                  <button
                    key={chap.id}
                    onClick={() => setCurrentStep(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentStep === idx 
                        ? 'w-8 bg-blue-600' 
                        : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
                    }`}
                    title={chap.title}
                  />
                ))}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AIAvatarGuide;
