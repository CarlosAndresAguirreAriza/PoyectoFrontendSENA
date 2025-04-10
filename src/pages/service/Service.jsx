import Navbar from '../../components/Navbar/Navbar'
import BannerComienzaProyecto from '../../components/banners/BannerComienzaProyecto/BannerComienzaTuProyecto'
import SectionArticulos from '../../components/sections/SectionArticulos/SectionArticulos'
import './style.css'
import Footer from '../../components/Footer/Footer'
import BannerService from '../../components/banners/BannerService/BannerService'
import SeccionSobreServicios from '../../components/sections/SeccionSobreServicios/SeccionSobreServicios'
import useInfoStore from '../../context/infoStorage'

/**
 * Service - Página para mostrar información sobre los servicios disponibles.
 *
 * @component
 *
 * @example
 * // Ejemplo de uso:
 * <Service />
 *
 * @description
 * Este componente muestra información sobre los servicios disponibles, con descripciones e imágenes.
 * Incluye banners, secciones de información y un pie de página.
 *
 * @dependencies
 * - infoStorage: Contexto para obtener información sobre los servicios.
 * - Navbar, Footer: Componentes para la barra de navegación y pie de página.
 * - BannerService, BannerComienzaProyecto: Banners informativos para la página.
 * - SeccionSobreServicios, SectionArticulos: Componentes para mostrar información detallada sobre los servicios.
 *
 * @returns {JSX.Element} - Página con información sobre los servicios.
 */
const Service = () => {
    const { services } = useInfoStore()
    console.log(services)
    return (
        <>
            <Navbar />
            <BannerService />
            {
                services.map((service, id) => (
                    <SeccionSobreServicios key={service.base_info.code} service={service.base_info.name} url={service.base_info.code} about_text={service.descriptions.about_text} main_image={service.images.main_image} common_uses_text={service.descriptions.common_uses_text} id={id}/>
                ))
            }

            <BannerComienzaProyecto />
            
            <SectionArticulos />
            <Footer />
        </>
    )
}

export default Service