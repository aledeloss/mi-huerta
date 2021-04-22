import React from "react";
import "./App.css";
import Routes from "./Routes";
import { SowingsProvider } from "./contexts/SowingsContext";

function App() {
  return (
    <div className="App">
      <SowingsProvider>
          <Routes />
      </SowingsProvider>
    </div>
  );
}

export default App;
