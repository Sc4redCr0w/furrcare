import React, { useState } from "react";
import { motion } from "framer-motion";
import credentialsData from "./data/credentials.json";

const floatingVariants = {
  initial: { y: 0, opacity: 0.3 },
  animate: {
    y: [0, -20, 0],
    opacity: [0.3, 0.5, 0.3],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

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
      <motion.div
        className="absolute top-10 left-10 text-white/20 text-6xl"
        variants={floatingVariants}
        initial="initial"
        animate="animate"
      >
        🐾
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-20 text-white/20 text-8xl"
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 1 }}
      >
        🐾
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-1/3 text-white/10 text-9xl"
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 2 }}
      >
        🐾
      </motion.div>

      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full flex items-center justify-between p-4 border-b border-gray-600">
        <div className="flex items-center space-x-2">
          <span className="text-xl">🐾</span>
          <h1 className="font-bold tracking-wider">FURCARE</h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full px-6 relative z-10">
        {/* Images (animated entry) */}
        <motion.div
          initial={{ x: -200, y: -200, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center md:w-1/2 mb-8 md:mb-0"
        >
          <img
            src="/login_pet.png"
            alt="Dog and Cat"
            className="h-96 object-contain"
          />
        </motion.div>

        {/* Login Form (fade + slide in) */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="md:w-1/2 flex flex-col items-center"
        >
          <h2 className="text-3xl font-bold mb-2">LOGIN</h2>
          <p className="text-gray-300 mb-6">Sign in to continue</p>

          <form className="w-full max-w-sm space-y-4" onSubmit={handleSubmit}>
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
        </motion.div>
      </div>
    </div>
  );
};

export default Login;