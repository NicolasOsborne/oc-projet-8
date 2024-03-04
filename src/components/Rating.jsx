import PropTypes from 'prop-types'

const Rating = ({ rating }) => {
  const numberOfStars = parseInt(rating)

  return (
    <div className='rating-container'>
      {[...Array(numberOfStars)].map((x, i) => (
        <i key={i} className='full-rating fa-solid fa-star'></i>
      ))}
      {[...Array(5 - numberOfStars)].map((x, i) => (
        <i key={i} className='empty-rating fa-solid fa-star'></i>
      ))}
    </div>
  )
}

Rating.propTypes = {
  rating: PropTypes.string.isRequired,
}

export default Rating
