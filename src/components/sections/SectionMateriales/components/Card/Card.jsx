import { Link } from 'react-router-dom'
import './style.css'

/**
 * Componente que representa una tarjeta de material.
 *
 * Este componente muestra el nombre del material y su imagen asociada.
 *
 * @component
 * @param {Object} props - Props del componente.
 * @param {string} props.name - El nombre del material.
 * @param {string} props.imgSrc - La URL de la imagen del material.
 * @returns {JSX.Element} Un elemento JSX que representa una tarjeta de material.
 *
 * @example
 * // Ejemplo de uso
 * <Card name="Ejemplo de Material" imgSrc="/ruta/a/imagen.jpg" />
 */
const Card = ({ name, imgSrc, code }) => {
    return (
        <Link to={`/material/${code}`} className="card">
            <h4 className="card-name">{name}</h4>
            <img src={imgSrc} alt={name} className="card-image" />
        </Link>
    )
}

export default Card