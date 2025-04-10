import './style.css'

/**
 * Componente `SectionAboutMaterials` que muestra información sobre un material específico,
 * incluyendo su descripción y sus usos comunes.
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.material - Nombre del material.
 * @param {string} props.sobre - Descripción detallada sobre el material.
 * @param {string} props.usos - Lista o descripción de los usos comunes del material.
 *
 * @returns {JSX.Element} Una sección con información sobre un material y sus usos.
 */
const SectionAboutMaterials = ({ material, sobre, usos }) => {
    return (
        <div className='about-container'>
            <div className="about-material-container">
                <h3 className="about-material-title">Sobre el {material}</h3>
                <p className="about-material-description">{sobre}</p>
            </div>
            <div className="material-uses-container">
                <h3 className="material-uses-title">Usos comunes</h3>
                <p className="material-uses-description">{usos}</p>
            </div>
        </div>
    )
}

export default SectionAboutMaterials
