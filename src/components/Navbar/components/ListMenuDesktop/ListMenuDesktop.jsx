import { Link } from 'react-router-dom'
import './style.css'
import { useState } from 'react'
import ListItemDesktop from '../ListItemDesktop/ListItemDesktop'

/**
 * ListMenuDesktop - Componente para representar una categoría o lista de elementos en el menú de escritorio.
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.title - Título de la categoría o sección en el menú.
 * @param {Array<Object>} [props.list=[]] - Lista de elementos dentro de la categoría. Cada elemento debe ser un objeto con una propiedad `tipo`.
 * @param {string} props.url - Ruta base para los enlaces de la categoría.
 * @param {boolean} [props.white=false] - Define si el texto del título debe mostrarse en negro o en blanco.
 * @param {boolean} [props.scrolled=false] - Indica si el menú está en estado "scrolled" para aplicar un estilo diferente.
 * @returns {JSX.Element} - Elemento JSX que representa una categoría en el menú.
 *
 * @example
 * const servicios = [{ tipo: "Madera", url: "madera" }, { tipo: "Metales", url: "metales" }];
 * <ListMenuDesktop title="Servicios" list={servicios} url="/service" white={true} />
 *
 * @example
 * <ListMenuDesktop title="Materiales" url="/material" />
 */
const ListMenuDesktop = ({ title, list = [], url, white = false, scrolled = false }) => {
    const [open, setOpen] = useState(false)

    return (
        <div className="list-menu-desktop">
            {list.length === 0 ? (
                <Link to={url} className="list-menu-desktop__link">
                    <h3 
                        className={`list-menu-desktop__title ${white ? 'list-menu-desktop__title--white' : ''} ${scrolled ? '' : 'list-menu-desktop__title--scroll'}`} 
                        aria-label={`Ir a ${title}`}
                    >
                        {title}
                    </h3>
                </Link>
            ) : (
                <div onClick={() => setOpen(!open)}>
                    <div className="list-menu-desktop__header">
                        <h3 
                            className={`list-menu-desktop__title ${white ? 'list-menu-desktop__title--white' : ''} ${scrolled ? '' : 'list-menu-desktop__title--scroll'}`} 
                            aria-expanded={open}
                            aria-label={`Expandir ${title}`}
                        >
                            {title}
                        </h3>
                        <img
                            className="list-menu-desktop__icon"
                            src="/assets/home/logo/arrow-down.svg"
                            alt="Desplegar menú"
                        />
                    </div>
                    <div className={`list-menu-desktop__list ${open ? 'list-menu-desktop__list--open' : ''}`}>
                        {list.map((item) => (
                            <ListItemDesktop
                                key={item.tipo}
                                item={item.tipo}
                                url={url}
                                code={item.url}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default ListMenuDesktop