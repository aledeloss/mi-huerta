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
      <Navbar expand="lg" className="header" sticky="top">
        <Container className="header__navbar d-flex justify-content-center">
          <Navbar.Brand className="brand" onClick={handleOnClickHome}>
            <h2 className="header__brand">Mi Huerta</h2>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
          />

          <Navbar.Collapse id="basic-navbar-nav " className="header__collapse">
            <Row>
            <Col xs={12} lg={6} >
              <SearchForm history={history} />
            </Col>
            <Col xs={12} lg={6} className="header__menu">
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
