import Carousel from '../components/Carousel'
import Tag from '../components/Tag'
import Rating from '../components/Rating'
import Collapse from '../components/Collapse'
import rentalsList from '../data/rentals.json'
import { useParams } from 'react-router-dom'
// import { useEffect, useState } from 'react'

function Rental() {
  const { id } = useParams()
  const currentRental = rentalsList.find((rental) => rental.id === id)

  // const [imagesCarousel, setImagesCarousel] = useState([])

  // useEffect(() => {
  //   if (rental) {
  //     setImagesCarousel(rental.pictures)
  //   }
  // }, [currentRentalId, rental])

  return (
    <div className='rental-container'>
      <Carousel />
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
            <Rating />
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
