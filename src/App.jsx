import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import JobList from "./components/JobList";
import JobFormModal from "./components/JobFormModal";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/NavBar.css";

// ✅ Use environment variable for API URL
const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [jobs, setJobs] = useState([]);

  // ✅ Fetch jobs from MongoDB when the component mounts
  useEffect(() => {
    fetchJobs();
  }, []);

  // ✅ Function to fetch jobs from the backend
  const fetchJobs = async () => {
    try {
      const response = await fetch(`${API_URL}/jobs`);
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  // ✅ Function to refresh job list after submission
  const handleJobSubmit = async () => {
    await fetchJobs(); // ✅ Fetch latest job list after submission
  };

  return (
    <div>
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      <JobList jobs={jobs} />
      <JobFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onJobSubmit={handleJobSubmit} />
    </div>
  );
}

export default App;
