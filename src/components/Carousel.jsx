import { useState } from 'react'
import PropTypes from 'prop-types'

const Carousel = ({ imagesCarousel }) => {
  // Définir l'index de l'image en cours
  const [currentSlide, setCurrentSlide] = useState(0)

  // Gestion des flèches Précédent / Suivant
  const previousSlide = () => {
    setCurrentSlide((currentSlide) =>
      currentSlide === 0 ? imagesCarousel.length - 1 : currentSlide - 1
    )
  }

  const nextSlide = () => {
    setCurrentSlide((currentSlide) =>
      currentSlide === imagesCarousel.length - 1 ? 0 : currentSlide + 1
    )
  }

  // Gestion de l'affichage des flèches de défilement et de l'indicateur de slides seulement s'il y a plus d'une image à affichage
  const moreThanOneImage = imagesCarousel.length > 1

  return (
    <div className='carousel-container'>
      <img className='carousel-image' src={imagesCarousel[currentSlide]}></img>
      {moreThanOneImage && (
        <>
          <i className='fa-solid fa-chevron-left' onClick={previousSlide} />
          <i className='fa-solid fa-chevron-right' onClick={nextSlide} />
          <p className='carousel-current-image'>
            {currentSlide + 1}/{imagesCarousel.length}
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
