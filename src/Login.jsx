import React, { useState } from "react";
import { motion } from "framer-motion";
import credentialsData from "./data/credentials.json";
import FloatingPaws from "./components/FloatingPaws";

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError(""); // Clear error when user types
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Find user in credentials
    const user = credentialsData.users.find(
      u => u.email === formData.email && u.password === formData.password
    );

    if (user) {
      // Login successful
      localStorage.setItem('currentUser', JSON.stringify(user));
      onLogin(user);
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="h-screen w-full bg-black flex flex-col items-center justify-center text-white relative overflow-hidden">
      {/* Floating Paw Backgrounds */}
      <FloatingPaws />

      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full border-b border-gray-600">
        <div className="max-w-6xl mx-auto flex justify-between items-center py-6 px-8">
          <div className="logo flex items-center gap-3">
            <div className="paw-icon text-2xl text-orange-400">🐾</div>
            <span className="brand-name text-2xl font-bold text-white">FURCARE</span>
          </div>
          <div className="nav-spacer"></div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full px-6 relative z-10">
        {/* Images (smooth fade-in only) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 1.0,
            ease: "easeOut"
          }}
          className="flex justify-center md:w-1/2 mb-8 md:mb-0"
        >
          <motion.img
            src="/login_pet.png"
            alt="Dog and Cat"
            className="h-96 object-contain"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          />
        </motion.div>

        {/* Login Form (rise from bottom) */}
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            delay: 0.3,
            duration: 0.7,
            ease: "easeOut"
          }}
          className="md:w-1/2 flex flex-col items-center"
        >
          <div className="p-10 border-2 border-white/20 rounded-3xl bg-white/5 backdrop-blur-sm w-full max-w-md">
            <h2 className="text-3xl font-bold mb-2 text-center">LOGIN</h2>
            <p className="text-gray-300 mb-6 text-center">Sign in to continue</p>

            <form className="w-full space-y-4" onSubmit={handleSubmit}>
            {error && (
              <div className="text-red-400 text-sm text-center mb-4">
                {error}
              </div>
            )}
            
            <div>
              <label className="block text-sm mb-1">EMAIL</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="hello@reallygreatsite.com"
                className="w-full p-2 border border-gray-400 rounded bg-black text-white placeholder-gray-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-1">PASSWORD</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="******"
                className="w-full p-2 border border-gray-400 rounded bg-black text-white placeholder-gray-400"
                required
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-white text-black py-2 rounded-full font-bold hover:bg-gray-300 transition"
            >
              LOGIN
            </motion.button>
            </form>

            {/* Demo credentials hint */}
            <div className="mt-6 text-xs text-gray-400 text-center">
              <p>Demo credentials:</p>
              <p>Email: admin@furcare.com | Password: admin123</p>
              <p>Email: user@example.com | Password: user123</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;