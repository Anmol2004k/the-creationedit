
import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO } from '../constants';
import MotionWrapper from './MotionWrapper';

const Portfolio: React.FC = () => {
  return (
    <section id="work" className="py-24 bg-[#050505]">
      <div className="container mx-auto px-6">
        <MotionWrapper className="mb-16">
          <span className="text-sm uppercase tracking-widest text-white/40 font-bold mb-4 block">Portfolio</span>
          <h2 className="text-5xl md:text-7xl font-black font-heading mb-6 tracking-tighter">OUR WORKS</h2>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {PORTFOLIO.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group relative"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-white/5">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-500">
                    <svg className="w-8 h-8 text-black fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-between items-end">
                <div>
                  <span className="text-xs uppercase tracking-widest text-white/40 font-bold mb-1 block">
                    {project.category} — {project.client}
                  </span>
                  <h3 className="text-2xl font-bold font-heading">{project.title}</h3>
                </div>
                <div className="text-white/20 group-hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 flex justify-center">
            <MotionWrapper>
                <button className="px-12 py-5 bg-transparent border border-white/10 rounded-full text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-500">
                    View More
                </button>
            </MotionWrapper>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
