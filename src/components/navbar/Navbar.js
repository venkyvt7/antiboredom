import React from "react";
import "./Navbar.css";

export const Header = () => {
  return (
    <>
      <div className="headerx">
        <div className="titlex">
          <h2>
            <a href="/" className="titley">
            AntiBoredom
            </a>
          </h2>
        </div>
        <div className="pagesx">
          <a href="/" className="option">
            Home
          </a>
          <a href="/games" className="option">
            Games
          </a>
          <a href="/moodquiz" className="option">
           Mood Quiz
          </a>
          <a href="/activitysuggestor" className="option">
            Activity Suggestor
          </a>
          <a href="/randomchat" className="option">
            Chat Room
          </a>
        </div>
      </div>
    </>
  );
};
