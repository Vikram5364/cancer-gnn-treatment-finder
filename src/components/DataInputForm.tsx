
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Card, 
  CardContent,
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

// Define cancer types and genetic mutations for our form
const cancerTypes = [
  "Breast Cancer", 
  "Lung Cancer", 
  "Colorectal Cancer", 
  "Prostate Cancer", 
  "Melanoma",
  "Leukemia",
  "Lymphoma",
  "Ovarian Cancer"
];

const geneticMutations = [
  "BRCA1", 
  "BRCA2", 
  "EGFR", 
  "ALK", 
  "KRAS", 
  "TP53", 
  "PTEN",
  "HER2/neu",
  "PIK3CA",
  "RB1"
];

const expressionLevels = ["Low", "Medium", "High"];

const DataInputForm: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("basic");
  const [loading, setLoading] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    // Basic Info
    patientId: "",
    age: "",
    gender: "",
    cancerType: "",
    cancerStage: "",
    
    // Genetic Data
    selectedMutations: [] as string[],
    otherMutations: "",
    
    // Expression Data
    selectedExpressions: {} as Record<string, string>,
    
    // Previous Treatments
    previousTreatments: "",
    treatmentResponse: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  const toggleMutation = (mutation: string) => {
    setFormData(prev => {
      const mutations = [...prev.selectedMutations];
      if (mutations.includes(mutation)) {
        return {
          ...prev,
          selectedMutations: mutations.filter(m => m !== mutation)
        };
      } else {
        return {
          ...prev,
          selectedMutations: [...mutations, mutation]
        };
      }
    });
  };

  const setExpressionLevel = (gene: string, level: string) => {
    setFormData(prev => ({
      ...prev,
      selectedExpressions: {
        ...prev.selectedExpressions,
        [gene]: level
      }
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation checks
    if (!formData.patientId || !formData.cancerType) {
      toast.error("Please fill in required fields (Patient ID and Cancer Type)");
      return;
    }
    
    setLoading(true);
    
    // Simulate API request
    setTimeout(() => {
      // Store the form data to use in results page
      localStorage.setItem('patientData', JSON.stringify(formData));
      
      setLoading(false);
      navigate('/results');
    }, 2000);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-medical-800">Patient Data Input</CardTitle>
        <CardDescription>
          Enter patient and tumor characteristics to generate personalized treatment recommendations.
        </CardDescription>
      </CardHeader>
      
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mx-6">
          <TabsTrigger value="basic">Basic Info</TabsTrigger>
          <TabsTrigger value="genetic">Genetic Profile</TabsTrigger>
          <TabsTrigger value="expression">Gene Expression</TabsTrigger>
          <TabsTrigger value="treatments">Previous Treatments</TabsTrigger>
        </TabsList>
        
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit}>
            <TabsContent value="basic">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="patientId">Patient ID <span className="text-red-500">*</span></Label>
                  <Input 
                    id="patientId" 
                    placeholder="Enter patient identifier" 
                    value={formData.patientId}
                    onChange={(e) => handleInputChange('patientId', e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="age">Age</Label>
                  <Input 
                    id="age" 
                    type="number" 
                    placeholder="Patient's age" 
                    value={formData.age}
                    onChange={(e) => handleInputChange('age', e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <Select 
                    value={formData.gender}
                    onValueChange={(value) => handleInputChange('gender', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="cancerType">Cancer Type <span className="text-red-500">*</span></Label>
                  <Select 
                    value={formData.cancerType}
                    onValueChange={(value) => handleInputChange('cancerType', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select cancer type" />
                    </SelectTrigger>
                    <SelectContent>
                      {cancerTypes.map(type => (
                        <SelectItem key={type} value={type.toLowerCase().replace(/\s+/g, '-')}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="cancerStage">Cancer Stage</Label>
                  <Select 
                    value={formData.cancerStage}
                    onValueChange={(value) => handleInputChange('cancerStage', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select stage" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="stage-i">Stage I</SelectItem>
                      <SelectItem value="stage-ii">Stage II</SelectItem>
                      <SelectItem value="stage-iii">Stage III</SelectItem>
                      <SelectItem value="stage-iv">Stage IV</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="flex justify-end mt-6">
                <Button 
                  type="button" 
                  onClick={() => setActiveTab("genetic")}
                  className="bg-medical-600 hover:bg-medical-700"
                >
                  Next: Genetic Profile
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="genetic">
              <div className="space-y-6">
                <div>
                  <Label className="block mb-3">Known Genetic Mutations</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
                    {geneticMutations.map(mutation => (
                      <Button
                        key={mutation}
                        type="button"
                        variant={formData.selectedMutations.includes(mutation) ? "default" : "outline"}
                        className={`text-sm ${formData.selectedMutations.includes(mutation) ? 'bg-medical-600 hover:bg-medical-700' : ''}`}
                        onClick={() => toggleMutation(mutation)}
                      >
                        {mutation}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="otherMutations">Other Genetic Mutations</Label>
                  <Input 
                    id="otherMutations" 
                    placeholder="Enter other mutations (comma separated)" 
                    value={formData.otherMutations}
                    onChange={(e) => handleInputChange('otherMutations', e.target.value)}
                  />
                </div>
              </div>
              
              <div className="flex justify-between mt-6">
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => setActiveTab("basic")}
                >
                  Back
                </Button>
                <Button 
                  type="button" 
                  onClick={() => setActiveTab("expression")}
                  className="bg-medical-600 hover:bg-medical-700"
                >
                  Next: Gene Expression
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="expression">
              <div className="space-y-6">
                <div>
                  <Label className="block mb-3">Gene Expression Levels</Label>
                  <div className="space-y-4">
                    {["TP53", "MYC", "VEGF", "EGFR", "PTEN"].map(gene => (
                      <div key={gene} className="flex items-center space-x-4">
                        <span className="w-20 font-medium">{gene}:</span>
                        <div className="flex space-x-2">
                          {expressionLevels.map(level => (
                            <Button
                              key={`${gene}-${level}`}
                              type="button"
                              variant={formData.selectedExpressions[gene] === level ? "default" : "outline"}
                              className={`text-sm ${formData.selectedExpressions[gene] === level ? 'bg-medical-600 hover:bg-medical-700' : ''}`}
                              onClick={() => setExpressionLevel(gene, level)}
                            >
                              {level}
                            </Button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between mt-6">
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => setActiveTab("genetic")}
                >
                  Back
                </Button>
                <Button 
                  type="button" 
                  onClick={() => setActiveTab("treatments")}
                  className="bg-medical-600 hover:bg-medical-700"
                >
                  Next: Previous Treatments
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="treatments">
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="previousTreatments">Previous Treatments</Label>
                  <Input 
                    id="previousTreatments" 
                    placeholder="Enter previous treatments (e.g., chemotherapy, radiation)" 
                    value={formData.previousTreatments}
                    onChange={(e) => handleInputChange('previousTreatments', e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="treatmentResponse">Treatment Response</Label>
                  <Select 
                    value={formData.treatmentResponse}
                    onValueChange={(value) => handleInputChange('treatmentResponse', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select response to previous treatments" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="complete">Complete Response</SelectItem>
                      <SelectItem value="partial">Partial Response</SelectItem>
                      <SelectItem value="stable">Stable Disease</SelectItem>
                      <SelectItem value="progressive">Progressive Disease</SelectItem>
                      <SelectItem value="unknown">Unknown</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="flex justify-between mt-6">
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => setActiveTab("expression")}
                >
                  Back
                </Button>
                <Button 
                  type="submit" 
                  disabled={loading}
                  className="bg-medical-600 hover:bg-medical-700"
                >
                  {loading ? "Processing..." : "Generate Recommendations"}
                </Button>
              </div>
            </TabsContent>
          </form>
        </CardContent>
      </Tabs>
      
      <CardFooter className="flex justify-between border-t pt-6">
        <p className="text-sm text-muted-foreground">
          <span className="text-red-500">*</span> Required fields
        </p>
        <p className="text-sm text-muted-foreground">
          Data is processed securely and confidentially
        </p>
      </CardFooter>
    </Card>
  );
};

export default DataInputForm;
