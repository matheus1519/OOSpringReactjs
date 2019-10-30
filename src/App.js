import React from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import api from './services/api';
import Routes from './routes';

function App() {
  async function handleApi() {
    const response = await api.get('/api/convidados');
    console.log(response);
  }
  return (
    <>
      <Menu/>
      <Routes/>
      <div className="App">
        <button className="btn btn-primary" onClick={handleApi}>Chamar API</button>
      </div>
    </>
  );
}

export default App;
