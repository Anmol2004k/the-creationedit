
import React from 'react';
import { SERVICES } from '../constants';
import MotionWrapper from './MotionWrapper';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-5">
            <MotionWrapper>
              <span className="text-sm uppercase tracking-widest text-white/40 font-bold mb-4 block">Expertise</span>
              <h2 className="text-5xl md:text-6xl font-black font-heading mb-8 tracking-tighter leading-none">CRAFTING <br />THE FLOW.</h2>
              <p className="text-xl text-white/60 font-light leading-relaxed">
                Post-production is where the magic happens. We blend technical mastery with creative intuition to deliver content that resonates with global audiences.
              </p>
            </MotionWrapper>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SERVICES.map((service, index) => (
              <MotionWrapper key={service.id} delay={index * 0.1} className="p-8 bg-white/5 border border-white/5 rounded-3xl hover:border-white/20 transition-all duration-500 group">
                <div className="text-4xl mb-6 transform transition-transform group-hover:-translate-y-2 duration-300">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{service.description}</p>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
