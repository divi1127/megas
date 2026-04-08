import { useState, useMemo } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { Filter, SlidersHorizontal, ChevronDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categoriesList } from '../data/products';

const ShopCollection = () => {
  const { categoryId } = useParams();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';

  const [sortOrder, setSortOrder] = useState('featured');
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  // Derive Category Name
  const categoryDetails = categoriesList.find(c => c.id === categoryId);
  const title = categoryDetails ? categoryDetails.name : (searchQuery ? `Search Results for "${searchQuery}"` : 'All Collections');

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    let result = products;

    // Filter by Category if provided
    if (categoryId) {
      result = result.filter(p => p.category === categoryId);
    }

    // Filter by Search Query
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.desc.toLowerCase().includes(q) ||
        p.fabric.toLowerCase().includes(q) ||
        p.category.toLowerCase().replace('-', ' ').includes(q)
      );
    }

    // Filter by Size (if any selected)
    if (selectedSizes.length > 0) {
      result = result.filter(p => p.sizes.some(size => selectedSizes.includes(size)));
    }

    // Sort
    if (sortOrder === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [categoryId, searchQuery, selectedSizes, sortOrder]);

  const toggleSize = (size) => {
    setSelectedSizes(prev => 
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
  };

  const allSizes = ['S', 'M', 'L', 'XL', 'XXL', 'Custom', 'Standard'];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Controls */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-brand-dark mb-6">{title}</h1>
          <div className="h-1 w-20 bg-brand-blue rounded-full mb-8"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 font-medium text-gray-700 bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors md:hidden"
            >
              <Filter size={18} /> Filters
            </button>
            <p className="text-gray-500 font-medium">Showing {filteredProducts.length} Results</p>
            
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray-500">Sort By:</span>
              <div className="relative">
                <select 
                  value={sortOrder} 
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="appearance-none bg-gray-50 border border-gray-200 text-brand-dark py-2 pl-4 pr-10 rounded-lg outline-none focus:ring-2 focus:ring-brand-blue/50 cursor-pointer font-medium"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Mobile Filter Overlay */}
          {showFilters && (
            <div className="fixed inset-0 z-[60] lg:hidden">
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowFilters(false)}></div>
              <div className="absolute right-0 top-0 h-full w-[80%] max-w-sm bg-white p-6 shadow-2xl animate-[slideInRight_0.3s_ease-out]">
                <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
                  <div className="flex items-center gap-2 text-brand-dark">
                    <SlidersHorizontal size={20} />
                    <h2 className="text-lg font-bold">Filters</h2>
                  </div>
                  <button onClick={() => setShowFilters(false)} className="text-gray-400 p-1">
                    <X size={24} />
                  </button>
                </div>

                <div className="mb-8">
                  <h3 className="font-bold text-gray-800 mb-4 text-sm uppercase tracking-wider">Size Filter</h3>
                  <div className="flex flex-wrap gap-2">
                    {allSizes.map(size => (
                      <button
                        key={size}
                        onClick={() => toggleSize(size)}
                        className={`px-3 py-2 rounded-lg text-sm font-medium border transition-colors ${
                          selectedSizes.includes(size) 
                          ? 'bg-brand-blue text-white border-brand-blue' 
                          : 'bg-white text-gray-600 border-gray-200'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => { setSelectedSizes([]); setShowFilters(false); }}
                  className="w-full py-3 bg-brand-blue text-white rounded-xl font-bold mt-auto"
                >
                  Apply & Close
                </button>
              </div>
            </div>
          )}

          {/* Desktop Sidebar / Filters */}
          <div className="hidden lg:block lg:w-1/4">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 sticky top-24">
              <div className="flex items-center gap-2 mb-6 text-brand-dark border-b border-gray-100 pb-4">
                <SlidersHorizontal size={20} />
                <h2 className="text-lg font-bold">Filters</h2>
              </div>
              
              <div className="mb-8">
                <h3 className="font-bold text-gray-800 mb-4 text-sm uppercase tracking-wider">Size Filter</h3>
                <div className="flex flex-wrap gap-2">
                  {allSizes.map(size => (
                    <button
                      key={size}
                      onClick={() => toggleSize(size)}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors ${
                        selectedSizes.includes(size) 
                        ? 'bg-brand-blue text-white border-brand-blue' 
                        : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {selectedSizes.length > 0 && (
                <button 
                  onClick={() => setSelectedSizes([])}
                  className="w-full py-2 bg-gray-100 text-gray-600 rounded-xl font-medium hover:bg-gray-200 transition-colors text-sm"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>

          {/* Product Grid */}
          <div className="lg:w-3/4">
             {filteredProducts.length === 0 ? (
             <div className="bg-white rounded-3xl p-10 md:p-16 text-center border border-gray-100 shadow-sm flex flex-col items-center w-full">
                 <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 mb-4 animate-bounce">
                   <Filter size={32} />
                 </div>
                 <h3 className="text-2xl font-bold text-brand-dark mb-2">No products found</h3>
                 <p className="text-gray-500">Try adjusting your filters or search query to find what you're looking for.</p>
                 <button 
                  onClick={() => { setSelectedSizes([]); setSortOrder('featured'); window.location.href='/all-collections'; }}
                  className="mt-6 px-6 py-3 bg-brand-blue text-white rounded-xl font-bold hover:bg-blue-700 transition"
                 >
                   Reset Everything
                 </button>
               </div>
             ) : (
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 animate-[fadeIn_0.4s_ease-out]">
                 {filteredProducts.map((product, idx) => (
                   <div key={product.id} className="h-full" style={{ animationDelay: `${idx * 0.05}s` }}>
                     <ProductCard product={product} />
                   </div>
                 ))}
               </div>
             )}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ShopCollection;
