import { useState } from 'react'
import './style.css'

const Breadcrumb = () => {
  const [pasos, setPasos] = useState([false, false, false, false])

  return (
    <div className='migasDePan'>
      {pasos.map((paso, index) => (
        <div key={index} className='paso'>
          <div
            className={
              paso
                ? 'numero-completo'
                : index > 0 && pasos[index - 1]
                ? 'numero-incompleto siguiente'
                : 'numero-incompleto'
            }
          >
            <p className={!paso ? 'completo-texto' : 'incompleto'}>{index + 1}</p>
            <p className={paso ? 'completo-check' : 'incompleto'}></p>
          </div>

          {index < pasos.length - 1 && (
            <div className={paso ? 'linea-completo' : 'linea-incompleto'}></div>
          )}
        </div>
      ))}
      <button onClick={() => {
        //QUiero que peuda activar todos los pasos uno a uno con este boton para testaer 
        if(pasos[0] === false){
          setPasos([true, false, false, false])
        }else if(pasos[1] === false){
          setPasos([true, true, false, false])
        } else if(pasos[2] === false){
          setPasos([true, true, true, false])
        } else if(pasos[3] === false){
          setPasos([true, true, true, true])
        } else {
          setPasos([false, false, false, false])
        }
      }}>siguiente</button>
    </div>
  )
}

export default Breadcrumb
