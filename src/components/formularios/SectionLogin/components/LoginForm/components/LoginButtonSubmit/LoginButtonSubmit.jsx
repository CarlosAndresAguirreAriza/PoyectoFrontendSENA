import './style.css'


export const LoginButtonSubmit = ({loading}) => {
  return (
    <button className={`login__button__submit ${loading && 'button_disable'}`}>Iniciar sesión</button>
  )
}

export default LoginButtonSubmit