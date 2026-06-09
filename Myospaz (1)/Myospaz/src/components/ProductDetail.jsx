// import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import { Products } from "../Constant";

// const ProductDetail = () => {
//   const { category, id } = useParams();

//   const product = Products[category]?.find((item) => item.id === parseInt(id));

//   const navigate = useNavigate();

//   const handleContactClick = () => {
//     navigate("/contact");
//   };

//   if (!product) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-white">
//         <div className="max-w-md text-center p-8 bg-white rounded-xl shadow-lg">
//           <h2 className="text-3xl font-bold text-gray-800 mb-4">
//             Product Not Found
//           </h2>
//           <p className="text-gray-600 mb-6">
//             The requested product doesn't exist or has been removed.
//           </p>
//           <a
//             href="/products"
//             className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
//           >
//             Back to Products
//           </a>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12">
//       <div className="container mx-auto px-4">
//         <button
//           onClick={() => navigate("/product")}
//           className="bg-gray-200 hover:bg-gray-300 text-gray-800 mt-10 font-semibold py-2 px-4 rounded inline-flex items-center"
//         >
//           <i className="bi bi-arrow-left mr-2"></i> Back
//         </button>

//         <div className="mb-8">
//           <nav className="flex" aria-label="Breadcrumb">
//             <ol className="inline-flex items-center space-x-1 mt-6 md:space-x-2">
//               <li className="inline-flex items-center">
//                 <a
//                   href="/"
//                   className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-blue-600"
//                 >
//                   <i className="bi bi-house-door mr-2"></i>
//                   Home
//                 </a>
//                 <span className="mx-2 text-gray-400">{">"}</span>
//               </li>
//               <li>
//                 <div className="flex items-center">
//                   <i className="bi bi-chevron-right text-gray-400"></i>
//                   <a
//                     href="/products"
//                     className="ml-1 text-sm font-medium text-gray-500 hover:text-blue-600 md:ml-2"
//                   >
//                     Products
//                   </a>
//                   <span className="mx-2 text-gray-400">{">"}</span>
//                 </div>
//               </li>
//               <li aria-current="page">
//                 <div className="flex items-center">
//                   <i className="bi bi-chevron-right text-gray-400"></i>
//                   <span className="ml-1 text-sm font-medium text-blue-600 md:ml-2">
//                     {product.title}
//                   </span>
//                 </div>
//               </li>
//             </ol>
//           </nav>
//         </div>

//         <div className="bg-white p-8 rounded-2xl shadow-lg mb-12">
//           <div className="flex items-center mb-2">
//             <span className="bg-primary-100 text-primary text-xs font-semibold px-2.5 py-0.5 rounded">
//               {category}
//             </span>
//           </div>
//           <h1 className="text-4xl font-bold text-gray-800 mb-4">
//             {product.title}
//           </h1>
//           <p className="text-xl text-gray-600 mb-6">
//             {product.shortDescription}
//           </p>

