import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { SolutionSection } from '@/components/sections/SolutionSection';
import { ValuePropositionSection } from '@/components/sections/ValuePropositionSection';
import { TechnicalSection } from '@/components/sections/TechnicalSection';
import { GTMSection } from '@/components/sections/GTMSection';
import { FeedbackSection } from '@/components/sections/FeedbackSection';
import { Footer } from '@/components/sections/Footer';
import { ScrollProgress } from '@/components/ScrollProgress';

const Index = () => {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ValuePropositionSection />
      <TechnicalSection />
      <GTMSection />
      <FeedbackSection />
      <Footer />
    </div>
  );
};

export default Index;
