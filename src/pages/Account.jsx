import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { User, Package, LogOut, ChevronRight, Settings, Heart, Save, MapPin, Phone, Mail } from 'lucide-react';

const Account = () => {
  const { user, logout, updateUser } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Form states
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    address: {
      street: user?.address?.street || '',
      city: user?.address?.city || '',
      state: user?.address?.state || '',
      zip: user?.address?.zip || '',
      country: user?.address?.country || 'India'
    }
  });

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    setIsSaving(true);
    updateUser(formData);
    setTimeout(() => {
      setIsSaving(false);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    }, 800);
  };

  const handleAddressChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      address: {
        ...prev.address,
        [field]: value
      }
    }));
  };

  if (!user) {
    navigate('/login');
    return null;
  }

  const mockOrders = [
    { id: 'ORD-1234', date: '2026-03-15', status: 'Delivered', total: 4500, items: 2 },
    { id: 'ORD-5678', date: '2026-03-28', status: 'Processing', total: 12500, items: 1 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar */}
          <div className="md:w-1/3 lg:w-1/4">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-8 text-center bg-brand-light">
                <div className="w-24 h-24 bg-brand-blue rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold border-4 border-white shadow-lg">
                  {user.name[0]}
                </div>
                <h2 className="text-xl font-bold text-brand-dark">{user.name}</h2>
                <p className="text-gray-500 text-sm">{user.email}</p>
              </div>
              
              <div className="p-4 border-t border-gray-100">
                <div className="space-y-2">
                  <button 
                    onClick={() => setActiveTab('profile')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${
                    activeTab === 'profile' ? 'text-brand-blue bg-blue-50' : 'text-gray-600 hover:bg-gray-50'
                  }`}>
                    <User size={20} /> Profile
                  </button>
                  <button 
                    onClick={() => setActiveTab('orders')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${
                    activeTab === 'orders' ? 'text-brand-blue bg-blue-50' : 'text-gray-600 hover:bg-gray-50'
                  }`}>
                    <Package size={20} /> My Orders
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl font-medium transition-all">
                    <Heart size={20} /> Wishlist
                  </button>
                  <button 
                    onClick={() => setActiveTab('profile')}
                    className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl font-medium transition-all">
                    <Settings size={20} /> Settings
                  </button>
                </div>
                
                <div className="h-px bg-gray-100 my-4 mx-2"></div>
                
                <button 
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl font-medium transition-all"
                >
                  <LogOut size={20} /> Sign Out
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:flex-1 space-y-8">
            {activeTab === 'profile' ? (
              <div className="space-y-8 animate-in fade-in duration-500">
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                  <h1 className="text-2xl md:text-3xl font-bold text-brand-dark mb-2">Profile Settings</h1>
                  <p className="text-gray-500">Update your personal information and shipping address.</p>
                </div>

                <form onSubmit={handleUpdateProfile} className="space-y-6">
                  {/* Basic Info */}
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-brand-dark mb-6 flex items-center gap-2">
                      <User size={20} className="text-brand-blue" /> Personal Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                        <input
                          type="text"
                          className="w-full px-5 py-3 rounded-xl border border-gray-200 outline-none focus:border-brand-blue focus:ring-4 focus:ring-blue-50 transition-all bg-gray-50/50"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                        <input
                          type="email"
                          className="w-full px-5 py-3 rounded-xl border border-gray-200 outline-none focus:border-brand-blue focus:ring-4 focus:ring-blue-50 transition-all bg-gray-50/50"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                          <input
                            type="tel"
                            placeholder="Your mobile number"
                            className="w-full pl-12 pr-5 py-3 rounded-xl border border-gray-200 outline-none focus:border-brand-blue focus:ring-4 focus:ring-blue-50 transition-all bg-gray-50/50"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-brand-dark mb-6 flex items-center gap-2">
                      <MapPin size={20} className="text-brand-blue" /> Shipping Address
                    </h3>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Street Address</label>
                        <input
                          type="text"
                          placeholder="House No., Street name"
                          className="w-full px-5 py-3 rounded-xl border border-gray-200 outline-none focus:border-brand-blue focus:ring-4 focus:ring-blue-50 transition-all bg-gray-50/50"
                          value={formData.address.street}
                          onChange={(e) => handleAddressChange('street', e.target.value)}
                        />
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">City</label>
                          <input
                            type="text"
                            className="w-full px-5 py-3 rounded-xl border border-gray-200 outline-none focus:border-brand-blue focus:ring-4 focus:ring-blue-50 transition-all bg-gray-50/50"
                            value={formData.address.city}
                            onChange={(e) => handleAddressChange('city', e.target.value)}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">State</label>
                          <input
                            type="text"
                            className="w-full px-5 py-3 rounded-xl border border-gray-200 outline-none focus:border-brand-blue focus:ring-4 focus:ring-blue-50 transition-all bg-gray-50/50"
                            value={formData.address.state}
                            onChange={(e) => handleAddressChange('state', e.target.value)}
                          />
                        </div>
                        <div className="col-span-2 md:col-span-1">
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Zip Code</label>
                          <input
                            type="text"
                            className="w-full px-5 py-3 rounded-xl border border-gray-200 outline-none focus:border-brand-blue focus:ring-4 focus:ring-blue-50 transition-all bg-gray-50/50"
                            value={formData.address.zip}
                            onChange={(e) => handleAddressChange('zip', e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    {saveSuccess && (
                      <span className="text-green-600 font-bold flex items-center gap-2 animate-bounce">
                        Profile updated successfully!
                      </span>
                    )}
                    <button
                      type="submit"
                      disabled={isSaving}
                      className="ml-auto bg-brand-blue text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-700 shadow-xl shadow-blue-500/20 transition-all flex items-center gap-2 disabled:opacity-50"
                    >
                      {isSaving ? 'Saving...' : <><Save size={20} /> Save Changes</>}
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="space-y-8 animate-in fade-in duration-500">
                {/* Welcome Section */}
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                  <h1 className="text-2xl md:text-3xl font-bold text-brand-dark mb-2">Hello, {user.name.split(' ')[0]}!</h1>
                  <p className="text-gray-500">Welcome to your dashboard. Here you can track your recent orders and manage your profile settings.</p>
                </div>

                {/* Recent Orders */}
                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                    <h3 className="font-bold text-brand-dark text-lg">Recent Orders</h3>
                    <Link to="/track-order" className="text-brand-blue text-sm font-bold hover:underline">View All</Link>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                        <tr>
                          <th className="px-6 py-4 font-semibold">Order ID</th>
                          <th className="px-6 py-4 font-semibold">Date</th>
                          <th className="px-6 py-4 font-semibold">Status</th>
                          <th className="px-6 py-4 font-semibold">Total</th>
                          <th className="px-6 py-4 font-semibold"></th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {mockOrders.map((order) => (
                          <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4 font-bold text-gray-700">{order.id}</td>
                            <td className="px-6 py-4 text-gray-600 font-medium">{order.date}</td>
                            <td className="px-6 py-4">
                              <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                                order.status === 'Delivered' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                              }`}>
                                {order.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 font-bold text-brand-dark">₹{order.total.toLocaleString('en-IN')}</td>
                            <td className="px-6 py-4">
                              <button className="text-gray-400 hover:text-brand-blue">
                                <ChevronRight size={20} />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Account;
