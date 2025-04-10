import { Link } from 'react-router-dom'
import './style.css'

/**
 * ListItemDesktop - Elemento dentro de una categoría en el menú de escritorio.
 *
 * @component
 * @param {string} item - Nombre del elemento en la categoría.
 * @param {string} url - Ruta base para el enlace del elemento.
 * @param {string} code - Código o parte adicional de la URL.
 * @returns {JSX.Element} - Elemento JSX que representa un enlace a una subcategoría en el menú.
 * @example
 * <ListItemDesktop item="Madera" url="material" code="madera" />
 */
const ListItemDesktop = ({ item, url, code }) => {
    return (
        <div className="list-item-desktop">
            <Link className='list-item-desktop_link' to={`${url}/${code}`} aria-label={`Ir a ${item}`}> {item} </Link>
        </div>
    )
}

export default ListItemDesktop
