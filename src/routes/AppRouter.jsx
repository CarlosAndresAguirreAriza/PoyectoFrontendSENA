import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import useLoginStore from '../context/loginStorage'
import Home from '../pages/home/Home'
import Cotizador from '../pages/cotizador/Cotizador'
import Article from '../pages/article/Recursos'
import Contact from '../pages/contact/Contact'
import TermsAndConditions from '../pages/termsAndConditions/TermsAndConditions'
import PrivacyPolicy from '../pages/privacyPolicy/PrivacyPolicy'
import AboutUs from '../pages/aboutUs/AboutUs'
import Material from '../pages/material/Material'
import Service from '../pages/service/Service'
import Error from '../pages/error/Error'
import SpecificMaterial from '../pages/specificMaterial/SpecificMaterial'
import useInfoStore from '../context/infoStorage'
import SpecificService from '../pages/specificService/SpecificService'
import Login from '../pages/login/Login'
import CreateAccount from '../pages/createAccount/CreateAccount'
import ProtectedRoute from './ProtectedRoute'
import PrivateRoute from './PrivateRoute'
import UserInfo from '../pages/userInfo/UserInfo'

const ScrollToTop = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return null
}

const AppRouterContent = () => {
  const fetchMaterials = useInfoStore((state) => state.fetchMaterials)
  const fetchServices = useInfoStore((state) => state.fetchServices)
  const materials = useInfoStore((state) => state.materials)
  const services = useInfoStore((state) => state.services)
  const checkAuth = useLoginStore((state) => state.checkAuth)
  const location = useLocation()

  useEffect(() => {
    checkAuth()
  }, [location.pathname, checkAuth])

  useEffect(() => {
    if (materials.length === 0) {
      fetchMaterials()
    }
    if (services.length === 0) {
      fetchServices()
    }
  }, [materials.length, services.length, fetchMaterials, fetchServices])

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quote" element={<Cotizador />} />
        <Route path="/resources" element={<Article />} />
        <Route path="/material" element={<Material />} />
        <Route path="/material/:id" element={<SpecificMaterial />} />
        <Route path="/service/" element={<Service />} />
        <Route path="/service/:id" element={<SpecificService />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/about-us" element={<AboutUs />} />

        <Route element={<PrivateRoute redirectTo="/login" />}>
          <Route path="/user-info" element={<UserInfo />} />
        </Route>

        <Route element={<ProtectedRoute redirectTo="/" />}>
          <Route path="/login" element={<Login />} />
          <Route path="/CreateAccount" element={<CreateAccount />} />
        </Route>

        <Route path="*" element={<Navigate to="/error" />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </>
  )
}

const AppRouter = () => (
  <BrowserRouter>
    <AppRouterContent />
  </BrowserRouter>
)

export default AppRouter
