import React, { useEffect, useRef, useState } from 'react';
import { Database, CreditCard, Globe, Zap, ArrowRight, Code, Shield, Layers, Users } from 'lucide-react';

const TechnicalDiagram: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const diagramRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % 5);
          }, 2000);
          return () => clearInterval(interval);
        }
      },
      { threshold: 0.5 }
    );

    if (diagramRef.current) {
      observer.observe(diagramRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    { id: 'user', label: 'User', icon: <Users className="h-6 w-6" />, color: 'bg-blue-500' },
    { id: 'synapse', label: 'Synapse SDK', icon: <Code className="h-6 w-6" />, color: 'bg-green-500' },
    { id: 'storage', label: 'Warm Storage (PDP)', icon: <Database className="h-6 w-6" />, color: 'bg-purple-500' },
    { id: 'pay', label: 'Filecoin Pay', icon: <CreditCard className="h-6 w-6" />, color: 'bg-orange-500' },
    { id: 'cdn', label: 'FilCDN Retrieval', icon: <Globe className="h-6 w-6" />, color: 'bg-red-500' }
  ];

  return (
    <div ref={diagramRef} className="bg-white rounded-xl p-8 shadow-lg">
      <h4 className="text-xl font-semibold text-text-secondary mb-8 text-center">
        Interactive Technical Flow
      </h4>
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className={`flex flex-col items-center transition-all duration-500 ${
              activeStep === index ? 'scale-110' : 'scale-100'
            }`}>
              <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white mb-3 transition-all duration-500 ${
                step.color
              } ${activeStep === index ? 'animate-pulse glow-strong' : ''}`}>
                {step.icon}
              </div>
              <span className={`text-sm font-medium transition-all duration-500 ${
                activeStep === index ? 'text-filecoin-azure font-bold' : 'text-text-primary'
              }`}>
                {step.label}
              </span>
            </div>
            
            {index < steps.length - 1 && (
              <div className="hidden md:flex items-center">
                <ArrowRight className={`h-6 w-6 transition-all duration-500 ${
                  activeStep >= index ? 'text-filecoin-azure' : 'text-gray-300'
                }`} />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      
      <div className="mt-8 p-4 bg-filecoin-azure/5 rounded-lg">
        <p className="text-sm text-text-primary text-center">
          <strong className="text-filecoin-azure">Step {activeStep + 1}:</strong> {
            activeStep === 0 ? "User initiates dataset upload or purchase request" :
            activeStep === 1 ? "Synapse SDK handles all blockchain interactions seamlessly" :
            activeStep === 2 ? "Data stored with cryptographic proof of possession" :
            activeStep === 3 ? "Secure payments processed in FIL or ERC-20 tokens" :
            "Fast global delivery through decentralized CDN network"
          }
        </p>
      </div>
    </div>
  );
};

export const TechnicalSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-text-secondary/5 to-filecoin-dark/10">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 fade-in">
            <div className="inline-flex items-center gap-2 bg-filecoin-dark/10 text-filecoin-dark rounded-full px-4 py-2 text-sm font-medium mb-4">
              <Layers className="h-4 w-4" />
              Technical Architecture
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-text-secondary mb-6">
              Built on
              <span className="block text-filecoin-azure">Filecoin Onchain Cloud</span>
            </h2>
            <p className="text-xl text-text-primary max-w-4xl mx-auto leading-relaxed">
              DataForge Hub leverages the full power of Filecoin's composable infrastructure 
              to create a seamless, secure, and scalable data marketplace.
            </p>
          </div>

          {/* Interactive Diagram */}
          <div className="mb-16 fade-in fade-in-delay-1">
            <TechnicalDiagram />
          </div>

          {/* Technical Integration Details */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Left Column */}
            <div className="space-y-8 fade-in fade-in-delay-2">
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Code className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-secondary mb-3">
                      Deep Synapse SDK Integration
                    </h3>
                    <p className="text-text-primary mb-4 leading-relaxed">
                      Our frontend seamlessly integrates with Synapse SDK to provide users 
                      with smooth Web3 interactions without complexity.
                    </p>
                    <ul className="space-y-2 text-sm text-text-primary">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        Wallet connection and authentication
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        Smart contract interactions
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        Transaction status monitoring
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-purple-500">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-secondary mb-3">
                      Warm Storage with PDP Verification
                    </h3>
                    <p className="text-text-primary mb-4 leading-relaxed">
                      All datasets are stored using Filecoin's Warm Storage with 
                      Provable Data Possession ensuring data integrity and availability.
                    </p>
                    <ul className="space-y-2 text-sm text-text-primary">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                        Cryptographic proof of data integrity
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                        Decentralized redundant storage
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                        Automated verification challenges
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8 fade-in fade-in-delay-3">
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-orange-500">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CreditCard className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-secondary mb-3">
                      Filecoin Pay Integration
                    </h3>
                    <p className="text-text-primary mb-4 leading-relaxed">
                      Secure, flexible payment processing supporting both one-time 
                      purchases and streaming payments across multiple tokens.
                    </p>
                    <ul className="space-y-2 text-sm text-text-primary">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                        FIL and ERC-20 token support
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                        Streaming payment channels
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                        Automated escrow and settlements
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-red-500">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-secondary mb-3">
                      FilCDN for Global Delivery
                    </h3>
                    <p className="text-text-primary mb-4 leading-relaxed">
                      Lightning-fast dataset delivery worldwide through Filecoin's 
                      decentralized CDN with service level agreements.
                    </p>
                    <ul className="space-y-2 text-sm text-text-primary">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                        Global edge node network
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                        SLA-backed performance guarantees
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                        Intelligent caching and routing
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Beyond Basic Storage */}
          <div className="bg-gradient-to-br from-filecoin-azure to-filecoin-dark rounded-2xl p-8 text-white fade-in fade-in-delay-3">
            <div className="max-w-4xl mx-auto text-center">
              <Zap className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-2xl font-bold mb-4">
                Beyond Basic Storage – Composable Onchain Services
              </h3>
              <p className="text-lg opacity-90 mb-6 leading-relaxed">
                DataForge Hub showcases the true power of Filecoin Onchain Cloud by combining 
                storage, payments, and content delivery into a seamless, composable solution 
                that would be impossible with traditional cloud infrastructure.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Storage Layer</h4>
                  <p className="opacity-80">Decentralized, verifiable, and permanent</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Payment Layer</h4>
                  <p className="opacity-80">Native crypto rails with smart contracts</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Delivery Layer</h4>
                  <p className="opacity-80">Global CDN with performance SLAs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};