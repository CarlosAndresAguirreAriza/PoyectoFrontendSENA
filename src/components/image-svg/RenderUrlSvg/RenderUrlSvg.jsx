import React from 'react'

const RenderUrlSvg = ({ className, src, alt }) => {
    return (
        <img className={className} src={src} alt={alt} />
    )
}

export default RenderUrlSvg