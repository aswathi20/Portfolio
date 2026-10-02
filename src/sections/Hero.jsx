import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Briefcase, Code, Rocket, Mail, ChevronRight, MessageCircle, Volume2, VolumeX, Play, Pause, Video, Upload, Info, Check, Copy } from 'lucide-react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

import darkStudioProfile from '../assets/aswathi_formal_dark_studio.jpg';

const Hero = () => {
  // Speech stories where her picture speaks about herself
  const stories = [
    {
      id: 'intro',
      tab: '👋 About Me',
      title: 'Hi, I am Aswathi R!',
      tag: 'Full Stack & AI Engineer',
      badgeText: '👋 "Welcome! Glad you are here."',
      quote: "Welcome to my portfolio! I am a detail-oriented Full Stack Developer with 2+ years of experience engineering scalable enterprise web systems. I am passionate about clean architecture and actively expanding into modern Artificial Intelligence.",
      actionText: 'Learn More About Me ↓',
      targetId: 'about'
    },
    {
      id: 'experience',
      tab: '💼 My Experience',
      title: 'Production Systems (LOS & Sprint APIs)',
      tag: '10k+ Daily Txns • 99.9% Uptime',
      badgeText: '📈 "Over 10,000 txns/day scaled!"',
      quote: "At Whitestone Software Solutions, I developed high-volume backend microservices for a Loan Operating System (LOS) with Java and Spring Boot, optimizing SQL queries for 10,000+ daily transactions with 40% reduced latency. I also served as Program Coordinator at Phoenix Solutions, bridging clients and technical teams.",
      actionText: 'View My Experience ↓',
      targetId: 'experience'
    },
    {
      id: 'skills',
      tab: '🤖 AI & Tech Stack',
      title: 'Enterprise Java & AI Evolution',
      tag: 'Java • Spring Boot • LLMs • RAG',
      badgeText: '⚡ "Core Java + Generative AI"',
      quote: "My core foundation is Core Java, Spring Boot, Hibernate, and SQL databases. Right now, I am actively building AI solutions—integrating Generative AI, Prompt Engineering, OpenAI/Gemini APIs, LangChain, and RAG pipelines to create intelligent automated workflows.",
      actionText: 'Explore Tech Skills ↓',
      targetId: 'skills'
    },
    {
      id: 'projects',
      tab: '🚀 Architecture & Projects',
      title: 'High-Throughput APIs & Services',
      tag: 'Clean OOP • Scalable Design',
      badgeText: '🛡️ "Secure REST Microservices"',
      quote: "I have architected scalable applications including a Loan Management System API, a Secure JWT-based Role Access Control service, and an agile sprint task manager with multi-tier Hibernate caching.",
      actionText: 'View Project Showcase ↓',
      targetId: 'projects'
    },
    {
      id: 'contact',
      tab: '📬 Hire / Connect',
      title: 'Open to New Opportunities',
      tag: 'Immediate Availability',
      badgeText: '📩 "Send me a message below!"',
      quote: "I am actively seeking software engineering and AI developer roles where I can contribute to mission-critical systems. Feel free to explore my work or get in touch directly!",
      actionText: 'Get In Touch With Me ↓',
      targetId: 'contact'
    }
  ];

  const [activeStoryIdx, setActiveStoryIdx] = useState(0);
  const [isTalking, setIsTalking] = useState(true);
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const [typedText, setTypedText] = useState('');
  
  // Video Avatar Mode States
  const [displayMode, setDisplayMode] = useState('avatar'); // 'avatar' | 'video'
  const [videoSrc, setVideoSrc] = useState('');
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const [showVideoHelper, setShowVideoHelper] = useState(false);
  const [copiedScript, setCopiedScript] = useState(false);

  const videoElementRef = useRef(null);
  const videoInputRef = useRef(null);
  const speechUtteranceRef = useRef(null);

  const activeStory = stories[activeStoryIdx];

  // Comprehensive script covering the entire portfolio for generating the AI Talking Video
  const videoScript = "Hello and welcome to my portfolio! I am Aswathi R, a Full Stack Developer and AI Enthusiast with over two years of experience engineering scalable enterprise web systems. At Whitestone Software Solutions, I developed high-volume backend microservices for a Loan Operating System using Java and Spring Boot, optimizing database queries across Oracle SQL and MySQL to process more than 10,000 daily transactions with a 40 percent latency reduction, while maintaining 99.9 percent uptime. I also coordinated cross-functional technical workflows at Phoenix Solutions. My technical toolkit combines Core Java, Spring Boot, React.js, and RESTful microservices with modern AI Development—including Generative AI, LLM APIs, LangChain, and RAG architectures. Please explore my featured projects and skills below, and feel free to get in touch. Thank you for visiting!";

  useEffect(() => {
    const savedVideo = localStorage.getItem('aswathi_avatar_video');
    if (savedVideo) {
      setVideoSrc(savedVideo);
    }
  }, []);

  const handleVideoUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const videoUrl = URL.createObjectURL(file);
      setVideoSrc(videoUrl);
      setDisplayMode('video');
      setIsVideoPlaying(true);
      
      // Also store as dataURL if size allows, or keep objectURL
      const reader = new FileReader();
      reader.onloadend = () => {
        try {
          localStorage.setItem('aswathi_avatar_video', reader.result);
        } catch (err) {
          // Exceeds quota, keep in session
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const copyScriptToClipboard = () => {
    navigator.clipboard.writeText(videoScript);
    setCopiedScript(true);
    setTimeout(() => setCopiedScript(false), 2500);
  };

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

  // Typewriter effect simulating speaking in real time
  useEffect(() => {
    setTypedText('');
    setIsTalking(true);
    let charIndex = 0;
    const fullText = activeStory.quote;

    const typewriterInterval = setInterval(() => {
      if (charIndex <= fullText.length) {
        setTypedText(fullText.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typewriterInterval);
        setTimeout(() => setIsTalking(false), 2000);
      }
    }, 25);

    return () => clearInterval(typewriterInterval);
  }, [activeStoryIdx]);

  // Optional Voice Audio Speech Synthesis
  useEffect(() => {
    if (voiceEnabled && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(activeStory.quote);
      utterance.rate = 1.0;
      utterance.pitch = 1.05;

      const voices = window.speechSynthesis.getVoices();
      const femaleVoice = voices.find(v => (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Female')) && v.lang.startsWith('en')) || voices[0];
      if (femaleVoice) utterance.voice = femaleVoice;

      utterance.onstart = () => setIsTalking(true);
      utterance.onend = () => setIsTalking(false);

      speechUtteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    } else if (!voiceEnabled && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }, [activeStoryIdx, voiceEnabled]);

  // Auto-rotation of stories if user is idle
  useEffect(() => {
    const storyInterval = setInterval(() => {
      setActiveStoryIdx((prev) => (prev + 1) % stories.length);
    }, 9000);
    return () => clearInterval(storyInterval);
  }, [stories.length]);

  const handleScrollTo = (targetId) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleVoice = () => {
    setVoiceEnabled(!voiceEnabled);
  };

  const toggleVideoPlay = () => {
    if (videoElementRef.current) {
      if (isVideoPlaying) {
        videoElementRef.current.pause();
        setIsVideoPlaying(false);
      } else {
        videoElementRef.current.play();
        setIsVideoPlaying(true);
      }
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 pb-16 relative overflow-hidden">
      {/* Hidden file input for uploading MP4 video */}
      <input 
        type="file"
        ref={videoInputRef}
        onChange={handleVideoUpload}
        accept="video/mp4,video/webm"
        className="hidden"
      />

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

          {/* Right Column: AI Video Avatar Player / Interactive Talking Avatar */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full max-w-lg flex flex-col items-center relative"
          >
            {/* Mode Switcher: Talking Avatar vs AI Video */}
            <div className="flex items-center gap-2 mb-3 bg-white/80 dark:bg-slate-900/80 p-1 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-md">
              <button
                onClick={() => setDisplayMode('avatar')}
                className={`px-3 py-1 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  displayMode === 'avatar'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Sparkles size={13} />
                <span>Interactive Avatar</span>
              </button>

              <button
                onClick={() => setDisplayMode('video')}
                className={`px-3 py-1 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  displayMode === 'video'
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Video size={13} />
                <span>AI Video Player</span>
              </button>

              <button
                onClick={() => setShowVideoHelper(!showVideoHelper)}
                className="p-1 rounded-lg text-slate-400 hover:text-blue-500 transition-colors"
                title="How to create a free AI talking video from your photo"
              >
                <Info size={15} />
              </button>
            </div>

            {/* Quick Helper Tooltip Modal for Creating AI Video */}
            {showVideoHelper && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full mb-3 p-4 rounded-2xl bg-slate-900 text-white border border-purple-500/40 shadow-2xl text-xs relative z-30"
              >
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-bold flex items-center gap-1 text-purple-400">
                    <Sparkles size={14} /> How to Create Your Free AI Talking Video in 1 Min:
                  </h5>
                  <button onClick={() => setShowVideoHelper(false)} className="text-slate-400 hover:text-white">&times;</button>
                </div>
                <ol className="list-decimal list-inside space-y-1 text-slate-300 mb-3">
                  <li>Visit <strong>studio.d-id.com</strong> or <strong>heygen.com</strong> (free signup).</li>
                  <li>Click <em>Create Video</em> and select your formal suit photo.</li>
                  <li>Paste the ready-made portfolio script below and click <em>Generate Video</em>!</li>
                  <li>Download your MP4 and click the <strong>Upload Video (.mp4)</strong> button below!</li>
                </ol>
                <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 flex items-center justify-between gap-2">
                  <span className="text-[11px] text-slate-300 truncate italic">
                    "{videoScript}"
                  </span>
                  <button 
                    onClick={copyScriptToClipboard}
                    className="px-2.5 py-1 rounded bg-purple-600 hover:bg-purple-500 text-white text-[11px] font-semibold flex items-center gap-1 shrink-0"
                  >
                    {copiedScript ? <Check size={12} /> : <Copy size={12} />}
                    <span>{copiedScript ? 'Copied!' : 'Copy Script'}</span>
                  </button>
                </div>
              </motion.div>
            )}

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
                  
                  <div className="flex items-center gap-2">
                    {/* Voice audio toggle */}
                    <button
                      onClick={toggleVoice}
                      className={`px-2 py-0.5 rounded-full text-[11px] font-semibold flex items-center gap-1 transition-all ${
                        voiceEnabled 
                          ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30' 
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200'
                      }`}
                      title={voiceEnabled ? "Voice is ON (click to mute)" : "Click to enable spoken voice audio"}
                    >
                      {voiceEnabled ? <Volume2 size={12} /> : <VolumeX size={12} />}
                      <span>{voiceEnabled ? 'Voice ON' : 'Mute Voice'}</span>
                    </button>

                    <span className="text-[11px] font-semibold text-purple-600 dark:text-purple-300 bg-purple-500/10 px-2.5 py-0.5 rounded-full border border-purple-500/20">
                      {activeStory.tag}
                    </span>
                  </div>
                </div>

                {/* Animated Typewriter Speech Text */}
                <div className="min-h-[72px] flex items-start">
                  <p className="text-xs md:text-sm text-slate-700 dark:text-slate-200 leading-relaxed italic">
                    "{typedText}"
                    {isTalking && (
                      <span className="inline-block w-1 h-3.5 bg-blue-500 ml-1 animate-pulse" />
                    )}
                  </p>
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

            {/* Display Container: Video Mode vs Avatar Mode */}
            <div className="relative flex flex-col items-center justify-center w-64 h-64 sm:w-72 sm:h-72 mt-2">
              
              {/* Outer Acoustic Waves when talking */}
              {isTalking && (
                <>
                  <motion.div 
                    className="absolute inset-0 rounded-full border border-blue-500/40 pointer-events-none"
                    animate={{ scale: [1, 1.25, 1.4], opacity: [0.6, 0.2, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
                  />
                  <motion.div 
                    className="absolute inset-0 rounded-full border border-purple-500/30 pointer-events-none"
                    animate={{ scale: [1, 1.15, 1.3], opacity: [0.5, 0.15, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeOut", delay: 0.7 }}
                  />
                </>
              )}

              {/* Soft Ambient Radial Backlight Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/30 via-indigo-500/25 to-purple-600/30 blur-2xl pointer-events-none animate-pulse"></div>

              {/* MODE 1: AI VIDEO PLAYER (Real Talking Video) */}
              {displayMode === 'video' && videoSrc ? (
                <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-2 border-purple-500/50 group">
                  <video
                    ref={videoElementRef}
                    src={videoSrc}
                    autoPlay
                    loop
                    playsInline
                    muted={isVideoMuted}
                    className="w-full h-full object-cover rounded-full"
                  />
                  
                  {/* Video Overlay Controls */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                    <button 
                      onClick={toggleVideoPlay}
                      className="p-2.5 rounded-full bg-slate-900/90 text-white hover:bg-purple-600 transition-colors shadow-lg"
                    >
                      {isVideoPlaying ? <Pause size={16} /> : <Play size={16} />}
                    </button>
                    <button 
                      onClick={() => setIsVideoMuted(!isVideoMuted)}
                      className="p-2.5 rounded-full bg-slate-900/90 text-white hover:bg-purple-600 transition-colors shadow-lg"
                    >
                      {isVideoMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                    </button>
                  </div>

                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-purple-900/90 border border-purple-400 text-white text-[10px] font-bold shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                    <span>LIVE AI Video</span>
                  </div>
                </div>
              ) : displayMode === 'video' && !videoSrc ? (
                /* Video Placeholder when user has not yet dropped/uploaded their MP4 */
                <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-2 border-dashed border-purple-500/60 bg-slate-950 flex flex-col items-center justify-center p-6 text-center group">
                  <img 
                    src={darkStudioProfile} 
                    alt="Aswathi Video Placeholder" 
                    className="absolute inset-0 w-full h-full object-cover opacity-30 blur-xs"
                  />
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-purple-600/30 text-purple-400 flex items-center justify-center mb-2 animate-bounce">
                      <Video size={24} />
                    </div>
                    <p className="text-xs font-bold text-white mb-1">Upload Talking Video</p>
                    <p className="text-[10px] text-slate-300 mb-3">Add your generated AI talking MP4</p>
                    <button
                      onClick={() => videoInputRef.current?.click()}
                      className="px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg transition-transform hover:scale-105"
                    >
                      <Upload size={13} />
                      <span>Choose .mp4</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* MODE 2: INTERACTIVE AVATAR IN TALKING ACTION */
                <motion.div 
                  className="relative w-full h-full flex items-center justify-center cursor-pointer group"
                  animate={isTalking ? {
                    y: [0, -5, 2, -3, 0],
                    rotate: [-1.2, 1.2, -0.6, 0.8, 0],
                    scale: [1, 1.015, 0.995, 1.01, 1]
                  } : {
                    y: [-3, 3, -3],
                    rotate: [0, 0, 0]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: isTalking ? 3.5 : 5,
                    ease: "easeInOut"
                  }}
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

                  {/* Floating Action Gesture Pill reacting to the topic */}
                  <motion.div
                    key={activeStory.id}
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="absolute -top-3 -right-2 z-20 px-3 py-1 rounded-full bg-white/95 dark:bg-slate-900/95 border border-purple-500/40 shadow-lg text-[11px] font-bold text-purple-600 dark:text-purple-300 backdrop-blur-md pointer-events-none"
                  >
                    {activeStory.badgeText}
                  </motion.div>

                  {/* Live Talking Audio Equalizer Bars at chin level */}
                  <div className="absolute -bottom-2 z-20 px-4 py-1.5 rounded-full bg-slate-950/90 border border-blue-400/40 text-white text-xs font-semibold shadow-xl backdrop-blur-md flex items-center gap-2 pointer-events-none">
                    <span className={`w-2 h-2 rounded-full ${isTalking ? 'bg-emerald-400 animate-ping' : 'bg-slate-400'}`}></span>
                    <span className="text-[11px] font-bold tracking-wide">
                      {isTalking ? 'Aswathi Talking' : 'Aswathi Presenter'}
                    </span>
                    
                    {/* Equalizer Waveform Bars */}
                    {isTalking && (
                      <div className="flex items-center gap-0.5 ml-1">
                        {[1, 2, 3, 4, 5].map((bar) => (
                          <motion.span
                            key={bar}
                            className="w-1 bg-gradient-to-t from-blue-400 to-purple-400 rounded-full inline-block"
                            animate={{ height: ['4px', `${10 + (bar % 3) * 5}px`, '4px'] }}
                            transition={{ repeat: Infinity, duration: 0.35 + bar * 0.08, ease: "easeInOut" }}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

            </div>

            {/* Quick Upload Video Bar */}
            <div className="mt-5 flex items-center gap-3">
              <button
                onClick={() => videoInputRef.current?.click()}
                className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-colors border border-slate-200 dark:border-slate-700/60 shadow-sm"
              >
                <Upload size={13} className="text-purple-500" />
                <span>Upload AI Video (.mp4)</span>
              </button>

              <button
                onClick={() => setShowVideoHelper(true)}
                className="text-xs text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 font-medium"
              >
                <span>How to create?</span>
              </button>
            </div>

          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
