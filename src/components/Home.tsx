import '../css/home.css';
import r_profile from '../assets/r-profile.png';
import l_profile from '../assets/l-profile.png';
import horses from '../assets/horses-services.png'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <main>
      <section className="horse-home">
        <div className='horse-block'>
          <h1 className='home-h h-ippodrom'>Ипподром</h1>
          <h2 className='home-h h-ippodrom-description'>Арендуйте лошадей <br />и наслаждайтесь моментом</h2>
          <div className='two-buttons'>
            <div className='btn-home orange-btn' onClick={() => navigate('/register')} >
            <img src={l_profile} alt="orange_profile" className='btn-icon' />
              <a href="#" className='home-h btn-h'>Создать аккаунт</a>
            </div>
            <div className='btn-home gray-btn' onClick={() => navigate('/catalogue')} >
              <img src={r_profile} alt="orange_profile" className='btn-icon' />
              <a href="#" className='home-h btn-h'>бронь</a>
            </div>
          </div>
        </div>
      </section>
      <section className='text-section'>
        <h1 className='text-section-f'>Залог хорошего настроения и здоровья</h1>
        <h1 className='text-section-s'>Прогулка на красивых и благородных существах дает ощущения свободы и раскованности. Словно куда - то летишь. И все страхи, тревоги, волнения испаряются.</h1>
      </section>
      <section className='services-section'>
        <img src={horses} alt="services" className='horses-img' />
        <div className='overlay-horses'></div>
        <div className='services-content'>
          <h1 className='home-h services-h'>Какие услуги мы предоставляем?</h1>
          <h2 className='home-h services-h-d'>Мы предлагаем вам захватывающую поездку, где вы сможете полюбоваться этими грациозными животными. Ездить верхом приятно и полезно для здоровья, ведь лошадь обладает удивительными целительными способностями, когда она скачет, всаднику передается более 100 двигательных импульсов в минуту.</h2>
          <div className='cards-h'>
            <div className='card-h bg-orange'>
              <h1 className='card-h1'>Конные прогулки</h1>
              <h2 className='card-h2'>Вы получите поток положительных эмоций, глубинную радость жизни и заряд позитива, которые подарит это умное и чуткое животное...</h2>
            </div>
            <div className='card-h bg-white'>
              <h1 className='card-h1'>Конные прогулки</h1>
              <h2 className='card-h2'>Вы получите поток положительных эмоций, глубинную радость жизни и заряд позитива, которые подарит это умное и чуткое животное...</h2>
            </div>
            <div className='card-h bg-white'>
              <h1 className='card-h1'>Поддержка 24/7</h1>
              <h2 className='card-h2'>Опытные инструкторы с необходимым опытом и профессиональными навыками будут сопровождать на протяжении прогулки.</h2>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home