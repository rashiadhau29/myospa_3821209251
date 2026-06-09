// import express from "express";
// import { signIn } from "../controller/authController.js";

// const router = express.Router();

// router.post("/signin", signIn);

// export default router;
const express = require("express");
const { signIn } = require("../controller/authController");

const router = express.Router();

router.post("/signin", signIn);

module.exports = router;