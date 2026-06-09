import React from 'react';

const BulkSmsPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen relative">

            <div className="relative w-full h-64 mt-16">
            <img
                // src="../../public/bulksmsb.jpeg"
                src="/img/bulksmsb.jpeg"
                alt="SMS Communication Banner"
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center">
              
            </div>
            </div>


      <div className="max-w-4xl mx-auto px-4 py-10 space-y-10">
        
      
        <div>
          <h2 className="text-2xl font-semibold text-primary mb-4">Reliable Bulk SMS Service in Pune</h2>
          <p className="text-gray-700 leading-relaxed">
            Myospaz Software Technologies is one of the leading bulk SMS providers in Pune. With over 70 lakh SMS delivered, we are renowned for our reliable and uninterrupted service. One of our key features is the unlimited validity of SMS credits.
          </p>
        </div>

    
        <div className="bg-green-100 border-l-4 border-green-500 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-green-700 mb-2">100% SMS Delivery Guarantee</h3>
          <p className="text-gray-700">
            We have achieved almost 100% results in delivering messages to target audiences. Clients receive their own control panel to manage accounts and view delivery reports in real time.
          </p>
        </div>

      
        <div>
          <h3 className="text-xl font-semibold text-primary mb-3">Promotional & Transactional Messages</h3>
          <p className="text-gray-700 leading-relaxed mb-2">
            We offer clarity between Transactional and Promotional messages. Customers can choose between three delivery categories: 70–80%, 80–90%, and 90–100% delivery rates, each with assured performance.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our team also provides special guidelines to ensure legal compliance while delivering SMS.
          </p>
        </div>


        <div className="bg-blue-100 border-l-4 border-blue-500 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Free Demo Bulk SMS</h3>
          <p className="text-gray-700">
            We offer a free demo account credited with Transactional SMS so potential clients can try out our services with confidence.
          </p>
        </div>

      
        <div>
          <h3 className="text-xl font-semibold text-primary mb-3">SMS API Provider</h3>
          <p className="text-gray-700 leading-relaxed">
            In addition to bulk SMS, Myospaz Software Technologies is also one of the top SMS API providers in Pune, enabling seamless integration for businesses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BulkSmsPage;
