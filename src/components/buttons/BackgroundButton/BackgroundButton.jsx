import { Link, useNavigate } from 'react-router-dom'
import './style.css'

const BackgroundButton = ({ text, background_color, redirect, comeBack = false, onClick }) => {
    const navigate = useNavigate()

    const handleClick = () => {
        if (onClick) {
            onClick()
        }
        if (comeBack) {
            navigate(-2)
        }
    }

    return redirect ? (
        <Link to={redirect} className={`${background_color} button`}>
            {text}
        </Link>
    ) : (
        <button onClick={handleClick} className={`${background_color} button`}>
            {text}
        </button>
    )
}

export default BackgroundButton
