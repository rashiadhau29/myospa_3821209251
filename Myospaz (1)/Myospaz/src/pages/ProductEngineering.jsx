import productDesignImg from "../../public/img/producteng1.png";
import productSupportImg from "../../public/img/producteng2.png";
import productTestingImg from "../../public/img/producteng3.png";
// import background from "../../public/img/prodengbg.jpeg";
import background from '../../public/img/prodengser.jpg'

const ProductEngineeringPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="relative text-center mb-16 mt-5 rounded-2xl overflow-hidden h-[200px] md:h-[250px]">
        <img
          src={background}
          alt="Product Engineering Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0  bg-opacity-30 flex items-center justify-center">
          <div className="text-center px-4">
            {/* <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Product Engineering</h1> */}
            {/* <p className="text-xl text-white max-w-2xl mt-40 mr-20 mx-auto">
              Innovative solutions for your product development needs
            </p> */}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 mt-2 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {[
            "Product Concept & Design",
            "Product Maintenance & Support",
            "Product Testing",
          ].map((service, index) => (
            <a
              key={index}
              href={`#${service.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
              className="block bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-primary hover:border-primary-dark text-center"
            >
              <h3 className="text-xl font-semibold text-gray-800">{service}</h3>
            </a>
          ))}
        </div>

        <div className="space-y-28 mb-28">
          <section
            id="product-concept-design"
            className="scroll-mt-24 flex flex-col lg:flex-row items-center gap-10 bg-white p-8 rounded-xl"
          >
            <div className="lg:w-1/2">
              <img
                src={productDesignImg}
                alt="Product Concept & Design"
                className="w-full h-auto rounded-xl shadow-lg object-cover"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Product Concept & Design
              </h2>
              <div className="space-y-4 text-gray-700">
                <p className="text-md">
                  Myospaz Software Technologies is constantly involved in
                  adapting innovative concepts and processes that keep pace with
                  our clients requirement and expectations. Our team is steady
                  to cope up with emerging technologies.
                </p>
                <p className="text-md">
                  Myospaz Software Technologies Team comprises of Individuals
                  involved in Requirement Gathering of Products, Individuals
                  involved in R&D of technologies, Individuals efficient in
                  providing point of view on concept that can increase
                  productivity, cost-reduction and deploy a product that is
                  customer-centric and cost-effective.
                </p>
                <p className="text-md">
                  Focusing on client and customer expectations our Designing
                  team builds a product that can be easily operated including
                  all the complexities of product. Working on concept and
                  Designing Databases with expertise in Database, MyosPaz
                  Technologies Pvt. Ltd. reached higher levels in Releasing
                  Products that are coherent, Uninterrupted and Reliable.
                </p>
              </div>
            </div>
          </section>

          <section
            id="product-maintenance-support"
            className="scroll-mt-24 flex flex-col lg:flex-row-reverse items-center gap-10 bg-white p-8 rounded-xl "
          >
            <div className="lg:w-1/2">
              <img
                src={productSupportImg}
                alt="Product Maintenance & Support"
                className="w-full h-auto rounded-xl shadow-lg object-cover"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Product Maintenance & Support
              </h2>
              <div className="space-y-4 text-gray-700">
                <p className="text-md">
                  Sustaining a Product in market and increase its Efficiency and
                  Productivity its vital to Maintain the Product. MyosPaz
                  provide services which can help product sustain and phenomenal
                  growth in productivity.
                </p>
                <p className="text-md">
                  We understand the difficulties in launching a product in
                  today's competitive world, specially products with cost on
                  higher side. Supervising intial launch of product comes a free
                  6 months of Maintenance and Support.
                </p>
                <p className="text-md">
                  MyosPaz team of technicals help our clients in determining the
                  technical faults and error and resolving issues with our 24x7
                  free support services.
                </p>
              </div>
            </div>
          </section>

          {/* Product Testing */}
          <section
            id="product-testing"
            className="scroll-mt-24 flex flex-col lg:flex-row items-center gap-10 bg-white p-8 rounded-xl "
          >
            <div className="lg:w-1/2">
              <img
                src={productTestingImg}
                alt="Product Testing"
                className="w-full h-auto rounded-xl shadow-lg object-cover"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Product Testing
              </h2>
              <div className="space-y-4 text-gray-700">
                <p className="text-md">
                  Myospaz Software Technologies pioneered in Manual Testing,
                  Automation Testing and Quality Assurance expertising in
                  Product quality analysis and assuring flawless delivery of
                  Products.
                </p>
                <p className="text-md">
                  We follow a 3 step testing process which comprmises of Unit
                  Testing at developers end followed by Manual Testing and
                  Automation Testing from team of expertise testers makes
                  product more reliable, Error free, Efficient and delivered as
                  per clients Expectations. Following Agile development Process
                  products are being tested in every phase of its lifecycle
                  which leads a product almost flawless at the time of release.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* CTA Section */}
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
    </div>
  );
};

export default ProductEngineeringPage;
