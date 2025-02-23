
import { ArrowRight } from "lucide-react";

const categories = [
  {
    name: "Pizza",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    count: "50+ Places"
  },
  {
    name: "Burgers",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    count: "40+ Places"
  },
  {
    name: "Sushi",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    count: "30+ Places"
  },
  {
    name: "Indian",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    count: "35+ Places"
  }
];

export const FoodCategories = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-2">Food Categories</h2>
        <p className="text-gray-600 mb-8">Explore restaurants by your favorite cuisine</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className="group relative h-64 overflow-hidden rounded-xl shadow-lg transition-transform hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                  <div className="flex items-center text-white/90">
                    <span>{category.count}</span>
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
