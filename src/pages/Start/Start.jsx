/* eslint-disable no-restricted-globals */
import "./Start.css";
import React, { useContext } from "react";
import PlantsList from "./components/PlantsList/PlantsList";
import Nav from "../Commons/Nav/Nav";
import Header from "../Commons/Header/Header";
import Footer from "../Commons/Footer/Footer";

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

export default Start;
