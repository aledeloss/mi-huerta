import React from "react";
import "./Footer.css";
//react-bootstrap imports
import Container from "react-bootstrap/Container";

const Footer = () => {
  return (
    <Container fluid className="footer-container">
      <span>Hecho con ☕ 👶🏻 💪 y mucho ❤️ por <a href="https://github.com/aledeloss">Ale DeLos</a></span>
    </Container>
  );
};

export default Footer;
