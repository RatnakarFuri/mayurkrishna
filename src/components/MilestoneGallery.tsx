
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Mock data for the milestone gallery
const milestoneData = [
  {
    month: 1,
    photos: [
      { id: 1, caption: "First Yawn (so sleepy!)", url: "https://source.unsplash.com/random/600x800/?baby,newborn" },
      { id: 2, caption: "Baby's First Smile", url: "https://source.unsplash.com/random/600x800/?baby,smile" }
    ]
  },
  {
    month: 2,
    photos: [
      { id: 3, caption: "Discovering My Hands", url: "https://source.unsplash.com/random/600x800/?baby,hands" },
      { id: 4, caption: "Tummy Time Champion", url: "https://source.unsplash.com/random/600x800/?baby,tummy" }
    ]
  },
  {
    month: 3,
    photos: [
      { id: 5, caption: "First Roll Over!", url: "https://source.unsplash.com/random/600x800/?baby,rolling" },
      { id: 6, caption: "Happy Giggles", url: "https://source.unsplash.com/random/600x800/?baby,laughing" }
    ]
  },
  {
    month: 4,
    photos: [
      { id: 7, caption: "Reaching for Toys", url: "https://source.unsplash.com/random/600x800/?baby,toys" },
      { id: 8, caption: "Curious About Everything", url: "https://source.unsplash.com/random/600x800/?baby,curious" }
    ]
  },
  {
    month: 5,
    photos: [
      { id: 9, caption: "First Tastes of Food", url: "https://source.unsplash.com/random/600x800/?baby,food" },
      { id: 10, caption: "Sitting Up Like a Pro", url: "https://source.unsplash.com/random/600x800/?baby,sitting" }
    ]
  },
  {
    month: 6,
    photos: [
      { id: 11, caption: "Half Birthday Celebration", url: "https://source.unsplash.com/random/600x800/?baby,celebration" },
      { id: 12, caption: "Bath Time Fun", url: "https://source.unsplash.com/random/600x800/?baby,bath" }
    ]
  },
  {
    month: 7,
    photos: [
      { id: 13, caption: "Crawling Adventures Begin", url: "https://source.unsplash.com/random/600x800/?baby,crawling" },
      { id: 14, caption: "First Wave Hello!", url: "https://source.unsplash.com/random/600x800/?baby,waving" }
    ]
  },
  {
    month: 8,
    photos: [
      { id: 15, caption: "Standing with Support", url: "https://source.unsplash.com/random/600x800/?baby,standing" },
      { id: 16, caption: "Exploring the Great Outdoors", url: "https://source.unsplash.com/random/600x800/?baby,outdoors" }
    ]
  },
  {
    month: 9,
    photos: [
      { id: 17, caption: "Learning to Clap", url: "https://source.unsplash.com/random/600x800/?baby,clapping" },
      { id: 18, caption: "First Steps with Walker", url: "https://source.unsplash.com/random/600x800/?baby,walker" }
    ]
  },
  {
    month: 10,
    photos: [
      { id: 19, caption: "Playing Peek-a-boo", url: "https://source.unsplash.com/random/600x800/?baby,peekaboo" },
      { id: 20, caption: "Dancing to Music", url: "https://source.unsplash.com/random/600x800/?baby,dancing" }
    ]
  },
  {
    month: 11,
    photos: [
      { id: 21, caption: "First Words Attempt", url: "https://source.unsplash.com/random/600x800/?baby,talking" },
      { id: 22, caption: "Building Blocks Tower", url: "https://source.unsplash.com/random/600x800/?baby,blocks" }
    ]
  },
  {
    month: 12,
    photos: [
      { id: 23, caption: "Standing Tall for Takeoff", url: "https://source.unsplash.com/random/600x800/?baby,standing" },
      { id: 24, caption: "Ready for Adventures", url: "https://source.unsplash.com/random/600x800/?baby,adventure" }
    ]
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
      <div className="max-w-6xl mx-auto">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {month?.photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              className="watercolor-card overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="aspect-[4/5] overflow-hidden rounded-2xl mb-4">
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                />
              </div>
              <p className="font-handwritten text-xl text-center">{photo.caption}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
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
