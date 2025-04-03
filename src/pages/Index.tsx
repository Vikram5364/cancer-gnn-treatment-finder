
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { MoveRight, Network, FileText, Database, LineChart } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Personalized Cancer Treatment
                <br />
                <span className="text-medical-300">Using Graph Neural Networks</span>
              </h1>
              <p className="text-lg mb-8 text-medical-100">
                Leveraging advanced AI to identify optimal treatment strategies
                based on molecular interactions in patient tumors.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link 
                  to="/input" 
                  className="btn-primary flex items-center justify-center space-x-2"
                >
                  <span>Find Treatment Options</span>
                  <MoveRight className="h-4 w-4" />
                </Link>
                <Link 
                  to="/about" 
                  className="bg-transparent hover:bg-white/10 text-white border border-white/30 px-4 py-2 rounded-md transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Learn More</span>
                  <FileText className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-72 h-72 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Network className="w-36 h-36 text-medical-200 animate-pulse-slow" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-medical-800/0 via-medical-500/20 to-medical-800/0 rounded-full animate-spin" style={{ animationDuration: '15s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-medical-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-medical-900">How Our GNN Treatment Finder Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md card-hover">
              <div className="w-12 h-12 rounded-full bg-medical-200 flex items-center justify-center mb-4">
                <Database className="h-6 w-6 text-medical-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-medical-800">Data Integration</h3>
              <p className="text-gray-600">
                We construct a graph representing molecular interactions in a patient's tumor using genomic and proteomic data.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md card-hover">
              <div className="w-12 h-12 rounded-full bg-medical-200 flex items-center justify-center mb-4">
                <Network className="h-6 w-6 text-medical-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-medical-800">GNN Analysis</h3>
              <p className="text-gray-600">
                Our Graph Neural Network identifies complex patterns and critical nodes in the molecular interaction network.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md card-hover">
              <div className="w-12 h-12 rounded-full bg-medical-200 flex items-center justify-center mb-4">
                <LineChart className="h-6 w-6 text-medical-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-medical-800">Treatment Prediction</h3>
              <p className="text-gray-600">
                The GNN predicts treatment response based on patterns learned from previous patient outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-medical-900">Ready to Find Personalized Treatment Options?</h2>
          <p className="text-lg mb-8 text-gray-600">
            Our AI-powered system can help identify the most effective treatments based on your specific cancer profile.
          </p>
          <Link 
            to="/input" 
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>Start Now</span>
            <MoveRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
