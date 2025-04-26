import PurposeCard from '../PurposeCard'
import './style.css'




const PurposeCardsSection = () => {
  return (
    <section className="PurposeCardsSection">
      <PurposeCard
        title="Misión"
        imageUrl="https://res.cloudinary.com/da4ulrywk/image/upload/f_auto,q_auto/v1/Pricut/y0whprnhz2irbsopoyim"
        description="Comprometidos con la excelencia, nos dedicamos a brindar un servicio sobresaliente a diversas industrias. Nuestra misión es satisfacer las necesidades específicas de cada cliente, destacando por la precisión, rapidez y confiabilidad en cada proyecto."
      />
      <PurposeCard
        title="Visión"
        imageUrl="https://res.cloudinary.com/da4ulrywk/image/upload/f_auto,q_auto/v1/Pricut/mckj2p2u7pvphb6o8w35"
        description="Buscamos posicionarnos como la principal empresa de corte en línea en Sudamérica, nos esforzamos por ofrecer servicios de calidad excepcional y entregas rápidas, superando constantemente las expectativas de nuestros clientes."
      />
    </section>
  )
}

export default PurposeCardsSection
