import React from 'react';

const Navbar = ({ 
  user, 
  onLogout, 
  onGoHome, 
  onNavigateToCheckup, 
  onNavigateToGrooming,
  currentPage = 'home' 
}) => {
  return (
    <header className="navbar">
      <div className="nav-container max-w-6xl mx-auto flex justify-between items-center py-6 px-8">
        <div className="logo flex items-center gap-3">
          <div className="paw-icon text-2xl text-orange-400">🐾</div>
          <span className="brand-name text-2xl font-bold text-white">FURCARE</span>
        </div>
        <nav className="nav-menu flex gap-8 items-center">
          {currentPage !== 'home' && (
            <button 
              onClick={onGoHome}
              className="nav-item text-white hover:text-orange-400 transition-colors duration-300 text-sm font-medium bg-transparent border-none cursor-pointer"
            >
              HOME
            </button>
          )}
          <button 
            onClick={onNavigateToCheckup}
            className={`nav-item ${
              currentPage === 'checkup' ? 'text-orange-400' : 'text-white hover:text-orange-400'
            } transition-colors duration-300 text-sm font-medium bg-transparent border-none cursor-pointer`}
          >
            CHECKUPS
          </button>
          <button 
            onClick={onNavigateToGrooming}
            className={`nav-item ${
              currentPage === 'grooming' ? 'text-orange-400' : 'text-white hover:text-orange-400'
            } transition-colors duration-300 text-sm font-medium bg-transparent border-none cursor-pointer`}
          >
            GROOMING
          </button>
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
  );
};

export default Navbar;
