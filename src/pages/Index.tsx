import React, { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Pillars from '@/components/Pillars';
import AdminLogin from '@/components/AdminLogin';
import AdminDashboard from '@/components/AdminDashboard';

const Index = () => {
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAdminPortalClick = () => {
    setShowAdminLogin(true);
  };

  const handleLogin = (authenticated: boolean) => {
    setIsAuthenticated(authenticated);
    if (authenticated) {
      setShowAdminLogin(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setShowAdminLogin(false);
  };

  // Show Admin Dashboard if authenticated
  if (isAuthenticated) {
    return <AdminDashboard onLogout={handleLogout} />;
  }

  // Show Admin Login if requested
  if (showAdminLogin) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  // Show main landing page
  return (
    <div className="min-h-screen bg-background">
      <Header onAdminClick={handleAdminPortalClick} />
      <Hero />
      <Pillars />
      
      {/* Featured Tools Section */}
      <section id="features" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-foreground">
              Explore Our Smart Farming Tools
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Access powerful AI-driven tools designed specifically for modern agriculture
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a href="/crop-detection" className="group">
              <div className="bg-card border border-border rounded-xl p-6 shadow-soft hover:shadow-strong transition-all duration-300 group-hover:scale-105">
                <div className="bg-success/10 p-3 rounded-lg mb-4 w-fit">
                  <span className="text-2xl">🔬</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">AI Crop Disease Detection</h3>
                <p className="text-muted-foreground">Upload crop images for instant AI-powered disease diagnosis and treatment recommendations.</p>
              </div>
            </a>
            
            <a href="/weather" className="group">
              <div className="bg-card border border-border rounded-xl p-6 shadow-soft hover:shadow-strong transition-all duration-300 group-hover:scale-105">
                <div className="bg-accent/10 p-3 rounded-lg mb-4 w-fit">
                  <span className="text-2xl">🌤️</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Smart Weather Dashboard</h3>
                <p className="text-muted-foreground">Get real-time weather updates, forecasts, and agricultural recommendations.</p>
              </div>
            </a>
            
            <a href="/market-prices" className="group">
              <div className="bg-card border border-border rounded-xl p-6 shadow-soft hover:shadow-strong transition-all duration-300 group-hover:scale-105">
                <div className="bg-warning/10 p-3 rounded-lg mb-4 w-fit">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Live Market Prices</h3>
                <p className="text-muted-foreground">Track real-time crop prices, market trends, and set price alerts.</p>
              </div>
            </a>
          </div>
          
          <div className="text-center">
            <p className="text-lg text-muted-foreground">
              Discover how Gram Vani transforms traditional farming with AI-powered insights, 
              community-driven support, and comprehensive market access.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <div className="bg-gradient-primary p-2 rounded-lg shadow-soft">
                <span className="text-primary-foreground font-bold text-lg">🌱</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Gram Vani</h3>
                <p className="text-sm text-muted-foreground">Rural Ecosystem Platform</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              © 2024 Gram Vani by Alpha Coders. Transforming agriculture through technology.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;