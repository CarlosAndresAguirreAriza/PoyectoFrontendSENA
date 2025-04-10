import './style.css'
import ElementSocialMedia from './data/socialMedia'


export const InputForSocialMedia = () => {
    return (
        <div className='login__socialMedia__conteiner'>
            <div className='login__indicationSocialMedia__conteiner'>
                <p className='indicationSocialMedia'>O ingresa con</p>
            </div>

            <div className='login__socialMedia__conteiner'>
                {ElementSocialMedia.map((social, key)=>(
                    <a className='login__sociaMedia-Contenedor' href={social.link}  key={key}>
                        <img src={social.image} className='login__image' alt={`Metodo login: ${social.red}`}/>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default InputForSocialMedia