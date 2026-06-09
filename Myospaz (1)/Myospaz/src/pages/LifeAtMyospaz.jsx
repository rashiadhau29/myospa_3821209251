import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../config";

const LifeAtMyospaz = () => {
  const [selectedCategory, setSelectedCategory] = useState("Festival");
  const [galleryData, setGalleryData] = useState({});

  const categories = ["Outing", "Festival", "Training", "Office", "Birthdays"];

  // ✅ Fetch gallery from DB
  const fetchGallery = async () => {
    try {
      const res = await axios.get(`${BASE_URL}api/gallery`);

      const grouped = {};
      categories.forEach((cat) => (grouped[cat] = []));

      res.data.gallery.forEach((item) => {
        grouped[item.category].push({
          src: `${BASE_URL}${item.image_path}`, // VERY IMPORTANT
          alt: item.alt_text,
          description: item.description,
        });
      });

      setGalleryData(grouped);
    } catch (err) {
      console.error("Gallery fetch error:", err);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-white via-gray-100 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-primary text-center mb-12">
          Life at MyoSpaz
        </h2>

        {/* Category Tabs */}
        <div className="text-center mb-8">
          {categories.map((category) => (
            <button
              key={category}
              className={`mx-4 text-lg font-semibold ${
                selectedCategory === category
                  ? "text-primary underline"
                  : "text-gray-600"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryData[selectedCategory]?.length === 0 ? (
            <p className="text-center col-span-3 text-gray-500">
              No images available
            </p>
          ) : (
            galleryData[selectedCategory]?.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-xl shadow-lg"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-center text-lg font-medium px-4">
                    {image.description}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default LifeAtMyospaz;