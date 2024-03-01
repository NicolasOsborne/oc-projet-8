import Banner from '../components/Banner'
import Collapse from '../components/Collapse'
import AboutBanner from '../assets/banner-about.png'

function About() {
  return (
    <>
      <Banner
        bannerSrc={AboutBanner}
        bannerAlt={'Bannière de la page À Propos de Kasa'}
        bannerTitle1={''}
        bannerTitle2={''}
      />
      <div className='collapse-container'>
        <Collapse />
        <Collapse />
        <Collapse />
        <Collapse />
      </div>
    </>
  )
}

export default About
