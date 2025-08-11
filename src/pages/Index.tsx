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
      
      {/* Features Section Placeholder */}
      <section id="features" className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Empowering Rural Agriculture with Technology
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how Gram Vani transforms traditional farming with AI-powered insights, 
            community-driven support, and comprehensive market access.
          </p>
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