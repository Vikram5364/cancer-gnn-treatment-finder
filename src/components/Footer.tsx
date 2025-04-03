
import React from 'react';
import { ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 px-6 bg-medical-900 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-semibold text-lg mb-3">Cancer GNN Treatment Finder</h3>
          <p className="text-sm text-medical-200">
            Personalized cancer treatment recommendations using Graph Neural Networks.
          </p>
        </div>
        
        <div>
          <h3 className="font-semibold text-lg mb-3">Data Sources</h3>
          <ul className="space-y-2 text-sm text-medical-200">
            <li className="flex items-center space-x-1">
              <a 
                href="https://cancergenome.nih.gov/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center"
              >
                <span>The Cancer Genome Atlas (TCGA)</span>
                <ExternalLink className="h-3 w-3 ml-1" />
              </a>
            </li>
            <li className="flex items-center space-x-1">
              <a 
                href="https://www.ncbi.nlm.nih.gov/geo/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center"
              >
                <span>Gene Expression Omnibus (GEO)</span>
                <ExternalLink className="h-3 w-3 ml-1" />
              </a>
            </li>
            <li className="flex items-center space-x-1">
              <a 
                href="https://proteomics.cancer.gov/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center"
              >
                <span>Clinical Proteomic Tumor Analysis (CPTAC)</span>
                <ExternalLink className="h-3 w-3 ml-1" />
              </a>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-semibold text-lg mb-3">Disclaimer</h3>
          <p className="text-sm text-medical-200">
            This tool is for research purposes only and should not replace professional medical advice.
            Always consult with healthcare professionals for treatment decisions.
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-medical-700 text-center text-xs text-medical-300">
        © {new Date().getFullYear()} Cancer GNN Treatment Finder. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
