import React from 'react';
import { motion } from 'framer-motion';

const DogBreedsPage = ({ onGoHome }) => {
  const dogBreeds = [
    {
      id: 1,
      name: "PUGS",
      image: "/dog.png",
      description: "Lorem ipsum praesent ac massa at ligula reet est iaculis. Vivamus est mist aliquet elit ac nisl.",
    },
    {
      id: 2,
      name: "BEAGLES",
      image: "/dog.png",
      description: "Lorem ipsum praesent ac massa at ligula reet est iaculis. Vivamus est mist aliquet elit ac nisl.",
    },
    {
      id: 3,
      name: "GOLDEN RETRIEVER",
      image: "/dog.png",
      description: "Lorem ipsum praesent ac massa at ligula reet est iaculis. Vivamus est mist aliquet elit ac nisl.",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 text-white/10 text-6xl">🐾</div>
        <div className="absolute top-40 right-32 text-white/10 text-4xl">🐾</div>
        <div className="absolute bottom-40 left-16 text-white/10 text-8xl">🐾</div>
        <div className="absolute bottom-20 right-20 text-white/10 text-5xl">🐾</div>
        <div className="absolute top-1/2 left-1/4 text-white/10 text-7xl">🐾</div>
        <div className="absolute top-1/3 right-1/4 text-white/10 text-6xl">🐾</div>
      </div>

      {/* Header */}
      <header className="flex items-center justify-between p-6 border-b border-white/20">
        <div className="flex items-center gap-3">
          <div className="text-2xl text-orange-400">🐾</div>
          <span className="text-2xl font-bold">FURCARE</span>
        </div>
        
        <button 
          onClick={onGoHome}
          className="text-white hover:text-orange-400 transition-colors duration-300 underline"
        >
          Go Back To Home Page
        </button>
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-white/10 border border-white/30 rounded-full px-4 py-2 text-white placeholder-white/70 w-64"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70">
              🔍
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-100px)] px-8">
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
                  <div className="text-orange-400">DOG BREEDS</div>
                </h1>
                
                <p className="text-white/80 text-lg leading-relaxed max-w-md">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                </p>
                
                <button className="bg-orange-400 hover:bg-orange-500 text-black px-8 py-3 rounded-full font-bold transition-colors duration-300 flex items-center gap-2">
                  BOOK NOW
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

            {/* Right Side - Dog Breed Cards */}
            <motion.div 
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="space-y-6">
                {dogBreeds.map((breed, index) => (
                  <motion.div
                    key={breed.id}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="text-white rounded-2xl p-6 hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:-translate-y-1"
                    style={{ 
                      backgroundColor: 'rgb(13, 17, 23)',
                      marginLeft: index % 2 === 1 ? '2rem' : '0',
                      zIndex: dogBreeds.length - index 
                    }}
                  >
                    <div className="flex items-center gap-6">
                      <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                        <img 
                          src={breed.image} 
                          alt={breed.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">{breed.name}</h3>
                        <p className="text-gray-300 text-sm leading-relaxed mb-4">
                          {breed.description}
                        </p>
                        
                        <button className="bg-orange-400 hover:bg-orange-500 text-black px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 flex items-center gap-2">
                          Read More
                          <span className="text-lg">▶</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Navigation arrows */}
              <div className="absolute -left-8 top-1/2 transform -translate-y-1/2">
                <button className="w-12 h-12 bg-orange-400 hover:bg-orange-500 rounded-full flex items-center justify-center text-black font-bold text-xl transition-colors duration-300">
                  ‹
                </button>
              </div>
              
              <div className="absolute -right-8 top-1/2 transform -translate-y-1/2">
                <button className="w-12 h-12 bg-orange-400 hover:bg-orange-500 rounded-full flex items-center justify-center text-black font-bold text-xl transition-colors duration-300">
                  ›
                </button>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DogBreedsPage;
