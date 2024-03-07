import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const Carousel = ({ imagesCarousel }) => {
  // Définir l'index de l'image en cours (par défaut la première image, donc l'index 0)
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

  // Gestion de l'affichage des flèches de défilement et de l'indicateur de slides seulement s'il y a plus d'une image à affichage :
  // Déclaration de la state variable hasMoreThanOneImage, qui déterminera, en fonction de son state, si l'array imagesCarousel contient une seule image (true) ou plus d'une image (false)
  const [hasMoreThanOneImage, setHasMoreThanOneImage] = useState(false)

  // Si l'array imagesCarousel contient plus d'un élément, alors hasMoreThanOneImage est "true"
  useEffect(() => {
    if (imagesCarousel.length > 1) {
      setHasMoreThanOneImage(true)
    }
  })

  return (
    <div className='carousel-container'>
      <img className='carousel-image' src={imagesCarousel[currentSlide]} />
      {/* Les chevrons ne s'affichent que si hasMoreThanOneImage est "true" */}
      {hasMoreThanOneImage && (
        <>
          <i className='fa-solid fa-chevron-left' onClick={previousSlide} />
          <i className='fa-solid fa-chevron-right' onClick={nextSlide} />
        </>
      )}
      <p className='carousel-current-image'>
        {currentSlide + 1}/{imagesCarousel.length}
      </p>
    </div>
  )
}

// Définition des PropTypes du prop imagesCarousel, qui doit être un array
Carousel.propTypes = {
  imagesCarousel: PropTypes.array,
}

export default Carousel
