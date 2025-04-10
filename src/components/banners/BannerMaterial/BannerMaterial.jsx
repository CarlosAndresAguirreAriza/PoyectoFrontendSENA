import './style.css'
import BackgroundButton from '../../buttons/BackgroundButton/BackgroundButton'

/**
 * Componente `BannerMaterial`.
 *
 * Este componente renderiza el banner principal en la página de inicio,
 * mostrando un mensaje de bienvenida, una breve descripción de los servicios
 * y un botón de llamado a la acción para realizar una cotización.
 *
 * @component
 * @returns {JSX.Element} Un elemento JSX que representa el banner principal
 * en la página de inicio.
 *
 * @example
 * // Ejemplo de uso
 * <BannerMaterial />
 */
const BannerMaterial = () => {
    return (
        <div className="bannerPrincipal__material">

            <div className="bannerPrincipal__background"></div>
            <div className="bannerPrincipal__background-1 svg"></div>
            <div className="bannerPrincipal__background-2 svg"></div>
            <div className="bannerPrincipal__background-3 svg"></div>

            <div className="bannerPrincipal__content">
                <h1>Amplia gama de materiales para tus proyectos</h1>
                <p>Explora nuestra selección de metales, plásticos y maderas de alta calidad. Con tecnologías de corte avanzadas, ofrecemos opciones para cada necesidad y diseño.</p>
                <BackgroundButton text={'Cotizar ahora'} background_color={'scarlett'} redirect={'/quote'} />
            </div>


            <div className="banner-overlay"></div>

        </div>

    )
}

export default BannerMaterial