
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative h-[60vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="Delicious Food"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      </div>
      
      <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
          Feasto
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl animate-fade-in" style={{animationDelay: "0.2s"}}>
          Discover the finest cuisine, delivered to your doorstep
        </p>
        
        <div className="w-full max-w-xl animate-fade-in" style={{animationDelay: "0.4s"}}>
          <div className="relative">
            <Input
              placeholder="Search for restaurants or dishes..."
              className="w-full h-14 pl-12 pr-4 rounded-full bg-white/95 backdrop-blur-sm text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-primary"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary text-white hover:bg-primary/90 transition-colors rounded-full px-6">
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
