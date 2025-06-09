
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Zap, TreePine, Car, Factory, Home, Utensils } from "lucide-react";
import { Link } from "react-router-dom";

const Solutions = () => {
  const solutionCategories = [
    {
      icon: Zap,
      title: "Clean Energy",
      solutions: [
        { name: "Solar Power", description: "Harness the sun's energy for homes and businesses", potential: "High" },
        { name: "Wind Energy", description: "Generate electricity from wind turbines", potential: "High" },
        { name: "Hydroelectric", description: "Use flowing water to create clean electricity", potential: "Medium" },
        { name: "Geothermal", description: "Tap into Earth's internal heat for energy", potential: "Medium" }
      ]
    },
    {
      icon: TreePine,
      title: "Nature-Based Solutions",
      solutions: [
        { name: "Reforestation", description: "Plant trees to absorb CO2 and restore ecosystems", potential: "High" },
        { name: "Wetland Restoration", description: "Protect natural water filtration systems", potential: "Medium" },
        { name: "Regenerative Agriculture", description: "Farm in ways that heal the soil", potential: "High" },
        { name: "Urban Green Spaces", description: "Create parks and gardens in cities", potential: "Medium" }
      ]
    },
    {
      icon: Car,
      title: "Transportation",
      solutions: [
        { name: "Electric Vehicles", description: "Zero-emission cars, buses, and trucks", potential: "High" },
        { name: "Public Transit", description: "Efficient mass transportation systems", potential: "High" },
        { name: "Cycling Infrastructure", description: "Bike lanes and sharing programs", potential: "Medium" },
        { name: "Sustainable Aviation", description: "Biofuels and electric aircraft", potential: "Low" }
      ]
    },
    {
      icon: Factory,
      title: "Industry & Manufacturing",
      solutions: [
        { name: "Carbon Capture", description: "Remove CO2 from industrial processes", potential: "High" },
        { name: "Green Hydrogen", description: "Clean fuel for heavy industry", potential: "Medium" },
        { name: "Circular Manufacturing", description: "Design products for reuse and recycling", potential: "High" },
        { name: "Energy Efficiency", description: "Reduce energy consumption in factories", potential: "High" }
      ]
    },
    {
      icon: Home,
      title: "Buildings & Infrastructure",
      solutions: [
        { name: "Green Building Design", description: "Energy-efficient construction materials", potential: "High" },
        { name: "Smart Grid Technology", description: "Intelligent electricity distribution", potential: "Medium" },
        { name: "Heat Pumps", description: "Efficient heating and cooling systems", potential: "High" },
        { name: "Insulation Upgrades", description: "Reduce energy loss in buildings", potential: "High" }
      ]
    },
    {
      icon: Utensils,
      title: "Food & Agriculture",
      solutions: [
        { name: "Plant-Based Diets", description: "Reduce meat consumption for lower emissions", potential: "High" },
        { name: "Precision Agriculture", description: "Use technology to optimize farming", potential: "Medium" },
        { name: "Food Waste Reduction", description: "Minimize waste throughout supply chain", potential: "High" },
        { name: "Local Food Systems", description: "Reduce transportation emissions", potential: "Medium" }
      ]
    }
  ];

  const getPotentialColor = (potential: string) => {
    switch (potential) {
      case "High": return "bg-green-100 text-green-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Low": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
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
          <h1 className="text-4xl font-bold mb-2">Climate Solutions</h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive strategies to address climate change across all sectors
          </p>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-12">
          {solutionCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="flex items-center space-x-3 mb-6">
                <category.icon className="h-8 w-8 text-primary" />
                <h2 className="text-2xl font-bold">{category.title}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.solutions.map((solution, solutionIndex) => (
                  <Card key={solutionIndex} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-lg">{solution.name}</CardTitle>
                        <Badge className={getPotentialColor(solution.potential)}>
                          {solution.potential}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{solution.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-muted py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Implement Solutions?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Learn how you can contribute to these climate solutions in your community and daily life.
          </p>
          <Link to="/get-involved">
            <Button size="lg">Get Involved</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
