import React from 'react'
import RenderSvg from '../../image-svg/RenderSvg/RenderSvg'
import './BannerImage.css'

const BannerImage = ({ src, alt }) => {
    return (

        <RenderSvg className={'bannerImage-svg'} assetsSrc={src} alt={alt} />
    )
}

export default BannerImage