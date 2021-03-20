import React, {useContext, useState} from "react";
import SearchContext from '../../../contexts/SearchContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import "./Header.css";
import { Link } from "react-router-dom";

const Header = ({ history }) => {


  const [keyword, setkeyword] = useState('  ');
  //TODO: Hacer keyword context para poder buscar desde toda la app.

  const handleSubmit = evt => {
    evt.preventDefault()
    history.push('start')
    console.log(keyword)
  }

  const handleChange = evt => {
    setkeyword(evt.target.value)
  }

  function handleOnClickHome() {
    history.push('/');
};

  function handleOnClickAbout() {
    history.push('/about');
};

  function handleOnClickStart() {
    history.push('/start');
};

  function handleOnClickRecords() {
    history.push('/records');
};


  return (
<Navbar expand="lg" className="header-container" sticky="top">
  <Container className="navbar-container d-flex justify-content-center">

  <Navbar.Brand className="brand" onClick={handleOnClickHome}>Mi Huerta</Navbar.Brand>
  <Navbar.Toggle className="nav-search-container" aria-controls="basic-navbar-nav" />

  <Navbar.Collapse id="basic-navbar-nav">
    <Form inline onSubmit={handleSubmit}>
      <FormControl type="text" placeholder="Buscar" className="mr-sm-2" value={keyword} onChange={handleChange}/>
      <Button className="submit-btn"><FontAwesomeIcon icon={faSearch} /></Button>
    </Form>
    <Nav className="mr-auto">
      <Nav.Link onClick={handleOnClickAbout}>Sobre este sitio</Nav.Link>
      <Nav.Link onClick={handleOnClickStart}>Sembrar</Nav.Link>
      <Nav.Link onClick={handleOnClickRecords}>Mi registros</Nav.Link>
    </Nav>
  </Navbar.Collapse>

  </Container>
</Navbar>

  );
};

export default Header;

// TODO: Pasar los link a Link to=""

