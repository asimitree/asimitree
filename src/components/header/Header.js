import React, { useContext } from "react";
import Headroom from "react-headroom";
import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import { greeting, workExperiences } from "../../portfolio";

function Header() {
  const { isDark } = useContext(StyleContext);
  const exp = workExperiences.viewExperiences;
  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="" className="logo">
          <span className="logo-name">
            <img
              alt="Simit Logo"
              className="logo-svg"
              src={require(`../../assets/images/${
                isDark ? "logo-light.svg" : "logo-dark.svg"
              }`)}
            ></img>
          </span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: "white" }}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          <li>
            <a href="#skills">Skills</a>
          </li>
          {exp === true && (
            <li>
              <a href="#experience">Spaces</a>
            </li>
          )}
          <li>
            <a href="#achievements">Visuals</a>
          </li>
          <li>
            <a href="#blogs">Learning</a>
          </li>
          <li>
            <a href="#talks">Sketches</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
          <li>
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
