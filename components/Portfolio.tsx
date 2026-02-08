import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO } from "../constants";
import MotionWrapper from "./MotionWrapper";

const Portfolio: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section id="work" className="py-10 md:py-16 bg-[#050505]">
      <div className="container mx-auto px-6">
        <MotionWrapper className="mb-8 md:mb-12">
          <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-2 block">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-6xl font-black font-heading tracking-tighter uppercase leading-none">
            OUR WORKS
          </h2>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {PORTFOLIO.map((project: any, index: number) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
              className="group cursor-pointer"
              onClick={() =>
                project.videoEmbedId &&
                setActiveVideo(project.videoEmbedId)
              }
            >
              {/* Thumbnail */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-white/5">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />

                {/* Play Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-all duration-300">
                    <svg
                      className="w-5 h-5 text-black fill-current translate-x-0.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="mt-4">
                <span className="text-[9px] uppercase tracking-[0.2em] text-white/30 font-bold mb-0.5 block">
                  {project.category} — {project.client}
                </span>
                <h3 className="text-base md:text-lg font-bold font-heading group-hover:text-white transition-colors">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-12 backdrop-blur-xl"
            onClick={() => setActiveVideo(null)}
          >
            {/* Close Button */}
            <motion.button
              className="absolute top-4 right-4 text-white/50 hover:text-white p-2"
              onClick={() => setActiveVideo(null)}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l18 18"
                />
              </svg>
            </motion.button>

            {/* Video Frame */}
            <motion.div
              className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-2xl bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                title="Video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
