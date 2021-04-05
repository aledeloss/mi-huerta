/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */

import "./PlantCard.css";
import { Card } from "react-bootstrap";
import CosechaData from "../CosechaData/CosechaData";
import { Link } from "react-router-dom";
import SaveRecordButton from '../../../../components/SaveRecordButton/SaveRecordButton';

//TODO: If vegetable.name.length < 13, achicar la letra. Y además hacer más espacio para que entre todo.

function PlantCard({ vegetable }) {

  return (
    
      <Card className="card-container">
        <Link to={`/detail/${vegetable.name}`}>
          <Card.Body className="plant-card-body">
            <img
              src={`vegetables-imgs/${vegetable.img.src}.svg`}
              alt={vegetable.img.alt}
            ></img>
            <Card.Title className={`vegetable-name ${vegetable.name.length > 13 ? 'long-veg-name' : ''}`}>{vegetable.name}</Card.Title>
            <CosechaData className="harvest-data-container" vegetable={vegetable} />
          </Card.Body>
        </Link>
        <SaveRecordButton className="save-button" vegetable={vegetable}/>
      </Card>
      
  );
}

export default PlantCard;
