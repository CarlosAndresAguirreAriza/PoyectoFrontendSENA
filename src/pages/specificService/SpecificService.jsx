import Navbar from '../../components/Navbar/Navbar'
import BannerComienzaProyecto from '../../components/banners/BannerComienzaProyecto/BannerComienzaTuProyecto'
import SectionArticulos from '../../components/sections/SectionArticulos/SectionArticulos'
import './style.css'
import Footer from '../../components/Footer/Footer'
import BannerSpecificService from '../../components/banners/BannerSpecificService/BannerSpecificService'
import useInfoStore from '../../context/infoStorage'
import { Navigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import SeccionSobreServicioEspecifico from '../../components/sections/SeccionSobreServicioEspecifico/SeccionSobreServicioEspecifico'
import ServiceTableMobile from '../../components/ServiceTables/ServiceTableMobile/ServiceTableMobile'
import ServiceTableDesktop from '../../components/ServiceTables/ServiceTableDesktop/ServiceTableDesktop'

/**
 * Componente para mostrar información detallada de un servicio específico, incluyendo banners, secciones informativas y tablas de compatibilidad.
 * Este componente maneja el estado de la carga de datos y muestra una vista de detalle del servicio seleccionado.
 *
 * @returns {JSX.Element} El componente que representa la vista del servicio específico con su información, tablas y otros componentes relacionados.
 *
 * @example
 * <SpecificService />
 */
const SpecificService = () => {
    const { services, fetchServices, infoTableService } = useInfoStore()
    const { id } = useParams()
    const [service, setService] = useState('')
    const [tableInfoCompatible, setTableInfoCompatible] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)


    useEffect(() => {

        const fetchTableInfo = async () => {
            try {
                if (services.length > 0) {
                    const foundService = services.find(ser => ser.base_info.code === id)

                    if(!foundService) {
                        setError(true)
                    }

                    setService(foundService || null)
                    const resolvedTableInfo = infoTableService(foundService)

                    const compatibleTables = resolvedTableInfo.filter(table => table.compatibility)

                    setTableInfoCompatible(compatibleTables)
                } else {
                    await fetchServices()
                }
            } catch (error) {
                console.error('Error al cargar los servicios:', error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchTableInfo()
    }, [id, services, fetchServices, infoTableService])

    if (isLoading) {
        return <h1>Cargando...</h1>
    }

    if (error) {
        return <Navigate to='/404' />
    }

    return (
        <>
            <Navbar />
            <BannerSpecificService
                backgroundImage={service.images.banner_image}
                titulo={service.base_info.name}
                parrafo={service.descriptions.main_text}
            />
            <SeccionSobreServicioEspecifico
                titulo={service.base_info.name}
                about_image={service.images.about_image}
                main_image={service.images.main_image}
                common_uses_text={service.descriptions.common_uses_text}
                about_text={service.descriptions.about_text}
            />
            <div className='service-table'>
                {tableInfoCompatible.map((table) => (
                    <ServiceTableMobile
                        key={table.material}
                        materialName={table.material}
                        thicknessRange={table.thickness}
                    />
                ))}
                <ServiceTableDesktop tableInfo={tableInfoCompatible} />
            </div>
            <BannerComienzaProyecto />
            <SectionArticulos />
            <Footer />
        </>
    )
}

export default SpecificService
