import React, { useEffect, useRef } from "react";
import "./Header.css";

const Header = ({ currentPage }) => {
  const progressPercentage = (currentPage )* 25 + "%";

  return (
    <div className="container">
      <div className="progressNumber-container">
        {[1, 2, 3, 4].map((step) => (
          <div
            key={step}
            className={`progress-Numbers ${
              currentPage === step
                ? "active"
                : currentPage > step
                ? "completed"
                : ""
            }`}
          >
            {" "}
            {step}{" "}
          </div>
        ))}
      </div>
      <div className="title-container">
        <div className="title">Personal</div>
        <div className="title">Professional</div>
        <div className="title">Preferences</div>
        <div className="title">Review</div>
      </div>

      <div className="progress-bar">
        <div className="progress-bar-completed" style={{width:progressPercentage}}></div>
      </div>
    </div>
  );
};

export default Header;
