// import { useState, useContext } from 'react';
// import RecordsContext from '../contexts/RecordsContext';
// import LocalStorageModal from '../components/LocalStorageModal/LocalStorageModal';

// const useLocalStorage = () => {
//   let [records, setRecords] = useContext(RecordsContext);

//   // Onload check for storaged records if available
//   window.onload = () => {
//     if (localStorage.getItem('records')) {
//       setRecords(JSON.parse(localStorage.getItem('records')));
//     }
//   };

//   // Set records in localStorage
//   window.onunload = function () {
//     records.length > 0 &&
//       localStorage.setItem('records', JSON.stringify(records));
//   };
//   return [records, setRecords];
// };

// export default useLocalStorage;
