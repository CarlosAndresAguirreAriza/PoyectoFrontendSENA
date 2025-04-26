import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'
import InputForm from '../../../components/InputForm/InputForm'
import ButtonForm from '../../../components/ButtonForm/ButtonForm'
import useRegisterStore from '../../../../../context/registerStorage'

const RegisterForm = () => {
    const [passwordVisible, setPasswordVisible] = useState(true)
    const { register, errorMessages, loading } = useRegisterStore()
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const navigate = useNavigate()

    const handlePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible)
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const success = await register(formData)

        if (success) {
        navigate('/')
        }
    }

    return (
    <form onSubmit={handleSubmit} className='form-register-container'>
        {errorMessages?.general && (
            <div className="error-text-general-container">
            <p className="error-text-general">{errorMessages.general}</p>
            </div>
        )}

        <InputForm
            nameTitle="Nombre"
            placeholder="Tu nombre"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            errorMessage={errorMessages?.first_name?.[0]}
        />
        <InputForm
            nameTitle="Apellido"
            placeholder="Tu apellido"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            errorMessage={errorMessages?.last_name?.[0]}
        />
        <InputForm
            nameTitle="Correo electrónico"
            placeholder="ejemplo@correo.com"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            errorMessage={errorMessages?.email?.[0]}
        />
        <InputForm
            nameTitle="Contraseña"
            placeholder="***********"
            type={passwordVisible ? 'password' : 'text'}
            name="password"
            value={formData.password}
            onChange={handleChange}
            errorMessage={errorMessages?.password?.[0]}
            iconPass={
            passwordVisible
                ? 'https://res.cloudinary.com/da4ulrywk/image/upload/f_auto,q_auto/v1/Pricut/clvk3jilzucobzvpmsms'
                : 'https://res.cloudinary.com/da4ulrywk/image/upload/f_auto,q_auto/v1/Pricut/gk1d1eaqbdjcte1hgaiv'
            }
            onToggle={handlePasswordVisibility}
        />
        <InputForm
            nameTitle="Confirmar contraseña"
            placeholder="***********"
            type={passwordVisible ? 'password' : 'text'}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            errorMessage={errorMessages?.confirm_password?.[0]}
            iconPass={
            passwordVisible
                ? 'https://res.cloudinary.com/da4ulrywk/image/upload/f_auto,q_auto/v1/Pricut/clvk3jilzucobzvpmsms'
                : 'https://res.cloudinary.com/da4ulrywk/image/upload/f_auto,q_auto/v1/Pricut/gk1d1eaqbdjcte1hgaiv'
            }
            onToggle={handlePasswordVisibility}
        />

        <ButtonForm loading={loading} text="Crear cuenta" />
    </form>
    )
}

export default RegisterForm
