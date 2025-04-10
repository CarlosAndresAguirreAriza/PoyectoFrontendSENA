import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const RedLineButton = ({text, background_color, redirect}) => {
    return (
        <Link to={redirect} className={`${background_color} button-line`}>
            {text}
        </Link>
    )
}

export default RedLineButton