import Carousel from '../components/Carousel'
import Tag from '../components/Tag'
import Rating from '../components/Rating'
import Collapse from '../components/Collapse'
import rentalsList from '../data/rentals.json'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function Rental() {
  // Récupération de l'id présente dans l'URL (/rental/:id),définie à l'aide du Router, grâce au hook useParams()
  const { id } = useParams()

  // Parcourir le JSON pour trouver l'élément pour lequel rental.id === id
  const currentRental = rentalsList.find((rental) => rental.id === id)

  // Gestion de la redirection vers la page Error 404 si l'id dans l'URL ne correspond à aucun élément du JSON
  // Utilisation du hook useNavigate() qui permet la redirection vers une autre URL
  const navigate = useNavigate()

  // Vérification de la condition si currentRental existe ou non, si elle n'existe pas, navigate renvoit vers l'URL de la page Error /error
  useEffect(() => {
    if (!currentRental) {
      navigate('/error')
      return
    }
  }, [])

  // Nouvelle vérification de la condition currentRental pour éviter au code de renvoyer une erreur "undefined" au moment de générer la page
  if (!currentRental) {
    return
  }

  return (
    <div className='rental-container'>
      <Carousel imagesCarousel={currentRental.pictures} />
      <div className='rental-information'>
        <div className='rental-name'>
          <h1 className='rental-title'>{currentRental.title}</h1>
          <h2 className='rental-location'>{currentRental.location}</h2>
          <div className='tags-container'>
            {currentRental.tags.map((tag, index) => (
              <Tag key={index} tag={tag} />
            ))}
          </div>
        </div>

        <div className='host-information'>
          <div className='host-profile'>
            <h3 className='host-name'>{currentRental.host.name}</h3>
            <img className='host-picture' src={currentRental.host.picture} />
          </div>
          <div className='host-rating'>
            <Rating rating={currentRental.rating} />
          </div>
        </div>
      </div>

      <div className='rental-description-equipments'>
        <Collapse title='Description' content={currentRental.description} />
        <Collapse
          title='Équipements'
          content={currentRental.equipments.map((equipment, index) => (
            <ul className='equipments-list' key={index}>
              <li>{equipment}</li>
            </ul>
          ))}
        />
      </div>
    </div>
  )
}

export default Rental
