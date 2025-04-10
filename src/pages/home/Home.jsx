import './style.css'

import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import BannerPrincipal from '../../components/banners/BannerPrincipal/BannerPrincipal'
import BannerComienzaProyecto from '../../components/banners/BannerComienzaProyecto/BannerComienzaTuProyecto'
import SectionComoFunciona from '../../components/sections/SectionComoFunciona/SectionComoFunciona'
import SectionPorqueSomos from '../../components/sections/SectionPorqueSomos/SectionPorqueSomos'
import SectionNuestrosServicios from '../../components/sections/SectionNuestrosServicios/SectionNuestrosServicios'
import SectionMateriales from '../../components/sections/SectionMateriales/SectionMateriales'
import SectionArticulos from '../../components/sections/SectionArticulos/SectionArticulos'
import SectionComentarios from '../../components/sections/SectionComentarios/SectionComentarios'

const Home = () => {

  return (
    <div className='home'>
      <Navbar white={false}/>
      <BannerPrincipal />
      <SectionComoFunciona />
      <SectionPorqueSomos />
      <SectionNuestrosServicios />
      <SectionMateriales />
      <SectionComentarios />
      <BannerComienzaProyecto />
      <SectionArticulos />
      <Footer />
    </div>
  )
}

export default Home