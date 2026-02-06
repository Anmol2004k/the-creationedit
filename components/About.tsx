
import React from 'react';
import MotionWrapper from './MotionWrapper';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <MotionWrapper direction="right">
              <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-3xl">
                <img 
                  src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1200" 
                  alt="Creative Studio" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white text-black p-8 rounded-full flex items-center justify-center text-center font-bold text-sm z-20 transform -rotate-12 border-8 border-[#050505]">
                SINCE <br /> 2021
              </div>
            </MotionWrapper>
          </div>

          <div className="flex flex-col justify-center">
            <MotionWrapper>
              <span className="text-sm uppercase tracking-widest text-white/40 font-bold mb-6 block">Our Ethos</span>
              <h2 className="text-4xl md:text-5xl font-black font-heading mb-8 tracking-tighter uppercase">{`WE DON'T JUST CUT CLIPS. WE SCULPT EMOTIONS.`}</h2>
              <div className="space-y-6 text-lg text-white/60 font-light leading-relaxed">
                <p>
                  Founded by a collective of filmmakers and tech enthusiasts, <span className="text-white font-medium">{`{TheCreationEdit}`}</span> was born out of a desire to bridge the gap between technical efficiency and artistic integrity.
                </p>
                <p>
                  Based in London but working globally, we've partnered with Fortune 500 companies and boutique fashion labels alike. Our approach is minimalist yet meaningful—every frame serves a purpose.
                </p>
              </div>
              
              <div className="mt-12 grid grid-cols-3 gap-8 pt-12 border-t border-white/10">
                <div>
                  <div className="text-3xl font-bold text-white mb-1">150+</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Films</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">8</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Awards</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">32</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Partners</div>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
