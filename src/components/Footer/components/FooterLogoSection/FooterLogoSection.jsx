import './style.css'

/**
 * Componente de la sección del logo en el pie de página.
 * Muestra el logotipo principal de la empresa.
 *
 * @component
 * @returns {JSX.Element} El componente del logo en el pie de página.
 */
const FooterLogoSection = () => (
    <div className="footer__logo-section">
        <img
            src="/assets/home/logo/pricut-logo-SF-claro-1.svg"
            alt="Logo de Pricut"
            className="footer__logo"
        />
    </div>
)

export default FooterLogoSection