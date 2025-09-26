import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import FloatingPaws from './components/FloatingPaws.jsx';

const GroomingPage = ({ onGoHome, user, onLogout, onNavigateToCheckup, onNavigateToGrooming }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Haircut & Styling",
      description: "Professional grooming for a fresh new look",
      image: "/hairstyle.jpg", // Dedicated hairstyle grooming image
    },
    {
      title: "Bath & Spa",
      description: "Relaxing bath with premium products",
      image: "/bathnspa.jpg", // Dedicated bath and spa grooming image
    },
    {
      title: "Nail Care",
      description: "Safe nail trimming and paw care",
      image: "/nailcare.jpg", // Dedicated nail care grooming image
    }
  ];

  const services = [
    {
      title: "Bath & Blow Dry",
      description: "Gentle shampoos for a shiny coat",
      icon: "🛁",
      price: "$35-60",
    },
    {
      title: "Nail Trimming & Filing",
      description: "Safe and stress-free paw care",
      icon: "✂️",
      price: "$15-25",
    },
    {
      title: "Spa Packages",
      description: "Full aromatherapy bathing and conditioning",
      icon: "🌸",
      price: "$80-120",
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Auto-scroll slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grooming-page bg-black text-white min-h-screen relative overflow-hidden">
      {/* Floating Paw Backgrounds */}
      <FloatingPaws />
      
      {/* Navigation Header */}
      <Navbar 
        user={user}
        onLogout={onLogout}
        onGoHome={onGoHome}
        onNavigateToCheckup={onNavigateToCheckup}
        onNavigateToGrooming={onNavigateToGrooming}
        currentPage="grooming"
      />

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="relative mb-12">
          <div className="bg-[#1a1a1a] rounded-3xl overflow-hidden relative flex items-center justify-between p-8 lg:p-12 min-h-[350px]">
            <div className="flex-1 pr-8">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                <span className="text-orange-400">Grooming</span> Services for Pets
              </h1>
              <p className="text-lg text-gray-400 max-w-md">
                Keep your furry friends clean, healthy, and happy with our professional grooming care.
              </p>
            </div>
            <div className="flex-1 relative">
              <div className="bg-black rounded-3xl p-6 text-center shadow-lg">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {slides[currentSlide].title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {slides[currentSlide].description}
                </p>
                <img 
                  src={slides[currentSlide].image} 
                  alt={slides[currentSlide].title}
                  className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-gray-700"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#1a1a1a] rounded-3xl p-6 hover:scale-105 transition-transform cursor-pointer"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold mb-2">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-white">{service.price}</span>
                <button className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full">
                  ➝
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold mb-4">Ready to pamper your pet?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Book an appointment today and give your furry friend the care they deserve.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold">
            Schedule Appointment
          </button>
        </div>
      </main>
    </div>
  );
};

export default GroomingPage;
