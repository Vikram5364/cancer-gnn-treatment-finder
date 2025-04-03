
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { AlertCircle } from 'lucide-react';

interface TreatmentCardProps {
  name: string;
  efficacyScore: number;
  confidenceScore: number;
  description: string;
  sideEffects: string[];
  mechanismOfAction: string;
  rank: number;
}

const TreatmentCard: React.FC<TreatmentCardProps> = ({
  name,
  efficacyScore,
  confidenceScore,
  description,
  sideEffects,
  mechanismOfAction,
  rank
}) => {
  // Format scores as percentages
  const efficacyPercent = Math.round(efficacyScore * 100);
  const confidencePercent = Math.round(confidenceScore * 100);
  
  return (
    <Card className="w-full overflow-hidden">
      <div className={`h-2 ${rank === 1 ? 'bg-green-500' : rank === 2 ? 'bg-blue-500' : 'bg-amber-500'}`}></div>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-xl text-medical-800">{name}</CardTitle>
            <CardDescription className="text-sm">{description}</CardDescription>
          </div>
          <div className={`px-3 py-1 rounded-full text-xs font-medium ${
            rank === 1 ? 'bg-green-100 text-green-800' : 
            rank === 2 ? 'bg-blue-100 text-blue-800' : 
            'bg-amber-100 text-amber-800'
          }`}>
            Rank #{rank}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Predicted Efficacy</span>
            <span className="text-sm font-semibold">{efficacyPercent}%</span>
          </div>
          <Progress value={efficacyPercent} className="h-2" />
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Confidence Score</span>
            <span className="text-sm font-semibold">{confidencePercent}%</span>
          </div>
          <Progress value={confidencePercent} className="h-2" />
        </div>
        
        <Separator />
        
        <div>
          <h4 className="text-sm font-semibold mb-1">Mechanism of Action</h4>
          <p className="text-sm text-gray-600">{mechanismOfAction}</p>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start pt-0">
        <div className="w-full">
          <h4 className="text-sm font-semibold mb-1 flex items-center">
            <AlertCircle className="h-3 w-3 mr-1 text-amber-600" />
            <span>Common Side Effects</span>
          </h4>
          <div className="flex flex-wrap gap-1 mt-1">
            {sideEffects.map((effect, idx) => (
              <span 
                key={idx} 
                className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded-full text-xs"
              >
                {effect}
              </span>
            ))}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TreatmentCard;
