import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const milestoneData = [
  {
    month: 1,
    photo: { id: 1, caption: "🥰 Tiny Dreams, Disney Vibes", url: "/lovable-uploads/6dab78ec-0d93-4ef6-baea-1438b82cf3c9.png" }
  },
  {
    month: 2,
    photo: { id: 2, caption: "🎈 High Above the Clouds", url: "/lovable-uploads/932680b0-ae3e-4aa0-8d37-bcf2c4146194.png" }
  },
  {
    month: 3,
    photo: { id: 3, caption: "🌊 Tiny Toes, Sandy Shores", url: "/lovable-uploads/f7b04a1b-fe03-4fa5-9f31-12fb3fb7ee50.png" }
  },
  {
    month: 4,
    photo: { id: 4, caption: "🕉️ Little Prince in Dhoti", url: "/lovable-uploads/f586643f-fdc6-4ad8-afe8-cd2a9db5969b.png" }
  },
  {
    month: 5,
    photo: { id: 5, caption: "🏍️ Zoom Zoom, Little One", url: "/lovable-uploads/95552dae-cb77-4dc8-a378-d3df2e0b5f7a.png" }
  },
  {
    month: 6,
    photo: { id: 6, caption: "🎂 Halfway to One!", url: "/lovable-uploads/a850016a-889a-4f85-9c39-93cc7acdc608.png" }
  },
  {
    month: 7,
    photo: { id: 7, caption: "👨‍🍳 Whisking Up Smiles", url: "/lovable-uploads/874d291a-3edd-4af9-a7fe-537d24ea3cc9.png" }
  },
  {
    month: 8,
    photo: { id: 8, caption: "🎅 Mini Santa, Maximum Cuteness", url: "/lovable-uploads/ceb239cb-15c3-4154-ae0d-2e3853fbe6e2.png" }
  },
  {
    month: 9,
    photo: { id: 9, caption: "🪁 Sankranthi Smiles & Sunshine", url: "/lovable-uploads/e94ef977-c86d-4ccd-abf7-8494be76d2c0.png" }
  },
  {
    month: 10,
    photo: { id: 10, caption: "🚢 Ahoy, Little Sailor!", url: "/lovable-uploads/013e32d0-fb4f-4bc8-a6aa-27f1d2ae0bb2.png" }
  },
  {
    month: 11,
    photo: { id: 11, caption: "🎨 Holi Hai with Mayur", url: "/lovable-uploads/46c49c77-58ca-4d03-968c-a6043dfa1987.png" }
  },
  {
    month: 12,
    photo: { id: 12, caption: "😄 Giggles On Full Volume", url: "/lovable-uploads/ea3e362c-3634-43fb-bac9-2e8c55e03b54.png" }
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
