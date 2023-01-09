import { formatearFecha } from "../helpers"
import { LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, TrailingActions } from 'react-swipeable-list'
import "react-swipeable-list/dist/styles.css"

import IconoAhorro from '../img/icono_ahorro.svg'
import IconoCasa from '../img/icono_casa.svg'
import IconoComida from '../img/icono_comida.svg'
import IconoGastos from '../img/icono_gastos.svg'
import IconoOcio from '../img/icono_ocio.svg'
import IconoSalud from '../img/icono_salud.svg'
import IconoSuscripciones from '../img/icono_suscripciones.svg'

const diccionarioIconos = {
  ahorro: IconoAhorro,
  comida: IconoComida,
  hogar: IconoCasa,
  gastos: IconoGastos,
  ocio: IconoOcio,
  salud: IconoSalud,
  suscripciones: IconoSuscripciones
}


const Gasto = ({ deleteGasto, setGastoEditado, objgasto }) => {
  const { categoria, gasto, cantidad, id, fecha } = objgasto

  const editarGasto = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setGastoEditado(objgasto)}>
        Editar
      </SwipeAction>
    </LeadingActions>
  )
  const handleEliminarGasto = () => (
    <TrailingActions>
      <SwipeAction
        destructive={true}
        onClick={() => deleteGasto(id)}
      >
        Eliminar
      </SwipeAction>
    </TrailingActions>
  )
  return (
    <SwipeableList>
      <SwipeableListItem
        // se muestra los botones de editar e eliminar cuando arrastro una parte del gasto
        leadingActions={editarGasto()}
        trailingActions={handleEliminarGasto()}
      >
        {/* muestra la informacion de un gasto que llega de listado gasto de la lista  */}
        <div className="sombra gasto">
          <div className="contenido-gasto">
            <img src={diccionarioIconos[categoria]} alt=""

            />
            <div className="descripcion-gasto">
              <p className="categoria">{categoria}</p>
              <p className="nombre-gasto">{gasto}</p>
              <p className="fecha-gasto">Agregado el: {''}
                <span>{formatearFecha(fecha)}</span>
              </p>
            </div>
          </div>
          <p className="cantidad-gasto">${cantidad}</p>


        </div>
      </SwipeableListItem>

    </SwipeableList>

  )
}

export default Gasto
