import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 sm:py-20">
      
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 overflow-hidden">
         <div className="absolute top-1/4 left-[-120px] sm:left-[-180px] w-[200px] sm:w-[360px] h-[200px] sm:h-[360px] bg-white/5 rounded-full blur-[70px]" />
         <div className="absolute bottom-1/4 right-[-120px] sm:right-[-180px] w-[220px] sm:w-[420px] h-[220px] sm:h-[420px] bg-indigo-500/10 rounded-full blur-[80px]" />
</div>

      <div className="container mx-auto px-5 relative z-10 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-5"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
          <span className="text-[9px] sm:text-xs uppercase tracking-widest text-white/60">
            Crafting Stories Frame by Frame
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-5xl md:text-7xl lg:text-[8rem] font-black tracking-tight leading-tight font-heading mb-5"
        >
            CINEMATIC EDITS
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/70 to-white/30">
            FOR MODERN BRANDS.
          </span>
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.4 }}
          className="max-w-sm sm:max-w-xl mx-auto text-sm sm:text-base md:text-lg font-light mb-8"
        >
          We are a boutique video editing agency specializing in high-end
          post-production for brands that value visual excellence.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#work"
            className="w-full sm:w-auto px-7 py-3 bg-white text-black font-bold rounded-full text-sm"
          >
            View Our Work
          </a>

          <a
            href="#services"
            className="w-full sm:w-auto px-7 py-3 border border-white/20 rounded-full font-bold text-sm hover:bg-white/10 transition"
          >
            Explore Services
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center"
      >
        <span className="text-[10px] uppercase tracking-widest text-white/30 mb-1">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
