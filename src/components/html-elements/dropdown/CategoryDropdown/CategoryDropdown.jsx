import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCategoryNames } from '../../../../redux/selectors/categorySelectors'
import { selectComp, selectMaderas, selectMetales, selectPlasticos } from '../../../../redux/selectors/materialSelectors'
import { activateFlagMaterial, deactivateFlagMaterial, deactivateFlagThickness, updateFileMaterialName, deactivateFlagCut, updateFileCorte, updateFileThickness, updateFileQuantity, updateFilePrice } from '../../../../redux/actions/fileActions'
import RenderSvg from '../../../image-svg/RenderSvg/RenderSvg'
import { getFilteredProductsByMaterialId } from '../../../../redux/actions/productActions'
import { isFlagMaterial, selectFileMaterialname } from '../../../../redux/selectors/fileSelectors.js'

const CategoryDropdown = () => {
    const [isCategoryOpen, setIsCategoryOpen] = useState(false)
    const [currentMaterialSelection, setCurrentMaterialSelection] = useState([])
    const [openDropdownIndex, setOpenDropdownIndex] = useState(null)

    const currentMaterialName = useSelector(selectFileMaterialname)

    const dispatch = useDispatch()

    const categoryNames = useSelector(selectCategoryNames)

    const metales = useSelector(selectMetales)
    const maderas = useSelector(selectMaderas)
    const compuestos = useSelector(selectComp)
    const plasticos = useSelector(selectPlasticos)

    const isMaterialSelected = useSelector(isFlagMaterial)

    const resetDropdowns = () => {
        toggleDropdown()
        setOpenDropdownIndex(null)
        dispatch(deactivateFlagMaterial())
        dispatch(deactivateFlagThickness())
        dispatch(deactivateFlagCut())
        dispatch(updateFileCorte('Corte'))
        dispatch(updateFileThickness('Grosor'))
        dispatch(updateFileQuantity(1))
        dispatch(updateFilePrice(0))
    }

    const toggleDropdown = () => {
        setIsCategoryOpen(!isCategoryOpen)
    }

    const toggleCategoryIndexDropdown = (child, i) => {
        let selectedValues
        switch (child.name) {
            case 'metal':
                selectedValues = metales
                break
            case 'madera':
                selectedValues = maderas
                break
            case 'plastico':
                selectedValues = plasticos
                break
            case 'compuesto':
                selectedValues = compuestos
                break

            default:
                selectedValues = []
                break
        }
        setCurrentMaterialSelection(selectedValues)
        setOpenDropdownIndex(i)

    }

    return (
        <div className="dropdownParentContainer">

            <div className={`dropdownOnClick ${isMaterialSelected ? 'dropdownOnClick__blue' : ''}`}
                onClick={() => {
                    resetDropdowns()
                }}
            >
                {currentMaterialName}
                {
                    isCategoryOpen ?
                        <RenderSvg alt={'arrow pointing down'} assetsSrc={'/cotizador/arrow-red-down.svg'} className={'dropdownOnClick__svg'} />

                        :
                        <RenderSvg alt={'arrow pointing up'} assetsSrc={'/cotizador/arrow-red-up.svg'} className={'dropdownOnClick__svg'} />

                }


            </div>

            {
                isCategoryOpen ?
                    <>

                        {
                            categoryNames.map((child, i) => (
                                < div key={`parent-${i}`}
                                    className={`dropdownFirstChild dropdownFirstChildRight ${i === openDropdownIndex ? 'dropdownFirstChildSelected' : ''}`}
                                    onClick={() => {
                                        toggleCategoryIndexDropdown(child, i)
                                    }}>

                                    <div key={`firstChild-${i}`} className="dropdownFirstChildContainer"
                                    >
                                        {child.name}
                                        {i === openDropdownIndex && (
                                            <div className="dropdownMaterialContainer">
                                                {
                                                    currentMaterialSelection.map((mat, i) => (
                                                        <div className="dropdownMaterialContainer__listItem"
                                                            key={`child-${i}`}
                                                            onClick={() => {
                                                                dispatch(updateFileMaterialName(mat.name))
                                                                dispatch(getFilteredProductsByMaterialId(mat._id))
                                                                resetDropdowns()
                                                                dispatch(activateFlagMaterial())
                                                            }}
                                                        >{mat.name}</div>
                                                    ))
                                                }

                                            </div>
                                        )}

                                    </div>


                                </div>
                            ))
                        }

                    </>
                    : <>
                    </>
            }


        </div >


    )
}

export default CategoryDropdown