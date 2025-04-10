import './style.css'

/**
 * Componente `ImageMaterial` que muestra una imagen específica de un material.
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.url - URL de la imagen que se va a mostrar.
 *
 * @returns {JSX.Element} Un contenedor con una imagen del material.
 */
const ImageMaterial = ({ url }) => {
    return (
        <div>
            <img src={url} alt="imagen de material" className="imageMaterial" />
        </div>
    )
}

export default ImageMaterial
