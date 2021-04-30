import { useContext, useState } from "react";
import GenericButton from "../GenericButton/GenericButton";
import SowingsContext from "../../contexts/SowingsContext";
import GenericModal from "../GenericModal/GenericModal";

const DeleteAllButton = () => {

  let [show, setShow] = useState(false);
  let handleShow = () => setShow(true);

  let { dispatch } = useContext(SowingsContext);

  const handleDeleteAllClick = () => {
    dispatch({ type: "DELETE_ALL" });
    setShow(false);
  };

  const modalContent =
    "Estás por borrar todos tus registros de siembra ¿deseas confirmar esta acción?";
    
  return (
    <div>
      <GenericButton label={"Borrar todos"} handleClick={handleShow} />
      <GenericModal
          show={show}
          content={modalContent}
          setShow={setShow}
          actionLabel='Sí, borrar'
          action={handleDeleteAllClick}
        />
      {/* <GenericModal
        content={modalContent}
        setShow={setShow}
        show={show}
        actionLabel="Sí, borrar"
        action={() => {alert('hi')
        }}
      /> */}
    </div>
  );
};

export default DeleteAllButton;
