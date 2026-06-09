import React from 'react';

const ErpPage = () => {
  return (
    <div className="w-full">

      {/* ================= Banner Section ================= */}
      <section className="relative w-full h-[500px] lg:h-[600px]">
        <img
          src="/img/ERP Banner.png"
          alt="ERP Banner"
          className="w-full h-full object-cover"
        />
      </section>

      {/* ================= Colored Header Section ================= */}
      <section className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-20 mt-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Powerful ERP Solutions
          </h1>
          <p className="text-lg lg:text-xl mb-2">
            Streamline your business operations with MyosPaz Technologies.
          </p>
          <p className="text-md lg:text-lg max-w-2xl mx-auto">
            Fully customized ERP platforms to manage finance, inventory, products, manufacturing, and more.
          </p>
        </div>
      </section>

      {/* ================= Info Section ================= */}
      <section className="bg-gradient-to-r from-blue-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-16 text-center">
            Powerful ERP Solutions by MyosPaz
          </h2> */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Image */}
            <div className="rounded-xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500">
              <img
                src="/img/ERP image2.jpg"
                alt="ERP Platforms"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Right Text */}
            <div className="space-y-6 text-gray-700 text-lg">
              <p>
                <span className="font-semibold text-gray-900">Myospaz Software Technologies</span> entitles organizations with ERPs, holding some astonishing features like collecting customer data, storing and managing inventory, interpreting data from daily business activities, products, finance, purchase, manufacturing, delivery, etc., with SMS and Email alerts.
              </p>
              <p>
                A user-friendly <span className="font-semibold">UI/UX</span> enables organizations to manage all their work without any interruption, providing easy-to-operate features irrespective of the person handling the software.
              </p>
              <p>
                A special categorized login for individuals in the organization helps differentiate tasks according to their fields. A complete customized ERP solution offered by Myospaz Software Technologies helps increase productivity for businesses, whether large-scale or small-scale.
              </p>
              <p className="font-semibold text-gray-900">
                Customized ERPs for Broadband Service Providers and the Tattoo Industry are the USP of our organization and identified as the best ERP solution.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErpPage;
