import React, { useState } from "react";
import "./AddButton.css";
import { Button, Modal } from "react-bootstrap";

const AddButton = (planta, saveRecord) => {
  let [show, setShow] = useState(false);
  let handleClose = () => setShow(false);
  let handleShow = () => setShow(true);

  return (
    <>
      <Button className="btn-sembrar" onClick={handleShow}>
        Sembrar
      </Button>

      {/* Inicio modal de siembra */}
      <Modal
        className="modal-guardar"
        show={show}
        onHide={handleClose}
      >
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
            className="btn-guardar"
            variant="primary"
            onClick={() => {
              saveRecord(planta);
              setShow(false);
            }}
          >
            Guardar registro
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Fin modal de siembra */}
    </>
  );
};

export default AddButton;
