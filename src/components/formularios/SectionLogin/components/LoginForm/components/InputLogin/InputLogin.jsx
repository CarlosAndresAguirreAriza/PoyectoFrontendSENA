import './style.css'

const InputLogin = ({ nameTitle, placeholder, type, name, value, onChange, errorMessage, iconPass = '', onToggle }) => {
  return (
    <div className='formLogin__cont'>
      <label className='formLogin__label' htmlFor={name}>{nameTitle}</label>
      <div className='formLogin__inputWrapper'>
        <input
          className={`formLogin__input ${errorMessage ? 'input-error' : ''}`}
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {
          errorMessage &&
          <span className={`formLogin__iconError ${iconPass ? 'input-error_form' : ''}`}>
            <img src='https://res.cloudinary.com/da4ulrywk/image/upload/f_auto,q_auto/v1/Pricut/bwfas2i1isknzljerncj' alt="" />
          </span>
        }
        {iconPass &&
          <span className='formLogin__icon' onClick={onToggle}>
            <img src={iconPass} className='formLogin__icon__eye' alt="" />
          </span>
        }
      </div>
      {errorMessage && <p className='error-text'>{errorMessage}</p>}
    </div>
  )
}

export default InputLogin
