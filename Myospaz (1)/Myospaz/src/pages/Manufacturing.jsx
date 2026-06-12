
import windowsAppImg from '../../public/img/manufactuing1.png';
import webAppImg from '../../public/img/manufacturing2.png';
import mobileAppImg from '../../public/img/manfacturing3.png';
import client1Logo from '../../public/img/yashwanteng.jpeg';
import client2Logo from '../../public/img/aryaelelog.jpeg';
import client3Logo from '../../public/img/bhoreng.jpeg';
// import client4Logo from '../../public/client/jayenglogo';

const Manufacturing = () => {
  return (
    <div className="container mx-auto px-4 py-16">
     
       
     <div className="relative text-center mb-16 mt-5 rounded-2xl overflow-hidden h-[200px] md:h-[250px]">
 
        <img 
            // src="/public/manufacturingbg.jpeg" 
            src="/img/manufacturingbg.jpeg"
            alt="Background" 
            className="absolute inset-0 w-full h-full object-cover"
        />

     
        <div className="relative p-10 text-white">
           
        </div>
        </div>


     
      <div className="max-w-4xl mx-auto text-center mb-20">
       
      {/* <p className="text-md max-w-3xl mx-auto">
      Myospaz Software Technologies holds uppermost hand in delivering software solutions in education sector with some phenomenal customized Windows , Web and Mobile Applications . Some astonishing ERP's with features like Student Management , Staff Management , Payroll , Attendance Management etc in Windows and Web Applications helped our clients in maintaining records in Simplest , Methodological and Systematic Manner. Mobile Applications with features like online learning through videos , Exam prepration etc lifted growth of Students effortlessly.
            </p> */}
       
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
       Myospaz Software Technologies is pioneer with its software solutions in Manufacturing Field . Our customized Windows based applications for manufacturing plants has transpired as innovational products for organizations. Being contingent on client requirement we have expertised in delivering custom products. ERP , CRM , etc tailored accroding necessity of clients, our Windows Applcation has encountered with Market Expectations. Scanning types of user Myospaz Software has delivered products that can be eaisly operated.
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
        Myospaz Software Technologies is top-tier in Customized ERP , CRM , etc exceeding over 3 years of experience and with our uninterrupted services. Relying on necessity we have developed cloud based systems for
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
      We consider every project as an opportunity for intelligent and fun collaboration with our clients. Our work is a summary of what we are passionate about and the many possibilities we can offer to help you or your organization.
      </p>
          </div>
        </div>
      </section>

   
      <section className="bg-indigo-50 p-10 rounded-2xl mb-16">
        <h2 className="text-2xl font-bold text-center mb-10">Some Esteemed Broadband Clients</h2>
       
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-4">
          {[
            { name: "Yashwant Engineering", logo: client1Logo },
            { name: "Arya Electronics", logo: client2Logo },
            { name: "Bhor Engineering", logo: client3Logo }
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

export default Manufacturing;