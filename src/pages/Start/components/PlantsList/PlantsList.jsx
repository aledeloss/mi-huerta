import React from "react";
import "./PlantsList.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PlantCard from "../PlantCard/PlantCard";
import data from "../../../../data/data";
import { Container, Col, Row } from "react-bootstrap";

const PlantsList = () => {
  const date = new Date();
  const month = date.getMonth();

  const filters = ['enero', 'febrero' ]

  //randomize list
  //   var arr1 = ["a", "b", "c", "d"];
  // arr1.sort(function() { return Math.random() - 0.5 });
  // console.log(arr1)

  // let filteredVegetables = (data) => {
  //   let list = [];
  //   for(let item in data) {
  //     !list.includes(item.name === filter) && list.push()
  //   }
  

  const CardList = data.map(
    (vegetable, index) =>
      vegetable.sowing.includes('abril') && (
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
