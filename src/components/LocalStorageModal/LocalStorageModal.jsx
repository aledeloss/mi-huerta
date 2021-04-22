import { useContext, useState } from "react";
import SowingsContext from "../../contexts/SowingsContext";
import GenericModal from "../GenericModal/GenericModal";

const LocalStorageModal = () => {
  let [show, setShow] = useState(false);
  let { state, dispatch} = useContext(SowingsContext);

  let handleRecoverClick = () => {
    dispatch({ type: "RECOVER_ALL" })
    setShow(false);
  };

  let handleEraseRecords = () => {
    dispatch({ type: "DELETE_ALL" })
    localStorage.removeItem("records");
    setShow(false);
  };

  window.onload = () => {
    if (localStorage.getItem("records")) {
      setShow(true);
    }
  };

  window.onunload = function () {
    state.records.length > 0 &&
      localStorage.setItem("records", JSON.stringify(state.records));
  };

  return (
    <GenericModal
      show={show}
      setShow={setShow}
      content="Tenés registros de siembra anteriores ¿querés recuperarlos?"
      actionLabel="Sí, recuperar"
      action={handleRecoverClick}
      secondaryLabel="No, descartar"
      secondaryHandleAction={handleEraseRecords}
    />
  );
};

export default LocalStorageModal;
