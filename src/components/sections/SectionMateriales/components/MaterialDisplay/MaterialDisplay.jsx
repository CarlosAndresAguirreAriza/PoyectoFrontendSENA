import Card from '../Card/Card'
import './style.css'

/**
 * Componente que muestra la información de un material y su lista de tipos.
 *
 * Este componente recibe un título y una lista de materiales, y renderiza 
 * cada tipo de material en un componente `Card`.
 *
 * @component
 * @param {Object} props - Props del componente.
 * @param {string} props.title - El título del material.
 * @param {Tipo[]} props.listMaterial - Lista de tipos de materiales.
 * @returns {JSX.Element} Un elemento JSX que representa un material y sus tipos.
 *
 * @example
 * // Ejemplo de uso
 * <MaterialDisplay title="Material de Ejemplo" listMaterial={[]} />
 */
const MaterialDisplay = ({ title, listMaterial }) => {

    return (
        <div className="material-display">
            <div className="material-display-header">
                <h3 className="material-display-title">{title}</h3>
                <img
                    className="material-display-line"
                    src="/assets/home/lines/linea-material.svg"
                    alt="Linea de abajo del titulo"
                />
            </div>
            <div className="material-list">
                {listMaterial.map((material, index) => (
                    <Card
                        key={index}
                        name={material.base_info.name}
                        imgSrc={material.images.texture_image}
                        code={material.base_info.code}
                    />
                ))}
            </div>
        </div>
    )
}

export default MaterialDisplay
