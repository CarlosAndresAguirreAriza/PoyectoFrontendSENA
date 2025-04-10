import './style.css'


/**
 * Componente para mostrar una tabla de compatibilidad y espesores de un material en una vista móvil.
 * Presenta el nombre del material, su compatibilidad y rango de espesores en una interfaz optimizada para dispositivos móviles.
 *
 * @param {Object} props - Las propiedades del componente.
 * @param {string} props.materialName - El nombre del material a mostrar.
 * @param {string} props.thicknessRange - El rango de espesores compatible con el material.
 * @returns {JSX.Element} El componente de la tabla de compatibilidad para dispositivos móviles.
 *
 * @example
 * <ServiceTableMobile materialName="Acero Inoxidable" thicknessRange="10mm - 15mm" />
 */
const ServiceTableMobile = ({materialName, thicknessRange}) => {

    return (
        <div className="service-table-mobile">
            <div className="service-table-mobile__servicio">
                <h2>{materialName}</h2>
            </div>
            <div className="service-table-mobile__row">
                <div className="service-table-mobile__grosor">
                        <h3>¿Compatible?</h3>
                </div>
                <div className="service-table-mobile__compatibilidad thickness">
                        <h3>Si</h3>
                </div>
            </div>
            <div className="service-table-mobile__row">
                <div className="service-table-mobile__grosor">
                        <h3>Espesor</h3>
                </div>
                <div className="service-table-mobile__compatibilidad thickness">
                        <h3>{thicknessRange}</h3>
                </div>
            </div>
        </div>
    )
}

export default ServiceTableMobile
