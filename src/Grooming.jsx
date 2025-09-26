// src/pages/Grooming.jsx
import React from "react";

const Grooming = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Bar */}
      <div className="flex justify-between items-center bg-gradient-to-r from-orange-600 to-red-500 px-6 py-3 rounded-b-2xl">
        <h1 className="font-bold text-lg tracking-wider">GROOMING</h1>
        <button className="bg-black text-white px-4 py-1 rounded-full font-medium hover:bg-gray-900 transition">
          BOOK YOUR SERVICES
        </button>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        {/* Left Big Card */}
        <div className="bg-gray-900 rounded-3xl p-6 flex flex-col justify-between shadow-lg">
          <div>
            <h2 className="text-4xl font-bold mb-4">
              Grooming Services for Pets
            </h2>
            <p className="text-gray-300 mb-6">
              Keep your furry friends clean, healthy, and happy with our
              professional grooming care.
            </p>
          </div>
          <div className="flex justify-end">
            <span className="text-3xl">↘</span>
          </div>
        </div>

        {/* Right Big Image Card */}
        <div className="relative bg-gray-800 rounded-3xl overflow-hidden shadow-lg">
          <img
            src="https://i.ibb.co/TqRSPF9/dog-haircut.jpg" // replace with your grooming image
            alt="Haircut & Styling"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-between p-6">
            <h2 className="text-3xl font-bold">Haircut & Styling</h2>
            <div className="flex items-center justify-end">
              <span className="bg-red-500 text-black text-xl rounded-full px-3 py-1">
                →
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 pb-10">
        {/* Card 1 */}
        <div className="relative rounded-3xl overflow-hidden shadow-lg">
          <img
            src="https://i.ibb.co/89Yr7KN/cat-bath.jpg"
            alt="Bath & Blow Dry"
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-4">
            <h3 className="font-bold text-lg">Bath & Blow Dry</h3>
            <p className="text-gray-300 text-sm">
              Gentle shampoos for a shiny coat
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative rounded-3xl overflow-hidden shadow-lg">
          <img
            src="https://i.ibb.co/DLkbHNR/dog-nail.jpg"
            alt="Nail Trimming & Filing"
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-4">
            <h3 className="font-bold text-lg">Nail Trimming & Filing</h3>
            <p className="text-gray-300 text-sm">
              Safe and stress-free paw care
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative rounded-3xl overflow-hidden shadow-lg">
          <img
            src="https://i.ibb.co/mhhmcWk/dog-spa.jpg"
            alt="Spa Packages"
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-4">
            <h3 className="font-bold text-lg">Spa Packages</h3>
            <p className="text-gray-300 text-sm">
              Aromatherapy baths, paw balm, coat conditioners
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grooming;
