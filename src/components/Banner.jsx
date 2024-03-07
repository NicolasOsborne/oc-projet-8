import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Banner = ({ bannerSrc, bannerAlt }) => {
  // Le hook useLocation() permet de récupérer un objet avec les différentes propriétés de l'URL
  const location = useLocation()

  // Déclaration de la state variable homePage, qui déterminera, en fonction de son state, si on se situe (true) ou non (false) sur la page d'accueil Home
  const [homePage, setHomePage] = useState(false)

  // Vérification du pathname récupéré à l'aide de useLocation. Si pathname === "/" alors on se situe sur la page d'accueil Home, et le state de homePage est "true"
  useEffect(() => {
    if (location.pathname === '/') {
      setHomePage(true)
    }
  })

  return (
    <div className='banner'>
      <img className='banner-image' src={bannerSrc} alt={bannerAlt} />
      <div className='banner-mask'>
        {/* Affichage du titre seulement si on est sur la page d'accueil Home */}
        {homePage && (
          <h1>
            Chez vous, <br className='banner-break'></br>partout et ailleurs
          </h1>
        )}
      </div>
    </div>
  )
}

// Définition des PropTypes des props bannerSrc et bannerAlt
Banner.propTypes = {
  bannerSrc: PropTypes.string.isRequired,
  bannerAlt: PropTypes.string.isRequired,
}

export default Banner
