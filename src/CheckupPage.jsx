// import React, { useState } from 'react';
// import Navbar from './components/Navbar.jsx';
// import FloatingPaws from './components/FloatingPaws.jsx';

// const CheckupPage = ({ user, onLogout, onGoHome, onNavigateToCheckup, onNavigateToGrooming }) => {
//   const [selectedService, setSelectedService] = useState(null);

//   const services = [
//     {
//       id: 'physical',
//       title: 'Physical Examination',
//       image: '/cat.png', // Using cat image as placeholder
//       description: 'Comprehensive health checkups for your pet',
//       icon: '🏥'
//     },
//     {
//       id: 'vaccination',
//       title: 'Vaccinations & Boosters', 
//       image: '/dog.png', // Using dog image as placeholder
//       description: 'Keep your pet protected with up-to-date vaccines',
//       icon: '💉'
//     },
//     {
//       id: 'dental',
//       title: 'Dental Check',
//       image: '/rabbit.png', // Using rabbit image as placeholder  
//       description: 'Oral health examination and cleaning',
//       icon: '🦷'
//     }
//   ];

//   return (
//     <div className="checkup-page bg-black text-white min-h-screen relative overflow-hidden">
//       {/* Floating Paw Backgrounds */}
//       <FloatingPaws />
      
//       {/* Navigation Header */}
//       <Navbar 
//         user={user}
//         onLogout={onLogout}
//         onGoHome={onGoHome}
//         onNavigateToCheckup={onNavigateToCheckup}
//         onNavigateToGrooming={onNavigateToGrooming}
//         currentPage="checkup"
//       />

//       {/* Search Bar */}
//       <div className="search-section max-w-4xl mx-auto px-8 py-8">
//         <div className="relative">
//           <input 
//             type="text" 
//             placeholder="Search Nearby Doctors..."
//             className="w-full bg-gray-800 border border-gray-600 rounded-full px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/50 pl-12"
//           />
//           <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
//             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//             </svg>
//           </div>
//           <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition-colors duration-300">
//             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5M6 18a2 2 0 100 4 2 2 0 000-4zm10 0a2 2 0 100 4 2 2 0 000-4z" />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Main Content */}
//       <main className="main-content max-w-7xl mx-auto px-8 py-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
//           {/* Left Side - Hero Section */}
//           <div className="hero-section">
//             <div className="hero-content bg-gray-900 rounded-3xl p-8 relative overflow-hidden">
//               <div className="relative z-10">
//                 <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
//                   Pet Health <br />
//                   <span className="text-orange-400">Checkups</span>
//                 </h1>
//                 <p className="text-lg text-gray-300 mb-8 leading-relaxed">
//                   Our vets provide complete wellness exams, including vaccinations, dental care, parasite 
//                   prevention, and nutrition advice tailored to your furry friend. With early detection and 
//                   personalized treatment, we make sure every wag, purr, and cuddle comes from a pet that's 
//                   healthy inside and out.
//                 </p>
//                 <button className="bg-orange-400 hover:bg-orange-500 text-black px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300 flex items-center gap-2">
//                   <span>Book Now</span>
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                   </svg>
//                 </button>
//               </div>
              
//               {/* Background Image */}
//               <div className="absolute inset-0 opacity-20">
//                 <img 
//                   src="/cat.png" 
//                   alt="Veterinarian with pet" 
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Right Side - Service Cards */}
//           <div className="services-section">
//             <div className="grid gap-6">
//               {services.map((service, index) => (
//                 <div 
//                   key={service.id}
//                   className="service-card bg-gray-900 rounded-2xl p-6 hover:bg-gray-800 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-2xl border border-gray-700 hover:border-orange-400"
//                   onClick={() => setSelectedService(service.id)}
//                 >
//                   <div className="flex items-center gap-4">
//                     <div className="service-image w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
//                       <img 
//                         src={service.image} 
//                         alt={service.title}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                     <div className="service-content flex-1">
//                       <div className="flex items-center gap-2 mb-2">
//                         <span className="text-2xl">{service.icon}</span>
//                         <h3 className="text-xl font-semibold text-white">{service.title}</h3>
//                       </div>
//                       <p className="text-gray-400 text-sm">{service.description}</p>
//                     </div>
//                     <div className="service-arrow text-orange-400 text-2xl">
//                       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                       </svg>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Additional Services */}
//             <div className="mt-8 text-center">
//               <p className="text-gray-400 mb-4">Need something else?</p>
//               <button className="text-orange-400 hover:text-orange-300 font-medium transition-colors duration-300">
//                 View All Services →
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Section - Emergency Contact */}
//         <div className="emergency-section mt-16 bg-red-900/20 border border-red-500/30 rounded-2xl p-8">
//           <div className="text-center">
//             <h2 className="text-2xl font-bold text-red-400 mb-4">Emergency Services</h2>
//             <p className="text-gray-300 mb-6">
//               Pet emergency? We're here 24/7 for urgent care when your furry friend needs immediate attention.
//             </p>
//             <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full font-semibold transition-colors duration-300">
//               Call Emergency Line: +91 7021539933
//             </button>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default CheckupPage;

