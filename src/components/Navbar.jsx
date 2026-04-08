import { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Scissors, ShoppingCart, Search, ChevronDown, User, LogIn, LogOut } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { categoriesList } from '../data/products';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const { cartCount } = useCart();
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const userRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      if (userRef.current && !userRef.current.contains(event.target)) {
        setUserDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSearch = (e) => {
    e.preventDefault();
    if(searchQuery.trim()) {
      navigate(`/all-collections?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      setIsOpen(false);
    }
  };

  const handleLogout = () => {
    logout();
    setUserDropdown(false);
    setIsOpen(false);
    navigate('/');
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100 transition-all font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 md:py-0">
        <div className="flex justify-between h-16 md:h-20 items-center">
          
          <div className="flex flex-1 items-center gap-4 md:gap-6">
            <Link to="/" className="flex items-center gap-2 group shrink-0">
              <div className="bg-brand-blue text-white p-2 rounded-lg group-hover:bg-blue-700 transition duration-300 shadow-sm">
                 <Scissors size={20} className="md:w-6 md:h-6" />
              </div>
              <span className="font-bold text-xl md:text-2xl tracking-tight text-brand-dark group-hover:text-brand-blue transition duration-300">Megas</span>
            </Link>

            <form onSubmit={handleSearch} className="hidden lg:flex relative w-full max-w-sm mr-4">
              <input
                type="text"
                placeholder="Search outfits, styles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-50 pl-4 pr-10 py-2.5 rounded-full text-sm outline-none border border-gray-200 focus:border-brand-blue focus:bg-white focus:ring-4 focus:ring-blue-50 transition-all"
              />
              <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-brand-blue p-1">
                <Search size={18} />
              </button>
            </form>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-[15px] font-medium text-gray-600 hover:text-brand-blue transition-colors">Home</Link>
            
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1 text-[15px] font-medium text-gray-600 hover:text-brand-blue transition-colors"
              >
                Categories <ChevronDown size={14} className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {dropdownOpen && (
                <div className="absolute top-10 -left-10 w-64 bg-white shadow-2xl border border-gray-100 rounded-2xl py-3 z-50 grid grid-cols-1 overflow-hidden animate-[fadeIn_0.2s_ease-out]">
                  <Link to="/all-collections" onClick={() => setDropdownOpen(false)} className="px-5 py-2 hover:bg-blue-50 text-brand-blue font-bold text-sm">View All Collections</Link>
                  <div className="h-px bg-gray-100 my-1"></div>
                  {categoriesList.map(cat => (
                    <Link 
                      key={cat.id} 
                      to={`/category/${cat.id}`} 
                      onClick={() => setDropdownOpen(false)}
                      className="px-5 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-blue transition-colors"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/about" className="text-[15px] font-medium text-gray-600 hover:text-brand-blue transition-colors">About</Link>
          </div>

          <div className="flex items-center justify-end gap-2 md:gap-4 flex-1">
            {/* Desktop User Menu */}
            <div className="hidden md:block relative" ref={userRef}>
              {user ? (
                <>
                  <button 
                    onClick={() => setUserDropdown(!userDropdown)}
                    className="flex items-center gap-2 p-1.5 rounded-full hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100"
                  >
                    <div className="w-9 h-9 rounded-full bg-brand-light flex items-center justify-center text-brand-blue font-bold text-sm border border-blue-100">
                      {user.name[0]}
                    </div>
                  </button>
                  {userDropdown && (
                    <div className="absolute top-12 right-0 w-52 bg-white shadow-2xl border border-gray-100 rounded-2xl py-2 z-50 animate-[fadeIn_0.2s_ease-out]">
                      <div className="px-4 py-3 border-b border-gray-50 bg-gray-50/50">
                        <p className="text-[10px] font-bold text-gray-400 mb-1 uppercase tracking-widest">Account Logged In</p>
                        <p className="text-sm font-bold text-brand-dark truncate">{user.name}</p>
                      </div>
                      <Link to="/account" onClick={() => setUserDropdown(false)} className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-blue transition-colors">
                        <User size={16} className="text-gray-400" /> My Profile
                      </Link>
                      <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors">
                        <LogOut size={16} /> Logout
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <Link to="/login" className="flex items-center gap-2 text-[15px] font-medium text-gray-600 hover:text-brand-blue px-4 py-2 rounded-full hover:bg-gray-50 transition-all">
                  <LogIn size={18} /> Login
                </Link>
              )}
            </div>

            <Link to="/cart" className="relative p-2 text-gray-600 hover:text-brand-blue transition-colors">
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white shadow-sm">
                  {cartCount}
                </span>
              )}
            </Link>
            
            <Link 
              to="/book-appointment" 
              className="hidden lg:block bg-brand-blue text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
            >
              Book Slot
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-brand-dark hover:text-brand-blue p-2 transition-colors"
              aria-label="Toggle Menu"
            >
              <Menu size={28} />
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Overlay - Robust Fixed Version */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-[100] bg-white flex flex-col animate-[fadeIn_0.2s_ease-out]">
          {/* Mobile Menu Header */}
          <div className="flex justify-between items-center h-16 md:h-20 px-6 border-b border-gray-100 bg-white">
            <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
              <div className="bg-brand-blue text-white p-1.5 rounded-lg shadow-sm">
                 <Scissors size={20} />
              </div>
              <span className="font-bold text-xl tracking-tight text-brand-dark">Megas</span>
            </Link>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-gray-400 hover:text-brand-blue p-2 flex items-center gap-1 font-bold text-sm"
              aria-label="Close Menu"
            >
              Close <X size={28} strokeWidth={2.5} />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto bg-white">
            <div className="px-6 py-8 space-y-8">
              {/* Search in Menu */}
              <form onSubmit={handleSearch} className="relative w-full">
                <input
                  type="text"
                  placeholder="Search fashions, products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-gray-50 pl-4 pr-12 py-4 rounded-2xl border border-gray-200 outline-none focus:border-brand-blue focus:bg-white focus:ring-4 focus:ring-blue-50 transition-all"
                />
                <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <Search size={22} />
                </button>
              </form>
              
              {/* Account Links */}
              <div className="space-y-4">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] pl-1">Personal Account</div>
                {user ? (
                  <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold text-lg">
                        {user.name[0]}
                      </div>
                      <div className="min-w-0">
                        <p className="font-bold text-brand-dark truncate">{user.name}</p>
                        <p className="text-xs text-gray-500 truncate">{user.email}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <Link to="/account" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2 py-3 bg-white text-brand-blue rounded-xl font-bold text-sm border border-blue-50 shadow-sm">
                        <User size={16} /> Profile
                      </Link>
                      <button onClick={handleLogout} className="flex items-center justify-center gap-2 py-3 bg-red-50 text-red-500 rounded-xl font-bold text-sm transition-colors">
                        <LogOut size={16} /> Logout
                      </button>
                    </div>
                  </div>
                ) : (
                  <Link to="/login" onClick={() => setIsOpen(false)} className="flex items-center justify-between w-full p-5 bg-blue-50/50 hover:bg-blue-50 rounded-2xl border border-blue-100 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-blue shadow-sm">
                        <LogIn size={20} />
                      </div>
                      <div className="text-left">
                        <p className="font-bold text-brand-dark">Join Megas Fabric</p>
                        <p className="text-xs text-gray-500">Login or Create Account</p>
                      </div>
                    </div>
                    <ChevronDown size={20} className="-rotate-90 text-gray-400" />
                  </Link>
                )}
              </div>

              {/* Main Navigation */}
              <div className="space-y-4">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] pl-1">Navigation</div>
                <div className="grid grid-cols-1 gap-2">
                  <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors group">
                    <span className="text-lg font-bold text-gray-700 group-hover:text-brand-blue">Home</span>
                    <ChevronDown size={20} className="-rotate-90 text-gray-300" />
                  </Link>
                  <Link to="/about" onClick={() => setIsOpen(false)} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors group">
                    <span className="text-lg font-bold text-gray-700 group-hover:text-brand-blue">About Us</span>
                    <ChevronDown size={20} className="-rotate-90 text-gray-300" />
                  </Link>
                  <Link to="/contact" onClick={() => setIsOpen(false)} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors group">
                    <span className="text-lg font-bold text-gray-700 group-hover:text-brand-blue">Contact</span>
                    <ChevronDown size={20} className="-rotate-90 text-gray-300" />
                  </Link>
                </div>
              </div>
              
              {/* Product Categories */}
              <div className="space-y-4 pb-24">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] pl-1">Shop by Category</div>
                <div className="grid grid-cols-2 gap-3">
                  <Link to="/all-collections" onClick={() => setIsOpen(false)} className="col-span-2 p-4 bg-brand-light text-brand-blue font-bold rounded-xl text-center border border-blue-100">
                    View All Collections
                  </Link>
                  {categoriesList.map(cat => (
                     <Link key={cat.id} to={`/category/${cat.id}`} onClick={() => setIsOpen(false)} className="p-4 bg-white border border-gray-100 hover:border-brand-blue rounded-xl text-center text-sm font-bold text-gray-600 transition-all hover:shadow-sm">
                       {cat.name}
                     </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Fixed Footer Buttons in Menu */}
          <div className="p-6 bg-white border-t border-gray-100 flex gap-4 shadow-[0_-10px_20px_rgba(0,0,0,0.02)]">
            <Link to="/book-appointment" onClick={() => setIsOpen(false)} className="flex-1 text-center bg-brand-blue text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-blue-500/20 active:scale-95 transition-all">
              Book Appointment
            </Link>
            <Link to="/cart" onClick={() => setIsOpen(false)} className="group flex items-center justify-center gap-2 flex-1 text-center bg-gray-100 text-brand-dark py-4 rounded-xl font-bold text-lg hover:bg-gray-200 transition-all">
              <ShoppingCart size={18} className="text-brand-blue" /> Cart
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
