import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, User, MessageSquare } from 'lucide-react';
import SectionHeading from './SectionHeading';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      if (response.ok) {
        setStatus({ loading: false, success: true, error: null });
        setFormData({ name: '', email: '', message: '' });
        // Optional: clear success message after 5 seconds
        setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);
      } else {
        setStatus({ loading: false, success: false, error: data.error || 'Failed to send message.' });
      }
    } catch (err) {
      setStatus({ loading: false, success: false, error: 'Network error. Please try again.' });
    }
  };

  return (
    <section id="contact" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
        >
          <SectionHeading subtitle="Connect" title="Let's Talk Data" />
          <p className="text-xl text-zinc-500 dark:text-zinc-400 mb-12 leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <div className="space-y-6">
            <motion.div 
              whileHover={{ x: 10 }}
              className="flex items-center gap-6 p-6 bg-zinc-50 dark:bg-zinc-900 rounded-3xl border border-zinc-100 dark:border-zinc-800"
            >
              <div className="w-12 h-12 bg-white dark:bg-zinc-800 rounded-2xl flex items-center justify-center text-purple-600">
                <Mail size={20} />
              </div>
              <div>
                <div className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">Direct Email</div>
                <div className="font-bold">divyanjaliitiwarii@gmail.com</div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.form 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
          onSubmit={handleSubmit}
          className="bg-white dark:bg-zinc-900 p-8 md:p-12 rounded-[3rem] border border-zinc-100 dark:border-zinc-800 shadow-sm space-y-8 relative overflow-hidden"
        >
          {status.success && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-0 left-0 right-0 p-4 bg-green-500/10 border-b border-green-500/20 text-green-600 dark:text-green-400 text-center font-semibold text-sm"
            >
              Message sent successfully! Please check your email.
            </motion.div>
          )}
          {status.error && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-0 left-0 right-0 p-4 bg-red-500/10 border-b border-red-500/20 text-red-600 dark:text-red-400 text-center font-semibold text-sm"
            >
              {status.error}
            </motion.div>
          )}

          <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${status.success || status.error ? 'pt-8' : ''}`}>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-800 dark:text-zinc-100 ml-1 flex items-center gap-2">
                <User size={12} className="text-purple-600" /> Full Name
              </label>
              <motion.input 
                whileFocus={{ scale: 1.02 }}
                type="text" 
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. John Doe" 
                className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-800 dark:text-zinc-100 ml-1 flex items-center gap-2">
                <Mail size={12} className="text-purple-600" /> Business Email
              </label>
              <motion.input 
                whileFocus={{ scale: 1.02 }}
                type="email" 
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com" 
                className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-zinc-800 dark:text-zinc-100 ml-1 flex items-center gap-2">
              <MessageSquare size={12} className="text-purple-600" /> Your Message
            </label>
            <motion.textarea 
              whileFocus={{ scale: 1.01 }}
              rows="4" 
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Briefly describe your project goals..." 
              className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all resize-none"
            ></motion.textarea>
          </div>
          <motion.button 
            disabled={status.loading}
            whileHover={{ scale: status.loading ? 1 : 1.02 }}
            whileTap={{ scale: status.loading ? 1 : 0.98 }}
            className={`w-full py-5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-purple-500/20 ${status.loading ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {status.loading ? 'Sending...' : 'Submit Message'} <Send size={18} />
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
