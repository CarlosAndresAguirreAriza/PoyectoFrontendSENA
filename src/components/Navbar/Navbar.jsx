import { useState, useEffect } from 'react'
import './style.css'
import HamburgerMenu from './components/HamburgerMenu/HamburgerMenu'
import MenuDespegable from './components/MenuDesplegable/MenuDesplegable'
import MenuDesktop from './components/MenuDesktop/MenuDesktop'
import { Link } from 'react-router-dom'

/**
 * Componente `Navbar`.
 *
 * Barra de navegación que contiene el logotipo y un menú desplegable adaptable para dispositivos móviles y escritorio.
 * Incluye cambios visuales en función del desplazamiento en la página.
 *
 * @component
 * @param {Object} props - Las propiedades del componente.
 * @param {boolean} [props.white=true] - Determina si se usa la versión de logotipo en blanco.
 * @param {boolean} [props.scrolledOff=false] - Desactiva la detección de scroll si es `true`.
 * @example
 * <Navbar white={true} scrolledOff={false} />
 *
 * @returns {JSX.Element} Elemento JSX que representa la barra de navegación.
 */
const Navbar = ({ white = true, scrolledOff = false }) => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)



  useEffect(() => {
    if (scrolledOff) {
      setScrolled(true)
      return
    }

    const handleScroll = () => {
      const isScrolled = document.documentElement.scrollTop > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled, scrolledOff])

  return (
    <nav
      className={`navbar ${scrolled ? (white ? 'navbar-scrolled navbar-white' : 'navbar-scrolled') : ''}`}
    >
      {white ? (
        scrolled ? (
          <Link to="/" className="navbar_logo">
            <img src="/assets/home/logo/pricut-logo-SF-claro-3.svg" alt="Pricut logo" />
          </Link>
        ) : (
          <Link to="/" className="navbar_logo">
            <img src="/assets/home/logo/pricut-logo-SF-claro-1.svg" alt="Pricut logo" />
          </Link>
        )
      ) : (
        <Link to="/" className="navbar_logo">
          <img src="/assets/home/logo/pricut-logo-SF-claro-1.svg" alt="Pricut logo" />
        </Link>
      )}

      <MenuDesktop white={white} scrolled={scrolled} />
      <HamburgerMenu setOpen={setOpen} open={open} />
      <MenuDespegable setOpen={setOpen} open={open} />
    </nav>
  )
}

export default Navbar
