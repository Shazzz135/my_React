import React from "react";
import "./about.css";

const About: React.FC = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Me</h1>
      <div className="sub-container">
        <p className="about-description">
        My name is Nick Shahbaz, and I’m a 20-year-old passionate about developing and programming. I have a strong drive to learn new things, constantly challenging myself to grow and improve. I have 5+ years of knwoledge in tech that reach many catagories. I intend to pursue a career in Computer Science, and I’m excited about the opportunities that lie ahead. I’m always eager to take on new challenges and expand my skill set. I believe that with hard work and dedication, I can achieve my goals and make a positive impact in the tech industry, maye even yours..
        </p>
      </div>
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
      <div className="about-details">
        <h2>Tech Skills</h2>
        <ul className="hobbies-list">
          <li>Python</li>
          <li>C/C++</li>
          <li>Java</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Swift/SwiftUI</li>
          <li>React(with Vite)</li>
        </ul>
      </div>
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
  );
};

export default About;