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
    <Router>
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
    </Router>
  );
}

export default App;

