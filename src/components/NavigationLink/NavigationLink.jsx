import React from "react";
import "./NavigationLink.css";
import { NavLink } from "react-router-dom";

const NavigationLink = ({ to, label }) => {
  return (
    <div className="navigationLink">
      <NavLink to={to}>{label}</NavLink>
    </div>
  );
};

export default NavigationLink;
