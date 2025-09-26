import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HomePage = ({ user, onLogout, onAnimalClick }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  
  const imageSources = ['/dog.png', '/cat.png', '/rabbit.png', '/turtle.png'];
  const totalImages = imageSources.length;

  useEffect(() => {
    let loadedCount = 0;
    
    const imagePromises = imageSources.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          loadedCount++;
          setImagesLoaded(loadedCount);
          resolve();
        };
        img.onerror = reject;
        img.src = src;
      });
    });

    Promise.all(imagePromises)
      .then(() => {
        // Add a small delay to show the loading animation
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      })
      .catch((error) => {
        console.error('Error loading images:', error);
        // Even if images fail to load, hide loading after timeout
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      });
  }, []);

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
        className="text-white text-xl font-medium mb-4"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        Loading FURCARE...
      </motion.div>
      <div className="text-orange-400 text-sm">
        {imagesLoaded}/{totalImages} images loaded
      </div>
    </div>
  );

  if (isLoading) {
    return <LoadingAnimation />;
  }
  return (
    <div className="home-page bg-black text-white min-h-screen">
      {/* Navigation Header */}
      <header className="navbar">
        <div className="nav-container max-w-6xl mx-auto flex justify-between items-center py-6 px-8">
          <div className="logo flex items-center gap-3">
            <div className="paw-icon text-2xl text-orange-400">🐾</div>
            <span className="brand-name text-2xl font-bold text-white">FURCARE</span>
          </div>
          <nav className="nav-menu flex gap-8 items-center">
            <a href="#checkups" className="nav-item text-white hover:text-orange-400 transition-colors duration-300 text-sm font-medium">CHECKUPS</a>
            <a href="#grooming" className="nav-item text-white hover:text-orange-400 transition-colors duration-300 text-sm font-medium">GROOMING</a>
            <a href="#training" className="nav-item text-white hover:text-orange-400 transition-colors duration-300 text-sm font-medium">TRAINING</a>
            <a href="#store" className="nav-item text-white hover:text-orange-400 transition-colors duration-300 text-sm font-medium">STORE</a>
            <a href="#account" className="nav-item text-white hover:text-orange-400 transition-colors duration-300 text-sm font-medium">YOUR ACCOUNT</a>
            <div className="flex items-center gap-4 ml-4">
              <span className="text-sm text-gray-300">Welcome, {user?.name}</span>
              <button 
                onClick={onLogout}
                className="bg-orange-400 hover:bg-orange-500 text-black px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300"
              >
                Logout
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content max-w-6xl mx-auto px-8 py-16">
        {/* Hero Section */}
        <section className="hero-section mb-16">
          <div className="hero-content grid grid-cols-1 items-center">
            <div className="hero-text p-10 border-2 border-white/20 rounded-3xl bg-white/5 backdrop-blur-sm text-center">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-8 text-white">
                Paws, Claws, and Endless Love
              </h1>
              <p className="text-lg lg:text-xl leading-relaxed mb-10 text-white/80">
                We specialize in matching families with the right pets while offering
                grooming, training, and health services for lifelong happiness.
              </p>
              <button className="learn-more-btn bg-transparent border-2 border-white text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-black transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Pet Gallery */}
        <section className="pet-gallery grid grid-cols-1 md:grid-cols-4 gap-8 p-4">
          <div 
            className="pet-card rounded-3xl hover:transform hover:-translate-y-2 transition-transform duration-300 relative group cursor-pointer"
            onClick={() => onAnimalClick('dog')}
          >
            <img 
              src="/dog.png" 
              alt="Happy dogs" 
              className="pet-image w-full h-64 object-cover rounded-lg hover:shadow-2xl hover:shadow-white/50 transition-all duration-300 group-hover:brightness-50"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <span className="text-white text-2xl font-bold">DOG</span>
            </div>
          </div>
          <div 
            className="pet-card rounded-3xl hover:transform hover:-translate-y-2 transition-transform duration-300 relative group cursor-pointer"
            onClick={() => onAnimalClick('cat')}
          >
            <img 
              src="/cat.png" 
              alt="Happy cats" 
              className="pet-image w-full h-64 object-cover rounded-lg hover:shadow-2xl hover:shadow-white/50 transition-all duration-300 group-hover:brightness-50"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <span className="text-white text-2xl font-bold">CAT</span>
            </div>
          </div>
          <div 
            className="pet-card rounded-3xl hover:transform hover:-translate-y-2 transition-transform duration-300 relative group cursor-pointer"
            onClick={() => onAnimalClick('rabbit')}
          >
            <img 
              src="/rabbit.png" 
              alt="Pet rabbits" 
              className="pet-image w-full h-64 object-cover rounded-lg hover:shadow-2xl hover:shadow-white/50 transition-all duration-300 group-hover:brightness-50"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <span className="text-white text-2xl font-bold">RABBIT</span>
            </div>
          </div>
          <div 
            className="pet-card rounded-3xl hover:transform hover:-translate-y-2 transition-transform duration-300 relative group cursor-pointer"
            onClick={() => onAnimalClick('turtle')}
          >
            <img 
              src="/turtle.png" 
              alt="Pet turtles" 
              className="pet-image w-full h-64 object-cover rounded-lg hover:shadow-2xl hover:shadow-white/50 transition-all duration-300 group-hover:brightness-50"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <span className="text-white text-2xl font-bold">TURTLE</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
