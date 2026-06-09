import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../config";

const AdminGallery = () => {
  const [gallery, setGallery] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  const categories = ["Outing", "Festival", "Training", "Office", "Birthdays"];

  const [formData, setFormData] = useState({
    category: "",
    image_path: "",
    alt_text: "",
    description: "",
  });

  const [selectedFile, setSelectedFile] = useState(null);

  const fetchGallery = async () => {
    try {
      const res = await axios.get(`${BASE_URL}api/gallery`);
      setGallery(res.data.gallery);
    } catch (err) {
      console.log("Error fetching gallery:", err);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  const openAdd = () => {
    setIsEdit(false);
    setFormData({
      category: "",
      image_path: "",
      alt_text: "",
      description: "",
    });
    setSelectedFile(null);
    setShowModal(true);
  };

  const openEdit = (item) => {
    setIsEdit(true);
    setEditId(item.gallery_id);
    setFormData(item);
    setSelectedFile(null);
    setShowModal(true);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  if (!formData.category) return alert("Select a category");

  try {
    const fileData = new FormData();
    fileData.append("file", selectedFile); // Must match Multer field name "file"
    fileData.append("category", formData.category);
    fileData.append("alt_text", formData.alt_text || "");
    fileData.append("description", formData.description || "");

    const res = await axios.post(`${BASE_URL}api/add-gallery`, fileData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    console.log("Gallery added:", res.data);
    fetchGallery();
    setShowModal(false);
  } catch (err) {
    console.error("Submit error:", err);
  }
};


  const deleteImage = async (id) => {
    if (!window.confirm("Delete image?")) return;
    try {
      await axios.delete(`${BASE_URL}api/gallery/${id}`);
      fetchGallery();
    } catch (err) {
      console.log("Delete error:", err);
    }
  };

  return (    
    <div className="p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Gallery Management</h2>
        <button
          onClick={openAdd}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Add Image
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-2">Category</th>
              <th className="border p-2">Image</th>
              <th className="border p-2">Alt Text</th>
              <th className="border p-2">Description</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {gallery.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center p-3">
                  No images found
                </td>
              </tr>
            ) : (
              gallery.map((g) => (
                <tr key={g.gallery_id}>
                  <td className="border p-2">{g.category}</td>
                  <td className="border p-2">
                    <img
                      src={g.image_path}
                      alt={g.alt_text}
                      className="w-24 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="border p-2">{g.alt_text}</td>
                  <td className="border p-2">{g.description}</td>
                  <td className="border p-2">
                    <div className="flex gap-3">
                      <button
                        onClick={() => openEdit(g)}
                        className="text-blue-600 underline"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteImage(g.gallery_id)}
                        className="text-red-600 underline"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded w-full max-w-md space-y-3"
          >
            <h3 className="text-lg font-bold mb-2">
              {isEdit ? "Edit Image" : "Add Image"}
            </h3>

            {/* Category Select */}
            <label className="block">
              Category
              <select
                className="w-full border p-2 mt-1"
                value={formData.category || ""}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                required
              >
                <option value="" disabled>
                  Select Category
                </option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </label>

            {/* Upload button */}
            <label className="block">
              Upload Image
              <input
                type="file"
                className="w-full border p-2 mt-1"
                onChange={handleFileChange}
                accept="image/*"
              />
            </label>

            <input
              placeholder="Alt Text"
              className="w-full border p-2"
              value={formData.alt_text}
              onChange={(e) =>
                setFormData({ ...formData, alt_text: e.target.value })
              }
            />

            <textarea
              placeholder="Description"
              className="w-full border p-2"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />

            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border rounded"
              >
                Cancel
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded">
                {isEdit ? "Update" : "Submit"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AdminGallery;
