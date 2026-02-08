
import React from 'react';
import { SERVICES } from '../constants';
import MotionWrapper from './MotionWrapper';
import * as LucideIcons from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-12 md:py-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <MotionWrapper className="mb-10 md:mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold mb-3 block">Services We Provides</span>
          <h2 className="text-4xl md:text-7xl font-black font-heading tracking-tighter uppercase leading-none">WHAT WE CREATE.</h2>
        </MotionWrapper>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            const IconComponent = (LucideIcons as any)[service.icon] || LucideIcons.HelpCircle;
            return (
              <MotionWrapper key={service.id} delay={index * 0.1} className="h-full">
                <div className="group h-full p-8 bg-white/[0.03] border border-white/5 rounded-[2.5rem] hover:bg-white/[0.07] hover:border-white/20 transition-all duration-500 flex flex-col items-start relative overflow-hidden">
                  {/* Subtle Background Glow */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 blur-[50px] group-hover:bg-white/10 transition-colors duration-500 rounded-full"></div>
                  
                  <div className="mb-8 p-4 bg-white/5 rounded-2xl text-white/80 group-hover:text-white transition-all group-hover:scale-110 group-hover:rotate-3 duration-500">
                    <IconComponent size={32} strokeWidth={1.2} />
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold mb-4 uppercase tracking-tighter leading-tight font-heading group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-white/40 text-sm leading-relaxed mb-6 group-hover:text-white/60 transition-colors">
                    {service.description}
                  </p>
                  
                  <div className="mt-auto pt-4 flex items-center space-x-2 text-[10px] uppercase tracking-widest font-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Explore More</span>
                    <LucideIcons.ArrowRight size={14} />
                  </div>
                </div>
              </MotionWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
