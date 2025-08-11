import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Smartphone, Sprout, Users } from 'lucide-react';
import heroImage from '@/assets/hero-agriculture.jpg';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-sky min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full border border-accent/20">
                <Sprout className="h-4 w-4" />
                <span className="text-sm font-medium">Empowering 70% of India's Population</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Transform Agriculture with{' '}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  AI-Powered
                </span>{' '}
                Technology
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Gram Vani is the comprehensive digital ecosystem designed for rural farmers. 
                Get real-time crop insights, market prices, and community support - all in your local language.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">70%</div>
                <div className="text-sm text-muted-foreground">Farmers Using Traditional Methods</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">₹92,000Cr</div>
                <div className="text-sm text-muted-foreground">Annual Post-Harvest Losses</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-success">24%</div>
                <div className="text-sm text-muted-foreground">MSP Awareness</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                Get Started Now
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="group">
                <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Smartphone className="h-4 w-4 text-accent" />
                <span>Offline-First Technology</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-accent" />
                <span>Voice-Based Interface</span>
              </div>
            </div>
          </div>

          {/* Right Content - Floating Cards */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-96">
              {/* Floating Card 1 */}
              <div className="absolute top-0 right-0 bg-card border border-border rounded-xl p-4 shadow-soft animate-float">
                <div className="flex items-center gap-3">
                  <div className="bg-success/10 p-2 rounded-lg">
                    <Sprout className="h-5 w-5 text-success" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Crop Health</div>
                    <div className="text-xs text-muted-foreground">95% Accuracy</div>
                  </div>
                </div>
              </div>

              {/* Floating Card 2 */}
              <div className="absolute top-20 left-0 bg-card border border-border rounded-xl p-4 shadow-soft animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="bg-warning/10 p-2 rounded-lg">
                    <span className="text-warning font-bold text-sm">₹</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Market Price</div>
                    <div className="text-xs text-muted-foreground">Real-time Updates</div>
                  </div>
                </div>
              </div>

              {/* Floating Card 3 */}
              <div className="absolute bottom-0 right-10 bg-card border border-border rounded-xl p-4 shadow-soft animate-float" style={{ animationDelay: '2s' }}>
                <div className="flex items-center gap-3">
                  <div className="bg-accent/10 p-2 rounded-lg">
                    <Users className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Community</div>
                    <div className="text-xs text-muted-foreground">Voice Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;