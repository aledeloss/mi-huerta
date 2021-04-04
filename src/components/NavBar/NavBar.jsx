import React from "react";
import "./NavBar.css";
import { Nav } from 'react-bootstrap';
import NavigationLink from "../NavigationLink/NavigationLink";

const NavBar = () => {
  return (
    <Nav className="mr-auto navBar">
     <NavigationLink
        to="/about"
        label="Sobre este sitio"
      />
      <NavigationLink
        to="/start"
        label="¿Qué sembrar?"
      />
      <NavigationLink
        to="/records"
        label="Mis registros"
      />      
    </Nav>
  );
};

export default NavBar;
