// eslint-disable-next-line quotes
import "./style.css"

const BannerAboutUs = () => {
  return (
    <div className="bannerAboutUs__home">
  
      <div className="bannerAboutUs__background"></div>
      <div className="bannerAboutUs__background-1"></div>
      <div className="bannerAboutUs__background-2"></div>
      <div className="bannerAboutUs__background-3"></div>

      <div className="bannerAboutUs__content">
        <h1>Sobre nosotros</h1>
        <div className="bannerAboutUs__line"></div>
        <p>
          Pricut es una de las empresas del grupo ALDAN Industries, conformado
          por personas visionarias con más de 30 años de experiencia en la
          industria de corte computarizado, que vieron una oportunidad y una
          necesidad latente en el mercado industrial latinoamericano: los
          clientes que necesitan cortes precisos de sus materiales, pero además
          requieren un servicio rápido y de calidad que llegue a la puerta de su
          casa o empresa.
        </p>
      </div>
    </div>
  )
}

export default BannerAboutUs
