import useInfoStore from '../../../context/infoStorage'
import Card from './components/Card/Card'
import './style.css'

const SectionNuestrosServicios = () => {
    const { services } = useInfoStore()

    return (
        <div className="section-container">
            <h1 className="section-title">Nuestros Servicios</h1>
            <div className="card-list">
                {services.map((service) => (
                    <Card
                        key={service.base_info.code}
                        titulo={service.base_info.name}
                        desc={service.descriptions.about_text}
                        servicio={service.base_info.code}
                        imgSrc={service.images.main_image}
                    />
                ))}
            </div>
        </div>
    )
}

export default SectionNuestrosServicios
