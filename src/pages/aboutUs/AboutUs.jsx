import Footer from '../../components/Footer/Footer'
import RenderSvg from '../../components/image-svg/RenderSvg/RenderSvg'
import Navbar from '../../components/Navbar/Navbar'
import './AboutUs.css'

const AboutUs = () => {
    return (
        <>
            <div className="aboutUs">
                <div className="aboutUs__nav">
                    <Navbar />

                </div>
                <div className="aboutUs--superior">
                    <div className="aboutUs__background">
                        <RenderSvg className={'aboutUs__background--img'} alt={'sobre nosotros'} assetsSrc={'aboutUs/Banner-QuienesSomos.png'} />
                        <div className="aboutUs__overlay"></div>
                    </div>
                    <div className="aboutUs__contenidoSuperior">
                        <h1 className="aboutUs__contenidoSuperior--h1">Sobre nosotros</h1>
                        <p className="aboutUs__contenidoSuperior--p">Pricut es una de las empresas del grupo ALDAN Industries, conformado por personas visionarias con más de 30 años de experiencia en la industria de corte computarizado, que vieron una oportunidad y una necesidad latente en el mercado industrial latinoamericano: los clientes que necesitan cortes precisos de sus materiales, pero además requieren un servicio rápido y de calidad que llegue a la puerta de su casa o empresa.</p>
                    </div>
                </div>
                <div className="aboutUs--intermedio">
                    <div className="aboutUs--intermedio__der">
                        <h1 className="aboutUs--intermedio__der--h1">Potenciando proyectos</h1>
                        <p className="aboutUs--intermedio__der--p">Pricut tiene como objetivo resolver los problemas a los que se enfrentan los profesionales de las ramas de la Ingeniería, el Diseño y la Arquitectura o cualquier área empresarial que necesite un buen servicio de corte en sus proyectos. Para ello, se busca una mejora y un crecimiento permanente, que nos permita ir ampliando cada vez más los materiales con los que trabajamos y los servicios que ofrecemos.</p>
                    </div>
                    <div className="aboutUs--intermedio__izq">
                        <RenderSvg assetsSrc={'aboutUs/working-blueprint.svg'} alt={'imagen hombre trabajando'} className={'aboutUs--intermedio__izq--svg'} />
                    </div>

                </div>
                <div className="aboutUs--inferior">
                    <div className="aboutUs--inferior__izq">
                        <RenderSvg assetsSrc={'aboutUs/octicon_goal-24.svg'} alt={'imagen hombre trabajando'} className={'aboutUs--inferior__izq--svg'} />
                        <h1 className={'aboutUs--inferior__izq--h1'}>MISIÓN</h1>
                        <p className={'aboutUs--inferior__izq--p'}>
                            Comprometidos con la excelencia, nos dedicamos a brindar un servicio sobresaliente a diversas industrias. Nuestra misión es satisfacer las necesidades específicas de cada cliente, destacando por la precisión, rapidez y confiabilidad en cada proyecto.
                        </p>
                    </div>
                    <div className="aboutUs--inferior__der">
                        <RenderSvg assetsSrc={'aboutUs/ph_binoculars.svg'} alt={'imagen hombre trabajando'} className={'aboutUs--inferior__der--svg'} />
                        <h1 className={'aboutUs--inferior__der--h1'}>VISIÓN</h1>
                        <p className={'aboutUs--inferior__der--p'}>
                            Buscamos posicionarnos como la principal empresa de corte en línea en Sudamérica, nos esforzamos por ofrecer servicios de calidad excepcional y entregas rápidas, superando constantemente las expectativas de nuestros clientes.
                        </p>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AboutUs