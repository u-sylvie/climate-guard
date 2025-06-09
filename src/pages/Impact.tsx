
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ArrowLeft, AlertTriangle, TrendingUp, Globe, Users, Thermometer, Waves, Cloud, Mountain } from "lucide-react";
import { Link } from "react-router-dom";

const Impact = () => {
  const globalImpacts = [
    {
      icon: Thermometer,
      title: "Rising Temperatures",
      current: "1.1°C increase since 1880",
      projection: "1.5-4°C by 2100",
      effects: ["More frequent heatwaves", "Changing precipitation patterns", "Ecosystem disruption"]
    },
    {
      icon: Waves,
      title: "Sea Level Rise",
      current: "20cm rise since 1900",
      projection: "0.3-2.5m by 2100",
      effects: ["Coastal flooding", "Saltwater intrusion", "Island nations at risk"]
    },
    {
      icon: Cloud,
      title: "Extreme Weather",
      current: "2x more frequent since 1980",
      projection: "5x increase by 2050",
      effects: ["Stronger hurricanes", "Severe droughts", "Intense flooding"]
    },
    {
      icon: Mountain,
      title: "Ice Loss",
      current: "400 billion tons/year",
      projection: "Accelerating rate",
      effects: ["Glacier retreat", "Arctic ice loss", "Permafrost thaw"]
    }
  ];

  const regionalImpacts = [
    {
      region: "Arctic",
      description: "Fastest warming region on Earth",
      impacts: ["Sea ice decline", "Permafrost melting", "Wildlife habitat loss"],
      severity: "Critical"
    },
    {
      region: "Small Island States",
      description: "Existential threat from sea level rise",
      impacts: ["Coastal erosion", "Freshwater contamination", "Forced migration"],
      severity: "Critical"
    },
    {
      region: "Sub-Saharan Africa",
      description: "Increased drought and food insecurity",
      impacts: ["Crop failures", "Water scarcity", "Economic stress"],
      severity: "High"
    },
    {
      region: "Southeast Asia",
      description: "Monsoon disruption and coastal flooding",
      impacts: ["Agricultural disruption", "Urban flooding", "Heat stress"],
      severity: "High"
    },
    {
      region: "Australia",
      description: "Bushfires and coral bleaching",
      impacts: ["Extreme fire seasons", "Great Barrier Reef damage", "Species extinction"],
      severity: "High"
    },
    {
      region: "California",
      description: "Drought, wildfires, and heat",
      impacts: ["Water shortages", "Air quality issues", "Agricultural stress"],
      severity: "Medium"
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Critical": return "border-red-500 bg-red-50";
      case "High": return "border-orange-500 bg-orange-50";
      case "Medium": return "border-yellow-500 bg-yellow-50";
      default: return "border-gray-500 bg-gray-50";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center space-x-4 mb-4">
            <Link to="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
            </Link>
          </div>
          <h1 className="text-4xl font-bold mb-2">Climate Impact</h1>
          <p className="text-xl text-muted-foreground">
            Understanding the current and projected effects of climate change worldwide
          </p>
        </div>
      </div>

      {/* Alert */}
      <div className="container mx-auto px-4 py-6">
        <Alert className="border-orange-500 bg-orange-50">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Urgent Action Needed</AlertTitle>
          <AlertDescription>
            We have less than a decade to limit global warming to 1.5°C and avoid the most catastrophic impacts.
          </AlertDescription>
        </Alert>
      </div>

      {/* Global Impacts */}
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Global Climate Impacts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {globalImpacts.map((impact, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <impact.icon className="h-8 w-8 text-destructive" />
                    <CardTitle>{impact.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <TrendingUp className="h-4 w-4 text-orange-500" />
                      <span className="font-semibold text-sm">Current:</span>
                    </div>
                    <p className="text-muted-foreground">{impact.current}</p>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Globe className="h-4 w-4 text-red-500" />
                      <span className="font-semibold text-sm">Projected:</span>
                    </div>
                    <p className="text-muted-foreground">{impact.projection}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-sm mb-2 block">Key Effects:</span>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {impact.effects.map((effect, effectIndex) => (
                        <li key={effectIndex} className="flex items-start">
                          <span className="mr-2">•</span>
                          {effect}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Regional Impacts */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Regional Impacts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regionalImpacts.map((region, index) => (
              <Card key={index} className={`${getSeverityColor(region.severity)} transition-shadow hover:shadow-md`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">{region.region}</CardTitle>
                    <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
                      region.severity === "Critical" ? "bg-red-200 text-red-800" :
                      region.severity === "High" ? "bg-orange-200 text-orange-800" :
                      "bg-yellow-200 text-yellow-800"
                    }`}>
                      {region.severity}
                    </span>
                  </div>
                  <CardDescription>{region.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-1">
                    {region.impacts.map((impact, impactIndex) => (
                      <li key={impactIndex} className="flex items-start">
                        <span className="mr-2 text-muted-foreground">•</span>
                        {impact}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Human Impact */}
      <div className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Users className="h-16 w-16 mx-auto text-primary mb-4" />
            <h2 className="text-3xl font-bold mb-4">Human Impact</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Climate change affects billions of people worldwide, with the most vulnerable communities bearing the greatest burden.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-3xl font-bold text-destructive mb-2">3.3B</h3>
              <p className="text-muted-foreground">People highly vulnerable to climate change</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-destructive mb-2">21.5M</h3>
              <p className="text-muted-foreground">Climate refugees displaced annually</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-destructive mb-2">250K</h3>
              <p className="text-muted-foreground">Additional deaths per year from climate change</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h3 className="text-2xl font-bold mb-4">The Time for Action is Now</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          While the impacts are severe, we still have time to act. Every fraction of a degree matters.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/solutions">
            <Button size="lg">Explore Solutions</Button>
          </Link>
          <Link to="/get-involved">
            <Button size="lg" variant="outline">Take Action</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Impact;
