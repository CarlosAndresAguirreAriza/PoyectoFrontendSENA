import './style.css'
import BackgroundButton from '../../buttons/BackgroundButton/BackgroundButton'

/**
 * Componente `BannerComienzaProyecto`.
 *
 * Banner promocional que invita a los usuarios a comenzar un proyecto, proporcionando opciones para obtener una cotización inmediata o ponerse en contacto.
 * Incluye un fondo visual y botones de acción que redirigen a diferentes secciones de la aplicación.
 *
 * @component
 * @example
 * // Ejemplo de uso
 * <BannerComienzaProyecto />
 *
 * @returns {JSX.Element} Elemento JSX que representa el banner de inicio de proyecto con botones de acción.
 */
const BannerComienzaProyecto = () => {
  return (
    <div className="bannerComienza">
        <div className='bannerComienza__background'></div>
        <h2 className='bannerComienza__h2'>¡Comienza tu proyecto con nosotros!</h2>
        <div className='bannerComienza__p-container'>
          <p className='bannerComienza__p'>
            Carga tu diseño en nuestro cotizador y obtén un precio al
            <span className='bannerComienza__p--span'> instante</span>. Recibirás tus piezas en la puerta de tu hogar o negocio en cuestión de
            <span className='bannerComienza__p--span'> pocos días</span>
          </p>
        </div>
        <div className="bannerComienza__botonera">
          <span className='bannerComienza__botonera--btn'>
            <BackgroundButton text="Cotizar ahora" redirect="/quote" background_color="red" />
          </span>
          <span className='bannerComienza__botonera--btn'>
            <BackgroundButton text="Contacto" redirect="/contact" background_color="grey" />
          </span>
        </div>
      <div className="bannerComienza-overlay"></div>
    </div>
  )
}

export default BannerComienzaProyecto
