import React from "react";
import ReactDOM from "react-dom";
import PrimeraApp from './PrimeraApp'
import './index.css';
// Comentario
const divRoot = document.querySelector("#root");

ReactDOM.render(<PrimeraApp saludo="123" />, divRoot);