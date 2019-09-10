import React from 'react';
import './App.css';
import Header from './Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes'


function App() {
  return (
    <div>
      <Header />
      <Routes />
    </div>
  );
}

export default App;
