import { Shield, Scissors, Star } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Header section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
         <img src="https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?auto=format&fit=crop&w=1920&q=80" alt="Sewing Machine" className="absolute inset-0 w-full h-full object-cover opacity-90" />
         <div className="absolute inset-0 bg-brand-dark/60"></div>
         <div className="relative z-10 text-center px-4">
           <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">About Megas Fabric</h1>
           <div className="w-24 h-1 bg-brand-blue mx-auto rounded-full"></div>
         </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="lg:w-1/3">
              <img src="https://i.pinimg.com/1200x/6c/8b/a1/6c8ba16f94abbf6527d20a97f2f0ea66.jpg" alt="Tailor working" className="rounded-3xl shadow-2xl" />
            </div>

            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">Our Story & Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Megas Fabric is a premium tailoring and design studio specializing in custom stitching, Aari embroidery, and bridal fashion. 
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our mission is to blend traditional craftsmanship with modern elegance, delivering unique designs tailored to every individual. We believe that what you wear is a reflection of who you are, and we put intricate care into every fabric we touch.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                <div className="flex gap-4">
                  <div className="mt-1 bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Scissors className="text-brand-blue" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark">Precision</h4>
                    <p className="text-sm text-gray-500">Every cut and stitch is perfect.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="text-brand-blue" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark">Quality</h4>
                    <p className="text-sm text-gray-500">Only the finest fabrics used.</p>
                  </div>
                </div>
                <div className="flex gap-4 sm:col-span-2">
                  <div className="mt-1 bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="text-brand-blue" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark">Trust</h4>
                    <p className="text-sm text-gray-500">Timely delivery and unparalleled customer support throughout your styling journey.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
