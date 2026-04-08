import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBook = () => {
    navigate(`/book-appointment?product=${encodeURIComponent(product.name)}&category=${product.category}&fabric=${product.fabric}`);
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group flex flex-col h-full">
      <div className="h-64 overflow-hidden relative bg-gray-100">
        <img 
          src={product.img} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-brand-dark font-bold text-sm shadow-sm">
          ₹{product.price.toLocaleString('en-IN')}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-1">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-brand-dark mb-2">{product.name}</h3>
          <p className="text-gray-500 text-sm mb-4 line-clamp-2">{product.desc}</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="text-xs font-semibold bg-gray-100 text-gray-700 px-2 py-1 rounded-md">
              {product.fabric}
            </span>
            <span className="text-xs font-semibold bg-gray-100 text-gray-700 px-2 py-1 rounded-md">
              Sizes: {product.sizes.join(', ')}
            </span>
          </div>
        </div>

        <div className="space-y-3 mt-auto">
          <button 
            onClick={handleAddToCart}
            className={`w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all ${added ? 'bg-green-500 text-white' : 'bg-brand-blue text-white hover:bg-blue-700'}`}
          >
            <ShoppingCart size={18} />
            {added ? 'Added to Cart' : 'Add to Cart'}
          </button>
          
          <button 
            onClick={handleBook}
            className="w-full py-3 rounded-xl font-semibold border-2 border-brand-blue text-brand-blue hover:bg-blue-50 transition-colors"
          >
            Custom Fitting / Book Appointment
          </button>

          <div className="pt-2 text-center text-xs text-gray-400">
             Pay via UPI, Credit Card, Netbanking
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
