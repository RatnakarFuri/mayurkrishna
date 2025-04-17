
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const DigitalGift: React.FC = () => {
  const { toast } = useToast();
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    // In a real app, you would provide an actual download link
    // This is a mock download that just shows a toast
    setTimeout(() => {
      setIsDownloading(false);
      toast({
        title: "Wallpaper Downloaded!",
        description: "Thank you for celebrating with Captain Mayur Krishna!",
        duration: 5000,
      });
    }, 1500);
  };

  return (
    <section id="digital-gift" className="relative py-20">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Digital Party Gift
        </motion.h2>

        <motion.div 
          className="watercolor-card text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-xl mb-8">
            Thank you for flying with us! Here's a special Captain Mayur Krishna wallpaper for your phone.
          </p>

          <div className="mb-8 relative overflow-hidden rounded-2xl mx-auto max-w-xs">
            <img
              src="/lovable-uploads/ae9116dc-68d9-4ea2-b8c1-457cf9cd7149.png"
              alt="Captain Mayur Krishna Wallpaper"
              className="w-full object-cover shadow-lg transform transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-baby-text/20 to-transparent pointer-events-none"></div>
          </div>

          <button
            onClick={handleDownload}
            disabled={isDownloading}
            className="btn-primary"
          >
            {isDownloading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-baby-text" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Downloading...
              </span>
            ) : (
              <>
                Download Wallpaper <Download className="ml-2" size={18} />
              </>
            )}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default DigitalGift;
