import React, { useState, useEffect, useCallback, useContext, useRef, useMemo } from "react";
import { ThemeContext } from "../context/ThemeContext";
import type { Comet, ShootingStar, Star } from "../types/types";

interface AnimatedSpaceBackgroundProps {
  children: React.ReactNode;
}

const AnimatedSpaceBackground: React.FC<AnimatedSpaceBackgroundProps> = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const [stars, setStars] = useState<Star[]>([]);
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);
  const [comets, setComets] = useState<Comet[]>([]);

  
  const lastTimeRef = useRef<number>(performance.now());
  const targetFrameTime = 1000 / 30;
  const animationIdRef = useRef<number>(0);
  const shootingIntervalRef:any = useRef(0);
  const cometIntervalRef:any = useRef(0);

  const wrapPosition = useCallback((position: number, max: number = 100): number => {
    if (position > max + 5) return -5;
    if (position < -5) return max + 5;
    return position;
  }, []);

  const easeInOutSine = useCallback((t: number): number => -(Math.cos(Math.PI * t) - 1) / 2, []);

  const themeValues = useMemo(() => {
    const isDark = theme === "dark";
    return {
      colors: isDark
        ? ["#ffffff", "#add8e6", "#ffffe0", "#d8bfd8", "#ffe4b5", "#ffd700", "#87ceeb"]
        : ["#333333", "#4b5e7a", "#4a4a2e", "#5e4a5e", "#5e4a2e", "#5e4a00", "#4a5e7a"],
      particleColors: isDark
        ? ["#ffffff", "#add8e6", "#ffffe0", "#d8bfd8", "#ffe4b5", "#ffd700", "#87ceeb", "#ff69b4", "#00ffff", "#98fb98"]
        : ["#333333", "#4b5e7a", "#4a4a2e", "#5e4a5e", "#5e4a2e", "#5e4a00", "#4a5e7a", "#8b4a8b", "#4a7a7a", "#6b8b4a"],
      bgClass: isDark
        ? "bg-gradient-to-b from-black via-gray-950 to-black"
        : "bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300",
      starClass: isDark ? "bg-white" : "bg-gray-800",
      cometClass: isDark ? "bg-gradient-to-r from-white to-blue-200" : "bg-gradient-to-r from-gray-800 to-blue-500",
    };
  }, [theme]);

  const shapes: ("circle" | "cross" | "diamond" | "sparkle" | "plus" | "star4" | "star6")[] = useMemo(() => [
    "circle", "cross", "diamond", "sparkle", "plus", "star4", "star6",
  ], []);

