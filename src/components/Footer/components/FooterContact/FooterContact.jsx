import './style.css'

/**
 * Componente FooterContact
 *
 * Renderiza la información de contacto en el pie de página, incluyendo la dirección, teléfono y correo electrónico
 * de la empresa. Cada tipo de información se acompaña de un ícono representativo.
 *
 * @component
 * @example
 * return (
 *   <FooterContact />
 * )
 *
 * @returns {JSX.Element} La sección de contacto del pie de página con dirección, teléfono y correo electrónico.
 */
const FooterContact = () => (
    <address className="footer__contact">
        <div className="footer__contact-item">
            <img
                src="https://res.cloudinary.com/da4ulrywk/image/upload/f_auto,q_auto/v1/Pricut/puoadarkdsagqjolz1d8"
                alt="Ubicación"
                className="footer__contact-icon"
            />
            <p className="footer__contact-text">
                E7F Pasaje Soria Armas N5-199 y Villa Vega. Quito - Ecuador
            </p>
        </div>
        <div className="footer__contact-item">
            <img
                src="https://res.cloudinary.com/da4ulrywk/image/upload/f_auto,q_auto/v1/Pricut/ba4ittw8ejug185t9zxr"
                alt="Teléfono"
                className="footer__contact-icon"
            />
            <p className="footer__contact-text">+54 2622314506</p>
        </div>
        <div className="footer__contact-item">
            <img
                src="https://res.cloudinary.com/da4ulrywk/image/upload/f_auto,q_auto/v1/Pricut/ibafwjmqp1spunpqrcbt"
                alt="Correo electrónico"
                className="footer__contact-icon"
            />
            <p className="footer__contact-text">info@pricut.com</p>
        </div>
    </address>
)

export default FooterContact
