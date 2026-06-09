// import express from 'express';
// import { submitInternshipForm, upload , getInternships } from '../controller/internshipController.js';

// const router = express.Router();

// router.post('/internship', upload.single('resume'), submitInternshipForm);

// router.get("/internships", getInternships);

// export default router;
const express = require("express");
const {
  submitInternshipForm,
  upload,
  getInternships,
} = require("../controller/internshipController");

const router = express.Router();

router.post("/internship", upload.single("resume"), submitInternshipForm);
router.get("/internships", getInternships);

module.exports = router;