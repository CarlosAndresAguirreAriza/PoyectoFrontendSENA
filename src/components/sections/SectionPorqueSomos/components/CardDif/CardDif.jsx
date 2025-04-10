import './style.css'

/**
 * Componente `CardDif`.
 *
 * Tarjeta informativa que presenta un diferenciador con imagen, título y descripción. 
 * Puede mostrarse en orientación normal o invertida.
 *
 * @component
 * @param {Object} props - Las propiedades del componente.
 * @param {string} props.urlImg - URL de la imagen de la tarjeta.
 * @param {string} props.title - Título de la tarjeta.
 * @param {string} props.parrafo - Descripción de la tarjeta.
 * @param {boolean} [props.derecho=true] - Define la orientación de la tarjeta; `true` para orientación normal, `false` para invertida.
 * @example
 * // Ejemplo de uso
 * <CardDif urlImg="https://example.com/imagen.jpg" title="Calidad Superior" parrafo="Ofrecemos la más alta calidad en el mercado." />
 *
 * @returns {JSX.Element} Elemento JSX que representa una tarjeta de diferenciador.
 */
const CardDif = ({ urlImg, title, parrafo, derecho = true }) => {
    return (
        <div className={`card-dif ${derecho ? '' : 'invertido'}`}>
            <img src={urlImg} alt={title} className="card-dif-img" />
            <div className="card-dif-content">
                <h3 className="card-dif-title">{title}</h3>
                <p className="card-dif-parrafo">{parrafo}</p>
            </div>
        </div>
    )
}

export default CardDif
