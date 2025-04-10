import { Link } from 'react-router-dom'  // Importa useNavigate
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import './Contact.css'
import RenderSvg from '../../components/image-svg/RenderSvg/RenderSvg'
import { useState } from 'react'


// Si no estás usando Redux, puedes eliminar dispatch, setMessage y setStatusCode

const Contact = () => {  // Define el hook navigate
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        text: '',
        phone: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setFormData({
            fullname: '',
            email: '',
            text: '',
            phone: ''
        })
    }

    return (
        <>
            <div className="contact">
                <Navbar scrolledOff={true} />
                <div className="contact__contenido">
                    <div className="contact__contenido--left">
                        <h2 className="contact__contenido--left-h2">Contacto</h2>
                        <p className="contact__contenido--left-descri">
                            Estamos a tu disposición para responder a tus consultas y solicitudes. Completa el formulario de contacto o utiliza la información proporcionada para comunicarte con nosotros. Esperamos atenderte pronto
                        </p>
                        <p className="contact__contenido--left-bold"><span>Teléfono:</span> +593 99 787 8480</p>
                        <p className="contact__contenido--left-bold"><span>Correo electrónico:</span> info@pricut.com</p>
                        <div className="contact__contenido--left-redes">
                            <Link to={'https://ar.pinterest.com/pricutonline/'} target="_blank">
                                <RenderSvg alt={'logo Pinterest'} assetsSrc={'home/icons/mdi_pinterest_dark.svg'} />
                            </Link>
                            <Link to={'https://www.youtube.com/@pricutonline'} target="_blank">
                                <RenderSvg alt={'logo Youtube'} assetsSrc={'home/icons/mdi_youtube_dark.svg'} />
                            </Link>
                            <Link to={'https://twitter.com/pricutonline'} target="_blank">
                                <RenderSvg alt={'logo Twitter'} assetsSrc={'home/icons/mdi_twitter_dark.svg'} />
                            </Link>
                            <Link to={'https://www.instagram.com/pricutonline/'} target="_blank">
                                <RenderSvg alt={'logo Instagram'} assetsSrc={'home/icons/mdi_instagram_dark.svg'} />
                            </Link>
                            <Link to={'https://www.linkedin.com/company/pricutonline'} target="_blank">
                                <RenderSvg alt={'logo LinkedIn'} assetsSrc={'home/icons/linkiedindark.svg'} />
                            </Link>
                            <Link to={'https://www.facebook.com/pricutonline'} target="_blank">
                                <RenderSvg alt={'logo Facebook'} assetsSrc={'home/icons/Vector.svg'} />
                            </Link>
                            <Link to={'https://www.tiktok.com/@pricutonline'} target="_blank">
                                <RenderSvg alt={'logo TikTok'} assetsSrc={'home/icons/tiktok_dark.svg'} />
                            </Link>
                        </div>
                    </div>
                    <div className="contact__contenido--right">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input type="text" id="name" name="fullname" value={formData.fullname} onChange={handleChange} placeholder="Nombre y apellido" required />
                            </div>
                            <div className="form-group">
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Correo electrónico" required />
                            </div>
                            <div className="form-group">
                                <input type="phone" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Teléfono" />
                            </div>
                            <div className="form-group">
                                <textarea id="message" name="text" value={formData.text} onChange={handleChange} placeholder="Su mensaje"></textarea>
                            </div>

                            <div className="form-group">
                                <button type="submit">Hacer pedido</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Contact
