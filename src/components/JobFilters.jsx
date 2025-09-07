import { useState, useEffect } from "react";
import { Slider } from "@mui/material";
import searchIcon from "../assets/search.png";
import typeIcon from "../assets/type.png";
import locationIcon from "../assets/location.png";

const JobFilters = ({ onFilterChange }) => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [salary, setSalary] = useState([50000, 80000]);

  useEffect(() => {
    onFilterChange({ search, location, jobType, salary });
  }, [search, location, jobType, salary]);

  return (
    <div className="job-filters">
      <div className="filter-item">
        <img src={searchIcon} alt="Search Icon" className="filter-icon" />
        <input
          type="text"
          placeholder="Search by Job Title, Role"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="filter-separator"></div>

      <div className="filter-item">
        <img src={locationIcon} alt="Location Icon" className="filter-icon" />
        <select value={location} onChange={(e) => setLocation(e.target.value)}>
          <option value="">&nbsp;&nbsp;Preferred Location</option>
          <option value="Remote">Remote</option>
          <option value="Onsite">Onsite</option>
          <option value="Hybrid">Hybrid</option>
          <option value="WFH">WFH</option>
          <option value="WFO">WFO</option>
        </select>
      </div>

      <div className="filter-separator"></div>

      <div className="filter-item">
        <img src={typeIcon} alt="Type Icon" className="filter-icon" />
        <select value={jobType} onChange={(e) => setJobType(e.target.value)}>
          <option value="">&nbsp;&nbsp;Job type</option>
          <option value="FullTime">Full Time</option>
          <option value="PartTime">Part Time</option>
          <option value="Freelance">Freelance</option>
          <option value="Internship">Internship</option>
          <option value="Contract">Contract</option>
        </select>
      </div>

      <div className="filter-separator"></div>

      {/* Fixed MUI Slider */}
      <div className="salary-range">
        <div className="salary-headres">
          <span>Salary Per Month&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span>₹{salary[0] / 1000}k - ₹{salary[1] / 1000}k</span>
        </div>
        <Slider
          value={salary}
          onChange={(e, newValue) => setSalary(newValue)}
          min={10000}
          max={450000}
          step={5000}
          valueLabelDisplay="auto" //  Add labels for better UI

          sx={{
      width: "80%",
      color: "black",
      height: 3, // overall thickness
      "& .MuiSlider-rail": {
        height: 3,
        borderRadius: 5,
      },
      "& .MuiSlider-track": {
        height: 3,
        borderRadius: 5,
      },
      "& .MuiSlider-thumb": {
        width: 15,
        height: 15,
      },
    }}
        />
      </div>
    </div>
  );
};

export default JobFilters;
