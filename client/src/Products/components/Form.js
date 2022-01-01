import React, { useState } from 'react'; // Importa framework React y hook useState (función especial de React para manejar estados del componente).
import { Form as BulmaForm } from 'react-bulma-components'; // Importa Form de react-bulma-components. Un modelo de formulario. Ponemos alias para que no choque con el nombre del componente.

const { Field, Control, Label, Input } = BulmaForm;

const Form = () => { // Función que retorna el componente que luego será renderizado.
  const [formValues, setFormValues] = useState({
    name: '',
    size: '',
    unitaryPrice: '',
    description: ''
  }); // useState retorna dos valores: uno es la variable de estado de los valores del formulario (los valores iniciales, vacíos) y otra es la función de actualización del estado de los mismos (cuando se introduzcan datos en el form).

  const handleChange = (event) => { // Función que actualiza los valores del formulario cuando se da un evento (que se introduzcan datos).
    const { name, value } = event.target; // Target es el input, con sus atributos y valores al momento de escribir.
    setFormValues({ ...formValues, [name]: value }); // Actualiza el estado del formulario, de lo que esté en el estado actual a lo que resulte de la introducción de nuevos datos.
  }

  return ( // Contenido del componente que se retorna. Ver inputs, onChange(), etc. Uno por cada input del formulario (también el del archivo, que es un input normal y no de Bulma).
    <>
      <Field>
        <Label>Name</Label>
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
        <Label>Size</Label>
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
        <Label>Unitary price</Label>
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
        <Label>Description</Label>
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
        <Label>Image</Label>
        <Control>
          <Input type="file"></Input>
        </Control>
      </Field>
    </>
  )
}

export default Form;