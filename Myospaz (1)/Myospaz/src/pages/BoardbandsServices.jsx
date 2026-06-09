
import windowsAppImg from '../../public/img/boardband1.png';
import webAppImg from '../../public/img/boardband2.png';
import mobileAppImg from '../../public/img/boardband3.png';
import client1Logo from '../../public/img/logo4.png';
import client2Logo from '../../public/img/logo6.png';
import client3Logo from '../../public/img/logo7.jpg';
import client4Logo from '../../public/img/hifivebroad.jpeg'

const BroadbandSolutionsPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
     
       
     <div className="relative text-center mb-16 mt-5 rounded-2xl overflow-hidden h-[200px] md:h-[250px]">
 
        <img 
            src="/img/broadbandb.jpeg" 
            alt="Background" 
            className="absolute inset-0 w-full h-full object-cover"
        />

     
        <div className="relative p-10 text-white">
           
        </div>
        </div>


     
      <div className="max-w-4xl mx-auto text-center mb-20">
       
      <p className="text-md max-w-3xl mx-auto">
            Myospaz Software Technologies is Exclusive leader in Online and Offline ERP Softwares with Payment Gateway integrated for Broadband Service Providers in India. Myospaz Software Technologies transpired as Best Service Provider for Broadband Services in India with its Windows Application, Web Application and Mobile Applications. Features like Auto sync of Mobile Application with Cloud helped MyosPaz reach top Software company for Broadband Service Providers.
            </p>
       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 mt-10">
          {[
            { title: "Windows Application", icon: "💻" },
            { title: "Web Application", icon: "🌐" },
            { title: "Mobile Application", icon: "📱" }
          ].map((solution, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-t-4 border-primary">
              <div className="text-4xl mb-4">{solution.icon}</div>
              <h3 className="text-xl font-semibold">{solution.title}</h3>
            </div>
          ))}
        </div>
      </div>

      
      <section className="flex flex-col lg:flex-row items-center gap-10 mb-28">
        <div className="lg:w-1/2">
          <img 
            src={windowsAppImg} 
            alt="Windows Application" 
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Windows Based Application</h2>
          <div className="space-y-4 text-gray-700">
            <p>
            Complaint Management System for Broadband Service providers has been most dominant product of Myospaz Software Technologies over the years. CMS is currently being operated by over 150 Broadband companies. CMS proved to be a vital research in field of Software for these organizations. Intially Launched as Desktop based Application with fundamental features comprised of Complaint Management, Error Tracking, Inventory Management , Account Management , SMS service , Database Backup , Upload Database , Daily Reports on Mail , etc.

            </p>
            <p>
            Complaint Management System for Broadband Service Providers reaches our clients with Free installation and 6 months free service . Customization as per the client requirement is another charachterstic of CMS.
            </p>
            
          </div>
        </div>
      </section>

    
      <section className="flex flex-col lg:flex-row-reverse items-center gap-10 mb-28">
        <div className="lg:w-1/2">
          <img 
            src={webAppImg} 
            alt="Web Application" 
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Web Based Application</h2>
          <div className="space-y-4 text-gray-700">
            <p>
            Focusing on increasing requirement for Complaint Management System , Myospaz Software Technologies migrated to Cloud Application . Integrating freatures like Enquiry Management , appending zones where services of Broadband companies is feasible , non-feasible or nuetral , Payment Renewal requests , Online Bill Generation , Auto Mail System to forward Bills , SMS API's integration , Manage Complaints , Employee Management , Inventory Management etc helped our Web Based Application gow immensly with short span of time .
            </p>
            <p>
            Complaint Management System cloud application is categorised in 4 different plans i.e. 3 months plan , 6 months plan , 9 months plan and Annual plans with Freee support service and 7 days Free Demo service to make Broadband Service Provider friendly with our application and option to request for customization if needed.
            </p>
          </div>
        </div>
      </section>

    
      <section className="flex flex-col lg:flex-row items-center gap-10 mb-28">
        <div className="lg:w-1/2">
          <img 
            src={mobileAppImg} 
            alt="Mobile Application" 
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Mobile Applications</h2>
          <div className="space-y-4 text-gray-700">
            <p>
            Mobile Applications on Android , IOS , and Windows platforms for customers of Broadband Service enables them to Pay bills using Credit Cards , Debit Cards , Net-Banking, Wallets etc with our channel partner PayUmoney , Manage thier accounts , Track Data Usage , Register Complaints , Plan information , Update Plan , Payment History and other customizations if needed .
            </p>
            <p>
            On other hand Broadband Service providers gets access of features with Admin Mobile applications to Manage thier customers , Payment , Renewals , etc. MyosPaz offers a Free Google Play Store Account to host their applications.
            </p>
          </div>
        </div>
      </section>

   
      

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-10">Some Esteemed Broadband Clients</h2>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 px-4">
          {[
            { name: "Microscan Broadband Services", logo: client1Logo },
            { name: "Vnet Broadband Services", logo: client2Logo },
            { name: "FiberOptic Broadband Services", logo: client3Logo },
            { name: "HiFive Broadband Services", logo: client4Logo },

          ].map((client, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-20 h-20 mx-auto object-contain mb-3"
              />
              <h3 className="text-lg font-medium">{client.name}</h3>
            </div>
          ))}
        </div>
      </section>

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

export default BroadbandSolutionsPage;