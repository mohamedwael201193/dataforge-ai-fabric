import React, { useEffect, useState } from 'react';
import { Github, ExternalLink, ArrowUp, Mail, Twitter } from 'lucide-react';
import filecoinLogo from '@/assets/filecoin.png';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`fixed bottom-8 right-8 z-50 w-12 h-12 bg-filecoin-azure hover:bg-filecoin-dark text-white rounded-full shadow-lg hover-glow transition-all duration-300 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-6 w-6 mx-auto" />
    </button>
  );
};

export const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-text-secondary text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Main Footer Content */}
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              {/* Brand Column */}
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <img src={filecoinLogo} alt="Filecoin" className="h-10 w-10" />
                  <div>
                    <h3 className="text-2xl font-bold">DataForge Hub</h3>
                    <p className="text-white/60 text-sm">Decentralized AI Dataset Marketplace</p>
                  </div>
                </div>
                <p className="text-white/80 leading-relaxed mb-6 max-w-md">
                  Building the future of fair AI through decentralized, verifiable datasets. 
                  Powered by Filecoin Onchain Cloud infrastructure for global scale and reliability.
                </p>
                <div className="flex items-center gap-2 text-sm text-white/60">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Built for Filecoin Onchain Cloud Alpha Cohort
                </div>
              </div>

              {/* Project Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Project</h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="https://github.com/dataforge-hub/marketplace"
                      className="text-white/80 hover:text-filecoin-azure transition-colors duration-200 flex items-center gap-2 group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                      GitHub Repository
                      <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:team@dataforge.hub"
                      className="text-white/80 hover:text-filecoin-azure transition-colors duration-200 flex items-center gap-2"
                    >
                      <Mail className="h-4 w-4" />
                      Contact Team
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/dataforge_hub"
                      className="text-white/80 hover:text-filecoin-azure transition-colors duration-200 flex items-center gap-2 group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter className="h-4 w-4" />
                      Follow Updates
                      <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                </ul>
              </div>

              {/* Filecoin Resources */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Filecoin Resources</h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="https://github.com/filecoin-project/synapse"
                      className="text-white/80 hover:text-filecoin-azure transition-colors duration-200 flex items-center gap-2 group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Synapse SDK
                      <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://docs.filecoin.io/smart-contracts/warm-storage/"
                      className="text-white/80 hover:text-filecoin-azure transition-colors duration-200 flex items-center gap-2 group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Warm Storage Docs
                      <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://docs.filecoin.io/smart-contracts/filecoin-pay/"
                      className="text-white/80 hover:text-filecoin-azure transition-colors duration-200 flex items-center gap-2 group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Filecoin Pay
                      <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://docs.filecoin.io/networks/cdn/"
                      className="text-white/80 hover:text-filecoin-azure transition-colors duration-200 flex items-center gap-2 group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      FilCDN Network
                      <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/20 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-white/60 text-sm">
                  © 2024 DataForge Hub. Built for Filecoin Onchain Cloud Alpha Cohort hackathon.
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-white/60 text-sm">Powered by</span>
                  <div className="flex items-center gap-2">
                    <img src={filecoinLogo} alt="Filecoin" className="h-6 w-6" />
                    <span className="text-filecoin-azure font-semibold">Filecoin</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      <ScrollToTop />
    </>
  );
};
