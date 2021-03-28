/* eslint-disable no-restricted-globals */
import "./Start.css";
import React, { useContext } from "react";
import PlantsList from "./components/PlantsList/PlantsList";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

// import RecordsContext from '../../contexts/RecordsContext';
// import Records from '../Records/Records';

//react-bootstrap imports
import Container from "react-bootstrap/Container";

const Start = ({history}) => {
  const date = new Date();
  const month = date.getMonth();
  const months = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];

  return (
    <div className="page-container">
      <Header history={history}/>
      <Container className="comenzar-container">
        <div className="main">
          <h2>
            Estamos en <span className="month">{months[month]}</span>.
          </h2>
          <h2>Estas plantas podés sembrar este mes:</h2>
          <PlantsList />
        </div>
      </Container>

      <Footer />
    </div>
  );
};

//TODO: Revisar estructura porque se tapa media página y no se ve el footer.

export default Start;
