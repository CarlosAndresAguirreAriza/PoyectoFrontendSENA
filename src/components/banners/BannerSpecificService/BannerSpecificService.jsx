import './style.css'
import BackgroundButton from '../../buttons/BackgroundButton/BackgroundButton'

/**
 * Componente `BannerSpecificService` que renderiza un banner con un fondo personalizado,
 * un título, un párrafo y un botón de acción.
 * 
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.titulo - Título principal que se muestra en el banner.
 * @param {string} props.parrafo - Texto descriptivo que se muestra debajo del título.
 * @param {string} props.tipo - Tipo de material que se muestra en la parte inferior del banner.
 * @param {string} props.backgroundImage - URL de la imagen de fondo del banner.
 * 
 * @returns {JSX.Element} Un componente de banner con un fondo, título, párrafo y botón.
 */
const BannerSpecificService = ({ titulo, parrafo, tipo, backgroundImage }) => {

    return (
        <div
            className="banner-container"
            style={{
                backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.30) 76.7%, rgba(0, 0, 0, 0.00) 100%), url(${backgroundImage})`
            }}
        >
            <div className="banner-container-info">
                <div className="banner-header">
                    <h1 className="banner-title">{titulo}</h1>
                    <svg
                        className="banner-divider"
                        xmlns="http://www.w3.org/2000/svg"
                        width="393"
                        height="4"
                        viewBox="0 0 393 4"
                        fill="none"
                    >
                        <path d="M0 2H393" stroke="#E30613" strokeWidth="3" />
                    </svg>
                </div>
                <p className="banner-paragraph">{parrafo}</p>
                <BackgroundButton
                    text="Cotiza ahora"
                    background_color="scarlett"
                    redirect="/quote"
                    className="quote-button"
                />
            </div>

            <div className="banner-type-container">
                <h2 className="banner-type">{tipo}</h2>
            </div>
        </div>
    )
}

export default BannerSpecificService
