// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Products } from "../Constant";

// const ProductsPage = () => {
//   const [activeTab, setActiveTab] = useState("corporate");

//   return (
//     <section className="py-28">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-10" data-aos="fade-up">
//           Our Products
//         </h2>

//         <div className="flex justify-center mb-12" data-aos="fade-up">
//           <div className="inline-flex rounded-md shadow-sm">
//             <button
//               onClick={() => setActiveTab("corporate")}
//               className={`px-6 py-3 text-sm font-medium rounded-l-lg ${
//                 activeTab === "corporate"
//                   ? "bg-primary text-white"
//                   : "bg-gray-300 text-gray-700 hover:bg-gray-100"
//               }`}
//             >
//               Corporate Solutions
//             </button>
//             <button
//               onClick={() => setActiveTab("others")}
//               className={`px-6 py-3 text-sm font-medium rounded-r-lg ${
//                 activeTab === "others"
//                   ? "bg-primary text-white"
//                   : "bg-gray-300 text-gray-700  hover:bg-gray-100"
//               }`}
//             >
//               Other Services
//             </button>
//           </div>
//         </div>

//         <div
//           className="relative w-full py-12 overflow-hidden"
//           data-aos="fade-up"
//         >
//           {/* Blurred Background Image using <img> */}
//           <img
//             src="/img/productbg.jpg"
//             alt="Background"
//             className="absolute inset-0 w-full h-full object-cover filter blur-sm scale-105 z-0"
//           />

//           {/* Optional overlay for contrast */}
//           <div className="absolute inset-0 bg-white/60 z-0"></div>

//           {/* Foreground Content */}
//           <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {Products[activeTab].map((product, index) => (
//                 <div
//                   key={product.id}
//                   className="bg-white rounded-xl shadow-md py-6 px-4 hover:shadow-lg transition-all flex flex-col"
//                   data-aos="zoom-in"
//                   data-aos-delay={100 * index}
//                 >
//                   <div className="text-primary text-4xl mb-4">
//                     <i className={`bi ${product.icon}`}></i>
//                   </div>
//                   <h3 className="text-xl font-bold mb-3 text-primary">
//                     {product.title}
//                   </h3>
//                   <p className="text-gray-600 mb-4 flex-grow">
//                     {product.shortDescription}
//                   </p>
//                   <Link
//                     to={`/products/${activeTab}/${product.id}`}
//                     className="text-primary font-medium hover:text-secondary transition-colors inline-flex items-center mt-4"
//                   >
//                     Learn more
//                     <i className="bi bi-arrow-right ml-2"></i>
//                   </Link>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductsPage;

import { useState } from "react";
import { Link } from "react-router-dom";
import { Products } from "../Constant";

const ProductsPage = () => {
  const [activeTab, setActiveTab] = useState("corporate");

  const pdfUrl = "/pdfs/products-brochure.pdf"; // PDF path

  return (
    <div className="bg-white">
      {/* Banner Section */}
      <section className="py-16 bg-amber-50">
      {/* Banner */}
      <div className="relative w-full  mb-14 flex items-center justify-center overflow-hidden">
        <img
          src="/img/product background final.jpeg"
          alt="Products Banner"
          className="w-full h-90 object-contain object-top"
        />
        </div>

        {/* Banner PDF Button */}
        {/* Banner PDF Button */}
<div className="absolute right-4 sm:right-6 md:right-9 bottom-6 sm:bottom-8 md:top-[90%] transform md:-translate-y-1/2 z-10">
  <a
    href="/public/pdf/company-profile.pdf"
    target="_blank"
    rel="noreferrer"
    className="
      bg-blue-950 text-white 
      px-6 py-2 text-sm
      sm:px-10 sm:py-3 sm:text-base
      md:px-28 md:py-3 md:text-lg
      rounded-md shadow-lg 
      hover:bg-green-800 transition
      whitespace-nowrap
    "
  >
    {/* OUR SERVICES ⬇️ */}
    Download PDF⬇️
  </a>
</div>

      </section>

      <section className="py-12 bg-sky-50">
        <div className="container mx-auto px-4">
          {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => setActiveTab("corporate")}
              className={`px-6 py-3 text-sm font-medium rounded-l-lg ${
                activeTab === "corporate"
                  ? "bg-green-700 text-white"
                  : "bg-gray-300 text-gray-700"
              }`}
            >
              Corporate Solutions
            </button>

            <button
              onClick={() => setActiveTab("others")}
              className={`px-6 py-3 text-sm font-medium rounded-r-lg ${
                activeTab === "others"
                  ? "bg-green-700 text-white"
                  : "bg-gray-300 text-gray-700"
              }`}
            >
              Other Services
            </button>
          </div>
        </div>
          </div>
      </section>

      {/* Cards Grid */}
      <section className="relative w-full py-16 bg-emerald-50">
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Products[activeTab].map((product, index) => (
                <div
                  key={product.id}
                  className="relative rounded-xl shadow-md py-6 px-4 hover:shadow-xl transition-all duration-300 flex flex-col hover:scale-105 min-h-80 overflow-hidden"
                  style={{
                    backgroundImage: `url("/img/image.png")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="relative z-10 flex flex-col flex-grow text-white">
                    <div className="text-4xl mb-4">
                      <i className={`bi ${product.icon}`}></i>
                    </div>

                    <h3 className="text-xl font-bold mb-3">
                      {product.title}
                    </h3>

                    <p className="text-white/90 mb-4 flex-grow">
                      {product.shortDescription}
                    </p>

                    <Link
                      to={`/products/${activeTab}/${product.id}`}
                      className="font-medium inline-flex items-center mt-auto"
                    >
                      Learn more ➜
                      <i className="bi bi-arrow-right ml-2"></i>
                    </Link>
                  </div>
                </div> 
              ))}
            </div>
          </div>
        </section>

        {/* Bottom PDF Button */}
        <section className="py-16 bg-rose-50">
          <div className="flex justify-center">
          <a
            href="/public/pdf/Marketing Report Doc.pdf"
            target="_blank"
            rel="noreferrer"
            className="bg-blue-950 text-white px-8 py-3 rounded-md shadow-lg hover:bg-green-800 transition"
          >
            Download Services ⬇️
          </a>
          </div>
        </section>
      </div>
  );
};

export default ProductsPage;