import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../config.js";

const Ceodesk = () => {
  const [jobs, setJobs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    degree: "",
    address: "",
    duration: "",
    phone: "",
    university: "",
    collegeName: "",
    internshipType: null,
    resume: null,
  });

  // ================= FETCH JOBS =================
  const fetchJobs = async () => {
    try {
      const res = await axios.get(`${BASE_URL}api/jobs`);
      setJobs(res.data.jobs);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // ================= FORM HANDLERS =================
  const handleChange = (e) => {
    if (e.target.name === "resume") {
      setFormData({ ...formData, resume: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setMessage("");

  const fd = new FormData();

  Object.keys(formData).forEach((key) => {
    if (formData[key] !== null && formData[key] !== "") {
      fd.append(key, formData[key]);
    }
  });

  // ✅ IMPORTANT FIX: ensure duration is sent
  if (!formData.duration) {
    fd.append("duration", "NA"); // or "Job Application"
  }

  try {
    const res = await fetch(`${BASE_URL}api/internship`, {
      method: "POST",
      body: fd,
    });

    const data = await res.json();

    if (res.ok) {
      setMessage("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        degree: "",
        address: "",
        duration: "",
        phone: "",
        university: "",
        collegeName: "",
        internshipType: null,
        resume: null,
      });
      setTimeout(() => setShowModal(false), 1500);
    } else {
      setMessage(data.error || "Something went wrong");
    }
  } catch (error) {
    setMessage("Server error");
  } finally {
    setLoading(false);
  }
};


  return (
  <div className="min-h-screen ">

      {/* ================= HERO ================= */}
      <div className="bg-gradient-to-r from-green-500 to-primary rounded-2xl p-10 text-white mt-12 mb-0">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to join our team
          </h2>
          <p className="text-xl mb-8">
            Great talent with a positive approach is always welcome at MyoSpaz.
            If you're looking for opportunities, upload your resume below or
            email it to <strong>hr@myospaz.in</strong>.
          </p>
        </div>
      </div>

      {/* ================= JOB CARDS ================= */}
      <section className="bg-white py-16 px-4 md:px-12">
        <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          Current Openings
        </h3>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {jobs.length === 0 && (
            <p className="text-center text-gray-600 col-span-2">
              No openings available right now.
            </p>
          )}

          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <h4 className="text-xl font-semibold text-green-700 mb-2">
                  {job.job_title}
                </h4>

                <p className="text-sm text-gray-700 mb-3 line-clamp-3">
                  {job.job_description}
                </p>

                <p className="text-sm text-gray-600">📍 {job.location}</p>
              </div>

              {/* ✅ ONLY CHANGE: open modal */}
              <button
                onClick={() => setShowModal(true)}
                className="mt-4 bg-primary text-white px-4 py-2 rounded-md text-sm w-fit hover:bg-green-700 transition"
              >
                Apply
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ================= JOIN MESSAGE ================= */}
    <div className="bg-gray-50 text-center py-16 px-4 max-w-5xl mx-auto">
  <h2 className="text-2xl font-bold text-primary mb-4">
    Join MyoSpaz
  </h2>

  <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
    We always look to build and retain a team of talented professionals
    within MyoSpaz Softwares. We encourage our team to grow and achieve
    higher levels in their areas of expertise.
  </p>
</div>

      {/* ================= JOB APPLICATION POPUP (SAME AS INTERNSHIP) ================= */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-2xl rounded-lg p-6 relative max-h-[90vh] overflow-y-auto">

            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-xl"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-center mb-4">
              Job Application Form
            </h2>

            {message && (
              <div className={`mb-4 text-center p-3 rounded ${
                message.includes("success")
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}>
                {message}
              </div>
            )}

            {/* 🔽 SAME FORM – NOT MODIFIED */}
            <form className="space-y-4">
              <input name="name" placeholder="Name" required onChange={handleChange} className="w-full border p-2 rounded" />
              <input name="email" type="email" placeholder="Email" required onChange={handleChange} className="w-full border p-2 rounded" />
              <input name="degree" placeholder="Degree" required onChange={handleChange} className="w-full border p-2 rounded" />
              <input name="phone" placeholder="Phone" required onChange={handleChange} className="w-full border p-2 rounded" />
              <input name="university" placeholder="University" required onChange={handleChange} className="w-full border p-2 rounded" />
              <input name="collegeName" placeholder="College Name" required onChange={handleChange} className="w-full border p-2 rounded" />

              {/* <select name="duration" required onChange={handleChange} className="w-full border p-2 rounded">
                <option value="">Select Duration</option>
                <option value="45-days">45 Days</option>
                <option value="3-months">3 Months</option>
                <option value="6-months">6 Months</option>
              </select> */}

              <select name="internshipType" required onChange={handleChange} className="w-full border p-2 rounded">
                <option value=""> Type</option>
                <option value="technical">Technical</option>
                <option value="non-technical">Non-Technical</option>
              </select>

              <textarea name="address" placeholder="Address" required onChange={handleChange} className="w-full border p-2 rounded" />

              <input type="file" name="resume" required onChange={handleChange} className="w-full border p-2 rounded" />

              <button
                type="button"
                onClick={handleSubmit}
                disabled={loading}
                className="w-full bg-primary text-white py-2 rounded"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>

          </div>
        </div>
      )}

    </div>
  );
};

export default Ceodesk;
