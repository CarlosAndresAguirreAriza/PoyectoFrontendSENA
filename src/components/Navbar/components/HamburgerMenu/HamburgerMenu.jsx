import './style.css'


/**
 * Componente `HamburgerMenu`.
 *
 * Icono interactivo para abrir o cerrar el menú de navegación en dispositivos móviles.
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {Function} props.setOpen - Función para alternar el estado de apertura del menú.
 * @param {boolean} props.open - Estado actual del menú (abierto o cerrado).
 *
 * @example
 * <HamburgerMenu setOpen={setOpen} open={true} />
 *
 * @returns {JSX.Element} Elemento JSX que representa el icono del menú.
 */
export default function HamburgerMenu({ setOpen, open }) {

    return (
        <div onClick={() => setOpen(!open)} className="hamburger-menu">
            <div  className="hamburger-icon">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>
        </div>
    )
}
