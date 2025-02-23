
import { ArrowRight } from "lucide-react";

const collections = [
  {
    title: "Top Rated Restaurants",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    count: "20+ Places"
  },
  {
    title: "Trending This Week",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    count: "15+ Places"
  },
  {
    title: "New Arrivals",
    image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    count: "10+ Places"
  }
];

export const Collections = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-2">Collections</h2>
        <p className="text-gray-600 mb-8">Explore curated lists of top restaurants, cafes, pubs, and bars</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.map((collection, index) => (
            <div
              key={collection.title}
              className="group relative h-80 overflow-hidden rounded-xl shadow-lg transition-transform hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img
                src={collection.image}
                alt={collection.title}
                className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{collection.title}</h3>
                  <div className="flex items-center text-white/90">
                    <span>{collection.count}</span>
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
