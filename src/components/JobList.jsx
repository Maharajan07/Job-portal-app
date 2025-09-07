import React, { useState, useEffect } from "react";
import JobCard from "./JobCard";
import JobFilters from "./JobFilters";
import "../styles/JobList.css";
import "../styles/JobFilters.css";

const JobList = ({ jobs }) => {
  const [filteredJobs, setFilteredJobs] = useState([]); 
  const [filters, setFilters] = useState({
    search: "",
    location: "",
    jobType: "",
    salary: [50000, 80000], 
  });

  useEffect(() => {
    setFilteredJobs(jobs);
  }, [jobs]);

  useEffect(() => {
    console.log(" Filters Applied:", filters);
    console.log(" All Jobs Data:", jobs);

    let updatedJobs = Array.isArray(jobs) ? [...jobs] : [];

    if (filters.location) {
      updatedJobs = updatedJobs.filter((job) => job.location === filters.location);
    }

    if (filters.jobType) {
      updatedJobs = updatedJobs.filter((job) => {
        console.log(" Checking Job Type:", job?.type);
        return job?.type && job.type === filters.jobType;
      });
    }

    if (filters.search) {
      updatedJobs = updatedJobs.filter((job) =>
        job.title.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    if (filters.salary) {
      const [minSlider, maxSlider] = filters.salary; 
      updatedJobs = updatedJobs.filter((job) => {
        const jobMinSalary = job.minSalary ? job.minSalary / 12 : 0; 
        const jobMaxSalary = job.maxSalary ? job.maxSalary / 12 : Infinity; 
  
        return jobMaxSalary >= minSlider && jobMinSalary <= maxSlider;
      });
    }

    console.log(" Filtered Jobs:", updatedJobs);
    setFilteredJobs(updatedJobs);
  }, [filters, jobs]);

  return (
    <div className="job-list-container">
      <JobFilters onFilterChange={setFilters} />
      <div className="job-list">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => <JobCard key={job._id} job={job} />)
        ) : (
          <p className="no-jobs">⚠️ No matching jobs found. Try adjusting filters.</p>
        )}
      </div>
    </div>
  );
};

export default JobList;
