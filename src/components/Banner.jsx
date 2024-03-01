import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Banner = ({ bannerSrc, bannerAlt }) => {
  const location = useLocation()
  const [homePage, setHomePage] = useState(false)

  useEffect(() => {
    if (location.pathname === '/') {
      setHomePage(true)
    }
  })

  return (
    <div className='banner'>
      <img className='banner-image' src={bannerSrc} alt={bannerAlt} />
      <div className='banner-mask'>
        {homePage && (
          <h1>
            Chez vous, <br className='banner-break'></br>partout et ailleurs
          </h1>
        )}
      </div>
    </div>
  )
}

Banner.propTypes = {
  bannerSrc: PropTypes.string.isRequired,
  bannerAlt: PropTypes.string.isRequired,
}

export default Banner
