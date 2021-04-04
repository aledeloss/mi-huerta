/* eslint-disable no-restricted-globals */
import "./Start.css";
import React, { useContext } from "react";
import PlantsList from "./components/PlantsList/PlantsList";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import useLocalStorage from "../../hooks/useLocalStorage";
import Container from "react-bootstrap/Container";

const Start = ({ history }) => {
  let [records, setRecords] = useLocalStorage();

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
    <div className="start-container">
      <Header history={history} />
      <Container className="start-content">
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
