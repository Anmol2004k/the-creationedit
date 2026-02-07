import React, { useState } from 'react';
import { SERVICES } from '../constants';
import MotionWrapper from './MotionWrapper';

const Services: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleDetails = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section id="services" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">

        {/* LEFT + RIGHT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">

          {/* LEFT TEXT */}
          <div className="lg:col-span-5">
            <MotionWrapper>
              <span className="text-sm uppercase tracking-widest text-white/40 font-bold mb-4 block">
                Expertise
              </span>

              <h2 className="text-5xl md:text-6xl font-black font-heading mb-8 tracking-tighter leading-none">
                CRAFTING <br /> THE FLOW.
              </h2>

              {/* ✨ Expanded Text */}
              <p className="text-lg text-white/60 font-light leading-relaxed mb-6">
                I focus on building modern, scalable, and visually engaging digital
                solutions. From responsive web interfaces to full-stack
                applications, every service is crafted to deliver performance,
                usability, and impact.
              </p>

              <p className="text-lg text-white/60 font-light leading-relaxed">
                My goal is to help businesses and individuals transform ideas
                into powerful digital experiences through clean design,
                efficient architecture, and cutting-edge technologies.
              </p>
            </MotionWrapper>
          </div>

          {/* RIGHT SERVICES */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SERVICES.map((service, index) => (
              <MotionWrapper
                key={service.id}
                delay={index * 0.1}
                className="p-8 bg-white/5 border border-white/5 rounded-3xl hover:border-white/20 transition-all duration-500 group"
              >
                <div className="text-4xl mb-6 transform transition-transform group-hover:-translate-y-2 duration-300">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold mb-3">
                  {service.title}
                </h3>

                <p className="text-white/50 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* KNOW MORE BUTTON */}
                <button
                  onClick={() => toggleDetails(service.id)}
                  className="px-4 py-2 text-sm font-semibold border border-white/20 rounded-xl hover:bg-white hover:text-black transition"
                >
                  {activeId === service.id ? "Hide Details" : "Know More"}
                </button>

                {/* EXPANDED DETAILS */}
                {activeId === service.id && (
                  <div className="mt-4 text-white/60 text-sm leading-relaxed">
                    {service.details}
                  </div>
                )}
              </MotionWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
