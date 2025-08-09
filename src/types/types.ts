
export interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  color: string;
  type: "dust" | "medium" | "giant";
  shape: "circle" | "cross" | "diamond" | "sparkle" | "plus" | "star4" | "star6";
  twinkleDelay: number;
  rotationSpeed: number;
  directionX: number;
  directionY: number;
  baseOpacity:number;
}

export interface ShootingStar {
  id: number;
  top: string;
  left: string;
  delay: string;
}

export interface Comet {
  id: number;
  top: string;
  left: string;
  delay: string;
}

export interface ThemeContextType {
  theme: "dark" | "light";
  toggleTheme: () => void;
}


export interface FloatingParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  color: string;
  angle: number;
  radius: number;
  centerX: number;
  centerY: number;
  floatOffset: number;
  pulsePhase: number;
}


