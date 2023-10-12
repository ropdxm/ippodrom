import '../css/profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faUser, faPhone, faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Profile = () => {
    const [email, setEmail] = useState<string>('example@mail.com');
    return (
    <main className="has-dflex-center ">
        <section>
            <div className="lx-container-70">
            <div className="lx-row">
                <h1 className="title">Редактировать Профиль</h1>
            </div>
            <div className="lx-column">
                <form>
                    <div className="fieldset">
                    <label htmlFor="user-name">Ваше Фамилие и Имя</label>
                    <div className="input-wrapper">
                        <span className="icon"><FontAwesomeIcon icon={faUser} /></span>
                        <input type="text" id="user-name" value="Lorem Ipsum" autoComplete="username" required />
                    </div>
                    </div>
                    <div className="fieldset">
                    <label htmlFor="user-id">Номер телефона</label>
                    <div className="input-wrapper">
                        <span className="icon"><FontAwesomeIcon icon={faPhone} /></span>
                        <input type="text" id="user-id" placeholder='8 719 321 4312' required />
                    </div>
                    <div id="user-id-helper" className="helper"></div>
                    </div>
                    <div className="fieldset">
                    <label htmlFor="email">Электронная почта</label>
                    <div className="input-wrapper">
                        <span className="icon"><FontAwesomeIcon icon={faEnvelope} /></span>
                        <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} autoComplete="username" />
                    </div>
                    <div id="email-helper" className="helper"></div>
                    </div>
                    <div className="fieldset">
                    <label htmlFor="pass">Пароль</label>
                    <div className="input-wrapper">
                        <span className="icon"><FontAwesomeIcon icon={faKey} /></span>
                        <input type="password" id="pass" value="pass123*" autoComplete="current-password" />
                    </div>
                    <div id="pass-helper" className="helper"></div>
                    </div>
                    <div className="actions">
                        <a id="save" className="lx-btn"><FontAwesomeIcon icon={faSave} />&nbsp;&nbsp;Save</a>
                    </div>
                </form>
            </div>
            </div>
        </section>
    </main>
  )
}

export default Profile