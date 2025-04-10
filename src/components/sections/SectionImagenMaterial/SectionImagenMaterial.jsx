import ImageMaterial from './components/ImageMaterial/ImageMaterial'
import './style.css'

/**
 * Componente `SectionImagenMaterial` que muestra una sección con múltiples imágenes relacionadas
 * con un material, incluyendo su descripción, información, usos y textura.
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.description_image - URL de la imagen que describe el material.
 * @param {string} props.about_image - URL de la imagen que muestra información adicional sobre el material.
 * @param {string} props.uses_image - URL de la imagen que ilustra los usos del material.
 * @param {string} props.texture_image - URL de la imagen que muestra la textura del material.
 *
 * @returns {JSX.Element} Una sección que contiene varias imágenes relacionadas con un material.
 */
const SectionImagenMaterial = ({ description_image, about_image, uses_image, texture_image }) => {
    return (
        <div className="section-imagen-material">
            <ImageMaterial url={description_image} />
            <ImageMaterial url={about_image} />
            <ImageMaterial url={uses_image} />
            <ImageMaterial url={texture_image} />
        </div>
    )
}

export default SectionImagenMaterial
