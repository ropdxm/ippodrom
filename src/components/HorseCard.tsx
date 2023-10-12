type HorseCardProps = {
  title: string,
  img: string,
  description: string,
}

const HorseCard = ({title, img, description}: HorseCardProps) => {
  return (
    <div className='horse-card'>
      <h1 className='horse-title'>{title}</h1>
      <img src={img} className='horse-img' alt="horse img" />
      <p className='horse-description'>
          {description}
      </p>
      <div className='horse-wrappper'>
          <input type="button" className='horse-inp' value="Выбрать" />
      </div>
    </div>
  )
}

export default HorseCard