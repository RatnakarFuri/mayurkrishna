
import React from 'react';
import { Cloud, Star, Plane } from 'lucide-react';

export const FloatingCloud: React.FC<{
  className?: string;
  size?: number;
  color?: string;
}> = ({ className = "", size = 40, color = "#ffffff" }) => {
  return (
    <div className={`floating-element animate-float-slow ${className}`}>
      <Cloud size={size} color={color} fill="#ffffff" fillOpacity={0.8} />
    </div>
  );
};

export const FloatingStar: React.FC<{
  className?: string;
  size?: number;
  color?: string;
}> = ({ className = "", size = 20, color = "#4f5471" }) => {
  return (
    <div className={`floating-element animate-float ${className}`}>
      <Star size={size} color={color} fill="#FDDC5C" fillOpacity={0.8} />
    </div>
  );
};

export const FloatingPlane: React.FC<{
  className?: string;
  size?: number;
  color?: string;
}> = ({ className = "", size = 30, color = "#4f5471" }) => {
  return (
    <div className={`floating-element animate-float ${className}`}>
      <Plane size={size} color={color} />
    </div>
  );
};

export const FloatingBalloon: React.FC<{
  className?: string;
  color?: string;
}> = ({ className = "", color = "#FF7E7E" }) => {
  return (
    <div className={`floating-element animate-float ${className}`}>
      <svg width="24" height="36" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0Z" fill={color} />
        <path d="M12 24L14 36H10L12 24Z" fill="#4f5471" />
      </svg>
    </div>
  );
};

export const FloatingElements: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />
      
      <FloatingCloud className="top-[10%] left-[5%] opacity-30" />
      <FloatingCloud className="top-[30%] right-[5%] opacity-30" size={60} />
      <FloatingCloud className="bottom-[40%] left-[10%] opacity-30" size={50} />
      <FloatingCloud className="bottom-[20%] right-[15%] opacity-30" size={45} />
      
      <FloatingStar className="top-[15%] right-[20%] opacity-20" />
      <FloatingStar className="top-[40%] left-[25%] opacity-20" size={16} />
      <FloatingStar className="bottom-[30%] right-[30%] opacity-20" size={24} />
      <FloatingStar className="bottom-[50%] left-[40%] opacity-20" size={14} />
      
      <FloatingBalloon className="top-[20%] right-[40%] opacity-25" color="#FF7E7E" />
      <FloatingBalloon className="top-[50%] left-[15%] opacity-25" color="#A6D1E6" />
      <FloatingBalloon className="bottom-[15%] right-[10%] opacity-25" color="#FFA07A" />
      <FloatingBalloon className="bottom-[40%] left-[30%] opacity-25" color="#98D8AA" />
      
      <FloatingPlane className="top-[25%] left-[35%] opacity-30" />
      <FloatingPlane className="bottom-[25%] right-[35%] opacity-30" size={40} />
    </div>
  );
};

export default FloatingElements;
