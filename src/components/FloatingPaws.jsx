import React from 'react';
import { motion } from 'framer-motion';

const floatingVariants = {
  initial: { y: 0, opacity: 0.6 },
  animate: {
    y: [0, -20, 0],
    opacity: [0.6, 0.8, 0.6],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const FloatingPaws = () => {
  return (
    <>
      {/* Floating Paw Backgrounds */}
      <motion.div
        className="absolute top-20 left-20 text-white/60 text-9xl"
        variants={floatingVariants}
        initial="initial"
        animate="animate"
      >
        🐾
      </motion.div>

      <motion.div
        className="absolute top-16 right-16 text-white/50 text-8xl"
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 1 }}
      >
        🐾
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-16 text-white/55 text-10xl"
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 2 }}
      >
        🐾
      </motion.div>

      <motion.div
        className="absolute bottom-24 right-20 text-white/60 text-9xl"
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.5 }}
      >
        🐾
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-8 text-white/45 text-7xl"
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 1.5 }}
      >
        🐾
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-8 text-white/50 text-8xl"
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 2.5 }}
      >
        🐾
      </motion.div>
    </>
  );
};

export default FloatingPaws;
