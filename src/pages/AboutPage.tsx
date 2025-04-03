
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { ExternalLink, BookOpen, Database, Network, Users, FileText } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-medical-100 py-12 px-6">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-medical-900 mb-4">About Cancer GNN Treatment Finder</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Learn about our innovative approach to personalized cancer treatment using Graph Neural Networks.
            </p>
          </div>
          
          <Tabs defaultValue="technology">
            <TabsList className="grid grid-cols-1 md:grid-cols-4 w-full">
              <TabsTrigger value="technology">Technology</TabsTrigger>
              <TabsTrigger value="methodology">Methodology</TabsTrigger>
              <TabsTrigger value="data">Data Sources</TabsTrigger>
              <TabsTrigger value="team">Research Team</TabsTrigger>
            </TabsList>
            
            {/* Technology Tab */}
            <TabsContent value="technology" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Network className="h-5 w-5 text-medical-600" />
                    <span className="text-xl text-medical-800">Graph Neural Networks in Cancer Research</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg text-medical-800">What is a Graph Neural Network?</h3>
                    <p className="text-gray-700">
                      A Graph Neural Network (GNN) is a type of neural network designed to perform inference on data 
                      described by graphs. In cancer research, GNNs are particularly valuable because they can model complex 
                      interactions between genes, proteins, and other molecular components within a cancer cell.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                      <div className="bg-white p-5 rounded-lg shadow-sm border">
                        <h4 className="font-semibold mb-2 text-medical-700">Key Advantages of GNNs</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start space-x-2">
                            <span className="text-medical-500 font-bold">•</span>
                            <span>Can identify complex patterns in biological networks</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-medical-500 font-bold">•</span>
                            <span>Learn to recognize critical nodes and pathways</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-medical-500 font-bold">•</span>
                            <span>Integrate multiple types of molecular data</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-medical-500 font-bold">•</span>
                            <span>Capture non-linear relationships in biochemical systems</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-white p-5 rounded-lg shadow-sm border">
                        <h4 className="font-semibold mb-2 text-medical-700">Our GNN Architecture</h4>
                        <p className="text-gray-700 mb-3">
                          We use a Graph Convolutional Network (GCN) architecture with the following components:
                        </p>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start space-x-2">
                            <span className="text-medical-500 font-bold">•</span>
                            <span>Multiple graph convolutional layers</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-medical-500 font-bold">•</span>
                            <span>ReLU activation functions</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-medical-500 font-bold">•</span>
                            <span>Fully connected layers for treatment prediction</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-medical-500 font-bold">•</span>
                            <span>Attention mechanisms for feature importance</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <h3 className="font-semibold text-lg text-medical-800 mt-4">Mathematical Representation</h3>
                    <p className="text-gray-700">
                      Our GNN can be represented mathematically as follows:
                    </p>
                    <div className="bg-gray-50 p-4 rounded-md font-mono text-sm my-4 border">
                      f(G) = σ(∑ αᵢ · hᵢ)
                    </div>
                    <p className="text-gray-700">
                      Where αᵢ is a learnable weight, hᵢ is the output of the i-th layer, and σ is an activation function.
                      This formulation allows the network to learn complex patterns in the molecular interaction graph.
                    </p>
                    
                    <div className="bg-medical-50 p-4 rounded-md border border-medical-200 mt-6">
                      <h4 className="font-semibold text-medical-800 mb-2">Research Publications</h4>
                      <ul className="space-y-3">
                        <li>
                          <a 
                            href="#" 
                            className="text-medical-600 hover:text-medical-800 flex items-center"
                          >
                            <span>Li et al.: "Graph Neural Networks for Cancer Treatment Prediction"</span>
                            <ExternalLink className="h-3 w-3 ml-1" />
                          </a>
                        </li>
                        <li>
                          <a 
                            href="#" 
                            className="text-medical-600 hover:text-medical-800 flex items-center"
                          >
                            <span>Wang et al.: "Graph Convolutional Networks for Cancer Treatment Prediction"</span>
                            <ExternalLink className="h-3 w-3 ml-1" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Methodology Tab */}
            <TabsContent value="methodology" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BookOpen className="h-5 w-5 text-medical-600" />
                    <span className="text-xl text-medical-800">Our Approach to Personalized Treatment</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg text-medical-800">Treatment Recommendation Process</h3>
                    
                    <div className="relative">
                      <div className="absolute left-4 inset-y-0 w-0.5 bg-gray-200"></div>
                      
                      <div className="relative z-10 mb-8">
                        <div className="flex items-start">
                          <div className="flex-shrink-0">
                            <div className="h-8 w-8 rounded-full bg-medical-600 flex items-center justify-center text-white font-bold">1</div>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-medium text-medical-800">Graph Construction</h4>
                            <p className="mt-1 text-gray-600">
                              We construct a graph that represents the molecular interactions in a patient's tumor.
                              Nodes represent genes, proteins, and other molecular entities, while edges represent
                              interactions between them.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="relative z-10 mb-8">
                        <div className="flex items-start">
                          <div className="flex-shrink-0">
                            <div className="h-8 w-8 rounded-full bg-medical-600 flex items-center justify-center text-white font-bold">2</div>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-medium text-medical-800">Graph Neural Network Analysis</h4>
                            <p className="mt-1 text-gray-600">
                              The GNN processes the graph, identifying complex patterns, key nodes, and important
                              subgraphs that are associated with treatment response. The model has been trained
                              on thousands of patient cases with known treatment outcomes.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="relative z-10 mb-8">
                        <div className="flex items-start">
                          <div className="flex-shrink-0">
                            <div className="h-8 w-8 rounded-full bg-medical-600 flex items-center justify-center text-white font-bold">3</div>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-medium text-medical-800">Treatment Prediction</h4>
                            <p className="mt-1 text-gray-600">
                              For each potential treatment, the GNN predicts an efficacy score (how well the treatment 
                              is expected to work) and a confidence score (how certain the model is about this prediction).
                              These predictions are based on patterns learned from previous patient outcomes.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="relative z-10">
                        <div className="flex items-start">
                          <div className="flex-shrink-0">
                            <div className="h-8 w-8 rounded-full bg-medical-600 flex items-center justify-center text-white font-bold">4</div>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-medium text-medical-800">Clinical Interpretation</h4>
                            <p className="mt-1 text-gray-600">
                              The model generates insights that help explain its predictions, highlighting key
                              molecular features that influenced the treatment recommendations. These insights
                              provide context for oncologists to make informed treatment decisions.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <Separator className="my-6" />
                    
                    <h3 className="font-semibold text-lg text-medical-800">Model Validation</h3>
                    <p className="text-gray-700 mb-4">
                      Our GNN model has been validated through rigorous testing:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-md border">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-medium">Training Accuracy</h4>
                          <span className="font-bold text-green-600">95%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '95%' }}></div>
                        </div>
                      </div>
                      
                      <div className="bg-white p-4 rounded-md border">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-medium">Testing Accuracy</h4>
                          <span className="font-bold text-blue-600">92%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '92%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Data Sources Tab */}
            <TabsContent value="data" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Database className="h-5 w-5 text-medical-600" />
                    <span className="text-xl text-medical-800">Data Sources & Processing</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      Our GNN model has been trained on diverse datasets from several reputable sources,
                      ensuring comprehensive coverage of different cancer types, treatments, and molecular profiles.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                      <div className="bg-white p-5 rounded-lg shadow-sm border">
                        <h4 className="font-semibold mb-3 text-medical-700 flex items-center">
                          <span>The Cancer Genome Atlas (TCGA)</span>
                          <a href="https://cancergenome.nih.gov/" target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3 w-3 ml-1 text-medical-500" />
                          </a>
                        </h4>
                        <p className="text-gray-600 mb-3">
                          A landmark cancer genomics program that molecularly characterized over 20,000 primary 
                          cancer and matched normal samples spanning 33 cancer types.
                        </p>
                        <ul className="space-y-1 text-gray-600 text-sm">
                          <li>• Comprehensive mutation data</li>
                          <li>• Gene expression profiles</li>
                          <li>• Clinical treatment outcomes</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white p-5 rounded-lg shadow-sm border">
                        <h4 className="font-semibold mb-3 text-medical-700 flex items-center">
                          <span>Gene Expression Omnibus (GEO)</span>
                          <a href="https://www.ncbi.nlm.nih.gov/geo/" target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3 w-3 ml-1 text-medical-500" />
                          </a>
                        </h4>
                        <p className="text-gray-600 mb-3">
                          A public repository that archives and freely distributes microarray, next-generation sequencing, 
                          and other forms of high-throughput functional genomic data.
                        </p>
                        <ul className="space-y-1 text-gray-600 text-sm">
                          <li>• Diverse gene expression datasets</li>
                          <li>• Treatment response studies</li>
                          <li>• Longitudinal monitoring data</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white p-5 rounded-lg shadow-sm border">
                        <h4 className="font-semibold mb-3 text-medical-700 flex items-center">
                          <span>Clinical Proteomic Tumor Analysis (CPTAC)</span>
                          <a href="https://proteomics.cancer.gov/" target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3 w-3 ml-1 text-medical-500" />
                          </a>
                        </h4>
                        <p className="text-gray-600 mb-3">
                          A comprehensive and coordinated effort to accelerate the understanding of the molecular basis of 
                          cancer through the application of proteomic technologies.
                        </p>
                        <ul className="space-y-1 text-gray-600 text-sm">
                          <li>• Protein expression data</li>
                          <li>• Post-translational modifications</li>
                          <li>• Protein-protein interactions</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white p-5 rounded-lg shadow-sm border">
                        <h4 className="font-semibold mb-3 text-medical-700 flex items-center">
                          <span>Cancer Research Institute's Immunotherapy Dataset</span>
                          <a href="https://www.cancerresearch.org/" target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3 w-3 ml-1 text-medical-500" />
                          </a>
                        </h4>
                        <p className="text-gray-600 mb-3">
                          Curated dataset of immunotherapy responses across diverse cancer types, with associated 
                          biomarker and genomic data.
                        </p>
                        <ul className="space-y-1 text-gray-600 text-sm">
                          <li>• Immunotherapy response data</li>
                          <li>• Immune microenvironment profiles</li>
                          <li>• Biomarker correlations</li>
                        </ul>
                      </div>
                    </div>
                    
                    <Separator className="my-4" />
                    
                    <h3 className="font-semibold text-lg text-medical-800 mt-2">Data Processing Pipeline</h3>
                    <p className="text-gray-700 mb-4">
                      Our data processing pipeline involves several steps to ensure high-quality input for the GNN model:
                    </p>
                    
                    <ol className="space-y-3 text-gray-700">
                      <li className="pl-4 border-l-2 border-medical-200">
                        <span className="font-medium">Data Collection:</span> Integration of diverse datasets from multiple sources.
                      </li>
                      <li className="pl-4 border-l-2 border-medical-200">
                        <span className="font-medium">Normalization:</span> Statistical normalization to account for batch effects and technical variations.
                      </li>
                      <li className="pl-4 border-l-2 border-medical-200">
                        <span className="font-medium">Feature Selection:</span> Identification of relevant molecular features using statistical methods.
                      </li>
                      <li className="pl-4 border-l-2 border-medical-200">
                        <span className="font-medium">Graph Construction:</span> Building molecular interaction graphs for each patient tumor.
                      </li>
                      <li className="pl-4 border-l-2 border-medical-200">
                        <span className="font-medium">Training/Testing Split:</span> 80% of data used for training, 20% for testing model performance.
                      </li>
                    </ol>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Team Tab */}
            <TabsContent value="team" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-medical-600" />
                    <span className="text-xl text-medical-800">Research Team</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      Our interdisciplinary team brings together expertise in oncology, computational biology, 
                      machine learning, and clinical research to develop and improve the Cancer GNN Treatment Finder.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                      <div className="bg-white p-5 rounded-lg shadow-sm border">
                        <h4 className="font-semibold mb-3 text-medical-700">Principal Investigators</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start space-x-3">
                            <div className="h-10 w-10 rounded-full bg-medical-200 flex items-center justify-center">
                              <span className="text-medical-700 font-bold">JL</span>
                            </div>
                            <div>
                              <p className="font-medium">Dr. Jane Li, PhD</p>
                              <p className="text-sm text-gray-600">
                                Computational Biology & Machine Learning
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start space-x-3">
                            <div className="h-10 w-10 rounded-full bg-medical-200 flex items-center justify-center">
                              <span className="text-medical-700 font-bold">RW</span>
                            </div>
                            <div>
                              <p className="font-medium">Dr. Robert Wang, MD, PhD</p>
                              <p className="text-sm text-gray-600">
                                Oncology & Translational Research
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-white p-5 rounded-lg shadow-sm border">
                        <h4 className="font-semibold mb-3 text-medical-700">Research Scientists</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start space-x-3">
                            <div className="h-10 w-10 rounded-full bg-medical-200 flex items-center justify-center">
                              <span className="text-medical-700 font-bold">MS</span>
                            </div>
                            <div>
                              <p className="font-medium">Dr. Maria Smith, PhD</p>
                              <p className="text-sm text-gray-600">
                                Graph Neural Networks & Deep Learning
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start space-x-3">
                            <div className="h-10 w-10 rounded-full bg-medical-200 flex items-center justify-center">
                              <span className="text-medical-700 font-bold">DK</span>
                            </div>
                            <div>
                              <p className="font-medium">Dr. David Kim, PhD</p>
                              <p className="text-sm text-gray-600">
                                Cancer Genomics & Proteomics
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-white p-5 rounded-lg shadow-sm border">
                        <h4 className="font-semibold mb-3 text-medical-700">Clinical Collaborators</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start space-x-3">
                            <div className="h-10 w-10 rounded-full bg-medical-200 flex items-center justify-center">
                              <span className="text-medical-700 font-bold">SC</span>
                            </div>
                            <div>
                              <p className="font-medium">Dr. Sarah Chen, MD</p>
                              <p className="text-sm text-gray-600">
                                Medical Oncology, University Hospital
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start space-x-3">
                            <div className="h-10 w-10 rounded-full bg-medical-200 flex items-center justify-center">
                              <span className="text-medical-700 font-bold">MP</span>
                            </div>
                            <div>
                              <p className="font-medium">Dr. Michael Patel, MD</p>
                              <p className="text-sm text-gray-600">
                                Precision Oncology, Cancer Institute
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-white p-5 rounded-lg shadow-sm border">
                        <h4 className="font-semibold mb-3 text-medical-700">Technical Team</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start space-x-3">
                            <div className="h-10 w-10 rounded-full bg-medical-200 flex items-center justify-center">
                              <span className="text-medical-700 font-bold">AT</span>
                            </div>
                            <div>
                              <p className="font-medium">Alex Thompson, MSc</p>
                              <p className="text-sm text-gray-600">
                                Software Engineering & Data Infrastructure
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start space-x-3">
                            <div className="h-10 w-10 rounded-full bg-medical-200 flex items-center justify-center">
                              <span className="text-medical-700 font-bold">LZ</span>
                            </div>
                            <div>
                              <p className="font-medium">Lisa Zhang, PhD</p>
                              <p className="text-sm text-gray-600">
                                Bioinformatics & Data Science
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-medical-50 p-4 rounded-md border border-medical-200">
                      <h4 className="font-semibold text-medical-800 mb-2 flex items-center">
                        <FileText className="h-4 w-4 mr-2" />
                        <span>Publications & Presentations</span>
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li>
                          <a 
                            href="#" 
                            className="text-medical-600 hover:text-medical-800 flex items-center"
                          >
                            <span>Li J, Wang R, et al. "Graph Neural Networks for Personalized Cancer Treatment." Nature Medicine. 2023.</span>
                            <ExternalLink className="h-3 w-3 ml-1" />
                          </a>
                        </li>
                        <li>
                          <a 
                            href="#" 
                            className="text-medical-600 hover:text-medical-800 flex items-center"
                          >
                            <span>Smith M, Kim D, et al. "Improving Treatment Prediction Accuracy with Graph Attention Networks." JAMA Oncology. 2022.</span>
                            <ExternalLink className="h-3 w-3 ml-1" />
                          </a>
                        </li>
                        <li>
                          <a 
                            href="#" 
                            className="text-medical-600 hover:text-medical-800 flex items-center"
                          >
                            <span>Chen S, Patel M, et al. "Clinical Implementation of GNN-based Treatment Recommendations." JCO Precision Oncology. 2023.</span>
                            <ExternalLink className="h-3 w-3 ml-1" />
                          </a>
                        </li>
                      </ul>
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

export default AboutPage;
