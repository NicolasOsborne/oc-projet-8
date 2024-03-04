import { useState } from 'react'
import PropTypes from 'prop-types'

const Carousel = ({ imagesCarousel }) => {
  // Définir l'index de l'image en cours
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  // Gestion des flèches Précédent / Suivant
  const previousSlide = () => {
    setCurrentSlideIndex((currentSlideIndex) =>
      currentSlideIndex === 0
        ? imagesCarousel.length - 1
        : currentSlideIndex - 1
    )
  }

  const nextSlide = () => {
    setCurrentSlideIndex((currentSlideIndex) =>
      currentSlideIndex === imagesCarousel.length - 1
        ? 0
        : currentSlideIndex + 1
    )
  }

  // Gestion de l'affichage des flèches de défilement et de l'indicateur de slides seulement s'il y a plus d'une image à affichage
  const moreThanOneImage = imagesCarousel.length > 1

  return (
    <div className='carousel-container'>
      <img
        className='carousel-image'
        src={imagesCarousel[currentSlideIndex]}
      ></img>
      {moreThanOneImage && (
        <>
          <i className='fa-solid fa-chevron-left' onClick={previousSlide}></i>
          <i className='fa-solid fa-chevron-right' onClick={nextSlide}></i>
          <p className='carousel-current-image'>
            {currentSlideIndex + 1}/{imagesCarousel.length}
          </p>
        </>
      )}
    </div>
  )
}

Carousel.propTypes = {
  imagesCarousel: PropTypes.array,
}

export default Carousel
