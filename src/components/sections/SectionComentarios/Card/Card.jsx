import './style.css'

/**
 * Componente `Card`.
 *
 * Representa una tarjeta de comentario individual que muestra un comentario, el nombre del autor y su profesión.
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.comment - Texto del comentario.
 * @param {string} props.name - Nombre de la persona que hizo el comentario.
 * @param {string} props.profession - Profesión de la persona.
 *
 * @example
 * // Ejemplo de uso
 * <Card 
 *     comment="Excelente servicio y atención." 
 *     name="Juan Pérez" 
 *     profession="Diseñador" 
 * />
 *
 * @returns {JSX.Element} Tarjeta con el comentario, nombre y profesión del usuario.
 */
const Card = ({ comment, name, profession }) => {
    return (
        <div className="card-comment">
            <p className="card-comment-comment">{comment}</p>
            <div className="card-footer-comment">
                <p className="card-name-comment">{name}</p>
                <p className="card-profession-comment">{profession}</p>
            </div>
        </div>
    )
}

export default Card
