import './style.css'
import BackgroundButton from '../../buttons/BackgroundButton/BackgroundButton'

const BannerService = () => {
    return (
        <div className="bannerService__container">

            <div className="bannerPrincipal__background"></div>
            <div className="bannerPrincipal__background-1 svg"></div>
            <div className="bannerPrincipal__background-2 svg"></div>
            <div className="bannerPrincipal__background-3 svg"></div>


            <div className="bannerService__content">
                <h1>El corte es solo el comienzo. </h1>
                <h5>Te ofrecemos soluciones integrales
                para tu proyecto.</h5>
                <p>Cortes de precisión de plástico, madera y metal a precios accesibles</p>
                <BackgroundButton text={'Cotizar ahora'} background_color={'scarlett'} redirect={'/quote'} />
            </div>

            <div className="banner-overlay"></div>

        </div>
    )
}

export default BannerService
