import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
const DigitalGift: React.FC = () => {
  const {
    toast
  } = useToast();
  const [isDownloading, setIsDownloading] = useState(false);
  const handleDownload = () => {
    setIsDownloading(true);

    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/lovable-uploads/73acc758-6091-49d0-9ea2-93cfa151737b.png';
    link.download = 'mayurbday.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => {
      setIsDownloading(false);
      toast({
        title: "Wallpaper Downloaded!",
        description: "Thank you for celebrating with Captain Mayur Krishna!",
        duration: 5000
      });
    }, 1500);
  };
  return <section id="digital-gift" className="relative py-20">
      <div className="max-w-4xl mx-auto">
        <motion.h2 className="text-4xl md:text-5xl text-center mb-8" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }}>
          Digital Party Gift
        </motion.h2>

        <motion.div className="watercolor-card text-center" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.2
      }}>
          <p className="text-xl mb-8">Thank you for flying with us! Here's a special Captain Mayur Krishna wallpaper for your phone. Long-press on the image to download it.</p>

          <div className="mb-8 relative overflow-hidden rounded-2xl mx-auto max-w-xs">
            <img alt="Captain Mayur Krishna Wallpaper" className="w-full object-cover shadow-lg transform transition-transform duration-500 hover:scale-105" src="/lovable-uploads/68144c60-8e13-49bf-b71b-68a294fc5754.jpg" />
            <div className="absolute inset-0 bg-gradient-to-t from-baby-text/20 to-transparent pointer-events-none"></div>
          </div>

          
        </motion.div>
      </div>
    </section>;
};
export default DigitalGift;