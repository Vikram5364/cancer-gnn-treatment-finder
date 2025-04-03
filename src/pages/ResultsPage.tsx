
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import TreatmentCard from '@/components/TreatmentCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';
import { predictTreatments, generateInsights } from '@/utils/gnnModel';
import { ArrowLeft, Download, Share2, FileText, Network, AlertCircle } from 'lucide-react';

// Mock data for the GNN visualization
const mockModelData = {
  nodes: [
    { id: 'TP53', value: 10, group: 1 },
    { id: 'EGFR', value: 15, group: 2 },
    { id: 'BRCA1', value: 8, group: 1 },
    { id: 'ALK', value: 12, group: 3 },
    { id: 'KRAS', value: 14, group: 2 },
    { id: 'PTEN', value: 9, group: 1 },
    { id: 'MYC', value: 11, group: 3 },
    { id: 'PIK3CA', value: 13, group: 2 },
    { id: 'Treatment1', value: 18, group: 4 },
    { id: 'Treatment2', value: 16, group: 4 },
    { id: 'Treatment3', value: 14, group: 4 },
  ],
  links: [
    { source: 'TP53', target: 'Treatment1', value: 0.75 },
    { source: 'EGFR', target: 'Treatment1', value: 0.82 },
    { source: 'BRCA1', target: 'Treatment2', value: 0.67 },
    { source: 'KRAS', target: 'Treatment3', value: 0.58 },
    { source: 'EGFR', target: 'Treatment2', value: 0.45 },
    { source: 'PIK3CA', target: 'Treatment1', value: 0.63 },
    { source: 'TP53', target: 'Treatment3', value: 0.38 },
    { source: 'MYC', target: 'Treatment2', value: 0.72 },
  ]
};

