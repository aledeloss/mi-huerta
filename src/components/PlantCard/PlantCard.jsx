import "./PlantCard.scss";
import { Card } from "react-bootstrap";
import CosechaData from "../CosechaData/CosechaData";
import { Link } from "react-router-dom";
import SaveRecordButton from '../SaveRecordButton/SaveRecordButton';

const PlantCard = ({ vegetable}) => {

  return (    
      <Card className="plant-card">
          <Card.Body className="plant-card__body">
            <div className="plant-card__img-container">
                <img
                loading="lazy"
                className="plantcard-card__img"
                src={`vegetables-imgs/${vegetable.img.src}.png`}
                alt={vegetable.img.alt}
                ></img>
              </div>
            <Card.Title className={`${vegetable.name.length > 13 ? 'plant-card__name--long' : 'plant-card__name'}`}>{vegetable.name}</Card.Title>
            <CosechaData className="plant-card__harvest" vegetable={vegetable} />
          </Card.Body>
        <Link to={`/detail/${vegetable.name}`} className="plant-card__see-more-btn">Ver más</Link>
        <SaveRecordButton className="plant-card__save-btn" vegetable={vegetable}/>
      </Card> 
  );
}

export default PlantCard;
