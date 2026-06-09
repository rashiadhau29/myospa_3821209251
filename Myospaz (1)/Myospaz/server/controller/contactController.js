
// import nodemailer from 'nodemailer';
// import dotenv from 'dotenv';
// import db from '../database/db.js';

// dotenv.config();

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.COMPANY_EMAIL,
//     pass: process.env.EMAIL_PASS,
//   },
//   logger: true,
//   debug: true,
// });



// export const submitContactForm = async (req, res) => {

//   const { name, email, subject, phone, companyname, message } = req.body;

//   if (!name || !email || !subject || !phone || !companyname || !message) {
//     return res.status(400).json({ error: 'All fields are required.' });
//   }

//   try {
 
//     const query = `
//       INSERT INTO contact_enquiries (name, email, subject, phone, companyname, message)
//       VALUES (?, ?, ?, ?, ?, ?)
//     `;
//     await db.query(query, [name, email, subject, phone, companyname, message]);

  
//     const internalRecipients = [process.env.COMPANY_EMAIL, process.env.RECEPTIONIST_EMAIL];

//     const companyMailOptions = {
//       from: process.env.COMPANY_EMAIL,
//       to: internalRecipients, 
//       subject: `New Enquiry: ${subject}`,
//       text: `You have received a new message from ${name} (${email}).
//               Subject: ${subject}
//               Phone: ${phone}
//               Company: ${companyname}
//               Message: ${message}`,
//                   };

  
//     const userMailOptions = {
//       from: process.env.COMPANY_EMAIL,
//       to: email,
//       subject: 'Thank you for contacting us',
//       text: `Dear ${name},

//           Thank you for contacting us! We have received your message and will get back to you soon.

//           Best regards,
//           The Myospaz Team`,
//          };

   
//     await transporter.sendMail(companyMailOptions);
//     await transporter.sendMail(userMailOptions);

//     res.status(200).json({ message: 'Contact form submitted successfully, and emails sent.' });
//   } catch (err) {
//     console.error('Error during contact form submission:', err);
//     res.status(500).json({ error: 'An error occurred while processing your request.' });
//   }
// };
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const db = require("../database/db");

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.COMPANY_EMAIL,
    pass: process.env.EMAIL_PASS,
  },
  logger: true,
  debug: true,
});

const submitContactForm = async (req, res) => {
  const { name, email, subject, phone, companyname, message } = req.body;

  if (!name || !email || !subject || !phone || !companyname || !message) {
    return res.status(400).json({
      error: "All fields are required.",
    });
  }

  try {
    const query = `
      INSERT INTO contact_enquiries
      (name, email, subject, phone, companyname, message)
      VALUES (?, ?, ?, ?, ?, ?)
    `;

    await db.query(query, [
      name,
      email,
      subject,
      phone,
      companyname,
      message,
    ]);

    const internalRecipients = [
      process.env.COMPANY_EMAIL,
      process.env.RECEPTIONIST_EMAIL,
    ];

    const companyMailOptions = {
      from: process.env.COMPANY_EMAIL,
      to: internalRecipients,
      subject: `New Enquiry: ${subject}`,
      text: `You have received a new message from ${name} (${email}).
Subject: ${subject}
Phone: ${phone}
Company: ${companyname}
Message: ${message}`,
    };

    const userMailOptions = {
      from: process.env.COMPANY_EMAIL,
      to: email,
      subject: "Thank you for contacting us",
      text: `Dear ${name},

Thank you for contacting us! We have received your message and will get back to you soon.

Best regards,
The Myospaz Team`,
    };

    await transporter.sendMail(companyMailOptions);
    await transporter.sendMail(userMailOptions);

    res.status(200).json({
      message: "Contact form submitted successfully, and emails sent.",
    });
  } catch (err) {
    console.error("Error during contact form submission:", err);

    res.status(500).json({
      error: "An error occurred while processing your request.",
    });
  }
};

module.exports = { submitContactForm };