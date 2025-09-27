// import React, { useState } from "react";

// const Chatbot = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState([
//     { role: "bot", text: "Hi! 👋 How can I help you today?" },
//   ]);
//   const [input, setInput] = useState("");
//   const [isTyping, setIsTyping] = useState(false);

//   const GEMINI_API_KEY = "YOUR_API_KEY_HERE"; // 🔑 Hardcoded key

//   const handleSend = async () => {
//     if (!input.trim()) return;

//     const userMessage = { role: "user", text: input };
//     setMessages((prev) => [...prev, userMessage]);
//     setInput("");
//     setIsTyping(true);

//     try {
//       const response = await fetch(
//         "https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=" +
//           GEMINI_API_KEY,
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             contents: [{ parts: [{ text: input }] }],
//           }),
//         }
//       );

//       const data = await response.json();
//       const botReply =
//         data?.candidates?.[0]?.content?.parts?.[0]?.text ||
//         "Sorry, I didn’t get that.";

//       // Keep responses short
//       const shortReply = botReply.split(".").slice(0, 1).join(".") + ".";

//       // Simulate typing delay
//       setTimeout(() => {
//         setMessages((prev) => [...prev, { role: "bot", text: shortReply }]);
//         setIsTyping(false);
//       }, 1500);
//     } catch (error) {
//       console.error("Error fetching response:", error);
//       setMessages((prev) => [
//         ...prev,
//         { role: "bot", text: "Error occurred!" },
//       ]);
//       setIsTyping(false);
//     }
//   };

//   return (
//     <div className="fixed bottom-4 right-4 z-50">
//       {/* Chatbot Toggle Button */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="w-14 h-14 bg-orange-500 rounded-full shadow-lg flex items-center justify-center hover:bg-orange-600 transition"
//       >
//         🤖
//       </button>

//       {/* Chat Window */}
//       {isOpen && (
//         <div className="w-80 h-96 bg-white text-black rounded-lg shadow-2xl flex flex-col mt-3">
//           {/* Header */}
//           <div className="bg-orange-500 text-white p-3 rounded-t-lg flex justify-between items-center">
//             <span className="font-bold">FurCare Chatbot</span>
//             <button onClick={() => setIsOpen(false)}>✖️</button>
//           </div>

//           {/* Messages */}
//           <div className="flex-1 p-3 overflow-y-auto text-sm">
//             {messages.map((msg, i) => (
//               <div
//                 key={i}
//                 className={`mb-2 p-2 rounded-lg max-w-[80%] ${
//                   msg.role === "user"
//                     ? "bg-orange-100 ml-auto text-right"
//                     : "bg-gray-200 text-left"
//                 }`}
//               >
//                 {msg.text}
//               </div>
//             ))}

//             {/* Typing Indicator */}
//             {isTyping && (
//               <div className="flex gap-1 items-center text-gray-500 text-sm">
//                 <span className="animate-bounce">●</span>
//                 <span className="animate-bounce delay-200">●</span>
//                 <span className="animate-bounce delay-400">●</span>
//               </div>
//             )}
//           </div>

//           {/* Input */}
//           <div className="p-3 border-t flex gap-2">
//             <input
//               type="text"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={(e) => e.key === "Enter" && handleSend()}
//               placeholder="Ask me anything..."
//               className="flex-1 border rounded px-2 py-1 text-sm focus:outline-none"
//             />
//             <button
//               onClick={handleSend}
//               className="bg-orange-500 text-white px-4 rounded hover:bg-orange-600"
//             >
//               ➤
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Chatbot;



// import React, { useState } from "react";

// const Chatbot = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState([
//     { role: "bot", text: "Hi! 👋 I’ll keep my replies short. How can I help?" },
//   ]);
//   const [input, setInput] = useState("");
//   const [isTyping, setIsTyping] = useState(false);

//   // 🔑 Replace this with the Gemini API key you get from https://aistudio.google.com/app/apikey
//   const GEMINI_API_KEY = "AIzaSyCzGJYYModpUnwqKl43gj9_rfW-neCSVCw";

//   const handleSend = async () => {
//     if (!input.trim()) return;

//     const userMessage = { role: "user", text: input };
//     setMessages((prev) => [...prev, userMessage]);
//     setInput("");
//     setIsTyping(true);

//     try {
//       const response = await fetch(
//         `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             contents: [
//               {
//                 parts: [
//                   { text: "You are a pet adoption chatbot. Keep all replies very short and simple." },
//                   { text: input },
//                 ],
//               },
//             ],
//           }),
//         }
//       );

