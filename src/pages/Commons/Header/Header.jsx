import React from "react";
// import Nav from "../Nav/Nav";
import Search from "../Search/Search";

//react-bootstrap imports
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
// import Container from "react-bootstrap/Container";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
import "./Header.css";

const Header = ({ history }) => {
  return (

<Navbar expand="lg" className="header-container" sticky="top">
  <Container className="navbar-container d-flex justify-content-center">
  <Navbar.Brand className="brand" href="/">Mi Huerta</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Form inline>
      <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
      <Button className="submit-btn">Buscar</Button>
    </Form>
    <Nav className="mr-auto">
      <Nav.Link href="/about">Sobre este sitio</Nav.Link>
      <Nav.Link href="/start">Sembrar</Nav.Link>
      <Nav.Link href="/records">Mi registros</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

    // <Container fluid  className="header-container">
    //   <Container >
    //     <Row className="header-content">
    //       <h1 className="brand"><a href="/">Mi Huerta</a></h1>
    //       <Search />
    //       <Nav history={history} />
    //     </Row>
    //   </Container>
    // </Container>

  );
};

export default Header;
