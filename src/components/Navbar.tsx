import '../css/navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHorseHead, faUser } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import icon_down from '../assets/down-icon.png';
import { useEffect, useState } from 'react';

const Navbar = () => {
  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }  
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);


  return (
    (windowSize.innerWidth>720 ? <header>
        <div className='first-h'>
          <nav>
            <div className='f-col'>
              <div className='f-insta'>
              <FontAwesomeIcon icon={faInstagram} className='icon-w-17' />
                <Link to="/" className='insta-span'>ippodrom.shymkent</Link>
              </div>
              <div className='f-tele'>
                <FontAwesomeIcon icon={faHorseHead} className='icon-w-17' />
                <Link to="/catalogue" className='tele-span'>Наши Лошади</Link>
              </div>
            </div>
            <div className='s-col'>
              <div className='f-insta'>
                <span className='insta-span'>Русский</span>
                <img src={icon_down} alt="instaIcon" className='insta-icon icon-w-17' />
              </div>
              <div className='f-tele'>
                <Link to='/profile' className='tele-span'>Личный Кабинет</Link>
                <FontAwesomeIcon icon={faUser} className='icon-w-17' />
              </div>
            </div>
          </nav>
        </div>
        <div className='second-h'></div>
    </header> : <>
    
    <header className='header'>
    <div className='f-insta-small'>
              <FontAwesomeIcon icon={faInstagram} className='icon-w-17' />
                <Link to="/" className='insta-span'>ippodrom.shymkent</Link>
              </div>
<input type="checkbox" id="openSideMenu" className="openSideMenu" />
<label htmlFor="openSideMenu" className="menuIconToggle">
  <div className="hamb-line dia p-1"></div>
  <div className="hamb-line hor"></div>
  <div className="hamb-line dia p-2"></div>
</label>
<nav className='nav'>
  <ol>
    <li><Link to="/catalogue">Наши Лошади</Link></li>
    <li><Link to="/profile">Личный Кабинет</Link></li>
    <li><Link to="/order">Корзина</Link></li>
    <li><Link to="/">Выйти</Link></li>
  </ol>
</nav></header>

    </>)
  )
}

export default Navbar