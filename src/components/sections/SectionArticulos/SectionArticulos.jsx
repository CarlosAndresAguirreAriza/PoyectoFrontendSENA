
//import Carousel from './components/Carousel/Carousel'
import './style.css'


/**
 * Componente `SectionArticulos`.
 *
 * Muestra una sección de artículos que incluye un título y un carrusel de artículos destacados.
 *
 * @component
 * @example
 * // Ejemplo de uso
 * <SectionArticulos />
 *
 * @returns {JSX.Element} La sección de artículos con un título y un componente de carrusel.
 */
const SectionArticulos = () => {

    return (
        <div className="articulos-container">
            {/* <h2 className='articulos__h2'>Recursos</h2> */}
            <h2 className='proximamente'>PRÓXIMAMENTE...</h2>
          {/* <div className='articulos__carousel'>
                <Carousel />
            </div> */}
        </div>
    )
}

export default SectionArticulos