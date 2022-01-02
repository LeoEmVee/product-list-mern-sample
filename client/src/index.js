import React from 'react'; // Importa framework React.
import ReactDOM from 'react-dom'; // Importa ReactDOM para renderizar un elemento React al DOM en el contenedor que se indique.
import 'bulma/css/bulma.min.css';// Importa framework bulma.
import ProductLayout from './Products/components/ProductLayout'; // Importa ProductLayout de Products/components.

ReactDOM.render(<ProductLayout></ProductLayout>, document.getElementById('root')); // Renderiza lo que está en ProductLayout.