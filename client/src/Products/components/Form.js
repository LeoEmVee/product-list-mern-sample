import React, { useState, useRef } from 'react'; // Importa framework React y hooks useState (función especial de React para manejar estados del componente) y useRef (para obtener el valor de archivos cuando sean subidos).
import { Form as BulmaForm, Button } from 'react-bulma-components'; // Importa Form de react-bulma-components. Un modelo de formulario. Ponemos alias para que no choque con el nombre del componente. Y también importamos un botón (como el del AddButton).

const { Field, Control, Label, Input } = BulmaForm;

const Form = ({ handleSubmit }) => { // Función que retorna el componente que luego será renderizado.
  const [formValues, setFormValues] = useState({
    name: '',
    size: '',
    unitaryPrice: '',
    description: ''
  }); // useState retorna dos valores: uno es la variable de estado de los valores del formulario (los valores iniciales, vacíos) y otra es la función de actualización del estado de los mismos (cuando se introduzcan datos en el form).

  const inputFileRef = useRef(); // Guarda la llamada a la función useRef, que se hará desde el input de subida de archivos, para obtener su referencia.

  const handleChange = (event) => { // Función que actualiza los valores del formulario cuando se da un evento (que se introduzcan datos).
    const { name, value } = event.target; // Target es el input, con sus atributos y valores al momento de escribir.
    setFormValues({ ...formValues, [name]: value }); // Actualiza el estado del formulario, de lo que esté en el estado actual a lo que resulte de la introducción de nuevos datos.
  }

  const _handleSubmit = (event) => { // Función para manejar la introducción de datos del formulario (submit); se ejecuta con el evento onSubmit del form que retorna este componente. Se le pone guión bajo al inicio para qeu no colisione con la handleSubmit que se le pasa a este hijo desde ProductLayout, componente padre, como parámetro de la función de este componente. Se diferencia así como método privado de este componente.
    event.preventDefault(); // Evita que cuando se haga el submit de los datos la página se reinicie.
    handleSubmit({ ...formValues, image: inputFileRef.current.files[0]}); // Llama a handleSubmit del componente padre (ProductLayout), para manejar los datos que se introduzcan en este componentes. Como parámetros, recibe formValues (los datos introducidos) y una imagen que es igual al primer índice (el archivo) de inputFileRef.current.files cuadno se haya subido una.
  }

  return ( // Contenido del componente que se retorna. Ver inputs, onChange(), etc. Uno por cada input del formulario (también el del archivo, que es un input normal y no de Bulma). Y un botón para guardar (igual al del AddButton).
    <form onSubmit={_handleSubmit}>
      <Field>
        <Label>Nombre</Label>
        <Control>
          <Input
            placeholder="Text input"
            name="name"
            value={formValues.name}
            onChange={handleChange}
          ></Input>
        </Control>
      </Field>
      <Field>
        <Label>Stock</Label>
        <Control>
          <Input
            placeholder="Text input"
            type="number"
            name="size"
            value={formValues.size}
            onChange={handleChange}
          ></Input>
        </Control>
      </Field>
      <Field>
        <Label>Precio unitario</Label>
        <Control>
          <Input
            placeholder="Text input"
            type="number"
            name="unitaryPrice"
            value={formValues.unitaryPrice}
            onChange={handleChange}
          ></Input>
        </Control>
      </Field>
      <Field>
        <Label>Descripción</Label>
        <Control>
          <Input
            placeholder="Text input"
            name="description"
            value={formValues.description}
            onChange={handleChange}
          ></Input>
        </Control>
      </Field>

      <Field>
        <Label>Imagen</Label>
        <Control>
          <input type="file" ref={inputFileRef}></input>
        </Control>
      </Field>
      <Button type="submit" color="primary">Guardar producto</Button>
    </form>
  )
}

export default Form; // Exporta la form, que será importada y llamada en ProductLayout, desde donde será renderizada.