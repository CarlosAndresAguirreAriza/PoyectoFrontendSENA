import './style.css'

/**
 * Componente de créditos del pie de página.
 * Muestra la marca de la empresa y el desarrollador.
 *
 * @component
 * @returns {JSX.Element} El componente de créditos en el pie de página.
 */
const FooterCredits = () => (
    <div className="footer__credits">
        <div className="footer__brand">
            <div className="footer__brand-logo">
                <img
                    src="https://res.cloudinary.com/da4ulrywk/image/upload/f_auto,q_auto/v1/Pricut/v0t0eadkmoantkukxv4e"
                    alt="Logo de Aldan Industries"
                    className="footer__brand-image"
                />
            </div>
            <div className="footer__brand-name">
                <p>Aldan Industries</p>
            </div>
        </div>
        <div className="footer__developer">
            <div className="footer__developer-label">
                <p>Desarrollado por:</p>
            </div>
            <div className="footer__developer-logo">
                <img
                    src="https://res.cloudinary.com/da4ulrywk/image/upload/f_auto,q_auto/v1/Pricut/ttbskfkcypxda6ette43"
                    alt="Logo del desarrollador"
                    className="footer__developer-image"
                />
            </div>
        </div>
    </div>
)

export default FooterCredits