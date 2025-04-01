import React from "react";
import "./home.css";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="content">
        <div className="name-row">
          <h1>Hello, Im</h1>
          <h1 className="name">Shazzz</h1>
        </div>
        <div className="school-row">
            <p>Or Just</p>
            <p className="school">Nick Shahbaz</p>
        </div>
      </div>
    </div>
  );
};

export default Home;