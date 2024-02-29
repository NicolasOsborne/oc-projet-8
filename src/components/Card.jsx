import PropTypes from 'prop-types'

const Card = ({ cover, title }) => {
  return (
    <div className='rental-card'>
      <img
        className='rental-cover'
        src={cover}
        alt="Photo d'illustration de la location"
      ></img>
      <div className='rental-mask'></div>
      <h3 className='rental-title'>{title}</h3>
    </div>
  )
}

Card.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Card
