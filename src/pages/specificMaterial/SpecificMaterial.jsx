import { useParams, Navigate } from 'react-router-dom'
import useInfoStore from '../../context/infoStorage'
import BannerSpecificMaterial from '../../components/banners/BannerSpecificMaterial/BannerSpecificMaterial'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import SectionAboutMaterials from '../../components/sections/SectionAboutMaterials/SectionAboutMaterials'
import SectionImagenMaterial from '../../components/sections/SectionImagenMaterial/SectionImagenMaterial'
import './style.css'
import { useEffect, useState } from 'react'
import MaterialTableMobile from '../../components/materialTables/MaterialTableMobile/MaterialTableMobile'
import MaterialTableDesktop from '../../components/materialTables/MaterialTableDesktop/MaterialTableDesktop'

/**
 * SpecificMaterial - Página para mostrar información detallada sobre un material específico.
 *
 * @component
 *
 * @example
 * // Ejemplo de uso:
 * <SpecificMaterial />
 *
 * @description
 * Este componente muestra información detallada sobre un material seleccionado.
 * Incluye un banner, descripciones, imágenes y tablas de espesores.
 *
 * @dependencies
 * - react-router-dom: Para obtener el parámetro de la URL.
 * - infoStorage: Contexto para obtener información sobre los materiales.
 * - Navbar, Footer: Componentes para la barra de navegación y pie de página.
 * - BannerSpecificMaterial, SectionAboutMaterials, SectionImagenMaterial: Componentes para mostrar información sobre el material.
 * - MaterialTableMobile, MaterialTableDesktop: Tablas para mostrar espesores y cortes disponibles.
 *
 * @returns {JSX.Element} - Página con información detallada sobre un material específico.
 */
const SpecificMaterial = () => {
    const { id } = useParams()
    const { materials, fetchMaterials } = useInfoStore()
    const [material, setMaterial] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    /**
     * Lógica para obtener los detalles del material seleccionado.
     * Si los materiales están cargados, busca el material por su código.
     * Si no, se obtiene la lista completa de materiales.
     * Maneja posibles errores durante el proceso.
     */
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (materials.length > 0) {
                    const foundMaterial = materials.find(mat => mat.base_info.code === id)
                    setMaterial(foundMaterial || null)
                } else {
                    await fetchMaterials()
                }
            } catch (error) {
                console.error('Error al cargar los materiales:', error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [id, materials, fetchMaterials])

    if (isLoading) return <div>Cargando...</div>
    if (!material) return <Navigate to="/error" replace />

    return (
        <div className="specificMaterial">
            <Navbar />
            <BannerSpecificMaterial
                tipo={material.base_info.category}
                titulo={material.base_info.name}
                parrafo={material.descriptions.description_text}
                backgroundImage={material.images.banner_image}
            />
            <div className="specificMaterial-Section">
                <SectionAboutMaterials
                    material={material.base_info.name}
                    sobre={material.descriptions.about_text}
                    usos={material.descriptions.common_uses_text}
                />
                <SectionImagenMaterial
                    description_image={material.images.description_image}
                    about_image={material.images.about_image}
                    uses_image={material.images.uses_image}
                    texture_image={material.images.texture_image}
                />
            </div>
            <div className="specificMaterial-Table">
                <MaterialTableMobile codeService={'laser_co2'} servicio={'Láser CO₂'} infoTable={material.thicknesses}/>
                <MaterialTableMobile codeService={'laser_fibra'} servicio={'Láser de fibra'} infoTable={material.thicknesses}/>
                <MaterialTableMobile codeService={'router_cnc'} servicio={'Router CNC'} infoTable={material.thicknesses}/>
                <MaterialTableDesktop infoTable={material.thicknesses}/>
            </div>
            <Footer />
        </div>
    )
}

export default SpecificMaterial
