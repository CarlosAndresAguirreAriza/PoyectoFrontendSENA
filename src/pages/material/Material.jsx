import BannerComienzaProyecto from '../../components/banners/BannerComienzaProyecto/BannerComienzaTuProyecto'
import BannerMaterial from '../../components/banners/BannerMaterial/BannerMaterial'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import SectionArticulos from '../../components/sections/SectionArticulos/SectionArticulos'
import SectionMateriales from '../../components/sections/SectionMateriales/SectionMateriales'
import SectionNuestrosServicios from '../../components/sections/SectionNuestrosServicios/SectionNuestrosServicios'
import './style.css'

/**
 * Componente `Material`.
 *
 * Página que presenta diferentes secciones como materiales, servicios, artículos, y banners para atraer al usuario hacia los servicios de la empresa.
 * Contiene la barra de navegación, varias secciones informativas y un pie de página.
 *
 * @component
 * @example
 * // Ejemplo de uso
 * <Material />
 *
 * @returns {JSX.Element} Elemento JSX que representa la página Material.
 */
const Material = () => {
    return (
        <div className='material'>
            <Navbar white={false}/>
            <BannerMaterial/>
            <SectionMateriales/>
            <SectionNuestrosServicios/>
            <BannerComienzaProyecto/>
            <SectionArticulos />
            <Footer />
        </div>
    )
}

export default Material
