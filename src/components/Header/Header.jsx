import { Container, Navbar, Row, Col } from "react-bootstrap";
import "./Header.scss";
import NavBar from "../NavBar/NavBar";
import SearchForm from "../SearchForm/SearchForm";
import LocalStorageModal from "../../components/LocalStorageModal/LocalStorageModal";

const Header = ({ history }) => {

  function handleOnClickHome() {
    history.push("/");
  }

  return (
    <>
      <Navbar expand="lg" className="header-container" sticky="top">
        <Container className="navbar-container d-flex justify-content-center">
          <Navbar.Brand className="brand app-name" onClick={handleOnClickHome}>
            <h2>Mi Huerta</h2>
          </Navbar.Brand>
          <Navbar.Toggle
            className="nav-search-container"
            aria-controls="basic-navbar-nav"
          />

          <Navbar.Collapse id="basic-navbar-nav navbar-collapse" className="navbar-elements">
            <Row>
            <Col xs={12} lg={6} >
              <SearchForm history={history} />
            </Col>
            <Col xs={12} lg={6} className="nav-menu">
              <NavBar />
            </Col>
            </Row>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <LocalStorageModal />
    </>
  );
};

export default Header;
