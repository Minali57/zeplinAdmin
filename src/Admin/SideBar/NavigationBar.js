import React from "react";
import "./NavigationBar.css";
import { NavLink, Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FcDocument } from "react-icons/fc";
import { BiBullseye } from "react-icons/bi";
import { RiLayoutMasonryFill } from "react-icons/ri";
import { RiToolsLine } from "react-icons/ri";
import { BsGear } from "react-icons/bs";
import { VscBook } from "react-icons/vsc";
import { GiKnightBanner } from "react-icons/gi";
const NavigationBar = () => {
  return (
    <div className="wrapper">
      <div className="navigation"> NAVIGATION</div>

      <ul className="ul">
        <li>
          <span className="icon">
            <FaUser />
          </span>

          <NavLink to="/user">User</NavLink>
        </li>

        <li>
          <span className="icon">
            <FcDocument />
          </span>

          <NavLink to="/cms">CMS</NavLink>
        </li>
        <li>
          <span className="icon">
            <BiBullseye />
          </span>

          <NavLink to="/mission">Mission</NavLink>
        </li>
        <li>
          <span className="icon">
            <RiLayoutMasonryFill />
          </span>

          <NavLink to="/home">Mission Theme</NavLink>
        </li>
        <li>
          <span className="icon">
            <RiToolsLine />
          </span>

          <NavLink to="/home">Mission Skills</NavLink>
        </li>
        <li>
          <span className="icon">
            <BsGear />
          </span>

          <NavLink to="/missionapp">Mission Application</NavLink>
        </li>
        <li>
          <span className="icon">
            <VscBook />
          </span>

          <NavLink to="/story">Story</NavLink>
        </li>
        <li>
          <span className="icon">
            <GiKnightBanner />
          </span>

          <NavLink to="/home">Banner Management</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavigationBar;
