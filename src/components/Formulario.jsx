import React from "react";
import { Form, Button, Alert } from "react-bootstrap";
const Formulario = ({ dataFormulario, handleInputChange, handleSubmit}) => {
  return (
    <>
    <h3>Agregar Colaborador</h3>
      <Form onSubmit={handleSubmit} className="grupo-campos">
        <input
          type="text"
          className="form-control"
          name="nombreColaborador"
          placeholder="Nombre del colaborador"
          value={dataFormulario.nombreColaborador}
          onChange={handleInputChange}
        />

        <input
          type="text"
          className="form-control"
          name="emailColaborador"
          placeholder="Email del colaborador"
          value={dataFormulario.emailColaborador}
          onChange={handleInputChange}
        />

        <input
          type="text"
          className="form-control"
          name="edadColaborador"
          placeholder="Edad del colaborador"
          value={dataFormulario.edadColaborador}
          onChange={handleInputChange}
        />

        <input
          type="text"
          className="form-control"
          name="cargoColaborador"
          placeholder="Cargo del colaborador"
          value={dataFormulario.cargoColaborador}
          onChange={handleInputChange}
        />
        <input
          type="text"
          className="form-control"
          name="telefonoColaborador"
          placeholder="Teléfono del colaborador"
          value={dataFormulario.telefonoColaborador}
          onChange={handleInputChange}
        />
        <Button className="purple-btn" type="submit">
       
          Agregar colaborador
        </Button>
      </Form>
    </>
  );
};

export default Formulario;
