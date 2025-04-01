import React from "react";
import "./projects.css";

const Projects: React.FC = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-title">Projects</h1>
      <div className="sub-container">
        <p className="projects-description">
          Here is a collection of my Projects that I have spent making in the previous years. I have tried many different but simple challanges which let me use my skills and even gain new ones. I plan on constantly creating new Projects and perfect my skills to the best of my ability.
        </p>
      </div>
      <div className="projects-details">
  <h2>Featured Projects</h2>
  <ul className="projects-list">
    <li>
      <h3 className="project-subtitle">Red or Black</h3>
      <video className="project-video" controls>
        <source src="path-to-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p className="project-description">
        This is a brief description of the project, explaining its purpose, features, and technologies used.
      </p>
    </li>
    <li>
      <h3 className="project-subtitle">Simple Blackjack</h3>
      <video className="project-video" controls>
        <source src="path-to-another-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p className="project-description">
        This is another project description, providing details about the project and its significance.
      </p>
    </li>
  </ul>
</div>
    </div>
  );
};

export default Projects;