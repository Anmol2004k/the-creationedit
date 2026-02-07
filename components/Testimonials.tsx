
import React from 'react';
import { TESTIMONIALS } from '../constants';
import MotionWrapper from './MotionWrapper';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#050505]">
      <div className="container mx-auto px-6">
        <MotionWrapper className="text-center mb-16">
          <span className="text-sm uppercase tracking-widest text-white/40 font-bold mb-4 block">Trust</span>
          <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tighter">WHAT CLIENTS SAY</h2>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <MotionWrapper 
              key={t.id} 
              delay={idx * 0.2}
              className="p-10 bg-white/5 border border-white/5 rounded-3xl relative"
            >
              <div className="absolute top-10 right-10 text-6xl text-white/10 font-serif">"</div>
              <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed mb-10 italic">
                {t.content}
              </p>
              <div className="flex items-center space-x-4">
                <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full grayscale" />
                <div>
                  <h4 className="font-bold text-lg">{t.name}</h4>
                  <p className="text-sm text-white/40">{t.role}, {t.company}</p>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
