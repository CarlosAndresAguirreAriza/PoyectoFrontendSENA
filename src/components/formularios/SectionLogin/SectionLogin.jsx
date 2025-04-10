import TextLogin from './components/TextForrmularioLogin/TextFormularioLogin'
import LoginForm from './components/LoginForm/LoginForm'
import InputForSocialMedia from './components/InputForSocialMedia/InputForSocialMedia'
import { ImageLoginDesktop } from './components/ImageLoginDesktop/ImageLoginDesktop'
import './style.css'

const SectionLogin = () => {
  return (
    <>
    <div className='conteinerLogin'>
      <div className='conteinerLogin__components'>
          <TextLogin/>
          <LoginForm/>
          <InputForSocialMedia/>
      </div>
      <div className='conteinerLogin__image'>
          <ImageLoginDesktop/>
      </div>
    </div>
    </>
  )
}

export default SectionLogin
