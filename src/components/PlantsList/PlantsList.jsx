import { useState, useEffect } from "react";
import "./PlantsList.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import PlantCard from "../PlantCard/PlantCard";
import data from "../../assets/data/data";
import { Container, Col, Row } from "react-bootstrap";

const PlantsList = ({ filters }) => {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const filterData = () => {
      let dataArray = [];
      data.forEach((vegetable) => {
        vegetable.sowing.forEach((month) => {
          if (filters.includes(month) && !dataArray.includes(vegetable)) {
            dataArray.push(vegetable);
          }
        });
      });
      setFilteredData(dataArray);
    };
    filterData();
  }, [filters]);

  const renderCards = filteredData.map((vegetable, index) => (
    <Col key={index}>
      <PlantCard
        src={vegetable.img.src}
        alt={vegetable.img.alt}
        name={vegetable.name}
        vegetable={vegetable}
      />
    </Col>
  ));

  return (
    <Container className="plants-list justify-content-md-center ">
      <Row className="plants-list-content">{renderCards}</Row>
    </Container>
  );
};

export default PlantsList;
