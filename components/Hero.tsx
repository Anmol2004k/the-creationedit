 import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-10 md:pt-20 overflow-hidden">
      {/* Background Decor - Mobile par sizes thodi kam ki hain taaki lag na kare */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-white/5 rounded-full blur-[80px] md:blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-indigo-500/10 rounded-full blur-[100px] md:blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        {/* Badge - Mobile par text thoda chota kiya */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 md:mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
          <span className="text-[10px] md:text-xs font-medium uppercase tracking-widest text-white/60">Currently Accepting Projects</span>
        </motion.div>

        {/* Heading - Mobile (text-4xl), Tablet (text-7xl), Desktop (text-8xl+) */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-8xl lg:text-[9rem] font-black tracking-tighter leading-[1] md:leading-[0.9] font-heading mb-6 md:mb-8"
        >
          CINEMATIC <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/50 to-white/20">STORYTELLING</span>
        </motion.h1>

        {/* Paragraph - Text alignment aur width fix ki */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-md md:max-w-2xl mx-auto text-base md:text-xl font-light mb-10 md:mb-12 px-2"
        >
          We are an award-winning boutique video editing agency specializing in high-end post-production for brands who value visual excellence.
        </motion.p>

        {/* Buttons - Mobile par stacked aur full width kiye hain */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 px-4"
        >
          <a 
            href="#work" 
            className="w-full sm:w-auto group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden text-center"
          >
            <span className="relative z-10">View Our Work</span>
            <div className="absolute inset-0 bg-gray-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
          </a>
          <a 
            href="#services" 
            className="w-full sm:w-auto px-8 py-4 bg-transparent text-white font-bold border border-white/20 rounded-full hover:bg-white/5 transition-all text-center"
          >
            Explore Services
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator - Mobile par chupa sakte hain ya chota kar sakte hain */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="hidden sm:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center"
      >
        <span className="text-[10px] uppercase tracking-widest text-white/30 mb-2 font-bold">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
