import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Dropdown from './components/Dropdown.jsx';
import Navbar from './components/Navbar.jsx';
import FloatingPaws from './components/FloatingPaws.jsx';

const DogAdoptionPage = ({ onGoHome, onGoBack, user, onLogout, onNavigateToCheckup, onNavigateToGrooming }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [dogs, setDogs] = useState([]);
  const [filteredDogs, setFilteredDogs] = useState([]);
  const [selectedDog, setSelectedDog] = useState(null);
  const [filters, setFilters] = useState({
    breed: '',
    age: '',
    location: '',
    vaccination: ''
  });

  // ✅ Fetch dogs data
  useEffect(() => {
    const fetchDogs = async () => {
      try {
        const response = await fetch('/dogs.json');
        if (!response.ok) throw new Error('Failed to load dogs.json');
        const dogsData = await response.json();
        setDogs(dogsData);
        setFilteredDogs(dogsData);
        
        // Preload all dog images
        const imagePromises = dogsData.map((dog) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = resolve;
            img.onerror = resolve; // Continue even if image fails
            img.src = dog.image;
          });
        });

        // Wait for all images to load
        await Promise.all(imagePromises);
        
        // Add a small delay to show the loading animation
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
        
      } catch (error) {
        console.error('Error fetching dogs data:', error);
        // Hide loading even on error
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    };

    fetchDogs();
  }, []);

  // ✅ Apply filters
  useEffect(() => {
    let filtered = [...dogs];

    if (filters.breed) {
      filtered = filtered.filter(dog =>
        dog.breed.toLowerCase().includes(filters.breed.toLowerCase())
      );
    }

    if (filters.age) {
      filtered = filtered.filter(dog => {
        if (filters.age === '1-2') return dog.age >= 1 && dog.age <= 2;
        if (filters.age === '3-5') return dog.age >= 3 && dog.age <= 5;
        if (filters.age === '6+') return dog.age >= 6;
        return true;
      });
    }

    if (filters.location) {
      filtered = filtered.filter(dog =>
        dog.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    if (filters.vaccination) {
      filtered = filtered.filter(dog => dog.vaccination === filters.vaccination);
    }

    setFilteredDogs(filtered);
  }, [filters, dogs]);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      breed: '',
      age: '',
      location: '',
      vaccination: ''
    });
  };

  const handleDogClick = (dog) => setSelectedDog(dog);
  const closeDogDetails = () => setSelectedDog(null);

  // Loading Animation Component
  const LoadingAnimation = () => (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      <div className="flex items-center space-x-4 mb-8">
        {[...Array(5)].map((_, index) => (
          <motion.div
            key={index}
            className="text-6xl text-orange-400"
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 15, -15, 0],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: index * 0.2,
              ease: "easeInOut"
            }}
          >
            🐾
          </motion.div>
        ))}
      </div>
      <motion.div
        className="text-white text-xl font-medium"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        Loading Dogs for Adoption...
      </motion.div>
    </div>
  );

  if (isLoading) {
    return <LoadingAnimation />;
  }

  return (
    <div className="min-h-screen w-full bg-black text-white relative overflow-hidden">
      {/* Floating Paw Backgrounds */}
      <FloatingPaws />

      {/* 🔝 Header */}
      <Navbar 
        user={user}
        onLogout={onLogout}
        onGoHome={onGoHome}
        onNavigateToCheckup={onNavigateToCheckup}
        onNavigateToGrooming={onNavigateToGrooming}
        currentPage="adoption"
      />

      {/* 📦 Main Content */}
      <div className="px-8 py-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-white">ADOPT A </span>
              <span className="text-orange-400">DOG</span>
            </h1>
            <p className="text-white/80 text-lg">Find your perfect furry companion</p>
          </motion.div>

          {/* Filters */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 mb-8"
          >
            <div className="flex flex-wrap gap-4 items-center">
              <h3 className="text-white font-bold text-lg">Filters:</h3>

              {/* Breed */}
              <Dropdown
                value={filters.breed}
                onChange={(v) => handleFilterChange('breed', v)}
                placeholder="All Breeds"
                options={[
                  { value: '', label: 'All Breeds' },
                  { value: 'Golden Retriever', label: 'Golden Retriever' },
                  { value: 'German Shepherd', label: 'German Shepherd' },
                  { value: 'Labrador', label: 'Labrador' },
                  { value: 'Bulldog', label: 'Bulldog' },
                  { value: 'Beagle', label: 'Beagle' },
                  { value: 'Rottweiler', label: 'Rottweiler' },
                  { value: 'Poodle', label: 'Poodle' },
                  { value: 'Husky', label: 'Husky' },
                  { value: 'Border Collie', label: 'Border Collie' },
                ]}
              />

              {/* Age */}
              <Dropdown
                value={filters.age}
                onChange={(v) => handleFilterChange('age', v)}
                placeholder="All Ages"
                options={[
                  { value: '', label: 'All Ages' },
                  { value: '1-2', label: '1-2 years' },
                  { value: '3-5', label: '3-5 years' },
                  { value: '6+', label: '6+ years' },
                ]}
              />

              {/* Location */}
              <Dropdown
                value={filters.location}
                onChange={(v) => handleFilterChange('location', v)}
                placeholder="All Locations"
                options={[
                  { value: '', label: 'All Locations' },
                  { value: 'New York', label: 'New York' },
                  { value: 'California', label: 'California' },
                  { value: 'Texas', label: 'Texas' },
                  { value: 'Florida', label: 'Florida' },
                  { value: 'Illinois', label: 'Illinois' },
                  { value: 'Colorado', label: 'Colorado' },
                  { value: 'Washington', label: 'Washington' },
                  { value: 'Oregon', label: 'Oregon' },
                ]}
              />

              {/* Vaccination */}
              <Dropdown
                value={filters.vaccination}
                onChange={(v) => handleFilterChange('vaccination', v)}
                placeholder="All Vaccination Status"
                options={[
                  { value: '', label: 'All Vaccination Status' },
                  { value: 'yes', label: 'Vaccinated' },
                  { value: 'no', label: 'Not Vaccinated' },
                ]}
              />

              <button 
                onClick={clearFilters}
                className="bg-orange-400 hover:bg-orange-500 text-black px-4 py-2 rounded-lg font-medium transition-colors duration-300"
              >
                Clear Filters
              </button>
            </div>
            <div className="mt-4 text-white/70">
              Showing {filteredDogs.length} of {dogs.length} dogs
            </div>
          </motion.div>

          {/* Dogs Grid */}
          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredDogs.map((dog, index) => (
              <motion.div
                key={dog.id}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
                className="text-white rounded-2xl p-6 hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                style={{ backgroundColor: 'rgb(13, 17, 23)' }}
                onClick={() => handleDogClick(dog)}
              >
                <div className="w-full h-48 rounded-xl overflow-hidden mb-4">
                  <img 
                    src={dog.image} 
                    alt={dog.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-orange-400 mb-2">{dog.name}</h3>
                <p className="text-sm text-white/80 mb-2">{dog.breed} • {dog.age} yrs • {dog.location}</p>
                <p className={`text-sm font-medium ${dog.vaccination === 'yes' ? 'text-green-400' : 'text-red-400'}`}>
                  {dog.vaccination === 'yes' ? '✓ Vaccinated' : '✗ Not Vaccinated'}
                </p>
                <button 
                  className="mt-4 w-full bg-orange-400 hover:bg-orange-500 text-black px-4 py-2 rounded-lg font-medium transition-colors duration-300"
                  onClick={(e) => { e.stopPropagation(); handleDogClick(dog); }}
                >
                  View Details 👁️
                </button>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results */}
          {filteredDogs.length === 0 && dogs.length > 0 && (
            <div className="text-center py-12">
              <p className="text-white/70 text-lg">No dogs found matching your criteria.</p>
              <button 
                onClick={clearFilters}
                className="mt-4 bg-orange-400 hover:bg-orange-500 text-black px-6 py-2 rounded-lg font-medium transition-colors duration-300"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* 🐶 Dog Details Modal */}
      <AnimatePresence>
        {selectedDog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gray-900 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <div className="flex justify-end mb-4">
                <button 
                  onClick={closeDogDetails}
                  className="text-white/70 hover:text-white text-2xl w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors duration-300"
                >
                  ×
                </button>
              </div>

              {/* Dog Details */}
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/2">
                  <div className="w-full h-80 rounded-xl overflow-hidden mb-4">
                    <img 
                      src={selectedDog.image} 
                      alt={selectedDog.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2 space-y-6">
                  <h2 className="text-4xl font-bold text-orange-400">{selectedDog.name}</h2>
                  <p className="text-white/80">{selectedDog.breed} • {selectedDog.age} yrs • {selectedDog.location}</p>
                  <p className={selectedDog.vaccination === 'yes' ? 'text-green-400 font-medium' : 'text-red-400 font-medium'}>
                    {selectedDog.vaccination === 'yes' ? '✓ Vaccinated' : '✗ Not Vaccinated'}
                  </p>
                  <p className="text-gray-300">{selectedDog.description}</p>
                  <div className="space-y-3">
                    <button className="w-full bg-orange-400 hover:bg-orange-500 text-black px-6 py-3 rounded-lg font-bold">
                      Adopt {selectedDog.name} 🏠
                    </button>
                    <button 
                      onClick={closeDogDetails}
                      className="w-full bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-medium"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DogAdoptionPage;
