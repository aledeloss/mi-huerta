import React, { useContext } from "react";
import './Records.css';
import RecordsContext from "../../contexts/RecordsContext";
// import SeedCard from './components/SeedCard/SeedCard';
import Header from "../Commons/Header/Header";
import Footer from "../Commons/Footer/Footer";
import Container from "react-bootstrap/Container";


const Records = ({ history }) => {
  let [records, setRecord] = useContext(RecordsContext);

  return (
    <div className="records-page-container">
      <Header history={history} />
      <Container className="records-content">
      {  records.length === 0 ?
      <div className="alert">¡Parece que aún no sembraste nada!</div>
      :
        records.map((record) => (
          <div>{record.nombre}</div>
        ))}
      </Container>

      <Footer />
    </div>
  );
};

export default Records;
