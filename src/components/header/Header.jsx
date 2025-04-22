import React, { useEffect, useRef } from "react";
import "./Header.css";

const Header = ({ currentPage }) => {
  const barRef = useRef();
  const buttonRef1 = useRef();
  const buttonRef2 = useRef();
  const buttonRef3 = useRef();
  const buttonRef4 = useRef();

  useEffect(() => {
    console.log(`current Page ${currentPage}`);
    if (currentPage === 1) {
      barRef.current.style.width = "25%";
      barRef.current.style.backgroundColor = "blue";
      buttonRef1.current.style.backgroundColor = "blue"
      buttonRef1.current.style.color = "white"
    } else if (currentPage === 2) {
        barRef.current.style.width = "50%";
        barRef.current.style.backgroundColor = "blue";
        buttonRef1.current.style.backgroundColor = "green"
        buttonRef2.current.style.backgroundColor = "blue"
        buttonRef2.current.style.color = "white"
    } else if (currentPage === 3) {
        barRef.current.style.width = "75%";
        barRef.current.style.backgroundColor = "blue";
        buttonRef2.current.style.backgroundColor = "green"
        buttonRef3.current.style.backgroundColor = "blue"
        buttonRef3.current.style.color = "white"
    } else if(currentPage === 4) {
        barRef.current.style.width = "100%";
        barRef.current.style.backgroundColor = "blue";
        buttonRef3.current.style.backgroundColor = "green"
        buttonRef4.current.style.backgroundColor = "blue"
        buttonRef4.current.style.color = "white"
    }
  }, [currentPage]);

  return (
    <div className="container">
      <div className="progressNumber-container">
        <div className="progress-Numbers" ref={buttonRef1}>1</div>
        <div className="progress-Numbers" ref={buttonRef2}>2</div>
        <div className="progress-Numbers" ref={buttonRef3}>3</div>
        <div className="progress-Numbers" ref={buttonRef4}>4</div>
      </div>
      <div className="title-container">
        <div className="title">Personal</div>
        <div className="title">Professional</div>
        <div className="title">Preferences</div>
        <div className="title">Review</div>
      </div>

      <div className="progress-bar">
        <div className="progress-bar-completed" ref={barRef}></div>
      </div>
    </div>
  );
};

export default Header;
