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
      {/* Chatbot Toggle Button - Hidden when chat is open */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-orange-500 rounded-full shadow-lg flex items-center justify-center hover:bg-orange-600 transition"
        >
          🤖
        </button>
      )}

      {/* Chat Window - Bigger size */}
      {isOpen && (
        <div className="w-96 h-[600px] bg-black/95 backdrop-blur-lg text-white rounded-3xl shadow-2xl flex flex-col mb-4 border border-white/10">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-400 to-orange-500 p-4 rounded-t-3xl flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                🐾
              </div>
              <div>
                <span className="font-bold text-lg">FurCare Assistant</span>
                <div className="text-xs text-white/80">Always here to help</div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200"
            >
              ✖️
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`mb-4 flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-br-md"
                      : "bg-[#1a1a1a] text-white border border-gray-700 rounded-bl-md"
                  }`}
                >
                  {msg.role === "bot" && (
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-5 h-5 bg-orange-400 rounded-full flex items-center justify-center text-xs">
                        🐾
                      </div>
                      <span className="text-xs text-gray-400 font-medium">FurCare Bot</span>
                    </div>
                  )}
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-[#1a1a1a] border border-gray-700 p-3 rounded-2xl rounded-bl-md">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-orange-400 rounded-full flex items-center justify-center text-xs">
                      🐾
                    </div>
                    <span className="text-xs text-gray-400 font-medium">FurCare Bot is typing</span>
                  </div>
                  <div className="flex gap-1 items-center mt-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}} />
                    <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-700">
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask about pet care, adoption, grooming..."
                className="flex-1 bg-[#1a1a1a] border border-gray-600 rounded-full px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/50 transition-all duration-200"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 disabled:from-gray-600 disabled:to-gray-700 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
