import BackgroundButton from '../../buttons/BackgroundButton/BackgroundButton'
import './style.css'


/**
 * SeccionSobreServicios - Componente para mostrar información sobre un servicio específico.
 *
 * @component
 *
 * @example
 * // Ejemplo de uso:
 * <SeccionSobreServicios
 *    service="Corte Láser"
 *    url="laser-cutting"
 *    about_text="Servicio de corte láser para materiales como madera y acrílico."
 *    common_uses_text="Usado para fabricar piezas personalizadas y prototipos."
 *    main_image="url_imagen.jpg"
 *    id={1}
 * />
 *
 * @description
 * Este componente presenta información detallada sobre un servicio.
 * Incluye un título, descripción breve, sección sobre el servicio, usos comunes y un botón para más información.
 *
 * @dependencies
 * - BackgroundButton: Botón reutilizable con estilo personalizado.
 * - style.css: Estilos específicos para la apariencia del componente.
 *
 * @param {string} service - Nombre del servicio.
 * @param {string} url - URL asociada al servicio para redireccionar al botón.
 * @param {string} about_text - Texto descriptivo sobre el servicio.
 * @param {string} common_uses_text - Texto que describe usos comunes del servicio.
 * @param {string} main_image - URL de la imagen principal del servicio.
 * @param {number} id - Identificador del servicio usado para alternar estilos.
 *
 * @returns {JSX.Element} - Sección informativa sobre un servicio específico.
 */
const SeccionSobreServicios = ({ service, url, about_text, common_uses_text, main_image, id}) => {
  return (
    <div className={'seccion-sobre-servicios' + (id % 2 === 0 ? '' : ' reversa')}>
      <div className="servicio-header" style={{ backgroundImage: `url(${main_image})` }}>
        <div className='servicio-header-info'>
          <h3 className="servicio-titulo">{service}</h3>
          <p className="servicio-descripcion">
            {about_text && about_text.length > 100 ? about_text.slice(0, 67) + '...' : about_text}
          </p>

        <div className='servicio-boton'>
          <BackgroundButton
            redirect={'/service/' + url}
            text="Conoce más"
            background_color="red"
            className="servicio-boton"
          />
        </div>
        </div>

      </div>
      <div className="servicio-contenido">
        <div className="sobre-servicio">
          <h4 className="sobre-servicio-titulo">Sobre {service}</h4>
          <p className="sobre-servicio-texto">{about_text}</p>
        </div>
        <div className="usos-servicio">
          <h4 className="usos-servicio-titulo">Usos</h4>
          <p className="usos-servicio-texto">{common_uses_text}</p>
        </div>
      </div>
    </div>
  )
}

export default SeccionSobreServicios
