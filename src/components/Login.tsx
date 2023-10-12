import '../css/register.css';
import Input from './Input';
import horse_reg from '../assets/horse-register.png'
import { Link } from 'react-router-dom';
import {useRef, SyntheticEvent } from 'react';
import {
  collection,
  query,
  onSnapshot,
  doc,
  getDoc
} from "firebase/firestore";
import { db } from '../config/firebase';

const Login = () => {

  const loginHandle = (e: SyntheticEvent) => {
    e.preventDefault();
    if(emailRef.current?.value && passwordRef.current?.value){
      const userFRef = collection(db, "users");
      
    }
  }

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  return (
  <main>
    <h1 className='register-title'>Детали заказа...</h1>
    <section className='eight'>
      <h2 className='one-of-eight'>Мини группа, <br />автомобильно-<br />пешеходная</h2>
      <h2 className='one-of-eight'>Размер группы до<br /> 10 человек</h2>
      <h2 className='one-of-eight'>Можно с детьми,<br /> до 3 лет бесплатно</h2>
      <h2 className='one-of-eight'>Бесплатная отмена<br /> за 48 часов</h2>
      <h2 className='one-of-eight'>Длительность:<br /> 4 часа</h2>
      <h2 className='one-of-eight'>Место встречи - фойе<br /> вашего отеля</h2>
      <h2 className='one-of-eight'>Билет <br />в телефоне</h2>
      <h2 className='one-of-eight'>Можно оплатить<br /> на месте</h2>
    </section>
    <section className='register-fs' onSubmit={loginHandle}>
      <form className='register-form'>
      <h1 className='register-title'>Логин</h1>
        <Input label_content='Электронная почта' input_type='email' name='email' ref={emailRef} />
        <Input label_content='Пароль' input_type='password' name='password' ref={passwordRef} />
        <div className='inputbox'>
          <div className='submit-d'>
            <input type="submit" value="Войти" className='create-account-b' />
          </div>
        </div>
        <div className='not-reg-d'>
          <p className='not-reg-text'>Нет аккаунта? <Link to="/register">Создать</Link></p>
        </div>
      </form>
      <img className='reg-img' src={horse_reg} />
    </section>
  </main>
  )
}

export default Login