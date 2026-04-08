import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { User, Package, LogOut, ChevronRight, Settings, Heart } from 'lucide-react';

const Account = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
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
                  <button className="w-full flex items-center gap-3 px-4 py-3 text-brand-blue bg-blue-50 rounded-xl font-bold transition-all">
                    <User size={20} /> Profile
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl font-medium transition-all">
                    <Package size={20} /> My Orders
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl font-medium transition-all">
                    <Heart size={20} /> Wishlist
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl font-medium transition-all">
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

        </div>
      </div>
    </div>
  );
};

export default Account;
