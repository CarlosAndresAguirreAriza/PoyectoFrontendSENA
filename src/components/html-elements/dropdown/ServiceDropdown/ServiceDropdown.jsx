import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isFlagCut, isFlagThickness, selectFileService } from '../../../../redux/selectors/fileSelectors'
import { selectServiceNames } from '../../../../redux/selectors/serviceSelectors'
import RenderSvg from '../../../image-svg/RenderSvg/RenderSvg'
import { activateFlagCut, updateFileCorte, updateFilePrice, updateFileQuantity } from '../../../../redux/actions/fileActions'
import { selectFilteredProductServicesByThickness } from '../../../../redux/selectors/productSelectors'

const ServicesDropdown = () => {
    const [isServiceOpen, setIsServiceOpen] = useState(false)

    const isThicknessSelected = useSelector(isFlagThickness)
    const isServiceSelected = useSelector(isFlagCut)

    const fileCorte = useSelector(selectFileService)

    const dispatch = useDispatch()

    const [servicesAvToUse, setServiceAvToUse] = useState([])

    const serviceNames = useSelector(selectServiceNames)
    const servicesAvailable = useSelector(selectFilteredProductServicesByThickness)

    const filterServices = () => {
        let servicesToUse = []
        serviceNames.forEach(sn => {
            if (sn.name === 'Láser CO₂') {
                if (servicesAvailable.CO2Laser) {
                    servicesToUse.push(sn)
                }
            } else if (sn.name === 'Router CNC') {
                if (servicesAvailable.CNCRouter) {
                    servicesToUse.push(sn)
                }
            } else if (sn.name === 'Láser de fibra') {
                if (servicesAvailable.fiberLaser) {
                    servicesToUse.push(sn)
                }
            }

        })

        setServiceAvToUse(servicesToUse)
    }

    const handleReset = () => {
        toggleDropdown()
        filterServices()
        dispatch(updateFileQuantity(1))
        dispatch(updateFilePrice(0))
    }

    const toggleDropdown = () => {
        setIsServiceOpen(!isServiceOpen)
    }

    return (
        <>
            <div className="dropdownParentContainer">
                <div className={`dropdownOnClick ${isServiceSelected && isThicknessSelected ? 'dropdownOnClick__blue' : ''}`} onClick={handleReset} style={{ pointerEvents: !isThicknessSelected ? 'none' : 'auto' }}>
                    {isServiceSelected ? fileCorte.name : 'Corte'}
                    {
                        isServiceOpen && isThicknessSelected ?
                            <RenderSvg alt={'arrow pointing down'} assetsSrc={'/cotizador/arrow-red-down.svg'} className={'dropdownOnClick__svg'} />

                            :

                            isThicknessSelected ?

                                <RenderSvg alt={'arrow pointing up'} assetsSrc={'/cotizador/arrow-red-up.svg'} className={'dropdownOnClick__svg'} />
                                : <></>
                    }
                </div>

                {
                    isServiceOpen && isThicknessSelected ?
                        <>
                            {
                                servicesAvToUse.map((sn, i) => (
                                    <div key={`services-${i}`}
                                        className={'dropdownFirstChild'}
                                        onClick={() => {
                                            dispatch(updateFileCorte(sn))
                                            dispatch(activateFlagCut())
                                            toggleDropdown()
                                        }}>
                                        {sn.name}
                                    </div>
                                ))
                            }
                        </>
                        :
                        <>
                        </>

                }
            </div>
        </>
    )


}

export default ServicesDropdown