import React from "react";
import "./projects.css";

const Projects: React.FC = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-title">Projects</h1>
      <div className="sub-container">
        <p className="projects-description">
          Here is a collection of my Projects that I have spent making in the previous years. I have tried many different but simple challenges which let me use my skills and even gain new ones. I plan on constantly creating new Projects and perfect my skills to the best of my ability.
        </p>
      </div>
      <div className="projects-details">
        <h2>Featured Projects</h2>
        <ul className="projects-list">
          <li>
            <h3 className="project-subtitle">Red or Black</h3>
            <div className="video-container">
              <video 
                className="project-video" 
                loop 
                muted 
                autoPlay
              >
                <source src="/rob_vid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="project-description">
              I developed a mobile game for iOS from the ground up using Swift as the primary programming language. Responsible for every element of the project, I designed the visuals, created the UI, and implemented all underlying calculations. After completing the app, I successfully published it on the Apple App Store as a sole proprietor. This project spanned the entire summer, during which I learned Swift and crafted a fully functional game, ultimately managing the technical, creative, and publishing processes independently.
            </p>
          </li>
          <li>
            <h3 className="project-subtitle">Simple Blackjack</h3>
            <div className="video-container">
              <video 
                className="project-video" 
                loop 
                muted 
                autoPlay
              >
                <source src="/bj_vid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="project-description">
              <strong><a className="flap-link" href="https://spencerkelly.tech/">FlapJacck</a></strong> and I collaborated on this project to deepen our understanding of the C programming language and Git version control workflows. Using GitHub, he initiated the project repository, while I created my own branch through forking. I then made individual contributions and submitted pull requests, which allowed him to review and merge updates seamlessly. This project, which took approximately a week to configure, was instrumental in enhancing our collaborative skills and emphasizing the practical value of GitHub in team-based development.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;