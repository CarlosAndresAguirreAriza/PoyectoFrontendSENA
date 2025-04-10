import { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useLoginStore from '../context/loginStorage'

const ProtectedRoute = ({ redirectTo = '/' }) => {
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
        return <div>Cargando...</div>
    }

    return !isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} replace />
}

export default ProtectedRoute