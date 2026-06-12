// pages/ProductEngineeringPage.js
import payintegration from '../../public/img/paygate1.png';
import payprocess from '../../public/img/paygate2.png';
import paymobapp from '../../public/img/paygate3.png';
import background from '../../public/img/paymentgatbg.png'



const PaymentGateway = () => {
  return (
    <div className="container mx-auto px-4 py-16">
         <div className="relative text-center mb-16 mt-5 rounded-2xl overflow-hidden h-[200px] md:h-[250px]">  
                  <img 
                      src={background} 
                      alt="Background" 
                      className="absolute inset-0 w-full h-full object-cover"
                  />
               
                  <div className="absolute inset-0 " />
      
                  <div className="relative z-20 py-16 px-4">
                    
                      <p className="text-xl text-black-600 max-w-3xl mt-20 mr-30 mx-auto">
                      {/* Comprehensive digital solutions to transform your business */}
                      </p>
                  </div>
                  </div>
    <div className="container mx-auto px-4 py-12 mt-2 relative z-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {[
          "Payment Gateway Integration in Existing System",
          "Payment Gateway Process",
          "Payment Gateway Integration in Mobile Applications"
         
        ].map((service, index) => (
          <a 
            key={index}
            href={`#${service.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
            className="block bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-primary hover:border-primary-dark text-center"
          >
            <h3 className="text-xl font-semibold text-gray-800">{service}</h3>
          </a>
        ))}
      </div>

      <div className="space-y-28 mb-28">
   
        <section id="payment-gateway-integration-in-existing-system" className="bg-sky-50 p-10 rounded-2xl scroll-mt-24 flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <img 
              src={payintegration} 
              alt="Payment Gateway Integration in Existing System" 
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Gateway Integration in Existing System</h2>
            <div className="space-y-4 text-gray-700">
              <p className="text-md">
              Myospaz Software Technologies team helps your organization in integrating Online Payment Gateway in Existing system and while building Web applications or Mobile applications . Our Payment gateway feature enables our clients with feature to accept payments online with Credit Cards , Debit Cards , Net-Banking, Wallets etc with our channel partner PayUmoney.
              </p>
              <p className="text-md">
              With over thousands of successful Payment Gateway Integration , Myospaz Software Technologies is most Dominant and Front Runner of Online Payment Gateway Integration company in India over the years.
              </p>
            
            </div>
          </div>
        </section>

    
        <section id="payment-gateway-process" className="bg-orange-50 p-10 rounded-2xl scroll-mt-24 flex flex-col lg:flex-row-reverse items-center gap-10">
          <div className="lg:w-1/2">
            <img 
              src={payprocess} 
              alt="Payment Gateway Process" 
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Gateway Process</h2>
            <div className="space-y-4 text-gray-700">
              <p className="text-md">
              Myospaz Software Technologies team provides free support for our clients and gently guide them through entire process of Payment Gateway Integration . Activating accounts , Daily Payment Settlement , Transperency in Transactions etc whatever may be the issue , our team of experts leads your organization troubleshoot and resolve such issues.
              </p>
              <p className="text-md">
              Document submission , Form Submission might be other complication for organization but Myospaz Software Technologies dedicated team members for Payment Gateway Integration Process helps organization with entire process on their behalf , maintaining transparency in every process involved.
              </p>
             
            </div>
          </div>
        </section>

        <section id="payment-gateway-integration-in-mobile-applications" className="bg-emerald-50 p-10 rounded-2xl scroll-mt-24 flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <img 
              src={paymobapp} 
              alt="Payment Gateway Integration in Mobile Applications" 
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Gateway Integration in Mobile Applications </h2>
            <div className="space-y-4 text-gray-700">
              <p className="text-md">
              Myospaz Software Technologies provides free Payment Gateway Integration Services for different platforms such as Android , IOS , Windows and all other leading Mobile Operating Systems with our channel partner PayUmoney API's .
              </p>
              <p className="text-md">
              As use of Mobile Applications have immensly grown over the years and accepting online payments with help of your Mobile Applications can build operations easy to access and make your Application more customer-centric.
              </p>
            
            </div>
          </div>
        </section>

      </div>
      </div>

  
  <div className="bg-gradient-to-r from-green-500 to-primary rounded-2xl p-10 text-white mb-20 mt-10">
  <div className="max-w-4xl mx-auto text-center">
    
    <h2 className="text-2xl md:text-3xl font-bold mb-4">
      Establish your Business
    </h2>

    <p className="text-base md:text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
      Focusing on your business needs and market analysis, our team of experts
      will help you in your business growth. For further enquiries and details
      about our services, please email us at:
    </p>

    <a
      href="mailto:sales@myospaz.in"
      className="inline-block bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
    >
      sales@myospaz.in
    </a>

  </div>
</div>

    </div>
  );
};

export default PaymentGateway;