import Banner from '../components/Banner'
import Card from '../components/Card'

function Home() {
  return (
    <>
      <Banner />
      <div className='rental-card-container'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  )
}

export default Home
