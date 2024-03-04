import Carousel from '../components/Carousel'
import Tag from '../components/Tag'
import Rating from '../components/Rating'
import Collapse from '../components/Collapse'
import rentalsList from '../data/rentals.json'
import { useParams } from 'react-router-dom'

function Rental() {
  const { currentRentalId } = useParams()
  const rental = rentalsList.find(
    (currentRental) => currentRental.id === currentRentalId
  )

  return (
    <div className='rental-container'>
      <Carousel />
      <div className='rental-information'>
        <div className='rental-name'>
          <h1 className='rental-title'>Cozy loft on the Canal Saint-Martin</h1>
          <h2 className='rental-location'>Paris, Île-de-France</h2>
        </div>

        <div className='host-information'>
          <h3 className='host-name'>
            Alexandre <br></br>Dumas
          </h3>
          <img
            className='host-picture'
            src='https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg'
          />
        </div>
      </div>
      <div className='rental-tags-rating'>
        <div className='tags-container'>
          <Tag />
          <Tag />
          <Tag />
        </div>
        <Rating />
      </div>
      <div className='rental-description-equipments'>
        <Collapse />
        <Collapse />
      </div>
    </div>
  )
}

export default Rental
