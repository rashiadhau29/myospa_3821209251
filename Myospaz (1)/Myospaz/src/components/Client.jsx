import { useState } from 'react';
import { FiZoomIn, FiLink } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Client = [
  {
    id: 1,
    title: "Aiqm",
    // category: "app",
    image:"/img/Aiqm.jpeg"
    // description: "Lorem ipsum, dolor sit amet consectetur"
  },
  {
    id: 2,
    title: "Sustain By Mahindra",
    // category: "product",
    image:"/img/susten.jpeg"
    // description: "Lorem ipsum, dolor sit amet consectetur"
  },
  {
    id: 3,
    title: "Arya Electronics And Controls Private Limited",
    // category: "branding",
    image: "/img/aryaelelog.jpeg",
    description: "Lorem ipsum, dolor sit amet consectetur"
  },
  {
    id: 4,
    title: "Ashwini engineering",
    // category: "books",
    image: "/img/ashwinieng.jpeg",
    // description: "Lorem ipsum, dolor sit amet consectetur"
  },
  {
    id: 5,
    title: "Bhor Engineering",
    // category: "app",
    image: "/img/bhoreng.jpeg",
    // description: "Lorem ipsum, dolor sit amet consectetur"
  },
  {
    id: 6,
    title: "Vihang Infomedia Private Limited",
    // category: "product",
    image: "/img/vihanglog.jpeg",
    // description: "Lorem ipsum, dolor sit amet consectetur"
  },
  {
    id: 7,
    title: "Aqua Loisir Sarl",
    // category: "branding",
    image: "/img/aquaslpashlogo.jpeg",
    // description: "Lorem ipsum, dolor sit amet consectetur"
  },
  {
    id: 8,
    title: "Geet",
    // category: "books",
    image: "/img/geet.jpeg",
    // description: "Lorem ipsum, dolor sit amet consectetur"
  },
  {
    id: 9,
    title: "Geetai",
    // category: "app",
    image: "/img/geetai.jpeg",
    // description: "Lorem ipsum, dolr sit amet consectetur"
  },
  {
    id: 10,
    title: "Kirana Shop",
    // category: "product",
    image: "/img/kiranashop.jpeg",
    // description: "Lorem ipsum, dolor sit amet consectetur"
  },
  {
    id: 11,
    title: "G Square Techsystems Private Limited",
    // category: "branding",
    image: "/img/gsquarelogo.jpeg",
    // description: "Lorem ipsum, dolor sit amet consectetur"
  },
  {
    id: 12,
    title: "Mahindra Rise",
    // category: "books",
    image: "/img/mahindra.jpeg",
    // description: "Lorem ipsum, dolor sit amet consectetur"
  },
  {
    id: 13,
    title: "Ramelex",
    // category: "books",
    image: "/img/ramelex.jpeg",
    // description: "Lorem ipsum, dolor sit amet consectetur"
  },
  {
    id: 14,
    title: "Sunflower",
    // category: "books",
    image: "/img/sunflower.jpeg",
    // description: "Lorem ipsum, dolor sit amet consectetur"
  },
  {
    id: 15,
    title: "Vedant",
    // category: "books",
    image: "/img/vedant.jpeg",
    // description: "Lorem ipsum, dolor sit amet consectetur"
  },
  {
    id: 16,
    title: "Yagya",
    // category: "books",
    image: "/img/yagya.jpeg",
    // description: "Lorem ipsum, dolor sit amet consectetur"
  },
  {
    id: 17,
    title: "Yashwant Engineering",
    // category: "books",
    image: "/img/yashwanteng.jpeg",
    // description: "Lorem ipsum, dolor sit amet consectetur"
  },
  {
    id: 18,
    title: "Aaple Shivane",
    // category: "books",
    image: "/img/aapleshivane.jpeg",
    // description: "Lorem ipsum, dolor sit amet consectetur"
  },
  {
    id: 19,
    title: "NerdMine Private Limited",
    // category: "books",
    image: "/img/nerdmindlog.jpeg",
    // description: "Lorem ipsum, dolor sit amet consectetur"
  },
  {
    id: 20,
    title: "Master Metrology",
    // category: "books",
    image: "/img/mastermetrologo.jpg",
    // description: "Lorem ipsum, dolor sit amet consectetur"
  },
  {
    id: 21,
    title: "Shree Cable Trays Private Limited",
    // category: "books",
    image: "/img/shreecablelogo.jpeg",
    // description: "Lorem ipsum, dolor sit amet consectetur"
  },
  {
    id: 22,
    title: "Viva foods and beverages",
    // category: "books",
    image: "/img/vivafoodlog.jpeg",
    // description: "Lorem ipsum, dolor sit amet consectetur"
  },
  {
    id: 23,
    title: "Pentagen Biofuels Pvt. Ltd.",
    // category: "books",
    image: "/img/pentagenlogo.jpeg",
    // description: "Lorem ipsum, dolor sit amet consectetur"
  },
  {
    id: 24,
    title: "Suroj Modular Housing PVT LTD",
    // category: "books",
    image: "/img/surajmodulaelog.jpeg",
    // description: "Lorem ipsum, dolor sit amet consectetur"
  }

];


const Clients = () => {
  const [activeFilter, setActiveFilter] = useState('*');
  const [items] = useState(Client);

  const filteredItems = activeFilter === '*' 
    ? items 
    : items.filter(item => item.category === activeFilter);

  return (

  <section
    id="portfolio"
    className="portfolio section bg-gray-100 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/img/clientbg.jpg')" }}
  >
    <div className="container mx-auto px-4 py-8">
      <div className="section-title text-center" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">OUR CLIENTS</h2>
        <p className="text-base md:text-lg text-white mb-6 opacity-90">Trusted by industry leaders</p>
    </div>

      <div data-aos="fade-up" data-aos-delay="200">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640:  { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}

          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="pt-10"
        >
          {Client.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="portfolio-item px-2 flex justify-center">
                <div className="portfolio-content w-[100px] h-[100px] flex items-center justify-center overflow-hidden rounded-lg bg-white">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  </section>

  );
};

export default Clients;


{/* <section
  id="portfolio"
  className="portfolio section py-8 bg-gray-100 bg-cover bg-center bg-no-repeat h-80"
  style={{ backgroundImage: "url('/public/clientbg.jpg')" }}
>
  <div className="container mx-auto px-4">
    <div className="section-title text-center" data-aos="fade-up">
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">OUR CLIENTS</h2>
      <p className="text-base md:text-lg text-white mb-6 opacity-90">Trusted by industry leaders</p>
    </div>

    <div data-aos="fade-up" data-aos-delay="200">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="pt-10"
      >
        {Client.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="portfolio-item px-2 flex justify-center">
              <div className="portfolio-content w-[100px] h-[100px] flex items-center justify-center overflow-hidden rounded-lg bg-white">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
</section> */}