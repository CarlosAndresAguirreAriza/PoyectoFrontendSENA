import Footer from '../../components/Footer/Footer'
import SectionRegister from '../../components/formularios/SectionRegister/SectionRegister'
import Navbar from '../../components/Navbar/Navbar'
import SectionPorqueSomos from '../../components/sections/SectionPorqueSomos/SectionPorqueSomos'
import './style.css'

const CreateAccount = () => {
  return (
    <div className='create-account__conteiner'>
      <Navbar white={false} scrolledOff={true} />
      <SectionRegister />
      <SectionPorqueSomos />
      <Footer />
    </div>
  )
}

export default CreateAccount
