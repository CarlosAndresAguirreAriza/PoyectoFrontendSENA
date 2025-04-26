import './style.css'
import ElementSocialMedia from './data/socialMedia'

export const InputForSocialMedia = () => {
    return (
        <div className='social-container'>
        <div className='social-indicator-container'>
            <p className='social-indicator'>O ingresa con</p>
        </div>

        <div className='social-buttons-container'>
            {ElementSocialMedia.map((social, key) => (
            <a className='social-button' href={social.link} key={key}>
                <img src={social.image} className='social-icon' alt={`Método de acceso: ${social.red}`} />
            </a>
            ))}
        </div>
        </div>
    )
}

export default InputForSocialMedia
