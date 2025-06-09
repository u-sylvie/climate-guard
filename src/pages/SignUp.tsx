
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold">EcoGuard</span>
          </div>
          <CardTitle className="text-2xl">Create Account</CardTitle>
          <CardDescription>
            Join the movement to protect our planet
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" placeholder="John" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" placeholder="Doe" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="your@email.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input id="confirmPassword" type="password" />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="text-sm">
              I agree to the{" "}
              <Link to="/terms" className="text-green-600 hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="text-green-600 hover:underline">
                Privacy Policy
              </Link>
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="newsletter" />
            <Label htmlFor="newsletter" className="text-sm">
              Subscribe to our climate action newsletter
            </Label>
          </div>
          <Button className="w-full bg-green-600 hover:bg-green-700">
            Create Account
          </Button>
          <div className="text-center text-sm">
            Already have an account?{" "}
            <Link to="/signin" className="text-green-600 hover:underline">
              Sign in
            </Link>
          </div>
          <div className="text-center">
            <Link to="/" className="text-sm text-muted-foreground hover:underline">
              Back to home
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
