
import LoginForm from './components/LoginForm/LoginForm'
import './style.css'
import ImageDesktop from '../components/ImageDesktop/ImageDesktop'
//import InputForSocialMedia from '../components/InputForSocialMedia/InputForSocialMedia'
import { Link } from 'react-router-dom'
import TextFormularioLogin from './components/TextFormularioLogin/TextFormularioLogin'

const SectionLogin = () => {
  return (
    <div className='container-login'>
      <div className='container-login__components'>
        <TextFormularioLogin/>
        <LoginForm/>
        {/* <InputForSocialMedia/> */}
        <div className='container-login__components__text'>
          <p className='text-no-account text-shared'>¿No tienes cuenta? <Link className='link-create' to='/create_account'>Crear cuenta</Link></p>
          <p className='text-forgot-password text-shared'>¿Olvidaste tu contraseña? <Link className='link-recover'>Recuperar contraseña</Link></p>
        </div>
      </div>
      <div className='container-login__image'>
        <ImageDesktop/>
      </div>
    </div>
  )
}

export default SectionLogin
