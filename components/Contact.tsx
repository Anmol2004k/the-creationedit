import React from 'react';
import MotionWrapper from './MotionWrapper';
import { useForm, ValidationError } from '@formspree/react';

const Contact: React.FC = () => {
  // 'YOUR_FORM_ID' ki jagah apni Formspree ID daalein
  const [state, handleSubmit] = useForm("xlgwjrnq");

  return (
    <section id="contact" className="py-24 bg-[#050505] border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <MotionWrapper>
              <h2 className="text-5xl md:text-7xl font-black font-heading mb-8 tracking-tighter">READY TO <br />CREATE?</h2>
              <p className="text-xl text-white/50 font-light mb-12">
                Have a project in mind? Let's discuss how we can bring your visuals to life. We typically respond within 24 hours.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-xl font-medium">team@thecreationedit.com</span>
                </div>
                <div className="flex items-center space-x-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-xl font-medium">HARYANA, IND — Global</span>
                </div>
              </div>
            </MotionWrapper>
          </div>

          <div>
            <MotionWrapper direction="left">
              {/* Agar submission successful hai to success message dikhayega */}
              {state.succeeded ? (
                <div className="bg-white/5 p-12 rounded-3xl border border-white/5 text-center">
                  <h3 className="text-2xl font-bold mb-4 text-white">Message Sent!</h3>
                  <p className="text-white/50">Thank you for reaching out. We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 p-8 md:p-12 rounded-3xl border border-white/5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs uppercase tracking-widest text-white/40 font-bold">Name</label>
                      <input 
                        id="name" 
                        name="name" 
                        type="text" 
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-white transition-all" 
                        placeholder="Sonu Sarma" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs uppercase tracking-widest text-white/40 font-bold">Email</label>
                      <input 
                        id="email" 
                        name="email" 
                        type="email" 
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-white transition-all" 
                        placeholder="yourname@example.com" 
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="projectType" className="text-xs uppercase tracking-widest text-white/40 font-bold">Project Type</label>
                    <select 
                      id="projectType" 
                      name="projectType" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-white transition-all appearance-none"
                    >
                      <option className="bg-[#050505]">Cinematic Commercial</option>
                      <option className="bg-[#050505]">YouTube Video</option>
                      <option className="bg-[#050505]">Brand Identity Film</option>
                      <option className="bg-[#050505]">Social Content Series</option>
                      <option className="bg-[#050505]">Brand Reels</option>
                      <option className="bg-[#050505]">Other videos </option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs uppercase tracking-widest text-white/40 font-bold">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      required
                      rows={4} 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-white transition-all resize-none" 
                      placeholder="Tell us about your project..."
                    ></textarea>
                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
                  </div>
                  <button 
                    type="submit" 
                    disabled={state.submitting}
                    className="w-full py-5 bg-white text-black font-black uppercase tracking-widest rounded-xl hover:bg-gray-100 transition-all transform active:scale-95 disabled:opacity-50"
                  >
                    {state.submitting ? "Sending..." : "Send Inquiry"}
                  </button>
                </form>
              )}
            </MotionWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;