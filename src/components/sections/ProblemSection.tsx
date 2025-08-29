import React, { useEffect, useRef, useState } from 'react';
import { AlertTriangle, BarChart3, DollarSign, Shield } from 'lucide-react';

const AnimatedBarChart: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const data = [
    { label: 'Tech Giants', value: 65, color: 'bg-red-500' },
    { label: 'Research Labs', value: 25, color: 'bg-orange-500' },
    { label: 'Open Sources', value: 10, color: 'bg-yellow-500' }
  ];

  return (
    <div ref={chartRef} className="bg-white rounded-lg p-6 shadow-lg">
      <h4 className="text-lg font-semibold text-text-secondary mb-4 flex items-center gap-2">
        <BarChart3 className="h-5 w-5 text-filecoin-azure" />
        AI Data Sources Distribution
      </h4>
      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={item.label} className="flex items-center gap-4">
            <div className="w-20 text-sm text-text-primary font-medium">
              {item.label}
            </div>
            <div className="flex-1 bg-gray-200 rounded-full h-6 relative overflow-hidden">
              <div
                className={`h-full ${item.color} transition-all duration-1000 ease-out rounded-full relative`}
                style={{
                  width: isVisible ? `${item.value}%` : '0%',
                  transitionDelay: `${index * 200}ms`
                }}
              >
                <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
              </div>
            </div>
            <div className="w-12 text-sm font-bold text-text-secondary">
              {item.value}%
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-text-primary mt-4 italic">
        *80% of AI training data comes from just a few centralized sources
      </p>
    </div>
  );
};

export const ProblemSection: React.FC = () => {
  return (
    <section id="problem-section" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 fade-in">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 rounded-full px-4 py-2 text-sm font-medium mb-4">
              <AlertTriangle className="h-4 w-4" />
              Critical Issue
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-text-secondary mb-6">
              The Problem: Biased AI from
              <span className="block text-red-500">Centralized Data</span>
            </h2>
            <p className="text-xl text-text-primary max-w-4xl mx-auto leading-relaxed">
              Today's AI systems suffer from systematic biases because they're trained on limited, 
              centralized datasets controlled by a few tech giants.
            </p>
          </div>

          {/* Problem Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Left: Problems Text */}
            <div className="space-y-8 fade-in fade-in-delay-1">
              <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-red-500">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-secondary mb-2">
                      Limited Dataset Diversity
                    </h3>
                    <p className="text-text-primary leading-relaxed">
                      AI models trained on narrow datasets from homogeneous sources create 
                      unfair algorithms that discriminate against underrepresented groups and fail 
                      to understand diverse global perspectives.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-orange-500">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <DollarSign className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-secondary mb-2">
                      Prohibitive Costs
                    </h3>
                    <p className="text-text-primary leading-relaxed">
                      High-quality datasets cost millions to acquire, putting diverse AI development 
                      out of reach for smaller companies, researchers, and developers in emerging markets.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-yellow-500">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-secondary mb-2">
                      No Data Verifiability
                    </h3>
                    <p className="text-text-primary leading-relaxed">
                      Existing data marketplaces lack transparency about data quality, provenance, 
                      and authenticity, leading to AI models trained on corrupted or manipulated information.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Animated Chart */}
            <div className="fade-in fade-in-delay-2">
              <AnimatedBarChart />
            </div>
          </div>

          {/* Key Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 fade-in fade-in-delay-3">
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">80%</div>
              <div className="text-sm text-text-primary">
                AI data from few sources
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">$10M+</div>
              <div className="text-sm text-text-primary">
                Cost for quality datasets
              </div>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">60%</div>
              <div className="text-sm text-text-primary">
                AI models show bias
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">0%</div>
              <div className="text-sm text-text-primary">
                Data provenance transparency
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};