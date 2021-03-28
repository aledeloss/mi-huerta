/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */

import React, { useState, useContext } from "react";
import "./PlantCard.css";
import { Card } from "react-bootstrap";
import CosechaData from "../CosechaData/CosechaData";
import { Link } from "react-router-dom";
import GenericButton from "components/GenericButton/GenericButton";
import GenericModal from "components/GenericModal/GenericModal";
import RecordsContext, { RecordsProvider } from "contexts/RecordsContext";

//TODO: If plant.name.length < 13, achicar la letra. Y además hacer más espacio para que entre todo.

function PlantCard({ src, alt, nombre, planta }) {
  let [show, setShow] = useState(false);
  let handleShow = () => setShow(true);

  let [records, setRecord] = useContext(RecordsContext);

  function saveRecord(planta) {
    let newSow = {
      name: planta.nombre,
      sowDate: new Date(),
      harvestBegin: planta.cosecha[0],
      harvestEnd: planta.cosecha[1],
    };
    if (records.length === 0) {
      setRecord([newSow]);
    } else {
      setRecord([...records, newSow]);
    }
  }

  let sowModalContent = `Vas a registrar tu siembra de ${planta.nombre.toLowerCase()} con fecha de hoy en tu calendario.`;
  let sowModalActionLabel = "Sí, sembrar";

  return (
    <>
      <RecordsProvider>
        <Card className="card-container">
          <Link to={`/detail/${planta.nombre}`}>
            <Card.Body>
              <img src={src} alt={alt}></img>
              <Card.Title className="plant-name">{nombre}</Card.Title>
              <div className="plant-text">
                <CosechaData planta={planta} />

                {records.length}
              </div>
            </Card.Body>
          </Link>
          <GenericButton label="SEMBRAR" handleClick={handleShow} />
        </Card>

        <GenericModal
          show={show}
          content={sowModalContent}
          setShow={setShow}
          actionLabel={sowModalActionLabel}
          action={() => {
            saveRecord(planta);
            setShow(false);
          }}
        />
      </RecordsProvider>
      {/*
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>¡Bravo! </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Vas a registrar tu siembra de {planta.nombre.toLowerCase()} con fecha
                de hoy en tu calendario.
              </Modal.Body>
              <Modal.Footer>
                <GenericButton label="Cancelar" handleClick={handleClose}/>
                <GenericButton label="Guardar registro" handleClick={() => {
                          saveRecord(planta);
                          setShow(false)}}/>
              </Modal.Footer>
            </Modal> */}
    </>
  );
}

export default PlantCard;
