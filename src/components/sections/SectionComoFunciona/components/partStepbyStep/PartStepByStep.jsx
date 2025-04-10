import './style.css'
import RenderTextSvg from '../RenderTextSvg/RenderTextSvg'

/**
 * Componente `PartStepByStep`.
 *
 * Este componente muestra los pasos del proceso de manera gráfica, incluyendo iconos e instrucciones.
 *
 * @component
 * @returns {JSX.Element} Elemento JSX que muestra cada paso en el flujo del proceso.
 *
 * @example
 * // Ejemplo de uso
 * <PartStepByStep />
 */
const PartStepByStep = () => {
    return (
        <>
            <div className="como-funciona">
                <div className="como-funciona__step">
                    {/* SUBIDA */}
                    <RenderTextSvg className={'como-funciona__step__upload'} assetsSrc={'home/icons/upload-icon.svg'} alt={'upload icon'} text={'Sube tu archivo vectorizado DXF'} />
                    {/* FLECHA */}
                    <RenderTextSvg className={'como-funciona__step__arrow'} assetsSrc={'home/arrows/blue-arrow-to-right-1.svg'} alt={'blue arrow to right'} />
                    <RenderTextSvg className={'como-funciona__step__arrowDown'} assetsSrc={'home/arrows/blue-arrow-to-down-1.svg'} alt={'arrow pointing down'} />
                </div>
                <div className="como-funciona__step">
                    {/* COSTO */}
                    <RenderTextSvg className={'como-funciona__step__empty'} assetsSrc={'home/icons/empty-page-icon.svg'} alt={'empty page icon'} text={'Obtén una cotización instantánea'} />
                    {/* FLECHA */}
                    <RenderTextSvg className={'como-funciona__step__arrow'} assetsSrc={'home/arrows/blue-arrow-to-right-1.svg'} alt={'blue arrow to right'} />
                    <RenderTextSvg className={'como-funciona__step__arrowDown'} assetsSrc={'home/arrows/blue-arrow-to-down-1.svg'} alt={'arrow pointing down'} />
                </div>
                <div className="como-funciona__step">
                    {/* LASER */}
                    <RenderTextSvg className={'como-funciona__step__laser'} assetsSrc={'home/icons/laser-icon.svg'} alt={'laser cutting icon'} text={'Espera la producción de tus piezas'} />
                    {/* FLECHA */}
                    <RenderTextSvg className={'como-funciona__step__arrow'} assetsSrc={'home/arrows/blue-arrow-to-right-1.svg'} alt={'blue arrow to right'} />
                    <RenderTextSvg className={'como-funciona__step__arrowDown'} assetsSrc={'home/arrows/blue-arrow-to-down-1.svg'} alt={'arrow pointing down'} />

                </div>
                <div className="como-funciona__step">
                    {/* ENVIO */}
                    <RenderTextSvg className={'como-funciona__step__package'} assetsSrc={'home/icons/box-icon.svg'} alt={'package icon'} text={'Recibe tu pedido'} />
                </div>
            </div>

        </>
    )
}

export default PartStepByStep