import BackgroundButton from '../../../../buttons/BackgroundButton/BackgroundButton'
import './style.css'

/**
 * Componente `Card`.
 *
 * Representa una tarjeta de artículo que muestra un título, un resumen y un botón de redirección a más detalles.
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.titulo - Título del artículo.
 * @param {string} props.resumen - Breve descripción del contenido del artículo.
 * @param {string} props.articulo - Ruta del artículo para redirección.
 *
 * @example
 * // Ejemplo de uso
 * <Card 
 *     titulo="El cotizador y sus recomendaciones" 
 *     resumen="Un recorrido por el proceso del cotizador en línea..." 
 *     articulo="ejemplo" 
 * />
 *
 * @returns {JSX.Element} Tarjeta con título, resumen del artículo y un botón de "Conoce más".
 */
const Card = ({ titulo, resumen, articulo }) => {
    return (
        <div className="card-articulo">
            <p className="card-articulo-title">{titulo}</p>
            <div className="card-articulo-resumen-container">
                <p className="card-articulo-resumen">{resumen}</p>
                <BackgroundButton text={'Conoce más'} redirect={`/articulo/${articulo}`} background_color={'red'}/>
            </div>
        </div>
    )
}

export default Card
