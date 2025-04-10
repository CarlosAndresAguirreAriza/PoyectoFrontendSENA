
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Pagination } from 'swiper/modules'
import 'swiper/css/pagination'

import Card from '../Card/Card'

import './style.css'

/**
 * Componente `Carousel`.
 *
 * Muestra un carrusel de tarjetas de artículos utilizando `Swiper`, con opciones de paginación y visualización responsive.
 *
 * @component
 * @example
 * // Ejemplo de uso
 * <Carousel />
 *
 * @returns {JSX.Element} Carrusel de artículos que se desplaza horizontalmente con opciones de paginación.
 */
const Carousel = () => {
    return (
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
                    resumen='Este artículo te llevará a través de un recorrido por el proceso del cotizador en línea, revelando cada paso y proporcionando pautas clave para realizar cotizaciones precisas y eficientes.'
                    titulo='El cotizador y sus recomendaciones'
                    articulo='ejemplo'
                />
            </SwiperSlide>
            <SwiperSlide>
                <Card
                    resumen='Este artículo te llevará a través de un recorrido por el proceso del cotizador en línea, revelando cada paso y proporcionando pautas clave para realizar cotizaciones precisas y eficientes.'
                    titulo='El cotizador y sus recomendaciones'
                />
            </SwiperSlide>
            <SwiperSlide>
                <Card
                    resumen='Este artículo te llevará a través de un recorrido por el proceso del cotizador en línea, revelando cada paso y proporcionando pautas clave para realizar cotizaciones precisas y eficientes.'
                    titulo='El cotizador y sus recomendaciones'
                />
            </SwiperSlide>
            <SwiperSlide>
                <Card
                    resumen='Este artículo te llevará a través de un recorrido por el proceso del cotizador en línea, revelando cada paso y proporcionando pautas clave para realizar cotizaciones precisas y eficientes.'
                    titulo='El cotizador y sus recomendaciones'
                />
            </SwiperSlide>
        </Swiper>
    )
}

export default Carousel