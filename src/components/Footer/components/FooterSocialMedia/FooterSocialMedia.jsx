import './style.css'

/**
 * Componente de redes sociales del pie de página.
 * Muestra iconos de redes sociales con enlaces predefinidos.
 *
 * @component
 * @returns {JSX.Element} El componente de redes sociales.
 */
const FooterSocialMedia = () => (
    <div className="footer__social-media">
        <div className="footer__social-links">
            <img
                src="https://res.cloudinary.com/da4ulrywk/image/upload/f_auto,q_auto/v1/Pricut/naokfpncirsue7z4pnro"
                alt="Icono de red social"
                className="footer__social-icon"
            />
            <img
                src="https://res.cloudinary.com/da4ulrywk/image/upload/f_auto,q_auto/v1/Pricut/gldgmyosjhr1my4gtpuz"
                alt="Icono de red social"
                className="footer__social-icon"
            />
            <img
                src="https://res.cloudinary.com/da4ulrywk/image/upload/f_auto,q_auto/v1/Pricut/ai63wkfswpctopkgryju"
                alt="Icono de red social"
                className="footer__social-icon"
            />
            <img
                src="https://res.cloudinary.com/da4ulrywk/image/upload/f_auto,q_auto/v1/Pricut/iff1l6s3kgx3uajpefxs"
                alt="Icono de red social"
                className="footer__social-icon"
            />
            <img
                src="https://res.cloudinary.com/da4ulrywk/image/upload/f_auto,q_auto/v1/Pricut/uzxbs7k5c4wgxxcmx3m6"
                alt="Icono de red social"
                className="footer__social-icon"
            />
        </div>
        <div className="footer__credits-line"></div>
    </div>
)

export default FooterSocialMedia