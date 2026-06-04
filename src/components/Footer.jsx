import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-light-card dark:bg-dark-card py-8 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
            Aswathi R
          </span>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Full Stack Developer
          </p>
        </div>
        
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="https://github.com/dummy" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary transition-colors">
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com/in/aswathir-achu1011" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary transition-colors">
            <FaLinkedin size={20} />
          </a>
          <a href="mailto:aswathi2k01@gmail.com" className="text-slate-500 hover:text-primary transition-colors">
            <FaEnvelope size={20} />
          </a>
        </div>
        
        <div className="text-sm text-slate-500 dark:text-slate-400">
          &copy; {new Date().getFullYear()} Aswathi R. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
