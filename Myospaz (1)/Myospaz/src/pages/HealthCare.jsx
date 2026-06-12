
import windowsAppImg from '../../public/img/boardband1.png';
import webAppImg from '../../public/img/boardband2.png';
import mobileAppImg from '../../public/img/boardband3.png';
import client1Logo from '../../public/img/healthlogo1.jpg';
import client2Logo from '../../public/img/healthlogo2.jpg';
import client3Logo from '../../public/img/healthlogo3.jpg';

const HealthCare = () => {
  return (
    <div className="container mx-auto px-4 py-16">
     
     <div className="relative text-center mb-16 mt-5 rounded-2xl overflow-hidden h-[200px] md:h-[250px]">
 
        <img 
            src ="/img/healthcareb.jpeg"
            alt="Background" 
            className="absolute inset-0 w-full h-full object-cover"
        />
  
        <div className="relative p-10 text-white">
           
        </div>
        </div>

      <div className="max-w-4xl mx-auto text-center mb-20">
       
      <p className="text-md max-w-3xl mx-auto">
        Customized optimization of ERP solution helped Myospaz Software Technologies outstrech as Leading Software Company in field of HealthCare . Custom Windows Application , Cloud Application , and Mobile Applications to Manage Accounts , Appointments , Patients Details ,Treatment Schedules etc assisted Hospitals to control entire process effortlessly.
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

      <section className="bg-sky-50 p-10 rounded-2xl flex flex-col lg:flex-row items-center gap-10 mb-28">
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
             Myospaz Software Technologies has delivered Business process management system for HealthCare Units . Our customized design system has helped these units to manage the Business and automate the functions related to thier services . Our customized Software for Ayurvedic clinics automates all the day today activities of clinics ranging from Appointment Bookings , Automated Treatment Process , Regular Follow ups , Printed Prescription integrated with SMS Services etc proved to be a vital product for Healthcare units.
            </p>
            <p>
             Our Windows based application enables our clients with offline process , and auto-sync option with Mobile Applications played a vital role in success of our product in small towns and cites facing issues of Internet .
            </p>
            
          </div>
        </div>
      </section>

    
      <section className="bg-orange-50 p-10 rounded-2xl flex flex-col lg:flex-row-reverse items-center gap-10 mb-28">
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
           Web Applications for Healthcare units offered by Myospaz Software Technologies comes with better user experience covering all the Automations for Appointment Booking , Treatment Schedule , Online Report Generation , Payroll system for Employees and staff , Appointment Alerts , Graphical Interface to show Account records , Integrating system with current Bank Accounts , Reports on messages , Online Printed Prescriptions etc. Web Applications for Healthcare enables our client with Free support 24x7 support for 6 months and technical assistance for any issues.
           </p>
           <p>
           Myospaz Software Technologies also helped our clients with Responsive Web Design integrated with system for Online Appointment Booking through websites and delivering customized Websites Design adding Free SEO Service to reach their oraganization to top in SERP's.
           </p>
          </div>
        </div>
      </section>


      <section className="bg-emerald-50 p-10 rounded-2xl flex flex-col lg:flex-row items-center gap-10 mb-28">
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
           Mobile Applications for Healthcare units entitles their customers with features of Booking an Appointment , Book Appointment for specialized Doctors , Request for Reports , Treatment History , Manage Bills , etc .
           </p>
           <p>
           Customized Mobile Application for all leading operating system devices such as Android , IOS , Windows with a Free Google Play Store Account is most distinct attribute offered by Myospaz Software Technologies.
           </p>
          </div>
        </div>
      </section>

   
      <section className="bg-indigo-50 p-10 rounded-2xl mb-16">
        <h2 className="text-2xl font-bold text-center mb-10">Some Esteemed HealthCare Clients</h2>
       
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-4">
          {[
            { name: "Ayucare Foundation ", logo: client1Logo },
            { name: "Chaitnya Hospital", logo: client2Logo },
            { name: "The Physio 9 Dr . Mahesh Chakor", logo: client3Logo }
          ].map((client, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow duration-300">
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

export default HealthCare;