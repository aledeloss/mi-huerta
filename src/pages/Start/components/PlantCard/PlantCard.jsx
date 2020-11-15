/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
import React from 'react';
import './PlantCard.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const PlantCard = ({ src, alt, nombre, cosechaInicio, cosechaFin }) => {

    return (

                <Card className="plant-container">
                    <Card.Body>
                        <img src={src} alt={alt}></img>
                        <Card.Title className="plant-name">{nombre}</Card.Title>
                        <Card.Text className="plant-text">
                            Días a cosecha: Entre {cosechaInicio} y {cosechaFin} días.
                        </Card.Text>
                        <Button className="btn-ver">Sembrar</Button>
                    </Card.Body>
                </Card>            
    )
};

export default PlantCard;