import React from 'react';
import { MessageSquare, Lightbulb, ExternalLink, ArrowRight } from 'lucide-react';
import { AnimatedButton } from '../ui/animated-button';

export const FeedbackSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-filecoin-dark/10 to-filecoin-azure/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 fade-in">
            <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 rounded-full px-4 py-2 text-sm font-medium mb-4">
              <MessageSquare className="h-4 w-4" />
              Developer Feedback
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-text-secondary mb-6">
              Pain Points & Suggestions for
              <span className="block text-filecoin-azure">Filecoin Onchain Cloud</span>
            </h2>
            <p className="text-lg text-text-primary leading-relaxed">
              As active developers in the Filecoin ecosystem, we want to share insights 
              that could improve the developer experience for future builders.
            </p>
          </div>

          {/* Feedback Cards */}
          <div className="space-y-8 mb-12">
            {/* Pain Points */}
            <div className="bg-white rounded-xl p-8 shadow-lg fade-in">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="h-6 w-6 text-orange-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-text-secondary mb-4">
                    Current Pain Points We've Encountered
                  </h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-orange-500 pl-4">
                      <h4 className="font-medium text-text-secondary mb-2">
                        Limited AI-Specific SDK Documentation
                      </h4>
                      <p className="text-text-primary text-sm leading-relaxed">
                        While the Synapse SDK is powerful, more examples specifically for AI/ML 
                        use cases would accelerate adoption. Dataset handling, batch operations, 
                        and AI workflow patterns need more detailed guides.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-red-500 pl-4">
                      <h4 className="font-medium text-text-secondary mb-2">
                        Streaming Payment Integration Complexity
                      </h4>
                      <p className="text-text-primary text-sm leading-relaxed">
                        Setting up streaming payments for data access requires deep blockchain 
                        knowledge. A simplified wrapper or higher-level abstraction would help 
                        traditional developers adopt these powerful features.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Suggestions */}
            <div className="bg-white rounded-xl p-8 shadow-lg fade-in fade-in-delay-1">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-filecoin-azure/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ArrowRight className="h-6 w-6 text-filecoin-azure" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-text-secondary mb-4">
                    Suggestions for Enhanced Developer Experience
                  </h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-medium text-text-secondary mb-2">
                        AI/ML Developer Toolkit
                      </h4>
                      <p className="text-text-primary text-sm leading-relaxed">
                        Create specialized SDKs or wrappers for common AI use cases: dataset 
                        versioning, model training pipelines, and distributed computation workflows. 
                        This would position Filecoin as the go-to infrastructure for AI builders.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-filecoin-azure pl-4">
                      <h4 className="font-medium text-text-secondary mb-2">
                        No-Code Payment Flow Builder
                      </h4>
                      <p className="text-text-primary text-sm leading-relaxed">
                        A visual interface for creating complex payment flows (streaming, escrow, 
                        multi-party splits) would democratize access to Filecoin's payment infrastructure 
                        beyond just technical developers.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-medium text-text-secondary mb-2">
                        Enhanced Monitoring & Analytics
                      </h4>
                      <p className="text-text-primary text-sm leading-relaxed">
                        Built-in dashboards for storage health, payment flows, and CDN performance 
                        would help developers build production-ready applications with confidence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center fade-in fade-in-delay-2">
            <div className="bg-gradient-to-br from-filecoin-azure to-filecoin-dark rounded-xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">
                Let's Build the Future of Decentralized AI Together
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                We're excited to be part of the Filecoin ecosystem and look forward to 
                collaborating with the team to make these improvements reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <AnimatedButton 
                  variant="floating" 
                  size="lg"
                  className="group"
                >
                  Join the Discussion
                  <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </AnimatedButton>
                <AnimatedButton 
                  variant="hero-outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-filecoin-azure"
                >
                  Share Feedback
                </AnimatedButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};