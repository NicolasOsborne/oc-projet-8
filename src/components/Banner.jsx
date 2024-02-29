import HomeBanner from '../assets/banner-home.png'
// import AboutBanner from '../assets/banner-about.png'

const Banner = () => {
  return (
    <div className='banner'>
      <img
        className='banner-image'
        src={HomeBanner}
        alt="Bannière de la page d'accueil de Kasa"
      />
      <div className='banner-mask'>
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
    </div>
  )
}

export default Banner
