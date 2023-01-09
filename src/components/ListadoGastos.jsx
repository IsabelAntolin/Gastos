import Gasto from './Gasto'
const ListadoGastos = ({ filtro, gastosFiltrados, deleteGasto, setGastoEditado, listaGastos }) => {
  return (
    <div className="contenedor listado-gastos">

      {filtro ?
        (
          <>
            <h2>{gastosFiltrados.length ? 'Gastos' : 'No hay Gastos Registrados'}</h2>
            {gastosFiltrados.map(objgasto => (<Gasto
              key={objgasto.id}
              objgasto={objgasto}
              setGastoEditado={setGastoEditado}
              deleteGasto={deleteGasto}
            />))}
          </>

        ) :
        (
          <>
          <h2>{listaGastos.length ? 'Gastos' : 'No hay Gastos Registrados'}</h2>
          {listaGastos.map(objgasto => (<Gasto
            key={objgasto.id}
            objgasto={objgasto}
            setGastoEditado={setGastoEditado}
            deleteGasto={deleteGasto}
          />))}
          </>
          
      )
      }
    </div>
  )
}


export default ListadoGastos
