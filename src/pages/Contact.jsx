import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">Get in Touch</h1>
          <p className="text-gray-600 text-lg">We'd love to hear from you. Reach out to us with your tailoring queries.</p>
          <div className="w-24 h-1 bg-brand-blue mx-auto rounded-full mt-6"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          <div className="lg:w-1/3 space-y-8">
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
               <Phone className="text-brand-blue mt-1" size={28} />
               <div>
                 <h3 className="text-lg font-bold text-brand-dark mb-1">Phone Number</h3>
                 <p className="text-gray-600">+91 98765 43210</p>
               </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
               <Mail className="text-brand-blue mt-1" size={28} />
               <div>
                 <h3 className="text-lg font-bold text-brand-dark mb-1">Email Address</h3>
                 <p className="text-gray-600">info@megasfabric.com</p>
               </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
               <MapPin className="text-brand-blue mt-1" size={28} />
               <div>
                 <h3 className="text-lg font-bold text-brand-dark mb-1">Location</h3>
                 <p className="text-gray-600">123 Fashion Street, Designer District,<br/>Your City, 400001</p>
               </div>
            </div>
          </div>

          <div className="lg:w-2/3 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <input type="text" className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue outline-none transition-all" placeholder="John Doe" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue outline-none transition-all" placeholder="+91 XXXXX XXXXX" required />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input type="email" className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue outline-none transition-all" placeholder="john@example.com" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                <textarea rows="5" className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue outline-none transition-all resize-none" placeholder="How can we help you?" required></textarea>
              </div>
              <button className="w-full bg-brand-blue text-white py-4 rounded-xl font-bold hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex justify-center items-center gap-2">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
          
        </div>

      </div>
    </div>
  );
};

export default Contact;
