import React from "react";
import { Modal } from "react-bootstrap";
import GenericButton from "../GenericButton/GenericButton";

const GenericModal = ({ content, setShow, show, actionLabel, action, }) => {
  let handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Body>{content}</Modal.Body>
      <Modal.Footer>
        <GenericButton label="Cancelar" handleClick={handleClose} />
        <GenericButton label={actionLabel} handleClick={action}/>
      </Modal.Footer> 
    </Modal>
  );
};

export default GenericModal;
