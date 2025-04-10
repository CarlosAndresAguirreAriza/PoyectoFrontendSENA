import React from 'react'

const AcceptPolAndPriv = () => {
  return (
    <div>
        <input required type="checkbox" onInvalid='Debe aceptar los terminos y condiciones'/>
        <label>Acepto todos los Terminos y Politicas de Privacidad</label>
    </div>
  )
}

export default AcceptPolAndPriv