import './style.css'

import { Link } from 'react-router-dom'

/**
 * Componente de enlaces de navegación en el pie de página.
 * Incluye enlaces a secciones de navegación y servicios de la empresa.
 *
 * @component
 * @returns {JSX.Element} El componente de enlaces de navegación en el pie de página.
 */
const FooterLinks = () => (
    <div className="footer__links">
        <nav className="footer__navigation">
            <p className="footer__navigation-title">Navegación</p>
            <Link to="/" className="footer__link">Inicio</Link>
            <Link to="/material" className="footer__link">Materiales</Link>
            <Link to="/contact" className="footer__link">Contacto</Link>
            <Link to="/resources" className="footer__link">Recursos</Link>
            <Link to="/terms-and-conditions" className="footer__link">Términos y condiciones</Link>
            <Link to="/privacy-policy" className="footer__link">Políticas de privacidad</Link>
        </nav>
        <div className="footer__services">
            <p className="footer__services-title">Servicio</p>
            <Link to="/service/laser-de-fibra" className="footer__link">Láser de fibra</Link>
            <Link to="/service/laser-co2" className="footer__link">Láser CO₂</Link>
            <Link to="/service/router-cnc" className="footer__link">Router CNC</Link>
        </div>
    </div>
)

export default FooterLinks