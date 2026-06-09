// import { useState, useEffect } from "react";
// import axios from "axios";

// import { BASE_URL } from  '../config.js'

// const JobsPage = () => {
//   const [jobs, setJobs] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [formData, setFormData] = useState({
//     job_title: "",
//     job_description: "",
//     location: "",
//   });

//   const fetchJobs = async () => {
//     try {
//       const res = await axios.get(`${BASE_URL}api/jobs`);
//       setJobs(res.data.jobs);
//     } catch (error) {
//       console.error("Error fetching jobs:", error);
//     }
//   };

//   useEffect(() => {
//     fetchJobs();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post(`${BASE_URL}api/add-job`, formData);
//       setShowModal(false);
//       setFormData({ job_title: "", job_description: "", location: "" });
//       fetchJobs();
//     } catch (error) {
//       console.error("Error adding job:", error);
//       alert("Failed to add job");
//     }
//   };

//   return (
//     <div className="p-6">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-2xl font-bold">Job Listings</h2>
//         <button
//           onClick={() => setShowModal(true)}
//           className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition"
//         >
//           + Post Job
//         </button>
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto bg-white shadow rounded-lg p-4">
//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="bg-primary text-white">
//               <th className="p-3 text-left">Job Title</th>
//               <th className="p-3 text-left">Job Description</th>
//               <th className="p-3 text-left">Location</th>
//               <th className="p-3 text-left">Posted Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {jobs.length > 0 ? (
//               jobs.map((job) => (
//                 <tr key={job.job_id} className="border-b">
//                   <td className="p-3">{job.job_title}</td>
//                   <td className="p-3">{job.job_description}</td>
//                   <td className="p-3">{job.location}</td>
//                   <td className="p-3">
//                     {new Date(job.created_at).toLocaleDateString()}
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="4" className="p-3 text-center text-gray-500">
//                   No jobs posted yet
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur flex justify-center items-center z-50">
//           <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-lg">
//             <h3 className="text-xl font-semibold mb-4">Post a New Job</h3>
//             <form onSubmit={handleSubmit} className="space-y-4">
              
//               <input
//                 type="text"
//                 placeholder="Job Title"
//                 className="w-full border p-2 rounded"
//                 value={formData.job_title}
//                 onChange={(e) => setFormData({ ...formData, job_title: e.target.value })}
//                 required
//               />

//               <textarea
//                 placeholder="Job Description"
//                 className="w-full border p-2 rounded"
//                 rows="3"
//                 value={formData.job_description}
//                 onChange={(e) => setFormData({ ...formData, job_description: e.target.value })}
//                 required
//               ></textarea>

//               <input
//                 type="text"
//                 placeholder="Location"
//                 className="w-full border p-2 rounded"
//                 value={formData.location}
//                 onChange={(e) => setFormData({ ...formData, location: e.target.value })}
//               />

//               <div className="flex justify-end gap-3">
//                 <button
//                   type="button"
//                   className="px-4 py-2 bg-gray-300 rounded-lg"
//                   onClick={() => setShowModal(false)}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
//                 >
//                   Submit
//                 </button>
//               </div>

//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default JobsPage;



import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../config.js";

const JobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  const [formData, setFormData] = useState({
    job_title: "",
    job_description: "",
    location: "",
  });

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

  // Open Modal For Add Job
  const openAddModal = () => {
    setIsEdit(false);
    setFormData({ job_title: "", job_description: "", location: "" });
    setShowModal(true);
  };

  // Open Modal For Edit Job
  const openEditModal = (job) => {
    setIsEdit(true);
    setEditId(job.job_id);
    setFormData({
      job_title: job.job_title,
      job_description: job.job_description,
      location: job.location,
    });
    setShowModal(true);
  };

  // Add / Update Job
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isEdit) {
        await axios.put(`${BASE_URL}api/jobs/${editId}`, formData);
        alert("Job updated successfully");
      } else {
        await axios.post(`${BASE_URL}api/add-job`, formData);
        alert("Job added successfully");
      }

      setShowModal(false);
      fetchJobs();
    } catch (error) {
      console.error("Error saving job:", error);
      alert("Failed");
    }
  };

  // Delete Job
  const deleteJob = async (id) => {
    if (!window.confirm("Are you sure you want to delete this job?")) return;

    try {
      await axios.delete(`${BASE_URL}api/jobs/${id}`);
      alert("Job deleted!");
      fetchJobs();
    } catch (error) {
      alert("Failed to delete job");
    }
  };

  return (
    <div className="p-6">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Job Listings</h2>

        <button
          onClick={openAddModal}
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
        >
          + Post Job
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow rounded-lg p-4">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-primary text-white">
              <th className="p-3 text-left">Job Title</th>
              <th className="p-3 text-left">Job Description</th>
              <th className="p-3 text-left">Location</th>
              <th className="p-3 text-left">Posted Date</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {jobs.length > 0 ? (
              jobs.map((job) => (
                <tr key={job.job_id} className="border-b">
                  <td className="p-3">{job.job_title}</td>
                  <td className="p-3">{job.job_description}</td>
                  <td className="p-3">{job.location}</td>
                  <td className="p-3">
                    {new Date(job.created_at).toLocaleDateString()}
                  </td>
                  <td className="p-3 flex gap-2">
                    
                    {/* Edit Icon */}
                    <button
                      onClick={() => openEditModal(job)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      ✏️
                    </button>

                    {/* Delete Icon */}
                    <button
                      onClick={() => deleteJob(job.job_id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      🗑️
                    </button>

                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="p-3 text-center text-gray-500">
                  No jobs posted yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">
              {isEdit ? "Edit Job" : "Post a New Job"}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Job Title"
                className="w-full border p-2 rounded"
                value={formData.job_title}
                onChange={(e) =>
                  setFormData({ ...formData, job_title: e.target.value })
                }
                required
              />

              <textarea
                placeholder="Job Description"
                className="w-full border p-2 rounded"
                rows="3"
                value={formData.job_description}
                onChange={(e) =>
                  setFormData({ ...formData, job_description: e.target.value })
                }
                required
              ></textarea>

              <input
                type="text"
                placeholder="Location"
                className="w-full border p-2 rounded"
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
                required
              />

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 rounded-lg"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
                >
                  {isEdit ? "Update" : "Submit"}
                </button>
              </div>
            </form>

          </div>
        </div>
      )}
    </div>
  );
};

export default JobsPage;
