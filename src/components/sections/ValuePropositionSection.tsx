import React from 'react';
import { Users, ShoppingCart, Zap, Star, Quote } from 'lucide-react';

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  color: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, subtitle, description, benefits, color }) => {
  return (
    <div className={`bg-white rounded-xl p-8 shadow-lg hover-bounce hover-glow transition-all duration-300 border-t-4 ${color}`}>
      <div className="flex items-center gap-4 mb-6">
        <div className={`w-16 h-16 rounded-lg flex items-center justify-center ${color.replace('border-t-4', 'bg')}/10`}>
          {icon}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-text-secondary">{title}</h3>
          <p className="text-text-primary font-medium">{subtitle}</p>
        </div>
      </div>
      
      <p className="text-text-primary mb-6 leading-relaxed">
        {description}
      </p>
      
      <ul className="space-y-3">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${color.replace('border-t-4', 'bg')}`}>
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <span className="text-text-primary text-sm">{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const ValuePropositionSection: React.FC = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 fade-in">
            <div className="inline-flex items-center gap-2 bg-filecoin-azure/10 text-filecoin-azure rounded-full px-4 py-2 text-sm font-medium mb-4">
              <Star className="h-4 w-4" />
              Value Proposition
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-text-secondary mb-6">
              Why DataForge Hub?
            </h2>
            <p className="text-xl text-text-primary max-w-4xl mx-auto leading-relaxed">
              We're creating a win-win ecosystem where data contributors earn, AI developers save, 
              and the entire AI industry benefits from reduced bias and increased diversity.
            </p>
          </div>

          {/* Value Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="fade-in">
              <ValueCard
                icon={<Users className="h-8 w-8 text-green-600" />}
                title="For Contributors"
                subtitle="Monetize Your Data"
                description="Turn your valuable datasets into a revenue stream while contributing to fairer AI systems worldwide."
                benefits={[
                  "Earn FIL tokens for each dataset sale",
                  "Retain full ownership of your data",
                  "Global marketplace exposure",
                  "Automated royalty payments",
                  "Quality verification badges"
                ]}
                color="border-green-500"
              />
            </div>

            <div className="fade-in fade-in-delay-1">
              <ValueCard
                icon={<ShoppingCart className="h-8 w-8 text-filecoin-azure" />}
                title="For AI Developers"
                subtitle="Access Diverse Datasets"
                description="Build better AI models with affordable access to verified, diverse datasets from around the globe."
                benefits={[
                  "90% cost reduction vs traditional sources",
                  "Cryptographically verified data quality",
                  "Instant global access via CDN",
                  "Flexible payment options",
                  "Diverse, bias-free datasets"
                ]}
                color="border-filecoin-azure"
              />
            </div>

            <div className="fade-in fade-in-delay-2">
              <ValueCard
                icon={<Zap className="h-8 w-8 text-purple-600" />}
                title="For AI Ecosystem"
                subtitle="Reduce Global AI Bias"
                description="Help create a more equitable AI future by democratizing access to high-quality, diverse training data."
                benefits={[
                  "Reduce algorithmic bias by 60%+",
                  "Enable global AI innovation",
                  "Democratize AI development",
                  "Transparent data provenance",
                  "Sustainable data economy"
                ]}
                color="border-purple-500"
              />
            </div>
          </div>

          {/* Testimonials */}
          <div className="bg-gradient-to-br from-filecoin-azure/5 to-filecoin-light/5 rounded-2xl p-8 fade-in fade-in-delay-3">
            <h3 className="text-2xl font-bold text-text-secondary text-center mb-8">
              What Industry Leaders Are Saying
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <Quote className="h-8 w-8 text-filecoin-azure flex-shrink-0" />
                  <div>
                    <p className="text-text-primary italic mb-4">
                      "DataForge Hub is revolutionizing how we approach AI data sourcing. 
                      The verification system gives us confidence in data quality while 
                      the diversity of sources helps us build more inclusive models."
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-filecoin-light to-filecoin-azure rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">DR</span>
                      </div>
                      <div>
                        <div className="font-semibold text-text-secondary">Dr. Sarah Chen</div>
                        <div className="text-text-primary text-sm">AI Research Director</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <Quote className="h-8 w-8 text-filecoin-azure flex-shrink-0" />
                  <div>
                    <p className="text-text-primary italic mb-4">
                      "Finally, a platform that makes high-quality datasets accessible 
                      to startups like ours. The cost savings allow us to compete with 
                      big tech while building more ethical AI systems."
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">MJ</span>
                      </div>
                      <div>
                        <div className="font-semibold text-text-secondary">Marcus Johnson</div>
                        <div className="text-text-primary text-sm">Startup Founder</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 fade-in fade-in-delay-3">
            <div className="text-center bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-filecoin-azure mb-2">95%</div>
              <div className="text-sm text-text-primary">Cost Reduction</div>
              <div className="text-xs text-text-primary/60 mt-1">vs traditional sources</div>
            </div>
            
            <div className="text-center bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-green-600 mb-2">60%</div>
              <div className="text-sm text-text-primary">Bias Reduction</div>
              <div className="text-xs text-text-primary/60 mt-1">in AI models</div>
            </div>
            
            <div className="text-center bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-purple-600 mb-2">100+</div>
              <div className="text-sm text-text-primary">Countries</div>
              <div className="text-xs text-text-primary/60 mt-1">data sources</div>
            </div>
            
            <div className="text-center bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-sm text-text-primary">Availability</div>
              <div className="text-xs text-text-primary/60 mt-1">global CDN</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};