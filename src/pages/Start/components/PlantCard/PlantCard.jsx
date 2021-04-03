/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */

import React, { useContext } from "react";
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
          <Card.Body>
            <img
              src={`vegetables-imgs/${vegetable.img.src}.svg`}
              alt={vegetable.img.alt}
            ></img>
            <Card.Title className="vegetable-name">{vegetable.name}</Card.Title>
            <CosechaData vegetable={vegetable} />
          </Card.Body>
        </Link>
        <SaveRecordButton vegetable={vegetable}/>
      </Card>
      
  );
}

export default PlantCard;
