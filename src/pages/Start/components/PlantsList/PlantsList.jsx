/* eslint-disable no-undef */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-restricted-globals */

import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

//components and data imports
import PlantCard from "../PlantCard/PlantCard";
import "./PlantsList.css";
import data from "../../../../data/data";
import RecordsContext from "../../../../contexts/RecordsContext";
import { RecordsProvider } from "../../../../contexts/RecordsContext";
import { Container, Col, Row } from "react-bootstrap";

const PlantsList = () => {
  const date = new Date();
  const month = date.getMonth();


let [records, setRecord] = useContext(RecordsContext);

  // let [records, setRecord] = useContext(RecordsContext);
  // function saveRecord(planta) {
  //   let newSow = {
  //     name: planta.nombre,
  //     sowDate: new Date(),
  //     harvestBegin: planta.cosecha[0],
  //     harvestEnd: planta.cosecha[1],
  //   };
  //   if (records.length === 0) {
  //     setRecord([newSow]);
  //   } else {
  //     setRecord([...records, newSow]);
  //   }
  //   console.log(records);
  // }

  const CardList = data.map(
    (planta, index) =>
      planta.siembra.includes(month) && (
        <Col>
          <PlantCard
            key={index}
            src={planta.img.src}
            alt={planta.img.alt}
            nombre={planta.nombre}
            planta={planta}
          />
        </Col>
      )
  );

  return (
    <Container className="plantsList-container">
      <RecordsProvider>
        {records.length}
        <Row className="plantsList-content">{CardList}</Row>
      </RecordsProvider>
    </Container>
  );
};

export default PlantsList;
