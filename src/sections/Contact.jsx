import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-light-bg dark:bg-dark-bg/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In <span className="text-primary">Touch</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            I am currently open to new opportunities. Whether you have a question or just want to say hi, I will try my best to get back to you!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-8"
          >
            <div className="bg-white dark:bg-dark-card p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4">
              <div className="p-3 bg-blue-50 dark:bg-blue-900/30 text-primary rounded-lg shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1">Email Me</h3>
                <a href="mailto:aswathi2k01@gmail.com" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">
                  aswathi2k01@gmail.com
                </a>
              </div>
            </div>

            <div className="bg-white dark:bg-dark-card p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4">
              <div className="p-3 bg-blue-50 dark:bg-blue-900/30 text-primary rounded-lg shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1">Call Me</h3>
                <a href="tel:+919360885955" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">
                  +91-9360885955
                </a>
              </div>
            </div>

            <div className="bg-white dark:bg-dark-card p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4">
              <div className="p-3 bg-blue-50 dark:bg-blue-900/30 text-primary rounded-lg shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1">Location</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Dharmapuri, Tamil Nadu, India
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-[1.5]"
          >
            <form className="bg-white dark:bg-dark-card p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-slate-800 dark:text-white transition-shadow"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-slate-800 dark:text-white transition-shadow"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-slate-800 dark:text-white transition-shadow"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows="5"
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-slate-800 dark:text-white transition-shadow resize-none"
                  placeholder="Hello Aswathi, I'd like to discuss..."
                ></textarea>
              </div>
              
              <button 
                type="button" 
                className="w-full py-4 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg flex items-center justify-center gap-2 transition-colors focus:outline-none focus:ring-4 focus:ring-primary/30"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
