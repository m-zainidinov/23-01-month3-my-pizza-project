import React, { useState } from 'react'
import logo from '../assets/img/pizza-logo.svg'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
    };
    
    return (
        <div className="login">
            <div className='login_container'>
                <div className='login__logo'>
                    <img width='38' src={logo} alt="Pizza logo" />
                    <div>
                        <h1>React Pizza</h1>
                        <p>самая вкусная пицца во вселенной</p>
                    </div>
                </div>
            </div>
            <div className="login_area">
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='Имя пользователя'
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Пароль' />
                <button onClick={handleLogin}>Войти</button>
                <span>Еще не зарегистрировались?</span>
            </div>
        </div>    
    )
}

export default Login