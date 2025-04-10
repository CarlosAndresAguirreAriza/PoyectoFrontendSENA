import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import SectionNuestrosServicios from '../../components/sections/SectionNuestrosServicios/SectionNuestrosServicios'
import SectionLogin from '../../components/formularios/SectionLogin/SectionLogin'
import './style.css'

const Login = () => {
    return (
        <>
            <div className='login__page'>
                <Navbar white={false} scrolledOff={true}/>
                <SectionLogin/>
                <SectionNuestrosServicios />
                <Footer/>
            </div>
        </>
    )
}

export default Login
