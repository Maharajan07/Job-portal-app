const express = require("express");
const router = express.Router();
const Job = require("../models/job");

//  GET all jobs
router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching jobs", error });
  }
});

//  POST a new job
router.post("/", async (req, res) => {
  try {
    console.log("Received Job Data:", req.body);

    //  Check required fields
    if (!req.body.title || !req.body.company || !req.body.location || !req.body.type || !req.body.minSalary || !req.body.maxSalary || !req.body.deadline || !req.body.description) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newJob = new Job({
      title: req.body.title,
      company: req.body.company,
      location: req.body.location,
      type: req.body.type,
      minSalary: req.body.minSalary,
      maxSalary: req.body.maxSalary,
      deadline: req.body.deadline,
      description: req.body.description,
    });

    await newJob.save();
    console.log(" Job added to DB:", newJob);
    res.status(201).json({ message: "Job added successfully", job: newJob });
  } catch (error) {
    console.error(" Error storing job:", error);
    res.status(500).json({ message: "Failed to store job", error: error.message });
  }
});

module.exports = router;
