import { useState } from "react"
import Mensaje from "./Mensaje"


const NuevoPresupuesto = ({ presupuesto, setPresupuesto,setIsValidPresupuesto }) => {
  const [mensaje, setMensaje] = useState('')

  const handlePresupuesto = (e) => {
    //evitar que recarge la pagina cuando envie el formulario
    e.preventDefault()

    //validar que el ingreso solo sea numero
    if (!presupuesto || presupuesto < 0 || !Number.isInteger(presupuesto)) {
      setMensaje('No es un presupuesto valido')
      return
    } 
    setMensaje('')
    setIsValidPresupuesto(true)
    


  }
  return (
    <div className="contenedor-presupuesto  contenedor sombra">
      <form className="formulario"
        onSubmit={handlePresupuesto}>
        <div className="campo">
          <label>Definir Presupuesto</label>
          <input type="number"
            name=""
            id=""
            value={presupuesto}
            placeholder="Añade Tu Presupuesto"
            onChange={(e) => setPresupuesto(Number(e.target.value))}
            className="nuevo-presupuesto" />
          <input type="submit"
            value="Añadir" />
        </div>
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
      </form>
    </div>
  )
}

export default NuevoPresupuesto
