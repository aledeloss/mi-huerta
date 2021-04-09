import { useContext }from "react";
import { Navbar, Container } from "react-bootstrap";
import "./Header.css";
import NavBar from '../NavBar/NavBar';
import SearchForm from "../SearchForm/SearchForm";
import RecordsContext from '../../contexts/RecordsContext';
import LocalStorageModal from '../../components/LocalStorageModal/LocalStorageModal';


const Header = ({ history }) => {

  let [records, setRecords] = useContext(RecordsContext);


  function handleOnClickHome() {
    history.push("/");
};

  return (
    <>
<Navbar expand="lg" className="header-container" sticky="top">
  <Container className="navbar-container d-flex justify-content-center">

  <Navbar.Brand className="brand" onClick={handleOnClickHome}>Mi Huerta</Navbar.Brand>
  <Navbar.Toggle className="nav-search-container" aria-controls="basic-navbar-nav" />

  <Navbar.Collapse id="basic-navbar-nav navbar-collapse">
    <SearchForm history={history}/>
    <NavBar />
  </Navbar.Collapse>

  </Container>
</Navbar>
<LocalStorageModal />
</>

  );
};

export default Header;
