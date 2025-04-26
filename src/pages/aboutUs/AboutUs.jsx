import './style.css'

import Navbar from '../../components/Navbar/Navbar'
import BannerAboutUs from '../../components/banners/BannerAboutUs/BannerAboutUs'
import SeccionAboutUs from '../../components/sections/SeccionAboutUs/SeccionAboutUs'
import PurposeCardsSection from '../../components/cards/PurposeCard/components/PurposeCardsSection'
import Footer from '../../components/Footer/Footer'

const AboutUs = () => {
return (
    <>
    <Navbar white={false} />
    <BannerAboutUs></BannerAboutUs>
    <SeccionAboutUs></SeccionAboutUs>
    <PurposeCardsSection />
    <Footer />
    </>
)
}

export default AboutUs
