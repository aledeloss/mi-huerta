import React from 'react';
import './App.css';
import Routes from './Routes';
import RecordsContext  from './contexts/RecordsContext';
import {RecordsProvider}  from './contexts/RecordsContext';

function App() {
  return (
    
    <div className="App">
      <RecordsProvider>
      <Routes/>        
      </RecordsProvider>
    </div>
  );
}

export default App;
