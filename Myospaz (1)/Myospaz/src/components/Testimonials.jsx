import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { FiStar } from 'react-icons/fi';
import { BsQuote } from 'react-icons/bs';

const testimonials = [
  {
    id: 1,
    name: "Vedant Public School",
    // position: "Ceo & Founder",
    image: "/img/vedant.jpeg",
    quote: "MyosPaz transformed our school operations by streamlining attendance, fees, and communication — all in one powerful platform."
  },
  {
    id: 2,
    name: "G Square Techsystems Private Limited",
    image: "/img/gsquarelogo.jpeg",
    quote: "DTrack has drastically reduced our product data confusion and improved release cycles!"
  },
  {
    id: 3,
    name: "Bhor Engineering",
    image: "/img/bhoreng.jpeg",
    quote: "MyosPaz empowered our business with a complete digital suite — from managing product lifecycles through PMS, tracking inventory in real time, to building customized apps tailored exactly to our workflow. Everything now runs smarter, faster, and more efficiently."
  },
  {
    id: 4,
    name: "Ramelex",
    // image: "/public/client/ramelex.jpeg",
    image: "/img/ramelex.jpeg",
    quote: "MyosPaz transformed our school operations with an efficient School ERP system and a customized website, streamlining attendance, fee management, and parent communication in one seamless experience."
  },
  {
    id: 5,
    name: "Jay Engineering",
    // image: "/public/client/susten.jpeg",
    image: "/img/susten.jpeg",
    quote: "PDM transformed how we manage projects—seamless uploads, real-time tracking, and complete control over our assemblies."
  },
  {
    id: 6,
    name: "Sunflower Public School",
    // image: "/public/client/sunflower.jpeg",
    image: "/img/sunflower.jpeg",
    quote: "MyosPaz transformed our school operations by streamlining attendance, fees, and communication — all in one powerful platform."
  },
  {
    id: 7,
    name: "Yashwant Engineering",
    // image: "/public/client/yashwanteng.jpeg",
    image: "/img/yashwanteng.jpeg",
    quote: "Tracking production orders and managing resources became seamless with this system"
  },
  {
    id: 8,
    name: "Karmayogi Babaraoji Jogdand College of Agriculture",
    // image: "/public/client/agriclglogo.jpg",
    image: "/img/agriclglogo.jpg",
    quote: "The integration of attendance, fee management, and communication tools into one system has made a significant difference in our college operations, thanks to MyosPaz."
  },
  {
    id: 9,
    name: "Aqua Splash",
    // image: "/public/client/aquaslpashlogo.png",
    image: "/img/aquaslpashlogo.jpeg",
    quote: "MyosPaz designed a beautiful and responsive food ordering site that significantly boosted our online orders, and with their eFood and Delivery app, our entire delivery process has become seamless"
  },
  {
    id: 10,
    name: "AIQM",
    // image: "/public/client/Aiqm.jpeg",
    image: "/img/Aiqm.jpeg",
    quote: "MyosPaz transformed our school operations by streamlining attendance, fees, and communication — all in one powerful platform."
  },
 
 
];

const Testimonials = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (

      <section id="testimonials" className="testimonials section dark-background relative py-20 bg-gray-900 text-white">
        <img 
          // src="/src/assets/img/testimonials-bg.jpg" 
          src ="/img/testimonials-bg.jpg"
          alt="" 
          className="testimonials-bg absolute inset-0 w-full h-full object-cover opacity-20"
        />
    
        <div className="container mx-auto px-4 relative z-10" data-aos="fade-up" data-aos-delay="100">

        <Swiper
          modules={[Autoplay]} 
          spaceBetween={30}
          slidesPerView={isMobile ? 1 : 'auto'}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="pb-12"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="max-w-2xl mx-auto">
              <div className="testimonial-item text-center px-4">
                <img 
                  src={testimonial.image} 
                  className="testimonial-img w-24 h-24 rounded-full mx-auto mb-4 object-contain bg-white p-2" 
                  alt={testimonial.name}
                />
                <h3 className="text-xl font-bold">{testimonial.name}</h3>
                <h4 className="text-gray-400 mb-4">{testimonial.position}</h4>
                <p className="relative">
                  <BsQuote className="absolute -right-6 -bottom-2 text-gray-600 text-2xl" />
                  <span className="block italic">{testimonial.quote}</span>
                  <BsQuote className="absolute -right-6 -bottom-2 text-gray-600 text-2xl" />
                </p>
              </div>
            </SwiperSlide>
          ))}
        
        </Swiper>

        </div>
      </section>
    );
    

};

export default Testimonials;