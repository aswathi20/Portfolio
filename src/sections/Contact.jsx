import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        submitting: false,
        success: false,
        error: true,
        message: 'Please fill in all required fields (Name, Email, Message).'
      });
      return;
    }

    setStatus({ submitting: true, success: false, error: false, message: '' });

    try {
      // Send directly to aswathi2k01@gmail.com via FormSubmit AJAX service
      const response = await fetch("https://formsubmit.co/ajax/aswathi2k01@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `New Portfolio Message from ${formData.name}`,
          message: formData.message,
          _subject: `New Portfolio Inquiry from ${formData.name}: ${formData.subject || 'General'}`,
          _template: 'table'
        })
      });

      if (response.ok) {
        setStatus({
          submitting: false,
          success: true,
          error: false,
          message: 'Thank you! Your message has been sent directly to aswathi2k01@gmail.com. I will get back to you promptly!'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Service response not ok');
      }
    } catch (err) {
      // Fallback: trigger user's native mail client directly to aswathi2k01@gmail.com
      const mailtoUrl = `mailto:aswathi2k01@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(
        `Hi Aswathi,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      window.location.href = mailtoUrl;

      setStatus({
        submitting: false,
        success: true,
        error: false,
        message: 'Opening your email client to send your message directly to aswathi2k01@gmail.com!'
      });
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-blue-50/20 to-white dark:from-slate-950 dark:via-[#0c1429] dark:to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Mail size={14} /> Direct Inbox Delivery
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-base md:text-lg">
            Send me a message below—it delivers directly to my email at <strong className="text-blue-600 dark:text-blue-400">aswathi2k01@gmail.com</strong>.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Contact Details Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-6"
          >
            <div className="bg-white dark:bg-[#121c35] p-6 rounded-2xl border border-slate-200 dark:border-blue-500/20 shadow-sm flex items-start gap-4 hover:border-blue-400 transition-colors">
              <div className="p-3.5 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-xl shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Direct Email</h3>
                <a href="mailto:aswathi2k01@gmail.com" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
                  aswathi2k01@gmail.com
                </a>
                <p className="text-xs text-slate-400 mt-1">Inbox monitored daily</p>
              </div>
            </div>

            <div className="bg-white dark:bg-[#121c35] p-6 rounded-2xl border border-slate-200 dark:border-blue-500/20 shadow-sm flex items-start gap-4 hover:border-blue-400 transition-colors">
              <div className="p-3.5 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-xl shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Call / WhatsApp</h3>
                <a href="tel:+919360885955" className="text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium">
                  +91-9360885955
                </a>
                <p className="text-xs text-slate-400 mt-1">Available for calls & discussions</p>
              </div>
            </div>

            <div className="bg-white dark:bg-[#121c35] p-6 rounded-2xl border border-slate-200 dark:border-blue-500/20 shadow-sm flex items-start gap-4 hover:border-blue-400 transition-colors">
              <div className="p-3.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-xl shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Location</h3>
                <p className="text-slate-600 dark:text-slate-300 font-medium">
                  Dharmapuri, Tamil Nadu, India
                </p>
                <p className="text-xs text-slate-400 mt-1">Open to remote & on-site opportunities</p>
              </div>
            </div>
          </motion.div>

          {/* Form Column with Direct Email Trigger */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-[1.5]"
          >
            <form 
              onSubmit={handleSubmit}
              className="bg-white dark:bg-[#121c35] p-8 md:p-10 rounded-2xl border border-slate-200 dark:border-blue-500/20 shadow-xl shadow-blue-500/5 relative"
            >
              {/* Status Alert Banner */}
              {status.success && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 flex items-start gap-3">
                  <CheckCircle2 size={20} className="shrink-0 mt-0.5 text-emerald-500" />
                  <p className="text-sm font-medium">{status.message}</p>
                </div>
              )}

              {status.error && (
                <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-700 dark:text-red-300 flex items-start gap-3">
                  <AlertCircle size={20} className="shrink-0 mt-0.5 text-red-500" />
                  <p className="text-sm font-medium">{status.message}</p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-slate-900 dark:text-white transition-all shadow-sm"
                    placeholder="e.g. John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Your Email <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-slate-900 dark:text-white transition-all shadow-sm"
                    placeholder="e.g. john@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Subject
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-slate-900 dark:text-white transition-all shadow-sm"
                  placeholder="e.g. Project Inquiry / Job Opportunity"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea 
                  id="message" 
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-slate-900 dark:text-white transition-all shadow-sm resize-none"
                  placeholder="Hello Aswathi, I'd like to discuss an opportunity..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={status.submitting}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-500/25 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
              >
                {status.submitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" /> Sending to aswathi2k01@gmail.com...
                  </>
                ) : (
                  <>
                    Send Message to Aswathi <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
