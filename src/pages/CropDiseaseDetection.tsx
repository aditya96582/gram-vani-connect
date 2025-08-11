import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Camera, Upload, Scan, AlertTriangle, CheckCircle, Info } from 'lucide-react';

const CropDiseaseDetection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<any>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        setAnalysisResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeImage = () => {
    setIsAnalyzing(true);
    // Simulate AI analysis
    setTimeout(() => {
      setAnalysisResult({
        disease: 'Leaf Blight',
        confidence: 92,
        severity: 'Medium',
        treatment: [
          'Apply copper-based fungicide',
          'Improve drainage around plants',
          'Remove affected leaves',
          'Increase air circulation'
        ],
        prevention: [
          'Water at soil level, not leaves',
          'Plant resistant varieties',
          'Rotate crops annually'
        ]
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-sky p-4">
      <div className="container mx-auto max-w-4xl space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full border border-success/20">
            <Scan className="h-4 w-4" />
            <span className="text-sm font-medium">AI Crop Disease Detection</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Detect Plant Diseases with{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              AI Technology
            </span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Upload or capture an image of your crop to get instant AI-powered disease detection 
            and treatment recommendations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Upload Section */}
          <Card className="shadow-strong">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Camera className="h-5 w-5 text-accent" />
                Upload Crop Image
              </CardTitle>
              <CardDescription>
                Take a clear photo of the affected plant leaves or upload from gallery
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Image Upload Area */}
              <div className="border-2 border-dashed border-border rounded-lg p-8">
                {selectedImage ? (
                  <div className="space-y-4">
                    <img 
                      src={selectedImage} 
                      alt="Selected crop" 
                      className="w-full max-h-64 object-cover rounded-lg"
                    />
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => setSelectedImage(null)}
                      className="w-full"
                    >
                      Choose Different Image
                    </Button>
                  </div>
                ) : (
                  <div className="text-center space-y-4">
                    <Upload className="h-12 w-12 text-muted-foreground mx-auto" />
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-xs text-muted-foreground">
                        PNG, JPG up to 10MB
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* File Input */}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="image-upload"
              />
              <label htmlFor="image-upload">
                <Button variant="farmer" className="w-full" asChild>
                  <span>
                    <Camera className="h-4 w-4" />
                    Choose Image
                  </span>
                </Button>
              </label>

              {/* Analyze Button */}
              {selectedImage && (
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  onClick={analyzeImage}
                  disabled={isAnalyzing}
                >
                  {isAnalyzing ? (
                    <>
                      <div className="animate-spin h-4 w-4 border-2 border-primary-foreground border-t-transparent rounded-full" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Scan className="h-4 w-4" />
                      Analyze Crop Health
                    </>
                  )}
                </Button>
              )}
            </CardContent>
          </Card>

          {/* Results Section */}
          <Card className="shadow-strong">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-warning" />
                Analysis Results
              </CardTitle>
              <CardDescription>
                AI-powered diagnosis and treatment recommendations
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!analysisResult ? (
                <div className="text-center py-12 text-muted-foreground">
                  <Info className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Upload an image to get started with AI analysis</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Disease Detection */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-foreground">
                        Detected Disease
                      </h3>
                      <Badge variant="outline" className="text-warning border-warning">
                        {analysisResult.confidence}% Confidence
                      </Badge>
                    </div>
                    
                    <div className="bg-muted rounded-lg p-4">
                      <h4 className="font-medium text-foreground text-lg">
                        {analysisResult.disease}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Severity: {analysisResult.severity}
                      </p>
                    </div>
                  </div>

                  {/* Treatment */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-success" />
                      Recommended Treatment
                    </h3>
                    <ul className="space-y-2">
                      {analysisResult.treatment.map((step: string, index: number) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Prevention */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-foreground">
                      Prevention Tips
                    </h3>
                    <ul className="space-y-2">
                      {analysisResult.prevention.map((tip: string, index: number) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button variant="farmer" className="w-full">
                    Save to My Reports
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Tips Section */}
        <Card className="bg-gradient-earth shadow-strong">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Tips for Better Results
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center space-y-2">
                <Camera className="h-8 w-8 text-accent mx-auto" />
                <h4 className="font-medium text-foreground">Clear Images</h4>
                <p className="text-sm text-muted-foreground">
                  Take photos in good lighting with affected areas clearly visible
                </p>
              </div>
              
              <div className="text-center space-y-2">
                <Scan className="h-8 w-8 text-accent mx-auto" />
                <h4 className="font-medium text-foreground">Close-up Shots</h4>
                <p className="text-sm text-muted-foreground">
                  Focus on specific leaves or affected parts for accurate detection
                </p>
              </div>
              
              <div className="text-center space-y-2">
                <CheckCircle className="h-8 w-8 text-accent mx-auto" />
                <h4 className="font-medium text-foreground">Multiple Angles</h4>
                <p className="text-sm text-muted-foreground">
                  Take photos from different angles for comprehensive analysis
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CropDiseaseDetection;