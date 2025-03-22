import { useState, useEffect } from "react";
import searchIcon from "../assets/search.png";
import typeIcon from "../assets/type.png";
import locationIcon from "../assets/location.png";

const JobFilters = ({ onFilterChange }) => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [salary, setSalary] = useState([50000, 80000]);

  useEffect(() => {
    onFilterChange({
      search,
      location,
      jobType,
      salary,
    });
  }, [search, location, jobType, salary, onFilterChange]);

  return (
    <div className="job-filters">
      <div className="filter-item">
      <img src={searchIcon} alt="Search Icon" className="filter-icon" />

        <input type="text" placeholder="Search By Job Title,"></input>
      </div>

      <div className="filter-separator"></div>

      <div className="filter-item">
      <img src={typeIcon} alt="Type Icon" className="filter-icon" />

        <select value={location} onChange={(e) => setLocation(e.target.value)}>
          <option value="">Preferred Location</option>
          <option value="Remote">Remote</option>
          <option value="Onsite">Onsite</option>
        </select>
      </div>

      <div className="filter-separator"></div>

      <div className="filter-item">
      <img src={locationIcon} alt="Location Icon" className="filter-icon" />

        <select value={jobType} onChange={(e) => setJobType(e.target.value)}>
          <option value="">Job Type</option>
          <option value="Full Time">Full Time</option>
          <option value="Part Time">Part Time</option>
          <option value="Freelance">Freelance</option>
        </select>
      </div>

      <div className="filter-separator"></div>

      <div className="salary-range">
        <span>Salary Per Month</span>
        <input
          type="range"
          min="30000"
          max="150000"
          step="5000"
          value={salary[0]}
          onChange={(e) => setSalary([Number(e.target.value), salary[1]])}
        />
        <span>₹{salary[0] / 1000}k - ₹{salary[1] / 1000}k</span>
      </div>
    </div>
  );
};

export default JobFilters;
