import '../css/register.css';
import Input from './Input';
import horse_reg from '../assets/horse-register.png'
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import bcrypt from 'bcryptjs';

const Register = () => {

  const registerHandle = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log('fvdvdfs')
    if(passwordRef.current?.value !== password2Ref.current?.value){
      console.log('dsvmfd')
      setErrMessage("Пароли должны совпадать!")
      return;
    }
    if(emailRef.current?.value && passwordRef.current?.value && phoneRef.current?.value && usernameRef.current?.value) {
      const salt = await bcrypt.genSalt(7);
      const hashedPassword = await bcrypt.hash(passwordRef.current.value, salt);
      await addDoc(collection(db, "users"), {
        username: usernameRef.current.value,
        phone: phoneRef.current.value,
        email: emailRef.current.value,
        password: hashedPassword
      })
      return;
    }
    console.log('dsvmfdfdvdfsvfd')
  }

  const usernameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const password2Ref = useRef<HTMLInputElement>(null);

  const [errMessage, setErrMessage] = useState<string | null>(null);

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
    <section className='register-fs'>
      <form className='register-form' onSubmit={registerHandle}>
        <h1 className='register-title'>Регистрация</h1>
        <Input label_content='Имя пользователя' input_type='text' name='username' ref={usernameRef} />
        <Input label_content='Электронная почта' input_type='email' name='email' ref={emailRef} />
        <Input label_content='Номер телефона' input_type='tel' name='phone' pattern="[0-9]*" ref={phoneRef} />
        <Input label_content='Пароль' input_type='password' name='password' ref={passwordRef} />
        <Input label_content='Повторите пароль' input_type='password' name='password2' ref={password2Ref} />
        {errMessage ? <div className='error-message-reg'>
          <h2>{errMessage}</h2>
        </div> : <></>}
        <div className='inputbox'>
          <div className='submit-d'>
            <input type="submit" value="Создать аккаунт" className='create-account-b' />
          </div>
        </div>
        <div className='not-reg-d'>
          <p className='not-reg-text'>Уже зарегистрировались? <Link to="/login">Войти</Link></p>
        </div>
      </form>
      <img className='reg-img' src={horse_reg} />
    </section>
  </main>
  )
}

export default Register