
import './style.css'
import BackgroundButton from '../../buttons/BackgroundButton/BackgroundButton'


import RenderSvg from '../../image-svg/RenderSvg/RenderSvg'
import PartStepByStep from './components/partStepbyStep/PartStepByStep'


/**
 * Componente `SectionComoFunciona`.
 *
 * Este componente representa la sección "Como funciona", que incluye un título,
 * pasos detallados para explicar el proceso, un botón de acción y varias imágenes SVG decorativas.
 *
 * @component
 * @returns {JSX.Element} Elemento JSX que muestra la sección de funcionamiento.
 *
 * @example
 * // Ejemplo de uso
 * <SectionComoFunciona />
 */
const SectionComoFunciona = () => {
  return (
    <>
      <div className="comoFunciona">

        <h3 className='comoFunciona__h3'>¿Como funciona?</h3>
        <PartStepByStep />
        <div className='comoFunciona__btn'>
          <BackgroundButton text={'Cotiza ahora'} redirect={'/quote'} background_color="red"/>
        </div>

        <RenderSvg assetsSrc={'home/shapes/engine-right.svg'} alt={'engine shape'} className={'comoFunciona__engine--right'} />
        <RenderSvg assetsSrc={'home/shapes/engine-left.svg'} alt={'engine shape'} className={'comoFunciona__engine--left'} />
      </div>

    </>
  )
}

export default SectionComoFunciona