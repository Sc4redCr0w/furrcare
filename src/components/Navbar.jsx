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
          <button 
            onClick={onGoHome}
            className="brand-name text-2xl font-bold text-white hover:text-orange-400 transition-colors duration-300 bg-transparent border-none cursor-pointer"
          >
            FURCARE
          </button>
        </div>
        <nav className="nav-menu flex gap-8 items-center">
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
          <div className="relative group ml-4">
            {/* User Icon */}
            <div className="flex items-center gap-3 cursor-pointer">
              <span className="text-sm text-gray-300">Welcome, {user?.name}</span>
              <div className="w-8 h-8 bg-orange-400 hover:bg-orange-500 rounded-full flex items-center justify-center text-black transition-colors duration-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            
            {/* Dropdown Menu */}
            <div className="absolute right-0 top-full mt-2 w-48 bg-black/90 backdrop-blur-sm border border-white/20 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="py-2">
                <a href="#account" className="block px-4 py-2 text-sm text-white hover:text-orange-400 hover:bg-white/5 transition-colors duration-300">
                  YOUR ACCOUNT
                </a>
                <button 
                  onClick={onLogout}
                  className="w-full text-left px-4 py-2 text-sm text-white hover:text-orange-400 hover:bg-white/5 transition-colors duration-300"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
