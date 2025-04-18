
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FloatingBalloon, FloatingStar } from './FloatingElements';
import { Link } from 'react-router-dom';
import { CircleEllipsis } from 'lucide-react';

interface GuestWish {
  id: number;
  name: string;
  relation: string;
  message: string;
  timestamp: string;
}

const GuestWall: React.FC = () => {
  const [wishes, setWishes] = useState<GuestWish[]>([]);

  useEffect(() => {
    const loadWishes = () => {
      const storedWishes = JSON.parse(localStorage.getItem('guestWishes') || '[]');
      setWishes(storedWishes);
    };

    // Load wishes on initial render
    loadWishes();

    // Also load when new wishes are added
    const handleNewWish = () => loadWishes();
    window.addEventListener('newWishAdded', handleNewWish);

    return () => {
      window.removeEventListener('newWishAdded', handleNewWish);
    };
  }, []);

  // Display only the latest 6 wishes
  const visibleWishes = wishes.slice(0, 6);

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

        {visibleWishes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleWishes.map((wish, index) => (
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
                <p className="text-right font-medium italic">- From {wish.name}, your loving {wish.relation}</p>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-xl font-medium">No wishes yet. Be the first to send your blessing!</p>
          </motion.div>
        )}

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link to="/all-wishes" className="btn-primary inline-flex items-center gap-2 hover:scale-105 transition-transform">
            <span>Load More Wishes</span>
            <CircleEllipsis size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default GuestWall;
