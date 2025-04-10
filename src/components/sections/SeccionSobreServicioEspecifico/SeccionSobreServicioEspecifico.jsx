import './style.css'
import Card from './components/Card/Card'


/**
 * Componente que muestra una sección con información sobre un servicio específico, incluyendo detalles y usos comunes.
 *
 * @param {Object} props - Las propiedades del componente.
 * @param {string} props.about_image - La imagen que se mostrará en el apartado de "Usos comunes del Router CNC".
 * @param {string} props.main_image - La imagen que se mostrará en el apartado de "Sobre el Router CNC".
 * @param {string} props.common_uses_text - El texto que describe los usos comunes del Router CNC.
 * @param {string} props.about_text - El texto que describe el servicio en general.
 * @returns {JSX.Element} El componente de la sección del servicio con dos tarjetas de información.
 *
 * @example
 * const main_image = "ruta/a/imagen.jpg";
 * const about_image = "ruta/a/otra-imagen.jpg";
 * const common_uses_text = "Texto sobre los usos comunes...";
 * const about_text = "Texto sobre el servicio...";
 *
 * <SeccionSobreServicioEspecifico
 *     about_image={about_image}
 *     main_image={main_image}
 *     common_uses_text={common_uses_text}
 *     about_text={about_text}
 * />
 */
const SeccionSobreServicioEspecifico = ({titulo,about_image, main_image, common_uses_text, about_text}) => {

    return (
        <div className='service-section-container'>
            <Card titulo={`Sobre el ${titulo}`}  img={main_image} parrafo={about_text}/>
            <Card titulo={`Usos comunes del ${titulo}`} img={about_image} parrafo={common_uses_text} reversa={true}/>
        </div>
    )
}

export default SeccionSobreServicioEspecifico
