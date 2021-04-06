/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */

import "./PlantCard.css";
import { Card } from "react-bootstrap";
import CosechaData from "../CosechaData/CosechaData";
import { Link } from "react-router-dom";
import SaveRecordButton from '../../../../components/SaveRecordButton/SaveRecordButton';
import GenericButton from '../../../../components/GenericButton/GenericButton';

//TODO: If vegetable.name.length < 13, achicar la letra. Y además hacer más espacio para que entre todo.

function PlantCard({ vegetable}) {

  const handleSeeMoreClick = () => {
    history.push(`/detail/${vegetable.name}`);
  }

  return (
    
      <Card className="card-container">
          <Card.Body className="plant-card-body">
            <img
              src={`vegetables-imgs/${vegetable.img.src}.svg`}
              alt={vegetable.img.alt}
            ></img>
            <Card.Title className={`vegetable-name ${vegetable.name.length > 13 ? 'long-veg-name' : ''}`}>{vegetable.name}</Card.Title>
            <CosechaData className="harvest-data-container" vegetable={vegetable} />
          </Card.Body>
        <Link to={`/detail/${vegetable.name}`} className="see-more-button">Ver más</Link>
        <SaveRecordButton className="save-button" vegetable={vegetable}/>
      </Card>
      
  );
}

export default PlantCard;
