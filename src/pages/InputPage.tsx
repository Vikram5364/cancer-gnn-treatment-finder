
import React from 'react';
import Layout from '@/components/Layout';
import DataInputForm from '@/components/DataInputForm';
import { FileText } from 'lucide-react';

const InputPage: React.FC = () => {
  return (
    <Layout>
      <div className="py-12 px-6 bg-medical-100 min-h-screen">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-medical-900 mb-2">Treatment Finder</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete the form below to generate personalized cancer treatment recommendations
              using our Graph Neural Network model.
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-medical-200 text-sm flex items-start space-x-2">
            <FileText className="h-5 w-5 text-medical-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium text-medical-800">Privacy Notice</p>
              <p className="text-gray-600">
                This is a research tool. No data is stored on our servers longer than needed to process your request. 
                For real patient care, always consult with healthcare professionals.
              </p>
            </div>
          </div>
          
          <DataInputForm />
        </div>
      </div>
    </Layout>
  );
};

export default InputPage;