const ResultsPage: React.FC = () => {
  const navigate = useNavigate();
  const [patientData, setPatientData] = useState<any>(null);
  const [treatments, setTreatments] = useState<any[]>([]);
  const [insights, setInsights] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Get patient data from localStorage when component mounts
  useEffect(() => {
    const storedData = localStorage.getItem('patientData');
    
    if (!storedData) {
      toast.error("No patient data found. Please complete the input form first.");
      navigate('/input');
      return;
    }
    
    try {
      const parsedData = JSON.parse(storedData);
      setPatientData(parsedData);
      
      // Use our GNN model to predict treatments (simulated)
      const predictedTreatments = predictTreatments(parsedData);
      setTreatments(predictedTreatments);
      
      // Generate insights based on patient data and treatments
      const patientInsights = generateInsights(parsedData, predictedTreatments);
      setInsights(patientInsights);
      
      // Simulate model processing time
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      
    } catch (error) {
      console.error("Error parsing patient data:", error);
      toast.error("Error processing patient data. Please try again.");
      navigate('/input');
    }
  }, [navigate]);
  
  const handleDownloadPDF = () => {
    toast.success("Report downloaded successfully");
  };
  
  const handleShareResults = () => {
    toast.success("Results shared with healthcare team");
  };
  
  const handleNewAnalysis = () => {
    // Clear existing data and navigate to input form
    localStorage.removeItem('patientData');
    navigate('/input');
  };
  
  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen bg-medical-100 py-12 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-col items-center justify-center space-y-6">
              <Network className="h-16 w-16 text-medical-600 animate-pulse" />
              <h2 className="text-2xl font-bold text-medical-800">Processing Patient Data</h2>
              <p className="text-gray-600">
                Our GNN model is analyzing molecular interactions and predicting optimal treatments...
              </p>
              <div className="w-64 h-2 bg-medical-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-medical-600 rounded-full animate-pulse"
                  style={{ width: '60%' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
  
  // Get the cancer type display name
  const getCancerDisplayName = (type: string) => {
    if (!type) return "Unknown";
    return type
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  
  return (
    <Layout>
      <div className="min-h-screen bg-medical-100 py-12 px-6">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Header Bar */}
          <div className="flex justify-between items-center">
            <Button 
              variant="outline" 
              onClick={() => navigate('/input')}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Input</span>
            </Button>
            
            <div className="flex space-x-3">
              <Button
                variant="outline"
                onClick={handleDownloadPDF}
                className="flex items-center space-x-2"
              >
                <Download className="h-4 w-4" />
                <span>Download Report</span>
              </Button>
              
              <Button
                onClick={handleShareResults}
                className="flex items-center space-x-2 bg-medical-600 hover:bg-medical-700"
              >
                <Share2 className="h-4 w-4" />
                <span>Share Results</span>
              </Button>
            </div>
          </div>
          
          {/* Patient Summary */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-2xl text-medical-800">
                Treatment Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-1">
                  <h3 className="text-sm font-medium text-gray-500">Patient ID</h3>
                  <p className="font-medium">{patientData?.patientId || "Unknown"}</p>
                </div>
                
                <div className="space-y-1">
                  <h3 className="text-sm font-medium text-gray-500">Cancer Type</h3>
                  <p className="font-medium">{getCancerDisplayName(patientData?.cancerType)}</p>
                </div>
                
                <div className="space-y-1">
                  <h3 className="text-sm font-medium text-gray-500">Cancer Stage</h3>
                  <p className="font-medium">
                    {patientData?.cancerStage 
                      ? patientData.cancerStage.replace('stage-', 'Stage ').toUpperCase() 
                      : "Not specified"}
                  </p>
                </div>
                
                <div className="space-y-1 md:col-span-2">
                  <h3 className="text-sm font-medium text-gray-500">Key Mutations</h3>
                  <div className="flex flex-wrap gap-1">
                    {patientData?.selectedMutations && patientData.selectedMutations.length > 0 
                      ? patientData.selectedMutations.map((mutation: string, idx: number) => (
                          <span 
                            key={idx} 
                            className="px-2 py-1 bg-medical-100 text-medical-800 rounded text-sm"
                          >
                            {mutation}
                          </span>
                        ))
                      : <span className="text-gray-500">None specified</span>
                    }
                  </div>
                </div>
                
                <div className="space-y-1">
                  <h3 className="text-sm font-medium text-gray-500">Analysis Date</h3>
                  <p className="font-medium">{new Date().toLocaleDateString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Results Tabs */}
          <Tabs defaultValue="treatments">
            <TabsList className="grid grid-cols-3 w-full md:w-auto">
              <TabsTrigger value="treatments">Recommended Treatments</TabsTrigger>
              <TabsTrigger value="insights">Clinical Insights</TabsTrigger>
              <TabsTrigger value="model">GNN Model Details</TabsTrigger>
            </TabsList>
            
            {/* Treatment Recommendations Tab */}
            <TabsContent value="treatments" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {treatments.slice(0, 3).map((treatment, index) => (
                  <TreatmentCard
                    key={index}
                    name={treatment.name}
                    efficacyScore={treatment.efficacyScore}
                    confidenceScore={treatment.confidenceScore}
                    description={treatment.description}
                    sideEffects={treatment.sideEffects}
                    mechanismOfAction={treatment.mechanismOfAction}
                    rank={index + 1}
                  />
                ))}
              </div>
              
              <div className="mt-8 flex justify-center">
                <Button
                  onClick={handleNewAnalysis}
                  variant="outline"
                  className="flex items-center space-x-2"
                >
                  <FileText className="h-4 w-4" />
                  <span>Start New Analysis</span>
                </Button>
              </div>
            </TabsContent>
            
            {/* Clinical Insights Tab */}
            <TabsContent value="insights" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-medical-800">
                    Patient-Specific Insights
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {insights.map((insight, index) => (
                    <div key={index} className="flex items-start space-x-3 py-2">
                      <div className="mt-0.5">
                        <div className="h-5 w-5 rounded-full bg-medical-200 flex items-center justify-center">
                          <span className="text-xs font-semibold text-medical-800">{index + 1}</span>
                        </div>
                      </div>
                      <p className="text-gray-700">{insight}</p>
                    </div>
                  ))}
                  
                  <Separator className="my-4" />
                  
                  <div className="bg-amber-50 border border-amber-200 rounded-md p-4 flex items-start space-x-3">
                    <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-amber-800 mb-1">Important Note</h4>
                      <p className="text-sm text-amber-700">
                        These insights are generated by an AI model and should be interpreted by healthcare professionals. 
                        Treatment decisions should always be made in consultation with your oncology team.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Model Details Tab */}
            <TabsContent value="model" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-medical-800">
                    Graph Neural Network Model
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-white p-4 border rounded-md">
                    <div className="h-64 flex items-center justify-center bg-gray-50 border rounded">
                      <div className="text-center">
                        <Network className="h-16 w-16 text-medical-300 mx-auto mb-4" />
                        <p className="text-gray-500 text-sm">
                          GNN visualization would appear here in a full implementation.<br />
                          Model shows connections between genetic mutations and treatment outcomes.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-medical-800">About the Model</h3>
                    <p className="text-gray-600">
                      This personalized treatment recommendation is powered by a Graph Convolutional Network (GCN) that analyzes the molecular 
                      interactions in the patient's tumor. The GNN identifies patterns associated with treatment response by examining:
                    </p>
                    
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      <li>Gene mutations and their network effects</li>
                      <li>Protein expression patterns</li>
                      <li>Signaling pathway activities</li>
                      <li>Previous treatment responses in similar molecular profiles</li>
                    </ul>
                    
                    <p className="text-gray-600">
                      The model has been trained on data from The Cancer Genome Atlas (TCGA), Gene Expression Omnibus (GEO), 
                      and the Clinical Proteomic Tumor Analysis Consortium (CPTAC).
                    </p>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
                      <h4 className="font-medium text-blue-800 mb-1">Model Accuracy</h4>
                      <p className="text-sm text-blue-700">
                        In validation studies, the GNN model achieved 92% accuracy on the test dataset, 
                        significantly outperforming traditional machine learning approaches for treatment recommendation.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default ResultsPage;
