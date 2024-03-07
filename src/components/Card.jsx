import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Card = ({ cover, title, id }) => {
  return (
    <Link to={`/rental/${id}`} className='rental-card-link'>
      <div className='rental-card'>
        <img
          className='rental-card-cover'
          src={cover}
          alt="Photo d'illustration de la location"
        ></img>
        <div className='rental-card-mask'></div>
        <h3 className='rental-card-title'>{title}</h3>
      </div>
    </Link>
  )
}

// Définition des PropTypes des props cover, title et id qui doivent être des strings
Card.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}

export default Card
