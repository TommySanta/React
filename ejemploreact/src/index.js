import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './components/App';
import SaludoPadre from './components/Saludopadre';
import Saludohijo from './components/Saludohijo';
import PadreMatematicas from './components/Padrematematicas';
import Contador from './components/contador';
import Car from './components/Car';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Car marca="Audi" modelo="Q3" aceleracion="25" velocidadmaxima="240"/>
    <Car marca="Pontic" modelo="Firebird" aceleracion="45" velocidadmaxima="340"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
