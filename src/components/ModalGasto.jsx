import { useState } from 'react'
import Mensaje from './Mensaje'
import CerrarModal from '../img/cerrar.svg'
const ModalGasto = ({ setModal, mostrarFormulario, setMostrarFormulario,guardarGasto }) => {
  const[gasto,setGasto]=useState('')
  const[cantidad,setCantidad]=useState('')
  const[categoria,setCategoria]=useState('')
  const [mensaje,setMensaje] = useState('')


  const ocultarModal = () => {
    setMostrarFormulario(false)
    setTimeout(() => {
      setModal(false)
    }, 500);
  }

  const handleSubmit = (e)=>{
    e.preventDefault()

    //validando campos
    if([gasto,cantidad,categoria].includes('')){
      setMensaje('Todos los campos son obligatorios')
      setTimeout(() => {
        setMensaje('')        
      }, 3000);
      return
    }

    guardarGasto({gasto,cantidad,categoria})
    setGasto('')
    setCantidad('')
    setCategoria('')
   
    console.log('agregando gasto');
  }

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CerrarModal} alt="cerrar modal" onClick={ocultarModal} />
      </div>


      <form onSubmit={handleSubmit}
            className={`formulario ${mostrarFormulario ? "animar" : "cerrar"}`}>
        <legend>Nuevo Gasto</legend>

        {mensaje && (<Mensaje 
                        tipo='error'>{mensaje}</Mensaje>)}

        <div className='campo'>
          <label htmlFor="gasto">Nuevo Gasto</label>
          <input type="text"
                 placeholder='Añade un Nombre de Gasto'
                 id='gasto' 
                 value={gasto}
                 onChange={e=> setGasto(e.target.value)}/>
        </div>
        <div className='campo'>
          <label htmlFor="cantidad">Cantidad</label>
          <input type="text"
                 placeholder='Añade la Cantidad del Gasto: ej. 300' 
                 id='cantidad'
                 value={cantidad}
                 onChange={e=> setCantidad(Number(e.target.value))}/>
        </div>
        <div className='campo'>
          <label htmlFor="categoria">Filtrar Gastos</label>

          <select   id="categoria"
                    value={categoria}
                    onChange={e=> setCategoria(e.target.value)}>
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

        <input type="submit" value="Añadir Gastos" />


      </form>
    </div>

  )
}

export default ModalGasto
