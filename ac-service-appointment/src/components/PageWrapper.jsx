import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    scale: 0.9,
    opacity: 0,
  },
  in: {
    scale: 1,
    opacity: 1,
  },
  out: {
    scale: 1.1,
    opacity: 0,
  },
};

const pageTransition = {
  duration: 0.5,
  ease: 'easeInOut',
};

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{ minHeight: '100vh' }}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
