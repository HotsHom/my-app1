import React from 'react';
import './App.css';
import { AuthView } from './Components/Auth/AuthView'

function App() {
  return (
    <>
      <AuthView class="App-header"/>
      <AuthView/>
      <AuthView/>
    </>
  );
}

export default App;
