// import React, { useState } from "react";
// import { FiExternalLink } from "react-icons/fi";

// const videoData = [
//   {
//     title: "Who We Are!",
//     description:
//       "Myospaz Software Technologies has excelled in delivering customized software solutions in Pune, India and globally. With a team of experts in ERP, CRM, Mobile Applications, and more, Myospaz Software has emerged as a rapidly growing organization in IT Services and Business Solutions.",
//     link: "https://www.youtube.com/watch?v=kakHvEg3gSU",
//     thumbnail: "https://img.youtube.com/vi/kakHvEg3gSU/maxresdefault.jpg",

//   },
//   {
//     title: "A Glimpse Of Our Work!",
//     description:
//       "We consider every project an opportunity for intelligent and fun collaboration with our clients. Our work reflects what we’re passionate about and showcases the many possibilities we offer to help you or your organization.",
//     link: "https://youtu.be/RMfdwQIg9Rs",
//     thumbnail: "https://img.youtube.com/vi/RMfdwQIg9Rs/maxresdefault.jpg",
//   },
// ];

// const tabData =
// [
//   {
//     title: "✅ Easy Solutions Based on Your Requirements",
//     subtitle: `"You don’t need to change—our software adapts to you."`,
//     content:
//       "We understand that every business is unique. That’s why we build flexible and customizable software solutions that align perfectly with your needs no compromises, no rigid systems. You tell us what you need, and we make it happen.",
//   },
//   // {
//   //   title: "✅ Tailored & Custom Solutions",
//   //   subtitle: `"Your vision, our customized code."`,
//   //   content:
//   //     "We specialize in building websites and software products that are fully customized to meet your unique business needs. No cookie-cutter templates—just smart, scalable solutions designed for your success.",
//   // },
//   {
//     title: "✅ Regular Reviews & Feedback Loops",
//     subtitle: `"We build with you, not just for you."`,
//     content:
//       "We conduct regular project reviews, demos, and feedback sessions to make sure you’re involved at every step. This ensures the final product is precisely what you need—and nothing gets lost in translation.",
//   },
//   {
//     title: "✅ High Quality Standards",
//     subtitle: `"Every feature tested, every user happy."`,
//     content:
//       "From wireframe to deployment, our team follows best coding practices and thorough testing to ensure a reliable, secure, and seamless user experience across devices.",
//   },
//   {
//     title: "✅ Post-Launch Support",
//     subtitle: `"We’re still here after go-live."`,
//     content:
//       "Our commitment doesn’t stop after launch. We offer continued support, performance monitoring, and timely upgrades to keep your solution running smoothly and evolving with your business.",
//   },
// ];

// const CompanyOverview = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const handleClick = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <section className="py-20 bg-gray-100">
//       <div className="container mx-auto px-4">

//         <div className="grid md:grid-cols-2 gap-12 items-start mb-20">

//           <div className="bg-white rounded-xl shadow-md p-6">
//             <h2 className="text-3xl font-bold mb-4">Our Process</h2>
//             <p className="text-gray-700 mb-4">
//               Process is the predominant phase in the product lifecycle. We follow an agile process to deliver the product.
//             </p>
//             <img
//               src='/img/ourproces.jpeg'
//               alt="Our Process"
//               className="w-full rounded-lg object-cover h-60"
//             />
//           </div>

//           <div className="bg-white rounded-xl shadow-md p-6">
//             <h2 className="text-3xl font-bold mb-6">Why People Like Us?</h2>

//             <div className="flex flex-col gap-2">
//               {tabData.map((item, index) => (
//                 <div key={index}>
//                   <button
//                     onClick={() => handleClick(index)}
//                     className={`w-full text-left px-4 py-2 rounded-md transition font-medium ${
//                       activeIndex === index
//                         ? "bg-primary text-white"
//                         : "bg-gray-200 text-gray-800 hover:bg-primary hover:text-white"
//                     }`}
//                   >
//                     {item.title}
//                   </button>
//                   {activeIndex === index && (
//                     <div className="mt-2 mb-4 bg-gray-50 p-4 rounded-lg border border-gray-200 text-gray-700">
//                       <p>{item.content}</p>
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Videos Section */}
//         <div className="grid md:grid-cols-2 gap-10">
//           {videoData.map((video, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
//             >
//               <a href={video.link} target="_blank" rel="noopener noreferrer">
//                 <img
//                   src={video.thumbnail}
//                   alt={video.title}
//                   className="w-full h-60 object-cover"
//                 />
//               </a>
//               <div className="p-6">
//                 <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
//                   {video.title}
//                   <FiExternalLink className="text-primary" />
//                 </h3>
//                 <p className="text-gray-600">{video.description}</p>
//                 <a
//                   href={video.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-block mt-4 text-primary font-semibold hover:underline"
//                 >
//                   Watch on YouTube →
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CompanyOverview;

import React, { useState } from "react";
import { FiExternalLink, FiPlay, FiChevronDown, FiCheck } from "react-icons/fi";

const videoData = [
  {
    title: "Who We Are!",
    description:
      "Myospaz Software Technologies has excelled in delivering customized software solutions in Pune, India and globally. With a team of experts in ERP, CRM, Mobile Applications, and more, Myospaz Software has emerged as a rapidly growing organization in IT Services and Business Solutions.",
    link: "https://www.youtube.com/watch?v=kakHvEg3gSU",
    thumbnail: "https://img.youtube.com/vi/kakHvEg3gSU/maxresdefault.jpg",
  },
  {
    title: "A Glimpse Of Our Work!",
    description:
      "We consider every project an opportunity for intelligent and fun collaboration with our clients. Our work reflects what we're passionate about and showcases the many possibilities we offer to help you or your organization.",
    link: "https://youtu.be/RMfdwQIg9Rs",
    thumbnail: "https://img.youtube.com/vi/RMfdwQIg9Rs/maxresdefault.jpg",
  },
];

