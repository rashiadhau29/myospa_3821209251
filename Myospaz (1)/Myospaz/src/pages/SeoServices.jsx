
import offpage from '../../public/img/seoservices1.png';
import onpage from '../../public/img/seoservices2.png';
import background from '../../public/img/seobg.jpg'

const SeoServices = () => {
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
          "On Page Optimization",
          "Off Page Optimization",
         
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
 
        <section id="on-page-optimization" className="bg-purple-50 p-10 rounded-2xl scroll-mt-24 flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <img 
              src={onpage} 
              alt="On Page Optimization" 
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">On Page Optimization</h2>
            <div className="space-y-4 text-gray-700">
              <p className="text-md">
              Myospaz Software Technologies comprises of industry experts mastered in SE0 Techniques to make your websites reach higher rank on different search engines such as Google , Yahoo , Bing etc.
              </p>
              <p className="text-md">
              Our On page optimization techniques involves HTML Contents , Meta Tags , Description of your website etc which helps reaching websites to reach top in SERP's . With almost 100% resluts Myospaz Software Technologies excelled in Search Engine Optimization Techniques ove the years in India and Globally.
              </p>
            
            </div>
          </div>
        </section>

        <section id="off-page-optimization" className="bg-rose-50 p-10 rounded-2xl scroll-mt-24 flex flex-col lg:flex-row-reverse items-center gap-10">
          <div className="lg:w-1/2">
            <img 
              src={offpage} 
              alt="Off Page Optimization" 
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Off Page Optimization</h2>
            <div className="space-y-4 text-gray-700">
              <p className="text-md">
              Myospaz Software Technologies pioneered in both On Page Optimization and Off Page Optimization . Embraced with industry experts Myospaz Software Technologies has excelled in Off Page Optimization techniquesincluding your social networking presence sk.com">Faceboo Twittern.com">LinkedIn , Google+ etc on websites.
              </p>
              <p className="text-md">
              With almost 100% resluts Myospaz Software Technologies excelled in Search Engine Optimization Techniques ove the years in India and Globally.
              </p>
             
            </div>
          </div>
        </section>

      </div>
      </div>

  
    {/* Establish Your Business Section */}
    <div className="bg-gradient-to-r from-green-500 to-primary rounded-2xl p-10 text-white mb-20 mt-10">
    <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Establish your Business</h2>
        <p className="text-xl mb-8">
        Focusing on your business needs and market analysis, our team of experts will help you in your business growth.
        For further enquiries and details about our services, please email us at:
        </p>
        <a 
        href="mailto:sales@myospaz.in" 
        className="inline-block bg-white text-primary text-lg font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
        >
        sales@myospaz.in
        </a>
    </div>
    </div>

    </div>
  );
};

export default SeoServices;