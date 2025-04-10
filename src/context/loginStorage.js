import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { jwtDecode } from 'jwt-decode'

const urlLogin = import.meta.env.VITE_API_URL_LOGIN

const isTokenExpired = (token) => {
    if (!token) return true
    const decoded = jwtDecode(token)
    const currentTime = Date.now() / 1000
    return decoded.exp < currentTime
}

const useLoginStore = create(
    devtools(
        (set) => ({
        token: null,
        userRole: null,
        isAuthenticated: false,
        errorMessages: '',
        loading: false,

        login: async (credentials) => {
            set({ loading: true }, false, 'login/start')

            try {
            const response = await fetch(urlLogin, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials),
            })

            const data = await response.json()

            if (!response.ok) {
                if (data.code === 'invalid_request_data' && data.detail) {
                set({ errorMessages: data.detail }, false, 'login/error')
                } else if (data.code === 'authentication_failed' && data.detail) {
                set({ errorMessages: { general: data.detail } }, false, 'login/error')
                } else {
                throw new Error(data.detail)
                }
                return
            }

            const { access_token } = data
            const decoded = jwtDecode(access_token)

            set({
                token: access_token,
                userRole: decoded.user_role,
                isAuthenticated: true,
                errorMessages: {},
            }, false, 'login/success')

            localStorage.setItem('token', access_token)
            } catch (error) {
            console.error('Error en el login:', error)
            set({ isAuthenticated: false, errorMessages: error.message }, false, 'login/error')
            } finally {
            set({ loading: false }, false, 'login/finish')
            }
        },

        checkAuth: async () => {
            set({ loading: true }, false, 'checkAuth/start')
            console.log('Ejecutando checkAuth...')
            const token = localStorage.getItem('token')
            if (token && !isTokenExpired(token)) {
                const decoded = jwtDecode(token)
                set({
                    token,
                    userRole: decoded.user_role,
                    isAuthenticated: true,
                    loading: false
                }, false, 'checkAuth/valid')
            } else {
                set({
                    isAuthenticated: false,
                    token: null,
                    userRole: null,
                    loading: false
                }, false, 'checkAuth/invalid')
                localStorage.removeItem('token')
            }
        },

        logout: () => {
            set({
            token: null,
            userRole: null,
            isAuthenticated: false,
            errorMessages: {}
            }, false, 'logout')
            localStorage.removeItem('token')
            console.log('Holanda')
        },
        }),
        { name: 'LoginStore' }
    )
)

export default useLoginStore