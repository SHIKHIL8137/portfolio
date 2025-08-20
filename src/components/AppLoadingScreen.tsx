import React from "react";

const AppLoadingScreen: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black flex items-center justify-center overflow-hidden relative">
      <div className="absolute inset-0">
        {Array.from({ length: 100 }, (_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white pointer-events-none"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              opacity: Math.random() * 0.8 + 0.2,
              animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite alternate`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0">
        {Array.from({ length: 3 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-70"
            style={{
              top: `${20 + i * 25}%`,
              animation: `shootingStar ${4 + i}s linear infinite`,
              animationDelay: `${i * 1.5}s`,
            }}
          />
        ))}
      </div>

      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20" 
           style={{ animation: "pulse 6s ease-in-out infinite" }} />
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15" 
           style={{ animation: "pulse 8s ease-in-out infinite", animationDelay: "2s" }} />

      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
          Loading Portfolio...
        </h1>
        
        <div className="flex justify-center items-center space-x-2 mb-6">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "0s" }} />
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
          <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }} />
        </div>

      </div>
      <style>{`
        @keyframes twinkle {
          0% { opacity: 0.2; transform: scale(1); }
          100% { opacity: 1; transform: scale(1.5); }
        }
        
        @keyframes shootingStar {
          0% { 
            transform: translate(-100px, 0) rotate(45deg); 
            opacity: 0; 
          }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { 
            transform: translate(100vw, -100px) rotate(45deg); 
            opacity: 0; 
          }
        }
        
        @keyframes pulse {
          0%, 100% { 
            transform: scale(1); 
            opacity: 0.1; 
          }
          50% { 
            transform: scale(1.1); 
            opacity: 0.2; 
          }
        }
        
        @keyframes progress {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default AppLoadingScreen