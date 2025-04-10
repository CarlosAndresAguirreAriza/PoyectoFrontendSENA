import React from 'react'
import CardDif from '../CardDif/CardDif'
import './style.css'

/**
 * Componente `Diferenciadores`.
 *
 * Muestra una lista de tarjetas (`CardDif`) que resaltan los diferenciadores clave del servicio.
 *
 * @component
 * @example
 * // Ejemplo de uso
 * <Diferenciadores />
 *
 * @returns {JSX.Element} Elemento JSX que representa la lista de diferenciadores del servicio.
 */
const Diferenciadores = () => {
  return (
    <div className='diferenciadores'>
        <CardDif
            urlImg="https://res.cloudinary.com/da4ulrywk/image/upload/f_auto,q_auto/v1/Pricut/eofjbiwwf8h3anayx9gw"
            title="Simplicidad y Rapidez"
            parrafo="Nuestro servicio es diseñado para ser simple y rápido. Te ofrecemos una plataforma fácil de usar que te permite cotizar y obtener resultados en tiempo récord."
        />
        <CardDif
            urlImg="https://res.cloudinary.com/da4ulrywk/image/upload/f_auto,q_auto/v1/Pricut/z6jsvflicsr9qkagal3t"
            title="Experiencia Personalizada"
            parrafo="Nuestra amplia experiencia se traduce en una atención personalizada, adaptada a tus necesidades únicas y a tu proyecto."
            derecho={false}
        />
    </div>
  )
}

export default Diferenciadores
