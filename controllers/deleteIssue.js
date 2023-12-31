const Issue = require("../models/Issue");

const deleteIssue = async (req, res) => {
  try {
    const { _id } = req.body;
    if (!_id) return res.send({ error: "missing _id" });

    const issueToDelete = await Issue.findOne({ _id });
    if (!issueToDelete) return res.send({ error: "could not delete", _id });

    await Issue.deleteOne({ _id });
    console.log(`❌ ⮕  Issue 🆔 "${_id}" has been deleted from "${issueToDelete.project.toUpperCase()}" project`);
    res.send({ result: "successfully deleted", _id });
  } catch (err) {
    console.error("🔴 Error deleting issue 🔴 ⮕ ", err);
  }
};

module.exports = { deleteIssue };