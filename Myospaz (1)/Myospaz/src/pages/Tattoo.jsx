
import windowsAppImg from '../../public/img/tattoo1.png';
import webAppImg from '../../public/img/tattoo2.png';
import mobileAppImg from '../../public/img/tattoo3.png';
import client1Logo from '../../public/img/tattoologo1.png';
import client2Logo from '../../public/img/tattoo2.jpg';
import client3Logo from '../../public/img/tattoo4.png';

const Tattoo = () => {
  return (
    <div className="container mx-auto px-4 py-16">
     
       
     <div className="relative text-center mb-16 mt-5 rounded-2xl overflow-hidden h-[200px] md:h-[250px]">
 
        <img 
            src="/img/tattoobg.jpeg"
            alt="Background" 
            className="absolute inset-0 w-full h-full object-cover"
        />

     
        <div className="relative p-10 text-white">
           
        </div>
        </div>


     
      <div className="max-w-4xl mx-auto text-center mb-20">
       
      <p className="text-md max-w-3xl mx-auto">
      Myospaz Software Technologies is emerged as Leader in Software Solutions for Tattoo Industries with client base of over 60 globally.
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
      Focusing on innnovative software requirements from Tattoo studios Myospaz Software Technologies initiated a solution with Windows Application covering most essential features for running thier business smoothly. Our Windows Based Applcation serves clients with facilities of Managing Bookings , Payments , Inventory etc . Offline software helps customer to manage their work in absence of Intenet facility. Highlight of our Windows appplication is that it comes with option of customization i.e. we deliver solution which copes up with exact requirement of customer and enables them with option of fully customized solutions.
      </p>
            
          </div>
        </div>
      </section>

    
      <section className="flex flex-col lg:flex-row-reverse items-center gap-10 mb-28">
        <div className="lg:w-1/2">
          <img 
            src={webAppImg} 
            alt="Web Application" 
            className="w-full h-auto rounded-xl  shadow-lg object-cover"
          />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Web Based Application</h2>
          <div className="space-y-4 text-gray-700">
        <p>
        Migrating to Web Applications has become essential to sustain in Business world as graph use of Internet users raised over the years. We belive in Customer-centric solutions which helps our clients to retain their consistency and scalablity in Market. Artopaz Web based ERP Solution for Tattoo Industries has helped our clients in acheiving thier Business goals with few clicks. Artopaz comes with facilities of Online Booking , Online Payment Options, SMS services , Inventory Management , Dedicated Login window for Admin And User , Reminder Pop-ups , Auto Integrated Email and Messages etc.
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
        Myospaz Software Technologies has delivered our clients applications on Android platform integrated with web application. Mobile application entitles our customers to manage their Inventory , Accept Online Orders for Equipments , Accept Pyments Online , Track Orders , Confirmation etc.
      </p>
      <p>
        Independently from Business Modules application also succour and cover Daily process on Android phones.
      </p>
          </div>
        </div>
      </section>

   
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-10">Some Esteemed Tatto Industry Clients</h2>
       
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-4">
          {[
            { name: "Mumbai Tattoo", logo: client1Logo },
            { name: "Abstract Tattoo", logo: client2Logo },
            { name: "Ink Field", logo: client3Logo }
          ].map((client, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow duration-30ter">
              <img 
                src={client.logo} 
                alt={client.name} 
                className="w-20 h-20 mx-auto object-contain mb-3-4"
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

export default Tattoo;