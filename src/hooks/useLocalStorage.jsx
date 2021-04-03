import { useState, useContext } from 'react';
import RecordsContext from '../contexts/RecordsContext';
// import GenericModal from '../components/GenericModal';

const useLocalStorage = () => {
  let [records, setRecords] = useContext(RecordsContext);

  //Modal
  // let [show, setShow] = useState(false);
  // let handleShow = () => setShow(true);

  // Onload check for storaged records if available
  window.onload = () => {
    if (localStorage.getItem('records')) {
      setRecords(JSON.parse(localStorage.getItem('records')));
    }
  };

  // Set records in localStorage
  window.onunload = function () {
    records.length > 0 &&
      localStorage.setItem('records', JSON.stringify(records));
    records.length > 1 && localStorage.removeItem('records');
  };
  return [records, setRecords];
};

export default useLocalStorage;