//           <div className="flex flex-wrap gap-4 mt-8">
//             <button
//               onClick={handleContactClick}
//               className="bg-gradient-to-r from-primary to-primary text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
//             >
//               <i className="bi bi-play-circle"></i> Contact Us
//             </button>
//             {/* <button className="border border-blue-600 text-primary px-6 py-3 rounded-lg hover:bg-primary transition-all duration-300 flex items-center justify-center gap-2">
//               <i className="bi bi-file-earmark-text"></i> Download Brochure
//             </button> */}
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           <div className="lg:col-span-2">
//             <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8 transition-transform hover:scale-[1.005]">
//               <div className="p-8">
//                 <div className="flex items-center mb-6">
//                   <h2 className="text-2xl font-bold text-gray-800">
//                     Product Overview
//                   </h2>
//                 </div>
//                 <div className="prose max-w-none">
//                   <p className="text-gray-700 leading-relaxed whitespace-pre-line">
//                     {product.description}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8 transition-transform hover:scale-[1.005]">
//               <div className="p-8">
//                 <div className="flex items-center mb-6">
//                   <h2 className="text-2xl font-bold text-gray-800">
//                     Key Features
//                   </h2>
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   {product.features.map((feature, index) => (
//                     <div
//                       key={index}
//                       className="flex items-start p-4 bg-gray-50 hover:bg-blue-50 rounded-lg transition-all duration-200"
//                     >
//                       <div className="bg-blue-100 p-2 rounded-full mr-4 flex-shrink-0">
//                         <i className="bi bi-check-circle-fill text-blue-600"></i>
//                       </div>
//                       <div>
//                         <h3 className="font-semibold text-gray-800 mb-1">
//                           Feature {index + 1}
//                         </h3>
//                         <p className="text-gray-600">{feature}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="lg:col-span-1">
//             <div className="space-y-8 sticky top-8">
//               <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
//                 <div className="bg-gradient-to-r from-primary to-primary p-6 text-white">
//                   <h2 className="text-xl font-bold flex items-center gap-2">
//                     <i className="bi bi-award"></i> Why Choose This Product
//                   </h2>
//                 </div>
//                 <div className="p-6">
//                   <ul className="space-y-4">
//                     <li className="flex items-start">
//                       <i className="bi bi-check-circle-fill text-green-500 mr-3 mt-1"></i>
//                       <span className="text-gray-700">
//                         Industry-leading performance
//                       </span>
//                     </li>
//                     <li className="flex items-start">
//                       <i className="bi bi-check-circle-fill text-green-500 mr-3 mt-1"></i>
//                       <span className="text-gray-700">
//                         24/7 customer support
//                       </span>
//                     </li>
//                     <li className="flex items-start">
//                       <i className="bi bi-check-circle-fill text-green-500 mr-3 mt-1"></i>
//                       <span className="text-gray-700">
//                         Easy integration with existing systems
//                       </span>
//                     </li>
//                     <li className="flex items-start">
//                       <i className="bi bi-check-circle-fill text-green-500 mr-3 mt-1"></i>
//                       <span className="text-gray-700">
//                         Regular updates and improvements
//                       </span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>

//               <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
//                 <div className="bg-gradient-to-r from-green-600 to-green-500 p-6 text-white">
//                   <h2 className="text-xl font-bold flex items-center gap-2">
//                     <i className="bi bi-headset"></i> Need Help?
//                   </h2>
//                 </div>
//                 <div className="p-6">
//                   <p className="text-gray-700 mb-4">
//                     Our team is ready to answer your questions.
//                   </p>
//                   <button
//                     onClick={handleContactClick}
//                     className="w-full bg-primary text-white py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center gap-2"
//                   >
//                     <i className="bi bi-envelope"></i> Contact Sales
//                   </button>
//                 </div>
//               </div>

//               {product.testimonials && product.testimonials.length > 0 && (
//                 <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
//                   <div className="bg-gradient-to-r from-green-600 to-green-500 p-6 text-white">
//                     <h2 className="text-xl font-bold flex items-center gap-2">
//                       <i className="bi bi-chat-quote"></i> Product Testimonial
//                     </h2>
//                   </div>
//                   <div className="p-6">
//                     <div className="space-y-6 max-h-60 overflow-y-auto pr-2">
//                       {product.testimonials.map((testimonial, index) => (
//                         <div key={index}>
//                           <p className="text-gray-700 mb-2 italic">
//                             “{testimonial.quote}”
//                           </p>
//                           <div className="text-sm text-gray-600 font-semibold">
//                             – {testimonial.author}
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductDetail;



import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Products } from "../Constant";
import { useState, useEffect } from "react";

const ProductDetail = () => {
  const { category, id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  
  const product = Products[category]?.find((item) => item.id === parseInt(id));
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleContactClick = () => {
    navigate("/contact");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-16 h-16 bg-blue-400 rounded-full mb-4"></div>
          <div className="h-4 bg-blue-300 rounded w-32"></div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-md text-center p-8 bg-white rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
          <div className="w-24 h-24 bg-gradient-to-r from-red-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="bi bi-exclamation-triangle text-3xl text-red-500"></i>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Product Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            The requested product doesn't exist or has been removed.
          </p>
          <a
            href="/products"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Explore Our Products
          </a>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 py-8">
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 -z-10"></div>
      
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Breadcrumb */}
        <div className="mb-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 mt-6 md:space-x-3">
              <li className="inline-flex items-center">
                <a
                  href="/"
                  className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors duration-200"
                >
                  <i className="bi bi-house-door mr-2"></i>
                  Home
                </a>
                <i className="bi bi-chevron-right text-gray-300 mx-2"></i>
              </li>
              <li>
                <div className="flex items-center">
                  <a
                    href="/products"
                    className="text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors duration-200"
                  >
                    Products
                  </a>
                  <i className="bi bi-chevron-right text-gray-300 mx-2"></i>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <span className="text-sm font-medium text-blue-600">
                    {product.title}
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        {/* Product Header */}
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl mb-12 border border-white/20">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
              {category}
            </span>
            <span className="bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full flex items-center gap-1">
              <i className="bi bi-star-fill"></i>
              Featured Product
            </span>
          </div>
          
          <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {product.title}
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* <div className="flex flex-wrap gap-4">
            <button
              onClick={handleContactClick}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-3 font-semibold text-lg"
            >
              <i className="bi bi-chat-dots text-xl"></i> 
              Get Free Consultation
            </button>
            
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-3 font-semibold text-lg">
              <i className="bi bi-file-earmark-pdf"></i> 
              Download Brochure
            </button>
          </div> */}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden">
              <div className="p-8">
                {/* Product Overview */}
                <div className="mb-12">
                  <div className="flex items-center gap-4 mb-8">
                    {/* <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                      <i className="bi bi-eye text-white text-xl"></i>
                    </div> */}
                    <h2 className="text-3xl font-bold text-gray-800">
                      Product Overview
                    </h2>
                  </div>
                  <div className="prose max-w-none text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                    {product.description}
                  </div>
                </div>

                {/* Key Features - Simple list under overview */}
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    {/* <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                      <i className="bi bi-star text-white text-xl"></i>
                    </div> */}
                    <h2 className="text-3xl font-bold text-gray-800">
                      Key Features
                    </h2>
                  </div>
                  <div className="space-y-4">
                    {product.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-all duration-200"
                      >
                        {/* <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          <i className="bi bi-check-lg text-blue-600 font-bold"></i>
                        </div> */}
                        <div>
                          <p className="text-gray-700 text-lg leading-relaxed">
                            {feature}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-8 sticky top-8">
              {/* Why Choose */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl shadow-2xl overflow-hidden">
                <div className="p-6 text-white">
                  <div className="flex items-center gap-3 mb-4">
                   
                    <h2 className="text-xl font-bold">Why Choose This Product</h2>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Industry-leading performance metrics",
                      "24/7 dedicated customer support",
                      "Seamless system integration",
                      "Regular innovation updates",
                      "Proven track record"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <i className="bi bi-check-circle-fill text-green-300 mt-1 flex-shrink-0"></i>
                        <span className="text-blue-50">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Support Card */}
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl shadow-2xl overflow-hidden">
                <div className="p-6 text-white">
                  <div className="flex items-center gap-3 mb-4">
                   
                    <h2 className="text-xl font-bold">Ready to Get Started?</h2>
                  </div>
                  <p className="text-green-50 mb-6">
                    Our experts are here to help you implement the perfect solution.
                  </p>
                  <button
                    onClick={handleContactClick}
                    className="w-full bg-white text-green-600 py-4 px-6 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <i className="bi bi-telephone"></i> 
                    Contact Sales Team
                  </button>
                </div>
              </div>

              {/* Testimonials */}
              {product.testimonials && product.testimonials.length > 0 && (
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-white">
                    <div className="flex items-center gap-3">
                     
                      <h2 className="text-xl font-bold">What Our Clients Say</h2>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-6 max-h-80 overflow-y-auto pr-2">
                      {product.testimonials.map((testimonial, index) => (
                        <div 
                          key={index} 
                          className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-2xl border border-gray-100"
                        >
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">
                              {testimonial.author.charAt(0)}
                            </div>
                            <div>
                              <div className="font-semibold text-gray-800">{testimonial.author}</div>
                              <div className="text-sm text-gray-500">{testimonial.position}</div>
                            </div>
                          </div>
                          <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                          <div className="flex text-yellow-400 mt-2">
                            {[...Array(5)].map((_, i) => (
                              <i key={i} className="bi bi-star-fill"></i>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;