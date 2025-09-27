import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import FloatingPaws from './components/FloatingPaws.jsx';

const TurtleBreedsPage = ({ onGoHome, onAdoptNow, user, onLogout, onNavigateToCheckup, onNavigateToGrooming }) => {
  const [isLoading, setIsLoading] = useState(true);
  const turtleSpecies = [
    {
      id: 1,
      name: "RED-EARED SLIDER",
      image: "/turtle.png",
      description: "Lorem ipsum praesent ac massa at ligula reet est iaculis. Vivamus est mist aliquet elit ac nisl.",
    },
    {
      id: 2,
      name: "PAINTED TURTLE",
      image: "/turtle.png",
      description: "Lorem ipsum praesent ac massa at ligula reet est iaculis. Vivamus est mist aliquet elit ac nisl.",
    },
    {
      id: 3,
      name: "BOX TURTLE",
      image: "/turtle.png",
      description: "Lorem ipsum praesent ac massa at ligula reet est iaculis. Vivamus est mist aliquet elit ac nisl.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const listRef = useRef(null);
  const itemRefs = useRef([]);

  // Simulate loading time and hide loading animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  // Smoothly keep the active card centered in view when highlight changes
  useEffect(() => {
    const el = itemRefs.current[currentIndex];
    if (el && listRef.current) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? turtleSpecies.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === turtleSpecies.length - 1 ? 0 : prev + 1));
  };

  // Loading Animation Component
  const LoadingAnimation = () => (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      <div className="flex items-center space-x-4 mb-8">
        {[...Array(5)].map((_, index) => (
          <motion.div
            key={index}
            className="text-6xl text-orange-400"
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 15, -15, 0],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: index * 0.2,
              ease: "easeInOut"
            }}
          >
            🐾
          </motion.div>
        ))}
      </div>
      <motion.div
        className="text-white text-xl font-medium"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        Loading Turtle Species...
      </motion.div>
    </div>
  );

  if (isLoading) {
    return <LoadingAnimation />;
  }

  return (
    <div className="min-h-screen w-full bg-black text-white relative overflow-hidden">
      {/* Floating Paw Backgrounds */}
      <FloatingPaws />

      {/* Header */}
      <Navbar 
        user={user}
        onLogout={onLogout}
        onGoHome={onGoHome}
        onNavigateToCheckup={onNavigateToCheckup}
        onNavigateToGrooming={onNavigateToGrooming}
        currentPage="breeds"
      />

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-100px)] px-8 relative z-10">
        <div className="max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left Side - Text */}
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <div className="text-orange-400 text-6xl">»»»»</div>
                <div className="grid grid-cols-4 gap-2">
                  {Array(16).fill(0).map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-white/30 rounded-full"></div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-6">
                <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                  <div className="text-white">EXPLORE</div>
                  <div className="text-orange-400">TURTLE SPECIES</div>
                </h1>
                
                <p className="text-white/80 text-lg leading-relaxed max-w-md">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                </p>
                
                <button onClick={onAdoptNow} className="bg-orange-400 hover:bg-orange-500 text-black px-8 py-3 rounded-full font-bold transition-colors duration-300 flex items-center gap-2">
                  ADOPT NOW
                  <span className="text-xl">▶</span>
                </button>
              </div>

              <div className="grid grid-cols-4 gap-2">
                {Array(16).fill(0).map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-white/30 rounded-full"></div>
                ))}
              </div>
              
              <div className="text-orange-400 text-6xl">»»»»</div>
            </motion.div>

            {/* Right Side - Vertical Species List with Highlight and Scroll Effects */}
            <motion.div 
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* top/bottom fade gradients to hint scroll */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-black to-transparent z-10" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-black to-transparent z-10" />

              <div ref={listRef} className="max-h-[60vh] overflow-y-auto overflow-x-visible no-scrollbar px-3 py-2 space-y-4 snap-y snap-mandatory">
                {turtleSpecies.map((turtle, i) => {
                  const active = i === currentIndex;
                  return (
                    <motion.div
                      key={turtle.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      ref={(el) => (itemRefs.current[i] = el)}
                      onClick={() => setCurrentIndex(i)}
                      className={`relative mx-2 text-white rounded-2xl p-6 shadow-lg bg-[#0d1117] transition-all duration-300 cursor-pointer snap-center ${
                        active
              ? 'z-20 ring-2 ring-orange-400 ring-offset-2 ring-offset-black opacity-100 scale-105 drop-shadow-[0_0_16px_rgba(255,255,255,0.35)]'
                          : ''
                      }`}
                    >
                      <div className="flex items-center gap-6">
                        <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                          <img 
                            src={turtle.image} 
                            alt={turtle.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-2">{turtle.name}</h3>
                          <p className="text-gray-300 text-sm leading-relaxed mb-4">
                            {turtle.description}
                          </p>
                          {active && (
                            <button className="bg-orange-400 hover:bg-orange-500 text-black px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 flex items-center gap-2">
                              Read More
                              <span className="text-lg">▶</span>
                            </button>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Navigation arrows (top and bottom) to change highlight */}
              <div className="absolute left-1/2 -translate-x-1/2 -top-8 z-20">
                <button 
                  onClick={handlePrev}
                  aria-label="Previous"
                  className="bg-orange-400/20 hover:bg-orange-400/30 text-orange-400 w-10 h-10 flex items-center justify-center rounded-full backdrop-blur-sm transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </button>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 z-20">
                <button 
                  onClick={handleNext}
                  aria-label="Next"
                  className="bg-orange-400/20 hover:bg-orange-400/30 text-orange-400 w-10 h-10 flex items-center justify-center rounded-full backdrop-blur-sm transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TurtleBreedsPage;
