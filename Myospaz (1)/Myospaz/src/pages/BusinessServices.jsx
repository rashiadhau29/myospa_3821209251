// pages/ProductEngineeringPage.js
import desksupport from '../../public/img/business1.png';
import technicalsupport from '../../public/img/business2.png';
// import background from '../../public/img/businessbg.png';
import background from '../../public/img/busserbg1.jpg';

const BusinessServices = () => {
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
                 
                   {/* <p className="text-xl text-black-600 max-w-3xl mt-20 mr-30 mx-auto">
                   Comprehensive digital solutions to transform your business
                   </p> */}
               </div>
               </div>

    <div className="container mx-auto px-4 py-12 mt-2 relative z-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {[
          "IT Help Desk Support",
          "Technical Support",
         
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

      {/* Service Details with Alternating Layout */}
      <div className="space-y-28 mb-28">
        {/* Product Concept & Design */}
        <section id="it help desk support" className="bg-sky-50 p-10 rounded-2xl scroll-mt-24 flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <img 
              src={desksupport} 
              alt="IT Help Desk Support" 
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">IT Help Desk Support</h2>
            <div className="space-y-4 text-gray-700">
              <p className="text-md">
              Myospaz Software Technologies provides 24x7 IT-Help Desk support for Business services . We offer Free 1 month support services for products developed under Myospaz Software Technologies including 24x7 support for end users or customers , which helps them trobleshoot problems with use of product and provide guidance in solving issues .
              </p>
              <p className="text-md">
              Instant messaging , email support , Instanat solution to tickets raised on websites and toll free numbers is main characterstic which leads MyosPaz Softwares stand out from other IT-help Desk Support services team.
              </p>
            
            </div>
          </div>
        </section>

        {/* Product Maintenance & Support */}
        <section id="technical-support" className="bg-orange-50 p-10 rounded-2xl scroll-mt-24 flex flex-col lg:flex-row-reverse items-center gap-10">
          <div className="lg:w-1/2">
            <img 
              src={technicalsupport} 
              alt="Technical Support" 
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Support</h2>
            <div className="space-y-4 text-gray-700">
              <p className="text-md">
              Myospaz Software Technologies Technical Support Service allows our clients with a Free Technical Support for their Products . Our team of expertise guides customer with any problems in software products or mobile applications .
              </p>
              <p className="text-md">
              Myospaz Software Technologies also offers additional services of Project Management , Vendor Management and Backup services which helped Myospaz Software Technologies stand as one of Best Managed Service Provider in India . With our Multi-tiered technical support helped our customers and clients to escalate issues within a very short span of time. 
              </p>
             
            </div>
          </div>
        </section>
   </div>     
      </div>

  
    {/* Establish Your Business Section */}
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

export default BusinessServices;