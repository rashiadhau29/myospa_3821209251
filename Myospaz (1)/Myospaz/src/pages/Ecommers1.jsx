import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { image } from 'framer-motion/client';

function Pages() {

  // Initialize AOS animations
  useEffect(() => {
    AOS.init({ duration: 800, offset: 120, once: true });
  }, []);

  const cards = [
    { 
      title: "WordPress", 
      desc: "Custom WordPress websites with fast performance, clean design, and easy content management." 
      
    },
    { 
      title: "Laravel", 
      desc: "Powerful backend with advanced functionality using Laravel framework." 
    },
    { 
      title: "WooCommerce", 
      desc: "Complete e-commerce solutions with product management, secure payments, and mobile-friendly store design." 
    },
    { 
      title: "Shopify", 
      desc: "Professional Shopify store setup, customization, and e-commerce solutions to grow your online business." 
    },
    { 
      title: "CodeIgniter", 
      desc: "Lightweight and fast PHP framework used to build efficient, high-performance web applications." 
    },
   ,
  ];

  return (
    <>
      {/* ================= Banner Section ================= */}
      <section className="py-0 mt-14">
        <div className="relative w-full flex items-center justify-center bg-black">
          <img
            src="/img/Ecommers.png"
            alt="Pages Banner"
            className="w-full h-auto object-contain"
          />
          <div className="absolute inset-0"></div>
        </div>
      </section>

      {/* ================= E-COMMERCE TECHNOLOGIES SECTION ================= */}
      <section className="w-full bg-gray-100 py-20 flex justify-center">
        <div 
          className="w-full max-w-7xl bg-white rounded-3xl shadow-xl p-10 md:p-16"
          data-aos="fade-up"
        >
          
          {/* Heading */}
          <h2 
            className="text-4xl font-bold text-gray-900 text-center mb-14 tracking-wide"
            data-aos="fade-down"
          >
            Our E-Commerce Technologies
          </h2>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {cards.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="
                  bg-white 
                  rounded-3xl 
                  shadow-md 
                  p-10 
                  border 
                  hover:shadow-[0_10px_35px_rgba(0,0,0,0.18)] 
                  hover:-translate-y-3 
                  transition-all 
                  duration-300 
                  cursor-pointer 
                  hover:border-blue-500
                "
      //              style={{
      //   backgroundImage: `url('/img/home service background.jpeg')`, // background image for each card
      //   backgroundSize: 'cover',
      //   backgroundPosition: 'center',
      //   backgroundRepeat: 'no-repeat',
      // }}
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-lg leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PAYMENT GATEWAY SECTION ================= */}
      <section className="w-full bg-white py-20">
        <div 
          className="max-w-7xl mx-auto px-6 md:px-10 text-center"
          data-aos="fade-up"
        >

          {/* Heading */}
          <h2 className="text-4xl font-bold text-gray-900 mb-8" data-aos="fade-down">
            Our Payment Gateway Integrations
          </h2>

          {/* Sub text */}
          <p 
            className="text-gray-600 text-lg max-w-3xl mx-auto mb-14"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            We provide seamless and secure integration with the most trusted payment gateways to ensure smooth online transactions.
          </p>

          {/* Gateway Images */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">

            <div className="transition-transform hover:scale-105" data-aos="zoom-in-up">
              <img src="/img/Razorpy1.jpeg" alt="Razorpay" className="h-24 md:h-32 object-contain" />
            </div>

            <div className="transition-transform hover:scale-105" data-aos="zoom-in-right">
              <img src="/img/paypal.jpeg" alt="PayPal" className="h-24 md:h-32 object-contain" />
            </div>

            <div className="transition-transform hover:scale-105" data-aos="zoom-in-left">
              <img src="/img/agreepay.jpeg" alt="AgreePay" className="h-24 md:h-32 object-contain" />
            </div>

            <div className="transition-transform hover:scale-105" data-aos="zoom-in-up">
              <img src="/img/phonepay.png" alt="PhonePe" className="h-24 md:h-30 object-contain" />
            </div>
          </div>
        </div>
      </section>
      {/* ================= MANAGE NOTIFICATIONS SECTION ================= */}
<section className="w-full bg-gray-100 py-20">
  <div 
    className="max-w-7xl mx-auto px-6 md:px-12"
    data-aos="fade-up"
  >

    {/* Heading */}
    <h2 
      className="text-4xl font-bold text-gray-900 text-center mb-8"
      data-aos="fade-down"
    >
      Manage Notifications
    </h2>

    {/* Sub Text */}
    <p 
      className="text-gray-600 text-lg max-w-3xl mx-auto text-center mb-16"
      data-aos="fade-up"
      data-aos-delay="150"
    >
      Stay connected with your customers and team members using automated 
      WhatsApp, Email, and SMS notifications — making your business communication faster and smarter.
    </p>

    {/* Notification Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

      {/* WhatsApp */}
      <div 
        className="bg-white shadow-lg rounded-3xl p-10 border hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
        data-aos="zoom-in-up"
      >
        <img 
          src="/img/whatsapp.png" 
          alt="WhatsApp" 
          className="h-24 mx-auto mb-6 object-contain"
        />
        <h3 className="text-2xl font-semibold text-gray-900 text-center mb-3">WhatsApp Alerts</h3>
        <p className="text-gray-600 text-center leading-relaxed">
          Send instant WhatsApp updates like order confirmations, delivery status, 
          client reminders, employee notifications, and more — all automatically.
        </p>
      </div>

      {/* Email */}
      <div 
        className="bg-white shadow-lg rounded-3xl p-10 border hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
        data-aos="zoom-in-up"
        data-aos-delay="150"
      >
        <img 
          src="/img/Gmail.jpeg" 
          alt="Email" 
          className="h-20 mx-auto mb-8 object-contain"
        />
        <h3 className="text-2xl font-semibold text-gray-900 text-center mb-3">Email Notifications</h3>
        <p className="text-gray-600 text-center leading-relaxed">
          Automate emails for invoices, receipts, client communication, product updates, 
          marketing messages, and internal company alerts.
        </p>
      </div>

      {/* SMS */}
      <div 
        className="bg-white shadow-lg rounded-3xl p-10 border hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
        data-aos="zoom-in-up"
        data-aos-delay="300"
      >
        <img 
          src="/img/sms.png" 
          alt="SMS" 
          className="h-24 mx-auto mb-6 object-contain"
        />
        <h3 className="text-2xl font-semibold text-gray-900 text-center mb-3">SMS Alerts</h3>
        <p className="text-gray-600 text-center leading-relaxed">
          Quick SMS notifications for urgent updates, order status, verification codes, 
          payment reminders, and internal team communication.
        </p>
      </div>

    </div>
  </div>
</section>

    </>
  );
}

export default Pages;
