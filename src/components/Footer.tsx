
import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center bg-baby-blue bg-opacity-30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <p className="font-handwritten text-xl mb-2">
          Made with love for Captain Mayur Krishna
        </p>
        <p className="flex items-center justify-center font-poppins text-sm">
          <span>Celebrating one amazing year</span>
          <Heart className="mx-2" size={16} fill="#FF7E7E" />
          <span>{new Date().getFullYear()}</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
