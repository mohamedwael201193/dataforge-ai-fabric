import React, { useEffect, useRef, useState } from 'react';
import { Upload, CreditCard, Download, CheckCircle, Zap, Globe } from 'lucide-react';

interface FeatureIconProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const FeatureIcon: React.FC<FeatureIconProps> = ({ icon, title, description, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.3 }
    );

    if (iconRef.current) {
      observer.observe(iconRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={iconRef}
      className={`bg-white rounded-xl p-6 shadow-lg hover-bounce hover-glow transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="w-16 h-16 bg-gradient-to-br from-filecoin-light to-filecoin-azure rounded-lg flex items-center justify-center mb-4 mx-auto">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-text-secondary mb-2 text-center">
        {title}
      </h3>
      <p className="text-text-primary text-center leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export const SolutionSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-filecoin-azure/5 to-filecoin-light/5">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 fade-in">
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 rounded-full px-4 py-2 text-sm font-medium mb-4">
              <CheckCircle className="h-4 w-4" />
              Our Innovation
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-text-secondary mb-6">
              Our Solution:
              <span className="block text-filecoin-azure">DataForge Hub</span>
            </h2>
            <p className="text-xl text-text-primary max-w-4xl mx-auto leading-relaxed">
              A decentralized marketplace where anyone can contribute, monetize, and access 
              verifiable datasets for building fairer AI systems.
            </p>
          </div>

          {/* How It Works Flow */}
          <div className="mb-16 fade-in fade-in-delay-1">
            <h3 className="text-2xl font-bold text-text-secondary text-center mb-12">
              How DataForge Hub Works
            </h3>
            
            <div className="relative">
              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block" style={{ zIndex: 0 }}>
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#44b4f4" />
                    <stop offset="100%" stopColor="#0090FF" />
                  </linearGradient>
                </defs>
                <path
                  d="M 200 100 L 400 100 L 600 100"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  fill="none"
                  className="draw-line"
                  strokeDasharray="5,5"
                />
              </svg>

              <div className="grid md:grid-cols-3 gap-8 relative" style={{ zIndex: 1 }}>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 pulse-node">
                    <Upload className="h-10 w-10 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-text-secondary mb-2">
                    1. Upload & Store
                  </h4>
                  <p className="text-text-primary">
                    Contributors upload datasets to Filecoin Warm Storage with PDP verification for authenticity
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-filecoin-light to-filecoin-azure rounded-full flex items-center justify-center mx-auto mb-4 pulse-node">
                    <CreditCard className="h-10 w-10 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-text-secondary mb-2">
                    2. Monetize
                  </h4>
                  <p className="text-text-primary">
                    Set pricing and receive payments in FIL or ERC-20 tokens through Filecoin Pay
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 pulse-node">
                    <Download className="h-10 w-10 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-text-secondary mb-2">
                    3. Fast Retrieval
                  </h4>
                  <p className="text-text-primary">
                    Buyers access datasets globally through FilCDN with guaranteed SLA performance
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <FeatureIcon
              icon={<CheckCircle className="h-8 w-8 text-white" />}
              title="Verifiable Uploads"
              description="Every dataset is verified using Provable Data Possession (PDP) ensuring authenticity and integrity"
              delay={0}
            />
            
            <FeatureIcon
              icon={<Zap className="h-8 w-8 text-white" />}
              title="Flexible Payments"
              description="Support for one-time purchases and streaming payments with FIL, USDC, and other tokens"
              delay={200}
            />
            
            <FeatureIcon
              icon={<Globe className="h-8 w-8 text-white" />}
              title="Global CDN Access"
              description="Lightning-fast worldwide access through FilCDN with service level guarantees"
              delay={400}
            />
          </div>

          {/* Key Benefits */}
          <div className="bg-white rounded-2xl p-8 shadow-xl fade-in fade-in-delay-2">
            <h3 className="text-2xl font-bold text-text-secondary text-center mb-8">
              Why Choose DataForge Hub?
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-filecoin-azure rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-secondary">Decentralized & Fair</h4>
                    <p className="text-text-primary text-sm">No single entity controls the data marketplace</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-filecoin-azure rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-secondary">Cryptographically Verified</h4>
                    <p className="text-text-primary text-sm">All data integrity is provably guaranteed</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-filecoin-azure rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-secondary">Affordable Access</h4>
                    <p className="text-text-primary text-sm">Competitive pricing compared to traditional datasets</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-filecoin-azure rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-secondary">Global Diversity</h4>
                    <p className="text-text-primary text-sm">Datasets from contributors worldwide</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-filecoin-azure rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-secondary">Instant Monetization</h4>
                    <p className="text-text-primary text-sm">Contributors earn immediately upon data sales</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-filecoin-azure rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-secondary">High Performance</h4>
                    <p className="text-text-primary text-sm">Enterprise-grade reliability and speed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};