import MaterialDisplay from './components/MaterialDisplay/MaterialDisplay'
import './style.css'
import useInfoStore from '../../../context/infoStorage'

/**
 * Componente que representa una sección de materiales.
 *
 * Este componente itera sobre una lista de materiales y renderiza un 
 * componente `MaterialDisplay` para cada material.
 *
 * @component
 * @returns {JSX.Element} Un elemento JSX que representa una sección de materiales.
 *
 * @example
 * // Ejemplo de uso
 * <SectionMateriales />
 *
 * @typedef {Object} Material
 * @property {string} name - El nombre del material.
 * @property {Tipo[]} tipos - La lista de tipos de este material.
 *
 */
const SectionMateriales = () => {
    const { groupedMaterials } = useInfoStore()

    return (
        <div className='section-materiales'>
            <div className='section-materiales-contain'>
                <h3 className='section-materiales-title'>Materiales</h3>
                <div className='section-materiales-list'>
                    {
                        groupedMaterials.map((material, index) => (

                            <MaterialDisplay
                                title={material.category}
                                listMaterial={material.items}
                                key={index}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SectionMateriales
