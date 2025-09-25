import React from 'react';

const HomePage = ({ user, onLogout }) => {
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
          <div className="hero-content grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="hero-text p-10 border-2 border-white/20 rounded-3xl bg-white/5 backdrop-blur-sm">
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
            <div className="hero-image rounded-3xl overflow-hidden">
              <img 
                src="/temple_bg_2.png" 
                alt="Pet care" 
                className="main-hero-img w-full h-96 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Pet Gallery */}
        <section className="pet-gallery grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="pet-card rounded-3xl overflow-hidden hover:transform hover:-translate-y-2 transition-transform duration-300">
            <img 
              src="/login_pet.png" 
              alt="Happy pets" 
              className="pet-image w-full h-64 object-cover"
            />
          </div>
          <div className="pet-card rounded-3xl overflow-hidden hover:transform hover:-translate-y-2 transition-transform duration-300">
            <img 
              src="/trinityfest2.jpeg" 
              alt="Pet care services" 
              className="pet-image w-full h-64 object-cover"
            />
          </div>
          <div className="pet-card rounded-3xl overflow-hidden hover:transform hover:-translate-y-2 transition-transform duration-300">
            <img 
              src="/temple_bg.jpg" 
              alt="Pet training" 
              className="pet-image w-full h-64 object-cover"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
