import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import useInfoStore from '../../../../context/infoStorage'
import useLoginStore from '../../../../context/loginStorage'
import ListMenuCategory from '../ListMenuCategory/ListMenuCategory'
import './style.css'

/**
 * Componente `MenuDespegable`.
 *
 * Menú desplegable para navegación en dispositivos móviles. Incluye enlaces a distintas secciones y categorías.
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {boolean} props.open - Estado de visibilidad del menú desplegable.
 * @param {Function} props.setOpen - Función para actualizar el estado de visibilidad.
 *
 * @example
 * <MenuDespegable open={true} setOpen={setOpen} />
 *
 * @returns {JSX.Element} Elemento JSX que representa el menú desplegable.
 */
const MenuDespegable = ({ open, setOpen }) => {
    const { services, fetchServices } = useInfoStore()
    const { isAuthenticated, logout } = useLoginStore()
    const [servicios, setServicios] = useState([])

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
        <div className={`menu_despegable ${open ? 'menu_despegable_abierto' : ''}`}>
            <div className="menu_despegable_head">
                <Link to="/">
                    <img src="/assets/home/logo/pricut-logo-SF-claro-3.svg" alt="Pricut logo" />
                </Link>
                <div onClick={() => setOpen(!open)}>
                    <img src="/assets/home/logo/x.svg" alt="Equis" />
                </div>
            </div>
            <ul className="menu_despegable_contenido">
                <li className="menu_despegable_lista">
                    <ListMenuCategory titulo="Materiales" url="/material" />
                </li>
                <li className="menu_despegable_lista">
                    <ListMenuCategory openNavBar={open} setOpenNavBar={setOpen} titulo="Servicios" list={servicios} url="/service" />
                </li>
                <li className="menu_despegable_lista">
                    <ListMenuCategory titulo="Recursos" url='/resources' />
                </li>
                <li className="menu_despegable_lista">
                    <ListMenuCategory titulo="Contacto" url='/contact' />
                </li>
                <li className="menu_despegable_lista menu_despegable_lista-pintado">
                    <ListMenuCategory difText={true} titulo="Cotizar ahora" url='/quote' />
                </li>
                {isAuthenticated ? (
                    <li className="menu_despegable_lista">
                        <ListMenuCategory titulo="Cerrar sesión" url='/' onClick={logout} />
                    </li>
                ) : (
                    <li className="menu_despegable_lista">
                        <ListMenuCategory titulo="Iniciar sesión" url='/login' />
                    </li>
                )}
            </ul>
        </div>
    )
}

export default MenuDespegable