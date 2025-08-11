import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  TrendingUp, 
  TrendingDown, 
  Search,
  MapPin,
  Calendar,
  DollarSign,
  BarChart3,
  Filter,
  Bell,
  Wheat
} from 'lucide-react';

const MarketPriceTracker = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const marketData = [
    {
      crop: 'Wheat',
      currentPrice: 2150,
      previousPrice: 2100,
      change: 50,
      changePercent: 2.4,
      market: 'APMC Pune',
      lastUpdated: '2 hours ago',
      trend: 'up'
    },
    {
      crop: 'Rice',
      currentPrice: 3200,
      previousPrice: 3350,
      change: -150,
      changePercent: -4.5,
      market: 'APMC Mumbai',
      lastUpdated: '1 hour ago',
      trend: 'down'
    },
    {
      crop: 'Cotton',
      currentPrice: 5800,
      previousPrice: 5750,
      change: 50,
      changePercent: 0.9,
      market: 'APMC Nagpur',
      lastUpdated: '3 hours ago',
      trend: 'up'
    },
    {
      crop: 'Sugarcane',
      currentPrice: 350,
      previousPrice: 345,
      change: 5,
      changePercent: 1.4,
      market: 'APMC Sangli',
      lastUpdated: '30 min ago',
      trend: 'up'
    },
    {
      crop: 'Tomato',
      currentPrice: 25,
      previousPrice: 30,
      change: -5,
      changePercent: -16.7,
      market: 'APMC Pune',
      lastUpdated: '1 hour ago',
      trend: 'down'
    },
    {
      crop: 'Onion',
      currentPrice: 18,
      previousPrice: 22,
      change: -4,
      changePercent: -18.2,
      market: 'APMC Nashik',
      lastUpdated: '45 min ago',
      trend: 'down'
    }
  ];

  const priceAlerts = [
    {
      crop: 'Wheat',
      targetPrice: 2200,
      currentPrice: 2150,
      status: 'approaching'
    },
    {
      crop: 'Cotton',
      targetPrice: 5500,
      currentPrice: 5800,
      status: 'reached'
    }
  ];

  const marketTrends = [
    {
      category: 'Cereals',
      trend: 'Stable',
      description: 'Wheat and rice prices showing steady growth',
      icon: Wheat
    },
    {
      category: 'Cash Crops',
      trend: 'Rising',
      description: 'Cotton prices trending upward due to export demand',
      icon: TrendingUp
    },
    {
      category: 'Vegetables',
      trend: 'Declining',
      description: 'Seasonal surplus causing price drops',
      icon: TrendingDown
    }
  ];

  const filteredMarketData = marketData.filter(item =>
    item.crop.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.market.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-sky p-4">
      <div className="container mx-auto max-w-6xl space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-warning/10 text-warning px-4 py-2 rounded-full border border-warning/20">
            <BarChart3 className="h-4 w-4" />
            <span className="text-sm font-medium">Market Intelligence</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Live Market{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Price Tracker
            </span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with real-time crop prices, market trends, and get alerts when your target prices are reached.
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="shadow-soft">
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search crops or markets..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4" />
                  Filters
                </Button>
                <Button variant="outline" size="sm">
                  <MapPin className="h-4 w-4" />
                  Location
                </Button>
                <Button variant="farmer" size="sm">
                  <Bell className="h-4 w-4" />
                  Set Alert
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="live-prices" className="space-y-6">
          <TabsList className="grid grid-cols-1 md:grid-cols-3 w-full md:w-auto">
            <TabsTrigger value="live-prices">Live Prices</TabsTrigger>
            <TabsTrigger value="trends">Market Trends</TabsTrigger>
            <TabsTrigger value="alerts">Price Alerts</TabsTrigger>
          </TabsList>

          {/* Live Prices Tab */}
          <TabsContent value="live-prices" className="space-y-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredMarketData.map((item, index) => (
                <Card key={index} className="shadow-soft hover:shadow-strong transition-shadow duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{item.crop}</CardTitle>
                      <Badge variant={item.trend === 'up' ? 'default' : 'destructive'}>
                        {item.trend === 'up' ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                      </Badge>
                    </div>
                    <CardDescription className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {item.market}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <div className="text-2xl font-bold text-foreground">
                        ₹{item.currentPrice}
                        <span className="text-sm font-normal text-muted-foreground ml-1">
                          /quintal
                        </span>
                      </div>
                      <div className={`text-sm flex items-center gap-1 ${
                        item.change > 0 ? 'text-success' : 'text-destructive'
                      }`}>
                        {item.change > 0 ? '↗' : '↘'} ₹{Math.abs(item.change)} ({item.changePercent > 0 ? '+' : ''}{item.changePercent}%)
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>Last updated: {item.lastUpdated}</span>
                      <Button variant="ghost" size="sm" className="h-6 px-2">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Market Trends Tab */}
          <TabsContent value="trends" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              {marketTrends.map((trend, index) => {
                const IconComponent = trend.icon;
                return (
                  <Card key={index} className="shadow-soft">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="bg-accent/10 p-2 rounded-lg">
                          <IconComponent className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{trend.category}</CardTitle>
                          <Badge variant="outline">{trend.trend}</Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{trend.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Market Analysis */}
            <Card className="shadow-strong">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-accent" />
                  Market Analysis & Predictions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-muted rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-2">Weekly Outlook</h3>
                    <p className="text-sm text-muted-foreground">
                      Cereal prices expected to remain stable with slight upward trend. 
                      Vegetable prices may drop further due to increased supply from neighboring states.
                    </p>
                  </div>
                  
                  <div className="bg-muted rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-2">Export Impact</h3>
                    <p className="text-sm text-muted-foreground">
                      Cotton and spice exports showing strong demand, supporting price stability. 
                      Government policy changes may affect sugar and rice export quotas.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Price Alerts Tab */}
          <TabsContent value="alerts" className="space-y-4">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-accent" />
                  Active Price Alerts
                </CardTitle>
                <CardDescription>Get notified when crops reach your target prices</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {priceAlerts.map((alert, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div>
                      <div className="font-medium text-foreground">{alert.crop}</div>
                      <div className="text-sm text-muted-foreground">
                        Target: ₹{alert.targetPrice} | Current: ₹{alert.currentPrice}
                      </div>
                    </div>
                    <Badge variant={alert.status === 'reached' ? 'default' : 'secondary'}>
                      {alert.status}
                    </Badge>
                  </div>
                ))}
                
                <Button variant="farmer" className="w-full">
                  <Bell className="h-4 w-4" />
                  Create New Alert
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MarketPriceTracker;