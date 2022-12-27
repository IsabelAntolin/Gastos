import { useState } from 'react'
import Header from './components/Header'
import ModalGasto from './components/ModalGasto'
import IconoNuevoGasto from './img/nuevo-gasto.svg'



function App() {
  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  const [modal, setModal] = useState(false)
  const [mostrarFormulario, setMostrarFormulario] = useState(false)
  const [listaGastos, setListaGastos] = useState([])

  //cuando presiono nuevo gasto
  const handleNuevoGasto = () => {
    setModal(true)
    //se debe mostrar el formulario
    setTimeout(() => {
      setMostrarFormulario(true)
    }, 500);
  }

  const guardarGasto = gasto => {
      console.log(gasto);
  }

  return (
    <div className="App">
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />
      
      {isValidPresupuesto && (
        <div className='nuevo-gasto'>
          <img src={IconoNuevoGasto}
            alt="Icono nuevo gasto"
            onClick={handleNuevoGasto} />
        </div>
      )}

      {modal && <ModalGasto
        setModal={setModal}
        mostrarFormulario={mostrarFormulario}
        setMostrarFormulario={setMostrarFormulario}
        guardarGasto={guardarGasto}
      />}

    </div>
  )
}

export default App
