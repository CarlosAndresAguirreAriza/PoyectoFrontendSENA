import { useEffect, useState } from 'react'
import useInfoStore from '../../../../context/infoStorage'
import BackgroundButton from '../../../buttons/BackgroundButton/BackgroundButton'
import ListMenuDesktop from '../ListMenuDesktop/ListMenuDesktop'
import './style.css'
import useLoginStore from '../../../../context/loginStorage'

/**
 * Componente `MenuDesktop`.
 *
 * Menú de navegación para la vista de escritorio. Incluye enlaces a distintas secciones del sitio web y botones de acción.
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {boolean} props.white - Define si los elementos del menú deben mostrarse en blanco.
 * @param {boolean} props.scrolled - Indica si el menú está en estado desplazado (scroll).
 * 
 * @example
 * <MenuDesktop white={true} scrolled={false} />
 *
 * @returns {JSX.Element} Elemento JSX que representa el menú de navegación en la vista de escritorio.
 */
const MenuDesktop = ({ white, scrolled }) => {
    const { isAuthenticated, logout } = useLoginStore()
    const { services, fetchServices } = useInfoStore()
    const [ servicios, setServicios ] = useState([])

    useEffect(() => {
        if (services.length === 0) {
            fetchServices()
        }
        setServicios(services.map(el => ({
            tipo: el.base_info.name,
            url: el.base_info.code
        })))
    }, [services, fetchServices])

    return (
        <ul className="menu-desktop">
            <li className="menu-desktop__item">
                <ListMenuDesktop scrolled={scrolled} title="Materiales" url="/material" white={white} />
            </li>
            <li className="menu-desktop__item">
                <ListMenuDesktop scrolled={scrolled} title="Servicios" list={servicios} url="/service" white={white} />
            </li>
            <li className="menu-desktop__item">
                <ListMenuDesktop scrolled={scrolled} title="Recursos" url="/resources" white={white} />
            </li>
            <li className="menu-desktop__item">
                <ListMenuDesktop scrolled={scrolled} title="Contacto" url="/contact" white={white} />
            </li>
            <ul className="menu-desktop__button">
                <BackgroundButton scrolled={scrolled} text="Cotizar ahora" background_color="red" redirect="/quote" />
                {isAuthenticated ? (
                    <BackgroundButton
                        text="Cerrar sesión"
                        background_color="white"
                        onClick={() => {
                            logout()
                        }}
                    />
                ) : (
                    <BackgroundButton
                        text="Iniciar sesión"
                        background_color="white"
                        redirect="/login"
                    />
                )}
            </ul>
        </ul>
    )
}

export default MenuDesktop
