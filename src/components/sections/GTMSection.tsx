import React from 'react';
import { Target, Users, DollarSign, TrendingUp, Rocket, CheckCircle } from 'lucide-react';

export const GTMSection: React.FC = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 fade-in">
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 rounded-full px-4 py-2 text-sm font-medium mb-4">
              <Rocket className="h-4 w-4" />
              Go-to-Market Strategy
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-text-secondary mb-6">
              Scaling to
              <span className="block text-filecoin-azure">Global Impact</span>
            </h2>
            <p className="text-xl text-text-primary max-w-4xl mx-auto leading-relaxed">
              Our comprehensive strategy focuses on rapid user acquisition, strategic partnerships, 
              and sustainable revenue growth while driving Filecoin ecosystem adoption.
            </p>
          </div>

          {/* Business Model */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Left: Business Model */}
            <div className="fade-in">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-text-secondary mb-6 flex items-center gap-3">
                  <DollarSign className="h-8 w-8 text-green-600" />
                  Freemium Business Model
                </h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-text-secondary mb-2">Free Tier</h4>
                    <p className="text-text-primary text-sm mb-2">
                      Basic marketplace access with limited uploads/downloads
                    </p>
                    <ul className="text-xs text-text-primary space-y-1">
                      <li>• 5 datasets per month</li>
                      <li>• Basic verification</li>
                      <li>• Community support</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-filecoin-azure pl-4">
                    <h4 className="font-semibold text-text-secondary mb-2">Premium Tier</h4>
                    <p className="text-text-primary text-sm mb-2">
                      Unlimited access with advanced features
                    </p>
                    <ul className="text-xs text-text-primary space-y-1">
                      <li>• Unlimited datasets</li>
                      <li>• Priority verification</li>
                      <li>• Advanced analytics</li>
                      <li>• API access</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-text-secondary mb-2">Enterprise</h4>
                    <p className="text-text-primary text-sm mb-2">
                      Custom solutions for large organizations
                    </p>
                    <ul className="text-xs text-text-primary space-y-1">
                      <li>• White-label solutions</li>
                      <li>• Dedicated support</li>
                      <li>• Custom SLAs</li>
                      <li>• Private marketplaces</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Revenue Streams */}
            <div className="fade-in fade-in-delay-1">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-text-secondary mb-6 flex items-center gap-3">
                  <TrendingUp className="h-8 w-8 text-filecoin-azure" />
                  Revenue Projections
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center p-3 bg-filecoin-azure/5 rounded-lg">
                    <span className="text-text-primary">Transaction Fees (5%)</span>
                    <span className="font-bold text-filecoin-azure">Primary</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="text-text-primary">Premium Subscriptions</span>
                    <span className="font-bold text-green-600">$29-299/mo</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                    <span className="text-text-primary">Enterprise Licenses</span>
                    <span className="font-bold text-purple-600">Custom</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-filecoin-light to-filecoin-azure text-white rounded-lg p-4">
                  <h4 className="font-bold mb-2">Year 1 Target</h4>
                  <div className="flex justify-between items-center">
                    <span>Revenue Goal</span>
                    <span className="text-2xl font-bold">$2.5M+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Growth Strategy */}
          <div className="mb-16 fade-in fade-in-delay-2">
            <div className="bg-gradient-to-br from-filecoin-azure/5 to-filecoin-light/5 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-text-secondary text-center mb-8">
                Growth & Partnership Strategy
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-text-secondary mb-3">
                    AI Platform Partnerships
                  </h4>
                  <p className="text-text-primary text-sm leading-relaxed">
                    Strategic integrations with Hugging Face, MLflow, and major 
                    AI development platforms to reach developers where they work.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-filecoin-light to-filecoin-azure rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-text-secondary mb-3">
                    Academic Outreach
                  </h4>
                  <p className="text-text-primary text-sm leading-relaxed">
                    Free access for researchers and students to build adoption 
                    in academic institutions and foster the next generation of AI ethics.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Rocket className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-text-secondary mb-3">
                    Community Building
                  </h4>
                  <p className="text-text-primary text-sm leading-relaxed">
                    Active participation in AI conferences, hackathons, and 
                    developer communities to build brand awareness and trust.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Cohort Alignment */}
          <div className="bg-white rounded-2xl p-8 shadow-xl fade-in fade-in-delay-3">
            <h3 className="text-2xl font-bold text-text-secondary text-center mb-8">
              Perfect Alignment with Filecoin Onchain Cloud Alpha Cohort
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-filecoin-azure mb-4">
                  Production-Ready Focus
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-text-primary text-sm">
                      <strong>10,000+ users</strong> targeted in Year 1 through strategic partnerships
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-text-primary text-sm">
                      <strong>$2.5M+ revenue</strong> projected from transaction fees and subscriptions
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-text-primary text-sm">
                      <strong>Enterprise readiness</strong> with SLA-backed CDN and verified storage
                    </span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-filecoin-azure mb-4">
                  Ecosystem Impact
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-text-primary text-sm">
                      <strong>Increased FIL adoption</strong> through native token payments and rewards
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-text-primary text-sm">
                      <strong>Storage demand growth</strong> from TB-scale dataset uploads
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-text-primary text-sm">
                      <strong>Developer onboarding</strong> showcasing full Filecoin stack capabilities
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};