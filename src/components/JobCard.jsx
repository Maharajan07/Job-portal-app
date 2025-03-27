import React from "react";
import "../styles/JobCard.css";
import expIcon from "../assets/exp.png";
import siteIcon from "../assets/site.png";
import lpaIcon from "../assets/lpa.png";
import amazonLogo from "../assets/amazon.png";
import teslaLogo from "../assets/tesla.png";
import swiggyLogo from "../assets/swiggy.png";
import deloitteLogo from "../assets/deloitte.png";
import googleLogo from "../assets/google.png";
import eyLogo from "../assets/ey.png";
import nvidiaLogo from "../assets/nvidia.png";
import metaLogo from "../assets/meta.png";
import facebookLogo from "../assets/facebook.png";


const logoMap = {
  "Amazon": amazonLogo,
  "Tesla": teslaLogo,
  "Swiggy": swiggyLogo,
  "Deloitte": deloitteLogo,
  "Google": googleLogo,
  "Ey": eyLogo,
  "Nvidia": nvidiaLogo,
  "Meta": metaLogo,
  "Facebook": facebookLogo

};

const JobCard = ({ job }) => {
  return (
    <div className="card">
      <div className="d-flex align-items-center justify-content-between">
        <img src={logoMap[job.company] || amazonLogo} alt={job.company} /> 
      <span className="badge" style={{color:"black", fontSize:"14px",fontWeight:"500"}}>24h Ago</span>
      </div>
      <h5>{job.title}</h5>

      <p className="job-details">
        <span className="icon">
          <img src={expIcon} alt="Experience Icon" className="icon-img" />
          1-3 yr Exp
        </span>
        <span className="icon">
          <img src={siteIcon} alt="Location Icon" className="icon-img" />
          {job.location}
        </span>
        <span className="icon">
          <img src={lpaIcon} alt="Salary Icon" className="icon-img" />
          {job.maxSalary ? (job.maxSalary / 100000).toFixed(0) + " LPA" : "Salary Not Disclosed"}
        </span>
      </p>

      <ul>
      {job.description
          ? job.description.split("\n").map((line, index) => <li key={index}>{line}</li>)
          : <li>No description available</li>
        }
      </ul>

      <button className="btn btn-primary w-100">Apply Now</button>
    </div>
  );
};

export default JobCard;
