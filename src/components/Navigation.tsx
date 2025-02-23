
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 py-4 px-8 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center text-[1.8rem] font-bold uppercase tracking-[2px] text-[#FF6B35]">
          <span>Feasto</span>
        </a>
        
        <div className="flex items-center gap-6">
          <a href="/add-restaurant" className="text-[#FF6B35] font-semibold hover:text-[#FF8C00] transition-colors relative group">
            Add Restaurant
            <span className="absolute w-0 h-0.5 bg-[#FF6B35] bottom-[-5px] left-0 transition-all duration-300 group-hover:w-full"></span>
          </a>
          
          <a href="/login" className="text-[#FF6B35] font-semibold hover:text-[#FF8C00] transition-colors relative group">
            Login
            <span className="absolute w-0 h-0.5 bg-[#FF6B35] bottom-[-5px] left-0 transition-all duration-300 group-hover:w-full"></span>
          </a>
          
          <a href="/signup" className="bg-[#FF6B35] text-white font-semibold px-6 py-2 rounded-full hover:bg-[#FF8C00] transition-colors">
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};
