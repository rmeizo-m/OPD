import React from 'react';
import { Button } from '../../components';

const RegistrationPage = () => {
  return (
    <div className="main">
      <div className="signin">
        <form className="form-signin">
          <h1 className="h3 mb-3 font-weight-normal">Регистрация</h1>
          <div className="form-group input-group">
            <input className="form-control" placeholder="Имя"/>
            <input className="form-control" placeholder="Фамилия"/>
          </div>
          <div className="form-group input-group">
            <span className="input-group-addon">@</span>
            <input className="form-control" placeholder="Email" />
          </div>
          <div className="form-group">
            <input className="form-control" placeholder="Пароль"/>
          </div>
          <div className="form-group">
            <input className="form-control" placeholder="Повторите пароль"/>
          </div>
          <div className="text-xs-center">
            <Button style="btn btn-block btn-primary" type="test" children={"Регистрация"} />
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegistrationPage