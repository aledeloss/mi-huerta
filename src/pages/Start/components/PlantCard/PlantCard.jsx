/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */

import React, { useState, useContext } from "react";
import "./PlantCard.css";
import { Card } from "react-bootstrap";
import CosechaData from "../CosechaData/CosechaData";
import { Link } from "react-router-dom";
import GenericButton from "../../../../components/GenericButton/GenericButton";
import GenericModal from "../../../../components/GenericModal/GenericModal";
import RecordsContext from "../../../../contexts/RecordsContext";

//TODO: If vegetable.name.length < 13, achicar la letra. Y además hacer más espacio para que entre todo.

function PlantCard({ src, alt, name, vegetable }) {

  let [show, setShow] = useState(false);
  let handleShow = () => setShow(true);

  let [records, setRecord] = useContext(RecordsContext);

  function saveRecord(vegetable) {
    let newSow = {
      name: vegetable.name,
      sowDate: new Date(),
      harvestBegin: vegetable.cosecha[0],
      harvestEnd: vegetable.cosecha[1],
    };
    if (records.length === 0) {
      setRecord([newSow]);
    } else {
      setRecord([...records, newSow]);
    }
  }

  let sowModalContent = `Vas a registrar tu siembra de ${vegetable.name.toLowerCase()} con fecha de hoy en tu calendario.`;
  let sowModalActionLabel = "Sí, sembrar";

  return (
    <>
      <Card className="card-container">
        <Link to={`/detail/${vegetable.name}`}>
          <Card.Body>
            <img
            // TODO ver imports de images.
              src={src}
              alt={alt}
            ></img>
            <Card.Title className="vegetable-name">{name}</Card.Title>
            <CosechaData vegetable={vegetable} />
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
          saveRecord(vegetable);
          setShow(false);
        }}
      />
    </>
  );
}

export default PlantCard;
