import Banner from '../components/Banner'
import Card from '../components/Card'
import rentalsList from '../data/rentals.json'
import HomeBanner from '../assets/banner-home.png'

function Home() {
  return (
    <>
      <Banner
        bannerSrc={HomeBanner}
        bannerAlt={"Bannière de la page d'accueil de Kasa"}
      />

      <div className='rentals-gallery'>
        {rentalsList.map((rental) => (
          <Card
            key={rental.id}
            cover={rental.cover}
            title={rental.title}
            id={rental.id}
          />
        ))}
      </div>
    </>
  )
}

export default Home
