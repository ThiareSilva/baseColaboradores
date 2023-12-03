import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Alert from "./components/Alert";
import "./App.css";
import Listado from "./components/Listado";
import { BaseColaboradores } from "../BaseColaboradores";
import Formulario from "./components/Formulario";
import Buscador from "./components/Buscador";

function App() {
  const [dataFormulario, setDataFormulario] = useState({
    nombreColaborador: "",
    emailColaborador: "",
    edadColaborador: "",
    cargoColaborador: "",
    telefonoColaborador: "",
  });
  const [nuestraBaseColaboradores, setNuestraBaseColaboradores] =
    useState(BaseColaboradores);
  const [filterValue, setFilterValue] = useState("");
  const [mensajesValidacion, setMensajesValidacion] = useState([]);
  const [tipoErrorFormulario, setTipoErrorFormulario] = useState("danger");

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDataFormulario((prevData) => ({ ...prevData, [name]: value }));
  };
  const validarFormulario = () => {
    const mensajes = [];

    if (
      !dataFormulario.nombreColaborador ||
      !dataFormulario.emailColaborador ||
      !dataFormulario.edadColaborador ||
      !dataFormulario.cargoColaborador ||
      !dataFormulario.telefonoColaborador
    ) {
      mensajes.push("¡Completa todos los campos!");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(dataFormulario.emailColaborador)) {
      mensajes.push("Email no tiene el formato correcto.");
    }

    setTipoErrorFormulario("danger");
    setMensajesValidacion(mensajes);
    return mensajes.length;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validarFormulario() === 0) {
      setTipoErrorFormulario("success");
      setMensajesValidacion(["Formulario Correcto"]);

      const nuevoColaborador = {
        id: nuestraBaseColaboradores.length + 1,
        nombre: dataFormulario.nombreColaborador,
        correo: dataFormulario.emailColaborador,
        edad: dataFormulario.edadColaborador,
        cargo: dataFormulario.cargoColaborador,
        telefono: dataFormulario.telefonoColaborador,
      };
      setNuestraBaseColaboradores([
        ...nuestraBaseColaboradores,
        nuevoColaborador,
      ]);

      setDataFormulario({
        nombreColaborador: "",
        emailColaborador: "",
        edadColaborador: "",
        cargoColaborador: "",
        telefonoColaborador: "",
      })
    }
  };

  const handleDelete = (id) => {
    
  setNuestraBaseColaboradores(nuestraBaseColaboradores.filter((colaborador) => colaborador.id !== id));
  }

  const handleFilterData = (e) => {
    setFilterValue(e.target.value);
  };

  return (
    <>
      <div className="todo">
        <div className="izquierda">
          <h1>Lista de Colaboradores</h1>
          <Buscador
            filterValue={filterValue}
            handleFilterData={handleFilterData}
          />

          <Listado
            baseColaboradores={nuestraBaseColaboradores.filter((colaborador) =>
              colaborador.nombre
                .toLowerCase()
                .includes(filterValue.toLowerCase())
            )}
            handleDelete={handleDelete}
          />
        </div>
        <div className="derecha">
          <Formulario
            dataFormulario={dataFormulario}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
          {mensajesValidacion.length > 0 && (
            <Alert
              mensajesValidacion={mensajesValidacion}
              tipoErrorFormulario={tipoErrorFormulario}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
