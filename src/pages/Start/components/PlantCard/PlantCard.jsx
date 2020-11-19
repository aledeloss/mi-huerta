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


const PlantCard = ({ src, alt, nombre, planta }) => {

        const [show, setShow] = useState(false);
        const [siembra, setSiembra] = useState({});
        const [record, setRecord] = useState([]);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        const saveRecord = () => {
            handleClose();
            console.log(planta.nombre);


            setSiembra({
                nombre: planta.nombre,
                fechaSiembra:  'hoy'
                // fechaSiembra: siembra,
                // fechaInicioCosecha: cosechaInicio,
                // fechaFinCosecha: cosechaFin
            })

            if(record){
                setRecord([...record, siembra])      
                }
                else{
                  setRecord([siembra])      
                }
            console.log(record);
            // setTimeout(()=>{
            //     setRecord([ ...record, siembra])
            //     console.log(record);
            // }, 2000);
            

            };


    return (
        <>
            <Card className="plant-container"
            // onClick={handleShow}
            >
                <Card.Body>
                    <img src={src} alt={alt}></img>
                    <Card.Title className="plant-name">{nombre}</Card.Title>
                    <Card.Text className="plant-text">
                        <CosechaData planta={planta} />
                    </Card.Text>
                    <Button className="btn-ver" onClick={handleShow}>Sembrar</Button>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>¡Bravo! </Modal.Title>
        </Modal.Header>
        <Modal.Body>Vas a registrar tu siembra de {planta.nombre.toLowerCase()} con fecha de hoy en tu calendario.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={saveRecord}>
            Guardar registro.
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
};

export default PlantCard;