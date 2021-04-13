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
    <Container className="plants-list-container justify-content-md-center ">
        <Row className="plants-list-content">{CardList}</Row>
    </Container>
  );
};

export default PlantsList;
