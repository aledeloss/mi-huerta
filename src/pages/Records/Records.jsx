import React, { useContext } from "react";
import "./Records.css";
import RecordsContext from "../../contexts/RecordsContext";
// import SeedCard from './components/SeedCard/SeedCard';
import Header from "../Commons/Header/Header";
import Footer from "../Commons/Footer/Footer";
import Container from "react-bootstrap/Container";

const Records = ({ history }) => {

  let [records, setRecord] = useContext(RecordsContext)

  let recordsList = records.map((e) => <div>{e.nombre}</div>);

  const recordsRender = () => {
    records.length === 0 ? (
      <div className="alert">¡Parece que aún no sembraste nada!</div>
    ) : (
      records.map((e) => <div>{e.nombre}</div>)
    );
  };

  console.log(records);

  return (
    <div className="records-page-container">
      <Header history={history} />

      <Container className="records-content">
        {/* {records.map(record => 
                <div>{record.nombre}</div>
            )} */}
        
          {/* {
            records.map((record) => <div>{record.nombre}</div>)
          } */}
{/* <RecordsContext.Consumer></RecordsContext.Consumer> */}
      </Container>
        
      <Footer />
    </div>
  );
};

export default Records;
