import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const DogAdoptionPage = ({ onGoHome, onGoBack }) => {
  const [dogs, setDogs] = useState([]);
  const [filteredDogs, setFilteredDogs] = useState([]);
  const [filters, setFilters] = useState({
    breed: '',
    age: '',
    location: '',
    vaccination: ''
  });

  // Fetch dogs data
  useEffect(() => {
    const fetchDogs = async () => {
      try {
        const response = await fetch('/dogs.json');
        const dogsData = await response.json();
        setDogs(dogsData);
        setFilteredDogs(dogsData);
      } catch (error) {
        console.error('Error fetching dogs data:', error);
      }
    };
    
    fetchDogs();
  }, []);

  // Apply filters
  useEffect(() => {
    let filtered = dogs;

    if (filters.breed) {
      filtered = filtered.filter(dog => dog.breed.toLowerCase().includes(filters.breed.toLowerCase()));
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
      filtered = filtered.filter(dog => dog.location.toLowerCase().includes(filters.location.toLowerCase()));
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

  return (
    <div className="min-h-screen w-full bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 text-white/10 text-6xl">🐾</div>
        <div className="absolute top-40 right-32 text-white/10 text-4xl">🐾</div>
        <div className="absolute bottom-40 left-16 text-white/10 text-8xl">🐾</div>
        <div className="absolute bottom-20 right-20 text-white/10 text-5xl">🐾</div>
        <div className="absolute top-1/2 left-1/4 text-white/10 text-7xl">🐾</div>
        <div className="absolute top-1/3 right-1/4 text-white/10 text-6xl">🐾</div>
      </div>

      {/* Header */}
      <header className="flex items-center justify-between p-6 border-b border-white/20">
        <div className="flex items-center gap-3">
          <div className="text-2xl text-orange-400">🐾</div>
          <span className="text-2xl font-bold">FURCARE</span>
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={onGoBack}
            className="text-white hover:text-orange-400 transition-colors duration-300 underline"
          >
            Back to Dog Breeds
          </button>
          <button 
            onClick={onGoHome}
            className="text-white hover:text-orange-400 transition-colors duration-300 underline"
          >
            Go Back To Home Page
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="px-8 py-6">
        <div className="max-w-7xl mx-auto">
          {/* Page Title */}
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
              
              {/* Breed Filter */}
              <select 
                value={filters.breed}
                onChange={(e) => handleFilterChange('breed', e.target.value)}
                className="bg-gray-800 border border-white/30 rounded-lg px-4 py-2 text-white"
              >
                <option value="">All Breeds</option>
                <option value="Golden Retriever">Golden Retriever</option>
                <option value="German Shepherd">German Shepherd</option>
                <option value="Labrador">Labrador</option>
                <option value="Bulldog">Bulldog</option>
                <option value="Beagle">Beagle</option>
                <option value="Rottweiler">Rottweiler</option>
                <option value="Poodle">Poodle</option>
                <option value="Husky">Husky</option>
                <option value="Border Collie">Border Collie</option>
              </select>

              {/* Age Filter */}
              <select 
                value={filters.age}
                onChange={(e) => handleFilterChange('age', e.target.value)}
                className="bg-gray-800 border border-white/30 rounded-lg px-4 py-2 text-white"
              >
                <option value="">All Ages</option>
                <option value="1-2">1-2 years</option>
                <option value="3-5">3-5 years</option>
                <option value="6+">6+ years</option>
              </select>

              {/* Location Filter */}
              <select 
                value={filters.location}
                onChange={(e) => handleFilterChange('location', e.target.value)}
                className="bg-gray-800 border border-white/30 rounded-lg px-4 py-2 text-white"
              >
                <option value="">All Locations</option>
                <option value="New York">New York</option>
                <option value="California">California</option>
                <option value="Texas">Texas</option>
                <option value="Florida">Florida</option>
                <option value="Illinois">Illinois</option>
                <option value="Colorado">Colorado</option>
                <option value="Washington">Washington</option>
                <option value="Oregon">Oregon</option>
              </select>

              {/* Vaccination Filter */}
              <select 
                value={filters.vaccination}
                onChange={(e) => handleFilterChange('vaccination', e.target.value)}
                className="bg-gray-800 border border-white/30 rounded-lg px-4 py-2 text-white"
              >
                <option value="">All Vaccination Status</option>
                <option value="yes">Vaccinated</option>
                <option value="no">Not Vaccinated</option>
              </select>

              {/* Clear Filters */}
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
                className="text-white rounded-2xl p-6 hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:-translate-y-2"
                style={{ backgroundColor: 'rgb(13, 17, 23)' }}
              >
                <div className="w-full h-48 rounded-xl overflow-hidden mb-4">
                  <img 
                    src={dog.image} 
                    alt={dog.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-orange-400">{dog.name}</h3>
                  
                  <div className="space-y-1 text-sm">
                    <p><span className="text-white/70">Breed:</span> {dog.breed}</p>
                    <p><span className="text-white/70">Age:</span> {dog.age} years</p>
                    <p><span className="text-white/70">Location:</span> {dog.location}</p>
                    <p>
                      <span className="text-white/70">Vaccination:</span> 
                      <span className={dog.vaccination === 'yes' ? 'text-green-400 ml-1' : 'text-red-400 ml-1'}>
                        {dog.vaccination === 'yes' ? '✓ Yes' : '✗ No'}
                      </span>
                    </p>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {dog.description}
                  </p>
                  
                  <button className="w-full bg-orange-400 hover:bg-orange-500 text-black px-4 py-2 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2">
                    Adopt {dog.name}
                    <span className="text-lg">🏠</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results */}
          {filteredDogs.length === 0 && dogs.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-white/70 text-lg">No dogs found matching your criteria.</p>
              <button 
                onClick={clearFilters}
                className="mt-4 bg-orange-400 hover:bg-orange-500 text-black px-6 py-2 rounded-lg font-medium transition-colors duration-300"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DogAdoptionPage;