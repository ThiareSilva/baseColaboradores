import React from "react";

const Buscador = ({ filterValue, handleFilterData }) => {
  return (
    <>
      <input
        value={filterValue}
        placeholder="Busca un colaborador"
        className="form-control"
        type="text"
        onChange={handleFilterData}
      ></input>
    </>
  );
};

export default Buscador;
