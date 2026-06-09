import {
  BiCheckCircle,
  BiTrendingUp,
  BiGlobe,
  BiCodeAlt,
} from "react-icons/bi";

import { FaEnvelope, FaBuilding } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="bg-white py-20">

      {/* ================= WHO WE ARE HEADER ================= */}
  <div className="py-16 w-full -mt-6 mb-8 bg-gradient-to-r from-primary via-primary to-orange-500 shadow-xl">
        <div
          className="max-w-7xl mx-auto px-6 lg:px-8 text-center"
          data-aos="fade-up"
        >
          <h1 className="text-5xl font-bold text-white mb-6">
            Who We Are
          </h1>
    <p className="text-gray-50 leading-relaxed max-w-3xl mx-auto text-lg font-light">
            MyoSpaz Technologies transforms businesses through innovative
            software solutions, combining technical expertise with strategic
            digital marketing.
          </p>
        </div>
      </div>

      {/* ================= IMAGE + STORY ================= */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">

          <div data-aos="fade-right" className="h-full">
            <div className="rounded-3xl overflow-hidden h-full min-h-[500px] bg-black flex items-center justify-center shadow-2xl border-4 border-primary/20 hover:border-primary/50 transition-all duration-300">
              <video
                width="100%"
                height="100%"
                autoPlay
                muted
                loop
                className="w-full h-full object-cover"
              >
                <source src="/videos/myospaz-video.mp4" type="video/mp4" />
                Your browser doesn't support HTML5 video.
              </video>
            </div>
          </div>

          <div
            data-aos="fade-left"
            className="flex flex-col justify-center h-full"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8 relative pb-4">
              <span className="absolute bottom-0 left-0 w-20 h-1 bg-gradient-to-r from-primary to-orange-400"></span>
              Our Story
            </h2>

         <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p className="hover:text-gray-900 transition-colors duration-300">
                Founded in 2013,{" "}
                <span className="font-bold bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
                  MyoSpaz Technologies
                </span>{" "}
                began as a visionary startup in Pune with a mission to bridge
                the technology gap for small and medium businesses.
              </p>
              <p className="hover:text-gray-900 transition-colors duration-300">
                Today, we stand as a full-service digital transformation
                partner, helping organizations streamline operations through
                custom software solutions, cloud technologies, and strategic
                digital marketing.
              </p>
              <p className="hover:text-gray-900 transition-colors duration-300">
                Our flagship products like the{" "}
                <strong className="text-primary">Complaint Management System</strong> and{" "}
                <strong className="text-primary"> Artopaz</strong> have set industry benchmarks,
                earning recognition at prestigious platforms including the
                International Tattoo Carnival.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= CORE VALUES ================= */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-20 text-center">
        <h3 className="text-4xl font-bold text-gray-900 mb-3 relative inline-block">
          Our Core Values
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-primary to-orange-400"></span>
        </h3>
        <p className="text-gray-600 mt-8 text-lg max-w-2xl mx-auto">The principles that drive our innovation and success</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <BiTrendingUp className="text-2xl" />,
              title: "Innovation",
              text: "Constantly pushing boundaries with cutting-edge tech",
            },
            {
              icon: <BiCheckCircle className="text-2xl" />,
              title: "Reliability",
              text: "Delivering stable, secure solutions you can trust",
            },
            {
              icon: <BiGlobe className="text-2xl" />,
              title: "Global Mindset",
              text: "Solutions designed for worldwide scalability",
            },
            {
              icon: <BiCodeAlt className="text-2xl" />,
              title: "Excellence",
              text: "Meticulous attention to every line of code",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="relative rounded-2xl p-8 bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-100 hover:border-primary/30 group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-orange-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 text-center">
                <div className="bg-gradient-to-br from-primary/10 to-orange-400/10 w-16 h-16 mx-auto rounded-full flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <h4 className="font-bold text-lg text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
             <p className="text-gray-600 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= MILESTONES ================= */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-28" data-aos="fade-up">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 relative inline-block">
            Our Milestones
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-primary to-orange-400"></span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-8">
            Key achievements that showcase our journey and capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Digital Transformation Pioneers",
              description:
                "Pioneered end-to-end digital transformation for small and mid-size businesses across India.",
              icon: <BiTrendingUp className="text-3xl text-primary" />,
            },
            {
              title: "Global Solutions",
              description:
                "Built 100+ customized solutions for diverse clients worldwide across 8 industries.",
              icon: <BiGlobe className="text-3xl text-primary" />,
            },
            {
              title: "Specialized Expertise",
              description:
                "Developed industry-specific software for Broadband Service Providers with 98% satisfaction rate.",
              icon: <BiCodeAlt className="text-3xl text-primary" />,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="relative rounded-2xl shadow-lg hover:shadow-2xl p-8 bg-white border border-gray-100 hover:border-primary/30 transition-all duration-300 group transform hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-orange-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-primary/20 to-orange-400/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:from-primary group-hover:to-orange-400 group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
             <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= CTA WITH ICONS ================= */}
      <div
        className="bg-gradient-to-r from-primary via-orange-500 to-orange-400 rounded-3xl p-12 text-white mb-20 max-w-7xl mx-auto text-center shadow-2xl"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold mb-6 text-white">
          Ready to Transform Your Business?
        </h2>
       <p className="text-white/90 leading-relaxed mb-10 max-w-2xl mx-auto text-lg">
          Our team of experts is ready to discuss your project and explore how
          we can help you achieve your goals.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="/contact"
            className="inline-flex items-center bg-white text-primary text-lg font-semibold px-8 py-4 rounded-full hover:bg-gray-50 hover:shadow-xl transition-all duration-300 shadow-lg transform hover:scale-105"
          >
            <FaEnvelope className="mr-2 text-xl" />
            Contact Our Team
          </a>

          <a
            href="/pdf/Myospaz Software technologies.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white/20 backdrop-blur border-2 border-white text-white text-lg font-semibold px-8 py-4 rounded-full hover:bg-white/30 transition-all duration-300 shadow-lg transform hover:scale-105"
          >
            <FaBuilding className="mr-2 text-xl" />
            Company Profile
          </a>
        </div>
      </div>

    </section>
  );
};

export default About;