// import React, { useState } from 'react';
// import Navbar from './components/Navbar.jsx';
// import FloatingPaws from './components/FloatingPaws.jsx';

// const CheckupPage = ({ user, onLogout, onGoHome, onNavigateToCheckup, onNavigateToGrooming }) => {
//   const [selectedService, setSelectedService] = useState(null);

//   const services = [
//     {
//       id: 'physical',
//       title: 'Physical Examination',
//       image: '/cat.png', // Using cat image as placeholder
//       description: 'Comprehensive health checkups for your pet',
//       icon: '🏥'
//     },
//     {
//       id: 'vaccination',
//       title: 'Vaccinations & Boosters', 
//       image: '/dog.png', // Using dog image as placeholder
//       description: 'Keep your pet protected with up-to-date vaccines',
//       icon: '💉'
//     },
//     {
//       id: 'dental',
//       title: 'Dental Check',
//       image: '/rabbit.png', // Using rabbit image as placeholder  
//       description: 'Oral health examination and cleaning',
//       icon: '🦷'
//     }
//   ];

//   return (
//     <div className="checkup-page bg-black text-white min-h-screen relative overflow-hidden">
//       {/* Floating Paw Backgrounds */}
//       <FloatingPaws />
      
//       {/* Navigation Header */}
//       <Navbar 
//         user={user}
//         onLogout={onLogout}
//         onGoHome={onGoHome}
//         onNavigateToCheckup={onNavigateToCheckup}
//         onNavigateToGrooming={onNavigateToGrooming}
//         currentPage="checkup"
//       />

//       {/* Search Bar */}
//       <div className="search-section max-w-4xl mx-auto px-8 py-8">
//         <div className="relative">
//           <input 
//             type="text" 
//             placeholder="Search Nearby Doctors..."
//             className="w-full bg-gray-800 border border-gray-600 rounded-full px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/50 pl-12"
//           />
//           <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
//             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//             </svg>
//           </div>
//           <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition-colors duration-300">
//             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5M6 18a2 2 0 100 4 2 2 0 000-4zm10 0a2 2 0 100 4 2 2 0 000-4z" />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Main Content */}
//       <main className="main-content max-w-7xl mx-auto px-8 py-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
//           {/* Left Side - Hero Section */}
//           <div className="hero-section">
//             <div className="hero-content bg-gray-900 rounded-3xl p-8 relative overflow-hidden">
//               <div className="relative z-10">
//                 <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
//                   Pet Health <br />
//                   <span className="text-orange-400">Checkups</span>
//                 </h1>
//                 <p className="text-lg text-gray-300 mb-8 leading-relaxed">
//                   Our vets provide complete wellness exams, including vaccinations, dental care, parasite 
//                   prevention, and nutrition advice tailored to your furry friend. With early detection and 
//                   personalized treatment, we make sure every wag, purr, and cuddle comes from a pet that's 
//                   healthy inside and out.
//                 </p>
//                 <button className="bg-orange-400 hover:bg-orange-500 text-black px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300 flex items-center gap-2">
//                   <span>Book Now</span>
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                   </svg>
//                 </button>
//               </div>
              
