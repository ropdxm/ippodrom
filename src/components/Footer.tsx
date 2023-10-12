import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import '../css/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
    <section className='footer-s'>
      <div className='f-insta'>
        <FontAwesomeIcon icon={faInstagram} className='icon-w-17' />
        <a href="#" className='insta-span'>ippodrom.shymkent</a>
      </div>
      <div className='f-insta'>
        <FontAwesomeIcon icon={faPhone} className='icon-w-17' />
        <span className='tele-span'>8 747 482 9219</span>
      </div>
      <div className='f-insta'>
        <FontAwesomeIcon icon={faLocationDot} className='icon-w-17' />
        <a href="https://2gis.kz/shymkent/firm/70000001026585069/69.636892%2C42.357347?m=69.638011%2C42.356777%2F16.64" className='tele-span'>Байдыбек би, Кайтпас - 1 м-н</a>
      </div>
    </section>

    </footer>
  )
}

export default Footer