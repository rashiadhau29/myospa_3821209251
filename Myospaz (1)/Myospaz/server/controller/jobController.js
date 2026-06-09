// import db from '../database/db.js';

// // Add Job (POST)
// export const addJob = async (req, res) => {
//   try {
//     const { job_title, job_description, location } = req.body;

//     if (!job_title || !job_description) {
//       return res.status(400).json({ message: "Job title & description are required" });
//     }

//     const query = `
//       INSERT INTO job (job_title, job_description, location)
//       VALUES (?, ?, ?)
//     `;

//     const result = await db.query(query, [
//       job_title,
//       job_description,
//       location || null
//     ]);

//     res.status(201).json({
//       message: "Job added successfully",
//       job_id: result.insertId
//     });

//   } catch (error) {
//     console.error("Error adding job:", error);
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };

// // Get All Jobs (GET)
// export const getJobs = async (req, res) => {
//   try {
//     const jobs = await db.query("SELECT * FROM job ORDER BY created_at DESC");

//     res.status(200).json({
//       message: "Jobs retrieved successfully",
//       jobs,
//     });
//   } catch (error) {
//     console.error("Error fetching jobs:", error);
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };


// // DELETE JOB
// export const deleteJob = async (req, res) => {
//   const { id } = req.params;

//   try {
//     await db.query("DELETE FROM job WHERE job_id = ?", [id]);
//     res.json({ message: "Job deleted successfully" });
//   } catch (error) {
//     console.error("Delete Job Error:", error);
//     res.status(500).json({ error: "Failed to delete job" });
//   }
// };



// // UPDATE JOB
// export const updateJob = async (req, res) => {
//   const { id } = req.params;
//   const { job_title, job_description, location } = req.body;

//   try {
//     const sql = `
//       UPDATE job 
//       SET job_title = ?, job_description = ?, location = ?
//       WHERE job_id = ?
//     `;
//     await db.query(sql, [job_title, job_description, location, id]);

//     res.json({ message: "Job updated successfully" });
//   } catch (error) {
//     console.error("Update Job Error:", error);
//     res.status(500).json({ error: "Failed to update job" });
//   }
// };



// //count
// export const getJobCount = (req, res) => {
//   const sql = `SELECT COUNT(*) AS total_jobs FROM job`;

//   db.query(sql, (err, results) => {
//     if (err) {
//       console.error("Error fetching job count:", err);
//       return res.status(500).json({ error: "Server error" });
//     }

//     return res.json({
//       total_jobs: results[0].total_jobs
//     });
//   });
// };


// export const getInternshipCount = (req, res) => {
//   const sql = `SELECT COUNT(*) AS total_internships FROM internship_forms`;

//   db.query(sql, (err, results) => {
//     if (err) {
//       console.error("Error fetching internship count:", err);
//       return res.status(500).json({ error: "Server error" });
//     }

//     return res.json({
//       total_internships: results[0].total_internships
//     });
//   });
// };
const db = require("../database/db");

// Add Job
const addJob = async (req, res) => {
  try {
    const { job_title, job_description, location } = req.body;

    if (!job_title || !job_description) {
      return res.status(400).json({
        message: "Job title & description are required",
      });
    }

    const query = `
      INSERT INTO job (job_title, job_description, location)
      VALUES (?, ?, ?)
    `;

    const result = await db.query(query, [
      job_title,
      job_description,
      location || null,
    ]);

    res.status(201).json({
      message: "Job added successfully",
      job_id: result.insertId,
    });
  } catch (error) {
    console.error("Error adding job:", error);

    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

// Get Jobs
const getJobs = async (req, res) => {
  try {
    const jobs = await db.query(
      "SELECT * FROM job ORDER BY created_at DESC"
    );

    res.status(200).json({
      message: "Jobs retrieved successfully",
      jobs,
    });
  } catch (error) {
    console.error("Error fetching jobs:", error);

    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

// Delete Job
const deleteJob = async (req, res) => {
  const { id } = req.params;

  try {
    await db.query(
      "DELETE FROM job WHERE job_id = ?",
      [id]
    );

    res.json({
      message: "Job deleted successfully",
    });
  } catch (error) {
    console.error("Delete Job Error:", error);

    res.status(500).json({
      error: "Failed to delete job",
    });
  }
};

// Update Job
const updateJob = async (req, res) => {
  const { id } = req.params;
  const { job_title, job_description, location } = req.body;

  try {
    const sql = `
      UPDATE job
      SET job_title = ?, job_description = ?, location = ?
      WHERE job_id = ?
    `;

    await db.query(sql, [
      job_title,
      job_description,
      location,
      id,
    ]);

    res.json({
      message: "Job updated successfully",
    });
  } catch (error) {
    console.error("Update Job Error:", error);

    res.status(500).json({
      error: "Failed to update job",
    });
  }
};

// Job Count
const getJobCount = async (req, res) => {
  try {
    const result = await db.query(
      "SELECT COUNT(*) AS total_jobs FROM job"
    );

    res.json({
      total_jobs: result[0].total_jobs,
    });
  } catch (err) {
    console.error("Error fetching job count:", err);

    res.status(500).json({
      error: "Server error",
    });
  }
};

// Internship Count
const getInternshipCount = async (req, res) => {
  try {
    const result = await db.query(
      "SELECT COUNT(*) AS total_internships FROM internship_forms"
    );

    res.json({
      total_internships: result[0].total_internships,
    });
  } catch (err) {
    console.error("Error fetching internship count:", err);

    res.status(500).json({
      error: "Server error",
    });
  }
};

module.exports = {
  addJob,
  getJobs,
  deleteJob,
  updateJob,
  getJobCount,
  getInternshipCount,
};