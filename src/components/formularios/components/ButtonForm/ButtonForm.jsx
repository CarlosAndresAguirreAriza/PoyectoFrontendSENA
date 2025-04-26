import './style.css'

export const ButtonForm = ({ loading, text }) => {
  return (
    <button className={`form-button-submit ${loading && 'button-disable'}`}>
      { text ? text : 'Enviar' }
    </button>
  )
}

export default ButtonForm
