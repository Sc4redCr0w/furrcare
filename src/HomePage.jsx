



import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import FloatingPaws from './components/FloatingPaws.jsx';
import Chatbot from './Chatbot.jsx';

const HomePage = ({ user, onLogout, onAnimalClick, onNavigateToGrooming, onNavigateToCheckup }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [stories, setStories] = useState([]);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [showStoriesModal, setShowStoriesModal] = useState(false);

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
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      })
      .catch(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      });
  }, []);

  // Load stories data
  useEffect(() => {
    const loadStories = async () => {
      try {
        const response = await fetch('/stories.json');
        const storiesData = await response.json();
        setStories(storiesData);
      } catch (error) {
        console.error('Error loading stories:', error);
      }
    };

    loadStories();
  }, []);

  const openStoriesModal = () => setShowStoriesModal(true);
  const closeStoriesModal = () => setShowStoriesModal(false);

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
              ease: 'easeInOut',
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

  if (isLoading) return <LoadingAnimation />;

  return (
    <div className="home-page bg-black text-white min-h-screen relative overflow-hidden">
      {/* Floating Paw Backgrounds */}
      <FloatingPaws />

      {/* Navbar */}
      <Navbar
        user={user}
        onLogout={onLogout}
        onNavigateToCheckup={onNavigateToCheckup}
        onNavigateToGrooming={onNavigateToGrooming}
        currentPage="home"
      />

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
              <button className="learn-more-btn bg-orange-400 hover:bg-orange-500 text-black px-10 py-4 rounded-full text-lg font-medium transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Pet Gallery */}
        <section className="pet-gallery grid grid-cols-1 md:grid-cols-4 gap-8 p-4">
          {/* Dog */}
          <div
            className="pet-card rounded-3xl hover:transform hover:-translate-y-2 transition-transform duration-300 relative group cursor-pointer border-2 border-white/20"
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

          {/* Cat */}
          <div
            className="pet-card rounded-3xl hover:transform hover:-translate-y-2 transition-transform duration-300 relative group cursor-pointer border-2 border-white/20"
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

          {/* Rabbit */}
          <div
            className="pet-card rounded-3xl hover:transform hover:-translate-y-2 transition-transform duration-300 relative group cursor-pointer border-2 border-white/20"
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

          {/* Turtle */}
          <div
            className="pet-card rounded-3xl hover:transform hover:-translate-y-2 transition-transform duration-300 relative group cursor-pointer border-2 border-white/20"
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

      {/* Stories Button */}
      <motion.button
        onClick={openStoriesModal}
        className="fixed bottom-8 left-8 bg-orange-400 hover:bg-orange-500 text-black px-6 py-3 rounded-full font-semibold text-lg shadow-2xl z-20 flex items-center gap-2 transition-colors duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span>📖</span>
        Stories
      </motion.button>

      {/* Stories Modal */}
      <AnimatePresence>
        {showStoriesModal && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-50 overflow-y-auto"
          >
            <FloatingPaws />
            <button
              onClick={closeStoriesModal}
              className="absolute top-8 right-8 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 z-10"
            >
              ✕
            </button>

            <div className="relative z-10 max-w-6xl mx-auto px-8 py-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-center">Success Stories</h2>
              {stories.length > 0 && (
                <div className="story-card bg-white/10 rounded-3xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold">{stories[currentStoryIndex].petName}</h3>
                  <p className="text-gray-300 mt-4">{stories[currentStoryIndex].story}</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chatbot Button */}
      <div className="fixed bottom-4 right-4 bg-orange-400 hover:bg-orange-500">
        <Chatbot />
      </div>
    </div>
  );
};

export default HomePage;
