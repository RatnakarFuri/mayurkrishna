
import React from 'react';
import { motion } from 'framer-motion';
import { FloatingBalloon, FloatingStar } from './FloatingElements';

// Mock data for guest wishes
const guestWishes = [
  {
    id: 1,
    name: "Aunty Maya",
    message: "Wishing you a life full of giggles, sky-high dreams, and endless cuddles!"
  },
  {
    id: 2,
    name: "Uncle Raj",
    message: "Happy 1st birthday, little pilot! May your journey be amazing."
  },
  {
    id: 3,
    name: "Grandma",
    message: "May you always be brave, curious, and surrounded by love."
  },
  {
    id: 4,
    name: "Cousin Mia",
    message: "Fly high and keep smiling, sweet boy!"
  },
  {
    id: 5,
    name: "Grandpa",
    message: "One year old already! Time flies when you're having fun. Happy Birthday, Captain!"
  },
  {
    id: 6,
    name: "The Sharma Family",
    message: "Wishing the cutest pilot a birthday filled with love, laughter and adventures!"
  }
];

const GuestWall: React.FC = () => {
  return (
    <section id="guest-wall" className="relative py-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Messages for the Little Aviator
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guestWishes.map((wish, index) => (
            <motion.div
              key={wish.id}
              className="watercolor-card relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute -right-4 -top-4 opacity-20">
                {index % 3 === 0 && <FloatingBalloon color="#FF7E7E" />}
                {index % 3 === 1 && <FloatingStar />}
                {index % 3 === 2 && <FloatingBalloon color="#98D8AA" />}
              </div>
              
              <p className="font-handwritten text-xl mb-4">"{wish.message}"</p>
              <p className="text-right font-medium italic">- From {wish.name}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href="#wishes-form" className="btn-primary">
            Add Your Message
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GuestWall;
