import { useState, useContext } from "react";
import GenericButton from "../GenericButton/GenericButton";
import GenericModal from "../GenericModal/GenericModal";
import SowingsContext from "../../contexts/SowingsContext";

const SaveRecordButton = ({ vegetable }) => {
  let [show, setShow] = useState(false);
  let handleShow = () => setShow(true);

  const { state, dispatch } = useContext(SowingsContext);

    let newSowing = {
      id: state.records.length ? state.records[state.records.length - 1].id + 1 : 1,
      name: vegetable.name,
      sowDate: new Date(),
      harvestBegin: vegetable.harvest.from,
      harvestEnd: vegetable.harvest.to,
    };

  // TODO: Make sow a class.

  let sowingModalContent = `Vas a registrar tu siembra de ${vegetable.name.toLowerCase()} con fecha de hoy en tu calendario.`;
  let sowingModalActionLabel = "Sí, sembrar";

  return (
    <>
      <GenericButton
        label="Sembrar"
        handleClick={handleShow}
        vegetable={vegetable}
      />
        <GenericModal
          show={show}
          content={sowingModalContent}
          setShow={setShow}
          actionLabel={sowingModalActionLabel}
          action={() => {
            dispatch({ type: "ADD", payload: newSowing })
            setShow(false);
          }}
        />
    </>
  );
};
export default SaveRecordButton;
