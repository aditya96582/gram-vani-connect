import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Cloud, 
  Droplets, 
  Wind, 
  Sun, 
  Thermometer, 
  Eye,
  Umbrella,
  AlertTriangle,
  TrendingUp,
  Calendar
} from 'lucide-react';

const WeatherDashboard = () => {
  const currentWeather = {
    location: 'Maharastra, India',
    temperature: 28,
    condition: 'Partly Cloudy',
    humidity: 72,
    windSpeed: 15,
    visibility: 8,
    uvIndex: 6,
    pressure: 1013
  };

  const forecast = [
    { day: 'Today', high: 32, low: 24, condition: 'Sunny', icon: Sun, rain: 0 },
    { day: 'Tomorrow', high: 30, low: 22, condition: 'Cloudy', icon: Cloud, rain: 20 },
    { day: 'Wed', high: 26, low: 20, condition: 'Rainy', icon: Umbrella, rain: 80 },
    { day: 'Thu', high: 28, low: 21, condition: 'Partly Cloudy', icon: Sun, rain: 10 },
    { day: 'Fri', high: 31, low: 23, condition: 'Sunny', icon: Sun, rain: 5 }
  ];

  const alerts = [
    {
      type: 'warning',
      title: 'Heavy Rainfall Expected',
      message: 'Heavy rain predicted for next 2 days. Consider harvesting mature crops.',
      time: '2 hours ago'
    },
    {
      type: 'info',
      title: 'Optimal Irrigation Time',
      message: 'Low humidity levels. Good time for watering crops.',
      time: '4 hours ago'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-sky p-4">
      <div className="container mx-auto max-w-6xl space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full border border-accent/20">
            <Cloud className="h-4 w-4" />
            <span className="text-sm font-medium">Weather Intelligence</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Smart Weather{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Dashboard
            </span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get real-time weather updates and agricultural recommendations based on current conditions.
          </p>
        </div>

        {/* Current Weather */}
        <Card className="shadow-strong bg-gradient-earth">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl text-foreground">Current Weather</CardTitle>
                <CardDescription className="text-foreground/70">{currentWeather.location}</CardDescription>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold text-foreground">{currentWeather.temperature}°C</div>
                <div className="text-foreground/70">{currentWeather.condition}</div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-3">
                <Droplets className="h-5 w-5 text-accent" />
                <div>
                  <div className="text-sm text-foreground/70">Humidity</div>
                  <div className="font-semibold text-foreground">{currentWeather.humidity}%</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Wind className="h-5 w-5 text-accent" />
                <div>
                  <div className="text-sm text-foreground/70">Wind Speed</div>
                  <div className="font-semibold text-foreground">{currentWeather.windSpeed} km/h</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Eye className="h-5 w-5 text-accent" />
                <div>
                  <div className="text-sm text-foreground/70">Visibility</div>
                  <div className="font-semibold text-foreground">{currentWeather.visibility} km</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Sun className="h-5 w-5 text-accent" />
                <div>
                  <div className="text-sm text-foreground/70">UV Index</div>
                  <div className="font-semibold text-foreground">{currentWeather.uvIndex}</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* 5-Day Forecast */}
          <Card className="lg:col-span-2 shadow-strong">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-accent" />
                5-Day Forecast
              </CardTitle>
              <CardDescription>Weather predictions for farming planning</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {forecast.map((day, index) => {
                  const IconComponent = day.icon;
                  return (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div className="flex items-center gap-3">
                        <IconComponent className="h-6 w-6 text-accent" />
                        <div>
                          <div className="font-medium text-foreground">{day.day}</div>
                          <div className="text-sm text-muted-foreground">{day.condition}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <div className="font-semibold text-foreground">{day.high}°/{day.low}°</div>
                          <div className="text-sm text-accent">{day.rain}% rain</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Weather Alerts */}
          <Card className="shadow-strong">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-warning" />
                Weather Alerts
              </CardTitle>
              <CardDescription>Important weather notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {alerts.map((alert, index) => (
                  <div key={index} className="p-3 bg-muted rounded-lg space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-foreground">{alert.title}</h4>
                      <Badge variant={alert.type === 'warning' ? 'destructive' : 'default'}>
                        {alert.type}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{alert.message}</p>
                    <p className="text-xs text-muted-foreground">{alert.time}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Agricultural Recommendations */}
        <Card className="shadow-strong">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-success" />
              Agricultural Recommendations
            </CardTitle>
            <CardDescription>Weather-based farming advice</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Droplets className="h-5 w-5 text-accent" />
                  <h3 className="font-semibold text-foreground">Irrigation</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Current humidity is optimal. Reduce watering for next 2 days due to expected rainfall.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Sun className="h-5 w-5 text-accent" />
                  <h3 className="font-semibold text-foreground">Harvesting</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Good weather conditions today and tomorrow. Ideal time for harvesting mature crops.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Thermometer className="h-5 w-5 text-accent" />
                  <h3 className="font-semibold text-foreground">Pest Control</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Moderate temperature and humidity may increase pest activity. Monitor crops closely.
                </p>
              </div>
            </div>
            
            <div className="mt-6 flex gap-3">
              <Button variant="farmer">
                Get Detailed Report
              </Button>
              <Button variant="outline">
                Set Weather Alerts
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WeatherDashboard;