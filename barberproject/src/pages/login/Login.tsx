// import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import './Login.css';


export function Login() {

  // const api = "http://localhost:3333/"
  const history = useHistory();

  async function routeChange(){ 
    history.push("/cadastrobarber");
  }

  return (
    <div className="Login">
      <body className="Login-body">
        <div className="formLogin">
          <h2>
            Barber Shop
          </h2>
          <div className="credenciais">
            <label className="email">
              E-mail
              <input 
                id="inputemail"
                type="text"
                placeholder="DIGITE SEU E-MAIL">
              </input>
            </label>
            <label className="senha">
              Senha
              <input 
                id="inputsenha"
                type="text"
                placeholder="DIGITE SUA SENHA">
              </input>
            </label>
            <div className="botoes">
            <button
              className="button"
              id="buttonentrar"
            >Entrar</button>
            <button
              className="button"
              id="buttoncadastrar"
              onClick={routeChange}
            >Cadastrar</button>
            </div>
          
          </div>
        </div>
      </body>
    </div>
  );
}

export default Login;