//       const data = await response.json();
//       const botReply =
//         data?.candidates?.[0]?.content?.parts?.[0]?.text ||
//         "Sorry, I didn’t get that.";

//       // Take only the first sentence to keep replies short
//       const shortReply = botReply.split(/[.!?]/)[0].trim() + ".";

//       // Simulate typing delay
//       setTimeout(() => {
//         setMessages((prev) => [...prev, { role: "bot", text: shortReply }]);
//         setIsTyping(false);
//       }, 1200);
//     } catch (error) {
//       console.error("Error fetching response:", error);
//       setMessages((prev) => [
//         ...prev,
//         { role: "bot", text: "⚠️ Error occurred!" },
//       ]);
//       setIsTyping(false);
//     }
//   };

//   return (
//     <div className="fixed bottom-4 right-4 z-50">
//       {/* Chatbot Toggle Button */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="w-14 h-14 bg-orange-500 rounded-full shadow-lg flex items-center justify-center hover:bg-orange-600 transition"
//       >
//         🤖
//       </button>

//       {/* Chat Window */}
//       {isOpen && (
//         <div className="w-80 h-96 bg-white text-black rounded-lg shadow-2xl flex flex-col mt-3">
//           {/* Header */}
//           <div className="bg-orange-500 text-white p-3 rounded-t-lg flex justify-between items-center">
//             <span className="font-bold">FurCare Chatbot</span>
//             <button onClick={() => setIsOpen(false)}>✖️</button>
//           </div>

//           {/* Messages */}
//           <div className="flex-1 p-3 overflow-y-auto text-sm">
//             {messages.map((msg, i) => (
//               <div
//                 key={i}
//                 className={`mb-2 p-2 rounded-lg max-w-[80%] ${
//                   msg.role === "user"
//                     ? "bg-orange-100 ml-auto text-right"
//                     : "bg-gray-200 text-left"
//                 }`}
//               >
//                 {msg.text}
//               </div>
//             ))}

//             {/* Typing Indicator */}
//             {isTyping && (
//               <div className="flex gap-1 items-center text-gray-500 text-sm">
//                 <span className="animate-bounce">●</span>
//                 <span className="animate-bounce delay-200">●</span>
//                 <span className="animate-bounce delay-400">●</span>
//               </div>
//             )}
//           </div>

//           {/* Input */}
//           <div className="p-3 border-t flex gap-2">
//             <input
//               type="text"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={(e) => e.key === "Enter" && handleSend()}
//               placeholder="Ask me anything..."
//               className="flex-1 border rounded px-2 py-1 text-sm focus:outline-none"
//             />
//             <button
//               onClick={handleSend}
//               className="bg-orange-500 text-white px-4 rounded hover:bg-orange-600"
//             >
//               ➤
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Chatbot;


// import React, { useState } from "react";

// const Chatbot = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState([
//     { role: "bot", text: "Hi! 👋 I’ll keep my replies short. How can I help?" },
//   ]);
//   const [input, setInput] = useState("");
//   const [isTyping, setIsTyping] = useState(false);

//   // 🔑 Hardcoded Gemini API key (replace with your actual key)
//   const GEMINI_API_KEY = "AIzaSyBQ570UFGrBDfnPEDX-MkD3gShfGRAOauo";

//   const handleSend = async () => {
//     if (!input.trim()) return;

//     const userMessage = { role: "user", text: input };
//     setMessages((prev) => [...prev, userMessage]);
//     setInput("");
//     setIsTyping(true);

//     try {
//       const response = await fetch(
//         "https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=" +
//           GEMINI_API_KEY,
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             contents: [{ parts: [{ text: input }] }],
//           }),
//         }
//       );

//       const data = await response.json();
//       console.log("Gemini API response:", data); // 👀 Debugging in console

//       if (data?.candidates?.[0]?.content?.parts?.[0]?.text) {
//         // ✅ Normal reply
//         const botReply = data.candidates[0].content.parts[0].text;
//         const shortReply = botReply.split(".").slice(0, 1).join(".") + ".";

