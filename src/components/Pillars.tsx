import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Sprout, 
  TrendingUp, 
  Users, 
  Heart, 
  Wrench,
  Brain,
  Shield,
  Globe,
  ArrowRight
} from 'lucide-react';

const pillarsData = [
  {
    icon: Sprout,
    title: "Smart Crop & Resource Management",
    description: "AI-powered health analysis, predictive alerts, and soil health monitoring for optimal farming decisions.",
    features: [
      "Offline-first pest/disease detection",
      "Predictive outbreak alerts",
      "Smart irrigation scheduling",
      "Soil health analysis via photos"
    ],
    color: "success"
  },
  {
    icon: TrendingUp,
    title: "Market Access & Financial Enablement",
    description: "Real-time price intelligence, logistics platform, and integrated financial services.",
    features: [
      "Live mandi prices & forecasts",
      "Cooperative selling platform",
      "Logistics bidding marketplace",
      "Loan & insurance facilitation"
    ],
    color: "warning"
  },
  {
    icon: Users,
    title: "Community, Learning & Skill Development",
    description: "Voice-based learning, community forums, and gamified skill development in local languages.",
    features: [
      "Vernacular AI tutor",
      "Voice-first community forum",
      "Gamified learning modules",
      "Government schemes integration"
    ],
    color: "accent"
  },
  {
    icon: Heart,
    title: "Integrated Livestock Management",
    description: "Comprehensive animal health monitoring and husbandry management tools.",
    features: [
      "AI livestock health monitor",
      "Breeding & vaccination calendar",
      "Feed optimization calculator",
      "Disease early detection"
    ],
    color: "primary"
  },
  {
    icon: Wrench,
    title: "Hyper-Local Services & Resource Sharing",
    description: "Peer-to-peer equipment rentals, labor marketplace, and local trading platform.",
    features: [
      "Equipment rental marketplace",
      "Local labor & services hub",
      "Farmer-to-farmer trading",
      "Resource sharing network"
    ],
    color: "secondary"
  }
];

const Pillars = () => {
  return (
    <section id="pillars" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full border border-accent/20">
            <Brain className="h-4 w-4" />
            <span className="text-sm font-medium">Five Core Pillars</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Comprehensive Agricultural{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Ecosystem
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our integrated platform addresses every aspect of rural agriculture, 
            from crop management to market access, community building, and beyond.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {pillarsData.map((pillar, index) => {
            const IconComponent = pillar.icon;
            
            return (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl p-6 shadow-soft hover:shadow-strong transition-all duration-300 animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-lg mb-4 bg-${pillar.color}/10 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`h-6 w-6 text-${pillar.color}`} />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground leading-tight">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2">
                    {pillar.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <div className={`w-1.5 h-1.5 rounded-full bg-${pillar.color} mt-2 flex-shrink-0`} />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Button */}
                  <Button variant="ghost" size="sm" className="group/btn p-0 h-auto font-medium">
                    Learn More
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technology Foundation */}
        <div className="bg-gradient-earth rounded-2xl p-8 md:p-12 shadow-strong">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-background/80 backdrop-blur-sm text-foreground px-4 py-2 rounded-full border border-border/50">
              <Shield className="h-4 w-4" />
              <span className="text-sm font-medium">Built on Robust Technology</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Advanced Technical Architecture
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Globe className="h-8 w-8 text-accent mx-auto" />
                <h4 className="font-semibold text-foreground">Offline-First Design</h4>
                <p className="text-sm text-muted-foreground">
                  Edge AI processing ensures core functionality works without internet
                </p>
              </div>
              
              <div className="space-y-2">
                <Brain className="h-8 w-8 text-accent mx-auto" />
                <h4 className="font-semibold text-foreground">Multimodal AI</h4>
                <p className="text-sm text-muted-foreground">
                  Voice, image, and text inputs work seamlessly together
                </p>
              </div>
              
              <div className="space-y-2">
                <Users className="h-8 w-8 text-accent mx-auto" />
                <h4 className="font-semibold text-foreground">Vernacular Support</h4>
                <p className="text-sm text-muted-foreground">
                  Native language support for 85% of rural users
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pillars;