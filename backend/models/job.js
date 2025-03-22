const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  type: { type: String, required: true },
  minSalary: { type: Number, required: true, default: 0 }, // ✅ Ensure minSalary is stored
  maxSalary: { type: Number, required: true, default: 0 }, // ✅ Ensure maxSalary is stored
  deadline: { type: String, required: true },
  description: { type: String, required: true },
});

const Job = mongoose.model("Job", jobSchema);
module.exports = Job;
