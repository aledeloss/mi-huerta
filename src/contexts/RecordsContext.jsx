import React, { useState, createContext } from "react";

const RecordsContext = createContext();

export const RecordsProvider = (props) => {
  let [records, setRecord] = useState([
    {
      nombre: "acelga",
      siembra: "hoy",
    },
    {
      nombre: "lechuga",
      siembra: "ayer",
    },
  ]);

  return (
    <div>
      <RecordsContext.Provider value={[records, setRecord]}>
        {props.children}
      </RecordsContext.Provider>
    </div>
  );
};

export default RecordsContext;