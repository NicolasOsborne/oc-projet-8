import PropTypes from 'prop-types'

const Rating = ({ rating }) => {
  // Changement du type de variable : rating est récupéré sous forme de string dans le JSON, et transformé en nombre (int) grâce à parseInt
  const numberOfStars = parseInt(rating)

  return (
    <div className='rating-container'>
      {/* Génération d'un array comportant le nombre d'étoiles défini par rating, puis générer une étoile rouge par étoile à l'aide de .map() */}
      {[...Array(numberOfStars)].map((star, index) => (
        <i key={index} className='full-rating fa-solid fa-star' />
      ))}
      {/* Génération d'un array comportant le nombre d'étoiles vides à générer (5 - le nombre d'étoiles rouges), puis générer une étoile grise par étoile à l'aide de .map() */}
      {[...Array(5 - numberOfStars)].map((star, index) => (
        <i key={index} className='empty-rating fa-solid fa-star' />
      ))}
    </div>
  )
}

// Définition des PropTypes du props rating
Rating.propTypes = {
  rating: PropTypes.string.isRequired,
}

export default Rating
