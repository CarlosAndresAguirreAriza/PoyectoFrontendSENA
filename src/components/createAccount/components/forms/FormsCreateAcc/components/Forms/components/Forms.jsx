import './style.css'

const Forms = ({nameTitle, type, img_icon ='', onToggle}) => {
  return (
    <>
        <div className="Form__CreateAccount__form__conteiner">
            <label className="Form__CreateAccount__form__label">{nameTitle}</label>
            <div className='Form__CreateAccount__form__input__wrapper'>
                <input className="Form__CreateAccount__form__input" type={type} placeholder={nameTitle}/>
                {img_icon && (
                  <span className='Form__CreateAccount__form__input__span-icon' onClick={onToggle}>
                      <img className='' src={img_icon} alt="" />
                  </span>
                )}
            </div>
        </div>
    </>
  )
}

export default Forms