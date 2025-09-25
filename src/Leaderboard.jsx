 

//mock data part 
import React, { useState, useEffect } from "react";
import { GiSnake, GiEagleHead, GiLion } from "react-icons/gi";
import { FaFeatherAlt, FaHorse, FaStar } from "react-icons/fa";

function Leaderboard() {
  const [houses, setHouses] = useState([]);

  const mockData = [
    { name: "Devadatta", score: 200, color: "text-sky-200" },
    { name: "Vasuki", score: 190, color: "text-green-400" },
    { name: "Mayura", score: 180, color: "text-sky-400" },
    { name: "Airavata", score: 170, color: "text-gray-200" },
    { name: "Garuda", score: 160, color: "text-yellow-400" },
    { name: "Simha", score: 150, color: "text-orange-500" },
  ];

  useEffect(() => {
    setHouses(assignIconsAndSort(mockData));
  }, []);

  const assignIconsAndSort = (data) =>
    data
      .map((house) => ({
        ...house,
        icon:
          house.name === "Devadatta" ? (
            <FaStar className="text-sky-200 text-5xl" />
          ) : house.name === "Vasuki" ? (
            <GiSnake className="text-green-500 text-5xl" />
          ) : house.name === "Mayura" ? (
            <FaFeatherAlt className="text-blue-400 text-5xl" />
          ) : house.name === "Airavata" ? (
            <FaHorse className="text-gray-100 text-5xl" />
          ) : house.name === "Garuda" ? (
            <GiEagleHead className="text-yellow-400 text-5xl" />
          ) : house.name === "Simha" ? (
            <GiLion className="text-orange-500 text-5xl" />
          ) : null,
      }))
      .sort((a, b) => b.score - a.score);

  return (
    <div
      className="min-h-screen text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/website bg for all pages.png')" }}
    >
      {/* space for navbar */}
      <div className="h-28"></div>

      {/* Leaderboard Title */}
      <h1 className="text-7xl font-bold text-yellow-400 mb-14 text-center font-[Cinzel_Decorative] tracking-widest">
        LEADERBOARD
      </h1>

      {/* Rows */}
      <div className="w-full space-y-6 px-8">
        {houses.map((house, index) => (
          <div
            key={index}
            className="grid grid-cols-3 items-center w-full bg-black/40 rounded-xl py-6 px-12 shadow-md text-center"
          >
            {/* Left: Icon */}
            <div className="flex justify-start">{house.icon}</div>

            {/* Middle: Team Name */}
            <div>
              <span
                className={`text-4xl font-semibold font-[Cinzel] ${house.color}`}
              >
                {house.name}
              </span>
            </div>

            {/* Right: Score (same color) */}
            <div className="flex justify-end">
              <span
                className={`text-3xl font-semibold font-[Cinzel] ${house.color}`}
              >
                {house.score}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Leaderboard;


//backend part  
// import React, { useState, useEffect } from "react";
// import { GiSnake, GiEagleHead, GiLion } from "react-icons/gi";
// import { FaFeatherAlt, FaHorse, FaStar } from "react-icons/fa";

// function Leaderboard() {
//   const [houses, setHouses] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch data from backend
//   useEffect(() => {
//     const fetchLeaderboard = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/leaderboard");
//         if (!res.ok) throw new Error("Failed to fetch leaderboard");
//         const data = await res.json();

//         setHouses(assignIconsAndSort(data));
//       } catch (err) {
//         console.error("Error fetching leaderboard:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchLeaderboard();
//   }, []);

//   // Add icons + sort by score
//   const assignIconsAndSort = (data) =>
//     data
//       .map((house) => ({
//         ...house,
//         icon:
//           house.name === "Devadatta" ? (
//             <FaStar className="text-sky-200 text-5xl" />
//           ) : house.name === "Vasuki" ? (
//             <GiSnake className="text-green-500 text-5xl" />
//           ) : house.name === "Mayura" ? (
//             <FaFeatherAlt className="text-blue-400 text-5xl" />
//           ) : house.name === "Airavata" ? (
//             <FaHorse className="text-gray-100 text-5xl" />
//           ) : house.name === "Garuda" ? (
//             <GiEagleHead className="text-yellow-400 text-5xl" />
//           ) : house.name === "Simha" ? (
//             <GiLion className="text-orange-500 text-5xl" />
//           ) : null,
//       }))
//       .sort((a, b) => b.score - a.score);

//   return (
//     <div
//       className="min-h-screen text-white bg-cover bg-center"
//       style={{ backgroundImage: "url('/website bg for all pages.png')" }}
//     >
//       {/* space for navbar */}
//       <div className="h-28"></div>

//       {/* Title */}
//       <h1 className="text-7xl font-bold text-yellow-400 mb-14 text-center font-[Cinzel_Decorative] tracking-widest">
//         LEADERBOARD
//       </h1>

//       {/* Rows */}
//       <div className="w-full space-y-6 px-8">
//         {loading ? (
//           <p className="text-center text-xl text-gray-300">Loading...</p>
//         ) : (
//           houses.map((house, index) => (
//             <div
//               key={index}
//               className="grid grid-cols-3 items-center w-full bg-black/40 rounded-xl py-6 px-12 shadow-md text-center"
//             >
//               {/* Left: Icon */}
//               <div className="flex justify-start">{house.icon}</div>

//               {/* Middle: Team Name */}
//               <div>
//                 <span
//                   className={`text-4xl font-semibold font-[Cinzel] ${house.color}`}
//                 >
//                   {house.name}
//                 </span>
//               </div>

//               {/* Right: Score (same color) */}
//               <div className="flex justify-end">
//                 <span
//                   className={`text-3xl font-semibold font-[Cinzel] ${house.color}`}
//                 >
//                   {house.score}
//                 </span>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

// export default Leaderboard;