//         setTimeout(() => {
//           setMessages((prev) => [...prev, { role: "bot", text: shortReply }]);
//           setIsTyping(false);
//         }, 1200);
//       } else if (data?.error?.message) {
//         // ⚠️ Show Gemini error
//         setMessages((prev) => [
//           ...prev,
//           { role: "bot", text: "⚠️ Error: " + data.error.message },
//         ]);
//         setIsTyping(false);
//       } else {
//         setMessages((prev) => [
//           ...prev,
//           { role: "bot", text: "⚠️ Unexpected response. Check console." },
//         ]);
//         setIsTyping(false);
//       }
//     } catch (error) {
//       console.error("Error fetching response:", error);
//       setMessages((prev) => [
//         ...prev,
//         { role: "bot", text: "⚠️ Network error. Try again later." },
//       ]);
//       setIsTyping(false);
//     }
//   };

//   return (
//     <div className="fixed bottom-4 right-4 z-50">
//       {/* Chatbot Toggle Button */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="w-14 h-14 bg-orange-500 rounded-full shadow-lg flex items-center justify-center hover:bg-orange-600 transition"
//       >
//         🤖
//       </button>

//       {/* Chat Window */}
//       {isOpen && (
//         <div className="w-80 h-96 bg-white text-black rounded-lg shadow-2xl flex flex-col mt-3">
//           {/* Header */}
//           <div className="bg-orange-500 text-white p-3 rounded-t-lg flex justify-between items-center">
//             <span className="font-bold">FurCare Chatbot</span>
//             <button onClick={() => setIsOpen(false)}>✖️</button>
//           </div>

//           {/* Messages */}
//           <div className="flex-1 p-3 overflow-y-auto text-sm">
//             {messages.map((msg, i) => (
//               <div
//                 key={i}
//                 className={`mb-2 p-2 rounded-lg max-w-[80%] ${
//                   msg.role === "user"
//                     ? "bg-orange-100 ml-auto text-right"
//                     : "bg-gray-200 text-left"
//                 }`}
//               >
//                 {msg.text}
//               </div>
//             ))}

//             {/* Typing Indicator */}
//             {isTyping && (
//               <div className="flex gap-1 items-center text-gray-500 text-sm">
//                 <span className="animate-bounce">●</span>
//                 <span className="animate-bounce delay-200">●</span>
//                 <span className="animate-bounce delay-400">●</span>
//               </div>
//             )}
//           </div>

//           {/* Input */}
//           <div className="p-3 border-t flex gap-2">
//             <input
//               type="text"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={(e) => e.key === "Enter" && handleSend()}
//               placeholder="Ask me anything..."
//               className="flex-1 border rounded px-2 py-1 text-sm focus:outline-none"
//             />
//             <button
//               onClick={handleSend}
//               className="bg-orange-500 text-white px-4 rounded hover:bg-orange-600"
//             >
//               ➤
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Chatbot;



import React, { useState } from "react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi! 👋 I’ll keep my replies short. How can I help?" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // 🔑 Hardcode your API key here
  const GEMINI_API_KEY = "AIzaSyBQ570UFGrBDfnPEDX-MkD3gShfGRAOauo";

  // Default to gemini-2.5-flash (faster/cheaper model)
  const MODEL_NAME = "models/gemini-2.5-flash";

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/${MODEL_NAME}:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: input }] }],
          }),
        }
      );

      const data = await response.json();
      console.log("API Response:", data);

      const botReply =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Sorry, I didn’t get that.";

      // Keep responses short
      const shortReply = botReply.split(".").slice(0, 1).join(".") + ".";

      // Simulate typing delay
      setTimeout(() => {
        setMessages((prev) => [...prev, { role: "bot", text: shortReply }]);
        setIsTyping(false);
      }, 1200);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "⚠️ Error occurred while fetching response." },
      ]);
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-orange-500 rounded-full shadow-lg flex items-center justify-center hover:bg-orange-600 transition"
      >
        🤖
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 h-96 bg-white text-black rounded-lg shadow-2xl flex flex-col mt-3">
          {/* Header */}
          <div className="bg-orange-500 text-white p-3 rounded-t-lg flex justify-between items-center">
            <span className="font-bold">FurCare Chatbot</span>
            <button onClick={() => setIsOpen(false)}>✖️</button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`mb-2 p-2 rounded-lg max-w-[80%] ${
                  msg.role === "user"
                    ? "bg-orange-100 ml-auto text-right"
                    : "bg-gray-200 text-left"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-1 items-center text-gray-500 text-sm">
                <span className="animate-bounce">●</span>
                <span className="animate-bounce delay-200">●</span>
                <span className="animate-bounce delay-400">●</span>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-3 border-t flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask me anything..."
              className="flex-1 border rounded px-2 py-1 text-sm focus:outline-none"
            />
            <button
              onClick={handleSend}
              className="bg-orange-500 text-white px-4 rounded hover:bg-orange-600"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
