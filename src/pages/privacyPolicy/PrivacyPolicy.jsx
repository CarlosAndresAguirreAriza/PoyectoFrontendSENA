import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import './style.css'

const PrivacyPolicy = () => {
    return (
        <>
            <div className="privacyPolicy">
                <Navbar white={true} scrolledOff={true} />
                <h1>hola</h1> 
                <div className="privacyPolicy__content">
                    <header className="privacyPolicy__header">
                        <h1 className="privacyPolicy__title">Política de Privacidad</h1>
                    </header>
                    <section className="privacyPolicy__section">
                        <article className="privacyPolicy__article">
                            <p>
                                ¡Bienvenido a nuestra plataforma de cotización en línea!
                                Sabemos que tu tiempo es valioso, y queremos hacer el proceso de cotización lo más fácil y eficiente posible para ti. En este blog, te guiaremos a través de nuestro cotizador en línea y compartiremos algunas recomendaciones para aprovechar al máximo esta herramienta.
                            </p>
                        </article>
                        <article className="privacyPolicy__article">
                            <h2 className="privacyPolicy__subtitle">1. Acceso Rápido y Sencillo</h2>
                            <p>
                                Nuestro cotizador en línea está diseñado para proporcionarte una experiencia rápida y sencilla. Desde la página de inicio, encontrarás un acceso directo al cotizador. Solo necesitas seleccionar tus opciones y subir tu diseño para obtener una cotización instantánea. ¡Ahorra tiempo y evita complicaciones!
                            </p>
                        </article>
                        <article className="privacyPolicy__article">
                            <h2 className="privacyPolicy__subtitle">2. Personalización de Materiales y Servicios</h2>
                            <p>
                                Entendemos que cada proyecto es único, por lo que nuestro cotizador te ofrece la flexibilidad de personalizar materiales y servicios. Desde la selección de materiales hasta los servicios adicionales, como acabados especiales, el cotizador te permite ajustar cada detalle según tus necesidades específicas.
                            </p>
                        </article>
                        <article className="privacyPolicy__article">
                            <h2 className="privacyPolicy__subtitle">3. Guía Paso a Paso</h2>
                            <p>
                                Para facilitar aún más el proceso, hemos incorporado una guía paso a paso en nuestro cotizador. Desde la selección del material hasta los detalles finales del acabado, cada paso está claramente marcado para que no te pierdas nada. Sigue la guía para asegurarte de cubrir todos los aspectos de tu proyecto.
                            </p>
                        </article>
                        <article className="privacyPolicy__article">
                            <h2 className="privacyPolicy__subtitle">4. Verificación de Calidad del Archivo</h2>
                            <p>
                                Una recomendación clave es asegurarte de que tu archivo esté listo para la producción. Nuestro cotizador verifica la calidad del archivo antes de completar la cotización. Asegúrate de que tu diseño cumpla con las especificaciones para evitar problemas durante la fabricación.
                            </p>
                        </article>
                        <article className="privacyPolicy__article">
                            <h2 className="privacyPolicy__subtitle">5. Explora Opciones Adicionales</h2>
                            <p>
                                No te limites a lo básico. Nuestro cotizador ofrece opciones adicionales que pueden mejorar tu proyecto. Desde servicios de ensamblaje hasta personalización de embalaje, explora las opciones adicionales para optimizar la entrega y presentación de tus productos.
                            </p>
                        </article>
                        <article className="privacyPolicy__article">
                            <h2 className="privacyPolicy__subtitle">6. Ahorro con Servicios Adicionales</h2>
                            <p>
                                Descubre cómo puedes ahorrar tiempo y recursos aprovechando nuestros servicios adicionales. El cotizador te mostrará el costo total, incluidos los servicios seleccionados, para que puedas tomar decisiones informadas y ajustar tu presupuesto.
                            </p>
                        </article>
                        <article className="privacyPolicy__article">
                            <h2 className="privacyPolicy__subtitle">Conclusión</h2>
                            <p>
                                Nuestro cotizador en línea está diseñado para simplificar tu proceso de cotización y hacer que tus proyectos sean más accesibles. Sigue estas recomendaciones para maximizar tu experiencia y obtener resultados precisos y eficientes. ¡Estamos aquí para ayudarte en cada paso del camino!
                            </p>
                        </article>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default PrivacyPolicy
