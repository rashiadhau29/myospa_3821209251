// import { FiMapPin, FiPhone, FiMail, FiSend } from "react-icons/fi";
// import React, { useState } from "react";
// import axios from "axios";
// // import { BASE_URL } from '../../public/config.js';
// import { BASE_URL } from "../../public/img/config.js";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     phone: "",
//     companyname: "",
//     message: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState({
//     success: false,
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitStatus({ success: false, message: "" });

//     try {
//       const response = await axios.post(`${BASE_URL}api/contact`, formData, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       if (response.data && response.status === 200) {
//         const successMessage =
//           response.data.message || "Your message has been sent successfully!";
//         setSubmitStatus({ success: true, message: successMessage });

//         setFormData({
//           name: "",
//           email: "",
//           subject: "",
//           phone: "",
//           companyname: "",
//           message: "",
//         });
//       } else {
//         throw new Error(response.data?.message || "Failed to send message");
//       }
//     } catch (error) {
//       let errorMessage = "An error occurred while sending your message";

//       if (error.response) {
//         errorMessage =
//           error.response.data?.message ||
//           `Server error: ${error.response.status}`;
//       } else if (error.request) {
//         errorMessage = "No response received from server";
//       } else {
//         errorMessage = error.message;
//       }

//       setSubmitStatus({ success: false, message: errorMessage });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section
//       id="contact"
//       className="relative py-20 overflow-hidden bg-gray-200"
//     >
//       <div className="relative container mx-auto px-4">
//         <div className="text-center mb-16" data-aos="fade-up">
//           <h2 className="text-4xl font-bold mb-2 mt-4 text-black">
//             How to Reach Us?
//           </h2>
//           <p className="text-lg text-black">
//             Growth in your Business is our Business. Please find a way for
//             Growth.
//           </p>
//         </div>

//         <div
//           className="grid grid-cols-1 lg:grid-cols-5 gap-8"
//           data-aos="fade-up"
//           data-aos-delay="100"
//         >
//           <div
//             className="bg-white bg-opacity-85 p-6 rounded-lg shadow-md hover:shadow-lg transition lg:col-span-3"
//             data-aos="fade-up"
//             data-aos-delay="500"
//           >
//             {submitStatus.message && (
//               <div
//                 className={`mb-4 p-4 rounded ${
//                   submitStatus.success
//                     ? "bg-green-100 text-green-700"
//                     : "bg-red-100 text-red-700"
//                 }`}
//               >
//                 {submitStatus.message}
//               </div>
//             )}

//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <input
//                   type="text"
//                   name="name"
//                   className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
//                   placeholder="Your Name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                 />
//                 <input
//                   type="email"
//                   name="email"
//                   className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
//                   placeholder="Your Email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <input
//                 type="text"
//                 name="subject"
//                 className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
//                 placeholder="Subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 required
//               />

//               <input
//                 type="tel"
//                 name="phone"
//                 className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
//                 placeholder="Phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//               />

//               <input
//                 type="text"
//                 name="companyname"
//                 className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
//                 placeholder="Company Name"
//                 value={formData.companyname}
//                 onChange={handleChange}
//                 required
//               />

//               <textarea
//                 name="message"
//                 rows="4"
//                 className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
//                 placeholder="Message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//               ></textarea>

//               <div className="text-center">
//                 <button
//                   type="submit"
//                   className={`bg-primary text-white px-6 py-3 rounded-md hover:bg-secondary transition flex items-center justify-center gap-2 mx-auto ${
//                     isSubmitting ? "opacity-70 cursor-not-allowed" : ""
//                   }`}
//                   disabled={isSubmitting}
//                 >
//                   {isSubmitting ? (
//                     "Sending..."
//                   ) : (
//                     <>
//                       <FiSend />
//                       Send Message
//                     </>
//                   )}
//                 </button>
//               </div>
//             </form>
//           </div>

//           <div className="space-y-8 lg:col-span-2">
//             <div className="flex gap-6 p-8 bg-opacity-90 rounded-lg shadow hover:shadow-lg transition">
//               <FiMapPin className="text-4xl text-primary" />
//               <div>
//                 <h3 className="text-2xl font-extrabold mb-3">Address</h3>
//                 <p className="text-lg text-black-900 leading-relaxed font-semibold">
//                   Myospaz Software Technologies,
//                   <br />
//                   Shinde Pul, Dangat Patil Nagar,
//                   <br />
//                   Near Ramelex Auditorium,
//                   <br />
//                   Shivane,
//                   <br />
//                   Pune - 411023
//                 </p>
//               </div>
//             </div>

//             <div className="flex gap-6 p-8 bg-opacity-90 rounded-lg shadow hover:shadow-lg transition">
//               <FiPhone className="text-4xl text-primary" />
//               <div>
//                 <h3 className="text-2xl font-extrabold mb-3">Call Us</h3>
//                 <p className="text-lg text-black-900 font-semibold">
//                   7743880882
//                 </p>
//                 <p className="text-lg text-black-900 font-semibold">
//                   9370569996
//                 </p>
//                 <p className="text-lg text-black-900 font-semibold">
//                   srijantechit@gmail.com
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;



import { FiMapPin, FiPhone, FiMail, FiSend } from "react-icons/fi";
import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../config.js";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    companyname: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: "" });

    try {
      const response = await axios.post(`${BASE_URL}api/contact`, formData);
      if (response.status === 200) {
        setSubmitStatus({
          success: true,
          message: response.data.message || "Message sent successfully!",
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          phone: "",
          companyname: "",
          message: "",
        });
      }
    } catch (error) {
      setSubmitStatus({ success: false, message: "Failed to send message" });
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="w-full py-16  bg-primary">
        <div className="container mx-auto px-4 text-center mt-10">
          <p className="uppercase font-medium mb-2 text-blue-300">
            Get in Touch
          </p>
          <h1 className="text-4xl md:text-4xl font-bold text-white mb-3">
            Contact Us
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            We’d love to hear from you! Reach out with any questions or
            inquiries.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-12">
        {/* Left Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Get in Touch</h2>
          <p className="text-gray-600">
            Fill out the form or use the details below to connect with us.
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                <FiMapPin /> Address
              </h3>
              <p className="text-gray-600">
                Myospaz Software Technologies, Shinde Pul, Pune - 411023
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                <FiPhone /> Phone
              </h3>
              <p className="text-gray-600">7743880882, 9370569996</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                <FiMail /> Email
              </h3>
              <p className="text-gray-600">srijantechit@gmail.com</p>
            </div>
          </div>

          <div className="mt-6">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.3387107212184!2d73.78707317457439!3d18.468310682615105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2958455182c89%3A0xa5a415b04e4292b6!2sMyospaz%20Software%20Technologies!5e0!3m2!1sen!2sin!4v1762164598218!5m2!1sen!2sin"
              width="100%"
              height="250"
              loading="lazy"
              className="rounded-lg shadow-md border"
            ></iframe>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Send Us a Message
          </h2>

          {submitStatus.message && (
            <div
              className={`mb-4 p-3 rounded ${submitStatus.success ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}
            >
              {submitStatus.message}
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded"
              />
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded"
              />
            </div>
            <input
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded"
            />
            <input
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded"
            />
            <input
              name="companyname"
              placeholder="Company Name"
              value={formData.companyname}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-2 rounded"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <FiSend /> Send Message
                </span>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
