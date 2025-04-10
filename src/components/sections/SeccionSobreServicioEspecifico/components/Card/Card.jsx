import './style.css'

/**
 * Componente para mostrar una tarjeta de servicio, con una imagen de fondo, un título y un párrafo de información.
 * La tarjeta puede invertirse en su disposición mediante la propiedad `reversa`.
 *
 * @param {Object} props - Las propiedades del componente.
 * @param {string} props.img - La URL de la imagen de fondo de la tarjeta.
 * @param {string} props.titulo - El título que se mostrará en la tarjeta.
 * @param {string} props.parrafo - El párrafo de texto que se mostrará debajo del título.
 * @param {boolean} [props.reversa=false] - Si es `true`, invierte la disposición de la tarjeta.
 * @returns {JSX.Element} El componente de la tarjeta de servicio.
 *
 * @example
 * <Card 
 *     img="https://example.com/image.jpg"
 *     titulo="Título de la tarjeta"
 *     parrafo="Este es un párrafo con información relevante sobre el servicio."
 *     reversa={true} 
 * />
 */
const Card = ({ img, titulo, parrafo, reversa }) => {
    return (
        <div className={'card-container-service' + (reversa ? ' reversa' : '')}>
            <div 
                className="card-image-service"
                style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            ></div>
            <div className='card-info-service'>
                <h2 className="card-title-service">{titulo}</h2>
                <p className="card-paragraph-service">{parrafo}</p>
            </div>
        </div>
    )
}

export default Card