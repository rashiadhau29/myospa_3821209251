// import multer from "multer";
// import path from "path";
// import db from '../database/db.js';

// // Configure Multer storage
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/"); // Make sure this folder exists
//   },
//   filename: (req, file, cb) => {
//     const uniqueName = Date.now() + path.extname(file.originalname);
//     cb(null, uniqueName);
//   },
// });

// export const upload = multer({ storage });

// // Add Gallery Controller
// export const addGallery = async (req, res) => {
//   try {
//     const { category, alt_text, description } = req.body;
    
//     if (!category || !req.file) {
//       return res.status(400).json({ message: "Category and image file are required" });
//     }

//     const image_path = `uploads/${req.file.filename}`;

//     const query = `
//       INSERT INTO gallery (category, image_path, alt_text, description)
//       VALUES (?, ?, ?, ?)
//     `;

//     const result = await db.query(query, [
//       category,
//       image_path,
//       alt_text || null,
//       description || null,
//     ]);

//     res.status(201).json({
//       message: "Gallery image added successfully",
//       gallery_id: result.insertId,
//       image_path,
//     });
//   } catch (error) {
//     console.error("Error adding gallery image:", error);
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };


// // 📄 Get All Gallery Images (GET)
// export const getGallery = async (req, res) => {
//   try {
//     const gallery = await db.query(
//       "SELECT * FROM gallery ORDER BY created_at DESC"
//     );

//     res.status(200).json({
//       message: "Gallery retrieved successfully",
//       gallery,
//     });
//   } catch (error) {
//     console.error("Error fetching gallery:", error);
//     res
//       .status(500)
//       .json({ message: "Server error", error: error.message });
//   }
// };

// // 🗑️ Delete Gallery Image (DELETE)
// export const deleteGallery = async (req, res) => {
//   const { id } = req.params;

//   try {
//     await db.query("DELETE FROM gallery WHERE gallery_id = ?", [id]);

//     res.json({ message: "Gallery image deleted successfully" });
//   } catch (error) {
//     console.error("Delete Gallery Error:", error);
//     res.status(500).json({ error: "Failed to delete gallery image" });
//   }
// };

// // ✏️ Update Gallery Image (PUT)
// export const updateGallery = async (req, res) => {
//   const { id } = req.params;
//   const { category, image_path, alt_text, description } = req.body;

//   try {
//     const sql = `
//       UPDATE gallery 
//       SET category = ?, image_path = ?, alt_text = ?, description = ?
//       WHERE gallery_id = ?
//     `;

//     await db.query(sql, [
//       category,
//       image_path,
//       alt_text,
//       description,
//       id,
//     ]);

//     res.json({ message: "Gallery image updated successfully" });
//   } catch (error) {
//     console.error("Update Gallery Error:", error);
//     res.status(500).json({ error: "Failed to update gallery image" });
//   }
// };
const multer = require("multer");
const path = require("path");
const db = require("../database/db");

// Configure Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + path.extname(file.originalname);
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

// Add Gallery
const addGallery = async (req, res) => {
  try {
    const { category, alt_text, description } = req.body;

    if (!category || !req.file) {
      return res.status(400).json({
        message: "Category and image file are required",
      });
    }

    const image_path = `uploads/${req.file.filename}`;

    const query = `
      INSERT INTO gallery (category, image_path, alt_text, description)
      VALUES (?, ?, ?, ?)
    `;

    const result = await db.query(query, [
      category,
      image_path,
      alt_text || null,
      description || null,
    ]);

    res.status(201).json({
      message: "Gallery image added successfully",
      gallery_id: result.insertId,
      image_path,
    });
  } catch (error) {
    console.error("Error adding gallery image:", error);

    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

// Get Gallery
const getGallery = async (req, res) => {
  try {
    const gallery = await db.query(
      "SELECT * FROM gallery ORDER BY created_at DESC"
    );

    res.status(200).json({
      message: "Gallery retrieved successfully",
      gallery,
    });
  } catch (error) {
    console.error("Error fetching gallery:", error);

    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

// Delete Gallery
const deleteGallery = async (req, res) => {
  const { id } = req.params;

  try {
    await db.query(
      "DELETE FROM gallery WHERE gallery_id = ?",
      [id]
    );

    res.json({
      message: "Gallery image deleted successfully",
    });
  } catch (error) {
    console.error("Delete Gallery Error:", error);

    res.status(500).json({
      error: "Failed to delete gallery image",
    });
  }
};

// Update Gallery
const updateGallery = async (req, res) => {
  const { id } = req.params;
  const { category, image_path, alt_text, description } = req.body;

  try {
    const sql = `
      UPDATE gallery
      SET category = ?, image_path = ?, alt_text = ?, description = ?
      WHERE gallery_id = ?
    `;

    await db.query(sql, [
      category,
      image_path,
      alt_text,
      description,
      id,
    ]);

    res.json({
      message: "Gallery image updated successfully",
    });
  } catch (error) {
    console.error("Update Gallery Error:", error);

    res.status(500).json({
      error: "Failed to update gallery image",
    });
  }
};

module.exports = {
  upload,
  addGallery,
  getGallery,
  updateGallery,
  deleteGallery,
};