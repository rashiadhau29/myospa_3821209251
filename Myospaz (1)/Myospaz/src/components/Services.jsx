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
      <section className="bg-white py-10">
        <div className="container mx-auto px-6 text-center">
          {/* Heading */}
          <h2 className="text-4xl font-bold text-primary mb-8">
      Centre Of Excellence
    </h2>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className="border-2 border-green-500 rounded-xl shadow-lg p-8 
                hover:shadow-2xl transition-all duration-300 text-left 
                flex flex-col justify-between min-h-[200px]"
              >
                <div>
                  {/* Title + Icon */}
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={card.logo}
                      alt={card.title}
                      className="w-14 h-14 object-contain"
                    />
                    <h3 className="text-2xl font-semibold text-green-700">
                      {card.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed text-left">
                    {card.description}
                  </p>
                </div>

                {/* Button */}
                <Link to={card.link}>
                  <button
                    className="mt-6 px-4 py-2 border border-green-700 text-green-700 
                    font-semibold rounded-lg hover:bg-green-700 hover:text-white transition-all"
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
