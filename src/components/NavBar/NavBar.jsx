import React from "react";
import "./NavBar.css";
import NavigationLink from "../NavigationLink/NavigationLink";

const NavBar = () => {
  return (
    <div className="navBar">
      <NavigationLink
        to="/about"
        label="Sobre este sitio"
      />
      <NavigationLink
        to="/start"
        label="Sembrar"
      />
      <NavigationLink
        to="/records"
        label="Mis registros"
      />
    </div>
  );
};

export default NavBar;
