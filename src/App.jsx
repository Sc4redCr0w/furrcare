import React, { useState, useEffect } from "react";
import Login from "./Login.jsx";
import HomePage from "./HomePage.jsx";
import DogBreedsPage from "./DogBreedsPage.jsx";
import CatBreedsPage from "./CatBreedsPage.jsx";
import RabbitBreedsPage from "./RabbitBreedsPage.jsx";
import TurtleBreedsPage from "./TurtleBreedsPage.jsx";
import DogAdoptionPage from "./DogAdoptionPage.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentPage, setCurrentPage] = useState('home');

  // Check if user is already logged in on app start
  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (user) => {
    setCurrentUser(user);
    setIsLoggedIn(true);
    setCurrentPage('home');
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
    setIsLoggedIn(false);
    setCurrentPage('home');
  };

  const handleAnimalClick = (animalType) => {
    setCurrentPage(animalType);
  };

  const handleGoHome = () => {
    setCurrentPage('home');
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderCurrentPage = () => {
    if (!isLoggedIn) {
      return <Login onLogin={handleLogin} />;
    }

    switch (currentPage) {
      case 'dog':
        return <DogBreedsPage 
          onGoHome={handleGoHome} 
          onAdoptNow={() => handlePageChange('dog-adoption')}
        />;
      case 'cat':
        return <CatBreedsPage onGoHome={handleGoHome} />;
      case 'rabbit':
        return <RabbitBreedsPage onGoHome={handleGoHome} />;
      case 'turtle':
        return <TurtleBreedsPage onGoHome={handleGoHome} />;
      case 'dog-adoption':
        return <DogAdoptionPage 
          onGoHome={handleGoHome} 
          onGoBack={() => handlePageChange('dog')}
        />;
      default:
        return <HomePage 
          user={currentUser} 
          onLogout={handleLogout} 
          onAnimalClick={handleAnimalClick} 
          onNavigateToDogs={() => handlePageChange('dog')} 
          onNavigateToCats={() => handlePageChange('cat')} 
          onNavigateToRabbits={() => handlePageChange('rabbit')} 
          onNavigateToTurtles={() => handlePageChange('turtle')} 
          onLogin={() => handlePageChange('login')} 
        />;
    }
  };

  return (
    <>
      {renderCurrentPage()}
    </>
  );
}

export default App;
