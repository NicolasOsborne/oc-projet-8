import Banner from '../components/Banner'
import Collapse from '../components/Collapse'
import AboutBanner from '../assets/banner-about.png'
import aboutInformation from '../data/about.json'

function About() {
  return (
    <>
      <Banner
        bannerSrc={AboutBanner}
        bannerAlt={'Bannière de la page À Propos de Kasa'}
      />
      <div className='collapse-container'>
        {aboutInformation.map((information) => (
          <Collapse
            key={information.id}
            title={information.title}
            content={information.content}
          />
        ))}
      </div>
    </>
  )
}

export default About
