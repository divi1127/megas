import { useState } from 'react';
import { Search, Package, MapPin, CheckCircle } from 'lucide-react';

const TrackOrder = () => {
  const [orderStatus, setOrderStatus] = useState(null);
  
  const handleTrack = (e) => {
    e.preventDefault();
    // Simulate tracking response
    setOrderStatus(true);
  };

  return (
    <div className="min-h-screen bg-brand-light py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">Track Your Order</h1>
          <p className="text-gray-600 text-lg">Stay updated on your order status in real-time.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-10 border border-gray-100">
          <form onSubmit={handleTrack} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Order ID</label>
                <input 
                  type="text" 
                  placeholder="e.g. MEGA-12345" 
                  required
                  className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="+91 XXXXX XXXXX" 
                  required
                  className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-all"
                />
              </div>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-brand-blue text-white py-4 rounded-xl font-bold hover:bg-blue-700 hover:shadow-lg shadow-blue-500/30 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Search size={20} /> Track Now
            </button>
          </form>
        </div>

        {orderStatus && (
          <div className="bg-white rounded-3xl shadow-lg p-8 border border-green-100 animate-[fadeIn_0.5s_ease-out]">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                <CheckCircle size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-dark">Order Found!</h3>
                <p className="text-gray-500 text-sm">Estimated Delivery: 3 days</p>
              </div>
            </div>
            
            <div className="relative border-l-2 border-brand-blue ml-6 space-y-8 pb-4">
              <div className="relative">
                <div className="absolute -left-[29px] top-0 w-8 h-8 bg-brand-blue text-white rounded-full flex items-center justify-center border-4 border-white shadow-sm">
                  <Package size={14} />
                </div>
                <div className="pl-8">
                  <h4 className="font-bold text-brand-dark">Order Processed</h4>
                  <p className="text-sm text-gray-500">Your outfit has been beautifully crafted and packaged.</p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -left-[29px] top-0 w-8 h-8 bg-blue-100 text-brand-blue rounded-full flex items-center justify-center border-4 border-white shadow-sm">
                  <MapPin size={14} />
                </div>
                <div className="pl-8">
                  <h4 className="font-bold text-gray-700">In Transit</h4>
                  <p className="text-sm text-gray-400">Currently on the way to your destination.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackOrder;
