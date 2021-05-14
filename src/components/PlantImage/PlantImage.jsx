import './PlantImage.scss';

const PlantImage = (vegetable) => {
    return(
        <div className="plant-card__img-container">
        <img
        loading="lazy"
        className="plantcard-card__img"
        src={`vegetables-imgs/${vegetable.img.src}.png`}
        alt={vegetable.img.alt}
        ></img>
      </div>
    )
}

export default PlantImage;