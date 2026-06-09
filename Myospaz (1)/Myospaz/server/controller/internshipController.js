
// import db from '../database/db.js';
// import multer from 'multer';
// import nodemailer from 'nodemailer';

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/');
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + '-' + file.originalname);
//   },
// });

// export const upload = multer({ storage });

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.COMPANY_EMAIL,
//     pass: process.env.EMAIL_PASS,
//   },
// });



// export const submitInternshipForm = async (req, res) => {
//   const {
//     name,
//     email,
//     degree,
//     address,
//     duration,
//     phone,
//     university,
//     collegeName,
//     internshipType, // can be null
//   } = req.body;

//   const resume = req.file?.filename;

//   // ❌ internshipType REMOVED from validation
//   if (
//     !name ||
//     !email ||
//     !degree ||
//     !address ||
//     !duration ||
//     !phone ||
//     !university ||
//     !collegeName ||
//     !resume
//   ) {
//     return res.status(400).json({
//       error: "All fields except internship type are required.",
//     });
//   }

//   const query = `
//     INSERT INTO internship_forms (
//       name,
//       email,
//       degree,
//       address,
//       duration,
//       phone,
//       university,
//       college_name,
//       internship_type,
//       resume
//     )
//     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
//   `;

//   const values = [
//     name,
//     email,
//     degree,
//     address,
//     duration,
//     phone,
//     university,
//     collegeName,
//     internshipType || null, // ✅ ALLOW NULL
//     resume,
//   ];

//   try {
//     await db.query(query, values);

//     return res.status(200).json({
//       message: "Internship form submitted successfully",
//     });
//   } catch (err) {
//     console.error("DB Error:", err);
//     return res.status(500).json({
//       error: "Database error",
//     });
//   }
// };




// export const getInternships = async (req, res) => {
//   try {
//     db.query("SELECT * FROM internship_forms ORDER BY inter_id DESC", (err, result) => {
//       if (err) {
//         console.log("Error fetching internships:", err);
//         return res.status(500).json({ success: false, message: "Server Error" });
//       }

//       return res.json({ success: true, internships: result });
//     });
//   } catch (error) {
//     console.error("Unexpected Error:", error);
//     res.status(500).json({ success: false, message: "Unexpected error" });
//   }
// };
const db = require("../database/db");
const multer = require("multer");
const nodemailer = require("nodemailer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.COMPANY_EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

const submitInternshipForm = async (req, res) => {
  const {
    name,
    email,
    degree,
    address,
    duration,
    phone,
    university,
    collegeName,
    internshipType,
  } = req.body;

  const resume = req.file?.filename;

  if (
    !name ||
    !email ||
    !degree ||
    !address ||
    !duration ||
    !phone ||
    !university ||
    !collegeName ||
    !resume
  ) {
    return res.status(400).json({
      error: "All fields except internship type are required.",
    });
  }

  const query = `
    INSERT INTO internship_forms (
      name,
      email,
      degree,
      address,
      duration,
      phone,
      university,
      college_name,
      internship_type,
      resume
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    name,
    email,
    degree,
    address,
    duration,
    phone,
    university,
    collegeName,
    internshipType || null,
    resume,
  ];

  try {
    await db.query(query, values);

    return res.status(200).json({
      message: "Internship form submitted successfully",
    });
  } catch (err) {
    console.error("DB Error:", err);

    return res.status(500).json({
      error: "Database error",
    });
  }
};

const getInternships = async (req, res) => {
  try {
    const result = await db.query(
      "SELECT * FROM internship_forms ORDER BY inter_id DESC"
    );

    return res.json({
      success: true,
      internships: result,
    });
  } catch (error) {
    console.error("Error fetching internships:", error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  upload,
  submitInternshipForm,
  getInternships,
};