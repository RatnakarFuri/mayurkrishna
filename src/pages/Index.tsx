
import React, { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import MilestoneGallery from '@/components/MilestoneGallery';
import GuestWishesForm from '@/components/GuestWishesForm';
import GuestWall from '@/components/GuestWall';
import BirthdayCountdown from '@/components/BirthdayCountdown';
import BirthdaySong from '@/components/BirthdaySong';
import DigitalGift from '@/components/DigitalGift';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';

const Index = () => {
  useEffect(() => {
    document.title = "Captain Mayur Krishna - First Birthday Celebration";
  }, []);

  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <FloatingElements />
      </div>
      
      <main>
        <HeroSection />
        <MilestoneGallery />
        <GuestWishesForm />
        <GuestWall />
        <BirthdayCountdown />
        <DigitalGift />
        <BirthdaySong />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
