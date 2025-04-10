import BackgroundButton from '../../../../buttons/BackgroundButton/BackgroundButton'
import './style.css'

/**
 * Componente `MotivosEleccion`.
 *
 * Sección que explica por qué el servicio es la mejor elección, con texto y un botón de acción que redirige a la página "Sobre nosotros".
 *
 * @component
 * @example
 * // Ejemplo de uso
 * <MotivosEleccion />
 *
 * @returns {JSX.Element} Elemento JSX que representa los motivos para elegir el servicio.
 */
const MotivosEleccion = () => {
    return (
        <div className='motivosEleccion'>
            <div className='motivosEleccion-textos'>
                <h2 className='motivosEleccion__titulo'>¿Por qué somos la mejor elección?</h2>
                <p className='motivosEleccion__descripcion'>
                    Décadas de experiencia y una plataforma intuitiva se fusionan para simplificar cada proyecto y facilitar tu éxito
                </p>
            </div>
            <BackgroundButton background_color={'red'} redirect={'/about-us'} text={'Sobre nosotros'} />
        </div>
    )
}

export default MotivosEleccion
