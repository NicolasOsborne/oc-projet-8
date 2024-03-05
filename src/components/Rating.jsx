import PropTypes from 'prop-types'

const Rating = ({ rating }) => {
  const numberOfStars = parseInt(rating)

  return (
    <div className='rating-container'>
      {[...Array(numberOfStars)].map((star, index) => (
        <i key={index} className='full-rating fa-solid fa-star' />
      ))}
      {[...Array(5 - numberOfStars)].map((star, index) => (
        <i key={index} className='empty-rating fa-solid fa-star' />
      ))}
    </div>
  )
}

Rating.propTypes = {
  rating: PropTypes.string.isRequired,
}

export default Rating
