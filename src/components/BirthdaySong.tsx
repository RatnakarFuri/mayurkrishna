
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Download, Play, Pause, Volume2 } from 'lucide-react';
import { FloatingBalloon, FloatingStar } from './FloatingElements';

const SONG_URL = "https://drive.google.com/uc?export=download&id=1-psgwg4dWsJzChHpT53xJ2CjapFYvE0-";

const BirthdaySong: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

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
            <audio ref={audioRef} src={SONG_URL} onEnded={() => setIsPlaying(false)} />
            
            <div className="flex items-center gap-4 mb-8">
              <button 
                onClick={togglePlay}
                className="w-16 h-16 rounded-full bg-baby-blue flex items-center justify-center shadow-md hover:bg-opacity-80 transition-all active:scale-95"
              >
                {isPlaying ? <Pause size={28} /> : <Play size={28} />}
              </button>
              <div className="flex items-center">
                <Volume2 className="mr-2" />
                <div className="h-2 w-48 md:w-80 bg-gray-200 rounded-full">
                  <div 
                    className="h-full bg-baby-blue rounded-full animate-pulse"
                    style={{ width: isPlaying ? '65%' : '0%' }}
                  ></div>
                </div>
              </div>
            </div>
            
            <a
              href={SONG_URL}
              download="Mayur_Krishna_Birthday_Song.mp3"
              className="btn-primary mb-10"
            >
              ⬇️ Download Birthday Song
            </a>
            
            <div className="w-full">
              <h3 className="text-2xl font-handwritten mb-4 text-center">🎤 Lyrics to Mayur's Birthday Song</h3>
              <div className="bg-white bg-opacity-50 rounded-xl p-6 font-medium leading-relaxed">
                <p className="mb-4">
                  Happy Birthday to you, little Captain so true,<br />
                  One year around the sun, with adventures anew.
                </p>
                <p className="mb-4">
                  Mayur Krishna, our star, shining brightly each day,<br />
                  With your giggles and smiles, you light up our way.
                </p>
                <p className="mb-4">
                  From those first tiny steps, to the places you'll go,<br />
                  We'll be cheering you on, as you learn and you grow.
                </p>
                <p>
                  So fly high little captain, the sky's not the limit,<br />
                  Your journey's just started, with so much joy in it!
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BirthdaySong;
