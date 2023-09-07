"use strict";

const express = require("express");
const router = express.Router();

router
  .route("/:project")
  .get((req, res) => res.sendFile(process.cwd() + "/views/issue.html"));

module.exports = router;
