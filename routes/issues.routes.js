"use strict";

const express = require("express");
const router = express.Router();
const { getAllIssues, submitIssue, updateIssue, deleteIssue } = require("../controllers");

router
  .route("/:project")
  .get(getAllIssues)
  .post(submitIssue)
  .put(updateIssue)
  .delete(deleteIssue);

module.exports = router;