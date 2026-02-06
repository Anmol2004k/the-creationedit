import React, { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';

interface MotionWrapperProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
}

const MotionWrapper: React.FC<MotionWrapperProps> = ({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = ''
}) => {
  // Use explicit Variants type and cast the ease array to a tuple of 4 numbers to satisfy framer-motion's Easing type requirement
  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number],
        delay: delay,
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;