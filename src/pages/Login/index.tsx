import React, { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import Logo from '../../assets/logo.svg';
import { LoginContainer } from './styles';

export function Login() {
  const navigate = useNavigate();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    navigate('/app');
  }

  return (
    <LoginContainer>
      <div className="logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="account-login-container">
        <div className="header">
          <img src={Logo} alt="" />
          <h2>Entrar na sua conta</h2>
          <p>Bem-vindo de volta! Preencha as informações abaixo.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="field-container">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" />
          </div>
          <div className="field-container">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" />
          </div>
          <div className="more-details">
            <div>
              <input id="rememberCheckbox" name="rememberCheckbox" type="checkbox" />
              <label htmlFor="rememberCheckbox">Relembrar por 30 dias</label>
            </div>
            <div>
              <span>Esqueci minha senha</span>
            </div>
          </div>
          <div className="login-buttons">
            <button type="submit">Entrar</button>
            <p>
              Não tem uma conta? <span>Crie uma</span>
            </p>
          </div>
        </form>
      </div>
    </LoginContainer>
  );
}
