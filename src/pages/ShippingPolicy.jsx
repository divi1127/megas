import { Truck, Map, ShieldCheck } from 'lucide-react';

const ShippingPolicy = () => {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-6">
            <Truck size={40} className="text-brand-blue" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">Shipping Policy</h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            We ensure safe and timely delivery of all our products. Orders are processed within 3–5 business days and delivered within 7–10 working days depending on location.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-50 p-8 rounded-3xl text-center border border-gray-100 hover:shadow-md transition-all">
            <Map className="text-brand-blue mx-auto mb-4" size={32} />
            <h3 className="font-bold text-lg mb-2">Pan India Shipping</h3>
            <p className="text-gray-500 text-sm">We deliver across all states and remote locations in India.</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-3xl text-center border border-gray-100 hover:shadow-md transition-all">
            <Truck className="text-brand-blue mx-auto mb-4" size={32} />
            <h3 className="font-bold text-lg mb-2">Real-Time Tracking</h3>
            <p className="text-gray-500 text-sm">Tracking details are provided instantly upon dispatch.</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-3xl text-center border border-gray-100 hover:shadow-md transition-all">
            <ShieldCheck className="text-brand-blue mx-auto mb-4" size={32} />
            <h3 className="font-bold text-lg mb-2">Secure Packaging</h3>
            <p className="text-gray-500 text-sm">All garments are packed safely to prevent any damage.</p>
          </div>
        </div>
        
        <div className="prose prose-blue max-w-none text-gray-700 text-lg">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Detailed Processing Details</h2>
          <p className="mb-6">
            Because all Megas Fabric apparel involves custom tailoring and intricate work such as Aari embroidery, processing times differ from standard ready-made clothing. We dedicate ourselves strictly to your requirements. 
          </p>
          <ul className="list-disc pl-6 space-y-3 mb-8">
            <li>Standard stitch orders: Processing takes 3 to 5 business days.</li>
            <li>Intricate embellishments or heavy bridal wear: Usually require 7 to 15 business days mapping the high level of detail needed.</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default ShippingPolicy;
