/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PlantCard.css';
// import CosechaData from '../CosechaData/CosechaData';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CosechaData from '../CosechaData/CosechaData';
import Modal from 'react-bootstrap/Modal';


const PlantCard = ({ src, alt, nombre, planta, saveRecord }) => {

    
    let [show, setShow] = useState(false);    

        let handleClose = () => setShow(false);
        let handleShow = () => setShow(true);


            

    return (
        <>
            <Card className="plant-container"
            // onClick={handleShow}
            >
                <Card.Body>
                    <img src={src} alt={alt}></img>
                    <Card.Title className="plant-name">{nombre}</Card.Title>
                    <div className="plant-text">
                        <CosechaData planta={planta} />
                    </div>
                    <Button className="btn-ver" onClick={handleShow} >Sembrar</Button>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>¡Bravo! </Modal.Title>
        </Modal.Header>
        <Modal.Body>Vas a registrar tu siembra de {planta.nombre.toLowerCase()} con fecha de hoy en tu calendario.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick= { (e) => saveRecord(planta) }>
            Guardar registro.
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
};

export default PlantCard;