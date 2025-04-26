import { Link } from 'react-router-dom'
import ImageDesktop from '../components/ImageDesktop/ImageDesktop'
import RegisterForm from './components/RegisterForm/RegisterForm'
import TextRegister from './components/TextRegister/TextRegister'
import './style.css'

const SectionRegister = () => {
    return (
        <div className='conteiner-register'>
            <div className='container-register__components'>
                <TextRegister />
                <RegisterForm />
                {/* <InputForSocialMedia/> */}
                <div className='container-register__components__text'>
                    <p className='text-no-account text-shared'>¿Tienes una cuenta? <Link className='link-create' to='/login'>inicia sesion</Link></p>
                </div>

            </div>
            <div className='container-register__image'>
                <ImageDesktop/>
            </div>
        </div>
    )
}

export default SectionRegister
