
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative pt-24 pb-20 flex flex-col items-center justify-center min-h-[90vh] text-center">
      <div className="z-10 max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="mb-8 relative inline-block"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <img 
              src="/lovable-uploads/ae9116dc-68d9-4ea2-b8c1-457cf9cd7149.png" 
              alt="Captain Mayur Krishna" 
              className="w-64 h-64 object-contain mx-auto animate-float-slow"
            />
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            🎉 Captain Mayur Krishna Has Landed — One Year Around the Sun!
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl font-poppins mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Fasten your seatbelts and join us in celebrating 12 months of giggles, cuddles, and sky-high love.
          </motion.p>

          <motion.a 
            href="#milestone-gallery"
            className="btn-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🛩️ Scroll Down for the Flight Log! <ArrowDown className="ml-1" size={20} />
          </motion.a>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#milestone-gallery" className="text-baby-text opacity-80 hover:opacity-100">
          <ArrowDown size={30} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
