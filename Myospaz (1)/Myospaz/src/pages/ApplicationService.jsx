
import appDevImg from '../../public/img/application1.png';
import appSupportImg from '../../public/img/application2.png';
import crmImg from '../../public/img/application3.png'
import erpImg from '../../public/img/application4.png';
import mobileAppImg from '../../public/img/application5.png';
import ecommerceImg from '../../public/img/application6.png';
import background from '../../public/img/Application Services Banner3.png';

const ServicesPage = () => {
  return (
    <div className="container mx-auto px-4 py-11">
         
            <div className="relative text-center mb-16 mt-10 rounded-2xl overflow-hidden h-[200px] md:h-[250px]">
       
            <img 
                src={background} 
                alt="Background" 
                className="absolute inset-0 w-full h-full object-cover"
            />
         
            <div className="absolute inset-0 " />

            <div className="relative z-20 py-16 px-4">
                {/* <h1 className="text-5xl font-bold text-gray-900 mb-4 mt-4">Application Services</h1> */}
                {/* <p className="text-xl text-gray-600 max-w-3xl mt-10 mr-30 mx-auto">
                Comprehensive digital solutions to transform your business
                </p> */}
            </div>
            </div>

            <div className="container mx-auto px-4 py-12 mt-2 relative z-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  mb-20">
        {[
          "Application Development",
          // "App Support & Maintenance",
          // "Customer Relationship Management",
          "ERP Platforms",
          "Mobile App Development",
          // "E-Commerce Development"
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

   
      <div className="space-y-28">
     
        <section id="application-development" className="scroll-mt-24 flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <img 
              src={appDevImg} 
              alt="Application Development" 
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Application Development</h2>
            <div className="space-y-4 text-gray-700">
              <p className="text-md">
              Myospaz Software Technologies skilled in delivering quality Application Services to our clients globally. We deliver Solutions according to client requirement . 
              </p>
              <p className="text-md">
              Now a days its really important for organizations to build a software solution that fulfills thier overall IT needs , maintaining client requirements MyosPaz has delivered such custom solutions. Expertise team ranging from Requirement Gathering to Deployment of product helps organization in building and propogating their process smoothly.
              </p>
            </div>
          </div>
        </section>

   <section id="erp-platforms" className="scroll-mt-24 flex flex-col lg:flex-row-reverse items-center gap-10">
          <div className="lg:w-1/2">
            <img 
              src={erpImg} 
              alt="ERP Platforms" 
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">ERP Platforms</h2>
            <div className="space-y-4 text-gray-700">
              <p className="text-md">
              Myospaz Software Technologies entitles organization with ERPs , holding some astonishing features like collecting customers data , information , store and manage Inventory , Interpret data from Business daily activites , Products , Finance , Purchase , Manufacturing , Delivery , etc with SMS Alerts , Email alerts facilities. A user friendly UI/UX enables organization to manage all their work without any intteruption and easy to operate features irrelevant of Person handling the Software .
              </p>
              <p className="text-md">
              A special categorised Login for individuals in organization helps to diffrentiate tasks accrording to their fields . A complete customized ERP solution offred by Myospaz Software Technologies helps in increasing Productivity for Business whether it is Large-Scale or Small-Scale . Customized ERPs for Broadband Service Provider and Tattoo Industry has been the usp of our Organization and identified as the Best ERP Solution.
              </p>
            </div>
          </div>
        </section>

       
        <section id="mobile-app-development" className="scroll-mt-24 flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <img 
              src={mobileAppImg} 
              alt="Mobile App Development" 
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Mobile App Development</h2>
            <div className="space-y-4 text-gray-700">
              <p className="text-md">
              Mobile Applications emerged as huge innovation in feild of technology , keeping frontier market needs in mind Myospaz Software Technologies has delivered some amazing Mobile Applications on Android , IOS , and Windows platfroms .Myospaz Software Technologies expertises in mobile application developement and has a strong focus on native as well as hybrid mobile app development.Our team of Developers is able to deliver mobile applications for Android,IPhone,IPad,Windows and any other as per the Client Requirement within short span of time .

              </p>
              <p className="text-md">
              Excelling in Customized Mobile Application Development , Myospaz Software Technologies also covers the release of Applications on Play Store , Windows Store , App Store and outdoor marketing of Applications.
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

export default ServicesPage;