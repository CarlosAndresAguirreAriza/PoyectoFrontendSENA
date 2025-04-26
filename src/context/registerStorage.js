import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const urlRegister = import.meta.env.VITE_API_URL_REGISTER

const useRegisterStore = create(
    devtools((set) => ({
    loading: false,
    errorMessages: {},

    register: async (formData) => {
        set({ loading: true }, false, 'register/start')
        try {
            const response = await fetch(urlRegister, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                first_name: formData.firstName,
                last_name: formData.lastName,
                email: formData.email,
                password: formData.password,
                confirm_password: formData.confirmPassword,
            }),
            })

            const text = await response.text()
            const data = text ? JSON.parse(text) : {}

            if (!response.ok) {
            if (data.code === 'invalid_request_data' && data.detail) {
                set({ errorMessages: data.detail }, false, 'register/error')
            } else {
                set(
                {
                    errorMessages: { general: data.detail || 'Error desconocido' },
                },
                false,
                'register/error'
                )
            }
            return false
            }

            set({ errorMessages: {} }, false, 'register/success')
            return true
        } catch (error) {
            console.error('Error en el registro:', error)
            set(
            { errorMessages: { general: error.message } },
            false,
            'register/exception'
            )
            return false
        } finally {
            set({ loading: false }, false, 'register/finish')
        }
        },
    }))
)

export default useRegisterStore
