

/**
 * Componente `RenderSvg`.
 *
 * Este componente muestra una imagen SVG a partir de una ruta proporcionada.
 * Permite aplicar una clase CSS personalizada y asignar un texto alternativo.
 *
 * @component
 * @param {Object} props - Las propiedades del componente.
 * @param {string} props.className - La clase CSS que se aplicará a la imagen.
 * @param {string} props.assetsSrc - La ruta del archivo SVG a mostrar, relativa a la carpeta `/assets`.
 * @param {string} props.alt - El texto alternativo para la imagen, útil para accesibilidad.
 * @returns {JSX.Element} Elemento JSX que renderiza la imagen SVG.
 *
 * @example
 * // Ejemplo de uso
 * <RenderSvg className="custom-class" assetsSrc="images/icon.svg" alt="Icono de ejemplo" />
 */
const RenderSvg = ({ className, assetsSrc, alt }) => {
    return (
        <>
            <img className={className} src={`/assets/${assetsSrc}`} alt={alt} />
        </>
    )
}

export default RenderSvg