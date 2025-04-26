import './style.css'

const SeccionAboutUs = () => {
  return (
    <section className="SeccionAboutUs">
      <div className="SeccionAboutUs__container">
        <div className="SeccionAboutUs__text-block">
          <h1 className="SeccionAboutUs__title">Potenciando proyectos</h1>
          <div className="SeccionAboutUs__line"></div>
          <p className="SeccionAboutUs__description">
          Pricut tiene como objetivo resolver los problemas a los que se enfrentan los profesionales de las ramas de la Ingeniería, el Diseño y la Arquitectura o cualquier área empresarial que necesite un buen servicio de corte en sus proyectos. Para ello, se busca una mejora y un crecimiento permanente, que nos permita ir ampliando cada vez más los materiales con los que trabajamos y los servicios que ofrecemos.
          </p>
        </div>
        <div className="SeccionAboutUs__image-block">
          <img
            className="SeccionAboutUs__image"
            src="https://res.cloudinary.com/da4ulrywk/image/upload/f_auto,q_auto/v1/Pricut/eofjbiwwf8h3anayx9gw"
            alt="Personas trabajando en un proyecto"
          />
        </div>
      </div>
    </section>
  )
}

export default SeccionAboutUs
