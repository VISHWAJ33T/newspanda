// shortcut rcep
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import YingYang from "./YinYang.svg";

const NavBar = () => {
  const [mode, setMode] = useState("dark");
  useEffect(() => {
    // YIN YANG SWITCH
    const switchBtn = document.querySelector(".switchBtn");
    const switchWrap = document.querySelector(".switchWrap");
    const toggleMode = document.querySelector(".toggle-mode");
    const body = document.querySelector("body");

    toggleMode.addEventListener("click", () => {
      const toggleBody = body.classList;
      const toggleBtn = switchBtn.classList;
      const toggleWrap = switchWrap.classList;
      if (mode === "dark") {
        toggleBody.add("lightMode");
        toggleBtn.add("lightMode");
        toggleWrap.add("lightMode");
        setMode("light");
      }
      if (mode === "light") {
        toggleBody.remove("lightMode");
        toggleBtn.remove("lightMode");
        toggleWrap.remove("lightMode");
        setMode("dark");
      }
    });
  });

  return (
    <div>
      <nav
        className={`navbar fixed-top navbar-expand-lg navbar-${mode} bg-${mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand text-bold" to="#">
            NewsPanda
          </Link>
          <button
            className="navbar-toggler border-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  Technology
                </Link>
              </li>
            </ul>
            <div className="toggle-mode d-flex align-items-center">
              {/* <span className="mx-2">Mode:</span> */}
              <div className="switchWrap">
                <button className="switchBtn">
                  <ReactSVG src={YingYang} />
                  {/* <YingYang/> */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
