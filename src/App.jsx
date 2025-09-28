import React, { useState, useEffect } from "react";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import Login from "./Login.jsx";
import HomePage from "./HomePage.jsx";
import GroomingPage from "./GroomingPage.jsx";
import CheckupPage from "./CheckupPage.jsx";
import DogBreedsPage from "./DogBreedsPage.jsx";
import CatBreedsPage from "./CatBreedsPage.jsx";
import RabbitBreedsPage from "./RabbitBreedsPage.jsx";
import TurtleBreedsPage from "./TurtleBreedsPage.jsx";
import DogAdoptionPage from "./DogAdoptionPage.jsx";
import CatAdoptionPage from "./CatAdoptionPage.jsx";
import RabbitAdoptionPage from "./RabbitAdoptionPage.jsx";
import TurtleAdoptionPage from "./TurtleAdoptionPage.jsx";

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
      case 'grooming':
        return <GroomingPage 
          onGoHome={handleGoHome} 
          user={currentUser}
          onLogout={handleLogout}
          onNavigateToCheckup={() => handlePageChange('checkup')}
          onNavigateToGrooming={() => handlePageChange('grooming')}
        />;
      case 'checkup':
        return <CheckupPage 
          onGoHome={handleGoHome} 
          user={currentUser}
          onLogout={handleLogout}
          onNavigateToCheckup={() => handlePageChange('checkup')}
          onNavigateToGrooming={() => handlePageChange('grooming')}
        />;
      case 'dog':
        return <DogBreedsPage 
          onGoHome={handleGoHome} 
          user={currentUser}
          onLogout={handleLogout}
          onNavigateToCheckup={() => handlePageChange('checkup')}
          onNavigateToGrooming={() => handlePageChange('grooming')}
          onAdoptNow={() => handlePageChange('dog-adoption')}
        />;
      case 'cat':
        return <CatBreedsPage 
          onGoHome={handleGoHome} 
          user={currentUser}
          onLogout={handleLogout}
          onNavigateToCheckup={() => handlePageChange('checkup')}
          onNavigateToGrooming={() => handlePageChange('grooming')}
          onAdoptNow={() => handlePageChange('cat-adoption')} 
        />;
      case 'rabbit':
        return <RabbitBreedsPage 
          onGoHome={handleGoHome} 
          user={currentUser}
          onLogout={handleLogout}
          onNavigateToCheckup={() => handlePageChange('checkup')}
          onNavigateToGrooming={() => handlePageChange('grooming')}
          onAdoptNow={() => handlePageChange('rabbit-adoption')} 
        />;
      case 'turtle':
        return <TurtleBreedsPage 
          onGoHome={handleGoHome} 
          user={currentUser}
          onLogout={handleLogout}
          onNavigateToCheckup={() => handlePageChange('checkup')}
          onNavigateToGrooming={() => handlePageChange('grooming')}
          onAdoptNow={() => handlePageChange('turtle-adoption')} 
        />;
      case 'dog-adoption':
        return <DogAdoptionPage 
          onGoHome={handleGoHome} 
          user={currentUser}
          onLogout={handleLogout}
          onNavigateToCheckup={() => handlePageChange('checkup')}
          onNavigateToGrooming={() => handlePageChange('grooming')}
          onGoBack={() => handlePageChange('dog')}
        />;
      case 'cat-adoption':
        return <CatAdoptionPage 
          onGoHome={handleGoHome} 
          user={currentUser}
          onLogout={handleLogout}
          onNavigateToCheckup={() => handlePageChange('checkup')}
          onNavigateToGrooming={() => handlePageChange('grooming')}
          onGoBack={() => handlePageChange('cat')} 
        />;
      case 'rabbit-adoption':
        return <RabbitAdoptionPage 
          onGoHome={handleGoHome} 
          user={currentUser}
          onLogout={handleLogout}
          onNavigateToCheckup={() => handlePageChange('checkup')}
          onNavigateToGrooming={() => handlePageChange('grooming')}
          onGoBack={() => handlePageChange('rabbit')} 
        />;
      case 'turtle-adoption':
        return <TurtleAdoptionPage 
          onGoHome={handleGoHome} 
          user={currentUser}
          onLogout={handleLogout}
          onNavigateToCheckup={() => handlePageChange('checkup')}
          onNavigateToGrooming={() => handlePageChange('grooming')}
          onGoBack={() => handlePageChange('turtle')} 
        />;
      default:
        return <HomePage 
          user={currentUser} 
          onLogout={handleLogout} 
          onAnimalClick={handleAnimalClick}
          onNavigateToGrooming={() => handlePageChange('grooming')}
          onNavigateToCheckup={() => handlePageChange('checkup')}
          onNavigateToDogs={() => handlePageChange('dog')} 
          onNavigateToCats={() => handlePageChange('cat')} 
          onNavigateToRabbits={() => handlePageChange('rabbit')} 
          onNavigateToTurtles={() => handlePageChange('turtle')} 
          onLogin={() => handlePageChange('login')} 
        />;
    }
  };

  return (
    <ThemeProvider>
      {renderCurrentPage()}
    </ThemeProvider>
  );
}

export default App;
