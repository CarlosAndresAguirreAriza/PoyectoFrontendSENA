import InputLogin from './components/InputLogin/InputLogin'
import ButtonSubmit from './components/LoginButtonSubmit/LoginButtonSubmit'
import RememberPass from './components/RememberPass/RememberPass'

import { useState } from 'react'
import useLoginStore from '../../../../../context/loginStorage'
import { useNavigate } from 'react-router-dom'
import './style.css'

const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(true)
  const { login, errorMessages, loading } = useLoginStore()
  const [formData, setFormData] = useState({ email: '', password: '' })
  const navigate = useNavigate()

  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const success = await login(formData)
      if (success) {
        navigate('/')
      }
    } catch (error) {
      console.error('Login failed:', error)
    }
  }

  return (
    <form type="submit" onSubmit={handleSubmit} className='formLogin__Conteiner'>
      {errorMessages?.general?.[0] && (
        <div className='error-text-general-container'>
          <p className='error-text-general'>{errorMessages?.general}</p>
        </div>
      )}
      <InputLogin
        nameTitle="Email"
        placeholder="ejemplo@correo.com"
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
        errorMessage={errorMessages?.email?.[0]}
      />
      <InputLogin
        nameTitle="Contraseña"
        placeholder="***********"
        type={passwordVisible ? 'password' : 'text'}
        name="password"
        value={formData.password}
        onChange={handleChange}
        errorMessage={errorMessages?.password?.[0]}
        iconPass={passwordVisible ? 'https://res.cloudinary.com/da4ulrywk/image/upload/f_auto,q_auto/v1/Pricut/clvk3jilzucobzvpmsms' : 'https://res.cloudinary.com/da4ulrywk/image/upload/f_auto,q_auto/v1/Pricut/gk1d1eaqbdjcte1hgaiv'}
        onToggle={handlePasswordVisibility}
      />
      <ButtonSubmit loading={loading}/>
      <RememberPass />
    </form>
  )
}

export default LoginForm
