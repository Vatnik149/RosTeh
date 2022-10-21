import React, { Component } from 'react'
import '../Styles/auth.css';

export default class Auth extends Component {
  render() {
    return (
        <div className='auth-content'>
        <div className='auth-form'>
        <form>
        <h4 className='hed'>Вход в аккаунт</h4>
            <label for='name'>ФИО</label>
            <br></br>
            <input type={"text"} placeholder='ФИО' id='name' className='inputForm'></input>
            <br></br>
            <label for='mail'>Телефон/Email</label>
            <br></br>
            <input type={"email"} placeholder='Почта' id='mail' className='inputForm'></input>
            <br></br>
            <label for='password'>Пароль</label>
            <br></br>
            <input type={"password"} placeholder='Пароль' id='password' className='inputForm'></input>
            
        </form>
        </div>
        <h3 className='reg'>Нет аккаунта? <a>Зарегистрируйтесь</a></h3>
        <button type='button' className='button-auth'>Вход</button>
     </div>
     
     
    )
  }
}
