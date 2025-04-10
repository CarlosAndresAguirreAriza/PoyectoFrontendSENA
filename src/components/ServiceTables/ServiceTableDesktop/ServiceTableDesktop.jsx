import './style.css'

/**
 * Componente para mostrar una tabla de materiales en una vista de escritorio.
 *
 * @param {Object} props - Las propiedades del componente.
 * @param {Array<Object>} props.infoTable - Información de los materiales. Cada objeto debe incluir un valor y un objeto `compatibility_cut`.
 * @returns {JSX.Element} El componente de tabla de materiales para dispositivos de escritorio.
 *
 * @example
 * const infoTable = [
 *     { value: "10", compatibility_cut: { laser_fiber: true, laser_co2: false, router_cnc: true } },
 *     { value: "15", compatibility_cut: { laser_fiber: false, laser_co2: true, router_cnc: false } }
 * ];
 *
 * <ServiceTableDesktop infoTable={infoTable} />
 */
const ServiceTableDesktop = ({tableInfo}) => {
    return (
        <div className="section-table-desktop">
            <div className="section">
                <div className="section-title-desktop">
                    <h3>Material</h3>
                </div>
                {
                    tableInfo.map((table, index) => (
                        table.compatibility && (
                        <div className={`item item-laser-fiber ${index % 2 === 0 ? 'even' : 'odd'}`} key={table.material}>
                            <h4 className="item-value">
                                {table.material}
                            </h4>
                        </div>
                        )
                    ))
                }
            </div>
            <div className="section">
                <div className="section-title-desktop">
                    <h3>Compatibilidad</h3>
                </div>
                {
                    tableInfo.map((table, index) => (
                        table.compatibility && (
                        <div className={`item item-laser-fiber ${index % 2 === 0 ? 'even' : 'odd'}`} key={table.material}>
                            <h4 className="item-value">
                                Si
                            </h4>
                        </div>
                        )
                    ))
                }
            </div>
            <div className="section">
                <div className="section-title-desktop">
                    <h3>Espesores</h3>
                </div>
                {
                    tableInfo.map((table, index) => (
                        table.compatibility && (
                        <div className={`item item-laser-fiber ${index % 2 === 0 ? 'even' : 'odd'}`} key={table.material}>
                            <h4 className="item-value">
                                {table.thickness}
                            </h4>
                        </div>
                        )
                    ))
                }
            </div>
        </div>
    )
}

export default ServiceTableDesktop