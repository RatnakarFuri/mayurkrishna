import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { FloatingBalloon, FloatingStar } from '@/components/FloatingElements';
import Footer from '@/components/Footer';
interface GuestWish {
  id: number;
  name: string;
  relation: string;
  message: string;
  timestamp: string;
}
const AllWishes: React.FC = () => {
  const [wishes, setWishes] = useState<GuestWish[]>([]);
  useEffect(() => {
    // Load wishes from localStorage
    const storedWishes = JSON.parse(localStorage.getItem('guestWishes') || '[]');
    setWishes(storedWishes);

    // Set page title
    document.title = "All Wishes for Captain Mayur Krishna";
  }, []);
  return <div className="min-h-screen bg-gradient-to-b from-baby-blue to-white">
      <div className="max-w-6xl mx-auto pt-12 pb-24 px-4">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-baby-text hover:underline">
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </Link>
        </div>

        <motion.h1 className="text-4xl md:text-6xl text-center font-handwritten mb-12" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }}>
          All Wishes for Captain Mayur Krishna
        </motion.h1>

        {wishes.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishes.map((wish, index) => <motion.div key={wish.id} className="watercolor-card relative overflow-hidden" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: index * 0.05
        }}>
                <div className="absolute -right-4 -top-4 opacity-20">
                  {index % 3 === 0 && <FloatingBalloon color="#FF7E7E" />}
                  {index % 3 === 1 && <FloatingStar />}
                  {index % 3 === 2 && <FloatingBalloon color="#98D8AA" />}
                </div>
                
                <p className="font-handwritten text-xl mb-4">"{wish.message}"</p>
                <p className="text-right font-medium italic">- From {wish.name}, your loving {wish.relation}</p>
              </motion.div>)}
          </div> : <div className="text-center py-12 watercolor-card">
            <p className="text-xl mb-4">
        </p>
            <Link to="/#wishes-form" className="btn-primary">
              Send the First Wish
            </Link>
          </div>}
      </div>
      
      <Footer />
    </div>;
};
export default AllWishes;