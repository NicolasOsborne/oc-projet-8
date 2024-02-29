const Card = ({ cover, title }) => {
  return (
    <div className='rental-card'>
      <img
        className='rental-cover'
        src={cover}
        alt="Photo d'illustration de la location"
      ></img>
      <div className='rental-mask'></div>
      <h3 className='rental-title'>{title}</h3>
    </div>
  )
}

export default Card
