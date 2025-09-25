



// import React, { useState, useEffect, useRef } from "react";

// const RegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     gender: "",
//     email: "",
//     stream: "",
//     phone: "",
//     dob: "",
//     year: "",
//     college: "",
//   });

//   const nameInputRef = useRef(null);

//   useEffect(() => {
//     if (nameInputRef.current) {
//       nameInputRef.current.focus();
//     }
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Form Submitted:", formData);

//     try {
//       const res = await fetch("http://localhost:5000/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (res.ok) {
//         alert("Registration successful ");
//         setFormData({
//           fullName: "",
//           gender: "",
//           email: "",
//           stream: "",
//           phone: "",
//           dob: "",
//           year: "",
//           college: "",
//         });
//       } else {
//         alert("Something went wrong ");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Server error ");
//     }
//   };

//   return (
//     <div
//       className="h-screen w-full bg-cover bg-center relative flex items-center"
//       style={{ backgroundImage: "url('/temple_bg_2.png')" }}
//     >

 

//       <div className="relative z-10 flex w-full h-full">
//         {/* Left side Instagram-style card */}
//         <div className="w-1/2 flex items-center justify-center">
//           <div className="p-4 rounded-2xl border-4 border-yellow-600 shadow-[0_0_25px_rgba(255,215,0,0.8)] bg-black/40 backdrop-blur-md">
//             <img
//               src="/trinityfest2.jpeg"
//               alt="Performer"
//               className="w-[400px] rounded-xl shadow-lg"
//             />
//             <p className="text-center text-yellow-400 font-[Cinzel] text-lg mt-3">
//               {/* #TrinityFest26 Highlights 🎶 */}
//             </p>
//           </div>
//         </div>

//         {/* Right side registration form */}
//         <div className="w-1/2 flex flex-col justify-center px-12 text-white">
//           <h2 className="text-6xl font-bold text-yellow-400 mb-10 text-center font-[Cinzel_Decorative]">
//             Registration
//           </h2>



//           <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
//             <input
//               type="text"
//               name="fullName"
//               placeholder="Full Name"
//               ref={nameInputRef}
//               value={formData.fullName}
//               onChange={handleChange}
//               className=" text-xl p-3 bg-[#8B6F3D] text-white placeholder:text-[#E6C674] rounded-lg font-[Cinzel] focus:outline-none focus:ring-2 focus:ring-[#a9742a]"
//             />
//             <input
//               type="text"
//               name="gender"
//               placeholder="Gender"
//               value={formData.gender}
//               onChange={handleChange}
//               className="text-xl p-3 bg-[#8B6F3D] text-white placeholder:text-[#E6C674]  rounded-lg font-[Cinzel] focus:outline-none focus:ring-2 focus:ring-[#a9742a]"
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="E-Mail"
//               value={formData.email}
//               onChange={handleChange}
//               className="text-xl p-3 bg-[#8B6F3D] text-white placeholder:text-[#E6C674]  rounded-lg font-[Cinzel] focus:outline-none focus:ring-2 focus:ring-[#a9742a]"
//             />
//             <input
//               type="text"
//               name="stream"
//               placeholder="Enter Stream"
//               value={formData.stream}
//               onChange={handleChange}
//               className="text-xl p-3 bg-[#8B6F3D] text-white placeholder:text-[#E6C674]  rounded-lg font-[Cinzel] focus:outline-none focus:ring-2 focus:ring-[#a9742a]"
//             />
//             <input
//               type="tel"
//               name="phone"
//               placeholder="Phone No"
//               value={formData.phone}
//               onChange={handleChange}
//               className="text-xl p-3 bg-[#8B6F3D] text-white placeholder:text-[#E6C674]  col-span-2 rounded-lg font-[Cinzel] focus:outline-none focus:ring-2 focus:ring-[#a9742a]"
//             />
//             <input
//               type="date"
//               name="dob"
//               placeholder="DOB"
//               value={formData.dob}
//               onChange={handleChange}
//               className="text-xl p-3 bg-[#8B6F3D] text-white placeholder:text-[#E6C674]  rounded-lg font-[Cinzel] focus:outline-none focus:ring-2 focus:ring-[#a9742a]"
//             />
//             <input
//               type="text"
//               name="year"
//               placeholder="Enter Year of Study"
//               value={formData.year}
//               onChange={handleChange}
//               className="text-xl p-3 bg-[#8B6F3D] text-white placeholder:text-[#E6C674] rounded-lg font-[Cinzel] focus:outline-none focus:ring-2 focus:ring-[#a9742a]"
//             />
//             <input
//               type="text"
//               name="college"
//               placeholder="Enter College Name"
//               value={formData.college}
//               onChange={handleChange}
//               className="text-xl p-3 bg-[#8B6F3D] text-white placeholder:text-[#E6C674] col-span-2 rounded-lg font-[Cinzel] focus:outline-none focus:ring-2 focus:ring-[#a9742a]"
//             />

           
//             <div className="col-span-2 flex justify-center mt-6">
//             <button
//               type="submit"
//               className="bg-gradient-to-r from-[#d6932c] to-[#b36b00] 
//                       text-white px-12 py-4 rounded-full font-[Cinzel] 
//                       text-2xl font-bold shadow-lg hover:scale-105 transition"
//             >
//               SUBMIT
//             </button>
//             </div>

//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegistrationForm;

// import React from "react";

