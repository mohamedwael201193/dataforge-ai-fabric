import React from 'react';
import { ParticleAnimation } from '../ParticleAnimation';
import { AnimatedButton } from '../ui/animated-button';
import { ChevronDown } from 'lucide-react';
import filecoinLogo from '@/assets/filecoin.png';

export const HeroSection: React.FC = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('problem-section');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-filecoin-azure via-filecoin-light to-filecoin-dark">
      <ParticleAnimation />
      
      {/* Header with Filecoin Logo */}
      <header className="absolute top-0 left-0 right-0 z-20 p-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={filecoinLogo} alt="Filecoin" className="h-12 w-12" />
            <span className="text-white font-bold text-xl">DataForge Hub</span>
          </div>
          <div className="text-white/80 text-sm">
            Powered by Filecoin Onchain Cloud
          </div>
        </div>
      </header>

      {/* Main Hero Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className="fade-in">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 leading-tight">
            DataForge Hub
          </h1>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white/90 mb-4">
            Decentralized AI Dataset Marketplace
          </h2>
        </div>
        
        <div className="fade-in fade-in-delay-1">
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed">
            Crowdsourcing Verifiable Data for Bias-Free AI – Built on Filecoin Onchain Cloud
          </p>
        </div>

        <div className="fade-in fade-in-delay-2 mb-12">
          <AnimatedButton 
            variant="hero-outline" 
            size="xl" 
            onClick={scrollToNext}
            className="group"
          >
            Explore Design
            <ChevronDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
          </AnimatedButton>
        </div>

        {/* Filecoin Badge */}
        <div className="fade-in fade-in-delay-3">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-white/90 text-sm font-medium">
                Powered by Filecoin Warm Storage, Pay, FilCDN & Synapse SDK
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center text-white/60">
          <span className="text-sm mb-2">Scroll to explore</span>
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 z-5"></div>
    </section>
  );
};
