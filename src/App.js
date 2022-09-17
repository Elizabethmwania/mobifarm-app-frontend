import React from 'react';
import { ReactDOM } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//pages
import LandingIndex from './components/LandingPage/LandingIndex';

function App() {
  return (
    <div className="App">
      <LandingIndex />
    </div>
  );
}

export default App;
