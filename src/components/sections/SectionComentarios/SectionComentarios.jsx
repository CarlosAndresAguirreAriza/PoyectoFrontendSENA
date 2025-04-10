import Carousel from './Carousel/Carousel'
import './style.css'

/**
 * Componente `SectionComentarios`.
 *
 * Muestra una sección de comentarios que incluye un título y un carrusel de testimonios.
 *
 * @component
 * @example
 * // Ejemplo de uso
 * <SectionComentarios />
 *
 * @returns {JSX.Element} La sección de comentarios con un título y un componente de carrusel.
 */
const SectionComentarios = () => {

    return (
        <div className='comentarios'>
            <h3 className='comentarios-titulo'>Comentarios</h3>
            <div className='comentarios-carousel'>
                <Carousel/>
            </div>
        </div>
    )
}

export default SectionComentarios