//               {/* Background Image */}
//               <div className="absolute inset-0 opacity-20">
//                 <img 
//                   src="/cat.png" 
//                   alt="Veterinarian with pet" 
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Right Side - Service Cards */}
//           <div className="services-section">
//             <div className="grid gap-6">
//               {services.map((service) => (
//                 <div 
//                   key={service.id}
//                   className="service-card bg-gray-900 rounded-2xl p-6 hover:bg-gray-800 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-2xl border border-gray-700 hover:border-orange-400"
//                   onClick={() => setSelectedService(service.id)}
//                 >
//                   <div className="flex items-center gap-4">
//                     <div className="service-image w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
//                       <img 
//                         src={service.image} 
//                         alt={service.title}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                     <div className="service-content flex-1">
//                       <div className="flex items-center gap-2 mb-2">
//                         <span className="text-2xl">{service.icon}</span>
//                         <h3 className="text-xl font-semibold text-white">{service.title}</h3>
//                       </div>
//                       <p className="text-gray-400 text-sm">{service.description}</p>
//                     </div>
//                     <div className="service-arrow text-orange-400 text-2xl">
//                       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                       </svg>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Additional Services */}
//             <div className="mt-8 text-center">
//               <p className="text-gray-400 mb-4">Need something else?</p>
//               <button className="text-orange-400 hover:text-orange-300 font-medium transition-colors duration-300">
//                 View All Services →
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Section - Emergency Contact */}

// <div className="emergency-section mt-16 bg-red-900/20 border border-red-500/30 rounded-2xl p-8 relative z-20">
//   <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-center">
//     <div>
//       <h2 className="text-2xl font-bold text-red-400 mb-4">Emergency Services</h2>
//       <p className="text-gray-300 mb-6 max-w-2xl">
//         Pet emergency? We're here 24/7 for urgent care when your furry friend needs immediate attention.
//       </p>
//     </div>

//     <div className="flex gap-4 items-center">
//       {/* Call Button */}
//       <a
//         href="tel:+917021539933"
//         className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-semibold transition"
//       >
//         Call: +91 7021539933
//       </a>

//       {/* WhatsApp Button */}
//       <a
//         href="https://wa.me/917021539933"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full transition z-50"
//       >
//         {/* WhatsApp Icon */}
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="28"
//           height="28"
//           fill="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.18 1.6 6.01L0 24l6.25-1.64A11.97 11.97 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22a9.93 9.93 0 01-5.06-1.38l-.36-.21-3.72.97.99-3.63-.24-.38A9.94 9.94 0 012 12c0-5.52 4.48-10 10-10 2.67 0 5.18 1.04 7.07 2.93A9.94 9.94 0 0122 12c0 5.52-4.48 10-10 10zm5.27-7.22c-.29-.14-1.7-.84-1.96-.93-.26-.1-.45-.14-.64.14-.19.29-.73.93-.89 1.12-.16.19-.33.21-.62.07-.29-.14-1.22-.45-2.32-1.43-.86-.77-1.44-1.72-1.6-2.01-.16-.29-.02-.45.12-.59.13-.13.29-.34.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.54-.87-2.1-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43s1.02 2.82 1.16 3.01c.14.19 2 3.05 4.86 4.28.68.29 1.21.46 1.62.59.68.22 1.29.19 1.77.12.54-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.33z" />
//         </svg>
//       </a>
//     </div>
//   </div>
// </div>


// export default CheckupPage;

import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import FloatingPaws from './components/FloatingPaws.jsx';

