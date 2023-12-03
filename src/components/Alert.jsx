import React from 'react'
import { Alert as BootstrapAlert } from "react-bootstrap";

const Alert = ({mensajesValidacion, tipoErrorFormulario}) => {
  return (
    <BootstrapAlert variant={tipoErrorFormulario} className="mt-3">
          <ul>
            {mensajesValidacion.map((message, index) => (
              <li key={index}>{message}</li>
            ))}
          </ul>
        </BootstrapAlert>
  )
}

export default Alert