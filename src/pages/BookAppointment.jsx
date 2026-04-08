import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Calendar, Clock, Scissors, User, Phone, Tag, Shirt } from 'lucide-react';

const BookAppointment = () => {
  const [searchParams] = useSearchParams();
  const [productName, setProductName] = useState('');
  const [fabric, setFabric] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    if (searchParams.get('product')) setProductName(searchParams.get('product'));
    if (searchParams.get('fabric')) setFabric(searchParams.get('fabric'));
    if (searchParams.get('category')) setCategory(searchParams.get('category'));
  }, [searchParams]);

  const handleBooking = (e) => {
    e.preventDefault();
    alert("Appointment booked successfully! We will contact you soon.");
  };

  return (
    <div className="min-h-screen bg-brand-light py-20 relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-100/40 rounded-l-[100px] hidden lg:block"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">Book an Appointment</h1>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">Schedule a consultation with our designers for a personalized styling and tailoring experience.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-5 sm:p-8 md:p-12 border border-gray-100 relative overflow-hidden">
          {productName && (
            <div className="bg-blue-50 border-l-4 border-brand-blue p-3 sm:p-4 mb-6 sm:mb-8 rounded-r-xl">
              <p className="text-brand-dark font-medium text-sm sm:text-base">✨ You are booking a fitting based on: <span className="font-bold text-brand-blue">{productName}</span></p>
            </div>
          )}

          <form onSubmit={handleBooking} className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
              
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <User size={16} className="text-brand-blue"/> Full Name
                </label>
                <input type="text" className="w-full px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue outline-none bg-gray-50/50" placeholder="Your full name" required />
              </div>
              
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <Phone size={16} className="text-brand-blue"/> Phone Number
                </label>
                <input type="tel" className="w-full px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue outline-none bg-gray-50/50" placeholder="+91 XXXXX XXXXX" required />
              </div>
              
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <Calendar size={16} className="text-brand-blue"/> Preferred Date
                </label>
                <input type="date" className="w-full px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue outline-none bg-gray-50/50" required />
              </div>
              
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <Clock size={16} className="text-brand-blue"/> Preferred Time Slot
                </label>
                <select className="w-full px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue outline-none bg-gray-50/50" defaultValue="" required>
                  <option value="" disabled>Select a time</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:30 AM">11:30 AM</option>
                  <option value="02:00 PM">02:00 PM</option>
                  <option value="04:00 PM">04:00 PM</option>
                  <option value="05:30 PM">05:30 PM</option>
                </select>
              </div>

               <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <Tag size={16} className="text-brand-blue"/> Fabric Preference
                </label>
                <input 
                  type="text" 
                  value={fabric} 
                  onChange={(e) => setFabric(e.target.value)}
                  className="w-full px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue outline-none bg-gray-50/50" 
                  placeholder="e.g. Silk, Georgette, Cotton" 
                />
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <Shirt size={16} className="text-brand-blue"/> Measurement / Size Guide
                </label>
                <select className="w-full px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue outline-none bg-gray-50/50" defaultValue="">
                  <option value="" disabled>Select an option</option>
                  <option value="Custom Body Measurements">I need custom body measurements taken</option>
                  <option value="Standard S">Standard Size S</option>
                  <option value="Standard M">Standard Size M</option>
                  <option value="Standard L">Standard Size L</option>
                  <option value="Standard XL">Standard Size XL</option>
                  <option value="Other">Other</option>
                </select>
              </div>

            </div>

            <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                   <Scissors size={16} className="text-brand-blue"/> Service / Category
                </label>
                <select 
                  className="w-full px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue outline-none bg-gray-50/50 text-brand-dark" 
                  value={category || ''}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                >
                  <option value="" disabled>What are you looking for?</option>
                  <option value="blouses">Blouses</option>
                  <option value="salwar-suits">Salwar Suits</option>
                  <option value="lehengas">Lehengas</option>
                  <option value="gowns">Gowns</option>
                  <option value="kurtis">Kurtis</option>
                  <option value="kidswear">Kidswear</option>
                  <option value="alterations">Alterations & Fittings</option>
                  <option value="Other">Other Custom Tailoring</option>
                </select>
            </div>

            <button type="submit" className="w-full bg-brand-blue text-white py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1">
              Confirm Booking
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default BookAppointment;
