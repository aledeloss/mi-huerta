import "./PlantCard.css";
import { Card } from "react-bootstrap";
import CosechaData from "../CosechaData/CosechaData";
import { Link } from "react-router-dom";
import SaveRecordButton from '../../../../components/SaveRecordButton/SaveRecordButton';

const PlantCard = ({ vegetable}) => {

  return (    
      <Card className="card-container">
          <Card.Body className="plant-card-body">
            <img
              className="plantcard-img"
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
