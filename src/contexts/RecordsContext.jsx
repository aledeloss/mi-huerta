import React, { createContext, useState } from "react";
// import { reducer, initialState } from '../reducers/reducer';

const RecordsContext = createContext();

export const RecordsProvider = ({children}) => {
  
  //const [state, dispatch] = useReducer(reducer, initialState, undefined);
  const [records, setRecords] = useState([]); 

  return (
      <RecordsContext.Provider value={[ records, setRecords ]}>
        {children}
      </RecordsContext.Provider>
  );
};

export default RecordsContext;
