import { useContext, useState } from 'react';
import RecordsContext from '../../contexts/RecordsContext';
import GenericModal from '../GenericModal/GenericModal';

const LocalStorageModal = () => {


    let [show, setShow] = useState(false);
    // let handleShow = () => setShow(true);
  
    let [records, setRecords] = useContext(RecordsContext);

    let handleRecoverClick = () => {
        setRecords(JSON.parse(localStorage.getItem('records')));
        setShow(false);
    }

    window.onload = () => {
        if (localStorage.getItem('records')) {
        //   setRecords(JSON.parse(localStorage.getItem('records')));
        setShow(true)

        }
      };
    
      // Set records in localStorage
      window.onunload = function () {
        records.length > 0 &&
        localStorage.setItem('records', JSON.stringify(records));
              };
    //   return [records, setRecords];
    //};

    return (
        <GenericModal
        show={show}
        setShow={setShow}
        content='Tenés registros de siembra anteriores ¿querés recuperarlos?'
        actionLabel='Sí, recuperar'
        action={handleRecoverClick}
        />
    )
}

export default LocalStorageModal;