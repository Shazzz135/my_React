import React from "react";
import "./education.css";

const Education: React.FC = () => {
  return (
    <div className="education-container">
      <h1 className="education-title">Education</h1>
      <div className="sub-container">
        <p className="education-description">
          I am currently enrolled in Wilfrid Laurier University. I am engaging in Computer Science with a minor for Education. I am currently transitioning to my 3rd year in hopes that I will have a enjoyable experience like the first two years. 
        </p>
      </div>
      
      <div className="categories-row">
        <div className="university-container category-container">
          <div className="education-details">
            <h2>University</h2>
            <ul className="education-list">
              <li>Wilfrid Laurier</li>
              <li>Major: Computer Science</li>
              <li>Minor: Education</li>
              <li>Laurier Computer Society:<br></br>Development/Review</li>
              <li>Kitchener, ON</li>
            </ul>
          </div>
        </div>
        
        <div className="achievements-container category-container">
          <div className="education-details">
            <h2>Achievements</h2>
            <ul className="education-list">
              <li>G9-G12: Honour Roll</li>
              <li>Highest Grade: Computer Science G11(97.2%)</li>
              <li>Highest Grade: Computer Science G12(98.7%)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;