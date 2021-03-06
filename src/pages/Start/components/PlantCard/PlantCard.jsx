/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PlantCard.css';
// import CosechaData from '../CosechaData/CosechaData';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CosechaData from '../CosechaData/CosechaData';
import Modal from 'react-bootstrap/Modal';
import DayJS from 'react-dayjs';


const PlantCard = ({ src, alt, nombre, planta, saveRecord }) => {

  let [show, setShow] = useState(false);
  let handleClose = () => setShow(false);
  let handleShow = () => setShow(true);

    
  const fechaSiembra = new Date();
  const cosechaInicio = <DayJS format="DD/MM/YYYY"add={ { days: planta.cosecha[0] } }>{fechaSiembra}</DayJS>
  const cosechaFin = <DayJS format="DD/MM/YYYY"add={ { days: planta.cosecha[1] } }>{fechaSiembra}</DayJS>





  return (
    <>
      <Card className="plant-container">
        <Card.Body>
          <img src={src} alt={alt}></img>
          <Card.Title className="plant-name">{nombre}</Card.Title>
          <div className="plant-text">
            <CosechaData planta={planta} />
          </div>
          <Button className="btn-ver" onClick={handleShow} >Sembrar</Button>
        </Card.Body>
      </Card>
      {/* Fin card */}


      {/* Inicio modal de siembra */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>¡Bravo! </Modal.Title>
        </Modal.Header>
        <Modal.Body>Vas a registrar tu siembra de {planta.nombre.toLowerCase()} con fecha de hoy en tu calendario.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={(e) => saveRecord(planta)}>
            Guardar registro.
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Fin modal de siembra */}
    </>
  )
};

export default PlantCard;