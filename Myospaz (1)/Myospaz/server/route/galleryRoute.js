// import express from "express";
// import {
//   addGallery,
//   upload,
//   getGallery,
//   updateGallery,
//   deleteGallery,
// } from "../controller/galleryController.js";

// const router = express.Router();


// router.post("/add-gallery", upload.single("file"), addGallery);


// router.get("/gallery", getGallery);


// router.put("/gallery/:id", updateGallery);


// router.delete("/gallery/:id", deleteGallery);

// export default router;
const express = require("express");
const {
  addGallery,
  upload,
  getGallery,
  updateGallery,
  deleteGallery,
} = require("../controller/galleryController");

const router = express.Router();

router.post("/add-gallery", upload.single("file"), addGallery);
router.get("/gallery", getGallery);
router.put("/gallery/:id", updateGallery);
router.delete("/gallery/:id", deleteGallery);

module.exports = router;