import { Scissors, Sparkles, Gem, Heart, Palette } from 'lucide-react';

const Categories = () => {
  const categories = [
    {
      id: 1,
      title: "Custom Stitching",
      desc: "Blouses, salwar suits, lehengas, gowns, and more tailored to your perfect fit.",
      icon: <Scissors size={32} className="text-brand-blue" />,
      img: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Aari Work",
      desc: "Intricate hand embroidery crafted with precision and tradition.",
      icon: <Sparkles size={32} className="text-brand-blue" />,
      img: "https://images.unsplash.com/photo-1590076214828-56eb0f576be0?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Embellishments",
      desc: "Stone work, beadwork, sequins, and custom detailing.",
      icon: <Gem size={32} className="text-brand-blue" />,
      img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Bridal Wear",
      desc: "Exclusive bridal collections designed for elegance and grace.",
      icon: <Heart size={32} className="text-brand-blue" />,
      img: "https://images.unsplash.com/photo-1583391733958-d25e0e0ab5b4?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Contemporary Styles",
      desc: "Modern fashion with a traditional touch.",
      icon: <Palette size={32} className="text-brand-blue" />,
      img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">Our Services & Categories</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover a wide range of fashion services, customized precisely to your requirements. 
          </p>
          <div className="w-24 h-1 bg-brand-blue mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((category) => (
            <div key={category.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full">
              <div className="h-56 relative overflow-hidden">
                <img src={category.img} alt={category.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-blue-100 -mt-16 relative z-10">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-brand-dark mb-4">{category.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6 flex-1">
                  {category.desc}
                </p>
                <div className="mt-auto">
                    <button className="text-brand-blue font-semibold hover:text-blue-800 transition-colors flex items-center gap-2 group">
                      View details 
                      <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Categories;
