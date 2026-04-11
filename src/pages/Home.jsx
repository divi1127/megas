import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { categoriesList, products } from '../data/products';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      img: 'https://i.pinimg.com/1200x/48/7c/74/487c744e4ad70559edf90ecafeb3fde9.jpg',
      title: 'Custom Tailoring &',
      highlight: 'Designer Craftsmanship',
      desc: 'At Megas Fabric, we specialize in custom stitching, Aari work, embellishments, and contemporary styling designed just for you.',
    },
    {
      img: 'https://i.pinimg.com/1200x/af/63/dc/af63dc7ad1b17548504fcf8f49a8002b.jpg',
      title: 'Exquisite',
      highlight: 'Bridal Collections',
      desc: 'Look stunning on your special day with our perfectly tailored, hand-embroidered bridal wear.',
    },
    {
      img: 'https://i.pinimg.com/1200x/ea/37/1b/ea371bd46d38c346412ca9eb537b4f2a.jpg',
      title: 'Modern &',
      highlight: 'Contemporary Styles',
      desc: 'Perfectly fitting casual and party wear crafted from the finest fabrics.',
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide(prev => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide(prev => (prev === 0 ? heroSlides.length - 1 : prev - 1));

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[85vh] bg-gray-900 overflow-hidden group">
        
        {/* Sliding Background Images container */}
        <div 
          className="absolute inset-0 z-0 flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {heroSlides.map((slide, index) => (
            <div key={index} className="w-full h-full min-w-full relative">
              <div className="absolute inset-0 bg-gray-900/60 md:bg-gray-900/40 mix-blend-multiply z-10"></div>
              <img 
                src={slide.img} 
                alt={slide.title} 
                className="w-full h-full object-cover object-top"
              />
            </div>
          ))}
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/70 to-transparent z-10 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full pt-10 md:pt-20 h-full flex items-center">
          <div className="max-w-2xl mt-4 sm:mt-0">
             
            <div className="relative h-72 md:h-72 w-full overflow-hidden">
               {heroSlides.map((slide, index) => (
                 <div 
                   key={`text-${index}`} 
                   className={`absolute top-0 left-0 transition-opacity duration-1000 ease-in-out w-full ${index === currentSlide ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                 >
                   <span className="inline-block py-2 px-2 rounded-full bg-blue-500/20 text-blue-300 font-semibold text-[10px] md:text-sm  uppercase tracking-wider backdrop-blur-sm border border-blue-500/30 ">
                     Welcome to Megas Fabric
                   </span>
                   <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mt-2">
                     {slide.title} <br /> 
                     <span className="text-blue-400">{slide.highlight}</span>
                   </h1>
                   <p className="text-sm md:text-lg text-gray-200 mb-6 md:mb-8 leading-relaxed max-w-xl line-clamp-3 md:line-clamp-none">
                     {slide.desc}
                   </p>
                 </div>
               ))}
            </div>

            <div className="flex flex-wrap gap-5 mt-4 md:mt-8">
              <Link to="/book-appointment" className="bg-brand-blue text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-blue-600 shadow-xl shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-1 relative z-30">
                Book Appointment
              </Link>
              <Link to="/all-collections" className="bg-white/10 text-white backdrop-blur-md border border-white/20 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-white/20 transition-all duration-300 flex items-center gap-2 relative z-30 ">
                Shop Collections <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Slider Controls - Hidden on mobile */}
        <button onClick={prevSlide} className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/30 backdrop-blur p-3 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all cursor-pointer">
          <ChevronLeft size={24} />
        </button>
        <button onClick={nextSlide} className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/30 backdrop-blur p-3 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all cursor-pointer">
          <ChevronRight size={24} />
        </button>
        
        {/* Indicators */}
        {/* <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2 md:gap-3">
          {heroSlides.map((_, idx) => (
             <button 
               key={idx} 
               onClick={() => setCurrentSlide(idx)}
               className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all cursor-pointer ${idx === currentSlide ? 'bg-brand-blue w-6 md:w-8' : 'bg-white/50 hover:bg-white'}`}
             />
          ))}
        </div> */}
      </section>

      {/* Featured Categories Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Shop by Category</h2>
              <div className="w-24 h-1 bg-brand-blue rounded-full"></div>
            </div>
            <Link to="/all-collections" className="text-brand-blue font-bold hover:underline flex items-center gap-1">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {categoriesList.slice(0, 5).map((cat) => (
              <Link key={cat.id} to={`/category/${cat.id}`} className="group relative rounded-2xl overflow-hidden aspect-[4/5] block">
                <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-gray-900/40 transition-colors z-10"></div>
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 z-20 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent">
                  <h3 className="text-white font-bold text-lg md:text-xl translate-y-2 group-hover:translate-y-0 transition-transform">{cat.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-brand-blue rounded-3xl transform rotate-3 scale-105 opacity-20"></div>
              <img src="https://i.pinimg.com/1200x/f3/94/4d/f3944df2a706b3b1c3cf70a270e78d50.jpg" alt="Why choose us" className="relative z-10 rounded-3xl shadow-2xl border-4 border-white" />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-8">Why Choose <span className="text-brand-blue">Megas Fabric?</span></h2>
              <ul className="space-y-6">
                {[
                  { title: "Premium Craftsmanship", desc: "Every stitch is made with the highest level of detail and precision." },
                  { title: "Personalized Designs", desc: "Outfits tailored perfectly to match your style, measurements, and preferences." },
                  { title: "High-Quality Fabrics", desc: "We source only the finest fabrics for unparalleled comfort, look, and durability." },
                  { title: "On-Time Delivery", desc: "We respect your time and guarantee delivery for your special occasions." }
                ].map((item, index) => (
                  <li key={index} className="flex gap-4 p-4 rounded-2xl hover:bg-white transition-colors border border-transparent hover:border-gray-100 hover:shadow-sm">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle2 className="text-brand-blue" size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-brand-dark">{item.title}</h4>
                      <p className="text-gray-600 mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">What Our Clients Say</h2>
             <p className="text-gray-600 max-w-2xl mx-auto">Don't just take our word for it. Read about experiences from our lovely customers.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Jen", text: "The detailing on my custom blouse was absolutely phenomenal. The Aari work exceeded my expectations. Highly recommend Megas Fabric!" },
              { name: "Priya Patel", text: "Finding the perfect lehenga was stressful until I came here. The fitting was flawless on the very first try." },
              { name: "Ayesha K.", text: "Their alteration service saved my dress! Fast, professional, and very reasonably priced." }
            ].map((review, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 relative">
                <div className="absolute -top-6 left-8 bg-brand-blue text-white w-12 h-12 rounded-full flex items-center justify-center text-4xl font-serif">"</div>
                <div className="flex gap-1 text-yellow-400 mb-6 mt-4">
                  <Star fill="currentColor" size={18} />
                  <Star fill="currentColor" size={18} />
                  <Star fill="currentColor" size={18} />
                  <Star fill="currentColor" size={18} />
                  <Star fill="currentColor" size={18} />
                </div>
                <p className="text-gray-700 italic mb-8 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-4 mt-auto border-t border-gray-50 pt-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-brand-blue font-bold text-xl">
                    {review.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark">{review.name}</h4>
                    <p className="text-sm text-gray-500">Verified Customer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-blue text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80')] opacity-5 mix-blend-overlay"></div>
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Design Your Dream Outfit Today</h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed font-light max-w-2xl mx-auto">
            Experience the perfect blend of tradition and modern aesthetics with Megas Fabric. Custom tailoring, exquisite Aari work, and premium fittings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-appointment" className="bg-white text-brand-blue px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-50 shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative z-10 cursor-pointer">
              Book Appointment
            </Link>
            <Link to="/all-collections" className="bg-blue-700/50 text-white backdrop-blur px-10 py-4 rounded-full font-bold text-lg border border-blue-400/30 hover:bg-blue-600 transition-all duration-300 relative z-10 cursor-pointer">
              Browse Collections
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
