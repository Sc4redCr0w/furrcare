import React from 'react';
import { useTheme } from '../contexts/ThemeContext.jsx';

const Navbar = ({ 
  user, 
  onLogout, 
  onGoHome, 
  onNavigateToCheckup, 
  onNavigateToGrooming,
  currentPage = 'home' 
}) => {
  const { isDarkMode, isTransitioning, toggleTheme, colors } = useTheme();

  return (
    <header className="navbar">
      <div className={`nav-container max-w-6xl mx-auto flex justify-between items-center py-6 px-8 ${colors.background}`}>
        <div className="logo flex items-center gap-3">
          <div className="paw-icon text-2xl text-orange-400">🐾</div>
          <button 
            onClick={onGoHome}
            className={`brand-name text-2xl font-bold ${colors.text} hover:text-orange-400 transition-colors duration-300 bg-transparent border-none cursor-pointer`}
          >
            FURCARE
          </button>
        </div>
        <nav className="nav-menu flex gap-8 items-center">
          <button 
            onClick={onNavigateToCheckup}
            className={`nav-item ${
              currentPage === 'checkup' ? 'text-orange-400' : `${colors.text} hover:text-orange-400`
            } transition-colors duration-300 text-sm font-medium bg-transparent border-none cursor-pointer`}
          >
            CHECKUPS
          </button>
          <button 
            onClick={onNavigateToGrooming}
            className={`nav-item ${
              currentPage === 'grooming' ? 'text-orange-400' : `${colors.text} hover:text-orange-400`
            } transition-colors duration-300 text-sm font-medium bg-transparent border-none cursor-pointer`}
          >
            GROOMING
          </button>
          <a href="#training" className={`nav-item ${colors.text} hover:text-orange-400 transition-colors duration-300 text-sm font-medium`}>TRAINING</a>
          <a href="#store" className={`nav-item ${colors.text} hover:text-orange-400 transition-colors duration-300 text-sm font-medium`}>STORE</a>
          
          {/* Theme Toggle Button */}
          <button 
            onClick={(e) => toggleTheme(e.currentTarget)}
            className={`theme-toggle p-2 rounded-full ${colors.surface} hover:${colors.surfaceHover} ${colors.text} transition-all duration-300 ${isTransitioning ? 'pointer-events-none' : ''}`}
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            disabled={isTransitioning}
          >
            {isDarkMode ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          <div className="relative group ml-4">
            {/* User Icon */}
            <div className="flex items-center gap-3 cursor-pointer">
              <span className={`text-sm ${colors.textMuted}`}>Welcome, {user?.name}</span>
              <div className="w-8 h-8 bg-orange-400 hover:bg-orange-500 rounded-full flex items-center justify-center text-black transition-colors duration-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            
            {/* Dropdown Menu */}
            <div className={`absolute right-0 top-full mt-2 w-48 ${colors.navDropdown} backdrop-blur-sm ${colors.border} rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50`}>
              <div className="py-2">
                <a href="#account" className={`block px-4 py-2 text-sm ${colors.text} hover:text-orange-400 hover:${colors.cardHover} transition-colors duration-300`}>
                  YOUR ACCOUNT
                </a>
                <button 
                  onClick={onLogout}
                  className={`w-full text-left px-4 py-2 text-sm ${colors.text} hover:text-orange-400 hover:${colors.cardHover} transition-colors duration-300`}
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