const tabData = [
  {
    title: "Easy Solutions Based on Your Requirements",
    subtitle: `"You don't need to change—our software adapts to you."`,
    content:
      "We understand that every business is unique. That's why we build flexible and customizable software solutions that align perfectly with your needs no compromises, no rigid systems. You tell us what you need, and we make it happen.",
  },
  {
    title: "Regular Reviews & Feedback Loops",
    subtitle: `"We build with you, not just for you."`,
    content:
      "We conduct regular project reviews, demos, and feedback sessions to make sure you're involved at every step. This ensures the final product is precisely what you need—and nothing gets lost in translation.",
  },
  {
    title: "High Quality Standards",
    subtitle: `"Every feature tested, every user happy."`,
    content:
      "From wireframe to deployment, our team follows best coding practices and thorough testing to ensure a reliable, secure, and seamless user experience across devices.",
  },
  {
    title: "Post-Launch Support",
    subtitle: `"We're still here after go-live."`,
    content:
      "Our commitment doesn't stop after launch. We offer continued support, performance monitoring, and timely upgrades to keep your solution running smoothly and evolving with your business.",
  },
];

const CompanyOverview = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 bg-gradient-to-br from-green-100 bg-blue-100">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            How We Deliver Excellence
          </h1>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Discover our proven process and understand why clients choose us for
            their digital transformation journey
          </p>
        </div>

       {/* Main Content Grid */}
<div className="grid lg:grid-cols-2 gap-12 items-stretch mb-20">
  {/* Process Card */}
  <div
    className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20 hover:shadow-2xl transition-all duration-500 h-full flex flex-col"
    data-aos="fade-right"
  >
    <div className="flex items-center gap-3 mb-6">
      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
        <FiPlay className="text-white text-xl" />
      </div>
      <h2 className="text-2xl font-bold text-gray-900">Our Process</h2>
    </div>

  <p className="text-gray-600 leading-relaxed mb-6">
      Process is the predominant phase in the product lifecycle. We follow an agile process to deliver the product with precision and efficiency.
    </p>

    <div className="relative group flex-1">
      <img
        src="/img/ourproces.jpeg"
        alt="Our Agile Development Process"
        className="w-full rounded-xl object-cover h-70 shadow-lg group-hover:scale-105 transition-transform duration-500"
      />
      <br />
      <img
        src="/img/Our Process Home.jpeg"
        alt="Our Agile Development Process"
        className="w-full rounded-xl object-cover h-70 shadow-lg group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  </div>

  {/* Why Choose Us - Accordion */}
  <div
    className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20 h-full flex flex-col"
    data-aos="fade-left"
  >
    <div className="flex items-center gap-3 mb-8">
      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
        <FiCheck className="text-white text-xl" />
      </div>
      <h2 className="text-2xl font-bold text-gray-900">Why Choose Us?</h2>
    </div>

    <div className="space-y-4 flex-1">
      {tabData.map((item, index) => (
        <div
          key={index}
          className="border border-gray-200/60 rounded-xl overflow-hidden transition-all duration-300 hover:border-blue-300/50"
        >
          <button
            onClick={() =>
              setActiveIndex(activeIndex === index ? null : index)
            }
            className={`w-full text-left p-6 transition-all duration-300 ${
              activeIndex === index
                ? "bg-gradient-to-r from-blue-50 to-indigo-50/50"
                : "bg-white hover:bg-gray-50/80"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    activeIndex === index
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  <FiCheck className="text-sm" />
                </div>
                <div>
                  <h3
                    className={`text-lg font-semibold ${
                      activeIndex === index
                        ? "text-blue-600"
                        : "text-gray-900"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{item.subtitle}</p>
                </div>
              </div>
              <FiChevronDown
                className={`text-gray-400 transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>
          </button>

          {activeIndex === index && (
            <div className="px-6 pb-6 animate-fadeIn">
              <div className="pl-12 border-l-2 border-blue-200">
                <p className="text-gray-600 leading-relaxed">
                  {item.content}
                </p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
</div>
        {/* Videos Section */}
        <div data-aos="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              See Us in Action
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Get to know our team, our culture, and the work we're passionate
              about
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {videoData.map((video, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-white/20"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <FiPlay className="text-blue-600 text-2xl ml-1" />
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                      {video.title}
                    </h3>
                    <FiExternalLink className="text-blue-500 flex-shrink-0" />
                  </div>

            <p className="text-gray-600 leading-relaxed mb-6">
                    {video.description}
                  </p>

                  <a
                    href={video.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 
  bg-gradient-to-r from-primary to-primary/80 
  text-white font-semibold rounded-xl
  hover:from-primary/90 hover:to-primary/70 
  transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <FiPlay className="text-lg" />
                    Watch on YouTube
                  </a>
                </div>
                
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        {/* <div
          className="text-center mt-16 pt-8 border-t border-gray-200/50"
          data-aos="fade-up"
        >
          <p className="text-gray-600 text-lg mb-6">
            Ready to start your project with us?
          </p>
          <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-2xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 transform text-lg">
            Start Your Project Today
            <FiChevronDown className="transform rotate-90 text-xl" />
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default CompanyOverview;
