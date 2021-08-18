import React, { createContext, useState } from "react";

const FiltersContext = createContext();

export const FiltersProvider = ({ children }) => {
  const date = new Date();
  const [filters, setFilters] = useState([
    date.toLocaleString("es", { month: "long" }),
  ]);

  return (
    <FiltersContext.Provider value={[filters, setFilters]}>
      {children}
    </FiltersContext.Provider>
  );
};

export default FiltersContext;
