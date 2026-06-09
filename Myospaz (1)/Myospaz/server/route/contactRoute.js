// import express from 'express';
// import  { submitContactForm } from '../controller/contactController.js';

// const router = express.Router();

// router.post('/contact', submitContactForm);

// export default router;
const express = require("express");
const { submitContactForm } = require("../controller/contactController");

const router = express.Router();

router.post("/contact", submitContactForm);

module.exports = router;