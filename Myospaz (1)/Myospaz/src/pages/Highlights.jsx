import { image } from "framer-motion/client";
import { useState } from "react";

const highlights = [
  {
    title: "Responsive Design",
    image: "/img/responsive design.jpeg",
    content:
      "We believe in partnering with you to create an integrated effort to grow your ideas to a next level. You’ll get the benefits of a team that listens and accordingly work on your ideas. A team that is creative and experienced enough to sort out the difficulties. And a team that uses the latest web technology tools to ensure your product performs and ensure the efficiency of your product.",
  },

  {
    title: "Technologies We Work On",
    content:
      "We work on modern and scalable technologies to develop high-quality software solutions.",
    images: [
      "/img/php.png",
      "/img/wordpress.png",
      "/img/react-native.png",
      "/img/flutter.png",
      "/img/shopify.png",
      "/img/nodejs.png",
    ],
  },

  {
    title: "Achievements",
    content:
      "Established in 2013 as a startup, MyosPaz has achieved remarkable success with strong product growth across industrial IT systems, websites, e-commerce platforms, and various IT services globally. The company has significantly expanded its client base and earned appreciation for simplifying complex services through innovative solutions. During this journey, MyosPaz has gained valuable experience collaborating with renowned clients such as Mahindra, Aqua Splash (Congo), and multiple Japanese organizations, contributing to high-quality project delivery and strengthening international partnerships.",
  },

 {
    title: "Our Philosophy",
    content: `
    We believe in creating simple, fast, and reliable digital solutions.
    Our focus is to understand our clients' needs and deliver high-quality work with honesty, innovation, and commitment.
    `,
    image: "/img/philosophy.jpeg"
  },

  {
    title: "What We Do",
    content:
      "We provide customized software solutions and mobile applications based on client requirements. From requirement gathering to project delivery, our team constantly works to deliver the best solution. Myospaz Software Technologies specializes in customized solutions in E-commerce, ERP, CRM, Mobile Development, and more.",
  },
];

const HighlightsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16 bg-gray-50" id="why-myospaz">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* LEFT SIDE BUTTONS */}
        <div className="space-y-4">
          {highlights.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`block w-full text-left px-4 py-3 rounded-lg border hover:bg-primary hover:text-white transition-all duration-300 ${
                activeIndex === index
                  ? "bg-primary text-white"
                  : "bg-white text-gray-700 border-gray-300"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* RIGHT SIDE CONTENT BOX */}
        <div className="md:col-span-2 bg-white rounded-xl shadow-md p-6 text-gray-700 leading-relaxed">

          <h3 className="text-2xl font-bold text-primary mb-4 justify-center items-center">
            {highlights[activeIndex].title}
          </h3>

       <p className="text-gray-600 leading-relaxed">
  {highlights[activeIndex].content}
</p>

          {/* SHOW SINGLE IMAGE */}
          {highlights[activeIndex].image && (
            <img
              src={highlights[activeIndex].image}
              alt=""
            className="w-1/2 max-w-md mt-4 rounded-lg shadow-md mx-auto block"
            />
          )}

          {/* SHOW MULTIPLE IMAGES */}
          {Array.isArray(highlights[activeIndex].images) && (
            <div className="flex flex-wrap gap-6 mt-6">
              {highlights[activeIndex].images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="Tech"
                  className="w-50 h-50 object-contain hover:scale-110 transition-transform duration-300"
                />
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default HighlightsSection;
