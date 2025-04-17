
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';

const GuestWishesForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    wish: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // This is a mock submission - in a real app, you'd send this to a backend
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Wish Sent Successfully!",
        description: "Thank you for your lovely message for Captain Mayur Krishna.",
        duration: 5000,
      });
      setFormData({
        name: '',
        wish: ''
      });
    }, 1500);
  };

  return (
    <section id="wishes-form" className="relative py-20">
      <div className="max-w-3xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Send Captain Mayur Krishna Your Love and Blessings
        </motion.h2>

        <motion.div 
          className="watercolor-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-baby-blue border-opacity-50 focus:outline-none focus:ring-2 focus:ring-baby-blue"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="wish" className="block text-lg font-medium mb-2">
                Your Wish for the Birthday Boy
              </label>
              <textarea
                id="wish"
                name="wish"
                value={formData.wish}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-baby-blue border-opacity-50 focus:outline-none focus:ring-2 focus:ring-baby-blue"
                placeholder="Write your special wish here..."
              />
            </div>

            <div className="flex justify-center pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full md:w-auto"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-baby-text" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Your Blessing"
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default GuestWishesForm;
