// import express from "express";
// import { addJob, getJobs, deleteJob, updateJob, getJobCount, getInternshipCount } from "../controller/jobController.js";

// const router = express.Router();

// router.post("/add-job", addJob);
// router.get("/jobs", getJobs);
// router.put("/jobs/:id", updateJob);
// router.delete("/jobs/:id", deleteJob);

// router.get("/job/count", getJobCount);
// router.get("/internships/count", getInternshipCount);
// export default router;
const express = require("express");
const {
  addJob,
  getJobs,
  deleteJob,
  updateJob,
  getJobCount,
  getInternshipCount,
} = require("../controller/jobController");

const router = express.Router();

router.post("/add-job", addJob);
router.get("/jobs", getJobs);
router.put("/jobs/:id", updateJob);
router.delete("/jobs/:id", deleteJob);

router.get("/job/count", getJobCount);
router.get("/internships/count", getInternshipCount);

module.exports = router;