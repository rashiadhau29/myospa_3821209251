import { useState } from 'react';
import { BASE_URL } from '../config.js';

const InternshipForm = () => {
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    degree: '',
    address: '',
    duration: '',
    phone: '',
    university: '',
    collegeName: '',
    internshipType: '',
    resume: null,
  });

  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === 'resume') {
      setFormData({ ...formData, resume: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const fd = new FormData();
    Object.keys(formData).forEach((key) => {
      fd.append(key, formData[key]);
    });

    try {
      const res = await fetch(`${BASE_URL}api/internship`, {
        method: 'POST',
        body: fd,
      });

      const data = await res.json();

      if (res.ok) {
        setMessage('Form submitted successfully!');
        setFormData({
          name: '',
          email: '',
          degree: '',
          address: '',
          duration: '',
          phone: '',
          university: '',
          collegeName: '',
          internshipType: '',
          resume: null,
        });
        setTimeout(() => setShowModal(false), 1500);
      } else {
        setMessage(data.error || 'Something went wrong');
      }
    } catch (error) {
      setMessage('Server error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">

      {/* Hero */}
      <div className="bg-gradient-to-r from-green-500 to-primary rounded-2xl p-10 text-white mt-11">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Internship Programs
          </h2>
          <p className="text-lg">
            Choose your internship and start your career journey 🚀
          </p>
        </div>
      </div>

      {/* Internship Cards */}
      <div className="max-w-6xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 p-6">

        {/* Card 1 Python */}
        <div className="bg-gray-100 rounded-xl shadow-md p-6 text-center">
          <h3 className="text-xl font-bold mb-3">Python</h3>
          <p className="text-black mb-6">
            Learn Python from basics to practical usage. <br />
            Work on real-time projects and assignments.
          </p>

          <div className="flex flex-col gap-3">
            <button
              onClick={() => setShowModal(true)}
              className="bg-primary text-white py-2 rounded-md"
            >
              Enroll Now
            </button>

            <a
              href="/img/python.pdf"
              target="_blank"
              rel="noreferrer"
              className="border border-primary text-primary py-2 rounded-md"
            >
             Training Roadmap ⬇️
            </a>
          </div>
        </div>

        {/*Card 2 Flutter */}
        <div className="bg-gray-100 rounded-xl shadow-md p-6 text-center">
          <h3 className="text-xl font-bold mb-3">Flutter</h3>
          <p className="text-black mb-6">
            Build responsive mobile applications using Flutter. <br />
            Gain practical experience with live app projects.
          </p>

          <div className="flex flex-col gap-3">
            <button
              onClick={() => setShowModal(true)}
              className="bg-primary text-white py-2 rounded-md"
            >
              Enroll Now
            </button>

            <a
              href="/img/flutter.pdf"
              target="_blank"
              rel="noreferrer"
              className="border border-primary text-primary py-2 rounded-md"
            >
              Training Roadmap ⬇️
            </a>
          </div>
        </div>

        {/*Card 3 React */}
        <div className="bg-gray-100 rounded-xl shadow-md p-6 text-center">
          <h3 className="text-xl font-bold mb-3">React JS</h3>
          <p className="text-black mb-6">
            Learn React fundamentals and build dynamic web applications. <br />
            Work on real-world projects.
          </p>

          <div className="flex flex-col gap-3">
            <button
              onClick={() => setShowModal(true)}
              className="bg-primary text-white py-2 rounded-md"
            >
              Enroll Now
            </button>

            <a
              href="/img/react-js.pdf"
              target="_blank"
              rel="noreferrer"
              className="border border-primary text-primary py-2 rounded-md"
            >
              Training Roadmap ⬇️
            </a>
          </div>
        </div>
      </div>

      {/* 🔽 NEW SECTION: Other Internship Apply */}
   <div className="max-w-4xl mx-auto mt-10 mb-20 text-center bg-gray-100 p-8 rounded-xl">
  <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl mx-auto">
    Interested in a different internship role? <br />
    Apply now and explore more opportunities.
  </p>

  <button
    onClick={() => setShowModal(true)}
    className="bg-primary text-white font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-all duration-300"
  >
    Enroll Now
  </button>
</div>

      {/* Modal */}
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
              Internship Application Form
            </h2>

            {message && (
              <div className={`mb-4 text-center p-3 rounded ${
                message.includes('success')
                  ? 'bg-green-100 text-green-700'
                  : 'bg-red-100 text-red-700'
              }`}>
                {message}
              </div>
            )}

         
              <form className="space-y-4">
                {/* All original form fields remain exactly as-is */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Degree <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="degree"
                      value={formData.degree}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Duration <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="duration"
                      value={formData.duration}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    >
                      <option value="">Select Duration</option>
                      <option value="45-days">45 Days</option>
                      <option value="3-months">3 Months</option>
                      <option value="6-months">6 Months</option>
                      <option value="1-year">1 Year</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Address <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    rows="2"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      University <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="university"
                      value={formData.university}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      College Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="collegeName"
                      value={formData.collegeName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Internship Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="internshipType"
                      value={formData.internshipType}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    >
                      <option value="">Select Type</option>
                      <option value="technical">Technical</option>
                      <option value="non-technical">Non-Technical</option>
                      <option value="research">Research</option>
                      <option value="design">Design</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Resume <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    name="resume"
                    onChange={handleChange}
                    accept=".pdf,.doc,.docx"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
                  <button
                    type="button"
                    onClick={(e) => handleSubmit(e)}
                    className="px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors"
                    disabled={loading}
                  >
                    {loading ? 'Submitting...' : 'Submit'}
                  </button>
                </div>
              </form>
            </div>
          </div>
      
      )}

    </div>
  );
};

export default InternshipForm;