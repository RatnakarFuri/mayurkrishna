
import React from 'react';
import { motion } from 'framer-motion';
import { FloatingBalloon, FloatingStar } from './FloatingElements';

const BirthdaySong: React.FC = () => {
  return (
    <section id="birthday-song" className="relative py-20">
      <div className="absolute -left-4 top-12 opacity-30">
        <FloatingBalloon color="#FFD6E0" />
      </div>
      <div className="absolute right-8 bottom-24 opacity-30">
        <FloatingStar />
      </div>
      
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          🎵 A Song for Captain Mayur Krishna
        </motion.h2>

        <motion.p
          className="text-xl text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          This heartfelt track was specially composed to celebrate Mayur Krishna's first birthday. Feel the love and joy in every note!
        </motion.p>

        <motion.div 
          className="watercolor-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col items-center">
            <div className="w-full">
              <h3 className="text-2xl font-handwritten mb-4 text-center">🎤 Lyrics to Mayur's Birthday Song</h3>
              <div className="bg-white bg-opacity-50 rounded-xl p-6 font-medium leading-relaxed space-y-8">
                <div>
                  <p className="font-semibold mb-2">[Verse]</p>
                  <p>
                    One year has come like a starfall glow<br />
                    Mayur Krishna shines in all we know<br />
                    A smile so bright it lights the skies<br />
                    Today we cheer as time flies by
                  </p>
                </div>

                <div>
                  <p className="font-semibold mb-2">[Chorus]</p>
                  <p>
                    Mayur Krishna<br />
                    Our bright young king<br />
                    Love and laughter<br />
                    The joy you bring<br />
                    Your first steps bloom like a morning dew<br />
                    The world's a better place because of you
                  </p>
                </div>

                <div>
                  <p className="font-semibold mb-2">[Verse 2]</p>
                  <p>
                    On the wings of April the sun breaks free<br />
                    A birthday song for the world to see<br />
                    Your sparkle spins in this dance of light<br />
                    From dawn till dusk<br />
                    Your soul takes flight
                  </p>
                </div>

                <div>
                  <p className="font-semibold mb-2">[Bridge]</p>
                  <p>
                    Oh how the stars bow down and grin<br />
                    For the magic of life you carry within<br />
                    A future ahead<br />
                    So wide and grand<br />
                    We're here to walk with you hand in hand
                  </p>
                </div>

                <div>
                  <p className="font-semibold mb-2">[Chorus]</p>
                  <p>
                    Mayur Krishna<br />
                    Our bright young king<br />
                    Love and laughter<br />
                    The joy you bring<br />
                    Your first steps bloom like a morning dew<br />
                    The world's a better place because of you
                  </p>
                </div>

                <div>
                  <p className="font-semibold mb-2">[Verse 3]</p>
                  <p>
                    Balancing dreams on tiny toes<br />
                    The universe listens<br />
                    It only knows<br />
                    One year's passed<br />
                    But so much to see<br />
                    Mayur Krishna<br />
                    You're destiny's key
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BirthdaySong;
