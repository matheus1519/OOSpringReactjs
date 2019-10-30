import React from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import api from './services/api';
import Routes from './routes';

function App() {
  
  return (
    <>
      <Menu/>
      <Routes/>
    </>
  );
}

export default App;
