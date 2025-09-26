import React, { useState } from 'react';

const CheckupPage = ({ user, onLogout, onGoHome }) => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 'physical',
      title: 'Physical Examination',
      image: '/cat.png', // Using cat image as placeholder
      description: 'Comprehensive health checkups for your pet',
      icon: '🏥'
    },
    {
      id: 'vaccination',
      title: 'Vaccinations & Boosters', 
      image: '/dog.png', // Using dog image as placeholder
      description: 'Keep your pet protected with up-to-date vaccines',
      icon: '💉'
    },
    {
      id: 'dental',
      title: 'Dental Check',
      image: '/rabbit.png', // Using rabbit image as placeholder  
      description: 'Oral health examination and cleaning',
      icon: '🦷'
    }
  ];

  return (
    <div className="checkup-page bg-black text-white min-h-screen">
      {/* Navigation Header */}
      <header className="navbar">
        <div className="nav-container max-w-6xl mx-auto flex justify-between items-center py-6 px-8">
          <div className="logo flex items-center gap-3">
            <div className="paw-icon text-2xl text-orange-400">🐾</div>
            <span className="brand-name text-2xl font-bold text-white">CHECKUPS</span>
          </div>
          <nav className="nav-menu flex gap-8 items-center">
            <button 
              onClick={onGoHome}
              className="nav-item text-white hover:text-orange-400 transition-colors duration-300 text-sm font-medium bg-transparent border-none cursor-pointer"
            >
              HOME
            </button>
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

      {/* Search Bar */}
      <div className="search-section max-w-4xl mx-auto px-8 py-8">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search Nearby Doctors..."
            className="w-full bg-gray-800 border border-gray-600 rounded-full px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/50 pl-12"
          />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition-colors duration-300">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5M6 18a2 2 0 100 4 2 2 0 000-4zm10 0a2 2 0 100 4 2 2 0 000-4z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="main-content max-w-7xl mx-auto px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Side - Hero Section */}
          <div className="hero-section">
            <div className="hero-content bg-gray-900 rounded-3xl p-8 relative overflow-hidden">
              <div className="relative z-10">
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Pet Health <br />
                  <span className="text-orange-400">Checkups</span>
                </h1>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Our vets provide complete wellness exams, including vaccinations, dental care, parasite 
                  prevention, and nutrition advice tailored to your furry friend. With early detection and 
                  personalized treatment, we make sure every wag, purr, and cuddle comes from a pet that's 
                  healthy inside and out.
                </p>
                <button className="bg-orange-400 hover:bg-orange-500 text-black px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300 flex items-center gap-2">
                  <span>Book Now</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              {/* Background Image */}
              <div className="absolute inset-0 opacity-20">
                <img 
                  src="/cat.png" 
                  alt="Veterinarian with pet" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Service Cards */}
          <div className="services-section">
            <div className="grid gap-6">
              {services.map((service, index) => (
                <div 
                  key={service.id}
                  className="service-card bg-gray-900 rounded-2xl p-6 hover:bg-gray-800 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-2xl border border-gray-700 hover:border-orange-400"
                  onClick={() => setSelectedService(service.id)}
                >
                  <div className="flex items-center gap-4">
                    <div className="service-image w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="service-content flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">{service.icon}</span>
                        <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                      </div>
                      <p className="text-gray-400 text-sm">{service.description}</p>
                    </div>
                    <div className="service-arrow text-orange-400 text-2xl">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Services */}
            <div className="mt-8 text-center">
              <p className="text-gray-400 mb-4">Need something else?</p>
              <button className="text-orange-400 hover:text-orange-300 font-medium transition-colors duration-300">
                View All Services →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section - Emergency Contact */}
        <div className="emergency-section mt-16 bg-red-900/20 border border-red-500/30 rounded-2xl p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-400 mb-4">Emergency Services</h2>
            <p className="text-gray-300 mb-6">
              Pet emergency? We're here 24/7 for urgent care when your furry friend needs immediate attention.
            </p>
            <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full font-semibold transition-colors duration-300">
              Call Emergency Line: (555) 123-PETS
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CheckupPage;
