/* eslint-disable no-undef */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-restricted-globals */

import React from "react";
import "./PlantsList.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PlantCard from "../PlantCard/PlantCard";
import data from "../../../../data/data";
import { Container, Col, Row } from "react-bootstrap";

const PlantsList = () => {
  const date = new Date();
  const month = date.getMonth();

  const CardList = data.map(
    (vegetable, index) =>
      vegetable.sowing.includes(month) && (
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
    <Container className="PlantsList-container">
        <Row className="PlantsList-content">{CardList}</Row>
    </Container>
  );
};

export default PlantsList;
