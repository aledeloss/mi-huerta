import React from "react";
import "./NavigationLink.scss";
import { NavLink } from "react-router-dom";

const NavigationLink = ({ to, label }) => {
  return (
    <div className="navigationLink">
      <NavLink to={to} className="navigacionLink__label">{label}</NavLink>
    </div>
  );
};

export default NavigationLink;
