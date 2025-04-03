
// This is a simulation of a GNN model for demonstration purposes
// In a real application, this would connect to a trained model API

type PatientData = {
  patientId: string;
  age: string;
  gender: string;
  cancerType: string;
  cancerStage: string;
  selectedMutations: string[];
  otherMutations: string;
  selectedExpressions: Record<string, string>;
  previousTreatments: string;
  treatmentResponse: string;
};

type Treatment = {
  name: string;
  efficacyScore: number;
  confidenceScore: number;
  description: string;
  sideEffects: string[];
  mechanismOfAction: string;
};

// Simulate GNN prediction
export const predictTreatments = (patientData: PatientData): Treatment[] => {
  // This would normally be a complex GNN model predicting treatment efficacy
  // For demo purposes, we'll simulate based on cancer type and mutations
  
  const treatments: Record<string, Treatment[]> = {
    'breast-cancer': [
      {
        name: "Tamoxifen",
        efficacyScore: 0.82,
        confidenceScore: 0.75,
        description: "Selective estrogen receptor modulator (SERM)",
        sideEffects: ["Hot flashes", "Fatigue", "Mood changes", "Blood clots"],
        mechanismOfAction: "Blocks estrogen receptors in breast cancer cells"
      },
      {
        name: "Trastuzumab (Herceptin)",
        efficacyScore: 0.79,
        confidenceScore: 0.89,
        description: "Monoclonal antibody targeting HER2",
        sideEffects: ["Heart problems", "Fever", "Chills", "Headache"],
        mechanismOfAction: "Targets HER2 protein on cancer cells"
      },
      {
        name: "Palbociclib",
        efficacyScore: 0.76,
        confidenceScore: 0.65,
        description: "CDK4/6 inhibitor",
        sideEffects: ["Low white blood cell count", "Fatigue", "Nausea"],
        mechanismOfAction: "Blocks cell division by inhibiting CDK4/6"
      }
    ],
    'lung-cancer': [
      {
        name: "Osimertinib",
        efficacyScore: 0.85,
        confidenceScore: 0.72,
        description: "EGFR tyrosine kinase inhibitor",
        sideEffects: ["Rash", "Diarrhea", "Dry skin", "Reduced appetite"],
        mechanismOfAction: "Targets EGFR mutations, especially T790M"
      },
      {
        name: "Pembrolizumab",
        efficacyScore: 0.75,
        confidenceScore: 0.78,
        description: "PD-1 inhibitor immunotherapy",
        sideEffects: ["Fatigue", "Rash", "Immune-related adverse events"],
        mechanismOfAction: "Blocks PD-1 to activate T-cells against cancer"
      },
      {
        name: "Crizotinib",
        efficacyScore: 0.82,
        confidenceScore: 0.81,
        description: "ALK inhibitor",
        sideEffects: ["Vision problems", "Nausea", "Diarrhea", "Liver problems"],
        mechanismOfAction: "Targets ALK gene rearrangements"
      }
    ],
    'colorectal-cancer': [
      {
        name: "FOLFOX",
        efficacyScore: 0.8,
        confidenceScore: 0.85,
        description: "Combination chemotherapy (5-FU, leucovorin, oxaliplatin)",
        sideEffects: ["Neuropathy", "Nausea", "Low blood counts", "Fatigue"],
        mechanismOfAction: "Multiple mechanisms to disrupt cell division"
      },
      {
        name: "Cetuximab",
        efficacyScore: 0.73,
        confidenceScore: 0.79,
        description: "EGFR inhibitor (monoclonal antibody)",
        sideEffects: ["Skin rash", "Diarrhea", "Fatigue", "Magnesium deficiency"],
        mechanismOfAction: "Blocks EGFR signaling (effective in KRAS wild-type)"
      },
      {
        name: "Bevacizumab",
        efficacyScore: 0.75,
        confidenceScore: 0.67,
        description: "VEGF inhibitor (angiogenesis inhibitor)",
        sideEffects: ["High blood pressure", "Bleeding", "Wound healing problems"],
        mechanismOfAction: "Blocks blood vessel formation to tumors"
      }
    ],
    'prostate-cancer': [
      {
        name: "Enzalutamide",
        efficacyScore: 0.87,
        confidenceScore: 0.82,
        description: "Androgen receptor inhibitor",
        sideEffects: ["Fatigue", "Hot flashes", "Hypertension", "Seizures (rare)"],
        mechanismOfAction: "Blocks androgen receptor signaling"
      },
      {
        name: "Abiraterone",
        efficacyScore: 0.79,
        confidenceScore: 0.75,
        description: "CYP17A1 inhibitor",
        sideEffects: ["Fluid retention", "Joint swelling", "Low potassium"],
        mechanismOfAction: "Blocks androgen production pathways"
      },
      {
        name: "Docetaxel",
        efficacyScore: 0.72,
        confidenceScore: 0.7,
        description: "Taxane chemotherapy",
        sideEffects: ["Hair loss", "Numbness", "Nail changes", "Low blood counts"],
        mechanismOfAction: "Prevents cell division by affecting microtubules"
      }
    ],
    'melanoma': [
      {
        name: "Pembrolizumab",
        efficacyScore: 0.88,
        confidenceScore: 0.82,
        description: "PD-1 inhibitor immunotherapy",
        sideEffects: ["Fatigue", "Rash", "Colitis", "Endocrine disorders"],
        mechanismOfAction: "Activates T-cells to attack melanoma cells"
      },
      {
        name: "Dabrafenib + Trametinib",
        efficacyScore: 0.84,
        confidenceScore: 0.85,
        description: "BRAF + MEK inhibitor combination",
        sideEffects: ["Fever", "Rash", "Joint pain", "Heart problems"],
        mechanismOfAction: "Targets the MAPK pathway in BRAF-mutated melanoma"
      },
      {
        name: "Ipilimumab",
        efficacyScore: 0.75,
        confidenceScore: 0.7,
        description: "CTLA-4 inhibitor immunotherapy",
        sideEffects: ["Serious immune-related adverse events", "Rash", "Diarrhea"],
        mechanismOfAction: "Enhances T-cell activation against melanoma"
      }
    ]
  };
  
  // Default treatments if specific cancer type isn't matched
  const defaultTreatments: Treatment[] = [
    {
      name: "Cisplatin",
      efficacyScore: 0.7,
      confidenceScore: 0.65,
      description: "Platinum-based chemotherapy",
      sideEffects: ["Kidney damage", "Hearing loss", "Nerve damage", "Nausea"],
      mechanismOfAction: "Cross-links DNA, preventing cancer cell division"
    },
    {
      name: "Doxorubicin",
      efficacyScore: 0.65,
      confidenceScore: 0.6,
      description: "Anthracycline chemotherapy",
      sideEffects: ["Heart damage", "Hair loss", "Nausea", "Low blood counts"],
      mechanismOfAction: "Intercalates DNA and inhibits topoisomerase II"
    },
    {
      name: "Immunotherapy (Nivolumab)",
      efficacyScore: 0.68,
      confidenceScore: 0.58,
      description: "PD-1 inhibitor",
      sideEffects: ["Fatigue", "Rash", "Autoimmune reactions"],
      mechanismOfAction: "Enhances T-cell immune response against cancer cells"
    }
  ];
  
  // Get treatments for the patient's cancer type, or use default
  let recommendedTreatments = treatments[patientData.cancerType] || defaultTreatments;
  
  // Adjust efficacy based on mutations
  if (patientData.selectedMutations.includes("EGFR") && patientData.cancerType === "lung-cancer") {
    recommendedTreatments = recommendedTreatments.map(t => {
      if (t.name === "Osimertinib") {
        return { ...t, efficacyScore: t.efficacyScore + 0.1 };
      }
      return t;
    });
  }
  
  if (patientData.selectedMutations.includes("BRCA1") || patientData.selectedMutations.includes("BRCA2")) {
    recommendedTreatments.push({
      name: "PARP Inhibitor (Olaparib)",
      efficacyScore: 0.86,
      confidenceScore: 0.8,
      description: "PARP enzyme inhibitor",
      sideEffects: ["Anemia", "Fatigue", "Nausea", "Neutropenia"],
      mechanismOfAction: "Exploits synthetic lethality in BRCA-mutated cancers"
    });
  }
  
  if (patientData.selectedMutations.includes("HER2/neu") && patientData.cancerType === "breast-cancer") {
    recommendedTreatments = recommendedTreatments.map(t => {
      if (t.name === "Trastuzumab (Herceptin)") {
        return { ...t, efficacyScore: t.efficacyScore + 0.15 };
      }
      return t;
    });
  }
  
  if (patientData.selectedMutations.includes("ALK") && patientData.cancerType === "lung-cancer") {
    recommendedTreatments = recommendedTreatments.map(t => {
      if (t.name === "Crizotinib") {
        return { ...t, efficacyScore: t.efficacyScore + 0.12 };
      }
      return t;
    });
  }
  
  // Sort by efficacy score (highest first)
  return recommendedTreatments.sort((a, b) => b.efficacyScore - a.efficacyScore);
};

