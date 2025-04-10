import React from 'react'
import MotivosEleccion from './components/MotivosEleccion/MotivosEleccion'
import Diferenciadores from './components/Diferenciadores/Diferenciadores'
import './style.css'

/**
 * Componente `SectionPorqueSomos`.
 *
 * Sección informativa que destaca los motivos para elegir el servicio y los diferenciadores clave.
 * Incluye componentes `MotivosEleccion` y `Diferenciadores`.
 *
 * @component
 * @example
 * // Ejemplo de uso
 * <SectionPorqueSomos />
 *
 * @returns {JSX.Element} Elemento JSX que representa la sección de motivos para elegir la empresa.
 */
const SectionPorqueSomos = () => {
  return (
    <div className='porqueSomos'>
      <MotivosEleccion/>
      <Diferenciadores/>
    </div>
  )
}

export default SectionPorqueSomos