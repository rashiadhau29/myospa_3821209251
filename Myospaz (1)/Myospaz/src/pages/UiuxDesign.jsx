// pages/ProductEngineeringPage.js
import designing from '../../public/img/uiux1.png';
import logodesiging from '../../public/img/uiux2.png';
import outdoor from '../../public/img/uiux3.png';
import background from '../../public/img/uiuxbg.jpg'

const UiuxDesign = () => {
  return (
    <div className="container mx-auto px-4 py-16">
         <div className="relative text-center mb-16 mt-5 rounded-2xl overflow-hidden h-[200px] md:h-[250px]">  
                  <img 
                      src={background} 
                      alt="Background" 
                      className="absolute inset-0 w-full h-full object-cover"
                  />
               
                  <div className="absolute inset-0 " />
      
                 
                  </div>
   
  <div className="container mx-auto px-4 py-12 mt-2 relative z-10">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {[
          "Designing Responsive Websites",
          "Logo Designing",
          "Outdoor Advertising of Products"
         
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
   
        <section id="designing-responsive-websites" className="bg-sky-50 p-10 rounded-2xl scroll-mt-24 flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <img 
              src={designing} 
              alt="Designing Responsive Websites" 
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Designing Responsive Websites  </h2>
            <div className="space-y-4 text-gray-700">
              <p className="text-md">
              Myospaz Software Technologies is one of the top company in India for designing Responsive websites and portals . Our approach in designing websites allows all desktop webpages to be viewed in response to the devices customers might view in . Matching upto requirements of devices such as Mobiles , Tabs , Desktop , Ipads etc our responsive web designs have achieved an better and uninteruppted User Experience
              </p>
              <p className="text-md">
              Myospaz Software Technologies comprises of Industry Experts on Technologies such as Bootstrap , CSS , Jquery , HTML etc. Best in class user interface at Low cost is most astonishing feature of Myospaz Software Technologies.
              </p>
            
            </div>
          </div>
        </section>

    
        <section id="logo-designing" className="bg-orange-50 p-10 rounded-2xl scroll-mt-24 flex flex-col lg:flex-row-reverse items-center gap-10">
          <div className="lg:w-1/2">
            <img 
              src={logodesiging} 
              alt="Logo Designing" 
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Logo Designing</h2>
            <div className="space-y-4 text-gray-700">
              <p className="text-md">
              Logo is something that represents any organization's identity and Myospaz Software Technologies has constantly worked on improving our clients identity with our Best Logo Designing Services . Team of Experts working on tools such as Adobe Photoshop , Adobe Illustrator and other new designing tools , Myospaz Software Technologies has delivered some outstanding Logo's for our clients.
              </p>
              <p className="text-md">
              Unique , Fresh and New designs are some charachterstics that forms Myospaz Software Technologies stand out in field of Logo Design Services.Focusing on your Business services , Myospaz Software Technologies provides Logo Designs that are appropriate to sevices offered by organization.
              </p>
             
            </div>
          </div>
        </section>

        <section id="outdoor-advertising-of-products" className="bg-emerald-50 p-10 rounded-2xl scroll-mt-24 flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <img 
              src={outdoor} 
              alt="Outdoor Advertising of Products" 
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Outdoor Advertising of Products </h2>
            <div className="space-y-4 text-gray-700">
              <p className="text-md">
              In today's competitive world of technologies outdoor marketing of products have reached higher levels and became most important aspect of marketing to grow your business . Myospaz Software Technologies follows strategies that are efficient in growing your Business in orld of technologies with our Outdoor Advertising of Products.
              </p>
              <p className="text-md">
              Marketing strategies such as social media marketing on social network site such as Facebook , Twitter , LinkedIn , Google+ etc , Banner Creations with help new desiging tools has helped our clients to grow their Business Services immensely with our Outdoor Advertising of Product services.
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

export default UiuxDesign;