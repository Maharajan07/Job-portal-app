const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json()); // ✅ Allows JSON requests

// ✅ MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/jobportal", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// ✅ Job Schema
const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  type: { type: String, required: true },
  minSalary: { type: Number, required: true }, // ✅ Ensure minSalary is stored
  maxSalary: { type: Number, required: true }, // ✅ Ensure maxSalary is stored
  deadline: { type: String, required: true },
  description: { type: String, required: true },
});

const Job = mongoose.model("Job", jobSchema);

// ✅ GET Jobs API (Fetch all jobs)
app.get("/jobs", async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching jobs", error });
  }
});

// ✅ POST Job API (Store a new job)
app.post("/jobs", async (req, res) => {
  try {
    console.log("🔍 Received Job Data Before Saving:", req.body);

    const minSalary = req.body.minSalary ? Number(req.body.minSalary) : 0;
    const maxSalary = req.body.maxSalary ? Number(req.body.maxSalary) : 0;

    console.log(`✅ Processed Salary: minSalary=${minSalary}, maxSalary=${maxSalary}`);

    if (isNaN(minSalary) || isNaN(maxSalary)) {
      return res.status(400).json({ message: "Invalid salary values" });
    }

    const newJob = new Job({
      title: req.body.title,
      company: req.body.company,
      location: req.body.location,
      type: req.body.type,
      minSalary,
      maxSalary,
      deadline: req.body.deadline,
      description: req.body.description,
    });

    const savedJob = await newJob.save();
    console.log("✅ Job Added to DB:", savedJob);

    res.status(201).json({ message: "Job added successfully", job: savedJob });
  } catch (error) {
    console.error("❌ Error storing job:", error);
    res.status(500).json({ message: "Failed to store job", error: error.message });
  }
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
