import { useContext, useState } from "react";
import RecordsContext from "../../contexts/RecordsContext";
import GenericModal from "../GenericModal/GenericModal";

const LocalStorageModal = () => {
  let [show, setShow] = useState(false);
  let [records, setRecords] = useContext(RecordsContext);

  let handleRecoverClick = () => {
    setRecords(JSON.parse(localStorage.getItem("records")));
    setShow(false);
  };

  let handleEraseRecords = () => {
    localStorage.removeItem("records");
    setShow(false);
  };

  window.onload = () => {
    if (localStorage.getItem("records")) {
      setShow(true);
    }
  };

  window.onunload = function () {
    records.length > 0 &&
      localStorage.setItem("records", JSON.stringify(records));
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
