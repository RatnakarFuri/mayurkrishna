
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FloatingBalloon, FloatingStar } from '@/components/FloatingElements';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Footer from '@/components/Footer';

// Extended mock data for all guest wishes
const allGuestWishes = [
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
  },
  {
    id: 7,
    name: "Priya Aunty",
    message: "May your future be as bright as your beautiful smile! Happy 1st birthday!"
  },
  {
    id: 8,
    name: "Neighbors",
    message: "Watching you grow has been such a joy. Happy birthday, little one!"
  },
  {
    id: 9,
    name: "Dad's Office Friends",
    message: "Wishing the youngest captain a day full of fun, cake, and wonderful memories!"
  },
  {
    id: 10,
    name: "Cousins from Mumbai",
    message: "Can't wait to meet you soon! Happy 1st birthday, little explorer!"
  },
];

const AllWishes: React.FC = () => {
  useEffect(() => {
    document.title = "All Wishes - Captain Mayur Krishna's First Birthday";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Background floating elements */}
      <div className="fixed inset-0 pointer-events-none opacity-50 overflow-hidden">
        <div className="absolute top-20 left-[10%]">
          <FloatingBalloon color="#A6D1E6" />
        </div>
        <div className="absolute top-40 right-[15%]">
          <FloatingStar />
        </div>
        <div className="absolute bottom-40 left-[20%]">
          <FloatingBalloon color="#FF7E7E" />
        </div>
        <div className="absolute bottom-60 right-[25%]">
          <FloatingStar />
        </div>
      </div>
      
      {/* Main content */}
      <main className="relative pt-12 pb-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-start mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center font-medium text-baby-blue hover:text-opacity-80 transition-colors"
            >
              <ArrowLeft className="mr-2" size={20} />
              Back to Birthday Page
            </Link>
          </div>

          <motion.h1 
            className="text-4xl md:text-5xl text-center font-handwritten mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            All Birthday Wishes for Captain Mayur Krishna
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allGuestWishes.map((wish, index) => (
              <motion.div
                key={wish.id}
                className="watercolor-card relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
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

          <div className="text-center mt-12">
            <Link 
              to="/" 
              className="btn-primary inline-flex items-center gap-2 hover:scale-105 transition-transform"
            >
              <ArrowLeft size={20} />
              Back to Birthday Page
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AllWishes;
