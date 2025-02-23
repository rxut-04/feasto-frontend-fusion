
import { Button } from "@/components/ui/button";
import { Search, LogIn, UserPlus } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 py-4 px-6 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-primary text-2xl font-bold">Feasto</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <Button variant="ghost" className="text-gray-600 hover:text-primary transition-colors">
            Add Restaurant
          </Button>
          
          <Button variant="ghost" className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors">
            <LogIn className="w-4 h-4" />
            <span>Login</span>
          </Button>
          
          <Button className="bg-primary text-white hover:bg-primary/90 transition-colors flex items-center space-x-2">
            <UserPlus className="w-4 h-4" />
            <span>Sign Up</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};
