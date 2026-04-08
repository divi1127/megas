import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { ShieldCheck, MapPin, CreditCard, ChevronLeft, CheckCircle2, ShoppingBag } from 'lucide-react';

const Checkout = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: user?.name || '',
    email: user?.email || '',
    phone: '',
    address: '',
    city: '',
    zip: '',
    paymentMethod: 'upi'
  });

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setStep(3);
    setTimeout(() => {
      clearCart();
    }, 500);
  };

  if (cartItems.length === 0 && step !== 3) {
    navigate('/cart');
    return null;
  }

  if (step === 3) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-10 text-center border border-gray-100 flex flex-col items-center">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6 animate-bounce">
            <CheckCircle2 size={56} />
          </div>
          <h2 className="text-3xl font-bold text-brand-dark mb-4">Order Placed!</h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Thank you for shopping with Megas Fabric. Your order number is <span className="font-bold text-brand-blue">#MEG-{Math.floor(Math.random() * 100000)}</span>. 
            We've sent a confirmation to your email.
          </p>
          <div className="space-y-4 w-full">
            <Link to="/account" className="block w-full bg-brand-blue text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition">
              View Order Status
            </Link>
            <Link to="/" className="block w-full bg-gray-100 text-gray-700 py-4 rounded-xl font-bold hover:bg-gray-200 transition">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const tax = Math.floor(cartTotal * 0.18);
  const finalTotal = cartTotal + tax;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center gap-4 mb-10">
          <Link to="/cart" className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center text-gray-600 hover:text-brand-blue transition-colors border border-gray-100">
            <ChevronLeft size={24} />
          </Link>
          <h1 className="text-3xl font-bold text-brand-dark">Checkout</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Form */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
              
              <form onSubmit={handlePlaceOrder}>
                {/* Shipping Details */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-6 border-b border-gray-50 pb-4">
                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-brand-blue">
                      <MapPin size={22} />
                    </div>
                    <h2 className="text-xl font-bold text-brand-dark">Shipping Information</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                      <input 
                        type="text" 
                        required 
                        className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-brand-blue outline-none bg-gray-50/50"
                        value={formData.fullName}
                        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        required 
                        className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-brand-blue outline-none bg-gray-50/50"
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Full Address</label>
                      <textarea 
                        required 
                        rows="3"
                        className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-brand-blue outline-none bg-gray-50/50"
                        value={formData.address}
                        onChange={(e) => setFormData({...formData, address: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">City</label>
                      <input 
                        type="text" 
                        required 
                        className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-brand-blue outline-none bg-gray-50/50"
                        value={formData.city}
                        onChange={(e) => setFormData({...formData, city: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">PIN Code</label>
                      <input 
                        type="text" 
                        required 
                        className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-brand-blue outline-none bg-gray-50/50"
                        value={formData.zip}
                        onChange={(e) => setFormData({...formData, zip: e.target.value})}
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Options */}
                <div>
                  <div className="flex items-center gap-3 mb-6 border-b border-gray-50 pb-4">
                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-brand-blue">
                      <CreditCard size={22} />
                    </div>
                    <h2 className="text-xl font-bold text-brand-dark">Payment Method</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    {[
                      { id: 'upi', label: 'UPI / PhonePe', icon: '📱' },
                      { id: 'card', label: 'Card Payment', icon: '💳' },
                      { id: 'cod', label: 'Cash on Delivery', icon: '💵' }
                    ].map((method) => (
                      <button
                        key={method.id}
                        type="button"
                        onClick={() => setFormData({...formData, paymentMethod: method.id})}
                        className={`p-4 rounded-2xl border-2 flex flex-col items-center gap-2 transition-all ${
                          formData.paymentMethod === method.id 
                          ? 'border-brand-blue bg-blue-50 text-brand-blue shadow-md scale-[1.02]' 
                          : 'border-gray-100 hover:border-gray-300 text-gray-600'
                        }`}
                      >
                        <span className="text-2xl">{method.icon}</span>
                        <span className="font-bold text-sm">{method.label}</span>
                      </button>
                    ))}
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-brand-blue text-white py-5 rounded-2xl font-bold text-xl hover:bg-blue-700 shadow-xl shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3"
                  >
                     Place Your Order (₹{finalTotal.toLocaleString('en-IN')})
                  </button>
                  <div className="flex justify-center items-center gap-2 mt-6 text-gray-400 text-sm font-medium">
                    <ShieldCheck size={18} className="text-green-500" /> 100% Encrypted & Secure checkout
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden sticky top-24">
              <div className="p-6 bg-gray-50 border-b border-gray-100 flex items-center gap-2">
                <ShoppingBag size={20} className="text-brand-blue" />
                <h3 className="font-bold text-brand-dark">Review Items ({cartItems.length})</h3>
              </div>
              
              <div className="p-6">
                <div className="space-y-4 mb-6 max-h-[40vh] overflow-y-auto pr-2">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4 items-center">
                      <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-gray-100">
                        <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-bold text-sm text-brand-dark truncate">{item.name}</h4>
                        <p className="text-xs text-gray-500">{item.quantity} x ₹{item.price.toLocaleString('en-IN')}</p>
                      </div>
                      <div className="ml-auto font-bold text-sm text-brand-dark">
                        ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-4 border-t border-gray-100 pt-6">
                  <div className="flex justify-between text-gray-500 text-sm">
                    <span>Subtotal</span>
                    <span className="font-bold text-brand-dark">₹{cartTotal.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-gray-500 text-sm">
                    <span>GST (18%)</span>
                    <span className="font-bold text-brand-dark">₹{tax.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-gray-500 text-sm">
                    <span>Shipping</span>
                    <span className="font-bold text-green-600">FREE</span>
                  </div>
                  <div className="h-px bg-gray-100 my-2"></div>
                  <div className="flex justify-between items-center bg-blue-50/50 p-4 rounded-xl">
                    <span className="font-bold text-brand-dark">Total Payable</span>
                    <span className="text-2xl font-black text-brand-blue">₹{finalTotal.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Checkout;
