/* eslint-disable no-undef */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-restricted-globals */

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

//components and data imports
import PlantCard from "../PlantCard/PlantCard";
import "./PlantsList.css";
import data from "../../../../data/data";
import { Container, Col, Row } from "react-bootstrap";

const PlantsList = () => {
  const date = new Date();
  const month = date.getMonth();

  const CardList = data.map(
    (vegetable, index) =>
      vegetable.siembra.includes(month) && (
        <Col>
          <PlantCard
            key={index}
            src={vegetable.img.src}
            alt={vegetable.img.alt}
            name={vegetable.name}
            vegetable={vegetable}
          />
        </Col>
      )
  );

  return (
    <Container className="vegetablesList-container">
        <Row className="vegetablesList-content">{CardList}</Row>
    </Container>
  );
};

export default PlantsList;