// const Login = () => {
//   return (
//     <div className="h-screen w-full bg-black flex flex-col items-center justify-center text-white">
//       {/* Top Navbar */}
//       <div className="absolute top-0 left-0 w-full flex items-center justify-between p-4 border-b border-gray-600">
//         <div className="flex items-center space-x-2">
//           <span className="text-xl">⋯</span>
//           <h1 className="font-bold tracking-wider">FURCARE</h1>
//         </div>
//       </div>

//       {/* Content Section */}
//       <div className="flex flex-col md:flex-row items-center justify-center w-full px-6">
//         {/* Images (Dog + Cat) */}
//         <div className="flex justify-center md:w-1/2 mb-8 md:mb-0">
//           <img
//             src="/login_pet.png" // replace with your dog+cat image
//             alt="Dog and Cat"
//             className="h-96 object-contain"
//           />
//         </div>

//         {/* Login Form */}
//         <div className="bg-transparent md:w-1/2 flex flex-col items-center">
//           <h2 className="text-3xl font-bold mb-2">LOGIN</h2>
//           <p className="text-gray-300 mb-6">Sign in to continue</p>

//           {/* Form */}
//           <form className="w-full max-w-sm space-y-4">
//             <div>
//               <label className="block text-sm mb-1">EMAIL</label>
//               <input
//                 type="email"
//                 placeholder="hello@reallygreatsite.com"
//                 className="w-full p-2 border border-gray-400 rounded bg-black text-white placeholder-gray-400"
//               />
//             </div>

//             <div>
//               <label className="block text-sm mb-1">PASSWORD</label>
//               <input
//                 type="password"
//                 placeholder="******"
//                 className="w-full p-2 border border-gray-400 rounded bg-black text-white placeholder-gray-400"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-white text-black py-2 rounded-full font-bold hover:bg-gray-300 transition"
//             >
//               LOGIN
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// src/pages/Login.jsx
// import React from "react";
// import { motion } from "framer-motion";

// const Login = () => {
//   return (
//     <div className="h-screen w-full bg-black flex flex-col items-center justify-center text-white">
//       {/* Navbar */}
//       <div className="absolute top-0 left-0 w-full flex items-center justify-between p-4 border-b border-gray-600">
//         <div className="flex items-center space-x-2">
//           <span className="text-xl">⋯</span>
//           <h1 className="font-bold tracking-wider">FURCARE</h1>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="flex flex-col md:flex-row items-center justify-center w-full px-6">
//         {/* Images (animated) */}
//         <motion.div
//           initial={{ x: -200, y: -200, opacity: 0 }} // start top-left
//           animate={{ x: 0, y: 0, opacity: 1 }} // move to center
//           transition={{ duration: 1, ease: "easeOut" }}
//           className="flex justify-center md:w-1/2 mb-8 md:mb-0"
//         >
//           <img
//             src="public\login_pet.png"
//             alt="Dog and Cat"
//             className="h-96 object-contain"
//           />
//         </motion.div>

//         {/* Login Form (fade + slight up animation) */}
//         <motion.div
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.5, duration: 0.8 }}
//           className="md:w-1/2 flex flex-col items-center"
//         >
//           <h2 className="text-3xl font-bold mb-2">LOGIN</h2>
//           <p className="text-gray-300 mb-6">Sign in to continue</p>

//           <form className="w-full max-w-sm space-y-4">
//             <div>
//               <label className="block text-sm mb-1">EMAIL</label>
//               <input
//                 type="email"
//                 placeholder="hello@reallygreatsite.com"
//                 className="w-full p-2 border border-gray-400 rounded bg-black text-white placeholder-gray-400"
//               />
//             </div>

//             <div>
//               <label className="block text-sm mb-1">PASSWORD</label>
//               <input
//                 type="password"
//                 placeholder="******"
//                 className="w-full p-2 border border-gray-400 rounded bg-black text-white placeholder-gray-400"
//               />
//             </div>

//             <motion.button
//               type="submit"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="w-full bg-white text-black py-2 rounded-full font-bold hover:bg-gray-300 transition"
//             >
//               LOGIN
//             </motion.button>
//           </form>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Login;
// src/pages/Login.jsx
import React from "react";
import { motion } from "framer-motion";
import { PawPrint } from "lucide-react"; // optional, install lucide-react

const floatingVariants = {
  initial: { y: 0, opacity: 0.3 },
  animate: {
    y: [0, -20, 0], // float up and down
    opacity: [0.3, 0.5, 0.3],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Login = () => {
  return (
    <div className="h-screen w-full bg-black flex flex-col items-center justify-center text-white relative overflow-hidden">
      {/* Floating Paw Backgrounds */}
      <motion.div
        className="absolute top-10 left-10 text-white/20"
        variants={floatingVariants}
        initial="initial"
        animate="animate"
      >
        <PawPrint size={80} />
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-20 text-white/20"
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 1 }}
      >
        <PawPrint size={100} />
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-1/3 text-white/10"
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 2 }}
      >
        <PawPrint size={120} />
      </motion.div>

      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full flex items-center justify-between p-4 border-b border-gray-600">
        <div className="flex items-center space-x-2">
          <span className="text-xl">⋯</span>
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
            src="public\login_pet.png"
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

          <form className="w-full max-w-sm space-y-4">
            <div>
              <label className="block text-sm mb-1">EMAIL</label>
              <input
                type="email"
                placeholder="hello@reallygreatsite.com"
                className="w-full p-2 border border-gray-400 rounded bg-black text-white placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">PASSWORD</label>
              <input
                type="password"
                placeholder="******"
                className="w-full p-2 border border-gray-400 rounded bg-black text-white placeholder-gray-400"
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
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
