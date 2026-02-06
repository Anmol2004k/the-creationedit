
import React from 'react';
import { PRICING } from '../constants';
import MotionWrapper from './MotionWrapper';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <MotionWrapper className="text-center mb-16">
          <span className="text-sm uppercase tracking-widest text-white/40 font-bold mb-4 block">Investment</span>
          <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tighter">TRANSPARENT PRICING</h2>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING.map((plan, idx) => (
            <MotionWrapper 
              key={plan.id} 
              delay={idx * 0.1}
              className={`p-10 rounded-3xl border transition-all duration-500 ${
                plan.isPopular ? 'bg-white text-black border-white' : 'bg-transparent border-white/10 text-white'
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="text-4xl font-black mb-8">{plan.price}</div>
              
              <ul className="space-y-4 mb-10">
                {plan.features.map(f => (
                  <li key={f} className="flex items-center space-x-2 text-sm opacity-80">
                    <svg className={`w-5 h-5 ${plan.isPopular ? 'text-black' : 'text-white/40'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-full font-bold transition-all ${
                plan.isPopular ? 'bg-black text-white hover:bg-gray-800' : 'bg-white text-black hover:bg-gray-200'
              }`}>
                Choose Plan
              </button>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
