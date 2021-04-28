import React from "react";
import "./App.css";
import Routes from "./Routes";
import { SowingsProvider } from "./contexts/SowingsContext";
import { FiltersProvider } from "./contexts/FiltersContext";

function App() {
  return (
    <div className="App">
      <SowingsProvider>
        <FiltersProvider>
          <Routes />
        </FiltersProvider>
      </SowingsProvider>
    </div>
  );
}

export default App;
