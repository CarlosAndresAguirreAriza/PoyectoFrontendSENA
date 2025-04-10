import './RenderTextSvg.css'
import RenderSvg from '../../../../image-svg/RenderSvg/RenderSvg'

/**
 * Componente `RenderTextSvg`.
 *
 * Este componente muestra una imagen SVG con texto opcional, utilizado para representar
 * pasos en el proceso de forma gráfica y textual.
 *
 * @component
 * @param {Object} props - Las propiedades del componente.
 * @param {string} props.className - La clase CSS que se aplicará al SVG.
 * @param {string} props.assetsSrc - La ruta de la imagen SVG a mostrar.
 * @param {string} props.alt - El texto alternativo para la imagen SVG.
 * @param {string} [props.text] - Texto adicional que se muestra junto a la imagen.
 * @returns {JSX.Element} Elemento JSX que muestra la imagen SVG con el texto.
 *
 * @example
 * // Ejemplo de uso
 * <RenderTextSvg className="step-icon" assetsSrc="path/to/icon.svg" alt="description of icon" text="Step description" />
 */
const RenderTextSvg = ({ className, assetsSrc, alt, text }) => {
    return (
        <div className={'renderTextSvg'}>
            <RenderSvg className={className} assetsSrc={assetsSrc} alt={alt} />
            {
                text ? <h5 className='renderTextSvg__h5'>{text}</h5> : <></>
            }
        </div>
    )
}

export default RenderTextSvg