import React from "react";
import "./App.css";
import Routes from "./Routes";
import { RecordsProvider } from "./contexts/RecordsContext";
import { SowingsProvider } from "./contexts/SowingsContext";

function App() {
  return (
    <div className="App">
      <SowingsProvider>
        <RecordsProvider>
          <Routes />
        </RecordsProvider>
      </SowingsProvider>
    </div>
  );
}

export default App;
