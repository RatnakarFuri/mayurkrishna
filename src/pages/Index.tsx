
import React, { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import MilestoneGallery from '@/components/MilestoneGallery';
import GuestWishesForm from '@/components/GuestWishesForm';
import GuestWall from '@/components/GuestWall';
import BirthdayCountdown from '@/components/BirthdayCountdown';
import DigitalGift from '@/components/DigitalGift';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';

const Index = () => {
  useEffect(() => {
    document.title = "Captain Mayur Krishna - First Birthday Celebration";
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Background floating elements */}
      <FloatingElements />
      
      {/* Main content */}
      <main>
        <HeroSection />
        <MilestoneGallery />
        <GuestWishesForm />
        <GuestWall />
        <BirthdayCountdown />
        <DigitalGift />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