// Generate patient-specific insights
export const generateInsights = (patientData: PatientData, treatments: Treatment[]): string[] => {
  const insights: string[] = [];
  
  // Cancer type specific insights
  if (patientData.cancerType === "breast-cancer") {
    insights.push("Hormone receptor status is a key factor in treatment selection for breast cancer.");
    
    if (patientData.selectedMutations.includes("BRCA1") || patientData.selectedMutations.includes("BRCA2")) {
      insights.push("BRCA mutations indicate potential benefit from PARP inhibitors and platinum-based chemotherapy.");
    }
    
    if (patientData.selectedMutations.includes("HER2/neu")) {
      insights.push("HER2-positive status suggests strong benefit from HER2-targeted therapies like Trastuzumab.");
    }
  }
  
  if (patientData.cancerType === "lung-cancer") {
    if (patientData.selectedMutations.includes("EGFR")) {
      insights.push("EGFR mutation positive tumors typically respond well to EGFR tyrosine kinase inhibitors like Osimertinib.");
    }
    
    if (patientData.selectedMutations.includes("ALK")) {
      insights.push("ALK rearrangements indicate potential significant benefit from ALK inhibitors like Crizotinib or Alectinib.");
    }
    
    if (!patientData.selectedMutations.includes("EGFR") && !patientData.selectedMutations.includes("ALK")) {
      insights.push("Without actionable mutations, immunotherapy or chemotherapy may be appropriate first-line options.");
    }
  }
  
  if (patientData.cancerType === "colorectal-cancer") {
    if (patientData.selectedMutations.includes("KRAS")) {
      insights.push("KRAS mutations typically indicate resistance to EGFR inhibitors like Cetuximab.");
    } else {
      insights.push("KRAS wild-type status suggests potential benefit from EGFR inhibitors.");
    }
  }
  
  if (patientData.cancerType === "melanoma") {
    if (patientData.selectedMutations.includes("BRAF")) {
      insights.push("BRAF V600 mutations indicate potential benefit from targeted therapy with BRAF/MEK inhibitor combinations.");
    } else {
      insights.push("BRAF wild-type melanoma typically responds better to immunotherapy than targeted therapy.");
    }
  }
  
  // General insights based on mutations
  if (patientData.selectedMutations.includes("TP53")) {
    insights.push("TP53 mutations may indicate more aggressive disease and potential resistance to certain therapies.");
  }
  
  // Add insights based on previous treatments
  if (patientData.previousTreatments && patientData.treatmentResponse) {
    if (patientData.treatmentResponse === "progressive") {
      insights.push("Disease progression on previous therapy suggests need for alternative treatment approach.");
    } else if (patientData.treatmentResponse === "complete" || patientData.treatmentResponse === "partial") {
      insights.push("Previous positive response may indicate benefit from similar treatment mechanisms.");
    }
  }
  
  // Add some general insights if we have few specific ones
  if (insights.length < 2) {
    insights.push("Molecular profiling can identify additional therapeutic targets beyond standard of care.");
    insights.push("Consider clinical trials that match this molecular profile for additional treatment options.");
  }
  
  return insights;
};
