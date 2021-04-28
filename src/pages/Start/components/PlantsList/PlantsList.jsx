import { useState } from "react";
import "./PlantsList.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PlantCard from "../PlantCard/PlantCard";
import data from "../../../../data/data";
import { Container, Col, Row } from "react-bootstrap";

const PlantsList = ({ filters }) => {

  const [filteredData, setFilteredData] = useState([]);
  //const [filters, setFilters] = useState([]);

  const renderCards = filteredData.length && filteredData.map(
    (vegetable, index) =>
        <Col>
          <PlantCard
            key={index}
            src={vegetable.img.src}
            alt={vegetable.img.alt}
            name={vegetable.name}
            vegetable={vegetable}
          />
        </Col>
  );  

  const filterData = () => {
    data.forEach(vegetable => {
      vegetable.sowing.forEach(month => {
        if(filters.includes(month) && !filteredData.includes(vegetable)){  
        setFilteredData([...filteredData, vegetable])
        }
      })
    });
    console.log(filteredData.length)
    console.log(filters.map(filter => filter))
  }

  filterData();

  return (
    <Container className="plants-list-container justify-content-md-center ">
        <Row className="plants-list-content">{renderCards}</Row>
    </Container>
  );
};

export default PlantsList;
