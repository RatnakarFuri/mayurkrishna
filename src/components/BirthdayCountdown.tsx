
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { FloatingBalloon, FloatingStar } from './FloatingElements';

// Next birthday: April 19, 2026 at 12:00 AM
const nextBirthday = new Date('2026-04-19T00:00:00');

const BirthdayCountdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = nextBirthday.getTime() - now.getTime();
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };
    
    // Calculate initially
    calculateTimeLeft();
    
    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);
    
    // Cleanup on unmount
    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  const colors = ['#FFD6E0', '#FFEFBC', '#D1F0FF', '#C1E7E3'];

  return (
    <section id="birthday-countdown" className="relative py-20">
      <div className="absolute -left-8 top-8 md:top-14 opacity-30">
        <FloatingBalloon color="#A6D1E6" />
      </div>
      <div className="absolute right-10 bottom-16 opacity-30">
        <FloatingStar />
      </div>
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          🎂 Countdown to Captain Mayur Krishna's Next Big Day!
        </motion.h2>

        <motion.p
          className="text-xl text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          He's already one — and the journey's just begun! The adventure continues as we count down to his 2nd birthday.
        </motion.p>

        <motion.div 
          className="flex flex-wrap justify-center gap-4 md:gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div 
                className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center shadow-md"
                style={{ backgroundColor: colors[index % colors.length] }}
                whileHover={{ scale: 1.05 }}
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ 
                  duration: 0.3,
                  type: "spring",
                  stiffness: 300
                }}
              >
                <motion.span 
                  className="text-3xl md:text-4xl font-bold"
                  key={unit.value} // This forces re-render when the value changes
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {unit.value}
                </motion.span>
                {index < timeUnits.length - 1 && (
                  <span className="absolute -right-3 md:-right-4 text-2xl md:text-3xl font-semibold text-baby-text">:</span>
                )}
              </motion.div>
              <p className="mt-2 text-sm md:text-base font-medium">{unit.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-12 text-center flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-center px-6 py-3 rounded-full bg-baby-blue bg-opacity-20 shadow-inner">
            <Clock className="mr-2" size={18} />
            <span>April 19, 2026 at 12:00 AM</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BirthdayCountdown;
