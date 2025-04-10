import './style.css'
import BackgroundButton from '../../buttons/BackgroundButton/BackgroundButton'

/**
 * Componente `BannerPrincipal`.
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
 * <BannerPrincipal />
 */
const BannerPrincipal = () => {
    return (
        <div className="bannerPrincipal__home">

            <div className="bannerPrincipal__background"></div>
            <div className="bannerPrincipal__background-1 svg"></div>
            <div className="bannerPrincipal__background-2 svg"></div>
            <div className="bannerPrincipal__background-3 svg"></div>

            <div className="bannerPrincipal__content">
                <h1>Cortes a medida en metal, plástico y madera</h1>
                <h5>Pedido <span>rápido</span>, resultados <span>precisos</span></h5>
                <p>Soluciones a medida para artesanos, emprendedores y empresas: ordena en línea y recibe tus pedidos en la puerta de tu casa</p>
                <BackgroundButton text={'Cotizar ahora'} background_color={'scarlett'} redirect={'/quote'} />
            </div>


            <div className="banner-overlay"></div>

        </div>

    )
}

export default BannerPrincipal