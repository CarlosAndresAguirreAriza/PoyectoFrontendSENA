import './style.css'

import FooterContact from './components/FooterContact/FooterContact'
import FooterCredits from './components/FooterCredits/FooterCredits'
import FooterLinks from './components/FooterLinks/FooterLinks'
import FooterLogoSection from './components/FooterLogoSection/FooterLogoSection'
import FooterSocialMedia from './components/FooterSocialMedia/FooterSocialMedia'

/**
 * Componente principal del pie de página.
 * Contiene secciones como el logo, información de contacto, enlaces de navegación, redes sociales y créditos.
 *
 * @component
 * @returns {JSX.Element} El componente de pie de página completo.
 */
const Footer = () => (
    <footer className="footer">
        <div className="footer_main">
            <div className="footer__container">
                <FooterLogoSection />
                <FooterContact />
            </div>
            <FooterLinks />
        </div>
        <div className="footer-last">
            <FooterSocialMedia />
            <FooterCredits />
        </div>
    </footer>
)

export default Footer
