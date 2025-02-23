
import { Search } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative h-screen w-full">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('https://b.zmtcdn.com/data/dish_photos/070/e346f3d6fe123d732cb99463b8ccd070.jpg')`
        }}
      />
      
      <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
          Feasto
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Discover the finest cuisine, delivered to your doorstep
        </p>
        
        <div className="w-full max-w-xl animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="relative">
            <input
              type="text"
              placeholder="Search for restaurants or dishes..."
              className="w-full h-14 pl-12 pr-4 rounded-full bg-white/95 backdrop-blur-sm text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-primary border-none"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary text-white hover:bg-primary/90 transition-colors rounded-full px-6 h-10 py-2"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