const CheckupPage = ({ user, onLogout, onGoHome, onNavigateToCheckup, onNavigateToGrooming }) => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 'physical',
      title: 'Physical Examination',
      image: '/cat.png', // placeholder image
      description: 'Comprehensive health checkups for your pet',
      icon: '🏥',
    },
    {
      id: 'vaccination',
      title: 'Vaccinations & Boosters',
      image: '/dog.png', // placeholder image
      description: 'Keep your pet protected with up-to-date vaccines',
      icon: '💉',
    },
    {
      id: 'dental',
      title: 'Dental Check',
      image: '/rabbit.png', // placeholder image
      description: 'Oral health examination and cleaning',
      icon: '🦷',
    },
  ];

  return (
    <div className="checkup-page bg-black text-white min-h-screen relative overflow-hidden">
      {/* Floating Paw Backgrounds */}
      <FloatingPaws />

      {/* Navigation Header */}
      <Navbar
        user={user}
        onLogout={onLogout}
        onGoHome={onGoHome}
        onNavigateToCheckup={onNavigateToCheckup}
        onNavigateToGrooming={onNavigateToGrooming}
        currentPage="checkup"
      />

      {/* Search Bar */}
      <div className="search-section max-w-4xl mx-auto px-8 py-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search Nearby Doctors..."
            className="w-full bg-gray-800 border border-gray-600 rounded-full px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/50 pl-12"
          />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition-colors duration-300">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5M6 18a2 2 0 100 4 2 2 0 000-4zm10 0a2 2 0 100 4 2 2 0 000-4z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="main-content max-w-7xl mx-auto px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Hero Section */}
          <div className="hero-section">
            <div className="hero-content bg-gray-900 rounded-3xl p-8 relative overflow-hidden">
              <div className="relative z-10">
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Pet Health <br />
                  <span className="text-orange-400">Checkups</span>
                </h1>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Our vets provide complete wellness exams, including vaccinations, dental care, parasite prevention, and nutrition advice tailored
                  to your furry friend. With early detection and personalized treatment, we make sure every wag, purr, and cuddle comes from a pet
                  that's healthy inside and out.
                </p>
                <button className="bg-orange-400 hover:bg-orange-500 text-black px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300 flex items-center gap-2">
                  <span>Book Now</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Background Image */}
              <div className="absolute inset-0 opacity-20">
                <img src="/cat.png" alt="Veterinarian with pet" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Right Side - Service Cards */}
          <div className="services-section">
            <div className="grid gap-6">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="service-card bg-gray-900 rounded-2xl p-6 hover:bg-gray-800 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-2xl border border-gray-700 hover:border-orange-400"
                  onClick={() => setSelectedService(service.id)}
                >
                  <div className="flex items-center gap-4">
                    <div className="service-image w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="service-content flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">{service.icon}</span>
                        <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                      </div>
                      <p className="text-gray-400 text-sm">{service.description}</p>
                    </div>
                    <div className="service-arrow text-orange-400 text-2xl">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Services */}
            <div className="mt-8 text-center">
              <p className="text-gray-400 mb-4">Need something else?</p>
              <button className="text-orange-400 hover:text-orange-300 font-medium transition-colors duration-300">View All Services →</button>
            </div>
          </div>
        </div>

        {/* Bottom Section - Emergency Contact */}
        <div className="emergency-section mt-16 bg-red-900/20 border border-red-500/30 rounded-2xl p-8 relative z-20">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-center">
            <div>
              <h2 className="text-2xl font-bold text-red-400 mb-4">Emergency Services</h2>
              <p className="text-gray-300 mb-6 max-w-2xl">
                Pet emergency? We're here 24/7 for urgent care when your furry friend needs immediate attention.
              </p>
            </div>

            <div className="flex gap-4 items-center">
              {/* Call Button */}
              <a
                href="tel:+917021539933"
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-semibold transition"
              >
                Call: +91 7021539933
              </a>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/917021539933"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full transition z-50"
              >
                {/* WhatsApp Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.18 1.6 6.01L0 24l6.25-1.64A11.97 11.97 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22a9.93 9.93 0 01-5.06-1.38l-.36-.21-3.72.97.99-3.63-.24-.38A9.94 9.94 0 012 12c0-5.52 4.48-10 10-10 2.67 0 5.18 1.04 7.07 2.93A9.94 9.94 0 0122 12c0 5.52-4.48 10-10 10zm5.27-7.22c-.29-.14-1.7-.84-1.96-.93-.26-.1-.45-.14-.64.14-.19.29-.73.93-.89 1.12-.16.19-.33.21-.62.07-.29-.14-1.22-.45-2.32-1.43-.86-.77-1.44-1.72-1.6-2.01-.16-.29-.02-.45.12-.59.13-.13.29-.34.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.54-.87-2.1-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43s1.02 2.82 1.16 3.01c.14.19 2 3.05 4.86 4.28.68.29 1.21.46 1.62.59.68.22 1.29.19 1.77.12.54-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.33z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CheckupPage;

