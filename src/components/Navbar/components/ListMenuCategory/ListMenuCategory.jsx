import './style.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ListItemsMenu from '../ListItemsMenu/ListItemsMenu'
/**
 * ListMenuCategory - Categoría de menú con lista de elementos o enlace directo.
 *
 * @component
 * @param {string} titulo - Título de la categoría del menú.
 * @param {Array} list - Lista de elementos dentro de la categoría.
 * @param {boolean} openNavBar - Estado de visibilidad del menú de navegación.
 * @param {Function} setOpenNavBar - Función para actualizar el estado de visibilidad del menú.
 * @param {string} url - Enlace directo de la categoría.
 * @param {Function} [onClick] - Función opcional para manejar clics en la categoría.
 * @example
 * <ListMenuCategory titulo="Materiales" list={materiales} url="material" />
 */
const ListMenuCategory = ({ titulo, list = [], openNavBar, setOpenNavBar, url, difText = false, onClick }) => {
    const [open, setOpen] = useState(false)

    return (
        <div className="list-menu-category">
            {list.length === 0 ? (
                <Link to={url} className={`list-item ${ difText ? 'list-item-dif-text' : '' }`} onClick={onClick}>
                    <h3 className="list-item-title list-item-title-only">{titulo}</h3>
                </Link>
            ) : (
                <div>
                    <div onClick={() => setOpen(!open)} className="list-item">
                        <h3 className="list-item-title" aria-expanded={open}>{titulo}</h3>
                        <img src="/assets/home/logo/arrow-down.svg" alt="Desplegar menú" />
                    </div>
                    <div className={`menu-content ${open ? 'open' : ''}`}>
                        {list.map((servicio) => (
                            <ListItemsMenu
                                key={servicio.tipo}
                                tipoMaterial={servicio.tipo}
                                url={url}
                                code={servicio.url}
                                openNavBar={openNavBar}
                                setOpenNavBar={setOpenNavBar}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default ListMenuCategory
