import Banner from '../components/Banner'
import Card from '../components/Card'
import rentalsList from '../data/rentals.json'

function Home() {
  return (
    <>
      <Banner />
      <div className='rental-card-container'>
        {rentalsList.map((rental) => (
          <Card key={rental.id} cover={rental.cover} title={rental.title} />
        ))}
      </div>
    </>
  )
}

export default Home
