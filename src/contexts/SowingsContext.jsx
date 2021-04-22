import React, { createContext, useReducer } from "react";
import { reducer, initialState } from '../reducers/sowingsReducer';

const SowingsContext = createContext();

export const SowingsProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
      <SowingsContext.Provider value={{ state, dispatch }}>
        {children}
      </SowingsContext.Provider>
  );
};

export default SowingsContext;
