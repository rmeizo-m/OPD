import React from 'react';
import { Button } from '../../components';

const LoginPage = () => {
  return (
    <div className='main'>
      <div className="signin">
        <form className="form-signin">
          <h1 className="h3 mb-3 font-weight-normal">Авторизация</h1>
          <div className="form-group input-group">
            <input className="form-control" placeholder="Email" />
          </div>
          <div className="form-group input-group">
           <input className="form-control" placeholder="Password" />
          </div>
          <Button type={"test"} style={'btn btn-lg btn-primary btn-block'} children="Войти"/>
        </form>
      </div>
    </div>
  )
}

export default LoginPage