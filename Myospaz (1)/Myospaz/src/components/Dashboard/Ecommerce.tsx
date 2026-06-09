// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { BASE_URL } from  '../../config.js'

// interface Category {
//   id: number;
//   category_name: string;
//   status: string;
//   created_at: string;
// }

// interface Product {
//   id: number;
//   product_name: string;
//   product_desc: string;
//   category_name: string;
//   status: string;
//   created_at: string;
// }

// const ECommerce: React.FC = () => {
//   const [categories, setCategories] = useState<Category[]>([]);
//   const [products, setProducts] = useState<Product[]>([]);
//   const [totalProducts, setTotalProducts] = useState<number>(0);
// const [totalCategories, setTotalCategories] = useState<number>(0);

//   useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const catRes = await axios.get(`${BASE_URL}api/count-category`);
//       setTotalCategories(catRes.data.total_categories);

//       const prodRes = await axios.get(`${BASE_URL}api/counting`);
//       setTotalProducts(prodRes.data.total_products);
//       setProducts(prodRes.data.products || []);
//     } catch (err) {
//       console.error("Error loading dashboard data:", err);
//       setTotalCategories(0);
//       setTotalProducts(0);
//       setProducts([]);
//     }
//   };
//   fetchData();
// }, []);

//   return (
//     <div className="min-h-screen w-full bg-gray-50">
//       {/* Header */}
//       <div className="bg-white shadow-sm border-b">
//         <div className="px-6 py-4 flex items-center justify-between">
//           <div>
//             <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
//             <p className="text-gray-600 mt-1">
//               Quick insight into your product and category data.
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="p-6">
//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//           <div className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
//             <div className="flex items-center">
//               <div className="p-3 rounded-lg bg-blue-50 mr-4">
//                 <svg
//                   className="w-6 h-6 text-blue-600"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M3 3h18v4H3zM3 9h18v12H3z"
//                   />
//                 </svg>
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-600">Total Categories</p>
//                <p className="text-2xl font-bold text-gray-900">{totalCategories}</p>

//               </div>
//             </div>
//           </div>

//           <div className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
//             <div className="flex items-center">
//               <div className="p-3 rounded-lg bg-green-50 mr-4">
//                 <svg
//                   className="w-6 h-6 text-green-600"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4 6h16M4 10h16M4 14h16M4 18h16"
//                   />
//                 </svg>
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-600">Total Products</p>
//                 <p className="text-2xl font-bold text-gray-900">{totalProducts}</p>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
//             <div className="flex items-center">
//               <div className="p-3 rounded-lg bg-purple-50 mr-4">
//                 <svg
//                   className="w-6 h-6 text-purple-600"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M12 8v4l3 3m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//                   />
//                 </svg>
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-600">Active Categories</p>
//                 <p className="text-2xl font-bold text-gray-900">
//                   {categories.filter((c) => c.status === "Active").length}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default ECommerce;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../config.js";

const JobDashboard: React.FC = () => {
  const [totalJobs, setTotalJobs] = useState<number>(0);
  const [activeJobs, setActiveJobs] = useState<number>(0);
  const [totalApplications, setTotalApplications] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jobsRes = await axios.get(`${BASE_URL}api/job/count`);
        setTotalJobs(jobsRes.data.total_jobs);
        setActiveJobs(jobsRes.data.active_jobs);

        // ✅ Internship Applications Count
        const internRes = await axios.get(`${BASE_URL}api/internships/count`);
        setTotalApplications(internRes.data.total_internships);
      } catch (err) {
        console.error("Error loading dashboard data:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen w-full bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Job Portal Dashboard
            </h1>
            <p className="text-gray-600 mt-1">
              Overview of job postings & applications
            </p>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Total Jobs */}
          <div className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
            <div className="flex items-center">
              <div className="p-3 rounded-lg bg-blue-50 mr-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Total Jobs Posted
                </p>
                <p className="text-2xl font-bold text-gray-900">{totalJobs}</p>
              </div>
            </div>
          </div>

          {/* Active Jobs */}
          {/* <div className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
            <div className="flex items-center">
              <div className="p-3 rounded-lg bg-green-50 mr-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Active Jobs</p>
                <p className="text-2xl font-bold text-gray-900">{activeJobs}</p>
              </div>
            </div>
          </div> */}

          {/* Total Applications */}
          <div className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
            <div className="flex items-center">
              <div className="p-3 rounded-lg bg-purple-50 mr-4">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Internship Applications
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {totalApplications}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDashboard;
