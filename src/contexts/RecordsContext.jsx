import React, { useState, createContext } from "react";

const RecordsContext = createContext();

export const RecordsProvider = ({children}) => {
  const [records, setRecord] = useState([]); 

  return (
      <RecordsContext.Provider value={[records, setRecord]}>
        {children}
      </RecordsContext.Provider>
  );
};

export default RecordsContext;
