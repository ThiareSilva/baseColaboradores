import React from "react";

const Listado = ({ baseColaboradores, handleDelete }) => {
  console.log(baseColaboradores);
  return (
    <>
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Correo</th>
            <th scope="col">Edad</th>
            <th scope="col">Cargo</th>
            <th scope="col">Teléfono</th>
            <th>Elim.</th>
          </tr>
        </thead>
        <tbody>
          {baseColaboradores.map((colaborador) => {
            return (
              <tr key={"col" + colaborador.id}>
                <td>{colaborador.nombre}</td>
                <td>{colaborador.correo}</td>
                <td>{colaborador.edad}</td>
                <td>{colaborador.cargo}</td>
                <td>{colaborador.telefono}</td>
                <td><span className="btn-borrar" onClick={() => handleDelete(colaborador.id)}>X</span></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Listado;
