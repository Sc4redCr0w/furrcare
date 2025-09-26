// import React, { useState, useEffect } from "react";
// import Login from "./Login.jsx";
// import HomePage from "./HomePage.jsx";
// import DogBreedsPage from "./DogBreedsPage.jsx";
// import CatBreedsPage from "./CatBreedsPage.jsx";
// import RabbitBreedsPage from "./RabbitBreedsPage.jsx";
// import TurtleBreedsPage from "./TurtleBreedsPage.jsx";
// import DogAdoptionPage from "./DogAdoptionPage.jsx";
// import CatAdoptionPage from "./CatAdoptionPage.jsx";
// import RabbitAdoptionPage from "./RabbitAdoptionPage.jsx";
// import TurtleAdoptionPage from "./TurtleAdoptionPage.jsx";

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [currentUser, setCurrentUser] = useState(null);
//   const [currentPage, setCurrentPage] = useState('home');

//   // Check if user is already logged in on app start
//   useEffect(() => {
//     const savedUser = localStorage.getItem('currentUser');
//     if (savedUser) {
//       setCurrentUser(JSON.parse(savedUser));
//       setIsLoggedIn(true);
//     }
//   }, []);

//   const handleLogin = (user) => {
//     setCurrentUser(user);
//     setIsLoggedIn(true);
//     setCurrentPage('home');
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('currentUser');
//     setCurrentUser(null);
//     setIsLoggedIn(false);
//     setCurrentPage('home');
//   };

//   const handleAnimalClick = (animalType) => {
//     setCurrentPage(animalType);
//   };

//   const handleGoHome = () => {
//     setCurrentPage('home');
//   };

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const renderCurrentPage = () => {
//     if (!isLoggedIn) {
//       return <Login onLogin={handleLogin} />;
//     }

//     switch (currentPage) {
//       case 'dog':
//         return <DogBreedsPage 
//           onGoHome={handleGoHome} 
//           onAdoptNow={() => handlePageChange('dog-adoption')}
//         />;
//       case 'cat':
//         return <CatBreedsPage onGoHome={handleGoHome} onAdoptNow={() => handlePageChange('cat-adoption')} />;
//       case 'rabbit':
//         return <RabbitBreedsPage onGoHome={handleGoHome} onAdoptNow={() => handlePageChange('rabbit-adoption')} />;
//       case 'turtle':
//         return <TurtleBreedsPage onGoHome={handleGoHome} onAdoptNow={() => handlePageChange('turtle-adoption')} />;
//       case 'dog-adoption':
//         return <DogAdoptionPage 
//           onGoHome={handleGoHome} 
//           onGoBack={() => handlePageChange('dog')}
//         />;
//       case 'cat-adoption':
//         return <CatAdoptionPage onGoHome={handleGoHome} onGoBack={() => handlePageChange('cat')} />;
//       case 'rabbit-adoption':
//         return <RabbitAdoptionPage onGoHome={handleGoHome} onGoBack={() => handlePageChange('rabbit')} />;
//       case 'turtle-adoption':
//         return <TurtleAdoptionPage onGoHome={handleGoHome} onGoBack={() => handlePageChange('turtle')} />;
//       default:
//         return <HomePage 
//           user={currentUser} 
//           onLogout={handleLogout} 
//           onAnimalClick={handleAnimalClick} 
//           onNavigateToDogs={() => handlePageChange('dog')} 
//           onNavigateToCats={() => handlePageChange('cat')} 
//           onNavigateToRabbits={() => handlePageChange('rabbit')} 
//           onNavigateToTurtles={() => handlePageChange('turtle')} 
//           onLogin={() => handlePageChange('login')} 
//         />;
//     }
//   };

//   return (
//     <>
//       {renderCurrentPage()}
//     </>
//   );
// }

// export default App;


import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Pages
import Login from "./Login.jsx";
import HomePage from "./HomePage.jsx";
import DogBreedsPage from "./DogBreedsPage.jsx";
import CatBreedsPage from "./CatBreedsPage.jsx";
import RabbitBreedsPage from "./RabbitBreedsPage.jsx";
import TurtleBreedsPage from "./TurtleBreedsPage.jsx";
import DogAdoptionPage from "./DogAdoptionPage.jsx";
import CatAdoptionPage from "./CatAdoptionPage.jsx";
import RabbitAdoptionPage from "./RabbitAdoptionPage.jsx";
import TurtleAdoptionPage from "./TurtleAdoptionPage.jsx";
import Grooming from "./Grooming.jsx"; 
import CheckupsPage from "/src/CheckupsPage.jsx";







function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Check if user is already logged in on app start
  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (user) => {
    setCurrentUser(user);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    setIsLoggedIn(false);
  };

  return (
    
      <Routes>
        {/* If not logged in → show Login */}
        {!isLoggedIn ? (
          <Route path="*" element={<Login onLogin={handleLogin} />} />
        ) : (
          <>
            {/* Home */}
            <Route
              path="/"
              element={<HomePage user={currentUser} onLogout={handleLogout} />}
            />

            {/* Grooming */}
            <Route path="/grooming" element={<Grooming />} />

            <Route path="/checkups" element={<CheckupsPage />} />

            {/* Breed pages */}
            <Route path="/dogs" element={<DogBreedsPage />} />
            <Route path="/cats" element={<CatBreedsPage />} />
            <Route path="/rabbits" element={<RabbitBreedsPage />} />
            <Route path="/turtles" element={<TurtleBreedsPage />} />

            {/* Adoption pages */}
            <Route path="/dogs/adoption" element={<DogAdoptionPage />} />
            <Route path="/cats/adoption" element={<CatAdoptionPage />} />
            <Route path="/rabbits/adoption" element={<RabbitAdoptionPage />} />
            <Route path="/turtles/adoption" element={<TurtleAdoptionPage />} />

            {/* Fallback → Home */}
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
  
  );
}

export default App;

