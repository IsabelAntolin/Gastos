import { useEffect, useState } from "react"
import { formatearCantidad } from '../helpers'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'




const ControlPresupuesto = ({ setListaGastos, listaGastos, presupuesto,setPresupuesto,setIsValidPresupuesto }) => {
  const [porcentaje, setPorcentaje] = useState(0)
  const [disponible, setDisponible] = useState(0)
  const [gastado, setGastado] = useState(0)

  useEffect(() => {
    const totalGastado = listaGastos.reduce((total, gasto) => gasto.cantidad + total, 0)
    const totalDisponible = presupuesto - totalGastado

    // Calcular el porcentaje gastado
    const nuevoPorcentaje = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(1);
    // ___________________________________________________

    setDisponible(totalDisponible)
    setGastado(totalGastado)

    setTimeout(() => {
      setPorcentaje(nuevoPorcentaje)
    }, 1000);

  }, [listaGastos])

  const handleResetApp=()=>{
    const resultado = confirm('Deseas reinicar presupuesto y gastos')
    resultado && (setListaGastos([]), setPresupuesto(0),setIsValidPresupuesto(false));
  
  }
  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
      <div>
        <CircularProgressbar
          styles={buildStyles({
            pathColor: porcentaje > 100 ? '#DC2626' : '#3B82F6',
            trailColor: '#D4E0E2',
            textColor: porcentaje > 100 ? '#DC2626' : '#3B82F6',
          })}

          value={porcentaje}
          text={`${porcentaje}% Gastado`}
        />


      </div>
      <div className="contenido-presupuesto">
        <button className="reset-app" type="button" onClick={handleResetApp}>Resetear App</button>
        <p>
          <span>Presupuesto: {formatearCantidad(presupuesto)} </span>
        </p>
        <p className={`${disponible < 0 ? 'negativo' : ''}`}>
          <span>Disponible: {formatearCantidad(disponible)} </span>
        </p>
        <p>
          <span>Gastado: {formatearCantidad(gastado)} </span>
        </p>
      </div>
    </div>
  )
}

export default ControlPresupuesto
