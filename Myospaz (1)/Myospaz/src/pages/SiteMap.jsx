import React from 'react';
import { LayoutGrid, Briefcase, Globe, Package } from 'lucide-react';

const SiteMap = () => {
  return (
    <div className="bg-gray-100 ">
 
        <div className="relative w-full h-64 mt-16">
       
        <img
            src="/img/sitemapb.jpeg"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover  z-0"
        />

      
       
        </div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 mb-20 max-w-6xl mx-auto">
     
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <Briefcase className="text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-800">Services</h2>
          </div>
          <ul className="text-gray-700 list-disc list-inside space-y-2">
            <li>Application Services</li>
            <li>Product Engineering</li>
            <li>Business Services</li>
            <li>SEO Marketing</li>
            <li>UI/UX Design</li>
            <li>Payment Gateway</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <Globe className="text-green-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-800">Industries</h2>
          </div>
          <ul className="text-gray-700 list-disc list-inside space-y-2">
            <li>Health Care</li>
            <li>Education</li>
            <li>Broadband Services</li>
            <li>Tattoo</li>
            <li>Manufacturing</li>
            <li>Travel & Transport</li>
            <li>Retail</li>
          </ul>
        </div>

      
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <Package className="text-purple-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-800">Products</h2>
          </div>
          <ul className="text-gray-700 list-disc list-inside space-y-2">
            <li>Complaint Management System</li>
            <li>Print Management System</li>
            <li>Artopaz – Tattoo Studio ERP</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SiteMap;
