import { useState, useEffect } from 'react'
import Header from './components/Header'
import ModalGasto from './components/ModalGasto'
import Filtros from './components/Filtros'
import ListadoGastos from './components/ListadoGastos'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import { generarId } from './helpers'



function App() {
  const [presupuesto, setPresupuesto] = useState(Number(localStorage.getItem('presupuesto')) ?? 0)
  const [listaGastos, setListaGastos] = useState(JSON.parse(localStorage.getItem('listaGastos')) ?? [])

  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  const [modal, setModal] = useState(false)
  const [mostrarFormulario, setMostrarFormulario] = useState(false)
  const [gastoEditado, setGastoEditado] = useState({})
  const [filtro, setFiltro] = useState('')
  const [gastosFiltrados, setGastosFiltrados] = useState([])

  useEffect(() => {
    if (Object.keys(gastoEditado).length > 0) {
      setModal(true),
        //se debe mostrar el formulario
        setTimeout(() => {
          setMostrarFormulario(true)
        }, 500)
    }
  }, [gastoEditado])

  // almacenar un presupuesto en localStorage
  useEffect(() => {
    localStorage.setItem('presupuesto', presupuesto ?? 0)
  }, [presupuesto])

  // almacenar listado de gastos en localStorage
  useEffect(() => {
    localStorage.setItem('listaGastos', JSON.stringify(listaGastos) ?? [])
  }, [listaGastos])


  //  cuando exista un presupuesto en localStorage ingrese al componente control de presupuesto
  useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem('presupuesto')) ?? 0;
    if (presupuestoLS > 0) {
      setIsValidPresupuesto(true)
    }
  }, [])

  useEffect(() => {
    if (filtro) {
      //filtrar gastos por categoria
      const gastosFiltrados = listaGastos.filter(gasto => gasto.categoria === filtro)
      setGastosFiltrados(gastosFiltrados)
    }
  }, [filtro])



  //cuando presiono nuevo gasto
  const handleNuevoGasto = () => {
    setGastoEditado({})

    setModal(true)
    //se debe mostrar el formulario
    setTimeout(() => {
      setMostrarFormulario(true)
    }, 500);
  }

  const guardarGasto = gasto => {
    // si existe un id antes de crear uno nuevo es porque el gasto se esta modificando
    if (gasto.id) {
      // actualizar
      const gastosActualizados = listaGastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState)
      setListaGastos(gastosActualizados);
      setGastoEditado({})
    } else {
      // nuevo gasto
      gasto.id = generarId()
      gasto.fecha = Date.now()
      setListaGastos([...listaGastos, gasto])

    }

    setMostrarFormulario(false)
    setTimeout(() => {
      setModal(false)
    }, 500);

  }
  const deleteGasto = id => {
    const gastosActualizados = listaGastos.filter(gasto => gasto.id !== id);
    setListaGastos(gastosActualizados);
  }

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        listaGastos={listaGastos}
        setListaGastos={setListaGastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />

      {isValidPresupuesto && (
        <div>
          <main>
            <Filtros
              filtro={filtro}
              setFiltro={setFiltro}
            />
            <ListadoGastos
              deleteGasto={deleteGasto}
              listaGastos={listaGastos}
              setGastoEditado={setGastoEditado}
              filtro={filtro}
              gastosFiltrados={gastosFiltrados}

            />
          </main>
          <div className='nuevo-gasto'>
            <img src={IconoNuevoGasto}
              alt="Icono nuevo gasto"
              onClick={handleNuevoGasto} />
          </div>
        </div>

      )}

      {modal && <ModalGasto
        setModal={setModal}
        mostrarFormulario={mostrarFormulario}
        setMostrarFormulario={setMostrarFormulario}
        guardarGasto={guardarGasto}
        gastoEditado={gastoEditado}
        setGastoEditado={setGastoEditado}
      />}

    </div>
  )
}

export default App
