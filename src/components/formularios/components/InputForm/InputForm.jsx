import './style.css'

const InputForm = ({ nameTitle, placeholder, type, name, value, onChange, errorMessage, iconPass = '', onToggle }) => {
  return (
    <div className='form-input-container'>
      <label className='form-input-label' htmlFor={name}>{nameTitle}</label>
      <div className='form-input-wrapper'>
        <input
          className={`form-input ${errorMessage ? 'input-error' : ''}`}
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {
          errorMessage &&
          <span className={`form-icon-error ${iconPass ? 'input-error-icon-shifted' : ''}`}>
            <img src='https://res.cloudinary.com/da4ulrywk/image/upload/f_auto,q_auto/v1/Pricut/bwfas2i1isknzljerncj' alt="" />
          </span>
        }
        {iconPass &&
          <span className='form-icon-toggle' onClick={onToggle}>
            <img src={iconPass} className='form-icon-eye' alt="" />
          </span>
        }
      </div>
      {errorMessage && <p className='error-text'>{errorMessage}</p>}
    </div>
  )
}

export default InputForm
