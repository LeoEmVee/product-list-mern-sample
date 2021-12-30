import React, { useState, useEffect } from 'react'; // Importa framework React y hooks useState (un hook es una función especial de React para manejar estados del componente) y useEffect (para manejar el ciclo de vida del componente React, ejecutando efectos secundarios).
import Loading from './Loading';  // Importa Loading, componente hijo, para retornarlo en la función de este componente (lo que luego será renderizado).

const ListProducts = () => { // Función que retorna el componente que luego será renderizado.
  const [isLoading, setIsLoading] = useState(true); // useState retorna dos valores: una variable de estado (en este caso true o false, el argumento que recibe useState) y una función de actualización del estado.
  // Equivale a: const state = useState(true), state[0] = isLoading, state[1] = setIsLoading.
  useEffect(() => { // Función que se ejecuta después del renderizado. Equivale a componentDidMount(), componentDidUpdate() y componentWillMount() (que necesitan render() antes del return) en componentes tipo clase. Sirve para actualizar estados cuando hay algún cambio en backend, o para actualizaciones en una suscripción (en ese caso el efecto debe ser ejecutado con saneamiento para evitar saturar la memoria).
    const timeID = setInterval(() => { // Define un untervalo de tiempo para el el cambio de estado del componente.
      setIsLoading(!isLoading); // Cambia el estado de isLoading a false para mostrar el listado de productos una vez renderizado.
    }, 3000)
    
    return () => clearInterval(timeID); // Saneamiento. Retorna clearInterval con el timeID definido. Pide quitar el setInterval para evitar saturación en la memoria (por generar el intervalo cada vez).
  });

  useEffect(() => { // useEffect de ejemplo para evitar ejecuciones innecesarias. Sin saneamiento.
    console.log('Only one time');
  }, []); // El [] evita que el useEffect se ejecute a cada nuevo renderizado ocasionado por algún cambio. React lo toma como argumento cuyos cambios ha de vigilar, y como no cambia, evita que el console.log se ejecute de nuevo. Si en el [] estuviera, por ejemplo, isLoading, se ejecutaría cada vez, porque el parámetro cambia por efecto del useEffect anterior.
  
  return ( // Contenido del componente que se retorna.
    isLoading ? <Loading></Loading> : 'Mostrar listado de productos'
  );
}

export default ListProducts;// Exporta ListProducts, que será llamado en ProductLayout, componente padre de este.