const animate = useCallback((currentTime: number) => {
  const deltaTime = currentTime - lastTimeRef.current;

  if (deltaTime >= targetFrameTime) {
    const normalizedDelta = deltaTime / 16.67;
    setStars((prevStars) =>
      prevStars.map((star) => {
        // Calculate new position
        const newX = wrapPosition(star.x + star.directionX * star.speed * normalizedDelta * 0.5);
        const newY = wrapPosition(star.y + star.directionY * star.speed * normalizedDelta * 0.5);

        // Calculate opacity for twinkle: oscillate between 0 and 1 smoothly
        const twinkleSpeed = 3; // Adjust twinkle speed here
        const elapsedSeconds = currentTime / 1000; // Convert ms to seconds
        const twinklePhase = twinkleSpeed * elapsedSeconds + (star.twinkleDelay || 0);
        const twinkleOpacity = 0.5 + 0.5 * Math.sin(twinklePhase); // 0 to 1 sine wave

        // Scale opacity by baseOpacity to preserve star brightness variety
        const opacity = (star.baseOpacity ?? star.opacity) * twinkleOpacity;

        return {
          ...star,
          x: newX,
          y: newY,
          opacity,
        };
      })
    );

    lastTimeRef.current = currentTime;
  }

  animationIdRef.current = requestAnimationFrame(animate);
}, [wrapPosition, targetFrameTime]);


  useEffect(() => {
    const generateStars = () => {
  const starArray: Star[] = [];
  for (let i = 0; i < 150; i++) {
    const typeRand = Math.random();
    let type: "dust" | "medium" | "giant" = "medium";
    if (typeRand < 0.6) type = "dust";
    else if (typeRand > 0.9) type = "giant";

    const baseOpacity =
      type === "dust"
        ? Math.random() * 0.5 + 0.1
        : type === "medium"
        ? Math.random() * 0.7 + 0.3
        : Math.random() * 0.4 + 0.5;

    starArray.push({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size:
        type === "dust"
          ? Math.random() * 1.2 + 0.3
          : type === "medium"
          ? Math.random() * 1.8 + 1.2
          : Math.random() * 3 + 2,
      speed:
        type === "dust"
          ? Math.random() * 0.08 + 0.01
          : type === "medium"
          ? Math.random() * 0.06 + 0.01
          : Math.random() * 0.04 + 0.005,
      opacity: baseOpacity,
      baseOpacity: baseOpacity,  
      color: themeValues.colors[Math.floor(Math.random() * themeValues.colors.length)],
      type,
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      twinkleDelay: Math.random() * 2 * Math.PI,
      rotationSpeed: Math.random() * 1.5 + 0.3,
      directionX: (Math.random() - 0.5) * 1.5,
      directionY: (Math.random() - 0.5) * 1.5,
    });
  }
  setStars(starArray);
};



    const generateShootingStars = () => {
      const tinyStarArray: ShootingStar[] = [];
      for (let i = 0; i < 20; i++) { 
        tinyStarArray.push({
          id: i,
          top: `${Math.random() * 100}%`,
          left: `${-10 + Math.random() * 20}%`,
          delay: `${Math.random() * 8}s`,
        });
      }
      setShootingStars(tinyStarArray);
    };

    const generateComets = () => {
      const tinyStarArray: Comet[] = [];
      for (let i = 0; i < 100; i++) { 
        tinyStarArray.push({
          id: i,
          top: `${Math.random() * 100}%`,
          left: `${-5 + Math.random() * 15}%`,
          delay: `${Math.random() * 10}s`,
        });
      }
      setComets(tinyStarArray);
    };

    generateStars();
    generateShootingStars();
    generateComets();
    
    animationIdRef.current = requestAnimationFrame(animate);

    shootingIntervalRef.current = setInterval(() => {
      setShootingStars((prevStars) =>
        prevStars.map((star) => ({
          ...star,
          top: `${Math.random() * 100}%`,
          left: `${-10 + Math.random() * 20}%`,
          delay: `${Math.random() * 2}s`,
        }))
      );
    }, 10000);

    cometIntervalRef.current = setInterval(() => {
      setComets((prevComets) =>
        prevComets.map((comet) => ({
          ...comet,
          top: `${Math.random() * 100}%`,
          left: `${-5 + Math.random() * 15}%`,
          delay: `${Math.random() * 3}s`,
        }))
      );
    }, 12000);

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (shootingIntervalRef.current) {
        clearInterval(shootingIntervalRef.current);
      }
      if (cometIntervalRef.current) {
        clearInterval(cometIntervalRef.current);
      }
    };
  }, [themeValues, shapes, animate]);

  const renderStar = useCallback(
    (star: Star) => {
      const baseStyle: React.CSSProperties = {
        transform: `translate3d(${star.x}vw, ${star.y}vh, 0)`,
        opacity: star.opacity,
        animation: `twinkle ${2 + star.twinkleDelay}s ease-in-out infinite alternate, rotate ${
          star.rotationSpeed * 6
        }s linear infinite`,
        animationDelay: `${star.twinkleDelay}s`,
        color: star.color,
        fontSize: `${star.size}px`,
        textShadow: star.type === "giant" ? `0 0 ${star.size * 2}px ${star.color}` : "none",
        willChange: "transform",
        contain: "layout style paint",
      };

      const commonProps = {
        key: star.id,
        className: "absolute flex items-center justify-center pointer-events-none",
        style: baseStyle,
      };

      switch (star.shape) {
        case "circle":
          return (
            <div
              key={star.id}
              className="absolute rounded-full pointer-events-none"
              style={{
                transform: `translate3d(${star.x}vw, ${star.y}vh, 0)`,
                backgroundColor: star.color,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: star.opacity,
                animation: `twinkle ${2 + star.twinkleDelay}s ease-in-out infinite alternate`,
                animationDelay: `${star.twinkleDelay}s`,
                boxShadow: star.type === "giant" ? `0 0 ${star.size * 3}px ${star.color}` : "none",
                willChange: "transform",
                contain: "layout style paint",
              }}
            />
          );
        case "cross":
          return <div {...commonProps}><span className="select-none">✦</span></div>;
        case "diamond":
          return <div {...commonProps}><span className="select-none">◆</span></div>;
        case "sparkle":
          return <div {...commonProps}><span className="select-none">✨</span></div>;
        case "plus":
          return <div {...commonProps}><span className="select-none">✚</span></div>;
        case "star4":
          return <div {...commonProps}><span className="select-none">✦</span></div>;
        case "star6":
          return <div {...commonProps}><span className="select-none">✶</span></div>;
        default:
          return null;
      }
    },
    []
  );

  return (
    <div className={`relative w-full min-h-screen overflow-hidden ${themeValues.bgClass}`}>
      <div className="absolute inset-0">
        <div
          className={`absolute top-1/4 left-1/3 w-80 h-80 ${
            theme === "dark" ? "bg-purple-800" : "bg-purple-300"
          } rounded-full mix-blend-multiply filter blur-3xl opacity-10`}
          style={{ animation: "pulse 8s ease-in-out infinite" }}
        />
        <div
          className={`absolute top-1/2 right-1/4 w-72 h-72 ${
            theme === "dark" ? "bg-blue-800" : "bg-blue-300"
          } rounded-full mix-blend-multiply filter blur-3xl opacity-8`}
          style={{ animation: "pulse 10s ease-in-out infinite", animationDelay: "2s" }}
        />
        <div
          className={`absolute bottom-1/3 left-1/4 w-64 h-64 ${
            theme === "dark" ? "bg-indigo-800" : "bg-indigo-300"
          } rounded-full mix-blend-multiply filter blur-3xl opacity-6`}
          style={{ animation: "pulse 12s ease-in-out infinite", animationDelay: "4s" }}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {stars.map(renderStar)}
      </div>

      {shootingStars.map((s) => (
        <div
          key={s.id}
          className={`absolute w-0.5 h-0.5 rounded-full ${themeValues.starClass} pointer-events-none`}
          style={{
            top: s.top,
            left: s.left,
            animation: "tinyMovingStar 8s linear infinite",
            animationDelay: s.delay,
            opacity: 0.7,
            willChange: "transform",
          }}
        />
      ))}

      {comets.map((c) => (
        <div
          key={c.id}
          className={`absolute w-0.5 h-0.5 rounded-full ${themeValues.starClass} pointer-events-none`}
          style={{
            top: c.top,
            left: c.left,
            animation: "tinyMovingStar 10s linear infinite",
            animationDelay: c.delay,
            opacity: 0.6,
            willChange: "transform",
          }}
        />
      ))}


      <div className="relative z-10">{children}</div>

      <style>{`
        @keyframes twinkle {
          0% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
          100% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes tinyMovingStar {
          0% { 
            transform: translate3d(-50px, 0px, 0); 
            opacity: 0; 
          }
          5% { 
            opacity: 0.7; 
          }
          95% { 
            opacity: 0.3; 
          }
          100% { 
            transform: translate3d(calc(100vw + 50px), -200px, 0); 
            opacity: 0; 
          }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.1); opacity: 0.15; }
        }
        .select-none { user-select: none; }
      `}</style>
    </div>
  );
};

export default AnimatedSpaceBackground;