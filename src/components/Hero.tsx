
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
      
      <div className="relative h-full flex items-center justify-center px-6">
        <div className="bg-white/10 backdrop-blur-[10px] p-14 rounded-2xl text-center text-white max-w-[800px] w-[90%] shadow-lg border border-white/20 transform hover:-translate-y-1 transition-transform duration-300">
          <h1 className="text-5xl font-bold mb-6 tracking-tight text-shadow animate-[slideDown_0.8s_ease] leading-tight">
            Feasto
          </h1>
          
          <p className="text-xl mb-10 text-white/90 font-normal animate-[slideDown_0.8s_ease_0.2s]">
            Savor the Flavor, Delivered to Your Door
          </p>
          
          <form className="flex gap-2 justify-center max-w-[600px] mx-auto animate-[fadeIn_1s_ease_0.4s]">
            <input
              type="text"
              placeholder="Search for restaurants or dishes"
              className="flex-1 px-6 py-4 text-base rounded-xl bg-white/95 text-gray-800 placeholder:text-gray-500 shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#ff9900]/20 focus:translate-y-[-2px]"
            />
            <button
              type="submit"
              className="px-8 py-4 text-base font-semibold bg-[#ff9900] text-white rounded-xl shadow-md hover:bg-[#ff8800] transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg active:translate-y-0 active:shadow-sm"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
