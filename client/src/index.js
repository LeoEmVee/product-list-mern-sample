import React from 'react'; // Importa framework react.
import ReactDOM from 'react-dom'; // Importa ReactDOM para renderizar un elemento React al DOM en el contenedor que se indique.
import 'bulma/css/bulma.min.css';// Importa framework bulma.
import ProductLayout from './Products/components/ProductLayout'; // Importa ProductLayout de Products/components.
import reportWebVitals from './reportWebVitals'; // Importa reportWebVitals para analizar la performance de la aplicación.

ReactDOM.render(<ProductLayout></ProductLayout>, document.getElementById('root')); // Renderiza lo que está en ProductLayout.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); // Llama reportWebVitals para el análisis.