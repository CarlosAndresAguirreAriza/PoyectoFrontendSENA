import { useState } from 'react'
import Forms from './components/Forms'
import { ButtonSubmitCreateAcc } from '../ButtonSubmitCreateAcc/ButtonSubmitCreateAcc'
import AcceptPolAndPriv from '../AcceptPolAndPriv/AcceptPolAndPriv'



export const FormsCreateAcc = () => {
    const [passVis, setPassVis] = useState(false)
    const handlePasswordVisibility = ()=>{
        setPassVis(!passVis)
    }



  return (
    <>
        <form className='Form__CreateAccount' action="">
            <Forms
                nameTitle={'Nombre'}
                type={'text'}
            />
            <Forms
                nameTitle={'Apellido'}
                type={'text'}
            />
            <Forms
                nameTitle={'Correo electronico'}
                type={'email'}
            />
            <Forms
                nameTitle={'Contraseña'}
                type={passVis?'text':'password'}
                img_icon={passVis ? 'eye_on':'eye_off'}
                onToggle={handlePasswordVisibility}
            />
            <Forms
                nameTitle={'Confirme contraseña'}
                type={passVis?'text':'password'}
                img_icon={passVis ? 'eye_on':'eye_off'}
                onToggle={handlePasswordVisibility}
            />            
            <AcceptPolAndPriv/>
            <ButtonSubmitCreateAcc/>
        </form>
    </>
  )
}
