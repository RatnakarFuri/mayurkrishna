
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Updated data for milestone gallery with only 1 photo per month
const milestoneData = [
  {
    month: 1,
    photo: { id: 1, caption: "First Yawn (so sleepy!)", url: "https://source.unsplash.com/random/600x800/?baby,newborn" }
  },
  {
    month: 2,
    photo: { id: 2, caption: "Discovering My Hands", url: "https://source.unsplash.com/random/600x800/?baby,hands" }
  },
  {
    month: 3,
    photo: { id: 3, caption: "First Roll Over!", url: "https://source.unsplash.com/random/600x800/?baby,rolling" }
  },
  {
    month: 4,
    photo: { id: 4, caption: "Reaching for Toys", url: "https://source.unsplash.com/random/600x800/?baby,toys" }
  },
  {
    month: 5,
    photo: { id: 5, caption: "First Tastes of Food", url: "https://source.unsplash.com/random/600x800/?baby,food" }
  },
  {
    month: 6,
    photo: { id: 6, caption: "Half Birthday Celebration", url: "https://source.unsplash.com/random/600x800/?baby,celebration" }
  },
  {
    month: 7,
    photo: { id: 7, caption: "Crawling Adventures Begin", url: "https://source.unsplash.com/random/600x800/?baby,crawling" }
  },
  {
    month: 8,
    photo: { id: 8, caption: "Standing with Support", url: "https://source.unsplash.com/random/600x800/?baby,standing" }
  },
  {
    month: 9,
    photo: { id: 9, caption: "Learning to Clap", url: "https://source.unsplash.com/random/600x800/?baby,clapping" }
  },
  {
    month: 10,
    photo: { id: 10, caption: "Playing Peek-a-boo", url: "https://source.unsplash.com/random/600x800/?baby,peekaboo" }
  },
  {
    month: 11,
    photo: { id: 11, caption: "First Words Attempt", url: "https://source.unsplash.com/random/600x800/?baby,talking" }
  },
  {
    month: 12,
    photo: { id: 12, caption: "Standing Tall for Takeoff", url: "https://source.unsplash.com/random/600x800/?baby,standing" }
  }
];

const MilestoneGallery: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(1);

  const nextMonth = () => {
    setCurrentMonth(prev => prev < 12 ? prev + 1 : prev);
  };

  const prevMonth = () => {
    setCurrentMonth(prev => prev > 1 ? prev - 1 : prev);
  };

  const month = milestoneData.find(m => m.month === currentMonth);

  return (
    <section id="milestone-gallery" className="relative py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          ✈️ Captain Mayur Krishna's First 12-Month Journey
        </motion.h2>

        <div className="flex justify-between items-center mb-6">
          <motion.div 
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <button 
              onClick={prevMonth} 
              disabled={currentMonth === 1}
              className="p-2 rounded-full bg-baby-blue disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous month"
            >
              <ChevronLeft size={24} />
            </button>
            <span className="font-handwritten text-2xl">Month {currentMonth}</span>
            <button 
              onClick={nextMonth} 
              disabled={currentMonth === 12}
              className="p-2 rounded-full bg-baby-blue disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next month"
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>

          <motion.div 
            className="hidden md:flex gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            {Array.from({ length: 12 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentMonth(i + 1)}
                className={`w-8 h-8 rounded-full flex items-center justify-center 
                  ${currentMonth === i + 1 ? 'bg-baby-blue text-white' : 'bg-white text-baby-text'}`}
              >
                {i + 1}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="watercolor-card overflow-hidden max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="aspect-[4/5] overflow-hidden rounded-2xl mb-4">
            <img
              src={month?.photo.url}
              alt={month?.photo.caption}
              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
            />
          </div>
          <p className="font-handwritten text-xl text-center">{month?.photo.caption}</p>
        </motion.div>

        <div className="flex justify-center mt-8">
          <div className="grid grid-cols-6 md:grid-cols-12 gap-1">
            {Array.from({ length: 12 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentMonth(i + 1)}
                className={`w-full h-2 rounded ${currentMonth === i + 1 ? 'bg-baby-blue' : 'bg-baby-blue bg-opacity-30'}`}
                aria-label={`Go to Month ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MilestoneGallery;
