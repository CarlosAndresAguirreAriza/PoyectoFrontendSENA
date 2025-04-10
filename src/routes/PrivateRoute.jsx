import { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useLoginStore from '../context/loginStorage'

const PrivateRoute = ({ redirectTo = '/login' }) => {
    const { isAuthenticated, checkAuth } = useLoginStore()
    const [isCheckingAuth, setIsCheckingAuth] = useState(true)

    useEffect(() => {
        const verifyAuth = async () => {
            await checkAuth()
            setIsCheckingAuth(false)
        }
        verifyAuth()
    }, [checkAuth])

    if (isCheckingAuth) {
        return <div>Cargando...</div> // O un spinner de carga
    }

    return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} replace />
}

export default PrivateRoute