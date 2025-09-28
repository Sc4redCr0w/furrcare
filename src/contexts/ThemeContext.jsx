import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [contentVisible, setContentVisible] = useState(true);
  const animationRef = useRef(null);

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('furcare-theme');
    if (savedTheme !== null) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  // Save theme to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('furcare-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const createRippleEffect = (buttonElement) => {
    // Remove any existing animation overlay
    const existingOverlay = document.querySelector('.theme-transition-overlay');
    if (existingOverlay) {
      existingOverlay.remove();
    }

    // Fade out content first
    setContentVisible(false);

    // Get button position
    const rect = buttonElement.getBoundingClientRect();
    const buttonCenterX = rect.left + rect.width / 2;
    const buttonCenterY = rect.top + rect.height / 2;

    // Calculate the maximum distance to cover the entire screen
    const maxDistance = Math.max(
      Math.sqrt(buttonCenterX ** 2 + buttonCenterY ** 2),
      Math.sqrt((window.innerWidth - buttonCenterX) ** 2 + buttonCenterY ** 2),
      Math.sqrt(buttonCenterX ** 2 + (window.innerHeight - buttonCenterY) ** 2),
      Math.sqrt((window.innerWidth - buttonCenterX) ** 2 + (window.innerHeight - buttonCenterY) ** 2)
    );

    // Create overlay element with new theme colors
    const overlay = document.createElement('div');
    overlay.className = 'theme-transition-overlay';
    overlay.style.cssText = `
      position: fixed;
      top: ${buttonCenterY}px;
      left: ${buttonCenterX}px;
      width: 0;
      height: 0;
      border-radius: 50%;
      background: ${isDarkMode ? '#ffffff' : '#000000'};
      transform: translate(-50%, -50%);
      z-index: 1;
      pointer-events: none;
      transition: width 0.8s ease-out, height 0.8s ease-out;
    `;

    document.body.appendChild(overlay);

    // Start content fade and theme change after a short delay
    setTimeout(() => {
      // Change theme immediately to show the effect
      setIsDarkMode(prev => !prev);

      // Trigger animation
      requestAnimationFrame(() => {
        const size = maxDistance * 2.2;
        overlay.style.width = `${size}px`;
        overlay.style.height = `${size}px`;
      });
    }, 200);

    // Clean up after animation and fade content back in
    setTimeout(() => {
      overlay.remove();
      setIsTransitioning(false);
      setContentVisible(true);
    }, 1000);
  };

  const toggleTheme = (buttonElement) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    if (buttonElement) {
      createRippleEffect(buttonElement);
    } else {
      // Fallback if no button element provided
      setIsDarkMode(prev => !prev);
      setIsTransitioning(false);
    }
  };

  const theme = {
    isDarkMode,
    isTransitioning,
    contentVisible,
    toggleTheme,
    colors: {
      background: isDarkMode ? 'bg-black' : 'bg-white',
      surface: isDarkMode ? 'bg-gray-900' : 'bg-gray-100',
      surfaceHover: isDarkMode ? 'bg-gray-800' : 'bg-gray-200',
      text: isDarkMode ? 'text-white' : 'text-black',
      textSecondary: isDarkMode ? 'text-white/80' : 'text-black/80',
      textMuted: isDarkMode ? 'text-white/70' : 'text-black/70',
      border: isDarkMode ? 'border-white/20' : 'border-black/20',
      borderHover: isDarkMode ? 'border-white/30' : 'border-black/30',
      card: isDarkMode ? 'bg-white/10' : 'bg-black/10',
      cardHover: isDarkMode ? 'bg-white/20' : 'bg-black/20',
      navDropdown: isDarkMode ? 'bg-black/90' : 'bg-white/90',
      modalBackground: isDarkMode ? 'bg-black' : 'bg-white',
      inputBackground: isDarkMode ? 'bg-gray-800' : 'bg-gray-100',
      inputBorder: isDarkMode ? 'border-gray-600' : 'border-gray-300',
      placeholder: isDarkMode ? 'placeholder-gray-400' : 'placeholder-gray-500',
      gradient: isDarkMode ? 'bg-gradient-to-b from-black to-transparent' : 'bg-gradient-to-b from-white to-transparent'
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};
