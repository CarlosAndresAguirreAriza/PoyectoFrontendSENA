import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Pagination } from 'swiper/modules'
import 'swiper/css/pagination'
import Card from '../Card/Card'
import './style.css'

/**
 * Componente `Carousel`.
 *
 * Despliega un carrusel de tarjetas de comentarios utilizando la biblioteca `Swiper`. Configura el carrusel con opciones de visualización y paginación.
 *
 * @component
 * @example
 * // Ejemplo de uso
 * <Carousel />
 *
 * @returns {JSX.Element} Carrusel de comentarios con opciones de paginación y responsividad.
 */
export default function Carousel() {
    return (
        <div className="carousel-container">
            <Swiper
                spaceBetween={20}
                pagination={true}
                modules={[Pagination]}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    700: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    978: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    1440: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                }}
            >
                <SwiperSlide>
                    <Card
                        comment='"Pricut es sinónimo de calidad y confiabilidad. Sus productos son imprescindibles para cualquier proyecto creativo"'
                        name='Carlos Rodriguez'
                        profession='Marketing'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card
                        comment='"Pricut es sinónimo de calidad y confiabilidad. Sus productos son imprescindibles para cualquier proyecto creativo"'
                        name='Carlos Rodriguez'
                        profession='Marketing'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card
                        comment='"Pricut es sinónimo de calidad y confiabilidad. Sus productos son imprescindibles para cualquier proyecto creativo"'
                        name='Carlos Rodriguez'
                        profession='Marketing'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card
                        comment='"Pricut es sinónimo de calidad y confiabilidad. Sus productos son imprescindibles para cualquier proyecto creativo"'
                        name='Carlos Rodriguez'
                        profession='Marketing'
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}