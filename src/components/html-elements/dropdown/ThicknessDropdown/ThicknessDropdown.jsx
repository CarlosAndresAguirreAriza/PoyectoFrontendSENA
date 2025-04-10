import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectFilteredProductsThicknesses } from '../../../../redux/selectors/productSelectors'
import RenderSvg from '../../../image-svg/RenderSvg/RenderSvg'
import { isFlagMaterial, isFlagThickness, selectFileMaterialThickness } from '../../../../redux/selectors/fileSelectors'
import { activateFlagThickness, deactivateFlagCut, updateFileCorte, updateFilePrice, updateFileQuantity, updateFileThickness } from '../../../../redux/actions/fileActions'

const ThicknessDropdown = () => {
    const [isThicknessOpen, setIsThicknessOpen] = useState(false)

    const isMaterialSelected = useSelector(isFlagMaterial)
    const isThicknessSelected = useSelector(isFlagThickness)

    const fileMaterialThickness = useSelector(selectFileMaterialThickness)

    const dispatch = useDispatch()

    const productThicknesses = useSelector(selectFilteredProductsThicknesses)

    const toggleDropdown = () => {
        setIsThicknessOpen(!isThicknessOpen)
    }

    return (
        <>
            <div className="dropdownParentContainer">
                <div className={`dropdownOnClick ${isThicknessSelected && isMaterialSelected ? 'dropdownOnClick__blue' : ''}`} onClick={() => {
                    toggleDropdown(); dispatch(deactivateFlagCut()); dispatch(updateFileCorte('Corte')); dispatch(updateFileQuantity(1))
                    dispatch(updateFilePrice(0))
                }} style={{ pointerEvents: !isMaterialSelected ? 'none' : 'auto' }}>
                    {isThicknessSelected ? fileMaterialThickness.thickness : 'Grosor'}
                    {
                        isThicknessOpen && isMaterialSelected ?
                            <RenderSvg alt={'arrow pointing down'} assetsSrc={'/cotizador/arrow-red-down.svg'} className={'dropdownOnClick__svg'} />

                            :


                            isMaterialSelected ?

                                <RenderSvg alt={'arrow pointing up'} assetsSrc={'/cotizador/arrow-red-up.svg'} className={'dropdownOnClick__svg'} />
                                :
                                <></>
                    }


                </div>
                {

                    isThicknessOpen && isMaterialSelected ?
                        <>
                            {
                                productThicknesses.map((pt, i) => (
                                    <div key={`thickness-${i}`}
                                        className={'dropdownFirstChild'}
                                        onClick={() => {
                                            dispatch(updateFileThickness(pt))
                                            dispatch(activateFlagThickness())
                                            toggleDropdown()
                                        }}
                                    >
                                        {pt.thickness} <span>mm</span>
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

export default ThicknessDropdown