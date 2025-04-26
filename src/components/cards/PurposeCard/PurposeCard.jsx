import './style.css'

const PurposeCard = ({ title, description, imageUrl }) => {
  return (
    <div className="PurposeCard__container">
      <div className="PurposeCard__content">
        <div className="PurposeCard__icon">
          <img src={imageUrl} alt={`Ícono de ${title}`} />
        </div>
        <h2 className="PurposeCard__title">{title}</h2>
        <p className="PurposeCard__description">{description}</p>
      </div>
    </div>
  )
}

export default PurposeCard
