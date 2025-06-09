
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Users, Vote, DollarSign, Lightbulb, Heart, Share2, MessageSquare, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const GetInvolved = () => {
  const [email, setEmail] = useState("");

  const actionCategories = [
    {
      icon: Users,
      title: "Individual Actions",
      description: "Simple changes you can make in your daily life",
      actions: [
        { action: "Switch to renewable energy", impact: "High", difficulty: "Medium" },
        { action: "Reduce meat consumption", impact: "High", difficulty: "Low" },
        { action: "Use public transportation", impact: "Medium", difficulty: "Low" },
        { action: "Improve home insulation", impact: "Medium", difficulty: "Medium" },
        { action: "Buy local and seasonal food", impact: "Medium", difficulty: "Low" },
        { action: "Reduce air travel", impact: "High", difficulty: "High" }
      ]
    },
    {
      icon: Vote,
      title: "Political Action",
      description: "Use your voice to influence policy and governance",
      actions: [
        { action: "Vote for climate-conscious candidates", impact: "High", difficulty: "Low" },
        { action: "Contact your representatives", impact: "Medium", difficulty: "Low" },
        { action: "Attend town halls and meetings", impact: "Medium", difficulty: "Medium" },
        { action: "Join advocacy organizations", impact: "High", difficulty: "Medium" },
        { action: "Participate in peaceful protests", impact: "Medium", difficulty: "Medium" },
        { action: "Run for local office", impact: "High", difficulty: "High" }
      ]
    },
    {
      icon: DollarSign,
      title: "Financial Actions",
      description: "Use your economic power to drive change",
      actions: [
        { action: "Divest from fossil fuels", impact: "High", difficulty: "Medium" },
        { action: "Support green businesses", impact: "Medium", difficulty: "Low" },
        { action: "Invest in renewable energy", impact: "High", difficulty: "Medium" },
        { action: "Choose sustainable banking", impact: "Medium", difficulty: "Low" },
        { action: "Buy carbon offsets", impact: "Low", difficulty: "Low" },
        { action: "Fund climate projects", impact: "High", difficulty: "High" }
      ]
    },
    {
      icon: Share2,
      title: "Community & Education",
      description: "Spread awareness and build local movements",
      actions: [
        { action: "Educate friends and family", impact: "Medium", difficulty: "Low" },
        { action: "Share climate content online", impact: "Medium", difficulty: "Low" },
        { action: "Organize community events", impact: "High", difficulty: "Medium" },
        { action: "Start a climate group", impact: "High", difficulty: "High" },
        { action: "Volunteer for organizations", impact: "Medium", difficulty: "Medium" },
        { action: "Mentor young activists", impact: "Medium", difficulty: "Medium" }
      ]
    }
  ];

  const organizations = [
    {
      name: "350.org",
      description: "Global grassroots climate movement",
      focus: "Fossil fuel divestment",
      website: "350.org"
    },
    {
      name: "Citizens' Climate Lobby",
      description: "Bipartisan political action group",
      focus: "Carbon pricing policy",
      website: "citizensclimatelobby.org"
    },
    {
      name: "Sunrise Movement",
      description: "Youth-led climate activism",
      focus: "Green New Deal",
      website: "sunrisemovement.org"
    },
    {
      name: "Climate Reality Project",
      description: "Education and advocacy",
      focus: "Climate communication",
      website: "climaterealityproject.org"
    }
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "High": return "bg-green-100 text-green-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Low": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Low": return "bg-green-100 text-green-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "High": return "bg-red-100 text-red-800";
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
          <h1 className="text-4xl font-bold mb-2">Get Involved</h1>
          <p className="text-xl text-muted-foreground">
            Find your way to make a meaningful impact on climate change
          </p>
        </div>
      </div>

      {/* Action Categories */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-12">
          {actionCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="flex items-center space-x-3 mb-6">
                <category.icon className="h-8 w-8 text-primary" />
                <div>
                  <h2 className="text-2xl font-bold">{category.title}</h2>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.actions.map((item, actionIndex) => (
                  <Card key={actionIndex} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{item.action}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex gap-2">
                        <span className={`text-xs px-2 py-1 rounded-full font-semibold ${getImpactColor(item.impact)}`}>
                          {item.impact} Impact
                        </span>
                        <span className={`text-xs px-2 py-1 rounded-full font-semibold ${getDifficultyColor(item.difficulty)}`}>
                          {item.difficulty} Effort
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Organizations to Join */}
      <div className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Heart className="h-16 w-16 mx-auto text-primary mb-4" />
            <h2 className="text-3xl font-bold mb-4">Join Climate Organizations</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with established groups making a real difference
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {organizations.map((org, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{org.name}</CardTitle>
                  <CardDescription>{org.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm"><strong>Focus:</strong> {org.focus}</p>
                  <p className="text-sm text-primary">{org.website}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="container mx-auto px-4 py-16">
        <Card className="max-w-lg mx-auto">
          <CardHeader className="text-center">
            <MessageSquare className="h-12 w-12 mx-auto text-primary mb-4" />
            <CardTitle>Stay Updated</CardTitle>
            <CardDescription>
              Get the latest climate action opportunities delivered to your inbox
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <Button className="w-full">
              Subscribe to Updates
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Start Today</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <Calendar className="h-8 w-8 mx-auto mb-2" />
                <CardTitle>This Week</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm opacity-90">Calculate your carbon footprint and identify reduction opportunities</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <Lightbulb className="h-8 w-8 mx-auto mb-2" />
                <CardTitle>This Month</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm opacity-90">Switch to a renewable energy provider for your home</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <Users className="h-8 w-8 mx-auto mb-2" />
                <CardTitle>This Year</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm opacity-90">Join or start a local climate action group in your community</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
