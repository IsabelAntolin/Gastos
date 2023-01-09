import NuevoPresupuesto from "./NuevoPresupuesto"
import ControlPresupuesto from "./ControlPresupuesto"
const Header = ({setListaGastos, listaGastos, presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto }) => {
  return (
    <header>
      <h1>planificador de gastos</h1>

      {isValidPresupuesto ? (
        <ControlPresupuesto
          setListaGastos={setListaGastos}
          listaGastos={listaGastos}
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
        />
      ) : (
        <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
        />
      )
      }

    </header>
  )
}

export default Header

