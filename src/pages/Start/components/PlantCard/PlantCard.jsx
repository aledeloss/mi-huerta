/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */

import React, { useState, useEffect } from "react";
import "./PlantCard.css";
import {Card, Button, Modal } from "react-bootstrap";
import CosechaData from "../CosechaData/CosechaData";


//TODO: If plant.name.length < 13, achicar la letra. Y además hacer más espacio para que entre todo.

const PlantCard = ({ src, alt, nombre, planta, saveRecord }) => {
  
  let [show, setShow] = useState(false);
  let handleClose = () => setShow(false);
  let handleShow = () => setShow(true);

  return (
    <>
      <Card className="plant-container">
        <Card.Body>
          <img src={src} alt={alt}></img>
          <Card.Title className="plant-name">{nombre}</Card.Title>
          <div className="plant-text">
            <CosechaData planta={planta} />
          </div>
          <Button className="btn-ver" onClick={handleShow}>
            Sembrar
          </Button>
        </Card.Body>
      </Card>
      {/* Fin card */}

      {/* Inicio modal de siembra */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>¡Bravo! </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Vas a registrar tu siembra de {planta.nombre.toLowerCase()} con fecha
          de hoy en tu calendario.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              saveRecord(planta);
              setShow(false);
            }}
          >
            Guardar registro.
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Fin modal de siembra */}
    </>
  );
};

export default PlantCard;
