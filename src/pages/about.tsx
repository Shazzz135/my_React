import React from "react";
import "./about.css";

const About: React.FC = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Me</h1>
      <div className="sub-container">
        <p className="about-description">
          My name is Nick Shahbaz, and I'm a 20-year-old passionate developer and programmer. With a strong drive to learn new technologies, I constantly challenge myself to grow and improve. I've accumulated over 5 years of knowledge across many technical categories. I'm pursuing a career in Computer Science and excited about the opportunities ahead. Always eager to tackle new challenges and expand my skill set, I believe that with hard work and dedication, I can achieve my goals and make a positive impact in the tech industry—maybe even yours.
        </p>
      </div>
      
      <div className="categories-row">
        <div className="hobbies-container category-container">
          <div className="about-details">
            <h2>Hobbies</h2>
            <ul className="hobbies-list">
              <li>Programming</li>
              <li>Gaming</li>
              <li>Working</li>
              <li>Learning New Things</li>
              <li>Exploring New Technologies</li>
              <li>Building Projects</li>
            </ul>
          </div>
        </div>
        
        <div className="tech-skills-container category-container">
          <div className="about-details">
            <h2>Tech Skills</h2>
            <ul className="hobbies-list">
              <li>Python</li>
              <li>C/C++</li>
              <li>Java</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Arm7 </li>
              <li>JavaScript</li>
              <li>Swift/SwiftUI</li>
              <li>React(with Vite)</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="categories-row">
        <div className="tools-container category-container">
          <div className="about-details">
            <h2>Tools and IDE's</h2>
            <ul className="hobbies-list">
              <li>Eclipse</li>
              <li>VSCode</li>
              <li>PyCharm</li>
              <li>Replit</li>
              <li>Xcode/Android Studio</li>
              <li>Git</li>
              <li>Azure</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;