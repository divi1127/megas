import { AlertCircle, Clock, Ban } from 'lucide-react';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-10 md:p-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">Refund & Return Policy</h1>
            <p className="text-gray-600 text-lg leading-relaxed bg-red-50 p-6 rounded-2xl border border-red-100 font-medium">
              As all products are custom-made, returns are not accepted unless there is a defect or damage.
            </p>
          </div>

          <div className="space-y-10">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-brand-light rounded-2xl flex items-center justify-center text-brand-blue">
                  <Clock size={28} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-dark mb-2">Report Within 48 Hours</h3>
                <p className="text-gray-600">If you find any defect or damage upon receiving your dress, you must report it within 48 hours of delivery with photographic evidence.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-brand-light rounded-2xl flex items-center justify-center text-brand-blue">
                  <AlertCircle size={28} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-dark mb-2">Refund & Alteration</h3>
                <p className="text-gray-600">We offer free alterations or a full refund for valid cases of defective craftsmanship. The garment must remain unworn and unwashed.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-brand-light rounded-2xl flex items-center justify-center text-brand-blue">
                  <Ban size={28} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-dark mb-2">No Cancellation After Production Starts</h3>
                <p className="text-gray-600">Once your fabric is cut and production begins, we do not accept cancellations or refund requests for change of mind.</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default RefundPolicy;
