
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Globe, Thermometer, Recycle, Users, TreePine, Zap, Droplets } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const climateStats = [
    { icon: Thermometer, value: "1.1°C", label: "Global temperature rise since 1880" },
    { icon: Globe, value: "421ppm", label: "Atmospheric CO2 levels" },
    { icon: TreePine, value: "10M", label: "Hectares of forest lost annually" },
    { icon: Droplets, value: "20cm", label: "Sea level rise since 1900" }
  ];

  const solutions = [
    {
      icon: Zap,
      title: "Renewable Energy",
      description: "Transition to solar, wind, and other clean energy sources",
      impact: "Reduces 70% of global emissions"
    },
    {
      icon: TreePine,
      title: "Reforestation",
      description: "Plant trees and restore natural ecosystems",
      impact: "Absorbs 2.6 billion tons of CO2"
    },
    {
      icon: Recycle,
      title: "Circular Economy",
      description: "Reduce, reuse, and recycle to minimize waste",
      impact: "Cuts waste by 80%"
    },
    {
      icon: Users,
      title: "Community Action",
      description: "Grassroots movements driving local change",
      impact: "Engages millions globally"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold">EcoGuard</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/solutions" className="hover:text-primary transition-colors">Solutions</Link>
            <Link to="/impact" className="hover:text-primary transition-colors">Impact</Link>
            <Link to="/get-involved" className="hover:text-primary transition-colors">Get Involved</Link>
          </div>
          <Button>Take Action</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            Climate Action Now
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Protecting Our Planet
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join the global movement to combat climate change. Together, we can create a sustainable future for generations to come.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Start Your Impact
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Climate Stats */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">The Climate Crisis by Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {climateStats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <stat.icon className="h-12 w-12 mx-auto text-destructive" />
                  <CardTitle className="text-3xl font-bold text-destructive">{stat.value}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Solutions That Work</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Proven strategies and technologies that can help us reverse climate change
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutions.map((solution, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <solution.icon className="h-8 w-8 text-green-600" />
                    <CardTitle>{solution.title}</CardTitle>
                  </div>
                  <CardDescription>{solution.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary">{solution.impact}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Every Action Counts</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Whether you're an individual, business, or organization, there are meaningful ways to contribute to climate conservation.
          </p>
          <Button size="lg" variant="secondary">
            Join the Movement
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Leaf className="h-6 w-6 text-green-600" />
            <span className="text-xl font-bold">EcoGuard</span>
          </div>
          <p className="text-muted-foreground">
            Building a sustainable future, one action at a time.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
