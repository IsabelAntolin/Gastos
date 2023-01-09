import { useState, useEffect } from 'react'
import Mensaje from './Mensaje'
import CerrarModal from '../img/cerrar.svg'

const ModalGasto = ({ setGastoEditado,gastoEditado, setModal, mostrarFormulario, setMostrarFormulario, guardarGasto }) => {
  const [gasto, setGasto] = useState('')
  const [cantidad, setCantidad] = useState('')
  const [categoria, setCategoria] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [id, setId] = useState('')
  const [fecha, setFecha] = useState('')

  useEffect(() => {
    if( Object.keys(gastoEditado).length > 0 ) {
        setGasto(gastoEditado.gasto)
        setCantidad(gastoEditado.cantidad)
        setCategoria(gastoEditado.categoria)
        setId(gastoEditado.id)
        setFecha(gastoEditado.fecha)
    }
}, []);

  const ocultarModal = () => {
    setGastoEditado({})
    setMostrarFormulario(false)
    setTimeout(() => {
      setModal(false)
    }, 500);
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    //validando campos
    if ([gasto, cantidad, categoria].includes('')) {
      setMensaje('Todos los campos son obligatorios')
      setTimeout(() => {
        setMensaje('')
      }, 3000);
      return
    }

    guardarGasto({ gasto, cantidad, categoria,id,fecha })
 

    console.log('agregando gasto');
  }

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CerrarModal} alt="cerrar modal" onClick={ocultarModal} />
      </div>


      <form onSubmit={handleSubmit}
        className={`formulario ${mostrarFormulario ? "animar" : "cerrar"}`}>
        <legend>{gastoEditado.gasto ? 'Editar Gasto' : 'Nuevo Gasto'}</legend>

        {mensaje && (<Mensaje
          tipo='error'>{mensaje}</Mensaje>)}

        <div className='campo'>
          <label htmlFor="gasto">Nuevo Gasto</label>
          <input type="text"
            placeholder='Añade un Nombre de Gasto'
            id='gasto'
            value={gasto}
            onChange={e => setGasto(e.target.value)} />
        </div>
        <div className='campo'>
          <label htmlFor="cantidad">Cantidad</label>
          <input type="text"
            placeholder='Añade la Cantidad del Gasto: ej. 300'
            id='cantidad'
            value={cantidad}
            onChange={e => setCantidad(Number(e.target.value))} />
        </div>
        <div className='campo'>
          <label htmlFor="categoria">Filtrar Gastos</label>

          <select id="categoria"
            value={categoria}
            onChange={e => setCategoria(e.target.value)}>
            <option value="">-- Seleccionar --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="hogar">Hogar</option>
            <option value="gastos">Gastos Varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
        </div>

        <input type="submit" value={ gastoEditado.gasto ? "Guardar Cambios " : "Añadir Gastos"} />


      </form>
    </div>

  )
}

export default ModalGasto
