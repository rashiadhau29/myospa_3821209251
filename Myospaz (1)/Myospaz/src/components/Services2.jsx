import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // npm install framer-motion

// Import your images
import appImg from "/public/img/Application Services1.png";
import productImg from "/public/img/Product Engineering3.jpg";
import businessImg from "/public/img/Business Services1.png";
import paymentImg from "/public/img/Payment Getway2.png";
import uiuxImg from "/public/img/UIUX Design2.png";
import seoImg from "/public/img/SEO.png";

const Services2 = () => {
  const services = [
    {
      image: appImg,
      title: "Application Services",
      description:
        "We provide end-to-end application development, maintenance, testing, and optimization services to ensure smooth performance and long-term reliability.",
      path: "/services/applicationservices",
    },
    {
      image: productImg,
      title: "Product Engineering",
      description:
        "We design, develop, test, and deploy software products using structured engineering processes that deliver innovation, quality, and scalable outcomes.",
      path: "/services/productengineering",
    },
    {
      image: businessImg,
      title: "Business Services",
      description:
        "We offer continuous business process support and IT helpdesk services that help organizations operate efficiently and maintain service reliability.",
      path: "/services/businessservices",
    },
    {
      image: paymentImg,
      title: "Payment Gateway Integration",
      description:
        "We integrate secure and user-friendly payment gateways like PayUMoney to enable seamless, fast, and reliable online transactions for your business.",
      path: "/services/paymentgateway",
    },
    {
      image: uiuxImg,
      title: "UI/UX Design",
      description:
        "We create modern, intuitive, and responsive UI/UX designs that focus on user experience, visual appeal, and improved digital engagement.",
      path: "/services/uiux",
    },
    {
      image: seoImg,
      title: "SEO Marketing",
      description:
        "We enhance website visibility, improve search rankings, and increase traffic through data-driven SEO strategies tailored to business goals.",
      path: "/services/seoservices",
    },
  ];

  // Animation variants: zoom + fade-in
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section
      id="services-2"
      className="relative overflow-hidden py-20"
      style={{
        backgroundImage: 'url("/img/home service background.jpeg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">Services</h2>
          <br />
          <p className="text-lg text-gray-200 font-medium">CHECK OUR SERVICES</p>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-200"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"           // Animate when card enters viewport
              viewport={{ once: true, amount: 0.3 }} // Trigger once, 30% visible
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}     // Optional hover zoom
            >
              {/* IMAGE + TITLE IN SAME LINE */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-20 h-20 rounded-lg overflow-hidden flex items-center justify-center">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-20 h-20 object-contain"
                  />
                </div>

                <h4 className="text-xl font-bold text-gray-800">
                  <Link to={service.path}>{service.title}</Link>
                </h4>
              </div>

              {/* FULL-WIDTH DESCRIPTION */}
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services2;
