import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../config";

const InternshipApplications = () => {
  const [applications, setApplications] = useState([]);

  const fetchApplications = async () => {
    try {
      const res = await axios.get(`${BASE_URL}api/internships`);
      setApplications(res.data.internships);
    } catch (err) {
      console.log("Error fetching internship applications:", err);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Internship Applications</h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Phone</th>
              <th className="border p-2">Degree</th>
              <th className="border p-2">University</th>
              <th className="border p-2">College</th>
              <th className="border p-2">Internship Type</th>
              <th className="border p-2">Duration</th>
              <th className="border p-2">Address</th>
              <th className="border p-2">Resume</th>
            </tr>
          </thead>

          <tbody>
            {applications.length === 0 ? (
              <tr>
                <td colSpan="10" className="text-center p-3">
                  No applications found
                </td>
              </tr>
            ) : (
              applications.map((app) => (
                <tr key={app.inter_id}>
                  <td className="border p-2">{app.name}</td>
                  <td className="border p-2">{app.email}</td>
                  <td className="border p-2">{app.phone}</td>
                  <td className="border p-2">{app.degree}</td>
                  <td className="border p-2">{app.university}</td>
                  <td className="border p-2">{app.college_name}</td>
                  <td className="border p-2">{app.internship_type}</td>
                  <td className="border p-2">{app.duration}</td>
                  <td className="border p-2">{app.address}</td>
                  <td className="border p-2 text-blue-600 underline">
                    <a href={`${BASE_URL}uploads/${app.resume}`} target="_blank" rel="noreferrer">
                      View Resume
                    </a>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InternshipApplications;
