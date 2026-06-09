
import windowsAppImg from '../../public/img/boardband1.png';
import webAppImg from '../../public/img/boardband2.png';
import mobileAppImg from '../../public/img/boardband3.png';
import client1Logo from '../../public/img/edulogo1.png';
import client2Logo from '../../public/img/vedant.jpeg';
import client3Logo from '../../public/img/sunflower.jpeg';

const Education = () => {
  return (
    <div className="container mx-auto px-4 py-16">
     
       
     <div className="relative text-center mb-16 mt-5 rounded-2xl overflow-hidden h-[200px] md:h-[250px]">
 
        <img 
            // src="/public/educationb.jpeg" 
            src ="/img/educationb.jpeg"
            alt="Background" 
            className="absolute inset-0 w-full h-full object-cover"
        />

     
        <div className="relative p-10 text-white">
           
        </div>
        </div>


     
      <div className="max-w-4xl mx-auto text-center mb-20">
       
      <p className="text-md max-w-3xl mx-auto">
      Myospaz Software Technologies holds uppermost hand in delivering software solutions in education sector with some phenomenal customized Windows , Web and Mobile Applications . Some astonishing ERP's with features like Student Management , Staff Management , Payroll , Attendance Management etc in Windows and Web Applications helped our clients in maintaining records in Simplest , Methodological and Systematic Manner. Mobile Applications with features like online learning through videos , Exam prepration etc lifted growth of Students effortlessly.
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
           Windows Applications with Student Attendance Management , Regular SMS Alerts for parents about Student Attendance , Student Document Records , Staff Management , Staff Attendance Management integrated with Biometric , Payroll System , Graphical Reports , Rich Modules and Categorized Login as per LAN connectivity has been one of the Dominant Windows Applications offered by Myospaz Software Technologies over the years for Schools , Colleges and Pre- Schools .
           </p>
           <p>
           Customization and Free Technical Support for any queries make Myospaz Software Technologies Application stand out from other ERP's available in market.
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
           Myospaz Software Technologies Web Application comes with features like Online tools for Fee Payment , Student and Parents Login , Staff Login , Employee Login , Administator login to Manage activities of Students for Schools , Colleges and Pre-Schools . Graphical Reports , Rich modules , E-books upload , Online courses and video Tutorials are key attributes provided by Myospaz Software Technologies with our Web Applications for Schools and Colleges.
           </p>
           <p>
           Rich user experience of Application with Cutomization as per the requirements has shown tremedous growth over the years . Free Support for six months is another charachterstic which is appreciated by our clients.
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
          Applications like Online Video Tutorials and Online Examinations with more than 29,000 active users played important role to grow Myospaz Software Technologies in Education sector. Mobile Ki Pathshala and Purple Hat are crucial developments of Myospaz Software Technologies.
          </p>
          <p>
          Mobile ki pathshala is Mobile application for video tutorials for student ranging from 1st to 10th standard with encrypted videos feature. On other hand Purple Hat is Free Android Application for Polytechnic and Engineering Students.
          </p>
          </div>
        </div>
      </section>

   
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-10">Some Esteemed Education Clients</h2>
       
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-4">
          {[
            { name: "Charity Foundation", logo: client1Logo },
            { name: "Vedant Public School", logo: client2Logo },
            { name: "Sunflower Public School", logo: client3Logo }
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

export default Education;