import React from 'react'



const ControlPresupuesto = ({ presupuesto }) => {
  const formatearCantidad = cantidad => {
    return cantidad.toLocaleString('es-CL', {
      style: 'currency',
      currency: 'CLP'
    })
  }
  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
      <div>
        <p>Grafica aqui</p>
      </div>
      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto: {formatearCantidad(presupuesto)} </span>
        </p>
        <p>
          <span>Disponible: {formatearCantidad(0)} </span>
        </p>
        <p>
          <span>Gastado: {formatearCantidad(0)} </span>
        </p>
      </div>
    </div>
  )
}

export default ControlPresupuesto
