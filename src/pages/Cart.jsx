import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ArrowRight, CreditCard, ShieldCheck } from 'lucide-react';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-50 p-4">
        <div className="bg-white p-12 rounded-3xl shadow-sm text-center border border-gray-100 max-w-md w-full">
          <img src="https://images.unsplash.com/photo-1584824486509-11459466a200?auto=format&fit=crop&w=300&q=80" alt="Empty Cart" className="w-40 h-40 object-cover rounded-full mx-auto mb-6 opacity-50 grayscale" />
          <h2 className="text-2xl font-bold text-brand-dark mb-3">Your cart is empty</h2>
          <p className="text-gray-500 mb-8">Looks like you haven't added any gorgeous outfits yet.</p>
          <Link to="/all-collections" className="bg-brand-blue text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors inline-flex items-center gap-2">
            Start Shopping <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-10">Shopping Cart ({cartItems.length})</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Cart Items List */}
          <div className="lg:w-2/3 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-row gap-4 sm:gap-6 items-center sm:items-start relative">
                <div className="w-20 h-20 sm:w-32 sm:h-32 flex-shrink-0">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover rounded-xl" />
                </div>
                
                <div className="flex-1 min-w-0 pr-8 sm:pr-0">
                  <h3 className="text-base sm:text-lg font-bold text-brand-dark mb-1 truncate">{item.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-500 mb-2">{item.fabric} | Custom</p>
                  <p className="font-bold text-brand-blue text-lg sm:text-xl mb-3">₹{item.price.toLocaleString('en-IN')}</p>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex items-center bg-gray-100 rounded-lg p-1">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-gray-600 hover:bg-white rounded-md transition-colors shadow-sm">
                        <Minus size={14} />
                      </button>
                      <span className="w-8 sm:w-10 text-center font-bold text-brand-dark text-sm sm:text-base">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-gray-600 hover:bg-white rounded-md transition-colors shadow-sm">
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="absolute top-2 right-2 text-gray-400 hover:text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors"
                  title="Remove Item"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>

          {/* Setup / Summary Panel */}
          <div className="lg:w-1/3">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 sticky top-24">
              <h2 className="text-xl font-bold text-brand-dark mb-6">Order Summary</h2>
              
              <div className="space-y-4 text-gray-600 mb-6 border-b border-gray-100 pb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium text-brand-dark">₹{cartTotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Tax (18% GST)</span>
                  <span className="font-medium text-brand-dark">₹{Math.floor(cartTotal * 0.18).toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-green-600">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-8">
                <span className="text-xl font-bold text-brand-dark">Total</span>
                <span className="text-2xl font-bold text-brand-blue">₹{Math.floor(cartTotal * 1.18).toLocaleString('en-IN')}</span>
              </div>

              <button 
                onClick={handleCheckout}
                className="w-full bg-brand-blue text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 shadow-lg shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1 mb-6 flex justify-center items-center gap-2"
              >
                 <CreditCard size={20} /> Proceed to Checkout
              </button>

              <div className="bg-blue-50 p-4 rounded-xl flex items-start gap-3">
                 <ShieldCheck className="text-brand-blue shrink-0 mt-0.5" size={20} />
                 <div>
                   <h4 className="font-bold text-brand-dark text-sm">Secure Payment</h4>
                   <p className="text-xs text-gray-600 mt-1">We accept UPI, NetBanking, Credit and Debit Cards. Payments are 100% secure.</p>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Cart;
