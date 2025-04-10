import './style.css'
import { Link } from 'react-router-dom'

/**
 * Componente `Card`.
 *
 * Tarjeta que muestra la información de un servicio, incluyendo título, descripción, y una imagen de fondo.
 * Cada tarjeta incluye un enlace para obtener más información sobre el servicio.
 *
 * @component
 * @param {Object} props - Las propiedades del componente.
 * @param {string} props.titulo - El título del servicio.
 * @param {string} props.desc - La descripción del servicio.
 * @param {string} props.servicio - Identificador del servicio, utilizado en el enlace.
 * @param {string} props.imgSrc - URL de la imagen de fondo para el servicio.
 * @example
 * // Ejemplo de uso
 * <Card
 *   titulo="Láser de fibra"
 *   desc="Transformamos el metal en obras maestras con velocidad y precisión."
 *   servicio="1"
 *   imgSrc="https://example.com/image.jpg"
 * />
 *
 * @returns {JSX.Element} Elemento JSX que representa una tarjeta de servicio.
 */
const Card = ({ titulo, desc, servicio, imgSrc }) => {
    return (
        <div className="card-container" style={{ backgroundImage: `url(${imgSrc})` }}>
            <div className="card-content">
                <div>
                    <h3 className="card-title">{titulo}</h3>
                    <div className='card-text'>
                        <p className="card-description">{desc && desc.length > 200 ? desc.slice(0, 200) + '...' : desc}</p>
                    </div>
                </div>
                <Link to={'/service/' + servicio} className="card-link">Leer más</Link>
            </div>
        </div>
    )
}

export default Card
