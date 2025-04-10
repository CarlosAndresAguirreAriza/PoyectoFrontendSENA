import React from 'react'
import RenderSvg from '../../../image-svg/RenderSvg/RenderSvg'

const DropdownItem = ({ selectedItem, handleHover, spanText, urlRedirect, className }) => {
    return (
        <div className={`dropdown-item ${selectedItem === spanText ? 'selected' : ''}`}
            onMouseEnter={() => handleHover(spanText)}
            onMouseLeave={() => handleHover(null)}>
            <a className='dropdown-item-a' href={urlRedirect}>
                {selectedItem === spanText ? (
                    < RenderSvg className={className} assetsSrc={'home/arrows/arrow-right.svg'} alt={'arrow to right'} />
                ) : null}
                <span>{spanText}</span>
            </a>
        </div>
    )
}

export default DropdownItem