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
 * <MaterialTableDesktop infoTable={infoTable} />
 */
const MaterialTableDesktop = ({ infoTable }) => {
        return (
        <div className="material-table-desktop">
            <div className="section section-thickness">
                <div className="section-title-desktop">
                    <h3>Espesores</h3>
                </div>
                {infoTable.map((el, index) => (
                    <div key={index} className={`item item-thickness ${index % 2 === 0 ? 'even' : 'odd'}`}>
                        <h4 className="item-value">{el.value}</h4>
                    </div>
                ))}
            </div>
            <div className="section section-laser-fiber">
                <div className="section-title-desktop">
                    <h3>Láser de fibra</h3>
                </div>
                {infoTable.map((el, index) => (
                    <div key={index} className={`item item-laser-fiber ${index % 2 === 0 ? 'even' : 'odd'}`}>
                        <h4 className="item-value">
                            {el.compatibility_cut.laser_fibra ? 'Si' : 'No'}
                        </h4>
                    </div>
                ))}
            </div>
            <div className="section section-laser-co2">
                <div className="section-title-desktop">
                    <h3>Láser CO₂</h3>
                </div>
                {infoTable.map((el, index) => (
                    <div key={index} className={`item item-laser-co2 ${index % 2 === 0 ? 'even' : 'odd'}`}>
                        <h4 className="item-value">
                            {el.compatibility_cut.laser_co2 ? 'Si' : 'No'}
                        </h4>
                    </div>
                ))}
            </div>
            <div className="section section-router-cnc">
                <div className="section-title-desktop">
                    <h3>Router CNC</h3>
                </div>
                {infoTable.map((el, index) => (
                    <div key={index} className={`item item-router-cnc ${index % 2 === 0 ? 'even' : 'odd'}`}>
                        <h4 className="item-value">
                            {el.compatibility_cut.router_cnc ? 'Si' : 'No'}
                        </h4>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MaterialTableDesktop