import React from "react";

const CheckupsPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Bar */}
      <div className="flex justify-between items-center bg-gradient-to-r from-orange-600 to-red-500 px-6 py-3 rounded-b-2xl">
        <h1 className="font-bold text-lg tracking-wider">CHECKUPS</h1>
        <button className="bg-black text-white px-4 py-1 rounded-full font-medium hover:bg-gray-900 transition">
          BOOK YOUR APPOINTMENT
        </button>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        {/* Left Big Card */}
        <div className="bg-gray-900 rounded-3xl p-6 flex flex-col justify-between shadow-lg">
          <div>
            <h2 className="text-4xl font-bold mb-4">
              Health Checkups for Pets
            </h2>
            <p className="text-gray-300 mb-6">
              Regular health checkups are essential for your pet's well-being.
              Our experienced veterinarians provide comprehensive health
              examinations.
            </p>
          </div>
          <div className="flex justify-end">
            <span className="text-3xl">↘</span>
          </div>
        </div>

        {/* Right Cards */}
        <div className="space-y-6">
          {/* Card 1 */}
          <div className="bg-gray-900 rounded-3xl p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-2">Regular Checkups</h3>
            <p className="text-gray-300 mb-4">
              Routine health examinations to detect any issues early and keep
              your pet healthy.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-900 rounded-3xl p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-2">Vaccination Updates</h3>
            <p className="text-gray-300 mb-4">
              Keep your pet's vaccinations up to date for optimal protection
              against diseases.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-900 rounded-3xl p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-2">Emergency Care</h3>
            <p className="text-gray-300 mb-4">
              24/7 emergency veterinary services for urgent health concerns.
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="px-6 pb-6">
        <h3 className="text-2xl font-bold mb-6 text-center">Our Checkup Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 rounded-2xl p-6 text-center">
            <div className="text-3xl mb-4">🩺</div>
            <h4 className="font-bold mb-2">General Examination</h4>
            <p className="text-gray-300">Complete physical examination</p>
          </div>
          <div className="bg-gray-800 rounded-2xl p-6 text-center">
            <div className="text-3xl mb-4">💉</div>
            <h4 className="font-bold mb-2">Vaccinations</h4>
            <p className="text-gray-300">Essential vaccines for protection</p>
          </div>
          <div className="bg-gray-800 rounded-2xl p-6 text-center">
            <div className="text-3xl mb-4">🔬</div>
            <h4 className="font-bold mb-2">Lab Tests</h4>
            <p className="text-gray-300">Blood work and diagnostic tests</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckupsPage;
