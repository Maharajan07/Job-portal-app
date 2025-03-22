import React, { useState } from "react";
import "../styles/JobFormModal.css";
import "../styles/Dropdown.css"; // Import dropdown styles

const JobFormModal = ({ isOpen, onClose, onJobSubmit }) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    jobTitle: "",
    companyName: "",
    location: "",
    jobType: "",
    minSalary: "",
    maxSalary: "",
    deadline: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle form submission (Send data to MongoDB)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const jobData = {
        title: formData.jobTitle,
        company: formData.companyName,
        location: formData.location,
        type: formData.jobType,
        minSalary: formData.minSalary ? Number(formData.minSalary) : 0,
        maxSalary: formData.maxSalary ? Number(formData.maxSalary) : 0,
        deadline: formData.deadline,
        description: formData.description,
      };

      console.log("🔍 Sending Job Data:", jobData); // ✅ Debug frontend data

      const response = await fetch("http://localhost:5000/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(jobData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("✅ Job added successfully:", result.job);

        if (typeof onJobSubmit === "function") {
          onJobSubmit(result.job); // ✅ Add the job to the job list instantly
        }

        setFormData({ // ✅ Reset form after submission
          jobTitle: "",
          companyName: "",
          location: "",
          jobType: "",
          minSalary: "",
          maxSalary: "",
          deadline: "",
          description: "",
        });
        onClose(); // ✅ Close modal after submission
      } else {
        console.error("❌ Failed to submit job");
      }
    } catch (error) {
      console.error("❌ Error submitting job:", error);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          <h2 className="modal-title">Create Job Opening</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Job Title</label>
                <input
                  type="text"
                  name="jobTitle"
                  placeholder="Enter job title"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  placeholder="Amazon, Microsoft, Swiggy"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              {/* ✅ Dropdown for Location */}
              <div className="form-group dropdown">
                <label>Location</label>
                <button type="button" className="dropbtn">
                  {formData.location || "Choose Preferred Location"}
                </button>
                <div className="dropdown-content">
                  {["Onsite", "Remote", "Hybrid","WFO", "WFH"].map((loc) => (
                    <a key={loc} href="#" onClick={(e) => { e.preventDefault(); setFormData({ ...formData, location: loc }); }}>{loc}</a>
                  ))}
                </div>
              </div>

              {/* ✅ Dropdown for Job Type */}
              <div className="form-group dropdown">
                <label>Job Type</label>
                <button type="button" className="dropbtn">
                  {formData.jobType || "Select Job Type"}
                </button>
                <div className="dropdown-content">
                  {["Internship", "FullTime", "PartTime", "Contract"].map((type) => (
                    <a key={type} href="#" onClick={(e) => { e.preventDefault(); setFormData({ ...formData, jobType: type }); }}>{type}</a>
                  ))}
                </div>
              </div>
            </div>

            <div className="form-row">
              {/* ✅ Salary Range */}
              <div className="form-group">
                <label>Salary Range</label>
                <div className="salary-inputs">
                  <div className="salary-box">
                    <input
                      type="number"
                      name="minSalary"
                      placeholder="₹0"
                      value={formData.minSalary}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="salary-box">
                    <input
                      type="number"
                      name="maxSalary"
                      placeholder="₹12,00,000"
                      value={formData.maxSalary}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* ✅ Application Deadline */}
              <div className="form-group">
                <label>Application Deadline</label>
                <div className="date-wrapper">
                  <input
                    type="date"
                    name="deadline"
                    value={formData.deadline}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            {/* ✅ Job Description */}
            <div className="form-group">
              <label>Job Description</label>
              <textarea
                name="description"
                className="job-description"
                placeholder="Please share a description to let the candidate know more about the job role"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>

            {/* ✅ Submit and Close Buttons */}
            <div className="modal-footer">
              <button type="button" className="save-btn">Save Draft</button>
              <button type="submit" className="publish-btn">Publish »</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobFormModal;
