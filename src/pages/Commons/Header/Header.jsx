import React from "react";
import Nav from "../Nav/Nav";
import "./Header.css";

//react-bootstrap imports
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Header = ({ history }) => {
  return (
    <Container fluid  className="header-container">
      <Container >
        <Row className="header-content">
          <h1>MI HUERTA</h1>
          <Nav history={history} />
        </Row>
      </Container>
    </Container>
  );
};

export default Header;
