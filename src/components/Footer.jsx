import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Scissors } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          
          <div className="space-y-4 text-center sm:text-left flex flex-col items-center sm:items-start">
            <Link to="/" className="flex items-center gap-2 group mb-4">
              <div className="bg-brand-blue text-white p-2 rounded-lg">
                 <Scissors size={20} />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">Megas Fabric</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Where tradition meets contemporary style. We specialize in custom tailoring, Aari art, and bridal styling designed just for you.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center font-bold text-xs hover:bg-brand-blue hover:text-white transition-all transform hover:scale-110">
                IG
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center font-bold text-xs hover:bg-brand-blue hover:text-white transition-all transform hover:scale-110">
                FB
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center font-bold text-xs hover:bg-brand-blue hover:text-white transition-all transform hover:scale-110">
                TW
              </a>
            </div>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-white font-semibold mb-6 text-lg tracking-wide">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="hover:text-brand-blue transition-colors">About Us</Link></li>
              <li><Link to="/all-collections" className="hover:text-brand-blue transition-colors">Our Services</Link></li>
              <li><Link to="/book-appointment" className="hover:text-brand-blue transition-colors">Book Appointment</Link></li>
              <li><Link to="/contact" className="hover:text-brand-blue transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-white font-semibold mb-6 text-lg tracking-wide">Helpful Links</h3>
            <ul className="space-y-3">
              <li><Link to="/track-order" className="hover:text-brand-blue transition-colors">Track Your Order</Link></li>
              <li><Link to="/shipping-policy" className="hover:text-brand-blue transition-colors">Shipping Policy</Link></li>
              <li><Link to="/refund-policy" className="hover:text-brand-blue transition-colors">Refund & Return Policy</Link></li>
            </ul>
          </div>

          <div className="text-center sm:text-left flex flex-col items-center sm:items-start">
            <h3 className="text-white font-semibold mb-6 text-lg tracking-wide">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 justify-center sm:justify-start">
                <MapPin className="text-brand-blue shrink-0 mt-1" size={18} />
                <span className="text-sm">123 Fashion Street, Designer District, Your City, 400001</span>
              </li>
              <li className="flex items-center gap-3 justify-center sm:justify-start">
                <Phone className="text-brand-blue shrink-0" size={18} />
                <span className="text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 justify-center sm:justify-start">
                <Mail className="text-brand-blue shrink-0" size={18} />
                <span className="text-sm">info@megasfabric.com</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} Megas Fabric. All rights reserved.</p>
          <p className="mt-2 md:mt-0 font-medium">Crafting Elegance, Stitch by Stitch.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
