import './style.css'
import { Link } from 'react-router-dom'

/**
 * ListItemsMenu - Componente para renderizar un enlace dentro de una lista de categorías en el menú desplegable.
 *
 * @component
 * @param {string} tipoMaterial - Nombre del material o servicio.
 * @param {boolean} openNavBar - Estado actual del menú.
 * @param {Function} setOpenNavBar - Función para alternar visibilidad.
 * @param {string} url - Ruta base del enlace.
 * @param {string} code - Código para construir la URL.
 * @example
 * <ListItemsMenu tipoMaterial="Madera" url="material" code="madera" openNavBar={true} setOpenNavBar={toggleMenu} />
 */
const ListItemsMenu = ({ code, tipoMaterial, openNavBar, setOpenNavBar, url }) => {
    return (
        <div className="list-item-link-container">
            <Link to={`/${url}/${code}`} onClick={() => setOpenNavBar(!openNavBar)} className="list-item-link">
                {tipoMaterial}
            </Link>
        </div>
    )
}

export default ListItemsMenu
