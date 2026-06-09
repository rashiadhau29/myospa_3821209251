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
  <div className="py-10 w-full -mt-6 mb-8 bg-primary">
        <div
          className="max-w-7xl mx-auto px-6 lg:px-8 text-center"
          data-aos="fade-up"
        >
          <h1 className="text-4xl font-bold text-white mb-6">
            Who We Are
          </h1>
    <p className="text-gray-200 leading-relaxed max-w-3xl mx-auto">
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
            <div className="rounded-3xl overflow-hidden h-full min-h-[500px]">
              <img
                src="/img/aboutimage1.jpg"
                alt="MyoSpaz Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div
            data-aos="fade-left"
            className="flex flex-col justify-center h-full"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 relative pb-4">
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-primary"></span>
              Our Story
            </h2>

         <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Founded in 2013,{" "}
                <span className="font-semibold text-primary">
                  MyoSpaz Technologies
                </span>{" "}
                began as a visionary startup in Pune with a mission to bridge
                the technology gap for small and medium businesses.
              </p>
              <p>
                Today, we stand as a full-service digital transformation
                partner, helping organizations streamline operations through
                custom software solutions, cloud technologies, and strategic
                digital marketing.
              </p>
              <p>
                Our flagship products like the{" "}
                <strong>Complaint Management System</strong> and{" "}
                <strong> Artopaz</strong> have set industry benchmarks,
                earning recognition at prestigious platforms including the
                International Tattoo Carnival.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= CORE VALUES ================= */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10 text-center">
        <h3 className="text-3xl font-bold text-gray-900">
          Our Core Values
        </h3>
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
              className="relative rounded-xl p-6 bg-cover bg-center shadow-md hover:shadow-lg transition"
              style={{ backgroundImage: "url('/img/productbg.jpg')" }}
            >
              <div className="absolute inset-0 bg-white/80 rounded-xl"></div>
              <div className="relative z-10 text-center">
                <div className="bg-primary/10 w-12 h-12 mx-auto rounded-full flex items-center justify-center text-primary mb-4">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
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
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Our Milestones
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
              className="relative rounded-xl shadow-lg p-8 bg-cover bg-center"
              style={{ backgroundImage: "url('/img/productbg.jpg')" }}
            >
              <div className="absolute inset-0 bg-white/80 rounded-xl"></div>
              <div className="relative z-10">
                <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
             <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= CTA WITH ICONS ================= */}
      <div
        className="bg-gradient-to-r from-red-200 to-primary rounded-2xl p-10 text-black mb-20 max-w-7xl mx-auto text-center"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-bold mb-6">
          Ready to Transform Your Business?
        </h2>
       <p className="text-gray-700 leading-relaxed mb-8 max-w-2xl mx-auto">
          Our team of experts is ready to discuss your project and explore how
          we can help you achieve your goals.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="/contact"
            className="inline-flex items-center bg-white text-primary text-lg font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            <FaEnvelope className="mr-2 text-xl" />
            Contact Our Team
          </a>

          <a
            href="/pdf/Myospaz Software technologies.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-primary text-lg font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
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

