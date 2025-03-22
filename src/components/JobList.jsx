import React, { useState, useEffect } from "react";
import JobCard from "./JobCard";
import JobFilters from "./JobFilters";
import "../styles/JobList.css";
import "../styles/JobFilters.css";

const JobList = ({ jobs }) => {
  return (
    <div className="job-list-container">
      <JobFilters onFilterChange={() => {}} />
      <div className="job-list">
        {jobs.length > 0 ? (
          jobs.map((job) => <JobCard key={job._id} job={job} />)
        ) : (
          <p className="no-jobs">No jobs available.</p>
        )}
      </div>
    </div>
  );
};

export default JobList;