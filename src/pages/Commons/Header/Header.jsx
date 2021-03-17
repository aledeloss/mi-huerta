import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import "./Header.css";

const Header = ({ history }) => {

  function handleonClickHome() {
    history.push('/');
};

  function handleonClickAbout() {
    history.push('about');
};

  function handleonClickStart() {
    history.push('start');
};

  function handleonClickRecords() {
    history.push('records');
};


  return (
<Navbar expand="lg" className="header-container" sticky="top">
  <Container className="navbar-container d-flex justify-content-center">

  <Navbar.Brand className="brand" onClick={handleonClickHome}>Mi Huerta</Navbar.Brand>
  <Navbar.Toggle className="nav-search-container" aria-controls="basic-navbar-nav" />

  <Navbar.Collapse id="basic-navbar-nav">
    <Form inline>
      <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
      <Button className="submit-btn"><FontAwesomeIcon icon={faSearch} /></Button>
    </Form>
    <Nav className="mr-auto">
      <Nav.Link onClick={handleonClickAbout}>Sobre este sitio</Nav.Link>
      <Nav.Link onClick={handleonClickStart}>Sembrar</Nav.Link>
      <Nav.Link onClick={handleonClickRecords}>Mi registros</Nav.Link>
    </Nav>
  </Navbar.Collapse>

  </Container>
</Navbar>

  );
};

export default Header;

// TODO: Unificar función onclick.

