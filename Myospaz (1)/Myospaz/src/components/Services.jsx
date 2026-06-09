  import React from "react";
  import { Link } from "react-router-dom";

  // Example logos/images for each card
  import mobileIcon from "/public/img/icons8-mobile-application-64.png";
  import ecommerceIcon from "/public/img/icons8-cart-64.png";
  import erpIcon from "/public/img/icons8-digital-business-50.png";

  const Services = () => {
    const cards = [
      {
        title: "Mobile Applications",
        description:
          "We develop high-quality Android, iOS, and Windows apps using Flutter & React Native, delivering fast and reliable solutions tailored to your business.",
        logo: mobileIcon,
        link: "/MobileApplication",
      },
      {
        title: "E-Commerce",
        description:
          "Providing smart, efficient e-commerce solutions to help your business stay ahead in a rapidly growing digital market.",
        logo: ecommerceIcon,
        link: "/Ecommers1",
      },
      {
        title: "ERP Solutions",
        description:
          "Our ERP systems streamline workflows, improve data management, and help organizations make smarter, faster business decisions.",
        logo: erpIcon,
        link: "/ErpPage",
      },
    ];

    return (
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto px-6 text-center">
          {/* Heading */}
          <h2 className="text-5xl font-bold text-gray-900 mb-4 relative inline-block">
            Centre Of Excellence
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-primary to-orange-400"></span>
          </h2>
          <p className="text-gray-600 text-lg mt-8 max-w-2xl mx-auto mb-12">Comprehensive solutions designed to transform your business</p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 
                hover:border-primary transition-all duration-300 text-left 
                flex flex-col justify-between min-h-[300px] border border-gray-100
                transform hover:-translate-y-2 group"
              >
                <div>
                  {/* Title + Icon */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-gradient-to-br from-primary/20 to-orange-400/20 w-16 h-16 rounded-full flex items-center justify-center group-hover:from-primary group-hover:to-orange-400 transition-all duration-300">
                      <img
                        src={card.logo}
                        alt={card.title}
                        className="w-10 h-10 object-contain group-hover:invert"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                      {card.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-left group-hover:text-gray-700 transition-colors">
                    {card.description}
                  </p>
                </div>

                {/* Button */}
                <Link to={card.link}>
                  <button
                    className="mt-6 px-6 py-3 bg-gradient-to-r from-primary to-orange-400 text-white 
                    font-semibold rounded-full hover:shadow-lg transition-all transform hover:scale-105"
                  >
                    Explore →
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default Services;
