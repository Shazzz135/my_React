import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./pages/loading";
import Nav from "./pages/nav";
import Home from "./pages/home";
import About from "./pages/about";
import Education from "./pages/education";
import Projects from "./pages/projects";
import Contacts from "./pages/contacts";
import "./App.css";

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<"loading" | "home">("loading");
  const [fadeClass, setFadeClass] = useState("fade-in");
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  useEffect(() => {
    // Simulate loading screen for 2 seconds, then switch to home
    const timer = setTimeout(() => {
      setFadeClass("fade-out");
      setTimeout(() => {
        setCurrentScreen("home");
        setFadeClass("fade-in");
      }, 500); // Match the fade-out duration
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleInfoClick = () => {
    setIsInfoOpen(true);
  };

  const handleInfoLeave = () => {
    setIsInfoOpen(false);
  };

  return (
    <Router>
      {currentScreen === "home" && <Nav />}
      <div className={`app-container ${fadeClass}`}>
        {currentScreen === "loading" && <Loading />}
        {currentScreen === "home" && (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        )}
      </div>

      {/* Creator Info Box */}
      <div 
        className={`creator-info-box ${isInfoOpen ? 'info-open' : ''}`}
        onClick={handleInfoClick}
        onMouseLeave={handleInfoLeave}
      >
        <div className="creator-info-button">i</div>
        <h2>
          Creator:{" "}
          <a
            href="https://github.com/shazzz135"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nick Shahbaz
          </a>
        </h2>
        <p>Make: Vite + React</p>
      </div>
    </Router>
  );
};

export default App;