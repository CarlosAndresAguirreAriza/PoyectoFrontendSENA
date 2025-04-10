import { useEffect, useState } from 'react'
import './style.css'

/**
 * Componente para mostrar una tabla de materiales en una vista móvil.
 *
 * @param {Object} props - Las propiedades del componente.
 * @param {string} props.servicio - Nombre del servicio a mostrar en el encabezado.
 * @param {Array<Object>} props.infoTable - Información de los materiales. Cada objeto debe incluir un valor y un objeto `compatibility_cut`.
 * @param {string} props.codeService - Código del servicio usado para determinar la compatibilidad.
 * @returns {JSX.Element} El componente de tabla de materiales para dispositivos móviles.
 *
 * @example
 * const infoTable = [
 *     { value: "10", compatibility_cut: { laser_fiber: true, router_cnc: false } },
 *     { value: "15", compatibility_cut: { laser_fiber: false, router_cnc: true } }
 * ];
 *
 * <MaterialTableMobile
 *     servicio="Corte de madera"
 *     infoTable={infoTable}
 *     codeService="laser_fiber"
 * />
 */
const MaterialTableMobile = ({ servicio, infoTable, codeService }) => {
    const [grosores, setGrosores] = useState([])

    useEffect(() => {
        if (infoTable) {
            const grosores = infoTable.map((el) => {
                let compatibilidad = el.compatibility_cut[codeService]


                return {
                    grosor: el.value,
                    compatibilidad: compatibilidad
                }
            })
            setGrosores(grosores)
        }
    }, [infoTable])

    return (
        <div className="material-table-mobile">
            <div className="material-table-mobile__servicio">
                <h2>{servicio}</h2>
            </div>
            {
                grosores.map((el, index) => (
                    <div key={index} className="material-table-mobile__row">
                        <div className="material-table-mobile__grosor">
                            <h3>{el.grosor}mm</h3>
                        </div>
                        <div className="material-table-mobile__compatibilidad">
                            <p>{el.compatibilidad ? 'Si' : 'No'}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default MaterialTableMobile