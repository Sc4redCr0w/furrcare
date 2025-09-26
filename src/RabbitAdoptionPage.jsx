import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Dropdown from './components/Dropdown.jsx';

const RabbitAdoptionPage = ({ onGoHome, onGoBack }) => {
  const [rabbits, setRabbits] = useState([]);
  const [filteredRabbits, setFilteredRabbits] = useState([]);
  const [selectedRabbit, setSelectedRabbit] = useState(null);
  const [filters, setFilters] = useState({ breed: '', age: '', location: '', vaccination: '' });

  useEffect(() => {
    const fetchRabbits = async () => {
      try {
        const res = await fetch('/rabbits.json');
        if (!res.ok) throw new Error('Failed to load rabbits.json');
        const data = await res.json();
        setRabbits(data);
        setFilteredRabbits(data);
      } catch (e) { console.error('Error fetching rabbits data:', e); }
    };
    fetchRabbits();
  }, []);

    useEffect(() => {
      let filtered = [...rabbits];
      if (filters.breed) {
        filtered = filtered.filter(c => c.breed.toLowerCase().includes(filters.breed.toLowerCase()));
      }
      if (filters.age) {
        filtered = filtered.filter(c => {
          if (filters.age === '1-2') return c.age >= 1 && c.age <= 2;
          if (filters.age === '3-5') return c.age >= 3 && c.age <= 5;
          if (filters.age === '6+') return c.age >= 6;
          return true;
        });
      }
      if (filters.location) {
        filtered = filtered.filter(c => c.location.toLowerCase().includes(filters.location.toLowerCase()));
      }
      if (filters.vaccination) {
        filtered = filtered.filter(c => c.vaccination === filters.vaccination);
      }
      setFilteredRabbits(filtered);
    }, [filters, rabbits]);

  const handleFilterChange = (key, val) => setFilters(prev => ({ ...prev, [key]: val }));
  const clearFilters = () => setFilters({ breed: '', age: '', location: '', vaccination: '' });

  const handleRabbitClick = (rabbit) => setSelectedRabbit(rabbit);
  const closeRabbitDetails = () => setSelectedRabbit(null);

  return (
    <div className="min-h-screen w-full bg-black text-white relative overflow-hidden">
      <header className="flex items-center justify-between p-6 border-b border-white/20 relative z-10">
        <div className="flex items-center gap-3">
          <div className="text-2xl text-orange-400">🐾</div>
          <span className="text-2xl font-bold">FURCARE</span>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={onGoBack} className="text-white hover:text-orange-400 transition-colors duration-300 underline">Back to Rabbit Breeds</button>
          <button onClick={onGoHome} className="text-white hover:text-orange-400 transition-colors duration-300 underline">Go Home</button>
        </div>
      </header>

      <div className="px-8 py-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-center mb-8">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4"><span className="text-white">ADOPT A </span><span className="text-orange-400">RABBIT</span></h1>
            <p className="text-white/80 text-lg">Find your perfect bunny companion</p>
          </motion.div>

          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 mb-8">
            <div className="flex flex-wrap gap-4 items-center">
              <h3 className="text-white font-bold text-lg">Filters:</h3>
              <Dropdown value={filters.breed} onChange={(v)=>handleFilterChange('breed', v)} placeholder="All Breeds" options={[
                {value:'',label:'All Breeds'},{value:'Holland Lop',label:'Holland Lop'},{value:'Netherland Dwarf',label:'Netherland Dwarf'},{value:'Mini Rex',label:'Mini Rex'}]}/>
              <Dropdown value={filters.age} onChange={(v)=>handleFilterChange('age', v)} placeholder="All Ages" options={[
                {value:'',label:'All Ages'},{value:'1-2',label:'1-2 years'},{value:'3-5',label:'3-5 years'},{value:'6+',label:'6+ years'}]}/>
              <Dropdown value={filters.location} onChange={(v)=>handleFilterChange('location', v)} placeholder="All Locations" options={[
                {value:'',label:'All Locations'},{value:'New York',label:'New York'},{value:'California',label:'California'},{value:'Texas',label:'Texas'},{value:'Florida',label:'Florida'},{value:'Illinois',label:'Illinois'},{value:'Washington',label:'Washington'}]}/>
              <Dropdown value={filters.vaccination} onChange={(v)=>handleFilterChange('vaccination', v)} placeholder="All Vaccination Status" options={[
                {value:'',label:'All Vaccination Status'},{value:'yes',label:'Vaccinated'},{value:'no',label:'Not Vaccinated'}]}/>
              <button onClick={clearFilters} className="bg-orange-400 hover:bg-orange-500 text-black px-4 py-2 rounded-lg font-medium transition-colors duration-300">Clear Filters</button>
            </div>
            <div className="mt-4 text-white/70">Showing {filteredRabbits.length} of {rabbits.length} rabbits</div>
          </motion.div>

          <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredRabbits.map((pet, index) => (
              <motion.div key={pet.id} initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.1 * index }} className="text-white rounded-2xl p-6 hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:-translate-y-2 cursor-pointer" style={{ backgroundColor: 'rgb(13, 17, 23)' }} onClick={() => handleRabbitClick(pet)}>
                <div className="w-full h-48 rounded-xl overflow-hidden mb-4"><img src={pet.image} alt={pet.name} className="w-full h-full object-cover"/></div>
                <h3 className="text-2xl font-bold text-orange-400 mb-2">{pet.name}</h3>
                <p className="text-sm text-white/80 mb-2">{pet.breed} • {pet.age} yrs • {pet.location}</p>
                <p className={`text-sm font-medium ${pet.vaccination==='yes'?'text-green-400':'text-red-400'}`}>{pet.vaccination==='yes'?'✓ Vaccinated':'✗ Not Vaccinated'}</p>
                <button 
                  className="mt-4 w-full bg-orange-400 hover:bg-orange-500 text-black px-4 py-2 rounded-lg font-medium transition-colors duration-300"
                  onClick={(e) => { e.stopPropagation(); handleRabbitClick(pet); }}
                >
                  View Details 👁️
                </button>
              </motion.div>
            ))}
          </motion.div>

          {filteredRabbits.length===0 && rabbits.length>0 && (
            <div className="text-center py-12">
              <p className="text-white/70 text-lg">No rabbits found matching your criteria.</p>
              <button onClick={clearFilters} className="mt-4 bg-orange-400 hover:bg-orange-500 text-black px-6 py-2 rounded-lg font-medium transition-colors duration-300">Clear Filters</button>
            </div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {selectedRabbit && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }} className="bg-gray-900 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-end mb-4"><button onClick={closeRabbitDetails} className="text-white/70 hover:text-white text-2xl w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors duration-300">×</button></div>
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/2"><div className="w-full h-80 rounded-xl overflow-hidden mb-4"><img src={selectedRabbit.image} alt={selectedRabbit.name} className="w-full h-full object-cover"/></div></div>
                <div className="lg:w-1/2 space-y-6">
                  <h2 className="text-4xl font-bold text-orange-400">{selectedRabbit.name}</h2>
                  <p className="text-white/80">{selectedRabbit.breed} • {selectedRabbit.age} yrs • {selectedRabbit.location}</p>
                  <p className={selectedRabbit.vaccination==='yes'?'text-green-400 font-medium':'text-red-400 font-medium'}>{selectedRabbit.vaccination==='yes'?'✓ Vaccinated':'✗ Not Vaccinated'}</p>
                  <p className="text-gray-300">{selectedRabbit.description}</p>
                  <div className="space-y-3">
                    <button className="w-full bg-orange-400 hover:bg-orange-500 text-black px-6 py-3 rounded-lg font-bold">Adopt {selectedRabbit.name} 🏠</button>
                    <button onClick={closeRabbitDetails} className="w-full bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-medium">Close</button>
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

export default RabbitAdoptionPage;
