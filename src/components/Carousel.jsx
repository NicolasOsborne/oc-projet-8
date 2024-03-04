import TestIllustration from '../assets/banner-about.png'

const Carousel = () => {
  return (
    <div className='carousel-container'>
      <img className='carousel-image' src={TestIllustration}></img>
      <i className='fa-solid fa-chevron-left'></i>
      <i className='fa-solid fa-chevron-right'></i>
    </div>
  )
}

export default Carousel
