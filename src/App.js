import React from "react";
import "./App.css";
import Routes from "./Routes";
import SearchContext from "./contexts/SearchContext";
import { RecordsProvider } from "./contexts/RecordsContext";

function App() {
  return (
    <div className="App">
      {/* <SearchContext> */}
      <RecordsProvider>
        <Routes />
      </RecordsProvider>        
      {/* </SearchContext> */}

    </div>
  );
}

export default App;
